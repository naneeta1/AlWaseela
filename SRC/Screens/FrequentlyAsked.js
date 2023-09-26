import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import CustomText from '../Components/CustomText';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomStatusBar from '../Components/CustomStatusBar';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import CustomImage from '../Components/CustomImage';
import { Icon} from 'native-base';
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
import { useNavigation } from '@react-navigation/native';

const FrequentlyAsked = () => {
  const navigation = useNavigation()
  const Data = [{
    question : '1. What is  Al Wasila?',
    answer : 'al waseela is a donation app for which helps needy people'
  },
  {
    question : '2. How is Al Wasila different from other crowdfunding platforms?',
    answer : 'al waseela is a donation app for which helps needy people'
  },
  {
    question : '3. Is my donation secure?',
    answer : 'al waseela is a donation app for which helps needy people'
  },
  {
    question : '4.Can i donate with PayPal?',
    answer : 'al waseela is a donation app for which helps needy people'
  },
  {
    question : '5. Are my donations tax-deductible?',
    answer : 'al waseela is a donation app for which helps needy people'
  },
  {
    question : '6.How do nonprofit receive my donation?',
    answer : 'al waseela is a donation app for which helps needy people'
  },
  {
    question : '7.can I cancel my recurring donation?',
    answer : 'al waseela is a donation app for which helps needy people'
  },
  {
    question : '8. why was my credit card declined?',
    answer : 'al waseela is a donation app for which helps needy people'
  },
  {
    question : '9. What are the fees?',
    answer : 'al waseela is a donation app for which helps needy people'
  },
  {
    question : '10.Can I Gift Aid my donations?',
    answer : 'al waseela is a donation app for which helps needy people'
  },

]
  return (
    <ScreenBoiler
      statusBarBackgroundColor={'white'}
      statusBarContentStyle={'dark-content'}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: moderateScale(20, 0.6),
           alignItems : 'center',
        }}>
        <View
          style={{
            width: windowWidth,
            height: windowHeight * 0.07,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: moderateScale(10, 0.3),
            backgroundColor: 'white',
          }}>
          <View
            style={{
              width: windowWidth * 0.08,
              height: windowWidth * 0.08,
              justifyContent: 'center',
            }}>
            <CustomImage
              source={require('../Assets/Images/logoBig.png')}
              style={{height: '100%', width: '100%'}}
              resizeMode="contain"
            />
          </View>

          {/* <TouchableOpacity activeOpacity={0.8}> */}
            <Icon
              name={'menu'}
              as={Feather}
              size={moderateScale(25, 0.3)}
              color={Color.veryLightGray}
                           onPress={() => navigation.goBack()}
            />
          {/* </TouchableOpacity> */}
        </View>
        <CardContainer style={{
          // height : 200,
          marginTop : moderateScale(20,0.3),
          backgroundColor : 'white'

        }}>
          <FlatList
          nestedScrollEnabled
          data={Data}
          contentContainerStyle={{
            paddingBottom : moderateScale(20,0.6),
          }}
          renderItem={({item , index})=>{
            return(

              <FrequentlyAskedCard question={item.question} answer={item.answer} />
            )
          }}
          
/>
        </CardContainer>
      </ScrollView>
    </ScreenBoiler>
  );
};

export default FrequentlyAsked;

const styles = StyleSheet.create({});
