import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
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
import TextInputWithTitle from '../Components/TextInputWithTitle';
import CustomButton from '../Components/CustomButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setUserLogoutAuth } from '../Store/slices/auth';

const SettingScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const data = [
    {
      name: 'Profile',
        onPress: () => {
          navigation.navigate('UserProfile');
        },
      iconName: 'user-circle-o',
      iconType: FontAwesome,
    },

    {
      name: 'Password ',
        onPress: () => {
          navigation.navigate('UpdatePasswordScreen');
        },
      iconName: 'vpn-key',
      iconType: MaterialIcons,
    },

    {
      name: 'Preferences',
      //   onPress: () => {
      //     navigation.navigate('AssetScreen');
      //   },
      iconName: 'room-preferences',
      iconType: MaterialIcons,
    },
    {
      name: 'payment',
      //   onPress: () => {
      //     navigation.navigate('SearchScreen');
      //   },
      iconName: 'payment',
      iconType: MaterialIcons,
    },
    {
      name: 'Billing Address',
      //   onPress: () => {
      //     navigation.navigate('NotepadDesign');
      //   },
      iconName: 'home',
      iconType: AntDesign,
    },
    {
      name: 'Log out',
        onPress: () => {
          dispatch(setUserLogoutAuth());
          // dispatch(setUserLogOut());

        },
      iconName: 'logout',
      iconType: MaterialIcons,
    },
  ];

  return (
    <ScreenBoiler
      statusBarBackgroundColor={'#3E3028'}
      statusBarContentStyle={'dark-content'}>
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
              width: windowWidth * 0.95,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'center',
            }}>
        
              <Icon
                name={'left'}
                as={AntDesign}
                size={moderateScale(20, 0.3)}
                color={Color.white}
                onPress={()=>{
                  navigation.goBack()
                }}
              />
      

            <CustomText
              style={{fontSize: moderateScale(15, 0.6), color: Color.white}}>
              Settings
            </CustomText>

            <View
              style={{width: windowWidth * 0.08, height: windowHeight * 0.04}}>
              <CustomImage
                onPress={()=>{
                  navigation.goBack()
                }}
                resizeMode="contain"
                source={require('../Assets/Images/settingmenu.png')}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </View>
          </View>
        </View>


  <View style={{marginTop:moderateScale(20,0.3)}}>
        {data.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={item?.onPress}
            style={{
              width: windowWidth * 0.9,
              paddingVertical: moderateScale(5, 0.6),
              paddingHorizontal: moderateScale(5, 0.6),
              borderBottomWidth: 0.5,
              borderColor: Color.black,
              margin: moderateScale(15, 0.3),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: windowWidth * 0.11,
                height: windowWidth * 0.11,
                borderRadius: (windowWidth * 0.11) / 2,
                backgroundColor:'#3E3028',
                justifyContent:'center',
                alignItems:'center'
              }}>
              <Icon
                name={item.iconName}
                as={item.iconType}
                style={styles.icon2}
                color={Color.white}
                size={moderateScale(23, 0.3)}
              />
            </View>

            <CustomText
              style={{
                width: windowWidth * 0.65,
                // backgroundColor:'blue',
                fontSize: moderateScale(14, 0.6),
                color: Color.black,
                textAlign: 'left',
              }}>
              {item.name}
            </CustomText>

            <Icon
              name={'right'}
              as={AntDesign}
              color={Color.black}
              size={moderateScale(18, 0.3)}
            />
          </TouchableOpacity>
        ))}
  </View>
        <View
          style={{
            width: windowWidth * 0.46,
            height: windowHeight * 0.2,
            position: 'absolute',
            bottom: 0,
            left: -30,
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

export default SettingScreen;

const styles = StyleSheet.create({});
