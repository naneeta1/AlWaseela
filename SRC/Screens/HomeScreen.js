import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
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

const BankDetails = () => {
const [isLoading, setIsLoading] = useState(false)

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
                    source={require('../Assets/Images/HeaderLogo1.png')}
                    style={{height: '100%', width: '100%'}}
                    resizeMode="contain"
                  />
                </View>
              </View>

              <View style={{width: windowWidth * 0.5}}>
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
                  width: windowWidth * 0.29,
                  justifyContent: 'space-evenly',
                }}>
                <TouchableOpacity activeOpacity={0.8}>
                  <Icon
                    name={'notifications-outline'}
                    as={Ionicons}
                    size={moderateScale(22, 0.3)}
                    color={Color.white}
                  />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}>
                  <Icon
                    name={'search'}
                    as={EvilIcons}
                    size={moderateScale(22, 0.3)}
                    color={Color.white}
                  />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}>
                  <Icon
                    name={'menu'}
                    as={Feather}
                    size={moderateScale(22, 0.3)}
                    color={Color.white}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={{
              width: windowWidth * 0.95,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: moderateScale(10, 0.3),
            }}>
            <CustomText style={{fontSize: moderateScale(18, 0.6)}}>
              Counter Ponts
            </CustomText>
            <CustomText style={{fontSize: moderateScale(15, 0.6)}}>
              See More
            </CustomText>
          </View>

          <View
            style={{
              width: windowWidth * 0.95,
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
                    fontSize: moderateScale(25, 0.6),
                    color: Color.white,
                  }}>
                  LGBTQ
                </CustomText>
                <TouchableOpacity
                  style={{
                    marginTop: moderateScale(5, 0.3),
                    width: windowWidth * 0.2,
                    height: windowHeight * 0.03,
                    justifyContent: 'center',
                    borderRadius: moderateScale(10, 0.6),
                    backgroundColor: '#3E3028',
                  }}>
                  <CustomText
                    style={{
                      textAlign: 'center',
                      fontSize: moderateScale(12, 0.6),
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
                <Icon
                  name={'hearto'}
                  as={AntDesign}
                  size={moderateScale(22, 0.3)}
                  color={Color.white}
                />
                <Icon
                  name={'sharealt'}
                  as={AntDesign}
                  size={moderateScale(22, 0.3)}
                  color={Color.white}
                />
              </View>
            </View>

            <CustomImage
              source={require('../Assets/Images/AntilgbtQbox.png')}
              style={{height: '100%', width: '100%'}}
              resizeMode="contain"
            />
          </View>

          <View
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
                width: windowWidth * 0.37,
                height: windowWidth * 0.37,
                borderRadius: (windowWidth * 0.37) / 2,
                backgroundColor: '#EBEFF4',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  width: windowWidth * 0.29,
                  height: windowWidth * 0.29,
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

            <View
              style={{
                marginTop: moderateScale(10, 0.3),
                justifyContent: 'center',
                alignItems: 'center',
                width: windowWidth * 0.6,
                height: windowHeight * 0.05,
                backgroundColor: '#3E3028',
                borderRadius: moderateScale(50, 0.3),
              }}>
              <CustomText
                style={{color: Color.white, fontSize: moderateScale(13, 0.6)}}>
                Add a Payment Method
              </CustomText>
            </View>
          </View>
          {dataArray?.map((item, index) => {
            return <FundRaiseCard item={item} key={index} />;
          })}

          <CustomButton
            onPress={() => {
                         navigationService.navigate('DonationCategories')
            }}
            text={
              isLoading ? (
                <ActivityIndicator size={'small'} color={Color.white} />
              ) : (
                'See All'
              )
            }
            textColor={Color.white}
            width={windowWidth * 0.75}
            height={windowHeight * 0.06}
            marginTop={moderateScale(15, 0.3)}
            bgColor={Color.themeColor}
            borderRadius={moderateScale(25, 0.3)}
            // isGradient
          />
        </LinearGradient>
      </ScrollView>
    </ScreenBoiler>
  );
};

export default BankDetails;

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
