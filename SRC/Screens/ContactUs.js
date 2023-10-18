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

const ContactUs = () => {
    const navigation = useNavigation()
  const [enquirytype, setEnquiryType] = useState('');
  const [message, setMessage] = useState('');

  const sizesArray = [
    'Enquiry Type',
    'Enquiry Type',
    'Enquiry Type',
    'Enquiry Type',
  ];

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
              Contact Us
            </CustomText>
          </View>
        </View>

        <DropDownSingleSelect
          array={sizesArray}
          item={enquirytype}
          setItem={setEnquiryType}
          placeholder={'Enquiry Type'}
          width={windowWidth * 0.95}
          dropDownHeight={windowHeight * 0.06}
          backgroundColor={'transparent'}
          dropdownStyle={{
            width: windowWidth * 0.95,
            borderBottomWidth: 0,
          }}
          borderColor={Color.veryLightGray}
        />

        <TextInputWithTitle
          fontSize={moderateScale(15, 0.6)}
          titleText={'Full Name'}
          placeholder={'Message*'}
          setText={setMessage}
          value={message}
          viewHeight={0.13}
          viewWidth={0.9}
          inputWidth={0.8}
          inputHeight={0.13}
          border={1}
          marginTop={moderateScale(20, 0.3)}
          color={Color.black}
          placeholderColor={Color.veryLightGray}
        />

        <View
          style={{
            width: windowWidth * 0.9,
            height: windowHeight * 0.27,
            backgroundColor: Color.white,
            marginTop: moderateScale(20, 0.3),
            borderRadius: moderateScale(10, 0.3),
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
          }}>
          <CustomText
            style={{
              width: windowWidth,
              fontSize: moderateScale(16, 0.6),
              paddingHorizontal: moderateScale(20, 0.6),
              marginTop: moderateScale(10, 0.6),
              color: '#757575',
            }}>
            From
          </CustomText>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: moderateScale(20, 0.6),
              width: windowWidth * 0.55,
              marginTop: moderateScale(15, 0.3),
            }}>
            <View
              style={{width: windowWidth * 0.08, height: windowHeight * 0.05}}>
              <CustomImage
                resizeMode="contain"
                source={require('../Assets/Images/Logo1.png')}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </View>

            <CustomText
              numberOfLines={1}
              style={{
                width: windowWidth * 0.35,
                paddingLeft: moderateScale(10, 0.6),
                textAlign: 'left',
                fontSize: moderateScale(18, 0.6),
                color: Color.black,
              }}>
              Abdul Rehman
            </CustomText>
          </View>

          <CustomText
            style={{
              width: windowWidth,
              fontSize: moderateScale(16, 0.6),
              paddingHorizontal: moderateScale(20, 0.6),
              marginTop: moderateScale(10, 0.6),
              color: '#757575',
            }}>
            Email
          </CustomText>
          <CustomText
            style={{
              width: windowWidth,
              fontSize: moderateScale(14, 0.6),
              paddingHorizontal: moderateScale(20, 0.6),
              marginTop: moderateScale(5, 0.6),
              color: '#757575',
            }}>
            rehmanaptech50@gmail.com
          </CustomText>
          <CustomText
            style={{
              width: windowWidth,
              fontSize: moderateScale(16, 0.6),
              paddingHorizontal: moderateScale(20, 0.6),
              marginTop: moderateScale(10, 0.6),
              color: '#757575',
            }}>
            Mobile
          </CustomText>
        </View>

        <CustomButton
          isBold
          text={'Send Message'}
          textColor={Color.white}
          width={windowWidth * 0.9}
          height={windowHeight * 0.06}
          fontSize={moderateScale(13, 0.6)}
          marginTop={moderateScale(40, 0.3)}
          bgColor={Color.themeColor}
          borderRadius={moderateScale(20, 0.3)}
          alignSelf={'center'}
        />
      </LinearGradient>
    </ScreenBoiler>
  );
};

export default ContactUs;
