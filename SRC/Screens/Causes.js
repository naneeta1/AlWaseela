import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import Color from '../Assets/Utilities/Color';
import CustomImage from '../Components/CustomImage';
import { apiHeader, windowHeight, windowWidth } from '../Utillity/utils';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';
import ScreenBoiler from '../Components/ScreenBoiler';
import LinearGradient from 'react-native-linear-gradient';
import { ActivityIndicator, Platform, ToastAndroid, View, FlatList } from 'react-native';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import navigationService from '../navigationService';
import { useDispatch } from 'react-redux';
import CardContainer from '../Components/CardContainer';
import { SetUserRole, setUserToken } from '../Store/slices/auth';
import { Post } from '../Axios/AxiosInterceptorFunction';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { setUserData } from '../Store/slices/common';
import DropDownSingleSelect from '../Components/DropDownSingleSelect';
import { useNavigation } from '@react-navigation/native';

const Causes = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation()


    const dispatch = useDispatch();

    const data = [
        {
            id: 1,
            image: require('../Assets/Images/card1.png'),
            name: 'Alwida'
        },
        {
            id: 2,
            image: require('../Assets/Images/card2.png'),
            name: 'Khair List'
        },
        {
            id: 3,
            image: require('../Assets/Images/card3.png'),
            name: 'Markaz-e-shifa'
        }, {
            id: 4,
            image: require('../Assets/Images/card4.png'),
            name: 'Counter Points'
        }, {
            id: 5,
            image: require('../Assets/Images/card5.png'),
            name: 'Qatrah'
        }, {
            id: 6,
            image: require('../Assets/Images/card6.png'),
            name: 'Rehen Sehen'
        }, {
            id: 7,
            image: require('../Assets/Images/card7.png'),
            name: 'Rozgar'
        }, {
            id: 8,
            image: require('../Assets/Images/card8.png'),
            name: 'Sasta Bazaar'
        }, {
            id: 9,
            image: require('../Assets/Images/card9.png'),
            name: 'Saya'
        }, {
            id: 10,
            image: require('../Assets/Images/card10.png'),
            name: 'The Alphabet game'
        }, {
            id: 11,
            image: require('../Assets/Images/card11.png'),
            name: 'Ummati'
        }, {
            id: 12,
            image: require('../Assets/Images/card12.png'),
            name: 'Jinn Tv'
        }, 

    ]

    return (
        <ScreenBoiler
            statusBarBackgroundColor={'white'}
            statusBarContentStyle={'dark-content'}>
            <LinearGradient
                style={{
                    width: windowWidth,
                    height: windowHeight,
                    alignItems: 'center',
                    paddingBottom:moderateScale(10,.6),
                    //   justifyContent: 'center',
                }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={[Color.white, Color.white]}
            // locations ={[0, 0.5, 0.6]}
            >
                <View
                    style={{
                        height: windowHeight * 0.07,
                        width: windowWidth * 0.2,
                        position: 'absolute',
                        // backgroundColor:'red',
                        top: 10,
                        right: 10,
                    }}>
                    <CustomImage
                        resizeMode="contain"
                        source={require('../Assets/Images/alwaseela.png')}
                        style={{
                            width: '100%',
                            height: '100%',
                            // marginTop: moderateScale(25, 0.3),
                        }}
                    />
                </View>

                <View
                    style={{
                        height: windowHeight * 0.1,
                        width: windowWidth * 0.3,
                        marginTop: moderateScale(30, .6)
                        // backgroundColor:'red',
                    }}>
                    <CustomImage
                        resizeMode="contain"
                        source={require('../Assets/Images/logo.png')}
                        style={{
                            width: '100%',
                            height: '100%',
                            // marginTop: moderateScale(25, 0.3),
                        }}
                    />
                </View>
                <CustomText
                    // onPress={() => navigationService.navigate('Signup')}
                    isBold
                    style={styles.txt6}>
                    Select Your Interest
                </CustomText>
                <CustomText
                    // onPress={() => navigationService.navigate('Signup')}
                    isBold
                    style={{
                        color: Color.veryLightGray, fontSize: moderateScale(12, .6),
                        paddingHorizontal: moderateScale(40, .6),
                        textAlign: 'center',
                        paddingVertical: moderateScale(20, .6),
                    }}>
                    Choose your interest to donate. Donot worry you can always change it later
                </CustomText>
                <FlatList
                    numColumns={3}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    contentContainerStyle={{
                        alignSelf: 'center',
                        marginTop: moderateScale(5, 0.3),
                    }}
                    renderItem={({ item, index }) => {
                        return (<View style={{
                            width: windowWidth * 0.27,
                            height: windowHeight * 0.12,
                            borderColor: Color.veryLightGray,
                            borderRadius: moderateScale(10, .6),
                            borderWidth: 1,
                            justifyContent:'center',
                            alignItems:'center',
                            margin:moderateScale(10,.6),
                            padding:moderateScale(5,.6),
                        }}>
                            <View style={{ width: windowWidth * 0.15, height: windowHeight * 0.06 }}>
                                <CustomImage
                                    resizeMode="contain"
                                    source={item?.image}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        // marginTop: moderateScale(25, 0.3),
                                    }}
                                />
                            </View>
                            <CustomText style={{color:Color.black, fontSize:moderateScale(13,.6), textAlign:'center', marginTop:moderateScale(5,.3) }}>{item?.name}</CustomText>
                        </View>)
                    }}


                />




                






                <CustomButton
                    onPress={() => {
                        // dispatch(setUserData());
                        //     dispatch(SetUserRole(response?.data?.user_info?.role))
                        dispatch(setUserToken({ token: 'skdaksakdjlk' }));
                        // LoginUser();
                    }}
                    text={
                        isLoading ? (
                            <ActivityIndicator size={'small'} color={Color.white} />
                        ) : (
                            'Continue'
                        )
                    }
                    textColor={Color.white}
                    width={windowWidth * 0.75}
                    height={windowHeight * 0.06}
                    marginTop={moderateScale(15, 0.3)}
                    bgColor={Color.themeColor}
                    borderRadius={moderateScale(25, 0.3)}
                    
                // isGradient
                />


               
            </LinearGradient>
        </ScreenBoiler>
    );
};

const styles = ScaledSheet.create({
    txt5: {
        marginTop: moderateScale(25, 0.3),
        fontSize: moderateScale(11, 0.6),
        color: Color.black,
    },
    txt6: {
        fontSize: moderateScale(22, 0.6),
        // color: Color.white,
        color: Color.black
    },
});

export default Causes;
