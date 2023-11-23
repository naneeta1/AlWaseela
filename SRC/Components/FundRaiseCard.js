import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from './CustomText';
import Color from '../Assets/Utilities/Color';
import CustomImage from './CustomImage';
import {mode} from 'native-base/lib/typescript/theme/tools';
import navigationService from '../navigationService';
import CustomButton from './CustomButton';

const FundRaiseCard = ({item}) => {
  console.log(item);
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.container}
      onPress={() => {
        navigationService.navigate('DonationDetail', {item: item});
      }}>
        {
          item?.type == 'fixed' &&
     
        <View style={{
          position : 'absolute' ,
          zIndex : 1,
          left : 20 , 
          top : 10,
        }}>

      
          <CustomButton
          
              onPress={() => {
                navigationService.navigate('DonationDetail', {item: item});
              }}
              isBold
              text={'Buy Ticket'}
              textColor={Color.white}
              width={windowWidth * 0.15}
              height={windowHeight * 0.03}
              fontSize={moderateScale(7, 0.6)}
              // marginTop={moderateScale(30, 0.3)}d
              bgColor={Color.themeColor}
              borderRadius={moderateScale(20, 0.3)}
              alignSelf={'center'}
            />
              </View>
                 }
      {/* <CustomText isBold style={styles.text}>
        {item?.category}
      </CustomText> */}
      <View
        style={[
          styles.card,
          !item?.alhamdullilahMoment && {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
            alignItems: 'center',
          },
        ]}>
        <ImageBackground
          source={{uri: item?.image}}
          style={{
            width: '100%',
            height: windowHeight * 0.2,
            justifyContent: 'flex-end',
            // paddingLeft : '20%',
          }}>
            <View style={{
              padding : moderateScale(5,0.6),
              backgroundColor : 'rgba(0,0,0,0.4)',
              width : '90%',
              borderRadius : moderateScale(5,0.6),
              alignSelf : 'center',
              marginBottom : moderateScale(10,0.3),
}}>
              <CustomText numberOfLines={2} style={styles.text1}>
            {item?.tagLine}
          </CustomText>
          </View>
        </ImageBackground>
      
        
        {/* {item?.fundRaising && item?.type == 'variable' &&( */}
          <>
          <View
            style={{
              width: windowWidth * 0.83,
              height: moderateScale(10, 0.6),
              alignSelf: 'center',
              backgroundColor: '#DDDDDD',
              marginTop: moderateScale(10, 0.3),
              borderRadius: moderateScale(20, 0.6),
            }}>
            <View
              style={{
                width: item?.type == 'variable' ? `${(item?.collected / item?.target) * 100}%` : `${(item?.ticket_counter / item?.ticket_tickets) * 100}%` ,
                height: moderateScale(10, 0.6),

                backgroundColor: '#3E3028',

                borderRadius: moderateScale(20, 0.6),
              }}></View>
          </View>
           <View
           style={{
             width: windowWidth * 0.83,
             justifyContent : 'space-between',
             flexDirection : 'row',
            //  height: moderateScale(10, 0.6),
             alignSelf: 'center',marginBottom :10,
           }}>
              <CustomText
                  style={{
                    width: windowWidth * 0.4,
                    fontSize: moderateScale(12, 0.6),
                    // marginTop: moderateScale(5, 0.3),
                    color: Color.black,
                  }}
                  isBold
                  >
                  {item?.type == 'variable' ? `Target : Rs ${item?.target} ` : `Sold tickets ${item?.ticket_counter}` }    
                </CustomText>
                <CustomText
                  style={{
                    // width: windowWidth * 0.4,
                    fontSize: moderateScale(12, 0.6),
                    // marginTop: moderateScale(5, 0.3),
                    color: Color.black,
                  }}
                  isBold>
                  {item?.type == 'variable' ? `${item?.donators} donators` : `total tickets ${item?.ticket_tickets}` } </CustomText>
           </View>
           </>
          
        {/* )} */}
        {/* {item?.type == 'variable' ? (
          // <View style={styles.thanks}>
          //   <CustomImage
          //     source={require('../Assets/Images/mangives.png')}
          //     style={{
          //       width: moderateScale(100, 0.6),
          //       height: moderateScale(50, 0.6),
          //     }}
          //   />
          //   <CustomText style={[styles.text1, {width: windowWidth * 0.3}]}>
          //     Sieze your alhamdullilah moment
          //   </CustomText>
          // </View>
          <></>
        ) : (
          <></>
          // <CustomText style={styles.text2}>{item?.location}</CustomText>
         
        )} */}
      </View>
    </TouchableOpacity>
  );
};

export default FundRaiseCard;

const styles = ScaledSheet.create({
  container: {
    width: windowWidth,
    // height: windowHeight * 0.2,
    // backgroundColor : 'red',
    alignItems: 'center',
    marginTop: moderateScale(5, 0.3),
  },
  card: {
    width: windowWidth * 0.95,
    // height: windowHeight * 0.24,
    // paddingBottom: moderateScale(20, 0.6),
    backgroundColor: 'white',
    overflow: 'hidden',
    borderRadius: moderateScale(10, 0.6),
  },
  text: {
    width: windowWidth * 0.95,
    textAlign: 'left',
    marginBottom: moderateScale(7, 0.3),
    fontSize: moderateScale(14, 0.6),
  },
  text1: {
    marginLeft: moderateScale(20, 0.6),
    width: '80%',
    textAlign: 'left',
    marginBottom: moderateScale(7, 0.3),
    fontSize: moderateScale(12, 0.6),
    lineHeight: moderateScale(17, 0.6),
    color: Color.white,
  },
  text2: {
    marginLeft: moderateScale(20, 0.6),
    width: windowWidth * 0.82,
    textAlign: 'left',
    marginTop: moderateScale(5, 0.3),
    fontSize: moderateScale(12, 0.6),
    // lineHeight: moderateScale(17, 0.6),
    color: Color.veryLightGray,
    textTransform: 'uppercase',
  },
  thanks: {
    width: '100%',
    height: windowHeight * 0.1,
    backgroundColor: '#3E3028',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20, 0.6),
    alignItems: 'center',
    marginTop: moderateScale(30, 0.3),
    borderRadius: moderateScale(10, 0.6),
  },
});
