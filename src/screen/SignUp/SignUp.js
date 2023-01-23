import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CountryPicker} from 'react-native-region-country-picker/src/screens';
import Navbar from '../../component/Navbar';
import ImagePath from '../../assets/ImagePath';
import Textbox from '../../component/Textbox';
import ColorPath from '../../assets/ColorPath';
import FontPath from '../../assets/FontPath';
import styles from './styles';
import {useSelector} from 'react-redux';

const SignUp = ({navigation}) => {
  
  const Theme = useSelector(store => store.ThemeReducer);

  let countryPickerRef = useRef();
  const [coutrycode, setcountrycode] = useState('');

  const [select, setSelect] = useState();
  const onclick2 = () => {
    setSelect(!select);
  };

  const [iscount, setcount] = useState(false);
  const onclick = () => {
    setcount(!iscount);
  };

  const passwordRef = useState(null);
  const enterRef = useState(null);
  const emailRef = useState(null);
  const phoneRef = useState(null);

  return (
    <ScrollView>
      <View
        style={[
          styles.container,
          {backgroundColor: Theme == 'Dark' ? ColorPath.blue : ColorPath.white},
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
            Create Personal Account
          </Text>
        </View>

        <View style={{marginTop: hp(5)}}>
          <Text
            style={[
              styles.firstext,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray},
            ]}>
            First Name
          </Text>
          <Textbox
            InputBox
            onSubmitEditing={() => {
              passwordRef.current.focus();
            }}
          />
        </View>

        <View style={{marginTop: hp(2)}}>
          <Text
            style={[
              styles.firstext,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray},
            ]}>
            Last Name
          </Text>
          <Textbox
            InputBox
            getRef={passwordRef}
            onSubmitEditing={() => {
              enterRef.current.focus();
            }}
          />
        </View>

        <View style={{marginTop: hp(2)}}>
          <Text
            style={[
              styles.firstext,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray},
            ]}>
            Personal Email Id
          </Text>
          <Textbox
            InputBox
            keyboardType={'email-address'}
            getRef={enterRef}
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
                  container: {marginTop: hp(2), marginLeft: wp(3)},
                  flagStyle: {fontSize: 20, marginTop: hp(-0.5)},
                  callingCodeStyle: {
                    fontFamily: FontPath.Poppins_Medium,
                    fontWeight: '400',
                    fontSize: 14,
                    lineHeight: 21,
                    color: Theme=='Dark'?ColorPath.lightgray:ColorPath.gray,
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
                style={[
                  styles.InputBox,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray,
                  },
                ]}
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

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: hp(2),
          }}>
          <Text
            style={[
              styles.Referraltext,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray},
            ]}>
            Referral Code (Optional)
          </Text>
          <Image
            source={ImagePath.Downaero}
            style={[
              styles.downicon,
              {
                tintColor:
                  Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
              },
            ]}
          />
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              onclick2();
            }}>
            <Image
              source={select ? ImagePath.rightactive : ImagePath.Righticon}
              style={[
                styles.righticon,
                {
                  tintColor:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}
            />
          </TouchableOpacity>
          <View style={{marginLeft: wp(1.5), marginTop: hp(2)}}>
            <Text
              style={[
                styles.ihavetext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              I have read and agree to Binance’s Terms of Service and Privacy
              Policy.
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={styles.button}>
          <Text style={styles.buttontext}>Create Personal Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUp;
