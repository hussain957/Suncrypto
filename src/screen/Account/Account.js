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

const Account = ({navigation}) => {
  const Theme = useSelector(store => store.ThemeReducer);

  const [select, setSelect] = useState();
  const [select1, setSelect1] = useState();

  const onclick = () => {
    setSelect(!select);
  };

  const onclick1 = () => {
    setSelect1(!select1);
  };

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
              styles.accounttext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Account Connections
          </Text>
          <Text
            style={[
              styles.usetext,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2},
            ]}>
            Use a third-party account, such as your Apple ID or Google account
            to log in to your Suncrypto account.
          </Text>
        </View>

        <View style={styles.viewcontainer}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <Image source={ImagePath.google} style={styles.icon} />
            <View style={{marginLeft: wp(3)}}>
              <Text
                style={[
                  styles.signtext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                Sign in with Google
              </Text>
              <Text
                style={[
                  styles.wetext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                We****@gmail.com
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              onclick();
            }}
            style={[
              styles.button,
              {
                backgroundColor: select
                  ? ColorPath.yellow
                  : ColorPath.lightgray,
              },
            ]}>
            <Text style={styles.buttontext}>Disconnect</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewcontainer}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <Image
              source={ImagePath.applelogo}
              style={[
                styles.icon,
                {
                  tintColor:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.gray2,
                },
              ]}
            />
            <View style={{marginLeft: wp(3)}}>
              <Text
                style={[
                  styles.signtext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                Sign in with Apple
              </Text>
              <Text
                style={[
                  styles.wetext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                Current device does not support this feature.
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              onclick1();
            }}
            style={[
              styles.button,
              {
                backgroundColor: select1
                  ? ColorPath.yellow
                  : ColorPath.lightgray,
              },
            ]}>
            <Text style={styles.buttontext}>Connect</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.viewgraybox,
            {
              backgroundColor:
                Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray,
              marginTop: hp(4),
            },
          ]}>
          <Text
            style={[
              styles.signtext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Check Account Activity
          </Text>
          <Text
            style={[
              styles.youtext,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2},
            ]}>
            You can check all activity on your account by clicking the link
            below.
          </Text>
          <Text style={styles.accountactivity}>Account Activity</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  accounttext: {
    fontFamily: FontPath.Poppins_Bold,
    fontSize: 20,
    marginTop: hp(3),
  },

  usetext: {
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 13,
    marginTop: hp(0.7),
  },

  icon: {
    width: wp(5),
    height: hp(2.5),
    resizeMode: 'contain',
    marginTop: hp(0.7),
  },

  signtext: {
    fontSize: 16,
    fontFamily: FontPath.Poppins_Medium,
  },

  wetext: {
    fontSize: 10,
    fontFamily: FontPath.Poppins_Medium,
  },

  button: {
    paddingVertical: hp(1),
    borderRadius: 8,
    width: wp(23),
  },

  buttontext: {
    color: ColorPath.darkblack,
    fontSize: 12,
    fontFamily: FontPath.Poppins_Medium,
    textAlign: 'center',
  },

  viewcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(5),
  },

  viewgraybox: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    borderRadius: 8,
    marginTop: hp(6),
  },

  youtext: {
    fontSize: 13,
    fontFamily: FontPath.Poppins_Medium,
    marginTop: hp(1),
  },

  accountactivity: {
    color: ColorPath.yellow,
    fontSize: 15,
    fontFamily: FontPath.Poppins_Medium,
    marginTop: hp(1),
  },
});

export default Account;
