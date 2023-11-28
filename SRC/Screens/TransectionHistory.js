import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {Icon} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FlatList} from 'react-native';
import TransectionCard from '../Components/TransectionCard';
import {ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '../Components/CustomText';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import ScreenBoiler from '../Components/ScreenBoiler';
import {useSelector} from 'react-redux';
import {Get} from '../Axios/AxiosInterceptorFunction';

const TransectionHistory = () => {
    const focused = useIsFocused()
  const token = useSelector(state => state.authReducer.token);
  const [transectionData, setTransectionData] = useState([]);
  console.log("🚀 ~ file: TransectionHistory.js:20 ~ TransectionHistory ~ transectionData:", transectionData)
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const dummyarry = [
    {
      name: 'gfhsgsdgufyguagdsfuyg',
      price: 260,
    },
    {
      name: 'titlegkg',
      price: 250,
    },
    {
      name: 'randomhkfgahigdfagsifgauifgkagsfgahfghfg',
      price: 350,
    },
    {
      name: 'moment',
      price: 450,
    },
  ];

  const transection = async () => {
    const url = 'get_transations';
    setIsLoading(true);
    const response = await Get('get_transations', token);
    console.log("🚀 ~ file: TransectionHistory.js:46 ~ transection ~ response:", response?.data)
    setIsLoading(false);
    if (response != undefined) {
      setTransectionData( response?.data);
    }
  };
  useEffect(() => {
    transection();
  }, [focused]);

  return (
    <>
      <ScreenBoiler
        statusBarBackgroundColor={'#3E3028'}
        statusBarContentStyle={'light-content'}>
        <LinearGradient
          style={{
            width: windowWidth,
            minHeight: windowHeight,
            //   alignItems: 'center',
          }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#F6F3F3', '#F6F3F3']}>
          <View
            style={{
              width: windowWidth,
              height: windowHeight * 0.07,
              backgroundColor: '#3E3028',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: windowWidth * 0.6,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: moderateScale(10, 0.6),
              }}>
              {/* <TouchableOpacity activeOpacity={0.8}> */}
              <Icon
                name={'left'}
                as={AntDesign}
                size={moderateScale(20, 0.3)}
                color={Color.white}
                onPress={() => {
                  navigation.goBack();
                }}
              />
              {/* </TouchableOpacity> */}

              <CustomText
                style={{
                  fontSize: moderateScale(15, 0.6),
                  color: Color.white,
                  textAlign: 'center',
                  // backgroundColor:'red',
                  width: windowWidth * 0.93,
                }}>
                Transection History
              </CustomText>
            </View>
          </View>
          <View
            style={{
              //   backgroundColor: 'red',
              height: windowHeight,
            }}>
            <FlatList
              data={transectionData}
              contentContainerStyle={
                {
                  // paddingBottom: moderateScale(20, 0.6),
                }
              }
              renderItem={({item, index}) => {
                return <TransectionCard item={item} />;
              }}
            />
          </View>
        </LinearGradient>
      </ScreenBoiler>
    </>
  );
};

export default TransectionHistory;

const styles = StyleSheet.create({});
