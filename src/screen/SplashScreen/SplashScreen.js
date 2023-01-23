import React, {useEffect, useState} from 'react';
import {Image, View, StyleSheet, Text, Animated, StatusBar} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ImagePath from '../../assets/ImagePath';
import {handleNavigation} from '../../navigation/Route';
import styles from './styles';
import * as Animatable from 'react-native-animatable';
import {useSelector, useDispatch} from 'react-redux';
import {ChangeTheme} from '../../Redux/Actions/Action';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ColorPath from '../../assets/ColorPath';

const SplashScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const Theme = useSelector(store => store.ThemeReducer);

  const [] = useState();
  useEffect(() => {
    setTimeout(() => {
      handleNavigation({
        type: 'setRoot',
        page: 'Welcome',
        navigation: navigation,
      });
    }, 3000);

    AsyncStorage.getItem('CheckLocalTheme').then(CheckLocalTheme => {
      // console.log('theme', CheckLocalTheme);
      dispatch(ChangeTheme(CheckLocalTheme == 'Dark' ? 'Light' : 'Dark'));
    });
  });
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: Theme == 'Dark' ? ColorPath.blue : ColorPath.white},
      ]}>
      <StatusBar
        backgroundColor={Theme == 'Dark' ? ColorPath.blue : ColorPath.white}
        barStyle={Theme == 'Dark' ? 'default' : 'dark-content'}
      />

      <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
        <Animatable.View
          animation={'swing'}
          duration={3000}
          useNativeDriver={false}>
          <Image
            source={
              Theme == 'Dark' ? ImagePath.SunCryptoLogo : ImagePath.Darklogopng
            }
            style={styles.darklogo}
          />
        </Animatable.View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.cryptotext}>
            <Text style={[styles.suntext,{color:Theme=='Dark'?ColorPath.white:ColorPath.darkblue}]}>SUN</Text>CRYPTO
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingVertical: hp(5),
          alignItems: 'center',
        }}>
        <Text
          style={[
            styles.securedtext,
            {color: Theme == 'Dark' ? ColorPath.white : ColorPath.black},
          ]}>
          SECURED BY
        </Text>
        <Image source={Theme=='Dark'?ImagePath.ledger1:ImagePath.ledger} style={styles.ledger} />
      </View>
    </View>
  );
};

export default SplashScreen;
