import {
  View,
  Text,
  FlatList,
  BackHandler,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import CustomText from '../Components/CustomText';
import { windowHeight, windowWidth } from '../Utillity/utils';
import CustomStatusBar from '../Components/CustomStatusBar';

import { moderateScale } from 'react-native-size-matters';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Color from '../Assets/Utilities/Color';
import MyOrderCard from '../Components/MyorderComponent';
import SearchbarComponent from '../Components/SearchbarComponent';
import CustomImage from '../Components/CustomImage';
import { Divider, Icon } from 'native-base';
import ImagePickerModal from '../Components/ImagePickerModal';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import navigationService from '../navigationService';
import CardContainer from '../Components/CardContainer';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import CustomButton from '../Components/CustomButton';

const Profile = () => {
  const navigation = useNavigation();
  const token = useSelector(state => state.authReducer.token);
  const orderData = useSelector(state => state.commonReducer.order);
  const bookings = useSelector(state => state.commonReducer.bookings);
  const userData = useSelector(state => state.commonReducer.userData);
  const [selectedTab, setSelectedTab] = useState('Products');
  const [imagePicker, setImagePicker] = useState(false);
  const [username, setUserName] = useState(userData?.name ? userData?.name : '')
  const [phone, setPhone] = useState(userData?.phone ? userData?.phone : '')
  const [email, setEmail] = useState(userData?.email ? userData?.email : '')
  const [isLoading, setIsLoading] = useState(false)

  const [image, setImage] = useState({});
  const [newData, setNewData] = useState(
    selectedTab == 'Products' ? orderData : bookings,
  );

  const options = [
    { id: 0, name: 'personal Info', onPress: () => { navigationService.navigate('PersonalInfo') } },
    { id: 1, name: 'Bank Account Info', onPress: () => { navigationService.navigate('BankDetails') } },
    { id: 2, name: 'Return Address Info', onPress: () => { } },
    { id: 3, name: 'Change Password', onPress: () => { navigationService.navigate('ChangePassword') } },
    { id: 4, name: 'Change Email Address', onPress: () => { navigationService.navigate('ChangeEmail') } },
  ];
  useEffect(() => {
    setNewData(selectedTab == 'Products' ? orderData : bookings);
  }, [selectedTab]);

  return (
    <>
      <CustomStatusBar backgroundColor={'#D2E4E4'} barStyle={'dark-content'} />

      <Header headerColor={['#D2E4E4', '#D2E4E4']} cart />
      <View
        style={{
          width: windowWidth,
          height: windowHeight * 0.9,
          backgroundColor: '#D2E4E4',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'purple',
          }}>
          <ImageBackground
            source={require('../Assets/Images/waves.jpg')}
            style={{
              width: windowWidth,
              height: windowHeight * 0.3,
              alignItems: 'center',
            }}>
            <View>


              <View style={styles.Profile1}>
                <CustomImage
                  resizeMode={'cover'}
                  source={
                    image?.uri
                      ? { uri: image?.uri }
                      : require('../Assets/Images/dummyman1.png')
                  }
                  style={{ width: '100%', height: '100%' }}
                />
              </View>

              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.edit}
                onPress={() => {
                  setImagePicker(true);
                }}>
                <Icon
                  name="pencil"
                  as={FontAwesome}
                  style={styles.icon2}
                  color={Color.white}
                  size={moderateScale(16, 0.3)}
                  onPress={() => {
                    setImagePicker(true);
                  }}
                />
              </TouchableOpacity>
            </View>
            <CustomText style={styles.text1}>{userData?.name}</CustomText>
          </ImageBackground>
        </View>
        <CardContainer
          style={{
            paddingVertical: moderateScale(15, 0.3),
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf:'center',
            marginTop: moderateScale(30, 0.3),
          }}>
          <TextInputWithTitle
            title={'Username'}
            iconName={'user'}
            iconType={SimpleLineIcons}
            LeftIcon={true}
            titleText={'Username'}
            placeholder={'Username'}
            setText={setUserName}
            value={username}
            viewHeight={0.07}
            viewWidth={0.75}
            inputWidth={0.55}
            border={1}
            backgroundColor={Color.white}
            borderColor={Color.black}
            //   marginTop={moderateScale(10, 0.3)}
            // marginBottom={moderateScale(10, 0.3)}
              color={Color.black}
            placeholderColor={Color.veryLightGray}
            elevation
          />

          <TextInputWithTitle
            title={'Email'}
            iconName={'email'}
            iconType={Fontisto}
            LeftIcon={true}
            titleText={'Email'}
            placeholder={'Email'}
            setText={setEmail}
            value={email}
            viewHeight={0.07}
            viewWidth={0.75}
            inputWidth={0.55}
            border={1}
            borderColor={Color.black}
            backgroundColor={Color.white}
            //   marginTop={moderateScale(10, 0.3)}
            // marginBottom={moderateScale(10, 0.3)}
              color={Color.black}
            placeholderColor={Color.veryLightGray}
            elevation
          />

          <TextInputWithTitle
            title={'Contact'}
            iconName={'cellphone-sound'}
            iconType={MaterialCommunityIcons}
            LeftIcon={true}
            titleText={'Contact'}
            placeholder={'Contact'}
            setText={setPhone}
            value={phone}
            viewHeight={0.07}
            viewWidth={0.75}
            inputWidth={0.55}
            border={1}
            borderColor={Color.black}
            // marginBottom={moderateScale(10, 0.3)}
            backgroundColor={Color.white}
            //   marginTop={moderateScale(10, 0.3)}
            color={Color.black}
            placeholderColor={Color.veryLightGray}
            elevation
          />

          <CustomButton
            // onPress={() => registerUser()}
            text={
              isLoading ? (
                <ActivityIndicator color={Color.white} size={'small'} />
              ) : (
                'Update'
              )
            }
            textColor={Color.white}
            width={windowWidth * 0.4}
            height={windowHeight * 0.06}
            marginTop={moderateScale(30, 0.3)}
            bgColor={Color.yellow}
          // borderRadius={moderateScale(5, 0.3)}
          // isGradient
          />
        </CardContainer>

      </View>
      <ImagePickerModal
        show={imagePicker}
        setShow={setImagePicker}
        setFileObject={setImage}
      />
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  Profile: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    borderRadius: (windowWidth * 0.1) / 1,
    borderWidth: 1,
    borderColor: Color.white,
    overflow: 'hidden',
  },
  Profile1: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    borderRadius: (windowWidth * 0.3) / 2,
    borderWidth: 1,
    borderColor: Color.white,
    overflow: 'hidden',
    alignSelf: 'center',
    backgroundColor: '#EEEEEE',
    marginTop: moderateScale(20, 0.3),
    // alignItems: 'center',
    // justifyContent: 'center',
    // borderColor : 'black'
  },
  Rounded: {
    width: windowWidth * 0.1,
    height: windowHeight * 0.05,
    borderRadius: moderateScale(30, 0.3),
    backgroundColor: Color.white,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  text1: {
    paddingVertical: moderateScale(10, .6),
    fontSize: moderateScale(16, 0.3),
    color: Color.black,
    // width: windowWidth * 0.45,
  },
  edit: {
    backgroundColor: Color.themeColor1,
    width: moderateScale(25, 0.3),
    height: moderateScale(25, 0.3),
    position: 'absolute',
    top: 110,
    right: 10,
    borderRadius: moderateScale(12.5, 0.3),
    elevation: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
