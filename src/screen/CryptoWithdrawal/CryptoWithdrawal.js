import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Switch} from 'react-native';
import ColorPath from '../../assets/ColorPath';
import ImagePath from '../../assets/ImagePath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontPath from '../../assets/FontPath';
import Navbar from '../../component/Navbar';
import {useSelector} from 'react-redux';

const CryptoWithdrawal = ({navigation}) => {
  const Theme = useSelector(store => store.ThemeReducer);

  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnableds, setIsEnableds] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitchs = () => setIsEnableds(previousState => !previousState);

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
            navigation.navigate('Setting');
          }}
        />

        <View>
          <Text
            style={[
              styles.cryptotext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Crypto Withdrawal
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: hp(4),
          }}>
          <View style={{flex: 1}}>
            <Text
              style={[
                styles.whitelisttext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Whitelist
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Switch
              trackColor={{false: '#767577', true: 'red'}}
              thumbColor={isEnabled ? 'white' : 'white'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

        <Text
          style={[
            styles.whentext,
            {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray3},
          ]}>
          When this function is turned on, your account will only be able to
          withdraw to whitelisted withdrawal address. When this function is able
          to withdraw to any withdrawal address.
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: hp(5),
          }}>
          <View style={{flex: 2}}>
            <Text
              style={[
                styles.whitelisttext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              One-step Withdrawal
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Switch
              trackColor={{false: '#767577', true: 'red'}}
              thumbColor={isEnableds ? 'white' : 'white'}
              onValueChange={toggleSwitchs}
              value={isEnableds}
            />
          </View>
        </View>

        <View>
          <Text
            style={[
              styles.whentext,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray3},
            ]}>
            After this function is isenabled, security verification can be
            exempted by withdrawing to a whitelisted to whitelisted address.
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingBottom: hp(4),
          paddingHorizontal: wp(4),
        }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>Address Management</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cryptotext: {
    fontFamily: FontPath.Poppins_Bold,
    fontSize: 20,
    marginTop: hp(3),
  },

  whentext: {
    fontSize: 13,
    width: wp(85),
    fontFamily: FontPath.Poppins_Medium,
  },

  whitelisttext: {
    fontSize: 18,
    fontFamily: FontPath.Poppins_Medium,
  },

  button: {
    backgroundColor: ColorPath.yellow,
    paddingVertical: hp(1),
    borderRadius: 10,
  },

  buttontext: {
    color: ColorPath.darkblack,
    fontSize: 15,
    textAlign: 'center',
    fontFamily: FontPath.Poppins_Medium,
  },
});

export default CryptoWithdrawal;
