import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CountryPicker} from 'react-native-region-country-picker/src/screens';
import ImagePath from '../../assets/ImagePath';
import Textbox from '../../component/Textbox';
import Navbar from '../../component/Navbar';
import ColorPath from '../../assets/ColorPath';
import FontPath from '../../assets/FontPath';
import styles from './styles';
import {useSelector} from 'react-redux';

const Login = ({navigation}) => {
  const [coutrycode, setcountrycode] = useState('');

  let countryPickerRef = useRef();

  const Theme = useSelector(store => store.ThemeReducer);

  const [iscount, setcount] = useState(false);
  const onclick = () => {
    setcount(!iscount);
  };

  const emailRef = useState(null);
  const phoneRef = useState(null);

  return (
    <ScrollView
      style={[
        styles.container,
        {backgroundColor: Theme == 'Dark' ? ColorPath.blue : ColorPath.white,},
      ]}>
      <Navbar
        righticon={Theme == 'Dark' ? ImagePath.homedark : ImagePath.home1}
        lefticon2={
          Theme == 'Dark' ? ImagePath.rongicondark : ImagePath.rongicon
        }
        onPress={() => {
          navigation.navigate('Welcome');
        }}
        onPress2={() => {
          navigation.goBack();
        }}
      />
      <View style={{marginTop: hp(6)}}>
        <Text
          style={[
            styles.createtext,
            {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
          ]}>
          Suncrypto Account Login
        </Text>
      </View>

      <View style={{marginTop: hp(5)}}>
        <Text
          style={[
            styles.firstext,
            {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray},
          ]}>
          Email{' '}
        </Text>
        <Textbox
          InputBox
          onSubmitEditing={() => {
            emailRef.current.focus();
          }}
        />
      </View>

      <View style={{marginTop: hp(2)}}>
        <Text
          style={[
            styles.firstext,
            {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray},
          ]}>
          Personal Phone Number
        </Text>
        <View
          style={{
            borderRadius: 12,
            backgroundColor: 'rgba(217, 217, 217, 0.25)',
            height: hp(7),
            flexDirection: 'row',
            marginTop: 3,
          }}>
          <View style={{width: wp(10)}}>
            <CountryPicker
              countryPickerRef={ref => {
                countryPickerRef = ref;
              }}
              enable={true}
              darkMode={false}
              countryCode={true}
              containerConfig={{
                showFlag: true,
                showCallingCode: true,
                showCountryName: false,
                showCountryCode: false,
              }}
              modalConfig={{
                showFlag: true,
                showCallingCode: false,
                showCountryName: true,
                showCountryCode: false,
              }}
              onSelectCountry={data => {
                setcountrycode(data.callingCode);
                console.log('DATA', data);
              }}
              onInit={data => {
                console.log('DATA', data);
              }}
              onOpen={() => {
                console.log('Open');
              }}
              onClose={() => {
                console.log('Close');
              }}
              containerStyle={{
                container: {marginTop: hp(2), marginLeft: wp(3),},
                flagStyle: {fontSize: 20, marginTop: hp(-0.5)},
                callingCodeStyle: {
                  fontFamily: FontPath.Poppins_Medium,
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 21,
                  color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray,
                  
                },
                countryCodeStyle: {},
                countryNameStyle: {},
              }}
              modalStyle={{
                container: {},
                searchStyle: {},
                tileStyle: {},
                itemStyle: {
                  itemContainer: {},
                  flagStyle: {},
                  countryCodeStyle: {},
                  countryNameStyle: {},
                  callingNameStyle: {},
                },
              }}
              title={'Country'}
              searchPlaceholder={'Search'}
              showCloseButton={true}
              showModalTitle={true}
            />
          </View>

          <View style={{width: wp(90)}}>
            <TextInput
              style={[styles.InputBox,{color:Theme=='Dark'?ColorPath.lightgray:ColorPath.gray}]}
              keyboardType={'phone-pad'}
              ref={emailRef}
              onSubmitEditing={() => {
                phoneRef.current.focus();
              }}
            />
          </View>
        </View>
      </View>

      <View style={{marginTop: hp(2)}}>
        <Text
          style={[
            styles.firstext,
            {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray},
          ]}>
          Password
        </Text>
        <Textbox
          InputBox2
          icon
          secureTextEntry={iscount ? false : true}
          Images={iscount ? ImagePath.eyeicon2 : ImagePath.eyeicon}
          onPress={() => {
            onclick();
          }}
          getRef={phoneRef}
        />
      </View>

      <View style={{marginTop: hp(4)}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}>
          <Text style={styles.foegottext}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[styles.foegottext, {marginTop: hp(1)}]}>
            Create a Binance Account
          </Text>
        </TouchableOpacity>
      </View>
      
       <View style={{paddingBottom:hp(4)}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MyDrawer');
        }}
        style={styles.button}>
        <Text style={styles.buttontext}>Log In</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;
