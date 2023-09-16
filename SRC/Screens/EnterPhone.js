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
import { SetUserRole, setUserToken } from '../Store/slices/auth';
import { Post } from '../Axios/AxiosInterceptorFunction';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { setUserData } from '../Store/slices/common';
import DropDownSingleSelect from '../Components/DropDownSingleSelect';
import { useNavigation } from '@react-navigation/native';

const EnterPhone = (props) => {

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation()


  const dispatch = useDispatch();

  // const LoginUser = async () => {
  //   if (email == '' && password == '') {
  //     return Platform.OS == 'android'
  //       ? ToastAndroid.show(
  //           'password and email is required',
  //           ToastAndroid.SHORT,
  //         )
  //       : alert('password and email is required');
  //   } else if (email == '') {
  //     return Platform.OS == 'android'
  //       ? ToastAndroid.show('email is required', ToastAndroid.SHORT)
  //       : alert('email is required');
  //   } else if (password == '') {
  //     return Platform.OS == 'android'
  //       ? ToastAndroid.show('password is required', ToastAndroid.SHORT)
  //       : alert('password is required');
  //   }
  //   //  else if (userRole == '') {
  //   //   return Platform.OS == 'android'
  //   //     ? ToastAndroid.show('user role is required', ToastAndroid.SHORT)
  //   //     : alert('user role is required');
  //   // }

  //   const url = 'login';
  //   const body = {email: email.trim(), password: password};
  //   setIsLoading(true);
  //   const response = await Post(url, body, apiHeader());
  //   setIsLoading(false);

  //   // console.log('LoginResponse============>>>>>>>', response?.data);
  //   if (response?.data?.success) {
  //     console.log("Login Testing =============>>>>>>",response?.data?.user_info)
  //     dispatch(setUserData(response?.data?.user_info));
  //     dispatch(SetUserRole(response?.data?.user_info?.role))
  //     dispatch(setUserToken({token: response?.data?.token}));


  //   }
  //   // dispatch(setUserData(response?.data?.user_info));
  //     // dispatch(setUserToken({token: 'dfhksdjlsk'}));
  //     // dispatch(SetUserRole('customer'))

  // };

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
           marginVertical: moderateScale(20, .3) }}>
          POWER BOX
        </CustomText>
        <View
          style={{
            height: windowHeight * 0.23,
            width: windowWidth * 0.8,
            marginVertical:moderateScale(10,.6),
            // backgroundColor:'red',
          }}>
          <CustomImage
            resizeMode="contain"
            source={require('../Assets/Images/lock.png')}
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
          Reset
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

        <CustomText
          numberOfLines={1}
          children={'Back to Login?'}
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
            // dispatch(setUserData());
            //     dispatch(SetUserRole(response?.data?.user_info?.role))
            dispatch(setUserToken({ token: 'skdaksakdjlk' }));
            // LoginUser();
          }}
          text={
            isLoading ? (
              <ActivityIndicator size={'small'} color={Color.white} />
            ) : (
              'Reset'
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


        <CustomText style={styles.txt5}>Please provide an email address associated with your account and we will send you a link to reset your password ?</CustomText>
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
    fontSize: moderateScale(14, 0.6),
    color: Color.veryLightGray,
    paddingHorizontal:moderateScale(20,.6),
    textAlign:'center'
  },
  txt6: {
    fontSize: moderateScale(22, 0.6),
    // color: Color.white,
    marginTop:moderateScale(15,.6),
    color: Color.black
  },
});

export default EnterPhone;
