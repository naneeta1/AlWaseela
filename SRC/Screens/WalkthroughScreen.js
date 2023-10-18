import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';
import {Icon} from 'native-base';
import AppIntroSlider from 'react-native-app-intro-slider';
import Color from '../Assets/Utilities/Color';
import {useSelector, useDispatch} from 'react-redux';
import ScreenBoiler from '../Components/ScreenBoiler';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale} from 'react-native-size-matters';
import CustomText from '../Components/CustomText';
import CustomImage from '../Components/CustomImage';
import {setWalkThrough} from '../Store/slices/auth';
import LinearGradient from 'react-native-linear-gradient';

const WalkThroughScreen = props => {
  const dispatch = useDispatch();

  const slides = [
    {
      key: '1',
      logo: require('../Assets/Images/secure.png'),
      title: 'Secure',
      subtitle:'Give securely and immediately',
      text: `Support reputable and charitable organizations by channeling your contributions through trusted financial partners such as stripe and plaid.`,
    },
    {
      key: '2',
      logo: require('../Assets/Images/easy.png'),
      title: ' Easy',
      subtitle:'Accumulate your moments of gratitude (alhamdulilah) continuously',
      text: `Effortlessly eet your charitable responsibilities throughout the year by setting up recurring donations and taking advantage of gift aid`,
    },
    {
      key: '3',
      logo: require('../Assets/Images/ImpactFul.png'),
      subtitle:'Create a lasting legacy',
      title: 'Impact ful',
      text: `Discover and support charities effortlessly with a single tap, making your contributions more purposeful and meaningful.`   },
  ];
  //   const slides = [
  //     {
  //       key: '1',
  //       title: 'Buy or Sell Residential',
  //       text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
  //       logo: require('../Assets/Images/walkthrough1.png'),
  //     },
  //     {
  //       key: '2',
  //       title: 'Buy or Sell Residential',
  //       text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ',
  //       logo: require('../Assets/Images/walkthrough2.png'),
  //     },
  //   ];

  const RenderSlider = ({item}) => {
    return (
      <View style={styles.SliderContainer}>
        <LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.5, y: 1.0}}
          colors={['white', 'white']}
          style={{
            width: windowWidth,
            alignItems: 'center',
              // justifyContent: 'center',
            height: windowHeight,
          }}>
            <View style={{width:windowWidth*0.3, height:windowHeight*0.3, marginTop:moderateScale(80,.3)}}>
          <Image
            source={item.logo}
            resizeMode={'contain'}
            style={{height: '100%', width:'100%'}}
          />
          </View>
         
            <CustomText
              style={{
                color: Color.black,
                fontSize: moderateScale(25, 0.6),
                width: windowWidth * 0.8,
                textAlign: 'center',
                paddingVertical: moderateScale(15, 0.6),
              }}
              numberOfLines={2}
              isBold>
              {item?.title}
            </CustomText>
            <CustomText
              style={{
                color: Color.black,
                fontSize: moderateScale(18, 0.6),
                width: windowWidth * 0.9,
                textAlign: 'center',
                paddingVertical: moderateScale(10, 0.6),
              }}
              numberOfLines={15} isBold>
              {item?.subtitle}
            </CustomText>
            <CustomText
              style={{
                color: Color.veryLightGray,
                fontSize: moderateScale(14, 0.6),
                width: windowWidth * 0.8,
                textAlign: 'center',
                paddingVertical: moderateScale(5, 0.6),
              }}
              // numberOfLines={15}
              >
              {item?.text}
            </CustomText>
           
          
        </LinearGradient>
      </View>
    );
  };

  const RenderNextBtn = () => {
    return (
      <CustomText style={[styles.generalBtn, styles.btnRight]}>Next</CustomText>
    );
  };
  const RenderDoneBtn = () => {
    return (
      <CustomText
        onPress={() => {
          dispatch(setWalkThrough(true));
        }}
        style={[styles.generalBtn, styles.btnRight]}>
        Done
      </CustomText>
    );
  };
  const RenderSkipBtn = () => {
    return (
      <CustomText
        onPress={() => {
          dispatch(setWalkThrough(true));
        }}
        style={[styles.generalBtn, styles.btnLeft]}>
        Skip
      </CustomText>
    );
  };
  const RenderBackBtn = () => {
    return (
      <CustomText style={[styles.generalBtn, styles.btnLeft]}>Back</CustomText>
    );
  };
  return (
    <ScreenBoiler
      showHeader={false}
      statusBarBackgroundColor={[Color.white, Color.white]}
      statusBarContentStyle={'dark-content'}>
      <View style={styles.container}>
        {/* <CustomImage
          source={backgroundImage}
          resizeMode="contain"
          style={styles.bgImage}
        /> */}
        <AppIntroSlider
          renderItem={RenderSlider}
          data={slides}
          showSkipButton={true}
          showPrevButton={true}
          activeDotStyle={{backgroundColor: Color.themeColor}}
          dotStyle={{
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: Color.themeColor,
          }}
          renderDoneButton={RenderDoneBtn}
          renderNextButton={RenderNextBtn}
          renderSkipButton={RenderSkipBtn}
          renderPrevButton={RenderBackBtn}
        />
      </View>
    </ScreenBoiler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
  },
  SliderContainer: {
    // flex: 1,
    height: windowHeight,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.white,
  },
  title: {
    color: Color.themeColor,
    fontWeight: '700',
    fontSize: 30,
    textAlign: 'center',
    width: windowWidth * 0.8,
    marginTop: windowHeight * 0.065,
  },
  subcontainer: {
    width: windowWidth,
    height: windowHeight * 0.55,
    backgroundColor: Color.green,
    borderTopLeftRadius: moderateScale(35, 0.3),
    borderTopRightRadius: moderateScale(35, 0.3),
  },
  subText: {
    color: Color.themeColor,
    textAlign: 'center',
    fontWeight: '400',
    fontSize: moderateScale(15, 0.3),
    width: windowWidth * 0.8,
    marginTop: moderateScale(10, 0.3),
  },
  generalBtn: {
    paddingVertical: moderateScale(15, 0.3),
    textAlign: 'center',
    fontWeight: '400',
    fontSize: moderateScale(15, 0.3),
  },
  btnLeft: {
    color: Color.themeColor,
    paddingLeft: moderateScale(20, 0.3),
  },
  btnRight: {
    color: Color.themeColor,
    paddingRight: moderateScale(20, 0.3),
  },
});

export default WalkThroughScreen;
const BoldText = ({ children }) => {
    return <Text style={{ fontWeight: 'bold' }}>{children}</Text>;
  };
