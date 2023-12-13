import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SliderBox} from 'react-native-image-slider-box';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {Get} from '../Axios/AxiosInterceptorFunction';
import moment from 'moment';
import Share from 'react-native-share';

const DonationDetail = props => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const token = useSelector(state => state.authReducer.token);

  const item = props?.route?.params?.item;
  // console.log('🚀 ~ file: DonationDetail.js:31 ~ Donatf dsfdsf fionDf dsfsdf  e das  fda tail ~ item:', item);
  const [isLoading, setIsLoading] = useState(false);
  const [detail, setDetail] = useState({});
  console.log("🚀 ~ file: DonationDetail.js:44 ~ DonationDetail ~ detail:", detail?.url)

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
  const images = [
    require('../Assets/Images/donation1.jpg'),
    require('../Assets/Images/donation2.png'),
    require('../Assets/Images/donation3.png'),
    require('../Assets/Images/donation4.jpg'),
    require('../Assets/Images/donation5.jpg'),
  ];


  const fun = async () => {
    const shareResponse = await Share.open({url : detail?.url});
    console.log("🚀 ~ file: DonationDetail.js:91 ~ fun ~ shareResponse:", shareResponse)
  };
  const getCampaign = async () => {
    const url = `campaigns_detail/${item?.id}`;
    setIsLoading(true);
    const response = await Get(url, token);
    setIsLoading(false);
    if (response != undefined) {
      console.log(
        'response ???fsdffsf?fffsffdfdsf f sdffhf  ddf  sdff dfs?',
        response?.data,
      );
      // console.log()
      setDetail(response?.data);
    }
  };

  useEffect(() => {
    getCampaign();
  }, [isFocused]);

  return (
    <ScreenBoiler
      statusBarBackgroundColor={'white'}
      statusBarContentStyle={'dark-content'}>
      {isLoading ? (
        <View
          style={{
            width: windowWidth,
            height: windowHeight,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator color={Color.themeColor} size={'large'} />
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: moderateScale(20, 0.6),
          }}>
          <LinearGradient
            style={{
              width: windowWidth,
              minHeight: windowHeight,
              // alignItems: 'center',
            }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#F6F3F3', '#F6F3F3']}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: moderateScale(20, 0.6),
                paddingHorizontal: moderateScale(5, 0.6),
                width: windowWidth,
                position: 'absolute',
                top: 0,
                zIndex: 1,
              }}>
              <Icon
                name={'arrow-back'}
                as={Ionicons}
                color={Color.black}
                size={6}
                onPress={() => {
                  navigation.goBack();
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  // width: windowWidth * 0.21,
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    // width: windowWidth * 0.1,
                    // height: windowHeight * 0.02,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    padding: moderateScale(5, 0.6),
                    borderRadius: moderateScale(10, 0.6),
                  }}>
                  <Icon
                    name={'sharealt'}
                    as={AntDesign}
                    color={Color.black}
                    size={6}
                    onPress={()=>{
                      fun()
                    }}
                  />
                </View>
                {/* <View
                  style={{
                    // width: windowWidth * 0.1,
                    // height: windowHeight * 0.02,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    padding: moderateScale(5, 0.6),
                    borderRadius: moderateScale(10, 0.6),
                  }}>
                  <Icon
                    name={'hearto'}
                    as={AntDesign}
                    color={Color.black}
                    size={6}
                  />
                </View> */}
              </View>
            </View>

            <SliderBox
              images={[detail?.image]}
              sliderBoxHeight={250}
              onCurrentImagePressed={index =>
                console.warn(`image ${index} pressed`)
              }
              dotColor={Color.themeColor}
              inactiveDotColor="#90A4AE"
            />

            <View
              style={{
                // backgroundColor:'green',
                alignItems: 'center',
                paddingVertical: moderateScale(10, 0.6),
                paddingHorizontal: moderateScale(10, 0.6),
              }}>
              <CustomText
                numberOfLines={2}
                style={{
                  width: windowWidth * 0.9,
                  // backgroundColor: 'green',
                  color: 'black',
                  fontSize: moderateScale(20, 0.6),
                }}
                isBold>
                {detail?.tagLine}
              </CustomText>
              {
                item?.type == 'variable' ?
                <>
              <CustomText
                style={{
                  width: windowWidth * 0.9,
                  marginTop: moderateScale(10, 0.3),
                  // backgroundColor: 'red',
                  fontSize: moderateScale(14, 0.6),
                  paddingVertical: moderateScale(5, 0.6),
                }}
                isBold>
                {`PKR${detail?.collected} Fund raised from PKR${detail?.target}`}
              </CustomText>
              <View
                style={{
                  backgroundColor: Color.veryLightGray,
                  width: windowWidth * 0.9,
                  borderRadius: moderateScale(15, 0.6),
                  height: moderateScale(10, 0.6),
                }}>
                <View
                  style={{
                    backgroundColor: Color.themeColor,
                    width: `${(detail?.collected / detail?.target) * 100}%`,
                    borderRadius: moderateScale(15, 0.6),
                    height: moderateScale(10, 0.6),
                  }}
                />
              </View>

              <View
                style={{
                  width: windowWidth * 0.9,
                  flexDirection: 'row',
                  // backgroundColor: 'red',
                  paddingHorizontal: moderateScale(5, 0.6),
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <CustomText
                  style={{
                    width: windowWidth * 0.4,
                    fontSize: moderateScale(15, 0.6),
                    marginTop: moderateScale(5, 0.3),
                    color: Color.black,
                  }}
                  isBold>
                  {detail?.donators} Donors
                </CustomText>
                <CustomText
                  style={{
                    // backgroundColor: 'orange',
                    // width: windowWidth * 0.2,
                    fontSize: moderateScale(13, 0.6),
                    color: Color.black,
                  }}>
                  {moment(detail?.expire_date).diff(moment(), 'days')} days left
                </CustomText>
              </View>
                </>
                :
                <>
                  <View
            style={{
              width: windowWidth * 0.9,
              height: moderateScale(10, 0.6),
              alignSelf: 'center',
              backgroundColor: '#DDDDDD',
              marginTop: moderateScale(10, 0.3),
              borderRadius: moderateScale(20, 0.6),
            }}>
            <View
              style={{
                width: `${(item?.ticket_counter / item?.ticket_tickets) * 100}%` ,
                height: moderateScale(10, 0.6),

                backgroundColor: '#3E3028',

                borderRadius: moderateScale(20, 0.6),
              }}></View>
          </View>
           <View
           style={{
             width: windowWidth * 0.9,
             justifyContent : 'space-between',
             flexDirection : 'row',
            //  height: moderateScale(10, 0.6),
             alignSelf: 'center',marginBottom :10,
           }}>
              <CustomText
                  style={{
                    width: windowWidth * 0.4,
                    fontSize: moderateScale(12, 0.6),
                    // marginTop: moderateScale(5, 0.3),
                    color: Color.black,
                  }}
                  isBold
                  >
                  {`Sold tickets ${item?.ticket_counter}` }    
                </CustomText>
                <CustomText
                  style={{
                    // width: windowWidth * 0.4,
                    fontSize: moderateScale(12, 0.6),
                    // marginTop: moderateScale(5, 0.3),
                    color: Color.black,
                  }}
                  isBold>
                  {`total tickets ${item?.ticket_tickets}` } </CustomText>
           </View>
                <CustomText
                style={{
                  width: windowWidth * 0.9,
                  marginTop: moderateScale(10, 0.3),
                  // backgroundColor: 'red',
                  fontSize: moderateScale(14, 0.6),
                  paddingVertical: moderateScale(5, 0.6),
                }}
                isBold>
                {`PKR${detail?.fix_amount} will be charged for buying ticket`}
              </CustomText>
                </>
              }
              <View
                style={{
                  width: windowWidth,
                  height: windowHeight * 0.1,
                  flexDirection: 'row',
                  // backgroundColor:'green',
                  paddingVertical: moderateScale(10, 0.6),
                  paddingHorizontal: moderateScale(20, 0.6),
                  justifyContent: 'space-between',
                  alignItems: 'center',

                  // borderColor: Color.themeColor,
                  // borderWidth: 1,
                }}>
                <View
                  style={{
                    // width: windowWidth * 0.2,
                    height: windowHeight * 0.04,
                    paddingHorizontal : moderateScale(5,0.6),
                    // flexDirection: 'row',
                    borderColor: Color.themeColor,
                    borderWidth: 1,
                    borderRadius: moderateScale(20, 0.6),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <CustomText
                    style={{
                      fontSize: moderateScale(12, 0.6),
                      color: Color.black,
                    }}>
                    {item?.category}
                  </CustomText>
                </View>
                <CustomText
                  style={{
                    fontSize: moderateScale(14, 0.6),
                    color: Color.black,
                  }}>
                  {detail?.donators} Donors
                </CustomText>
              </View>

              {/* <View
              style={{
                width: windowWidth,
                // height: windowHeight * 0.08,
                flexDirection: 'row',
                alignItems : 'center',
                // backgroundColor: 'purple',
                paddingHorizontal: moderateScale(20, 0.6),
              }}>
              <View
                style={{
                  width: windowWidth * 0.1,
                  height: windowWidth * 0.1,
                  borderRadius: (windowWidth * 0.1) / 2,
                  padding: moderateScale(5, 0.6),
                  backgroundColor: 'rgba(62, 48, 40, 0.50)',
                  //  backgroundColor:'green',
                }}>
                <CustomImage
                  style={{width: '100%', height: '100%'}}
                  source={require('../Assets/Images/hospital.png')}
                  resizeMode={'cover'}
                />
              </View>
              <View
                style={{
                  // backgroundColor: 'red',
                  paddingHorizontal: moderateScale(20, 0.6),
                  width: windowWidth * 0.6,

                }}>
                <CustomText
                  style={{fontSize: moderateScale(15, 0.6), color: 'black'}}>
                  Healthy Home
                </CustomText>
                <View style={{flexDirection: 'row' , alignItems : 'center'}}>
                  <CustomText>verified</CustomText>
                  <Icon
                    name={'verified'}
                    as={MaterialIcons}
                    size={4}
                    color={Color.black}
                  />
                </View>
              </View>
              <View
                style={{
                  width: windowWidth * 0.2,
                  height: windowHeight * 0.04,
                  // flexDirection: 'row',
                  borderColor: Color.themeColor,
                  borderWidth: 1,
                  borderRadius: moderateScale(20, 0.6),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <CustomText
                  style={{
                    fontSize: moderateScale(12, 0.6),
                    color: Color.black,
                  }}>
                  Follow
                </CustomText>
              </View>
            </View> */}
              <View style={{paddingHorizontal: moderateScale(20, 0.6)}}>
                <CustomText
                  style={{
                    width: windowWidth * 0.9,
                    color: 'black',
                    fontSize: moderateScale(20, 0.6),
                  }}
                  isBold>
                  Story
                </CustomText>
                <CustomText
                  style={{
                    width: windowWidth * 0.9,
                    color: 'black',
                    fontSize: moderateScale(12, 0.6),
                    marginTop: moderateScale(10, 0.6),
                    lineHeight: moderateScale(17, 0.6),
                  }}>{detail?.description}</CustomText>
              </View>
            </View>
              <View style={{
                position : 'absolute',
                bottom : moderateScale(50,0.6),
                alignSelf : 'center'
              }}>

             
              <CustomButton
                onPress={() => {
                  navigationService.navigate('DonateNowpage',{campaignData : detail});
                }}
                text={   item?.type == 'variable' ? 'Donate Now' : 'Buy Ticket'}
                textColor={Color.white}
                // iconName={'pencil'}
                // iconType={Entypo}
                width={windowWidth * 0.7}
                height={windowHeight * 0.06}
                fontSize={moderateScale(13, 0.6)}
                marginTop={moderateScale(20, 0.3)}
                bgColor={Color.themeColor}
                borderRadius={moderateScale(20, 0.3)}
                iconStyle={{
                  fontSize: moderateScale(14, 0.6),
                }}
                marginRight={moderateScale(5, 0.3)}
                isBold
              />
               </View>
          </LinearGradient>
        </ScrollView>
      )}
    </ScreenBoiler>
  );
};

export default DonationDetail;

const styles = StyleSheet.create({
  txt1: {
    color: Color.white,
    fontSize: moderateScale(18, 0.6),
  },
  txt2: {
    color: Color.white,
    fontSize: moderateScale(15, 0.6),
  },
});
