import {View, Text, StyleSheet, TouchableOpacity, ToastAndroid, Platform, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import Header from '../Components/Header';
import CustomText from '../Components/CustomText';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
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
import { useSelector } from 'react-redux';
import { Post } from '../Axios/AxiosInterceptorFunction';

const UpdatePasswordScreen = () => {
  const navigation = useNavigation()
  const token = useSelector(state => state.authReducer.token);
  const navigaiton = useNavigation();
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState(''); 
  const [isLoading, setIsLoading] = useState(false);

  const handleChangePassword = async () => {
    const url = 'update-password';

    const body = {
      current_password: password,
      new_password: newPassword,
     
    };

    for (let key in body) {
      if (body[key] == '') {
        return Platform.OS == 'android'
          ? ToastAndroid.show(`${key} is empty`, ToastAndroid.SHORT)
          : alert(`${key} is empty`);
      }
    }



    setIsLoading(true);
    const response = await Post(url, body, apiHeader(token));
    setIsLoading(false);
    
    // console.log("🚀 ~ file: ChangePassword.js:69 ~ handleChangePassword ~ response:", response?.data)
    
    if (response != undefined) {
      Platform.OS == 'android'
        ? ToastAndroid.show(`Password has been changed successfully`, ToastAndroid.SHORT)
        : alert(`Password has been changed successfully`);
        navigation.goBack();
    }
  };
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
            <Icon
              name={'left'}
              as={AntDesign}
              size={moderateScale(20, 0.3)}
              color={Color.white}
              onPress={() => {
                navigaiton.goBack();
              }}
            />

            <CustomText
              style={{
                fontSize: moderateScale(15, 0.6),
                color: Color.white,
                textAlign: 'center',
              }}>
              Update password
            </CustomText>
          </View>
        </View>

        <TextInputWithTitle
          secureText={true}
          titleText={'Email'}
          placeholder={'Current Password'}
          setText={setPassword}
          value={password}
          borderBottom={1}
          viewHeight={0.07}
          viewWidth={0.9}
          inputWidth={0.8}
          borderColor={'#000'}
          marginTop={moderateScale(15, 0.3)}
          color={Color.black}
          placeholderColor={Color.black}
        />

        <TextInputWithTitle
          secureText={true}
          titleText={'Email'}
          placeholder={'New Password'}
          setText={setNewPassword}
          value={newPassword}
          borderBottom={1}
          viewHeight={0.07}
          viewWidth={0.9}
          inputWidth={0.8}
          borderColor={'#000'}
          marginTop={moderateScale(15, 0.3)}
          color={Color.black}
          placeholderColor={Color.black}
        />

      

        <View style={{position:'absolute',bottom:100}}>
          <CustomButton
            onPress={() => {
             
              handleChangePassword()
            }
            }
            text={
              isLoading ? (
                <ActivityIndicator color={'white'} size={'small'} />
              ) : (
              'Update Password')}
            textColor={Color.white}
            // iconName={'pencil'}
            // iconType={Entypo}
            width={windowWidth * 0.9}
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
    </ScreenBoiler>
  );
};

export default UpdatePasswordScreen;
