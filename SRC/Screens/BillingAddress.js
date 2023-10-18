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
import DropDownSingleSelect from '../Components/DropDownSingleSelect';

const BillingAddress = () => {
  const [address, setAddress] = useState('');
  const [address1, setAddress1] = useState('');
  const [country, setCountry] = useState('');
  const [City, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipCode] = useState('');
  const navigation = useNavigation();
  const sizesArray = ['Pakistan', 'china', 'India', 'Sri lanka'];

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
              Billing Address
            </CustomText>
          </View>
        </View>

        <TextInputWithTitle
          fontSize={moderateScale(15, 0.6)}
          titleText={'Full Name'}
          placeholder={' Address Line 1 (Required)'}
          setText={setAddress}
          value={address}
          viewHeight={0.07}
          viewWidth={0.9}
          inputWidth={0.7}
          borderBottom={1}
          marginTop={moderateScale(20, 0.3)}
          color={Color.black}
          placeholderColor={Color.veryLightGray}
        />

        <TextInputWithTitle
          fontSize={moderateScale(15, 0.6)}
          titleText={'Full Name'}
          placeholder={' Address Line 2'}
          setText={setAddress1}
          value={address1}
          viewHeight={0.07}
          viewWidth={0.9}
          inputWidth={0.7}
          borderBottom={1}
          marginTop={moderateScale(20, 0.3)}
          color={Color.black}
          placeholderColor={Color.veryLightGray}
        />

        <DropDownSingleSelect
       
          array={sizesArray}
          item={country}
          setItem={setCountry}
          placeholder={'Select Country'}
          width={windowWidth * 0.9}
          dropDownHeight={windowHeight * 0.06}
          backgroundColor={'transparent'}
          dropdownStyle={{
            width: windowWidth * 0.9,
            borderBottomWidth: 0,

            // backgroundColor : 'red'
          }}
          borderColor={Color.veryLightGray}
          // elevation
          // backgroundColor={'white'}
        />

        <TextInputWithTitle
          fontSize={moderateScale(15, 0.6)}
          titleText={'Full Name'}
          placeholder={'City (Required)'}
          setText={setCity}
          value={City}
          viewHeight={0.07}
          viewWidth={0.9}
          inputWidth={0.7}
          borderBottom={1}
          marginTop={moderateScale(20, 0.3)}
          color={Color.black}
          placeholderColor={Color.veryLightGray}
        />

        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <TextInputWithTitle
            fontSize={moderateScale(15, 0.6)}
            titleText={'Full Name'}
            placeholder={'State (Required)'}
            setText={setState}
            value={state}
            viewHeight={0.07}
            viewWidth={0.45}
            inputWidth={0.4}
            borderBottom={1}
            marginTop={moderateScale(20, 0.3)}
            color={Color.black}
            placeholderColor={Color.veryLightGray}
          />
          <TextInputWithTitle
            fontSize={moderateScale(15, 0.6)}
            titleText={'Full Name'}
            placeholder={'State (Required)'}
            setText={setZipCode}
            value={zipcode}
            viewHeight={0.07}
            viewWidth={0.45}
            inputWidth={0.4}
            borderBottom={1}
            marginTop={moderateScale(20, 0.3)}
            color={Color.black}
            placeholderColor={Color.veryLightGray}
          />
        </View>

        <CustomButton
          isBold
          text={'Save'}
          textColor={Color.white}
          width={windowWidth * 0.85}
          height={windowHeight * 0.06}
          fontSize={moderateScale(13, 0.6)}
          marginTop={moderateScale(40, 0.3)}
          bgColor={Color.themeColor}
          borderRadius={moderateScale(20, 0.3)}
          alignSelf={'center'}
        />

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

export default BillingAddress;

const styles = StyleSheet.create({});
