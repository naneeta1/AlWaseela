import React, {useState} from 'react';
import * as Animatable from 'react-native-animatable';
import Color from '../Assets/Utilities/Color';
import CustomImage from '../Components/CustomImage';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import ScreenBoiler from '../Components/ScreenBoiler';
import LinearGradient from 'react-native-linear-gradient';
import {ActivityIndicator, Platform, ToastAndroid, View} from 'react-native';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import navigationService from '../navigationService';
import {useDispatch} from 'react-redux';
import CardContainer from '../Components/CardContainer';
import Lottie from 'lottie-react-native';
import {SetUserRole, setUserToken} from '../Store/slices/auth';
import {Post} from '../Axios/AxiosInterceptorFunction';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {setUserData} from '../Store/slices/common';
import DropDownSingleSelect from '../Components/DropDownSingleSelect';
import {useNavigation} from '@react-navigation/native';
import RecieptComponent from '../Components/RecieptComponent';

const PaymentDoneScreen = props => {
  const [isLoading, setIsLoading] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);


  const navigation = useNavigation();

  const dispatch = useDispatch();

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
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
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
          style={{
            fontSize: moderateScale(45, 0.6),
            color: Color.black,
            marginTop: moderateScale(60, 0.6),
          }}>
          POWER BOX
        </CustomText>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'green'
          }}>
          <CustomText
            // onPress={() => navigationService.navigate('Signup')}
            isBold
            style={styles.txt6}>
            A Project of
          </CustomText>
          <View
            style={{
              height: windowHeight * 0.06,
              width: windowWidth * 0.18,
              marginLeft: moderateScale(5, 0.6),

              // position: 'absolute',
              // backgroundColor:'red',
              // top: 10,
              // right: 10,
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
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: windowHeight * 0.3,
            width: windowWidth ,
            // backgroundColor:'red',
            alignItems:'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              height: windowHeight * 0.4,
              width: windowWidth * 0.35,
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
          <View
            style={{
              width: windowWidth * 0.25,
              height: windowHeight * 0.2,
              position:'absolute',
              left:150,
              top:1,
              transform:[{scaleX:-1}]
            //   backgroundColor: 'red',
            }}>
            <Lottie
              source={require('../Assets/Images/animation4.json')}
              autoPlay
              
              loop
            />
          </View>
          <View
            style={{
              height: windowHeight * 0.3,
              width: windowWidth * 0.35,
            //   backgroundColor:'red'
            }}>
            <CustomImage
              resizeMode="contain"
              source={require('../Assets/Images/mobile.png')}
              style={{
                width: '100%',
                height: '100%',
                // marginTop: moderateScale(25, 0.3),
              }}
            />
          </View>
        </View>

        <CustomText style={styles.txt5} isBold>
          Your Payment has been successfully transferred!
        </CustomText>

        <View
            style={{
              height: windowHeight * 0.18,
              width: windowWidth * 0.85,
            //   backgroundColor:'red'
            }}>
            <CustomImage
              resizeMode="contain"
              source={require('../Assets/Images/payment.png')}
              style={{
                width: '100%',
                height: '100%',
                // marginTop: moderateScale(25, 0.3),
              }}
            />
          </View>

        <CustomButton
          onPress={() => {
          setIsVisible(true)
          }}
          text={
            isLoading ? (
              <ActivityIndicator size={'small'} color={Color.white} />
            ) : (
              'Show Reciept'
            )
          }
          textColor={Color.white}
          width={windowWidth * 0.75}
          height={windowHeight * 0.06}
          marginTop={moderateScale(35, 0.3)}
          bgColor={Color.themeColor}
          borderRadius={moderateScale(25, 0.3)}
          // isGradient
        />
          <RecieptComponent
          setIsVisible={setIsVisible}
          isVisible={isVisible}
          onPress={() => {
            navigationService.navigate('HomeScreen'),
              ToastAndroid.show(
                'You have Donated successfully',
                ToastAndroid.SHORT,
              );
          }}
        />
      </LinearGradient>
    </ScreenBoiler>
  );
};

const styles = ScaledSheet.create({
  txt5: {
    marginTop: moderateScale(10, 0.3),
    fontSize: moderateScale(18, 0.6),
    color: Color.themeColor,
    paddingHorizontal: moderateScale(30, 0.6),
    textAlign: 'center',
  },
  txt6: {
    fontSize: moderateScale(15, 0.6),
    // color: Color.white,
    marginTop: moderateScale(15, 0.6),
    color: Color.black,
    textTransform: 'capitalize',
  },
});

export default PaymentDoneScreen;
