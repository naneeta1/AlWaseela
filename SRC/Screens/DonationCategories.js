import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
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
import TextInputWithTitle from '../Components/TextInputWithTitle';

const DonationCategories = () => {
  const [search, setSearch] = useState('');
  const [selectedTab, setSelectedTab] = useState('All');
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

  const data = ['All', 'Medical', 'Disaster', 'Education'];

  const cardsData = [
    {
      image: require('../Assets/Images/donation1.jpg'),
      title: 'Help overcome malnutrition',
      fund: '$8756',
      desc: 'fund raised from $105566',
      donators: '4471 donators',
      days: '9 Days left',
      percentage:30,
    },
    {
      image: require('../Assets/Images/donation2.png'),
      title: 'Help Cayman Brain Cancer',
      fund: '$9287',
      desc: 'fund raised from $11380',
      donators: '2475 donators',
      days: '16 Days left',
      percentage:70,

    },
    {
      image: require('../Assets/Images/donation3.png'),
      title: 'Help overcome malnutrition',
      fund: '$8756',
      desc: 'fund raised from $105566',
      donators: '4471 donators',
      days: '9 Days left',
      percentage:40,

    },
    {
      image: require('../Assets/Images/donation4.jpg'),
      title: 'Help little Baby to Do stom',
      fund: '$2277',
      desc: 'fund raised from $105566',
      donators: '4471 donators',
      days: '21 Days left',
      percentage:80,

    },
    {
      image: require('../Assets/Images/donation5.jpg'),
      title: 'Help little Baby to Do stom',
      fund: '$2277',
      desc: 'fund raised from $105566',
      donators: '4471 donators',
      days: '7 Days left',
      percentage:60,

    },
  ];

  return (
    <ScreenBoiler
      statusBarBackgroundColor={'white'}
      statusBarContentStyle={'dark-content'}>
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
              //   height: windowHeight * 0.12,
              paddingTop: moderateScale(10, 0.6),
              backgroundColor: '#3E3028',
              paddingBottom: moderateScale(20, 0.6),
              // justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                // backgroundColor:'red',
                width: windowWidth,
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
                    source={require('../Assets/Images/HeaderLogo1.png')}
                    style={{height: '100%', width: '100%'}}
                    resizeMode="contain"
                  />
                </View>
              </View>

              <View style={{width: windowWidth * 0.7}}>
                <CustomText isBold style={styles.txt1}>
                  Abdul Rehman
                </CustomText>
                <CustomText isBold style={styles.txt2}>
                  Spread Goodress
                </CustomText>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  width: windowWidth * 0.1,
                  //   justifyContent: 'space-evenly',
                }}>
                <TouchableOpacity activeOpacity={0.8}>
                  <Icon
                    name={'home'}
                    as={Feather}
                    size={moderateScale(22, 0.3)}
                    color={Color.white}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TextInputWithTitle
              rightIcon
              iconName={'search'}
              iconType={Feather}
              secureText={false}
              placeholder={'I want to help'}
              setText={setSearch}
              value={search}
              viewHeight={0.05}
              viewWidth={0.8}
              inputWidth={0.7}
              border={1}
              backgroundColor={'white'}
              borderColor={Color.veryLightGray}
              marginTop={moderateScale(20, 0.3)}
              // backgroundColor={'black'}
              // color={Color.themeColor}
              placeholderColor={Color.veryLightGray}
              borderRadius={moderateScale(25, 0.3)}
            />

            {/* <View
              style={{
                width: windowWidth * 0.7,
                height: windowHeight * 0.05,
                backgroundColor: 'white',
                borderRadius: moderateScale(20, 0.6),
              }}>


              </View> */}
          </View>

          <View
            style={{
              width: windowWidth,
              height: windowHeight * 0.07,
              //   backgroundColor: 'red',
              marginVertical: moderateScale(10, 0.6),
            }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {data.map(item => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedTab(item);
                    }}
                    style={{
                      width: windowWidth * 0.22,
                      height: windowHeight * 0.035,
                      //   padding: moderateScale(10, 0.6),
                      marginHorizontal: moderateScale(5, 0.3),
                      borderWidth: 1,
                      justifyContent: 'center',
                      backgroundColor:
                        selectedTab == item ? Color.themeColor : 'white',
                      borderColor: Color.themeColor,
                      borderRadius: moderateScale(20, 0.6),
                    }}>
                    <CustomText
                      onPress={() => {
                        setSelectedTab(item);
                      }}
                      style={{
                        color: selectedTab == item ? 'white' : Color.themeColor,
                        // backgroundColor: 'green',
                        textAlign: 'center',
                      }}>
                      {item}
                    </CustomText>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          <View
            style={{
              //   backgroundColor: 'red',
              flexDirection: 'row',
              width: windowWidth,
              justifyContent: 'space-between',
              paddingHorizontal: moderateScale(20, 0.6),
            }}>
            <CustomText
              style={{
                color: Color.veryLightGray,
                fontSize: moderateScale(12, 0.6),
              }}>
              Search Results
            </CustomText>
            <CustomText
              style={{
                color: Color.themeColor,
                fontSize: moderateScale(12, 0.6),
              }}>
              3459 founds
            </CustomText>
          </View>
          <FlatList
            data={cardsData}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return <Card item={item} />;
            }}
          />
        </LinearGradient>
      </ScrollView>
    </ScreenBoiler>
  );
};

export default DonationCategories;

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

const Card = ({item}) => {
  return (
    <TouchableOpacity
    onPress={()=> navigationService.navigate('DonationDetail', {item: item})}
      style={{
        width: windowWidth * 0.95,
        height: windowHeight * 0.14,
        // backgroundColor: 'red',
        flexDirection: 'row',
        borderRadius: moderateScale(10, 0.6),
        marginVertical: moderateScale(10, 0.3),
        borderColor:Color.veryLightGray,
        borderWidth:1,
        overflow: 'hidden',
      }}>
      <View
        style={{
          width: windowWidth * 0.25,
          height: windowHeight * 0.14,
          //   backgroundColor: 'green',
        }}>
        <CustomImage
          style={{width: '100%', height: '100%'}}
          source={item?.image}
          resizeMode={'cover'}
        />
      </View>
      <View
        style={{
          paddingVertical: moderateScale(10, 0.6),
          paddingHorizontal: moderateScale(10, 0.6),
        }}>
        <CustomText
          style={{
            width: windowWidth * 0.6,
            // backgroundColor: 'green',
            color: 'black',
            fontSize: moderateScale(15, 0.6),
          }}>
          {item?.title}
        </CustomText>
        <CustomText
          style={{
            width: windowWidth * 0.65,
            // backgroundColor: 'red',
            fontSize: moderateScale(12, 0.6),
            paddingVertical: moderateScale(5, 0.6),
          }}>
          {item?.fund}
          <CustomText> {item?.desc}</CustomText>
        </CustomText>
        <View
          style={{
            backgroundColor: Color.veryLightGray,
            width: windowWidth * 0.65,
            borderRadius: moderateScale(15, 0.6),
            height: moderateScale(10, 0.6),
          }}>
          <View
            style={{
              backgroundColor: Color.themeColor,
              width: (windowWidth*0.65 * item?.percentage)/100,
              borderRadius: moderateScale(15, 0.6),
              height: moderateScale(10, 0.6),
            }}></View>
        </View>

        <View
          style={{
            width: windowWidth * 0.65,
            flexDirection: 'row',
            // backgroundColor: 'red',
            justifyContent: 'space-between',
          }}>
          <CustomText
            style={{
              width: windowWidth * 0.4,
              fontSize: moderateScale(12, 0.6),
              marginTop: moderateScale(5, 0.3),
              color: Color.black,
            }}>
            {item?.donators}
          </CustomText>
          <CustomText
            style={{
              width: windowWidth * 0.2,
              fontSize: moderateScale(12, 0.6),
              color: Color.black,
            }}>
            {item?.days}
          </CustomText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// const tempData = [...save]
// tempData.push(item?.name)
// setSave(tempData)
// OR
// setSave((data) => [...data, item?.name] )
