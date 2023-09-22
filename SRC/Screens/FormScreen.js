import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
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
import TextInputWithTitle from '../Components/TextInputWithTitle';
import CustomButton from '../Components/CustomButton';
//   import Ionicons from 'react-native-vector-icons/Ionicons';

const FormScreen = () => {
  const [cash, setCash] = useState('');
  const [moneyowed, setMoneyOwed] = useState('');
  const [goldSIlver, setGoldSilver] = useState('');
  const [share, setShare] = useState('');
  const [pensions, setPensions] = useState('');
  const [trust, setTrust] = useState('');
  const [cash1, setCash1] = useState('');
  const [business, setBusiness] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [active, setActive] = useState(false);
  const [type, setType] = useState('i own');
  const [buttontype, setButtonType] = useState('Next');
  const [mortgage, setMortgage] = useState('');
  const [bills, setBills] = useState('');
  const [personalloan, setPersonalLoan] = useState('');
  const [overdraft, setOverDraft] = useState('');
  const [creditcard, setCreditCard] = useState('');
  const [businessliabilities, setBusinessLiabilities] = useState('');

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
            alignItems: 'center',
          }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#F6F3F3', '#F6F3F3']}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: windowWidth * 0.5,
              marginTop: moderateScale(30, 0.3),
            }}>

            <TouchableOpacity
              style={{
                borderBottomWidth : type == 'i own' ?  1 : 0 ,
                borderColor: '#3E3028',
                width: windowWidth * 0.17,
              }}>
              <CustomText
                onPress={() => {
                  setType('i own');
                }}
                style={{
                  fontSize: moderateScale(22, 0.6),
                  Color: '#3E3028',
                  textAlign: 'center',
                }}>
                I Own
              </CustomText>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderBottomWidth : type == 'i owe' ?  1 : 0 ,
                borderColor: '#3E3028',
                width: windowWidth * 0.17,
              }}>
              <CustomText
                onPress={() => {
                  setType('i owe');
                }}
                style={{
                  fontSize: moderateScale(22, 0.6),
                  Color: '#3E3028',
                  textAlign: 'center',
                }}>
                I OWE
              </CustomText>
            </TouchableOpacity>

          </View>

          {type == 'i own' ? (
            <>
              <TextInputWithTitle
                titleText={'Cash'}
                secureText={false}
                placeholder={'cash'}
                setText={setCash}
                value={cash}
                viewHeight={0.07}
                viewWidth={0.95}
                inputWidth={0.9}
                border={1}
                borderColor={'#ffffff'}
                marginTop={moderateScale(20, 0.6)}
                color={Color.themeColor}
                placeholderColor={Color.themeLightGray}
              />
              <TextInputWithTitle
                titleText={'Money Owed to me'}
                secureText={false}
                placeholder={'Money Owed To Me'}
                setText={setMoneyOwed}
                value={moneyowed}
                viewHeight={0.07}
                viewWidth={0.95}
                inputWidth={0.9}
                border={1}
                borderColor={'#ffffff'}
                marginTop={moderateScale(20, 0.6)}
                color={Color.themeColor}
                placeholderColor={Color.themeLightGray}
              />
              <TextInputWithTitle
                titleText={'Gold and Silver'}
                secureText={false}
                placeholder={'Gold and Silver'}
                setText={setGoldSilver}
                value={goldSIlver}
                viewHeight={0.07}
                viewWidth={0.95}
                inputWidth={0.9}
                border={1}
                borderColor={'#ffffff'}
                marginTop={moderateScale(20, 0.6)}
                color={Color.themeColor}
                placeholderColor={Color.themeLightGray}
              />
              <TextInputWithTitle
                titleText={'Shares'}
                secureText={false}
                placeholder={'Shares'}
                setText={setShare}
                value={share}
                viewHeight={0.07}
                viewWidth={0.95}
                inputWidth={0.9}
                border={1}
                borderColor={'#ffffff'}
                marginTop={moderateScale(20, 0.6)}
                color={Color.themeColor}
                placeholderColor={Color.themeLightGray}
              />
              <TextInputWithTitle
                titleText={'pensions'}
                secureText={false}
                placeholder={'Pensions'}
                setText={setPensions}
                value={pensions}
                viewHeight={0.07}
                viewWidth={0.95}
                inputWidth={0.9}
                border={1}
                borderColor={'#ffffff'}
                marginTop={moderateScale(20, 0.6)}
                color={Color.themeColor}
                placeholderColor={Color.themeLightGray}
              />
              <TextInputWithTitle
                titleText={'ISAs And Trust'}
                secureText={false}
                placeholder={'ISAs And Trust'}
                setText={setTrust}
                value={trust}
                viewHeight={0.07}
                viewWidth={0.95}
                inputWidth={0.9}
                border={1}
                borderColor={'#ffffff'}
                marginTop={moderateScale(20, 0.6)}
                color={Color.themeColor}
                placeholderColor={Color.themeLightGray}
              />
              <TextInputWithTitle
                titleText={'cash'}
                secureText={false}
                placeholder={'Cash'}
                setText={setCash1}
                value={cash1}
                viewHeight={0.07}
                viewWidth={0.95}
                inputWidth={0.9}
                border={1}
                borderColor={'#ffffff'}
                marginTop={moderateScale(20, 0.6)}
                color={Color.themeColor}
                placeholderColor={Color.themeLightGray}
              />
              <TextInputWithTitle
                titleText={'Business Assets'}
                secureText={false}
                placeholder={'Business Assets'}
                setText={setBusiness}
                value={business}
                viewHeight={0.07}
                viewWidth={0.95}
                inputWidth={0.9}
                border={1}
                borderColor={'#ffffff'}
                marginTop={moderateScale(20, 0.6)}
                color={Color.themeColor}
                placeholderColor={Color.themeLightGray}
              />
            </>
          ) : (
            <>
              <TextInputWithTitle
                titleText={'Mortgage'}
                secureText={false}
                placeholder={'Mortgage'}
                setText={setMortgage}
                value={mortgage}
                viewHeight={0.07}
                viewWidth={0.95}
                inputWidth={0.9}
                border={1}
                borderColor={'#ffffff'}
                marginTop={moderateScale(20, 0.6)}
                color={Color.themeColor}
                placeholderColor={Color.themeLightGray}
              />
              <TextInputWithTitle
                titleText={'Utility Bills'}
                secureText={false}
                placeholder={'Utility Bills'}
                setText={setBills}
                value={bills}
                viewHeight={0.07}
                viewWidth={0.95}
                inputWidth={0.9}
                border={1}
                borderColor={'#ffffff'}
                marginTop={moderateScale(20, 0.6)}
                color={Color.themeColor}
                placeholderColor={Color.themeLightGray}
              />
              <TextInputWithTitle
                titleText={'Personal Loans'}
                secureText={false}
                placeholder={'Personal Loans'}
                setText={setPersonalLoan}
                value={personalloan}
                viewHeight={0.07}
                viewWidth={0.95}
                inputWidth={0.9}
                border={1}
                borderColor={'#ffffff'}
                marginTop={moderateScale(20, 0.6)}
                color={Color.themeColor}
                placeholderColor={Color.themeLightGray}
              />
              <TextInputWithTitle
                titleText={'Overdraft'}
                secureText={false}
                placeholder={'Overdraft'}
                setText={setOverDraft}
                value={overdraft}
                viewHeight={0.07}
                viewWidth={0.95}
                inputWidth={0.9}
                border={1}
                borderColor={'#ffffff'}
                marginTop={moderateScale(20, 0.6)}
                color={Color.themeColor}
                placeholderColor={Color.themeLightGray}
              />
              <TextInputWithTitle
                titleText={'Credit Card'}
                secureText={false}
                placeholder={'Credit Card'}
                setText={setCreditCard}
                value={creditcard}
                viewHeight={0.07}
                viewWidth={0.95}
                inputWidth={0.9}
                border={1}
                borderColor={'#ffffff'}
                marginTop={moderateScale(20, 0.6)}
                color={Color.themeColor}
                placeholderColor={Color.themeLightGray}
              />
              <TextInputWithTitle
                titleText={'Business Liabilities'}
                secureText={false}
                placeholder={'Business Liabilities'}
                setText={setBusinessLiabilities}
                value={businessliabilities}
                viewHeight={0.07}
                viewWidth={0.95}
                inputWidth={0.9}
                border={1}
                borderColor={'#ffffff'}
                marginTop={moderateScale(20, 0.6)}
                color={Color.themeColor}
                placeholderColor={Color.themeLightGray}
              />
            </>
          )}

          <CustomButton
           text={type == 'i own' ? 'Next' : 'Calculate eligible Zakat'}
            textColor={Color.white}
            width={windowWidth * 0.9}
            height={windowHeight * 0.07}
            marginTop={moderateScale(30, 0.3)}
            bgColor={'#3E3028'}
            // borderColor={Color.white}
            // borderWidth={2}
            borderRadius={moderateScale(30, 0.3)}
          />
        </LinearGradient>
      </ScrollView>
    </ScreenBoiler>
  );
};

export default FormScreen;

const styles = StyleSheet.create({});
