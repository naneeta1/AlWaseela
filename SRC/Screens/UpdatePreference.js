import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Switch,
} from 'react-native';
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FundRaiseCard from '../Components/FundRaiseCard';
import CardContainer from '../Components/CardContainer';
import FrequentlyAskedCard from '../Components/FrequentlyAskedCard';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../Components/CustomButton';

const UpdatePreference = () => {
  const navigation = useNavigation() 
  const [enabled, setEnabled] = useState(false);

  return (
    <ScreenBoiler
      statusBarBackgroundColor={'#3E3028'}
      statusBarContentStyle={'light-content'}>
      <LinearGradient
        style={{
          width: windowWidth,
          minHeight: windowHeight,
          //   alignItems: 'center',
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
              Update Preferences
            </CustomText>
          </View>
        </View>

        

        <CustomText
          isBold
          style={{
            width: windowWidth,
            paddingHorizontal: moderateScale(10, 0.6),
            textAlign: 'left',
            fontSize: moderateScale(20, 0.6),
            color: Color.black,
            marginTop: moderateScale(50, 0.3),
          }}>
          Interests
        </CustomText>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: windowWidth * 0.52,
            paddingLeft: moderateScale(5, 0.6),
            marginTop: moderateScale(10, 0.6),
          }}>
          <View
            style={{
              width: windowWidth * 0.25,
              height: windowHeight * 0.05,
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: moderateScale(20, 0.3),
              backgroundColor: Color.white,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <CustomText
              style={{
                width: windowWidth * 0.16,
                textAlign: 'left',
                fontSize: moderateScale(12, 0.6),
                paddingLeft: moderateScale(10, 0.6),
                color: Color.veryLightGray,
              }}>
              Qurbani
            </CustomText>

            <View
              style={{
                width: windowWidth * 0.07,
                height: windowHeight * 0.03,
                alignSelf: 'center',
              }}>
              <CustomImage
                resizeMode="contain"
                source={require('../Assets/Images/cow.png')}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </View>
          </View>

          <View
            style={{
              width: windowWidth * 0.25,
              height: windowHeight * 0.05,
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: moderateScale(20, 0.3),
              backgroundColor: Color.white,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <CustomText
              style={{
                width: windowWidth * 0.18,
                textAlign: 'left',
                fontSize: moderateScale(12, 0.6),
                paddingLeft: moderateScale(10, 0.6),
                color: Color.veryLightGray,
              }}>
              Add More
            </CustomText>

            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                width: windowWidth * 0.05,
                height: windowWidth * 0.05,
                borderRadius: (windowWidth * 0.05) / 2,
                borderWidth: 1,
                borderColor: Color.black,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                name={'plus'}
                as={AntDesign}
                size={moderateScale(15, 0.3)}
                color={Color.black}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            width: windowWidth,
            height: 1,
            backgroundColor: '#8C8D91',
            marginTop: moderateScale(30, 0.3),
          }}></View>

        <CustomText
          isBold
          style={{
            width: windowWidth,
            paddingHorizontal: moderateScale(10, 0.6),
            textAlign: 'left',
            fontSize: moderateScale(20, 0.6),
            color: Color.black,
            marginTop: moderateScale(15, 0.3),
          }}>
          Tags
        </CustomText>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: windowWidth * 0.52,
            paddingLeft: moderateScale(5, 0.6),
            marginTop: moderateScale(10, 0.6),
          }}>
          <View
            style={{
              width: windowWidth * 0.25,
              height: windowHeight * 0.05,
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: moderateScale(20, 0.3),
              backgroundColor: Color.white,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <CustomText
              style={{
                width: windowWidth * 0.25,
                textAlign: 'center',
                fontSize: moderateScale(12, 0.6),
                color: Color.veryLightGray,
              }}>
              human rights
            </CustomText>
          </View>

          <View
            style={{
              width: windowWidth * 0.25,
              height: windowHeight * 0.05,
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: moderateScale(20, 0.3),
              backgroundColor: Color.white,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <CustomText
              style={{
                width: windowWidth * 0.18,
                textAlign: 'left',
                fontSize: moderateScale(12, 0.6),
                paddingLeft: moderateScale(10, 0.6),
                color: Color.veryLightGray,
              }}>
              Add More
            </CustomText>

            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                width: windowWidth * 0.05,
                height: windowWidth * 0.05,
                borderRadius: (windowWidth * 0.05) / 2,
                borderWidth: 1,
                borderColor: Color.black,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                name={'plus'}
                as={AntDesign}
                size={moderateScale(15, 0.3)}
                color={Color.black}
              />
            </TouchableOpacity>
          </View>
        </View>

        <CustomText
          isBold
          style={{
            width: windowWidth,
            paddingHorizontal: moderateScale(10, 0.6),
            textAlign: 'left',
            fontSize: moderateScale(20, 0.6),
            color: Color.black,
            marginTop: moderateScale(40, 0.3),
          }}>
          Alerts
        </CustomText>

        <View
          style={{
            width: windowWidth,
            height: 1,
            backgroundColor: '#8C8D91',
            marginTop: moderateScale(20, 0.3),
          }}></View>

        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'red',
            width: windowWidth,
            justifyContent: 'space-between',
            paddingHorizontal: moderateScale(10, 0.6),
            marginTop: moderateScale(10, 0.6),
            alignItems: 'center',
          }}>
          <View style={{width: windowWidth * 0.5}}>
            <CustomText
              numberOfLines={1}
              isBold
              style={{
                width:windowWidth*0.4,
                textAlign:'left',
                color: Color.black,
                fontSize: moderateScale(15, 0.6),
              }}>
              Receive Notifications
            </CustomText>
            <CustomText
              numberOfLines={1}
              style={{
                width:windowWidth*0.49,
                textAlign:'left',
                color: Color.veryLightGray,
                fontSize: moderateScale(13, 0.6),
              }}>
              Jummah reminders and more
            </CustomText>
          </View>

          <Switch
            trackColor={{false: '#fff', true: '#fff'}}
            thumbColor={true ? '#230700' : Color.veryLightGray}
            onValueChange={val => {
              setEnabled(val);
            }}
            value={enabled}
          />
        </View>

        <View
          style={{
            width: windowWidth,
            height: 1,
            backgroundColor: '#8C8D91',
            marginTop: moderateScale(20, 0.3),
          }}></View>

        <CustomButton
          onPress={() => {
            navigationService.navigate('');
          }}
          text={'Delete My Account'}
          textColor={Color.black}
          width={windowWidth * 0.9}
          height={windowHeight * 0.06}
          borderWidth={1}
          fontSize={moderateScale(13, 0.6)}
          marginTop={moderateScale(30, 0.3)}
          borderRadius={moderateScale(20, 0.3)}
          isBold
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

export default UpdatePreference;

const styles = StyleSheet.create({});
