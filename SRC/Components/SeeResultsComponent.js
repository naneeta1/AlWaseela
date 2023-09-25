import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from './CustomText';
import Color from '../Assets/Utilities/Color';
import CustomImage from './CustomImage';

const SeeResultsComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Card}>
        <View style={styles.Image}>
          <CustomImage
            resizeMode="contain"
            source={require('../Assets/Images/seeResult.png')}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </View>

        <View style={styles.content}>
          <CustomText numberOfLines={1} style={{color:Color.black,fontSize:moderateScale(14,0.6)}}>Help Overcome Malnutrition...</CustomText>
        <View style={{flexDirection:'row'}}>
          <CustomText style={{color:'#3E3028'}}>$8,775 </CustomText>
          <CustomText>fund raised from $10,540</CustomText>
        </View>  

          <View
            style={{
              width: windowWidth * 0.48,
              height: moderateScale(7, 0.6),
              backgroundColor: '#DDDDDD',
              borderRadius: moderateScale(20, 0.6),
               justifyContent:'center'
            }}>
            <View
              style={{
                width: '85%',
                height: moderateScale(5, 0.6),
                backgroundColor: '#3E3028',
                borderRadius: moderateScale(20, 0.6),
              }}></View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',width:windowWidth*0.53}}>
         <View style={{flexDirection:'row',justifyContent:'space-between',width:windowWidth*0.24}}>
          <CustomText>4,471</CustomText>
          <CustomText>Donators</CustomText>
         </View>   
          <CustomText>9 days left</CustomText>
        </View>  
        </View>



      </View>

      <View style={{width:windowWidth*0.85,marginTop:moderateScale(50,0.3),borderBottomWidth:1,borderColor:Color.veryLightGray}}></View>
     
      <CustomText style={{textAlign:'center',fontSize:moderateScale(22,0.6),marginTop:moderateScale(20,0.3)}}>Fundraising Results</CustomText>

      <View style={{flexDirection:'row',width:windowWidth*0.8,justifyContent:'space-between',marginTop:moderateScale(20,0.3)}}>
        <View style={{width:windowWidth*0.24,height:windowHeight*0.1,justifyContent:'space-evenly',borderRadius:moderateScale(10,0.3),borderWidth:1,borderColor:'#3E3028'}}>
        <CustomText isBold style={{textAlign:'center',fontSize:moderateScale(15,0.6)}}>$8,775</CustomText>
        <CustomText style={{color:Color.black,textAlign:'center',fontSize:moderateScale(11,0.6)}}>Funds gained</CustomText>      
        </View>

        <View style={{width:windowWidth*0.24,height:windowHeight*0.1,justifyContent:'space-evenly',borderRadius:moderateScale(10,0.3),borderWidth:1,borderColor:'#3E3028'}}>
        <CustomText isBold style={{textAlign:'center',fontSize:moderateScale(15,0.6)}}>$1,765</CustomText>
        <CustomText style={{color:Color.black,textAlign:'center',fontSize:moderateScale(11,0.6)}}>Funds left</CustomText>      
        </View>

        <View style={{width:windowWidth*0.24,height:windowHeight*0.1,justifyContent:'space-evenly',borderRadius:moderateScale(10,0.3),borderWidth:1,borderColor:'#3E3028'}}>
        <CustomText isBold style={{textAlign:'center',fontSize:moderateScale(15,0.6)}}>4,471</CustomText>
        <CustomText style={{color:Color.black,textAlign:'center',fontSize:moderateScale(11,0.6)}}>Donators</CustomText>      
        </View>
        
      </View>

      <View style={{flexDirection:'row',width:windowWidth*0.8,justifyContent:'space-between',marginTop:moderateScale(20,0.3)}}>
        <View style={{width:windowWidth*0.24,height:windowHeight*0.1,justifyContent:'space-evenly',borderRadius:moderateScale(10,0.3),borderWidth:1,borderColor:'#3E3028'}}>
        <CustomText isBold style={{textAlign:'center',fontSize:moderateScale(15,0.6)}}>9</CustomText>
        <CustomText style={{color:Color.black,textAlign:'center',fontSize:moderateScale(11,0.6)}}>days left</CustomText>      
        </View>

        <View style={{width:windowWidth*0.24,height:windowHeight*0.1,justifyContent:'space-evenly',borderRadius:moderateScale(10,0.3),borderWidth:1,borderColor:'#3E3028'}}>
        <CustomText isBold style={{textAlign:'center',fontSize:moderateScale(15,0.6)}}>82%</CustomText>
        <CustomText style={{color:Color.black,textAlign:'center',fontSize:moderateScale(11,0.6)}}>Funds reached</CustomText>      
        </View>

        <View style={{width:windowWidth*0.24,height:windowHeight*0.1,justifyContent:'space-evenly',borderRadius:moderateScale(10,0.3),borderWidth:1,borderColor:'#3E3028'}}>
        <CustomText isBold style={{textAlign:'center',fontSize:moderateScale(15,0.6)}}>2.389</CustomText>
        <CustomText style={{color:Color.black,textAlign:'center',fontSize:moderateScale(11,0.6)}}>Prayers</CustomText>      
        </View>
        
      </View>

      

    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: windowWidth,
    alignItems: 'center',
    marginTop: moderateScale(15, 0.3),
  },
  Card: {
    width: windowWidth * 0.85,
    height: windowHeight * 0.15,
    borderWidth: 1,
    borderColor: Color.veryLightGray,
    borderRadius: moderateScale(22, 0.3),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:moderateScale(25,0.3)
  },

  Image: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.15,
    borderRadius: moderateScale(22, 0.3),
  },

  content: {
    width: windowWidth * 0.6,
    height:windowHeight*0.11,
    flexDirection: 'column',
    justifyContent:'space-between',
    paddingLeft:moderateScale(10,0.6)
  },
});

export default SeeResultsComponent;
