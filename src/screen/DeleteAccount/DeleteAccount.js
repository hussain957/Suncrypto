import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ColorPath from '../../assets/ColorPath';
import ImagePath from '../../assets/ImagePath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontPath from '../../assets/FontPath';
import Navbar from '../../component/Navbar';
import {useSelector} from 'react-redux';

const DeleteAccount = ({navigation}) => {
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
              styles.deletetext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Delete Account
          </Text>
          <Text
            style={[
              styles.beforetext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Before you delete your account, please confirm:
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
              styles.thetext,
              {
                color:
                  Theme == 'Dark' ? ColorPath.lightgray : ColorPath.darkblack,
              },
            ]}>
            1. The account is not located in restricted countries
          </Text>

          <Text
            style={[
              styles.thetext,
              {
                marginTop: hp(0.5),
                color:
                  Theme == 'Dark' ? ColorPath.lightgray : ColorPath.darkblack,
              },
            ]}>
            2. The total balance is less than 0.001 BTC
          </Text>

          <Text
            style={[
              styles.thetext,
              {
                marginTop: hp(0.5),
                color:
                  Theme == 'Dark' ? ColorPath.lightgray : ColorPath.darkblack,
              },
            ]}>
            3. Loan = 0
          </Text>
        </View>

        <Text style={styles.ensuretext}>
          To ensure your account's security and protect your assets, account
          deletion request will be reviewed by Suncrypto carefully before
          deletion.
        </Text>

        <Text style={[styles.ensuretext, {marginTop: hp(3)}]}>
          To initiate the account deletion request, please contact Customer
          Support
        </Text>
      </View>

      <View style={styles.viewcontainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>Contact Customer Support</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  deletetext: {
    fontFamily: FontPath.Poppins_Bold,
    fontSize: 20,
    marginTop: hp(3),
  },

  beforetext: {
    fontSize: 12,
    fontFamily: FontPath.Poppins_Medium,
    marginTop: hp(2),
  },

  graybox: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    borderRadius: 10,
    marginTop: hp(2),
  },

  thetext: {
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 13,
  },

  ensuretext: {
    color: ColorPath.red,
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 13,
    marginTop: hp(2),
  },

  viewcontainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: hp(4),
    paddingHorizontal: wp(4),
  },

  button: {
    backgroundColor: ColorPath.gray2,
    borderRadius: 8,
    paddingVertical: hp(1),
  },

  buttontext: {
    color: ColorPath.white,
    fontSize: 15,
    fontFamily: FontPath.Poppins_Medium,
    textAlign: 'center',
  },
});

export default DeleteAccount;
