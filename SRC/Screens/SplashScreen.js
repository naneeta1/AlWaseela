import React from "react";
import * as Animatable from "react-native-animatable";
import Color from "../Assets/Utilities/Color";
import CustomImage from "../Components/CustomImage";
import { windowHeight, windowWidth } from "../Utillity/utils";
import { moderateScale, ScaledSheet } from "react-native-size-matters";
import ScreenBoiler from "../Components/ScreenBoiler";
import LinearGradient from "react-native-linear-gradient";
import CustomText from "../Components/CustomText";
import { View } from 'react-native'

const SplashScreen = () => {
  return (
    <ScreenBoiler

      statusBarBackgroundColor={'white'}
      statusBarContentStyle={"dark-content"}
    >
      <LinearGradient
        style={{
          width: windowWidth,
          alignItems: 'center',
          justifyContent: 'center',
          height: windowHeight,
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[Color.white, Color.white]}
      // locations ={[0, 0.5, 0.6]}
      >



        <Animatable.View
          animation="zoomIn"
          duration={2500}
          useNativeDriver
          style={{
            // backgroundColor: 'red',
            alignItems: 'center',
            height: windowHeight * 0.8
          }}


        >
          <View style={styles.bottomImage}>
            <CustomImage
              source={require('../Assets/Images/logo.png')}
              resizeMode={"stretch"}
              style={{ width: '100%', height: '100%' }}
            />
          </View>
          {/* <CustomText isBold style={{
            textAlign: 'center',
            fontSize: moderateScale(27, 0.6),
            marginTop: moderateScale(10, 0.3)
          }}>AlWasila</CustomText> */}
          <CustomText style={{
            textAlign: 'center',
            fontSize: moderateScale(18, 0.6),
            color: Color.veryLightGray,
            paddingHorizontal: moderateScale(10, .6),
            fontStyle: 'italic'

            // marginTop : moderateScale(10,0.3)
          }}>Donate now and become our partners in khair</CustomText>
          <View style={{
            position: 'absolute',
            bottom: 0,
            alignItems:'center',
            // backgroundColor: 'red',
          }}>
            <CustomText isBold style={{
              textAlign: 'center',
              fontSize: moderateScale(27, 0.6),
              marginTop: moderateScale(10, 0.3)
            }}>A Project Of</CustomText>
            <View style={{ width: windowWidth * 0.2, height: windowHeight * 0.08 }}>
              <CustomImage
                source={require('../Assets/Images/alwaseela.png')}
                resizeMode={"stretch"}
                style={{ width: '100%', height: '100%' }}
              />
            </View>

          </View>


        </Animatable.View>

      </LinearGradient>
    </ScreenBoiler>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    height: windowHeight,
    width: windowWidth,
    backgroundColor: Color.themeColor
  },
  bottomImage: {
    width: windowWidth * 0.8,
    height: windowWidth * 0.8,
  },
  // textContainer: {
  //   flexDirection: "row",
  //   alignSelf :'center',
  //   width : windowWidth * 0.4,
  //   height :windowWidth * 0.4,
  //   borderRadius : moderateScale(windowWidth* 0.7 / 2 , 0.3),
  //   justifyContent : 'center',
  //   alignItems : 'center',
  //   // backgroundColor : Color.white,


  // },
  LogoText: {
    fontSize: moderateScale(35, 0.3),
    fontWeight: "bold",
  },

});

export default SplashScreen;
