import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import moment from 'moment';
import {moderateScale} from 'react-native-size-matters';
import {windowWidth} from '../Utillity/utils';
import CustomText from './CustomText';
import Color from '../Assets/Utilities/Color';

const TransectionCard = ({item}) => {
  console.log(
    '🚀 ~ file: TransectionCard.js:10 ~ TransectionCard ~ item:',
    item,
  );
  return (
    <View
      style={{
        // paddingHorizontal: moderateScale(15, 0.3),
        marginTop: moderateScale(10, 0.6),
        // borderWidth:1,
        borderBottomWidth: 1,
        borderColor: Color.mediumGray,
        marginHorizontal: moderateScale(10, 0.6),
        paddingVertical: moderateScale(5, 0.3),
        // backgroundColor:"red"
      }}>
      <View style={{
        flexDirection:'row',
        marginHorizontal:moderateScale(10,0.3),
        paddingVertical:moderateScale(5,0.3),
      // backgroundColor:'red',
        // justifyContent:'space-between'
      }}>
          <CustomText
          style={
            {
              // flexDirection:'row',
              fontSize: moderateScale(11, 0.8),
            }}
          isBold>
          id:
        </CustomText>
        <CustomText
          style={{
            color:Color.themeColor,
              paddingHorizontal:moderateScale(5,0.3),
              fontSize: moderateScale(11, 0.8),
            }}
          isBold>
          {item?.transaction_id}
        </CustomText>
      
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          // backgroundColor:'red'
        }}>
        <CustomText style={styles.title} isBold>
          {item?.category}
        </CustomText>
        <View>
          <CustomText
            style={[
              styles.moment,
              {
                fontSize: moderateScale(15, 0.3),
                color: Color.themeColor,
              },
            ]}
            isBold>
            {item?.amount}
          </CustomText>
          <CustomText style={styles.moment}>
            {moment(item?.donation_date).format('MMM Do YY')}
          </CustomText>
        </View>
      </View>
    </View>
  );
};

export default TransectionCard;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    // alignItems:"center",
    // backgroundColor:'red',
    width: windowWidth * 0.5,
    color: Color.themeColor,
    fontSize: moderateScale(13, 0.8),
  },
  price: {
    fontSize: moderateScale(16, 0.3),
    color: Color.themeColor,
  },
  moment: {
    // backgroundColor:'red',
    width: windowWidth * 0.3,
    textAlign: 'center',
    color: Color.mediumGray,
    fontSize: moderateScale(12, 0.2),
  },
});
