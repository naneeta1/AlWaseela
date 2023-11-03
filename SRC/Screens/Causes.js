import React, {useState} from 'react';
import * as Animatable from 'react-native-animatable';
import Color from '../Assets/Utilities/Color';
import CustomImage from '../Components/CustomImage';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import ScreenBoiler from '../Components/ScreenBoiler';
import LinearGradient from 'react-native-linear-gradient';
import {
  ActivityIndicator,
  Platform,
  ToastAndroid,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import navigationService from '../navigationService';
import {useDispatch, useSelector} from 'react-redux';
import CardContainer from '../Components/CardContainer';
import {
  SetUserRole,
  setUserInterests,
  setUserToken,
} from '../Store/slices/auth';
import {Post} from '../Axios/AxiosInterceptorFunction';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {setUserData} from '../Store/slices/common';
import DropDownSingleSelect from '../Components/DropDownSingleSelect';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Causes = props => {
    const token = useSelector((State)=>State?.authReducer?.token)
    console.log("🚀 ~ file: Causes.js:42 ~ Causes ~ token:", token)
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [interests, setInterests] = useState([]);
  console.log("🚀 ~ file: Causes.js:45 ~ Causes ~ interests:", interests)
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const data = [
    {
      id: 1,
      image: require('../Assets/Images/card1.png'),
      name: 'Alwida',
    },
    {
      id: 2,
      image: require('../Assets/Images/card2.png'),
      name: 'Khair List',
    },
    {
      id: 3,
      image: require('../Assets/Images/card3.png'),
      name: 'Markaz-e-shifa',
    },
    {
      id: 4,
      image: require('../Assets/Images/card4.png'),
      name: 'Counter Points',
    },
    {
      id: 5,
      image: require('../Assets/Images/card5.png'),
      name: 'Qatrah',
    },
    {
      id: 6,
      image: require('../Assets/Images/card6.png'),
      name: 'Rehen Sehen',
    },
    {
      id: 7,
      image: require('../Assets/Images/card7.png'),
      name: 'Rozgar',
    },
    {
      id: 8,
      image: require('../Assets/Images/card8.png'),
      name: 'Sasta Bazaar',
    },
    {
      id: 9,
      image: require('../Assets/Images/card9.png'),
      name: 'Saya',
    },
    {
      id: 10,
      image: require('../Assets/Images/card10.png'),
      name: 'The Alphabet game',
    },
    {
      id: 11,
      image: require('../Assets/Images/card11.png'),
      name: 'Ummati',
    },
    {
      id: 12,
      image: require('../Assets/Images/card12.png'),
      name: 'Jinn Tv',
    },
  ];

  const UpdateInterests = async () => {
    const url = 'intrest_update';
    const body = {
      names: interests,
    };
    if(interests?.length == 0){
      Platform.OS == 'android' ?
      ToastAndroid.show('Please select any interest' , ToastAndroid.SHORT) :
      alert('Please select any interest')
    }
    console.log("🚀 ~ file: Causes.js:120 ~ UpdateInterests ~ body:", body)
    setIsLoading(true)
    const response = await Post(url , body , apiHeader(token))
    setIsLoading(false)
    if(response != undefined){
      dispatch(setUserData(response?.data?.user));
      dispatch(setUserInterests(response?.data?.user?.intrest))
        console.log(response?.data?.user?.intrest)
    }
  };

  return (
    <ScreenBoiler
      statusBarBackgroundColor={'white'}
      statusBarContentStyle={'dark-content'}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: windowWidth,
          backgroundColor: 'white',
          minHeight: windowHeight,
          flexGrow: 0,
          //   justifyContent: 'center',
        }}
        contentContainerStyle={{
          paddingBottom: moderateScale(30, 0.6),
          alignItems: 'center',
        }}>
        <View
          style={{
            height: windowHeight * 0.07,
            width: windowWidth * 0.2,
            // position: 'absolute',
            // backgroundColor:'red',
            // top: 10,
            right: 10,
            alignSelf: 'flex-end',
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

        <View
          style={{
            height: windowHeight * 0.1,
            width: windowWidth * 0.3,
            marginTop: moderateScale(30, 0.6),
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
          Select Your Interest
        </CustomText>
        <CustomText
          // onPress={() => navigationService.navigate('Signup')}
          isBold
          style={{
            color: Color.veryLightGray,
            fontSize: moderateScale(12, 0.6),
            paddingHorizontal: moderateScale(40, 0.6),
            textAlign: 'center',
            paddingVertical: moderateScale(20, 0.6),
          }}>
          Choose your interest to donate. Donot worry you can always change it
          later
        </CustomText>

        <FlatList
          numColumns={3}
          showsVerticalScrollIndicator={false}
          data={data}
          style={{
            marginBottom: moderateScale(20, 0.6),
          }}
          contentContainerStyle={{
            alignSelf: 'center',
            marginTop: moderateScale(5, 0.3),
          }}
          renderItem={({item, index}) => {
            return (
              <Chunks
                item={item}
                onPress={() => {
                    console.log(  interests.includes(item?.name) , interests.indexOf(item?.name))
                  let TempData = [...interests];
                  interests.includes(item?.name)
                    ? (TempData.splice(interests.indexOf(item?.name), 1),
                      setInterests(TempData))
                    : setInterests(prev => [...prev, item?.name]);
                }}
                data={interests}
              />
            );
          }}
        />

        <CustomButton
          onPress={() => {
            UpdateInterests()
          }}
          text={
            isLoading ? (
              <ActivityIndicator size={'small'} color={Color.white} />
            ) : (
              'Continue'
            )
          }
          textColor={Color.white}
          width={windowWidth * 0.75}
          height={windowHeight * 0.06}
          marginTop={moderateScale(10, 0.3)}
          bgColor={Color.themeColor}
          borderRadius={moderateScale(25, 0.3)}

          // isGradient
        />
        <CustomButton
          onPress={() => {
            dispatch(setUserData());
            //     dispatch(SetUserRole(response?.data?.user_info?.role))
            dispatch(setUserToken({token: null}));
            dispatch(setUserInterests([]));
            // LoginUser();
          }}
          text={
          'Logout'
         
          }
          textColor={Color.white}
          width={windowWidth * 0.75}
          height={windowHeight * 0.06}
          marginTop={moderateScale(10, 0.3)}
          bgColor={Color.themeColor}
          borderRadius={moderateScale(25, 0.3)}

          // isGradient
        />
      </ScrollView>
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
    color: Color.black,
  },
});

export default Causes;

const Chunks = ({item, onPress, data}) => {
  const [selectedInterest, setSelectedInterest] = useState(false);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: windowWidth * 0.27,
        height: windowHeight * 0.11,
        borderColor: data?.includes(item?.name) ? Color.black : Color.veryLightGray,
        borderRadius: moderateScale(10, 0.6),
        borderWidth: data?.includes(item?.name) ? 2 : 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: moderateScale(5, 0.6),
        padding: moderateScale(5, 0.6),
      }}>
      {data?.includes(item?.name) && (
        <View style={{position: 'absolute', top: 5, right: 5}}>
          <Icon
            name="checkcircleo"
            as={AntDesign}
            size={4}
            color={Color.themeColor}
          />
        </View>
      )}
      <View style={{width: windowWidth * 0.15, height: windowHeight * 0.055}}>
        <CustomImage
          onPress={onPress}
          resizeMode="contain"
          source={item?.image}
          style={{
            width: '100%',
            height: '100%',
            // marginTop: moderateScale(25, 0.3),
          }}
        />
      </View>
      {/* <CustomText style={{ color: Color.black, fontSize: moderateScale(13, .6), textAlign: 'center', marginTop: moderateScale(5, .3) }}>{item?.name}</CustomText> */}
    </TouchableOpacity>
  );
};
