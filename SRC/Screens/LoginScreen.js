import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import Color from '../Assets/Utilities/Color';
import CustomImage from '../Components/CustomImage';
import { apiHeader, windowHeight, windowWidth } from '../Utillity/utils';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';
import ScreenBoiler from '../Components/ScreenBoiler';
import LinearGradient from 'react-native-linear-gradient';
import { ActivityIndicator, Platform, ToastAndroid, View } from 'react-native';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import navigationService from '../navigationService';
import { useDispatch } from 'react-redux';
import CardContainer from '../Components/CardContainer';
import { SetUserRole, setUserInterests, setUserToken } from '../Store/slices/auth';
import { Post } from '../Axios/AxiosInterceptorFunction';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { setUserData } from '../Store/slices/common';
import DropDownSingleSelect from '../Components/DropDownSingleSelect';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = (props) => {

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation()


  const dispatch = useDispatch();

  const LoginUser = async () => {
    if (email == '' && password == '') {
      return Platform.OS == 'android'
        ? ToastAndroid.show(
            'password and email is required',
            ToastAndroid.SHORT,
          )
        : alert('password and email is required');
    } else if (email == '') {
      return Platform.OS == 'android'
        ? ToastAndroid.show('email is required', ToastAndroid.SHORT)
        : alert('email is required');
    } else if (password == '') {
      return Platform.OS == 'android'
        ? ToastAndroid.show('password is required', ToastAndroid.SHORT)
        : alert('password is required');
    }
   

    const url = 'login';
    
    const body = {email: email.trim(), password: password};
    setIsLoading(true);
    const response = await Post(url, body, apiHeader());
    setIsLoading(false);

    // console.log('LoginResponse============>>>>>>>', response?.data);
    if (response != undefined) {
     console.log("Login Testing =============>>>>>>",response?.data)
     dispatch(setUserData(response?.data?.user));
      dispatch(setUserInterests(response?.data?.user?.intrest))
      dispatch(setUserToken({token: response?.data?.token}));


    }
    // dispatch(setUserData(response?.data?.user_info));
      // dispatch(setUserToken({token: 'dfhksdjlsk'}));
      // dispatch(SetUserRole('customer'))

  };

  return (
    <ScreenBoiler
      statusBarBackgroundColor={'white'}
      statusBarContentStyle={'dark-content'}>
      <LinearGradient
        style={{
          width: windowWidth,
          height: windowHeight,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[Color.white, Color.white]}
      // locations ={[0, 0.5, 0.6]}
      >
        <View
          style={{
            height: windowHeight * 0.07,
            width: windowWidth * 0.2,
            position: 'absolute',
            // backgroundColor:'red',
            top: 10,
            right: 10,
          }}>
          <CustomImage
            resizeMode="contain"
            source={require('../Assets/Images/alwaseela.png')}
            style={{
              width: '100%',
              height: '100%',
              // marginTop: moderateScale(25, 0.3),
            }}
          />
        </View>
        <CustomText
          // onPress={() => navigationService.navigate('Signup')}
          isBold
          style={{ fontSize: moderateScale(30, .6), color: Color.black, 
            // backgroundColor: 'red',
           marginTop: moderateScale(60, .3) }}>
          DONATION BOX
        </CustomText>
        <View
          style={{
            height: windowHeight * 0.25,
            width: windowWidth * 0.8,
            // backgroundColor:'red',
          }}>
          <CustomImage
            resizeMode="contain"
            source={require('../Assets/Images/logo.png')}
            style={{
              width: '100%',
              height: '100%',
              // marginTop: moderateScale(25, 0.3),
            }}
          />
        </View>
        <CustomText
          // onPress={() => navigationService.navigate('Signup')}
          isBold
          style={styles.txt6}>
          Login
        </CustomText>

        <TextInputWithTitle
          // iconName={'email'}
          // iconType={Fontisto}
          // LeftIcon={true}
          fontSize={moderateScale(15, .6)}
          titleText={'Email Address'}
          placeholder={'Email Address'}
          setText={setEmail}
          value={email}
          viewHeight={0.07}
          viewWidth={0.75}
          inputWidth={0.7}
          border={1}
          // borderColor={Color.white}
          backgroundColor={Color.white}
          marginTop={moderateScale(15, 0.3)}
          color={Color.black}
          placeholderColor={Color.veryLightGray}
        // elevation
        />

        <TextInputWithTitle
          // iconName={'key-outline'}
          // iconType={Ionicons}
          // LeftIcon={true}
          titleText={'Password'}
          placeholder={'password'}
          secureText={true}
          setText={setPassword}
          value={password}
          viewHeight={0.07}
          viewWidth={0.75}
          inputWidth={0.7}
          border={1}
          backgroundColor={Color.white}
          // borderColor={'#000'}
          marginTop={moderateScale(15, 0.3)}
          color={Color.black}
          placeholderColor={Color.veryLightGray}
        // elevation
        />
        <CustomText
          numberOfLines={1}
          children={'Forgot Password?'}
          style={{
            fontSize: moderateScale(10, 0.6),
            color: 'black',
            width: windowWidth * 0.8,
            textAlign: 'right',
            marginTop: moderateScale(10, 0.3),
          }}
          onPress={() => {
            console.log('here');
            navigationService.navigate('EnterPhone');
          }}
        />

        <CustomButton
          onPress={() => {
            LoginUser()  
          }}
          text={
            isLoading ? (
              <ActivityIndicator size={'small'} color={Color.white} />
            ) : (
              'Login'
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


        <CustomText style={styles.txt5}>Don't have an account ?</CustomText>
        <CustomText
          onPress={() => navigationService.navigate('Signup')}
          isBold
          style={styles.txt6}>
          Register
        </CustomText>
      </LinearGradient>
    </ScreenBoiler>
  );
};

const styles = ScaledSheet.create({
  txt5: {
    marginTop: moderateScale(25, 0.3),
    fontSize: moderateScale(11, 0.6),
    color: Color.black,
  },
  txt6: {
    fontSize: moderateScale(22, 0.6),
    // color: Color.white,
    color: Color.black
  },
});

export default LoginScreen;
