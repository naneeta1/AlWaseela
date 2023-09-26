import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
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
import TextInputWithTitle from '../Components/TextInputWithTitle';
import CustomButton from '../Components/CustomButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Notification = () => {
  const navigation = useNavigation();
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
            width: windowWidth,
            height: windowHeight * 0.07,
            backgroundColor: '#3E3028',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: windowWidth * 0.6,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingLeft: moderateScale(10, 0.6),
            }}>
            {/* <TouchableOpacity activeOpacity={0.8}> */}
            <Icon
              name={'left'}
              as={AntDesign}
              size={moderateScale(20, 0.3)}
              color={Color.white}
              onPress={() => {
                navigation.goBack();
              }}
            />
            {/* </TouchableOpacity> */}

            <CustomText
              style={{
                fontSize: moderateScale(15, 0.6),
                color: Color.white,
                textAlign: 'center',
              }}>
              Notification
            </CustomText>
          </View>
        </View>

        <View
          style={{
            width: windowWidth,
            height: windowHeight * 0.7,
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: windowWidth * 0.5,
              height: windowHeight * 0.2,
              alignSelf: 'center',
            }}>
            <CustomImage
              resizeMode="contain"
              source={require('../Assets/Images/Notifyelipse.png')}
              style={{
                width: '100%',
                height: '100%',
              }}
            />

            <View style={{position: 'absolute', top: 55, left: 80}}>
              <Icon
                name={'notifications'}
                as={Ionicons}
                color={Color.white}
                size={moderateScale(40, 0.3)}
              />
            </View>
          </View>

          <CustomText
            style={{
              fontSize: moderateScale(16, 0.6),
              color: '#3E3028',
              textAlign: 'center',
              marginTop: moderateScale(50, 0.3),
            }}>
            You have no notifications
          </CustomText>
        </View>

        <View
          style={{
            width: windowWidth * 0.46,
            height: windowHeight * 0.2,
            position: 'absolute',
            bottom: 0,
            left: -10,
          }}>
          <CustomImage
            resizeMode="contain"
            source={require('../Assets/Images/elipse.png')}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </View>
      </LinearGradient>
    </ScreenBoiler>
  );
};

export default Notification;
