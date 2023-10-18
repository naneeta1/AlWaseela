import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import CustomText from '../Components/CustomText';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomStatusBar from '../Components/CustomStatusBar';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import CustomImage from '../Components/CustomImage';
import navigationService from '../navigationService';
import ScreenBoiler from '../Components/ScreenBoiler';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Icon} from 'native-base';
import CustomButton from '../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const BankDetails = () => {
  const navigation = useNavigation()
  return (
    <ScreenBoiler
      statusBarBackgroundColor={'#3E3028'}
      statusBarContentStyle={'light-content'}>
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
            width: windowWidth * 0.7,
            marginTop: moderateScale(10, 0.3),
            alignSelf: 'flex-end',
            paddingVertical: moderateScale(10, 0.6),
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: moderateScale(10, 0.6),
          }}>
          <CustomText
            style={{
              color: Color.veryLightGray,
              textAlign: 'center',
              fontSize: moderateScale(15, 0.6),
            }}>
            Add Giving Method
          </CustomText>

          <TouchableOpacity onPress={()=>{navigation.goBack()}}
            style={{
              width: windowWidth * 0.05,
              height: windowWidth * 0.05,
              borderRadius: (windowWidth * 0.05) / 2,
              backgroundColor: Color.veryLightGray,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              name={'cross'}
              as={Entypo}
              size={moderateScale(17, 0.3)}
              color={Color.black}
            />
          </TouchableOpacity>
        </View>

        <CustomText
          isBold
          style={{
            width: windowWidth,
            textAlign: 'right',
            paddingHorizontal: moderateScale(20, 0.6),
            marginTop: moderateScale(20, 0.6),
            color: '#3E3028',
            fontSize: moderateScale(14, 0.6),
          }}>
          Add a Newcard
        </CustomText>

        <View
          style={{
            width: windowWidth * 0.95,
            height: windowHeight * 0.33,
            borderRadius: moderateScale(20, 0.3),
            backgroundColor: Color.white,
            marginTop: moderateScale(10, 0.6),
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: windowWidth * 0.85,
              alignSelf: 'center',
              paddingVertical: moderateScale(10, 0.6),
            }}>
            <TouchableOpacity activeOpacity={0.7}>
              <Icon
                name={'lock'}
                as={FontAwesome}
                size={moderateScale(25, 0.3)}
                color={Color.veryLightGray}
              />
            </TouchableOpacity>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: windowWidth * 0.16,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: windowWidth * 0.06,
                  height: windowHeight * 0.05,
                }}>
                <CustomImage
                  resizeMode="contain"
                  source={require('../Assets/Images/paymentScreenIcon.png')}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </View>

              <CustomText
                style={{
                  width: windowWidth * 0.09,
                  color: Color.veryLightGray,
                  fontSize: moderateScale(12, 0.6),
                }}>
                PLAID
              </CustomText>
            </View>
          </View>

          <View
            style={{
              width: windowWidth * 0.27,
              height: windowWidth * 0.27,
              borderRadius: (windowWidth * 0.27) / 2,
              backgroundColor: '#EBEFF4',
              alignSelf: 'center',
              marginTop: moderateScale(-30, 0.3),
              alignItems: 'center',
              // justifyContent:'center'
            }}>
            <View
              style={{
                width: windowWidth * 0.21,
                height: windowHeight * 0.16,
              }}>
              <CustomImage
                resizeMode="contain"
                source={require('../Assets/Images/bank.png')}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </View>
          </View>

          <CustomText
            style={{
              width: windowWidth,
              textAlign: 'center',
              marginTop: moderateScale(10, 0.3),
              color: Color.veryLightGray,
              fontSize: moderateScale(14, 0.6),
            }}>
            Securely transfer from bank
          </CustomText>

          <CustomButton
           isBold
            text={'Add Bank Account'}
            textColor={Color.white}
            width={windowWidth * 0.65}
            height={windowHeight * 0.06}
            fontSize={moderateScale(13, 0.6)}
            marginTop={moderateScale(20, 0.3)}
            bgColor={Color.themeColor}
            borderRadius={moderateScale(20, 0.3)}
            alignSelf={'center'}
          />


        </View>
      </LinearGradient>
    </ScreenBoiler>
  );
};

export default BankDetails;

const styles = StyleSheet.create({});
