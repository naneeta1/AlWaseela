import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Switch,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../Components/Header';
import CustomText from '../Components/CustomText';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomStatusBar from '../Components/CustomStatusBar';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import CustomImage from '../Components/CustomImage';
import {Icon, Row} from 'native-base';
import navigationService from '../navigationService';
import ScreenBoiler from '../Components/ScreenBoiler';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FundRaiseCard from '../Components/FundRaiseCard';
import CustomButton from '../Components/CustomButton';
import {SliderBox} from 'react-native-image-slider-box';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RecieptComponent from '../Components/RecieptComponent';

const DonateNow = props => {
  // const item = props?.route?.params?.item;
  // console.log('🚀 ~ file: DonationDetail.js:31 ~ DonationDetail ~ item:', item);
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [enabled, setEnabled] = useState(false);
  const [isVisible, setisVisible] = useState(false);

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
            // alignItems: 'center',
          }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#F6F3F3', '#F6F3F3']}>
          <View
            style={{
              // backgroundColor: 'green'
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CustomText
              style={{
                width: windowWidth,
                paddingHorizontal: moderateScale(20, 0.6),
                color: Color.black,
                fontSize: moderateScale(20, 0.6),
                marginTop: moderateScale(20, 0.3),
              }}
              isBold>
              Quantity
            </CustomText>
            <View
              style={{
                flexDirection: 'row',
                // backgroundColor: 'red',
                width: windowWidth * 0.6,
                justifyContent: 'space-between',
                paddingVertical: moderateScale(10, 0.6),
                alignItems: 'center',
              }}>
              <Icon
                onPress={() => {
                  quantity > 0 && setQuantity(prev => prev - 1);
                }}
                name={'minuscircleo'}
                color={Color.themeColor}
                as={AntDesign}
                size={6}
              />
              <CustomText
                style={{fontSize: moderateScale(20, 0.6), color: Color.black}}>
                {quantity}
              </CustomText>
              <Icon
                onPress={() => {
                  setQuantity(prev => prev + 1);
                }}
                name={'pluscircleo'}
                color={Color.themeColor}
                as={AntDesign}
                size={6}
              />
            </View>
            <CustomText
              style={{
                fontSize: moderateScale(20, 0.6),
                color: Color.black,
                // backgroundColor: 'red',

                width: windowWidth,
                paddingHorizontal: moderateScale(20, 0.6),
              }}
              isBold>
              Total {`2565$`}
            </CustomText>
            <CustomText
              style={{
                fontSize: moderateScale(15, 0.6),
                marginTop: moderateScale(10, 0.6),
                color: Color.black,
                // backgroundColor: 'red',
                width: windowWidth,
                paddingHorizontal: moderateScale(20, 0.6),
              }}
              isBold>
              {`Add Fees (+$0.00)`}
            </CustomText>
            <View
              style={{
                flexDirection: 'row',
                // backgroundColor: 'red',
                width: windowWidth,
                justifyContent: 'space-between',
                paddingHorizontal: moderateScale(20, 0.6),
                alignItems: 'center',
              }}>
              <CustomText
                style={{
                  color: Color.veryLightGray,
                  fontSize: moderateScale(13, 0.6),
                }}>
                Include Processing fee
              </CustomText>
              <Switch
                trackColor={{false: '#767577', true: '#767577'}}
                thumbColor={true ? Color.themeColor : Color.veryLightGray}
                bor
                onValueChange={val => {
                  setEnabled(val);
                }}
                value={enabled}
              />
            </View>
            <CustomText
              style={{
                // backgroundColor: 'red',
                fontSize: moderateScale(12, 0.6),
                color: Color.black,
                width: windowWidth,
                marginTop: moderateScale(10, 0.3),
                paddingHorizontal: moderateScale(20, 0.6),
              }}>
              See more
            </CustomText>
            <View
              style={{
                width: windowWidth,
                paddingHorizontal: moderateScale(10, 0.6),
                paddingVertical: moderateScale(40, 0.6),
                justifyContent: 'space-between',
                // backgroundColor: 'red',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: moderateScale(10, 0.6),
                }}>
                <CustomText
                  style={{
                    fontSize: moderateScale(16, 0.6),
                    color: Color.black,
                    marginRight: moderateScale(5, 0.3),
                  }}
                  isBold>
                  $10
                </CustomText>
                <Icon
                  name={'minuscircleo'}
                  color={Color.themeColor}
                  as={AntDesign}
                  size={6}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <CustomText
                  style={{
                    flexDirection: 'row',
                    fontSize: moderateScale(15, 0.6),
                    // backgroundColor: 'red',
                    width: windowWidth * 0.15,
                  }}>
                  0.00$
                </CustomText>
                <View
                  style={{
                    backgroundColor: Color.themeColor,
                    paddingHorizontal: moderateScale(10, 0.6),
                  }}>
                  <CustomText
                    style={{
                      color: Color.white,
                      fontSize: moderateScale(13, 0.6),
                    }}>
                    {'USD'.toUpperCase()}
                  </CustomText>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: moderateScale(10, 0.6),
                }}>
                <Icon
                  name={'pluscircleo'}
                  color={Color.themeColor}
                  as={AntDesign}
                  size={6}
                />
                <CustomText
                  style={{
                    fontSize: moderateScale(16, 0.6),
                    color: Color.black,
                    marginLeft: moderateScale(5, 0.3),
                  }}
                  isBold>
                  $10
                </CustomText>
              </View>
            </View>
          </View>
          <CustomButton
            // onPress={() => {
            //   navigationService.navigate('DonateNow');
            // }}
            text={'Continue'}
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
            onPress={() => {
              setisVisible(true);
            }}
            isBold
          />
        </LinearGradient>
      </ScrollView>
      <RecieptComponent setIsVisible={setisVisible} isVisible={isVisible} />
    </ScreenBoiler>
  );
};

export default DonateNow;

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
