import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Switch,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../Components/Header';
import CustomText from '../Components/CustomText';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomStatusBar from '../Components/CustomStatusBar';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import CustomImage from '../Components/CustomImage';
import {Icon, Row, Checkbox} from 'native-base';
import navigationService from '../navigationService';
import ScreenBoiler from '../Components/ScreenBoiler';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FundRaiseCard from '../Components/FundRaiseCard';
import CustomButton from '../Components/CustomButton';
import {SliderBox} from 'react-native-image-slider-box';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TextInputWithTitle from '../Components/TextInputWithTitle';

const DonateNowpage = () => {
  const [price, setPrice] = useState('');
  const [enabled, setEnabled] = useState(false);
  const [quantity, setQuantity] = useState(0);

  return (
    <ScreenBoiler
      statusBarBackgroundColor={'white'}
      statusBarContentStyle={'dark-content'}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: moderateScale(20, 0.6),
        }}>
        <LinearGradient
          style={{
            width: windowWidth,
            minHeight: windowHeight,
          }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#F6F3F3', '#F6F3F3']}>
          <View
            style={{
              width: windowWidth * 0.9,
              height: windowHeight * 0.1,
              // backgroundColor: 'blue',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TextInputWithTitle
              titleText={'Email'}
              placeholder={'$0.00'}
              setText={setPrice}
              value={price}
              borderBottom={1}
              // viewHeight={0.07}
              viewWidth={0.75}
              inputWidth={0.7}
              borderColor={'#000'}
              marginTop={moderateScale(15, 0.3)}
              color={Color.black}
              placeholderColor={Color.black}
              textAlign={'center'}
              // elevation
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                width: windowWidth * 0.05,
                height: windowWidth * 0.05,
                borderRadius: (windowWidth * 0.05) / 2,
                backgroundColor: Color.veryLightGray,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name={'cross'}
                as={Entypo}
                size={moderateScale(17, 0.3)}
                color={Color.white}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              width: windowWidth * 0.9,
              height: windowHeight * 0.1,
              marginTop: moderateScale(10, 0.3),
              alignSelf: 'center',
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                width: windowWidth * 0.4,
                borderBottomWidth: 1,
                borderColor: '#3E3028',
              }}>
              <CustomText
                style={{
                  color: Color.black,
                  fontSize: moderateScale(16, 0.6),
                  textAlign: 'center',
                }}>
                ONE-TIME
              </CustomText>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={{width: windowWidth * 0.4}}>
              <CustomText
                style={{
                  color: Color.black,
                  fontSize: moderateScale(16, 0.6),
                  textAlign: 'center',
                }}>
                RECURRING
              </CustomText>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: windowWidth,
              height: windowHeight * 0.26,
              alignSelf: 'center',
              marginTop: moderateScale(20, 0.3),
              borderBottomWidth: 1,
              borderColor: Color.veryLightGray,
            }}>
            <View
              style={{
                width: windowWidth * 0.9,
                alignSelf: 'center',
                paddingHorizontal: moderateScale(5, 0.6),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: windowWidth * 0.31,
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <CustomText
                  style={{
                    fontSize: moderateScale(16, 0.6),
                    color: Color.veryLightGray,
                  }}>
                  Purpose
                </CustomText>
                <CustomText
                  style={{
                    fontSize: moderateScale(12, 0.6),
                    color: Color.veryLightGray,
                  }}>
                  Required
                </CustomText>
              </View>

              <View
                style={{
                  width: windowWidth * 0.05,
                  height: windowHeight * 0.04,
                }}>
                <CustomImage
                  resizeMode="contain"
                  source={require('../Assets/Images/worldwide.png')}
                  style={{
                    width: '100%',
                    height: '100%',
                    tintColor: '#000',
                  }}
                />
              </View>
            </View>

            <View
              style={{
                marginTop: moderateScale(20, 0.3),
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: windowWidth * 0.3,
                marginLeft: moderateScale(20, 0.3),
                paddingHorizontal: moderateScale(10, 0.6),
              }}>
              <Checkbox value="test" colorScheme="gray" />
              <CustomText
                style={{
                  fontSize: moderateScale(13, 0.6),
                  color: Color.veryLightGray,
                  width: windowWidth * 0.18,
                  textAlign: 'left',
                }}>
                Sadaqa
              </CustomText>
            </View>

            <View
              style={{
                marginTop: moderateScale(15, 0.3),
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: windowWidth * 0.92,
                marginLeft: moderateScale(20, 0.3),
                paddingHorizontal: moderateScale(10, 0.6),
              }}>
              <Checkbox value="test" colorScheme="gray" />
              <CustomText
                numberOfLines={1}
                style={{
                  fontSize: moderateScale(13, 0.6),
                  color: Color.veryLightGray,
                  width: windowWidth * 0.8,
                  // backgroundColor:'red',
                  textAlign: 'left',
                }}>
                1 of 10 volumes of the English Meanings of the...
              </CustomText>
            </View>

            <View
              style={{
                marginTop: moderateScale(15, 0.3),
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: windowWidth * 0.92,
                marginLeft: moderateScale(20, 0.3),
                paddingHorizontal: moderateScale(10, 0.6),
              }}>
              <Checkbox value="test" colorScheme="gray" />
              <CustomText
                numberOfLines={1}
                style={{
                  fontSize: moderateScale(13, 0.6),
                  color: Color.veryLightGray,
                  width: windowWidth * 0.8,
                  // backgroundColor:'red',
                  textAlign: 'left',
                }}>
                4 of 10 volumes of the English Quran in Braille
              </CustomText>
            </View>

            <CustomText
              style={{
                fontSize: moderateScale(13, 0.6),
                color: Color.black,
                width: windowWidth,
                textAlign: 'left',
                paddingHorizontal: moderateScale(30, 0.6),
                marginTop: moderateScale(20, 0.6),
              }}>
              See More
            </CustomText>
          </View>

          <View
            style={{
              width: windowWidth * 0.95,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: moderateScale(5, 0.6),
              paddingHorizontal: moderateScale(5, 0.6),
              marginTop: moderateScale(30, 0.3),
            }}>
            <CustomText
              style={{
                fontSize: moderateScale(14, 0.6),
                color: Color.veryLightGray,
              }}>
              In Honor Of Optional
            </CustomText>
            <TouchableOpacity
              style={{
                width: windowWidth * 0.05,
                height: windowWidth * 0.05,
                borderRadius: (windowWidth * 0.05) / 2,
                borderWidth: 1,
                borderColor: Color.veryLightGray,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name={'plus'}
                color={Color.themeColor}
                as={Entypo}
                size={5}
              />
            </TouchableOpacity>
          </View>

          <CustomText
            style={{
              fontSize: moderateScale(15, 0.6),
              marginTop: moderateScale(10, 0.6),
              color: Color.black,
              // backgroundColor: 'red',
              width: windowWidth,
              paddingHorizontal: moderateScale(20, 0.6),
            }}
            isBold>
            {`Add Fees (+$0.00)`}
          </CustomText>

          <View
            style={{
              flexDirection: 'row',
              // backgroundColor: 'red',
              width: windowWidth,
              justifyContent: 'space-between',
              paddingHorizontal: moderateScale(20, 0.6),
              alignItems: 'center',
            }}>
            <CustomText
              style={{
                color: Color.veryLightGray,
                fontSize: moderateScale(13, 0.6),
              }}>
              Include Processing fee
            </CustomText>
            <Switch
              trackColor={{false: '#767577', true: '#767577'}}
              thumbColor={true ? Color.themeColor : Color.veryLightGray}
              bor
              onValueChange={val => {
                setEnabled(val);
              }}
              value={enabled}
            />
          </View>

          <CustomText
            style={{
              // backgroundColor: 'red',
              fontSize: moderateScale(12, 0.6),
              color: Color.black,
              width: windowWidth,
              marginTop: moderateScale(10, 0.3),
              paddingHorizontal: moderateScale(20, 0.6),
            }}>
            See more
          </CustomText>

          <View
            style={{
              width: windowWidth,
              paddingHorizontal: moderateScale(10, 0.6),
              paddingVertical: moderateScale(40, 0.6),
              justifyContent: 'space-between',
              // backgroundColor: 'red',
              flexDirection: 'row',
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: moderateScale(10, 0.6),
              }}>
              <CustomText
                style={{
                  fontSize: moderateScale(16, 0.6),
                  color: Color.black,
                  marginRight: moderateScale(5, 0.3),
                }}
                isBold>
                $10
              </CustomText>
              <Icon
                name={'minuscircleo'}
                color={Color.themeColor}
                as={AntDesign}
                size={6}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <CustomText
                style={{
                  flexDirection: 'row',
                  fontSize: moderateScale(15, 0.6),
                  // backgroundColor: 'red',
                  width: windowWidth * 0.15,
                }}>
                0.00$
              </CustomText>
              <View
                style={{
                  backgroundColor: Color.themeColor,
                  paddingHorizontal: moderateScale(10, 0.6),
                }}>
                <CustomText
                  style={{
                    color: Color.white,
                    fontSize: moderateScale(13, 0.6),
                  }}>
                  {'USD'.toUpperCase()}
                </CustomText>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: moderateScale(10, 0.6),
              }}>
              <Icon
                name={'pluscircleo'}
                color={Color.themeColor}
                as={AntDesign}
                size={6}
              />
              <CustomText
                style={{
                  fontSize: moderateScale(16, 0.6),
                  color: Color.black,
                  marginLeft: moderateScale(5, 0.3),
                }}
                isBold>
                $10
              </CustomText>
            </View>
          </View>
         
          <CustomButton
            onPress={() => {
              navigationService.navigate('');
            }}
            text={'Continue'}
            textColor={Color.white}
            // iconName={'pencil'}
            // iconType={Entypo}
            width={windowWidth * 0.7}
            height={windowHeight * 0.06}
            fontSize={moderateScale(13, 0.6)}
            marginTop={moderateScale(20, 0.3)}
            bgColor={Color.themeColor}
            borderRadius={moderateScale(20, 0.3)}
            iconStyle={{
              fontSize: moderateScale(14, 0.6),
            }}
            marginRight={moderateScale(5, 0.3)}
            isBold
          />

        </LinearGradient>
      </ScrollView>
    </ScreenBoiler>
  );
};

export default DonateNowpage;
