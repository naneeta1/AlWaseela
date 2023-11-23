import {StyleSheet, Text, View,Platform} from 'react-native';
import React, {useEffect,useState} from 'react';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import { setLocationEnabled } from '../Store/slices/auth';
import { useDispatch } from 'react-redux';

const ScreenEnabler = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch()
    const TryAgain = () => {
      if (Platform.OS === 'android') {
        RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
          interval: 10000,
          fastInterval: 5000,
        })
          .then(data => {
            dispatch(setLocationEnabled(true));
          })
          .catch(err => {
            setIsLoading(true);
          });
      }
    };
    useEffect(() => {
      TryAgain();
    }, []);

  return <View></View>;
};

export default ScreenEnabler;

const styles = StyleSheet.create({});
