import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationService from './navigationService';
import {useSelector} from 'react-redux';
import LoginScreen from './Screens/LoginScreen';
import EnterPhone from './Screens/EnterPhone';
import VerifyNumber from './Screens/VerifyNumber';
import ResetPassword from './Screens/ResetPassword';
import Signup from './Screens/Signup';
import ChangePassword from './Screens/ChangePassword';
import {createDrawerNavigator} from '@react-navigation/drawer';
import WalkThroughScreen from './Screens/WalkthroughScreen';
import HomeScreen from './Screens/HomeScreen';
import Drawer from './Drawer/Drawer';
// import Profile from './Screens/Profile';

import SplashScreen from './Screens/SplashScreen';
import Causes from './Screens/Causes';
import FormScreen from './Screens/FormScreen';
import SettingScreen from './Screens/SettingScreen';
import Notification from './Screens/Notification';
import FrequentlyAsked from './Screens/FrequentlyAsked';

const AppNavigator = () => {
  const walkThrough = useSelector(state => state.authReducer.userWalkThrough);
  const token = useSelector(state => state.authReducer.token);
  const RootNav = createNativeStackNavigator();
  const RootNavLogged = createNativeStackNavigator();

  const AppNavigatorContainer = () => {
  const firstScreen = 
      !walkThrough
      ? 'WalkThroughScreen'
      : token == null
      ? 'LoginScreen'
      :'Causes';

    return (
      <NavigationContainer ref={navigationService.navigationRef}>
        <RootNav.Navigator
          initialRouteName={'FrequentlyAsked'}
          screenOptions={{headerShown: false}}>
          <RootNav.Screen name="SplashScreen" component={SplashScreen} />
          <RootNav.Screen name="Notification" component={Notification} />
          <RootNav.Screen name="SettingScreen" component={SettingScreen} />
          <RootNav.Screen name="FormScreen" component={FormScreen} />
          <RootNav.Screen name="HomeScreen" component={HomeScreen} />
          <RootNav.Screen name="LoginScreen" component={LoginScreen} />
          <RootNav.Screen name="Causes" component={Causes} />
          
      
          <RootNav.Screen name="EnterPhone" component={EnterPhone} />
          <RootNav.Screen name="VerifyNumber" component={VerifyNumber} />
          <RootNav.Screen name="ResetPassword" component={ResetPassword} />
          <RootNav.Screen name="Signup" component={Signup} />
          <RootNav.Screen name="FrequentlyAsked" component={FrequentlyAsked} />

          {/* <RootNav.Screen name="MyDrawer" component={MyDrawer} /> */}
          <RootNav.Screen
            name="WalkThroughScreen"
            component={WalkThroughScreen}
          />
         
        </RootNav.Navigator>
      </NavigationContainer>
    );
  };

  return <AppNavigatorContainer />;
};

// export const MyDrawer = () => {
//   const DrawerNavigation = createDrawerNavigator();
//   const role = useSelector(state => state.authReducer.role);
//   // const firstScreen =
//   //   role == 'admin'
//   //     ? 'HomeScreen'
//   //     : role == 'vendor'
//   //     ? 'SellerProduct'
//   //     : 'CustomerDashboard';

//   return (
//     <DrawerNavigation.Navigator
//       drawerContent={props => <Drawer {...props} />}
//       initialRouteName={firstScreen}
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <DrawerNavigation.Screen
//         name="CustomerDashboard"
//         component={CustomerDashboard}
//       />
//       <DrawerNavigation.Screen name="HomeScreen" component={HomeScreen} />
//       <DrawerNavigation.Screen name="Profile" component={Profile} />
//       <DrawerNavigation.Screen name="MyAccounts" component={MyAccounts} />

//       <DrawerNavigation.Screen name="Orders" component={Orders} />
//       {/* <DrawerNavigation.Screen name="Bookings" component={Bookings} /> */}

//       <DrawerNavigation.Screen
//         name="ChangePassword"
//         component={ChangePassword}
//       />
//       <DrawerNavigation.Screen name="Myorders" component={Myorders} />

//       <DrawerNavigation.Screen
//         name="AdminDashboard"
//         component={AdminDashboard}
//       />
//       <DrawerNavigation.Screen name="SellerProduct" component={SellerProduct} />
//     </DrawerNavigation.Navigator>
//   );
// };
export default AppNavigator;
