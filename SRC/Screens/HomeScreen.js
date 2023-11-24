import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  FlatList,
  Platform,
  AppState
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import Header from '../Components/Header';
import CustomText from '../Components/CustomText';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomStatusBar from '../Components/CustomStatusBar';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import CustomImage from '../Components/CustomImage';
import {Icon} from 'native-base';
import navigationService from '../navigationService';
import ScreenBoiler from '../Components/ScreenBoiler';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FundRaiseCard from '../Components/FundRaiseCard';
import CustomButton from '../Components/CustomButton';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useDispatch, useSelector} from 'react-redux';
import {Get} from '../Axios/AxiosInterceptorFunction';
import {useIsFocused} from '@react-navigation/native';
import {mode} from 'native-base/lib/typescript/theme/tools';
import GetLocation from 'react-native-get-location';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import { setLocationEnabled } from '../Store/slices/auth';
import RNSettings from 'react-native-settings';

const BankDetails = ({route}) => {
  const isFocused = useIsFocused();
  const interests = useSelector(state => state.authReducer.interests);
  console.log(
    '🚀 ~ file: HomeScreen.js:37 ~ BankDetails ~ interests:',
    interests,
  );
  const dispatch = useDispatch()
  const category = route?.params?.category;
  console.log(
    '🚀 ~ file: HomeScreen.js:39 ~ BankDetails ~ category:',
    category,
  );
  const token = useSelector(state => state.authReducer.token);
  const userData = useSelector(State => State.commonReducer.userData);
  // console.log("🚀 ~ file: HomeScreen.js:32 ~ BankDetails ~ userData:", userData)
  const refRBSheet = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [nearYou, setNearYou] = useState([]);
  const [newHere, setNewHere] = useState([]);
  const [location, setLocation] = useState({});
  console.log(
    '🚀 ~ file: HomeScreen.js:57 ~ BankDetails ~ location:',
    location,
  );
  // console.log('🚀 ~ file: HomeScreen.js:42 ~ BankDetails ~ nearYou:', nearYou);
  const [fundRaisingNow, setfundRaisingNow] = useState([]);
  const [dynamicinterests, setDynamicInterests] = useState([]);
  const [selectedDynamicinterests, setSelectedDynamicinterests] = useState('');
  const [locationLoader, setLocationLoader] = useState(false);

  const dataArray = [
    {
      category: ' Fundraising Now',
      image: require('../Assets/Images/6.png'),
      tagLine: 'Give Your Qurbani/Udhiya To The Orphan and Needy.',
      fundRaising: true,
      alhamdullilahMoment: false,
      location: 'IEWS DBA Saba Homes',
    },
    {
      category: 'Near You',
      image: require('../Assets/Images/7.png'),
      tagLine:
        'Islamic Academy of Burlington, United States, is a prominent educational institution that provides comprehensive.',
      fundRaising: false,
      alhamdullilahMoment: true,
      location: '',
    },
    {
      category: ' New Here',
      image: require('../Assets/Images/8.png'),
      tagLine: 'Muslim Rose Welfare',
      fundRaising: false,
      alhamdullilahMoment: false,
      location: 'Park Royal, United Kingdom',
    },
    {
      category: 'Need Love',
      image: require('../Assets/Images/7.png'),
      tagLine: 'Muslim Rose Welfare',
      fundRaising: false,
      alhamdullilahMoment: false,
      location: 'Culver City, United States',
    },
  ];

  const getLocation = async () => {
    if (Platform.OS === 'android') {
      setLocationLoader(true);
      RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
        interval: 10000,
        fastInterval: 5000,
      })
        .then(data => {
          GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 60000,
          }).then(location => {
            console.log(
              'this is the main location ======================= >>>>>>',
              location,
            );
            // const {longitude, latitude} = location;
            setLocation(location);
            setLocationLoader(false);
          });

          dispatch(setLocationEnabled(true));
        })
        .catch(err => {
          dispatch(setLocationEnabled(false));
          setLocationLoader(true);
        });
    }
  };

  const getCampaign = async () => {
    const url = `campaigns/${
      selectedDynamicinterests != '' ? selectedDynamicinterests : category
    }/${location?.longitude}/${location?.latitude}`;
    setIsLoading(true);
    const response = await Get(url, token);
    setIsLoading(false);
    if (response != undefined) {
      console.log('response ???fsdffsf?fffsdf  sdff dfs?', response?.data);
      setNearYou(response?.data?.nearyou);
      setfundRaisingNow(response?.data?.funds_now);
      setNewHere(response?.data?.Newhere);
    }
  };

  const getInterest = async () => {
    const url = `Intrest/${location?.longitude}/${location?.latitude}`;
    // setIsLoading(true);
    const response = await Get(url, token);
    // setIsLoading(false);
    if (response != undefined) {
      console.log('response ?????', response?.data);
      setDynamicInterests(response?.data);
    }
    // })
  };

  useEffect(() => {
    if (Object.keys(location).length > 0) {
      getInterest();
    }
  }, [location]);

  useEffect(() => {
    // getLocation();
    getCampaign();
  }, [isFocused, selectedDynamicinterests]);

  const appState = useRef(AppState.currentState);

  const _handleAppStateChange = nextAppState => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('App has come to the foreground!');
      RNSettings.getSetting(RNSettings.LOCATION_SETTING).then(result => {
        if (result == RNSettings.ENABLED) {
          console.log('location is enabled');
          dispatch(setLocationEnabled(true));
          
        } else {
          console.log('location is not enabled');
          dispatch(setLocationEnabled(false));
        }
      });
    } else {
      console.log('App has come to the background!');
    }

    appState.current = nextAppState;
    // setAppStateVisible(appState.current);
    console.log('AppState', appState.current);
  };

  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);




  

  return (
    <ScreenBoiler
      statusBarBackgroundColor={'#3E3028'}
      statusBarContentStyle={'light-content'}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: moderateScale(20, 0.6),
        }}>
        <LinearGradient
          style={{
            width: windowWidth,
            minHeight: windowHeight,
            alignItems: 'center',
          }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#F6F3F3', '#F6F3F3']}>
          <View
            style={{
              width: windowWidth,
              height: windowHeight * 0.07,
              backgroundColor: '#3E3028',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: moderateScale(10, 0.3),
              }}>
              <View
                style={{
                  width: windowWidth * 0.09,
                  height: windowWidth * 0.09,
                  borderRadius: (windowWidth * 0.09) / 2,
                  borderWidth: 1,
                  borderColor: Color.white,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: windowWidth * 0.05,
                    height: windowWidth * 0.05,
                    justifyContent: 'center',
                  }}>
                  <CustomImage
                    source={require('../Assets/Images/logoBig.png')}
                    style={{height: '100%', width: '100%'}}
                    resizeMode="contain"
                  />
                </View>
              </View>

              <View style={{width: windowWidth * 0.5}}>
                <CustomText isBold style={styles.txt1}>
                  {userData?.name}
                </CustomText>
                <CustomText isBold style={styles.txt2}>
                  {userData?.intrest[0]?.name}
                </CustomText>
              </View>

              <View
                style={{
                  // flexDirection: 'row',
                  width: windowWidth * 0.29,
                  alignItems: 'flex-end',
                  // justifyContent: 'space-evenly',
                }}>
                {/* <TouchableOpacity activeOpacity={0.8}> */}
                {/* <Icon
                  name={'notifications-outline'}
                  as={Ionicons}
                  size={moderateScale(22, 0.3)}
                  color={Color.white}
                  onPress={() => {
                    navigationService.navigate('Notification');
                  }}
                /> */}
                {/* </TouchableOpacity> */}
                {/* <TouchableOpacity activeOpacity={0.8}> */}
                {/* <Icon
                    name={'search'}
                    as={EvilIcons}
                    size={moderateScale(22, 0.3)}
                    color={Color.white}
                    onPress={() => {
                      navigationService.navigate('DonationCategories');
                    }}
                  /> */}
                {/* </TouchableOpacity> */}
                <TouchableOpacity activeOpacity={0.8}>
                  <Icon
                    name={'menu'}
                    as={Feather}
                    size={moderateScale(22, 0.3)}
                    color={Color.white}
                    onPress={() => {
                      navigationService.navigate('SideDrawer');
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* <View
            style={{
              width: windowWidth * 0.95,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: moderateScale(10, 0.3),
            }}>
            <CustomText
              style={{fontSize: moderateScale(18, 0.6), color: 'black'}}
              isBold>
              Counter Points
            </CustomText>
            <CustomText
              onPress={() => {
                navigationService.navigate('DonationCategories');
              }}
              style={{fontSize: moderateScale(14, 0.6), color: 'black'}}
              isBold>
              See More
            </CustomText>
          </View> */}

          {/* <View
            style={{
              width: windowWidth * 0.95,
              // backgroundColor:'red',
              height: windowHeight * 0.3,
              marginTop: moderateScale(20, 0.3),
              alignSelf: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: windowWidth * 0.85,
                alignSelf: 'center',
                position: 'absolute',
                bottom: 15,
                zIndex: 1,
              }}>
              <View style={{alignItems: 'center'}}>
                <CustomText
                  style={{
                    fontSize: moderateScale(23, 0.6),
                    color: Color.white,
                  }}>
                  LGBTQ
                </CustomText>
                <TouchableOpacity
                  onPress={() => refRBSheet.current.open()}
                  style={{
                    marginTop: moderateScale(5, 0.3),
                    width: windowWidth * 0.2,
                    height: windowHeight * 0.03,
                    justifyContent: 'center',
                    borderRadius: moderateScale(10, 0.6),
                    backgroundColor: '#3E3028',
                  }}>
                  <CustomText
                    onPress={() => refRBSheet.current.open()}
                    style={{
                      textAlign: 'center',
                      fontSize: moderateScale(10, 0.6),
                      color: Color.white,
                    }}>
                    Buy Ticket
                  </CustomText>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: windowWidth * 0.16,
                  alignItems: 'center',
                  marginTop: moderateScale(20, 0.3),
                }}>
                <TouchableOpacity activeOpacity={0.7}>
                  <Icon
                    name={'hearto'}
                    as={AntDesign}
                    size={moderateScale(22, 0.3)}
                    color={Color.white}
                  />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                  <Icon
                    name={'sharealt'}
                    as={AntDesign}
                    size={moderateScale(22, 0.3)}
                    color={Color.white}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <CustomImage
              source={require('../Assets/Images/AntilgbtQbox.png')}
              style={{
                height: '100%',
                width: '100%',
                borderRadius: moderateScale(10, 0.3),
              }}
              resizeMode="cover"
            />
          </View> */}

          {/* <View
            style={{
              alignItems: 'center',
              width: windowWidth * 0.9,
              height: windowHeight * 0.32,
              borderRadius: moderateScale(22, 0.3),
              backgroundColor: '#fff',
              marginTop: moderateScale(40, 0.3),
            }}>
            <View
              style={{
                marginTop: moderateScale(10, 0.3),
                alignItems: 'center',
                justifyContent: 'center',
                width: windowWidth * 0.32,
                height: windowWidth * 0.32,
                borderRadius: (windowWidth * 0.3) / 2,
                backgroundColor: '#EBEFF4',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  width: windowWidth * 0.24,
                  height: windowWidth * 0.24,
                  marginTop: moderateScale(20, 0.3),
                }}>
                <CustomImage
                  source={require('../Assets/Images/bank.png')}
                  style={{height: '100%', width: '100%'}}
                  resizeMode="contain"
                />
              </View>
            </View>

            <CustomText
              isBold
              style={{
                color: '#8C8D91',
                fontSize: moderateScale(12, 0.6),
                marginTop: moderateScale(10, 0.3),
              }}>
              Add a card or a bank
            </CustomText>

            <CustomButton
              onPress={() => {
                navigationService.navigate('BankDetails');
              }}
              isBold
              text={'Add a Payment Method'}
              textColor={Color.white}
              width={windowWidth * 0.65}
              height={windowHeight * 0.06}
              fontSize={moderateScale(13, 0.6)}
              marginTop={moderateScale(15, 0.3)}
              bgColor={Color.themeColor}
              borderRadius={moderateScale(20, 0.3)}
              alignSelf={'center'}
            />
          </View> */}

          <View
            style={{
              width: windowWidth,
              // height: windowHeight * 0.07,
              //   backgroundColor: 'red',
              marginVertical: moderateScale(10, 0.6),
            }}>
            <CustomText
              isBold
              style={[
                styles.text,
                {
                  marginLeft: moderateScale(10, 0.6),
                  marginBottom: moderateScale(10, 0.3),
                },
              ]}>
              Categories
            </CustomText>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {dynamicinterests.map(item => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedDynamicinterests(item?.name);
                    }}
                    style={{
                      paddingHorizontal: moderateScale(10, 0.6),
                      height: windowHeight * 0.035,
                      //   padding: moderateScale(10, 0.6),
                      marginHorizontal: moderateScale(5, 0.3),
                      borderWidth: 1,
                      justifyContent: 'center',
                      backgroundColor:
                        item?.name == selectedDynamicinterests
                          ? Color.themeColor
                          : 'white',
                      borderColor: Color.themeColor,
                      borderRadius: moderateScale(20, 0.6),
                    }}>
                    <CustomText
                      onPress={() => {
                        setSelectedDynamicinterests(item?.name);
                      }}
                      style={{
                        color:
                          item?.name == selectedDynamicinterests
                            ? 'white'
                            : Color.themeColor,
                        // backgroundColor: 'green',
                        textAlign: 'center',
                      }}>
                      {item?.name}
                    </CustomText>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          {isLoading || locationLoader ? (
            <View
              style={{
                width: windowWidth,
                height: windowHeight * 0.9,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ActivityIndicator size={'large'} color={Color.themeColor} />
            </View>
          ) : (
            <>
              <CustomText isBold style={styles.text}>
                {selectedDynamicinterests ? selectedDynamicinterests : category}
              </CustomText>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={newHere}
                horizontal
                style={{}}
                contentContainerStyle={{
                  paddingBottom: moderateScale(5, 0.6),
                }}
                renderItem={({item, index}) => {
                  return <FundRaiseCard item={item} key={index} />;
                }}
                ListEmptyComponent={() => {
                  return (
                    <View
                      style={{
                        marginTop: moderateScale(10, 0.3),
                        width: windowWidth * 0.95,
                        borderRadius: moderateScale(10, 0.6),
                        height: windowHeight * 0.2,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white',
                      }}>
                      {/* <CustomImage
                      source={require('../Assets/Images/noData.png')}
                      style={{
                        width: windowWidth * 0.4,
                        height: windowHeight * 0.1,
                      }}
                    /> */}
                      {/* <CustomText isBold>Data Not found</CustomText> */}
                    </View>
                  );
                }}
              />

              <View style={styles.thanks}>
                <CustomImage
                  source={require('../Assets/Images/mangives.png')}
                  style={{
                    width: moderateScale(150, 0.6),
                    height: moderateScale(100, 0.6),
                  }}
                />
                <CustomText style={[styles.text1, {width: windowWidth * 0.3}]}>
                  Sieze your alhamdullilah moment
                </CustomText>
              </View>

              <CustomText isBold style={styles.text}>
                FundRaising Now
              </CustomText>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={[fundRaisingNow]}
                horizontal
                style={{}}
                contentContainerStyle={{
                  // backgroundColor : 'red',
                  paddingBottom: moderateScale(5, 0.6),
                  // paddingHorizontal : moderateScale(5,0.6),
                }}
                renderItem={({item, index}) => {
                  // console.log("🚀 ~ file: HomeScreen.js:380 ~ BankDetails ~ item:", index)
                  return <FundRaiseCard item={item} key={index} />;
                }}
                ListEmptyComponent={() => {
                  return (
                    <View
                      style={{
                        marginTop: moderateScale(10, 0.3),
                        width: windowWidth * 0.95,
                        borderRadius: moderateScale(10, 0.6),
                        height: windowHeight * 0.2,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white',
                      }}>
                      {/* <CustomImage
                    source={require('../Assets/Images/noData.png')}
                    style={{
                      width: windowWidth * 0.4,
                      height: windowHeight * 0.1,
                    }}
                  /> */}
                      {/* <CustomText isBold>Data Not found</CustomText> */}
                    </View>
                  );
                }}
              />

              <CustomText isBold style={styles.text}>
                Near You
              </CustomText>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={nearYou}
                horizontal
                style={{}}
                contentContainerStyle={{
                  paddingBottom: moderateScale(5, 0.6),
                }}
                renderItem={({item, index}) => {
                  return <FundRaiseCard item={item} key={index} />;
                }}
                ListEmptyComponent={() => {
                  return (
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        width: windowWidth * 0.95,
                        borderRadius: moderateScale(10, 0.6),
                      }}>
                      <View
                        style={{
                          marginTop: moderateScale(10, 0.3),
                          width: windowWidth * 0.4,
                          borderRadius: moderateScale(10, 0.6),
                          height: windowHeight * 0.16,
                          // justifyContent: 'center',
                          // alignItems: 'center',
                          backgroundColor: 'white',
                        }}>
                        <CustomImage
                          source={require('../Assets/Images/ImpactFul.png')}
                          style={{
                            width: '100%',
                            height: '100%',
                          }}
                          resizeMode={'stretch'}
                        />
                      </View>
                      <CustomText
                        style={{
                          fontSize: moderateScale(17, 0.6),
                          marginTop: moderateScale(10, 0.3),
                        }}
                        isBold>
                        Coming Soon{' '}
                      </CustomText>
                    </View>
                  );
                }}
              />
            </>
          )}

          {/* <CustomButton
              onPress={() => {
                navigationService.navigate('DonationCategories');
              }}
              text={'See All'}
              textColor={Color.white}
              width={windowWidth * 0.75}
              height={windowHeight * 0.06}
              marginTop={moderateScale(15, 0.3)}
              bgColor={Color.themeColor}
              borderRadius={moderateScale(25, 0.3)}
            /> */}
        </LinearGradient>

        {/* <FlatList
          numColumns={3}
          showsVerticalScrollIndicator={false}
          data={dynamicinterests}
          style={{
            marginBottom: moderateScale(20, 0.6),
            width: windowWidth,
          }}
          contentContainerStyle={{
            alignSelf: 'center',
            marginTop: moderateScale(5, 0.3),
          }}
          renderItem={({item, index}) => {
            return (
              <Chunks
                item={item}
                onPress={() => {
                  setSelectedDynamicinterests(item?.name);
                }}
                data={selectedDynamicinterests}
              />
            );
          }}
        /> */}
        {/* RBS SHEET OPEN  */}
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          dragFromTopOnly={true}
          openDuration={250}
          height={windowHeight * 0.4}
          customStyles={{
            container: {
              borderTopEndRadius: moderateScale(30, 0.6),
              borderTopLeftRadius: moderateScale(30, 0.6),
              overflow: 'hidden',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
          }}>
          <View
            style={{
              height: windowHeight * 0.4,
              width: windowWidth,
              // backgroundColor: 'red',
            }}>
            <CustomText
              isBold
              style={{
                marginTop: moderateScale(10, 0.3),
                fontSize: moderateScale(16, 0.6),
                color: Color.black,
                width: windowWidth,
                textAlign: 'center',
              }}>
              SUBSTANCE ABUSE
            </CustomText>
            <CustomText
              numberOfLines={3}
              style={{
                marginTop: moderateScale(20, 0.3),
                fontSize: moderateScale(14, 0.6),
                color: Color.black,
                width: windowWidth * 0.93,
                alignSelf: 'center',
                textAlign: 'center',
              }}>
              Substance abuse come in various forms light, moderate and extreme.
              vapping is no diffrent from sniffing other forms of drugs.
            </CustomText>

            <CustomText
              style={{
                marginTop: moderateScale(30, 0.3),
                fontSize: moderateScale(13, 0.6),
                color: Color.black,
                width: windowWidth,
                textAlign: 'center',
              }}>
              Buy Ticket To help peoples
            </CustomText>

            <CustomButton
              onPress={() => {
                refRBSheet.current.close(),
                  navigationService.navigate('DonateNow');
              }}
              isBold
              text={'Buy Ticket'}
              textColor={Color.white}
              width={windowWidth * 0.85}
              height={windowHeight * 0.06}
              fontSize={moderateScale(13, 0.6)}
              marginTop={moderateScale(30, 0.3)}
              bgColor={Color.themeColor}
              borderRadius={moderateScale(20, 0.3)}
              alignSelf={'center'}
            />
          </View>
        </RBSheet>
        {/* RBS SHEET CLOSED  */}
      </ScrollView>
    </ScreenBoiler>
  );
};

export default BankDetails;

const styles = StyleSheet.create({
  txt1: {
    color: Color.white,
    fontSize: moderateScale(15, 0.6),
  },
  txt2: {
    color: Color.white,
    fontSize: moderateScale(13, 0.6),
  },
  text: {
    width: windowWidth * 0.95,
    textAlign: 'left',
    marginTop: moderateScale(7, 0.3),
    fontSize: moderateScale(14, 0.6),
  },
  text1: {
    marginLeft: moderateScale(20, 0.6),
    width: '80%',
    textAlign: 'left',
    marginBottom: moderateScale(7, 0.3),
    fontSize: moderateScale(15, 0.6),
    lineHeight: moderateScale(17, 0.6),
    color: Color.white,
  },
  thanks: {
    width: '95%',
    height: windowHeight * 0.2,
    backgroundColor: '#3E3028',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20, 0.6),
    alignItems: 'center',
    marginTop: moderateScale(20, 0.3),
    borderRadius: moderateScale(10, 0.6),
  },
});

const Chunks = ({item, onPress, data}) => {
  const [selectedInterest, setSelectedInterest] = useState(false);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: windowWidth * 0.27,
        height: windowHeight * 0.11,
        borderColor: data?.includes(item?.name)
          ? Color.black
          : Color.veryLightGray,
        borderRadius: moderateScale(10, 0.6),
        borderWidth: data?.includes(item?.name) ? 2 : 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: moderateScale(5, 0.6),
        padding: moderateScale(5, 0.6),
      }}>
      {data?.includes(item?.name) && (
        <View style={{position: 'absolute', top: 5, right: 5, zIndex: 1}}>
          <Icon
            name="checkcircleo"
            as={AntDesign}
            size={4}
            color={Color.themeColor}
          />
        </View>
      )}
      <View style={{width: windowWidth * 0.2, height: windowHeight * 0.1}}>
        <CustomImage
          onPress={onPress}
          resizeMode="stretch"
          source={{uri: item?.Image}}
          style={{
            width: '100%',
            height: '100%',
            // backgroundColor : 'red'
            // marginTop: moderateScale(25, 0.3),
          }}
        />
      </View>
      {/* <CustomText style={{ color: Color.black, fontSize: moderateScale(13, .6), textAlign: 'center', marginTop: moderateScale(5, .3) }}>{item?.name}</CustomText> */}
    </TouchableOpacity>
  );
};
