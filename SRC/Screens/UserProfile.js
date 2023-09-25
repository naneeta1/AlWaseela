import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
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
import {SliderBox} from 'react-native-image-slider-box';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const UserProfile = props => {
  const item = props?.route?.params?.item;
  console.log('🚀 ~ file: DonationDetail.js:31 ~ DonationDetail ~ item:', item);
  const [isLoading, setIsLoading] = useState(false);
  const options = [
    {
      title: 'amount',
      iconName: require('../Assets/Images/money.png'),
      amount: 0,
    },
    {
      title: 'Donations',
      iconName: require('../Assets/Images/save-money.png'),
      amount: 0,
    },
    {
      title: 'Recurring',
      iconName: require('../Assets/Images/schedule.png'),
      amount: 0,
    },
    {
      title: 'Honoree',
      iconName: require('../Assets/Images/black-ribbon.png'),
      amount: 0,
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
          backgroundColor : 'white'
        }}>
        <LinearGradient
          style={{
            width: windowWidth,
            minHeight: windowHeight,
            alignItems: 'center',
          }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['white', 'white']}>
          <View
            style={{
              backgroundColor: Color.themeColor,
              width: windowWidth,
              height: windowHeight * 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: windowWidth * 0.12,
                backgroundColor: Color.themeColor,
                height: windowWidth * 0.12,
                borderRadius: (windowWidth * 0.12) / 2,
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

            <View
              style={{
                // backgroundColor: 'red',
                paddingVertical: moderateScale(10, 0.6),
              }}>
              <CustomText isBold style={styles.txt1}>
                Abdul Rehman
              </CustomText>
              <CustomText isBold style={styles.txt2}>
                Your Impact
              </CustomText>
            </View>
          </View>
          <View
            style={{
              marginTop: moderateScale(10, 0.3),
              width: windowWidth * 0.9,
              //   backgroundColor: 'red',
              backgroundColor: 'white',
              alignItems: 'center',
              borderRadius: moderateScale(20, 0.6),
              // height: moderateScale(40, 0.6),
              shadowColor: Color.themeColor,
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.32,
              shadowRadius: 5.46,
              elevation: 9,
              paddingVertical : moderateScale(5,0.6)
            }}>
            <View
              style={{
                marginTop: moderateScale(6, 0.3),
                width: windowWidth * 0.83,
                backgroundColor: '#EEEEEE',
                borderRadius: moderateScale(20, 0.6),
                height: moderateScale(5, 0.6),
              }}></View>
            <View
              style={{
                flexDirection: 'row',
                // paddingVertical: moderateScale(5, 0.6),
                // backgroundColor: 'red',
                width: windowWidth * 0.83,
                justifyContent: 'space-between',
                alignItems : 'center'
              }}>
              <View style={{justifyContent: 'center', flexDirection: 'row', marginTop:moderateScale(5,.3)}}>
                <Icon
                  name={'coins'}
                  as={FontAwesome5}
                  size={5}
                  color={Color.yellow}
                />
                <CustomText
                  style={{
                    color: 'black',
                    fontSize: moderateScale(13, 0.6),
                    marginLeft: moderateScale(5, 0.6),
                  }}>
                  0
                </CustomText>
              </View>
              <CustomText
                style={{color: 'black', fontSize: moderateScale(13, 0.6)}}
                isBold>
                Set Goal
              </CustomText>
            </View>
          </View>
          <View
            style={{
              marginTop: moderateScale(20, 0.3),
              width: windowWidth * 0.9,
              // backgroundColor: 'red',
              borderColor: Color.veryLightGray,
              borderWidth: 1,
              // backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: moderateScale(20, 0.6),
              height: moderateScale(40, 0.6),
              // shadowColor: Color.themeColor,
              // shadowOffset: {
              //   width: 0,
              //   height: 4,
              // },
              // shadowOpacity: 0.32,
              // shadowRadius: 5.46,
              // elevation: 9,
            }}>
            <CustomText
              style={{
                // backgroundColor:'red',
                textAlign: 'center',
                width: windowWidth * 0.7,
                color: Color.black,
                fontSize: moderateScale(15, 0.6),
              }}>
              My Fundrasing
            </CustomText>
          </View>
          <View
            style={{
              //   backgroundColor: 'red',
              height: windowHeight * 0.25,
              width: windowWidth,
              paddingHorizontal: moderateScale(20, 0.6),
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {options.map(item => {
              return (
                <>
                  <View style={{paddingVertical: moderateScale(10, 0.6)}}>
                    <View
                      style={{
                        width: windowWidth * 0.4,
                        height: windowHeight * 0.09,
                        // backgroundColor: 'red',
                        paddingHorizontal: moderateScale(5, 0.6),
                        marginHorizontal: moderateScale(5, 0.3),
                        marginVertical: moderateScale(5, 0.3),

                        // backgroundColor: 'green',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          width: moderateScale(25, 0.6),
                          height: moderateScale(25, 0.6),
                        }}>
                        <CustomImage
                          source={item?.iconName}
                          style={{width: '100%', height: '100%'}}
                        />
                      </View>
                      <View>
                        <CustomText
                        isBold
                          style={{
                            width: windowWidth * 0.2,
                            color: Color.black,
                            fontSize: moderateScale(15, 0.6),
                            textAlign: 'right',
                          }}>
                          {item?.amount}
                        </CustomText>
                        <CustomText
                          style={{
                            width: windowWidth * 0.2,
                            color: Color.veryLightGray,
                            fontSize: moderateScale(12, 0.6),
                            textAlign: 'right',
                          }}>
                          {item?.title}
                        </CustomText>
                      </View>
                    </View>
                    <View
                      style={{
                        width: windowWidth * 0.4,
                        backgroundColor: Color.veryLightGray,
                        height: moderateScale(1, 0.6),
                      }}></View>
                  </View>
                </>
              );
            })}
          </View>

          <View
            style={{
              paddingVertical: moderateScale(10, 0.6),
              width: windowWidth,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <CustomText
              style={{
                color: Color.black,
                // backgroundColor: 'red',
                width: windowWidth,
                fontSize: moderateScale(17, 0.6),
                paddingHorizontal: moderateScale(20, 0.6),
              }}
              isBold>
              Recent Activity
            </CustomText>
            <View
              style={{
                width: windowWidth * 0.9,
                marginTop: moderateScale(10, 0.3),
                backgroundColor: 'white',
                flexDirection: 'row',
                height: windowHeight * 0.2,
                alignItems: 'center',
                // justifyContent : 'space-evenly',
                paddingLeft : moderateScale(30,.6),
                borderRadius: moderateScale(20, 0.6),
                shadowColor: Color.themeColor,
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,
                elevation: 9,
              }}>
              <View
                style={{
                  width: windowWidth * 0.1,
                  height: windowWidth * 0.1,
                  justifyContent: 'center',
                  marginRight : moderateScale(20,0.6),
                }}>
                <CustomImage
                  source={require('../Assets/Images/logoBig.png')}
                  style={{height: '100%', width: '100%'}}
                  resizeMode="contain"
                />
              </View>
              <View>
              <CustomText
                style={{
                //   width: windowWidth * 0.5,
                  color: Color.black,
                  fontSize: moderateScale(15, 0.6),
                //   backgroundColor: 'red',
                }}
                isBold>
                Abdul
              </CustomText>
              <CustomText style={{
                //   width: windowWidth * 0.5,
                  color: Color.black,
                  fontSize: moderateScale(13, 0.6),
                //   backgroundColor: 'red',
                }}>Make your first Donation</CustomText>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </ScreenBoiler>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  txt1: {
    color: Color.white,
    fontSize: moderateScale(18, 0.6),
  },
  txt2: {
    color: Color.white,
    fontSize: moderateScale(15, 0.6),
    textAlign: 'center',
  },
});
