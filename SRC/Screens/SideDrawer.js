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
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SeeResultsComponent from '../Components/SeeResultsComponent';
import { useNavigation } from '@react-navigation/native';

const SideDrawer = () => {
  const navigation = useNavigation()
  const data = [
    {
      id: 1,
      name: 'Discover Charities',
      image: require('../Assets/Images/location2.png'),
      onPress: ()=>{
        navigationService.navigate('DonationCategories')
      }
    },
    {
      id: 2,
      name: 'Map',
      image: require('../Assets/Images/worldwide.png'),
    },
    {
      id: 3,
      name: 'Search Fundraisers',
      image: require('../Assets/Images/menuSearch.png'),
      onPress: ()=>{
        navigationService.navigate('DonationCategories')
      }
    },
    {
      id: 4,
      name: 'GIving History',
      image: require('../Assets/Images/invoice.png'),
      onPress: ()=>{
        navigationService.navigate('GivingHistory')
      }
    },
    {
      id: 5,
      name: 'Settings',
      image: require('../Assets/Images/settings.png'),
      onPress: ()=>{
        navigationService.navigate('SettingScreen')
      }
    },
    {
      id: 6,
      name: 'FAQs',
      image: require('../Assets/Images/faq.png'),
      onPress: ()=>{
        navigationService.navigate('FrequentlyAsked')
      }
    },
    {
      id: 7,
      name: 'Contact Our Team',
      image: require('../Assets/Images/speech-bubble.png'),
      onPress: ()=>{
        navigationService.navigate('ContactUs')
      }
    },
    {
      id: 8,
      name: 'Share This App',
      image: require('../Assets/Images/share.png'),
    },
  ];

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#3E3028',
      }}>
      <View
        style={{
          width: windowWidth * 0.95,
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: moderateScale(15, 0.3),
        }}>
        <View style={{width: windowWidth * 0.3}}>
          {/* <TouchableOpacity activeOpacity={0.8}>
            <Icon
              name={'left'}
              as={AntDesign}
              color={Color.white}
              size={moderateScale(25, 0.3)}
            />
          </TouchableOpacity> */}
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: windowWidth * 0.2,
            alignItems: 'center',
          }}>
       
            <Icon
              name={'home'}
              as={AntDesign}
              color={Color.white}
              size={moderateScale(25, 0.3)}
              onPress={()=>{
                navigation.goBack()
              }}
            />
        
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

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: windowWidth * 0.5,
          paddingVertical: moderateScale(10, 0.6),
          paddingHorizontal: moderateScale(5, 0.6),
          marginTop: moderateScale(20, 0.3),
        }}>
        <View style={{width: windowWidth * 0.12, height: windowHeight * 0.07}}>
          <CustomImage
            resizeMode="contain"
            source={require('../Assets/Images/Logo1.png')}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </View>

        <View>
          <CustomText
            style={{fontSize: moderateScale(18, 0.6), color: Color.white}}>
            Abdul Rehman
          </CustomText>
          <CustomText
            style={{fontSize: moderateScale(14, 0.6), color: Color.white}}>
            pakistan
          </CustomText>
        </View>
      </View>

      <View
        style={{
          width: windowWidth * 0.95,
          height: 1,
          backgroundColor: '#F0F2F5',
          alignSelf: 'center',
        }}></View>

      <View style={{marginTop: moderateScale(20, 0.3)}}>
        {data.map((item, index) => (
          <TouchableOpacity
          onPress={item?.onPress}
            activeOpacity={0.8}
            // onPress={item?.onPress}
            style={{
              width: windowWidth * 0.92,
              paddingHorizontal: moderateScale(10, 0.6),
              paddingVertical: moderateScale(5, 0.6),
              borderBottomWidth: 0.5,
              borderColor: Color.white,
              margin: moderateScale(10, 0.3),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: windowWidth * 0.06,
                height: windowHeight * 0.04,
              }}>
              <CustomImage
                resizeMode="contain"
                source={item?.image}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </View>

            <CustomText
              style={{
                width: windowWidth * 0.5,
                fontSize: moderateScale(14, 0.6),
                color: Color.white,
                textAlign: 'right',
              }}>
              {item?.name}
            </CustomText>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SideDrawer;
