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

const Signup = (props) => {

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('')
  const [cPassword, setCPassword] = useState('')
const [country, setCountry] = useState('')
  const navigation = useNavigation()
  const sizesArray =['Pakistan', 'china', 'India', 'Sri lanka']



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
          // justifyContent: 'center',
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[Color.white, Color.white]}
      // locations ={[0, 0.5, 0.6]}
      >

        <CustomText
          // onPress={() => navigationService.navigate('Signup')}
          isBold
          style={{
            fontSize: moderateScale(30, .6),
            color: Color.black,
            // backgroundColor: 'red',
            marginTop: moderateScale(60, .3)
          }}>
          POWERBOX
        </CustomText>

        <CustomText
          // onPress={() => navigationService.navigate('Signup')}
          isBold
          style={styles.txt6}>
          Sign Up
        </CustomText>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: windowWidth, paddingVertical: moderateScale(10, .6) }}>
          <CustomText style={styles.txt5}>already have an account?</CustomText>
          <CustomText
            onPress={() => navigationService.navigate('LoginScreen')}
            isBold
            style={{ fontSize: moderateScale(14, .6), color: Color.black }}>
            Login
          </CustomText>
        </View>

        <TextInputWithTitle
          // iconName={'email'}
          // iconType={Fontisto}
          // LeftIcon={true}
          fontSize={moderateScale(15, .6)}
          titleText={'Full Name'}
          placeholder={'Full Name'}
          setText={setFullName}
          value={fullName}
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
          titleText={'Email'}
          placeholder={'Email'}
          setText={setEmail}
          value={email}
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

        <TextInputWithTitle
          // iconName={'email'}
          // iconType={Fontisto}
          // LeftIcon={true}
          fontSize={moderateScale(15, .6)}
          titleText={'Password'}
          placeholder={'Password'}
          secureText={true}

          setText={setPassword}
          value={password}
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
          // iconName={'email'}
          // iconType={Fontisto}
          // LeftIcon={true}
          secureText={true}

          fontSize={moderateScale(15, .6)}
          titleText={'Confirm Password'}
          placeholder={'Confirm Password'}
          setText={setCPassword}
          value={cPassword}
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
          <DropDownSingleSelect
            array={sizesArray}
            item={country}
            setItem={setCountry}
            placeholder={'Select Country'}
            width={windowWidth * 0.75}
            dropDownHeight={windowHeight * 0.06}
            // backgroundColor={Color.purple}
            dropdownStyle={{
              width: windowWidth * 0.75,
              borderBottomWidth: 0,
              // backgroundColor : 'red'
            }}
            borderColor={Color.veryLightGray}
            // elevation
            // backgroundColor={'white'}
          />

        <CustomText style={styles.text}>By Registering You agree to our <CustomText style={styles.txt5}>Terms of use</CustomText> and <CustomText style={styles.txt5}>privacy policy</CustomText>  </CustomText>
        <CustomText style={{color:'black', fontSize:moderateScale(10,.6)}}> Hear about the impact of our giving</CustomText>



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
              'Start Giving'
            )
          }
          textColor={Color.white}
          width={windowWidth * 0.75}
          height={windowHeight * 0.06}
          marginTop={moderateScale(20, 0.3)}
          bgColor={Color.themeColor}
          borderRadius={moderateScale(25, 0.3)}
        // isGradient
        />



      </LinearGradient>
    </ScreenBoiler>
  );
};

const styles = ScaledSheet.create({
  text:{
    marginTop:moderateScale(15,.3),
    fontSize: moderateScale(10, 0.6),
    color: Color.veryLightGray,
    width:windowWidth*0.7,
    textAlign:'center',
  },
  txt5: {
    // marginTop: moderateScale(25, 0.3),
    fontSize: moderateScale(13, 0.6),
    color: Color.black,
  },
  txt6: {
    fontSize: moderateScale(22, 0.6),
    // color: Color.white,
    paddingVertical:moderateScale(10,.6),
    color: Color.black
  },
});

export default Signup;
