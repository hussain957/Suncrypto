import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import ColorPath from '../../assets/ColorPath';
import ImagePath from '../../assets/ImagePath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontPath from '../../assets/FontPath';
import Navbar from '../../component/Navbar';
import {useSelector} from 'react-redux';

const DisableAccount = ({navigation}) => {
  const Theme = useSelector(store => store.ThemeReducer);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Theme == 'Dark' ? ColorPath.blue : ColorPath.white,
      }}>
      <View style={{paddingHorizontal: wp(4), paddingVertical: hp(1)}}>
        <Navbar
          onPress={() => {
            navigation.goBack();
          }}
          righticon={
            Theme == 'Dark' ? ImagePath.angleleft2 : ImagePath.angleleft
          }
          lefticon2={
            Theme == 'Dark' ? ImagePath.rongicondark : ImagePath.rongicon
          }
          onPress2={() => {
            navigation.navigate('ManageAccount');
          }}
        />

        <View>
          <Text
            style={[
              styles.disabletext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Disable Account
          </Text>
          <Text
            style={[
              styles.yourtext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Disable your account will cause the following:
          </Text>
        </View>

        <View
          style={[
            styles.graybox,
            {
              backgroundColor:
                Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray,
            },
          ]}>
          <Text
            style={[
              styles.yourtext,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.darkblack},
            ]}>
            1. All pending withdrawals will be canceled.
          </Text>

          <Text
            style={[
              styles.tradingtext,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.darkblack},
            ]}>
            2. All trading capacities for your account will be disabled..
          </Text>

          <Text
            style={[
              styles.tradingtext,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.darkblack},
            ]}>
            3. All API keys for your account will be deleted.
          </Text>

          <Text
            style={[
              styles.tradingtext,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.darkblack},
            ]}>
            4. All device for your account will be deleted.
          </Text>

          <Text
            style={[
              styles.tradingtext,
              {
                color:
                  Theme == 'Dark' ? ColorPath.lightgray : ColorPath.darkblackssss,
              },
            ]}>
            5. In order to reactivate your account, you will need to contact
            Suncrypto support.
          </Text>

          <Text
            style={[
              styles.tradingtext,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.darkblack},
            ]}>
            6. Verified Personal information will not be deleted.
          </Text>
        </View>

        <Text style={styles.failedtext}>
          If you failed to reactivate your account, please contact customer
          service.
        </Text>
      </View>

      <View style={styles.viewcontainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>Disable Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  disabletext: {
    fontFamily: FontPath.Poppins_Bold,
    fontSize: 20,
    marginTop: hp(3),
  },

  yourtext: {
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 13,
  },

  graybox: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    borderRadius: 10,
    marginTop: hp(1),
  },

  tradingtext: {
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 13,
    marginTop: hp(0.5),
  },

  failedtext: {
    color: ColorPath.red,
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 13,
    marginTop: hp(1),
  },

  viewcontainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: hp(4),
    paddingHorizontal: wp(4),
  },

  button: {
    backgroundColor: ColorPath.yellow,
    borderRadius: 8,
    paddingVertical: hp(1),
  },

  buttontext: {
    color: ColorPath.darkblack,
    fontSize: 15,
    fontFamily: FontPath.Poppins_Medium,
    textAlign: 'center',
  },
});

export default DisableAccount;
