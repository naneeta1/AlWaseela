import React, {useState} from 'react';
import * as Animatable from 'react-native-animatable';
import Color from '../Assets/Utilities/Color';
import CustomImage from '../Components/CustomImage';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import ScreenBoiler from '../Components/ScreenBoiler';
import LinearGradient from 'react-native-linear-gradient';
import CountryPicker, {DARK_THEME} from 'react-native-country-picker-modal';
import {Icon} from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {
  ActivityIndicator,
  Alert,
  Platform,
  ToastAndroid,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import navigationService from '../navigationService';
import {useDispatch} from 'react-redux';
import CardContainer from '../Components/CardContainer';
import {SetUserRole, setUserInterests, setUserToken} from '../Store/slices/auth';
import {Post} from '../Axios/AxiosInterceptorFunction';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {setUserData} from '../Store/slices/common';
import DropDownSingleSelect from '../Components/DropDownSingleSelect';
import {useNavigation} from '@react-navigation/native';

const Signup = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [cPassword, setCPassword] = useState('');
  const navigation = useNavigation();
  const sizesArray = ['Pakistan', 'china', 'India', 'Sri lanka'];

  const dispatch = useDispatch();

  const Register = async () => {
    const url = 'register';
    const body = {
      name: fullName,
      email: email,
      password: password,
      number : contact,
      country: country?.name,
    };
    for (let key in body) {
      if (body[key] == '') {
        return Platform.OS == 'android'
        ? ToastAndroid.show('required field is empty', ToastAndroid.SHORT)
        : alert('required field is empty');
      }
    }
    if (password != cPassword) {
      return Platform.OS == 'android'
      ? ToastAndroid.show('password doesnot match', ToastAndroid.SHORT)
      : alert('password doesnot match');
    }
    console.log("🚀 ~ file: Signup.js:55 ~ Register ~ body:", body)
      setIsLoading(true);
      const response = await Post(url, body, apiHeader());
      setIsLoading(false);
      if (response != undefined) {
      //  return console.log('response ========= >> ', response?.data);
       Platform.OS == 'android'
       ? ToastAndroid.show('User Register Sucessfully', ToastAndroid.SHORT)
       : alert('User Register Sucessfully');
        dispatch(setUserToken({token : response?.data?.token}))
        dispatch(setUserData(response?.data?.user))
        // dispatch(setUserInterests(response?.data?.user?.intrest))
      }
     
    
    
  };
  const [showNumberModal, setShowNumberModal] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [country, setCountry] = useState({});
  const [number, setNumber] = useState('');
  const [withCallingCode, setWithCallingCode] = useState(true);
  const [withFilter, setFilter] = useState(true);

  const onSelect = country => {
    console.log('dasdasdasdads =>', country);
    setCountryCode(country.cca2);
    setCountry(country);
  };

  return (
    <ScreenBoiler
      statusBarBackgroundColor={'white'}
      statusBarContentStyle={'dark-content'}>
        <ScrollView 
        
        showsVerticalScrollIndicator={false}
        
        >
      <LinearGradient
        style={{
          width: windowWidth,
          height: windowHeight,
          alignItems: 'center',
          // justifyContent: 'center',
        }}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[Color.white, Color.white]}
        // locations ={[0, 0.5, 0.6]}
      >
        <CustomText
          // onPress={() => navigationService.navigate('Signup')}
          isBold
          style={{
            fontSize: moderateScale(30, 0.6),
            color: Color.black,
            // backgroundColor: 'red',
            marginTop: moderateScale(60, 0.3),
          }}>
          POWERBOX
        </CustomText>

        <CustomText
          // onPress={() => navigationService.navigate('Signup')}
          isBold
          style={styles.txt6}>
          Sign Up
        </CustomText>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: windowWidth,
            paddingVertical: moderateScale(10, 0.6),
          }}>
          <CustomText style={styles.txt5}>already have an account?</CustomText>
          <CustomText
            onPress={() => navigationService.navigate('LoginScreen')}
            isBold
            style={{fontSize: moderateScale(14, 0.6), color: Color.black}}>
            Login
          </CustomText>
        </View>

        <TextInputWithTitle
          // iconName={'email'}
          // iconType={Fontisto}
          // LeftIcon={true}
          fontSize={moderateScale(15, 0.6)}
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
          // iconName={'key-outline'}
          // iconType={Ionicons}
          // LeftIcon={true}
          titleText={'Phone number'}
          placeholder={'contact'}
          setText={setContact}
          value={contact}
          viewHeight={0.07}
          viewWidth={0.75}
          inputWidth={0.7}
          border={1}
          backgroundColor={Color.white}
           marginTop={moderateScale(15, 0.3)}
          color={Color.black}
          placeholderColor={Color.veryLightGray}
          keyboardType={'numeric'}
        />

        <TextInputWithTitle
          // iconName={'email'}
          // iconType={Fontisto}
          // LeftIcon={true}
          fontSize={moderateScale(15, 0.6)}
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
          fontSize={moderateScale(15, 0.6)}
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
        {/* <DropDownSingleSelect
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
        /> */}
             <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                    setShowNumberModal(true);
                }}
                style={[styles.birthday, {justifyContent: 'flex-start'}]}>
                <CountryPicker
                  {...{
                    countryCode,
                    withCallingCode,
                    onSelect,
                    withFilter
                 
                  }}
                  visible={showNumberModal}
                  onClose={() => {
                    setShowNumberModal(false);
                  }}
                />

                {Object.keys(country).length > 0 && (
                  <CustomText
                    style={{
                      fontSize: moderateScale(15, 0.6),
                      color: '#5E5E5E',
                    }}>{country?.name}</CustomText>
                )}

                <Icon
                  name={'angle-down'}
                  as={FontAwesome}
                  size={moderateScale(20, 0.6)}
                  color={Color.themeColor}
                  onPress={() => {
                    setShowNumberModal(true);
                  }}
                  style={{
                    position: 'absolute',
                    right: moderateScale(5, 0.3),
                  }}
                />
              </TouchableOpacity>

        <CustomText style={styles.text}>
          By Registering You agree to our{' '}
          <CustomText style={styles.txt5}>Terms of use</CustomText> and{' '}
          <CustomText style={styles.txt5}>privacy policy</CustomText>{' '}
        </CustomText>
        <CustomText style={{color: 'black', fontSize: moderateScale(10, 0.6)}}>
          {' '}
          Hear about the impact of our giving
        </CustomText>

        <CustomButton
          onPress={() => {
            Register();
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
      </ScrollView>
    </ScreenBoiler>
  );
};

const styles = ScaledSheet.create({
  text: {
    marginTop: moderateScale(15, 0.3),
    fontSize: moderateScale(10, 0.6),
    color: Color.veryLightGray,
    width: windowWidth * 0.7,
    textAlign: 'center',
  },
  txt5: {
    // marginTop: moderateScale(25, 0.3),
    fontSize: moderateScale(13, 0.6),
    color: Color.black,
  },
  txt6: {
    fontSize: moderateScale(22, 0.6),
    // color: Color.white,
    paddingVertical: moderateScale(10, 0.6),
    color: Color.black,
  },
  birthday: {
    width: windowWidth * 0.76,
    height: windowHeight * 0.07,
    borderRadius: moderateScale(10, 0.6),
    borderWidth: 1,
    borderColor: Color.veryLightGray,
    flexDirection: 'row',
    paddingHorizontal: moderateScale(10, 0.6),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop:moderateScale(15 ,0.3)
  },
});

export default Signup;
