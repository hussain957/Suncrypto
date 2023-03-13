import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import ColorPath from '../../assets/ColorPath';
import ImagePath from '../../assets/ImagePath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontPath from '../../assets/FontPath';
import Navbar from '../../component/Navbar';
import {useSelector} from 'react-redux';

const ManageAccount = ({navigation}) => {
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
            navigation.navigate('Security');
          }}
        />

        <View>
          <Text
            style={[
              styles.managetext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Manage Account
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DisableAccount');
          }}
          style={styles.button}>
          <View style={{flex: 1}}>
            <Text
              style={[
                styles.disabletext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Disable Account
            </Text>

            <Text
              style={[
                styles.oncetext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.gray2,
                },
              ]}>
              Once the account is disabled, most of your actions will be
              restricted, such as logging in, trading, etc. But you can choose
              to unblock the account.
            </Text>
          </View>

          <View>
            <Image
              source={ImagePath.Rightaero}
              style={[
                styles.icon,
                {
                  tintColor:
                    Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                },
              ]}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DeleteAccount');
          }}
          style={styles.button}>
          <View style={{flex: 1}}>
            <Text
              style={[
                styles.disabletext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Delete Account
            </Text>

            <Text
              style={[
                styles.oncetext,
                {
                  color: Theme == 'Dark' ? ColorPath.white : ColorPath.gray2,
                },
              ]}>
              Once the account is disabled, most of your actions will be
              restricted, such as: mobile phone, email, identity verification,
              etc. And this behavior is irreversible.
            </Text>
          </View>

          <View>
            <Image
              source={ImagePath.Rightaero}
              style={[
                styles.icon,
                {
                  tintColor:
                    Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                },
              ]}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  managetext: {
    fontFamily: FontPath.Poppins_Bold,
    fontSize: 20,
    marginTop: hp(3),
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(3),
  },

  disabletext: {
    fontSize: 16,
    fontFamily: FontPath.Poppins_Medium,
  },

  oncetext: {
    fontSize: 12,
    fontFamily: FontPath.Poppins_Medium,
  },

  icon: {
    width: wp(4),
    height: hp(2),
    resizeMode: 'contain',
  },
});

export default ManageAccount;
