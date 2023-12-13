import {StyleSheet, Text, View, TouchableOpacity,Clipboard} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from './CustomText';
import moment from 'moment';
import Color from '../Assets/Utilities/Color';
import CustomImage from './CustomImage';
import { Icon } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import CustomButton from './CustomButton';
import { useSelector } from 'react-redux';

const RecieptComponent = ({isVisible, setIsVisible, item , onPress, url}) => {
  const userData = useSelector(State => State.commonReducer.userData);

  
  const Data = [
    {
      type: 'from',
      name: userData?.name,
      number: userData?.id,
    },
    {
      type: 'To',
      name: 'Alwasila',
      number: null,
    },
    {
      type: 'Paid through',
      name: 'Stripe',
      number: null,
    },
    {
      type: 'status',
      name: 'paid',
      number: null,
    },
  ];
  const socialMedia = [
    {
      image: require('../Assets/Images/fb.png'),
      namne: 'facebook',
    },
    {
      image: require('../Assets/Images/instagram.png'),
      namne: 'instagram',
    },
    {
      image: require('../Assets/Images/telegram.png'),
      namne: 'telegram',
    },
    {
      image: require('../Assets/Images/twitter.png'),
      namne: 'twitter',
    },
    {
      image: require('../Assets/Images/whatsapp.png'),
      namne: 'whatsapp',
    },
  ];
  return (
    <Modal
      isVisible={isVisible}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.container}>
        


        <View style={styles.Header}>
          <View>
            <CustomText
              isBold
              style={{
                color: Color.white,
                fontSize: moderateScale(17, 0.6),
              }}>
              Reciept Details
            </CustomText>
            <CustomText
              style={{
                color: Color.white,
                fontSize: moderateScale(12, 0.6),
              }}>
              {moment().format('ll')}
            </CustomText>
          </View>
          <CustomText
            style={{
              color: Color.white,
              fontSize: moderateScale(12, 0.6),
            }}>
            {moment().format('hh:mm:ss')}
          </CustomText>
        </View>
        {Data.map((item, index) => {
          return (
            <View
              key={index}
              style={[
                styles.card,
                index != Data?.length - 1 && {
                  borderBottomWidth: 1,
                },
              ]}>
              <CustomText
                style={{
                  fontSize: moderateScale(11, 0.6),
                  color: '#BBBBBB',
                }}>
                {item?.type}
              </CustomText>
              <View
                style={
                  {
                    //   backgroundColor: 'red',
                  }
                }>
                <CustomText
                  style={{
                    fontSize:
                      index < 2
                        ? moderateScale(14, 0.6)
                        : moderateScale(10, 0.6),
                  }}
                  isBold={index < 2}>
                  {item?.name}
                </CustomText>
                {item?.number && (
                  <CustomText
                    style={{
                      fontSize: moderateScale(11, 0.6),
                      color: '#BBBBBB',
                      textAlign: 'right',
                    }}>
                    {item?.number}
                  </CustomText>
                )}
              </View>
            </View>
          );
        })}
        <View
          style={{
            alignSelf: 'center',
            marginTop: moderateScale(25, 0.3),
            width: windowWidth * 0.8,
            borderTopWidth: 2,
            borderStyle: 'dashed',
            borderColor: Color.veryLightGray,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: windowWidth * 0.8,
            marginTop: moderateScale(20, 0.3),
            alignItems: 'center',
          }}>
          <CustomText
            style={{
              fontSize: moderateScale(11, 0.6),
              color: '#BBBBBB',
            }}>
            Amount debited
          </CustomText>
          <CustomText
            style={{
              fontSize: moderateScale(20, 0.6),
            }}
            isBold>
           ${item}
          </CustomText>
        </View>
        <CustomText
          style={{
            marginTop: moderateScale(20, 0.3),
            fontSize: moderateScale(20, 0.6),
          }}
          isBold>
          Thank you !
        </CustomText>
        {/* <CustomText
          style={{
            marginTop: moderateScale(20, 0.3),
            fontSize: moderateScale(10, 0.6),
            textAlign: 'left',
            width: windowWidth * 0.8,
          }}>
          share this link via
        </CustomText>
        <View
          style={{
            flexDirection: 'row',
            //    justifyContent: 'space-between',
            width: windowWidth * 0.8,
            marginTop: moderateScale(10, 0.3),
            alignItems: 'center',
          }}>
          {socialMedia.map((item, index) => {
            return (
              <TouchableOpacity
                style={{
                  marginRight: moderateScale(15, 0.6),
                  width: windowWidth * 0.12,
                  height: windowWidth * 0.12,
                  borderRadius: (windowWidth * 0.12) / 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: '#3E3028',
                  borderWidth: 1,
                }}>
                <CustomImage
                  source={item?.image}
                  style={{
                    width: moderateScale(20, 0.6),
                    height: moderateScale(20, 0.6),
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </View> */}
        <CustomText
          style={{
            marginTop: moderateScale(20, 0.3),
            fontSize: moderateScale(10, 0.6),
            textAlign: 'left',
            width: windowWidth * 0.8,
          }}>
          copy link
        </CustomText>
        <View
          style={{
            flexDirection: 'row',
            padding : moderateScale(4,0.6),
            borderWidth: 1,
            borderColor: Color.veryLightGray,
               justifyContent: 'space-between',
            width: windowWidth * 0.8,
            marginTop: moderateScale(10, 0.3),
            alignItems: 'center',
          }}>
            <Icon 
            name ={'copy'}
            as={FontAwesome}
            size={moderateScale(12,0.6)}
            color={'#3E3028'}
            />
              <CustomText
          style={{
            fontSize: moderateScale(9, 0.6),
            marginLeft : moderateScale(10, 0.6),
            width : windowWidth * 0.5,
            color : '#3E3028'
          }}>
        {url}
        </CustomText>
        <CustomButton
            onPress={() => {
              // navigationService.navigate('DonateNow');
              Clipboard.setString(url)
            }}
            text={'Copy'}
            textColor={Color.white}
            width={windowWidth * 0.17}
            height={windowHeight * 0.03}
            fontSize={moderateScale(8, 0.6)}
            bgColor={'#3E3028'}
            borderRadius={moderateScale(2, 0.3)}    
          
          />
          </View>
          <CustomButton
            onPress={() => {
              onPress ? onPress() :   setIsVisible(false)
            }}
            text={'Close'}
            textColor={Color.white}
            width={windowWidth * 0.3}
            height={windowHeight * 0.05}
            fontSize={moderateScale(14, 0.6)}
            bgColor={'#3E3028'}
            borderRadius={moderateScale(10, 0.3)}    
            marginTop={moderateScale(20, 0.3)}
          />
      </View>
    </Modal>
  );
};

export default RecieptComponent;

const styles = ScaledSheet.create({
  container: {
    width: windowWidth * 0.9,
    paddingBottom : moderateScale(20,0.6),
    // height: windowHeight * 0.88,
    borderRadius: moderateScale(20, 0.6),
    backgroundColor: 'white',
    overflow: 'hidden',
    alignItems: 'center',
  },
  Header: {
    width: '100%',
    height: windowHeight * 0.08,
    backgroundColor: '#3E3028',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(15, 0.6),
  },
  card: {
    marginTop: moderateScale(20, 0.3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth * 0.8,
    alignItems: 'center',

    paddingBottom: moderateScale(10, 0.6),
    borderColor: Color.black,
  },
});
