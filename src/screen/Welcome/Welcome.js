import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  BackHandler,
  StatusBar,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ColorPath from '../../assets/ColorPath';
import FontPath from '../../assets/FontPath';
import ImagePath from '../../assets/ImagePath';
import Navbar from '../../component/Navbar';
import styles from './styles';
import {useSelector} from 'react-redux';

const Welcome = ({navigation}) => {
  const Theme = useSelector(store => store.ThemeReducer);

  handleBackButton = () => {
    Alert.alert(
      'Exit App',
      'Exiting the application?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => BackHandler.exitApp(),
        },
      ],
      {
        cancelable: false,
      },
    );
    return true;
  };

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
      <Navbar
        righticon={Theme == 'Dark' ? ImagePath.homedark : ImagePath.home1}
        lefticon2={
          Theme == 'Dark' ? ImagePath.rongicondark : ImagePath.rongicon
        }
        onPress2={() => {
          handleBackButton();
        }}
      />

      <View style={{alignItems: 'center', marginTop: hp(6)}}>
        <Image
          source={Theme == 'Dark' ? ImagePath.wavinghand1 : ImagePath.waving}
          style={styles.waving}
        />
      </View>

      <View style={{marginTop: hp(9)}}>
        <Text
          style={[
            styles.Welcome,
            {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
          ]}>
          Welcome To Suncrypto!
        </Text>
        <Text
          style={[
            styles.join,
            {
              color:
                Theme == 'Dark' ? ColorPath.lightgray : ColorPath.darkblack,
            },
          ]}>
          Join the race of World's Leading Crypto Exchange.
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SignUp');
        }}
        style={styles.button}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={ImagePath.usericon} style={styles.profileicon} />
          <Text style={styles.buttontext}>Sign up with phone or email</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.viewcontainer}>
        <View style={styles.linecontainer}></View>
        <Text style={styles.text}>Or</Text>
        <View style={styles.linecontainer}></View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: hp(3.5),
        }}>
        <Text
          style={[
            styles.alreadytext,
            {
              color:
                Theme == 'Dark' ? ColorPath.lightgray : ColorPath.darkblack,
            },
          ]}>
          Already registered?{' '}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={[styles.alreadytext, {color: ColorPath.yellow}]}>
            Login
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', flex: 1, alignItems: 'flex-end'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image
            source={
              Theme == 'Dark' ? ImagePath.goodfeedback1 : ImagePath.goodfeedback
            }
            style={styles.profileicon}
          />
          <Image
            source={Theme == 'Dark' ? ImagePath.refresh3 : ImagePath.refresh}
            style={[styles.profileicon, {marginLeft: wp(6)}]}
          />
        </View>

        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Favourites');
            }}>
            <Text style={styles.skiptext}>Skip Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
