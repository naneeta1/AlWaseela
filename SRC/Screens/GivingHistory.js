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
import {Icon, Checkbox} from 'native-base';
import navigationService from '../navigationService';
import ScreenBoiler from '../Components/ScreenBoiler';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FundRaiseCard from '../Components/FundRaiseCard';
import CardContainer from '../Components/CardContainer';
import FrequentlyAskedCard from '../Components/FrequentlyAskedCard';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../Components/CustomButton';


const GivingHistory = () => {
    const navigation = useNavigation()
  const [type, setType] = useState('All Donaions');


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
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: windowWidth * 0.6,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingLeft: moderateScale(10, 0.6),
            }}>
            <TouchableOpacity activeOpacity={0.8}>
              <Icon
                name={'left'}
                as={AntDesign}
                size={moderateScale(20, 0.3)}
                color={Color.white}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            </TouchableOpacity>

            <CustomText
              style={{
                fontSize: moderateScale(15, 0.6),
                color: Color.white,
                textAlign: 'center',
              }}>
              Giving History
            </CustomText>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            style={{paddingRight: moderateScale(10, 0.6)}}>
            <Icon
              name={'envelope'}
              as={FontAwesome5}
              size={moderateScale(20, 0.3)}
              color={Color.white}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: windowWidth * 0.9,
            alignSelf: 'center',
            marginTop: moderateScale(40, 0.3),
          }}>
          <TouchableOpacity
            style={{
              borderBottomWidth: type == 'All Donaions' ? 1 : 0,
              borderColor: '#3E3028',
              width: windowWidth * 0.42,
            }}>
            <CustomText
             isBold
              onPress={() => {
                setType('All Donaions');
              }}
              style={{
                fontSize: moderateScale(14, 0.6),
                Color: '#3E3028',
                textAlign: 'center',
              }}>
              All Donaions
            </CustomText>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderBottomWidth: type == 'Active Recurrings' ? 1 : 0,
              borderColor: '#3E3028',
              width: windowWidth * 0.42,
            }}>
            <CustomText
             isBold
              onPress={() => {
                setType('Active Recurrings');
              }}
              style={{
                fontSize: moderateScale(14, 0.6),
                Color: '#3E3028',
                textAlign: 'center',
              }}>
              Active Recurrings
            </CustomText>
          </TouchableOpacity>
        </View>

        {type == 'All Donaions' ? (
          <>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: windowWidth * 0.52,
                marginTop: moderateScale(30, 0.3),
                marginLeft: moderateScale(20, 0.3),
              }}>
              <View
                style={{
                  width: windowWidth * 0.15,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: moderateScale(5, 0.6),
                }}>
                <Checkbox value="test" colorScheme="gray" />
                <CustomText
                  isBold
                  style={{
                    width: windowWidth * 0.06,
                    textAlign: 'left',
                    fontSize: moderateScale(12, 0.6),
                    color: Color.black,
                  }}>
                  All
                </CustomText>
              </View>

              <View
                style={{
                  width: windowWidth * 0.18,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: moderateScale(5, 0.6),
                }}>
                <Checkbox value="test" colorScheme="gray" />
                <CustomText
                  isBold
                  style={{
                    width: windowWidth * 0.09,
                    textAlign: 'left',
                    fontSize: moderateScale(12, 0.6),
                    color: Color.black,
                  }}>
                  Zakat
                </CustomText>
              </View>

              <View
                style={{
                  width: windowWidth * 0.22,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: moderateScale(5, 0.6),
                }}>
                <Checkbox value="test" colorScheme="gray" />
                <CustomText
                  isBold
                  style={{
                    width: windowWidth * 0.13,
                    textAlign: 'left',
                    fontSize: moderateScale(12, 0.6),
                    color: Color.black,
                  }}>
                  Honoree
                </CustomText>
              </View>
            </View>



            <View
              style={{
                width: windowWidth * 0.95,
                height: moderateScale(1),
                alignSelf: 'center',
                marginTop: moderateScale(20, 0.3),
                backgroundColor: Color.veryLightGray,
              }}></View>

            <View
              style={{
                width: windowWidth * 0.95,
                height: windowHeight * 0.1,
                alignSelf: 'center',
                borderBottomWidth: 1,
                borderColor: Color.veryLightGray,
                justifyContent: 'flex-end',
                marginTop: moderateScale(10, 0.3),
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: moderateScale(10, 0.6),
                  paddingVertical: moderateScale(10, 0.6),
                }}>
                <CustomText
                  style={{
                    fontSize: moderateScale(12, 0.6),
                    color: Color.veryLightGray,
                  }}>
                  Filter
                </CustomText>
                <CustomText
                 isBold
                  style={{
                    fontSize: moderateScale(12, 0.6),
                    color: Color.black,
                  }}>
                  All TIME
                </CustomText>
                <TouchableOpacity activeOpacity={0.5}>
                  <Icon
                    name={'arrow-drop-down'}
                    as={MaterialIcons}
                    size={moderateScale(20, 0.3)}
                    color={Color.black}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                width: windowWidth * 0.16,
                height: windowHeight * 0.06,
                borderRadius: moderateScale(20, 0.3),
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: Color.black,
                marginTop: moderateScale(40, 0.3),
                marginLeft: moderateScale(15, 0.3),
              }}>
              <CustomText
                isBold
                style={{fontSize: moderateScale(16, 0.6), textAlign: 'center'}}>
                0.00
              </CustomText>
            </View>
          </>
        ) : (
          <>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: windowWidth * 0.52,
              marginTop: moderateScale(30, 0.3),
              marginLeft: moderateScale(20, 0.3),
            }}>
            <View
              style={{
                width: windowWidth * 0.15,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: moderateScale(5, 0.6),
              }}>
              <Checkbox value="test" colorScheme="gray" />
              <CustomText
                isBold
                style={{
                  width: windowWidth * 0.06,
                  textAlign: 'left',
                  fontSize: moderateScale(12, 0.6),
                  color: Color.black,
                }}>
                All
              </CustomText>
            </View>

            <View
              style={{
                width: windowWidth * 0.18,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: moderateScale(5, 0.6),
              }}>
              <Checkbox value="test" colorScheme="gray" />
              <CustomText
                isBold
                style={{
                  width: windowWidth * 0.09,
                  textAlign: 'left',
                  fontSize: moderateScale(12, 0.6),
                  color: Color.black,
                }}>
                Zakat
              </CustomText>
            </View>

            <View
              style={{
                width: windowWidth * 0.22,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: moderateScale(5, 0.6),
              }}>
              <Checkbox value="test" colorScheme="gray" />
              <CustomText
                isBold
                style={{
                  width: windowWidth * 0.13,
                  textAlign: 'left',
                  fontSize: moderateScale(12, 0.6),
                  color: Color.black,
                }}>
                Honoree
              </CustomText>
            </View>
          </View>



          <View
            style={{
              width: windowWidth * 0.95,
              height: moderateScale(1),
              alignSelf: 'center',
              marginTop: moderateScale(20, 0.3),
              backgroundColor: Color.veryLightGray,
            }}></View>

          <View
            style={{
              width: windowWidth * 0.95,
              height: windowHeight * 0.1,
              alignSelf: 'center',
              borderBottomWidth: 1,
              borderColor: Color.veryLightGray,
              justifyContent: 'flex-end',
              marginTop: moderateScale(10, 0.3),
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: moderateScale(10, 0.6),
                paddingVertical: moderateScale(10, 0.6),
              }}>
              <CustomText
                style={{
                  fontSize: moderateScale(12, 0.6),
                  color: Color.veryLightGray,
                }}>
                Filter
              </CustomText>
              <CustomText
               isBold
                style={{
                  fontSize: moderateScale(12, 0.6),
                  color: Color.black,
                }}>
                All TIME
              </CustomText>
              <TouchableOpacity activeOpacity={0.5}>
                <Icon
                  name={'arrow-drop-down'}
                  as={MaterialIcons}
                  size={moderateScale(20, 0.3)}
                  color={Color.black}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              width: windowWidth * 0.16,
              height: windowHeight * 0.06,
              borderRadius: moderateScale(20, 0.3),
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: Color.black,
              marginTop: moderateScale(40, 0.3),
              marginLeft: moderateScale(15, 0.3),
            }}>
            <CustomText
              isBold
              style={{fontSize: moderateScale(16, 0.6), textAlign: 'center'}}>
              0.00
            </CustomText>
          </View>
        </>
        )}

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

export default GivingHistory;

const styles = StyleSheet.create({});
