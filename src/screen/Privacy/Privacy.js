import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Switch} from 'react-native';
import ColorPath from '../../assets/ColorPath';
import ImagePath from '../../assets/ImagePath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontPath from '../../assets/FontPath';
import Navbar from '../../component/Navbar';
import {useSelector} from 'react-redux';

const Privacy = ({navigation}) => {
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
              styles.privacytext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Privacy
          </Text>
        </View>

        <View
          style={[
            styles.viewcontain,
            {
              borderBottomColor:
                Theme == 'Dark' ? ColorPath.gray3 : ColorPath.lightgray,
            },
          ]}>
          <Text
            style={[
              styles.privacylable,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Privacy
          </Text>
          <Image source={ImagePath.Rightaero} style={styles.righticon} />
        </View>

        <View>
          <Text
            style={[
              styles.marketingtext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Marketing and Analytics
          </Text>
          <Text style={styles.oncetext}>
            Once disabled, you will not be able to receive Operetional, Margin
            Calls and Forced Liquidations Notifications
          </Text>
        </View>

        <View style={styles.viewcontain1}>
          <View style={{flex: 1}}>
            <Text
              style={[
                styles.privacylable,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Analytics
            </Text>
            <Text style={[styles.oncetext, {fontSize: 12}]}>
              Suncrypto may share usage data to 3rd party anaytics platform to
              help improve our product and marketing.
            </Text>
          </View>
          <View style={{flex: 0.1}}>
            <Switch
              trackColor={{false: '#767577', true: 'red'}}
              thumbColor={isEnabled ? 'white' : 'white'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

        <View style={styles.viewcontain1}>
          <View style={{flex: 1}}>
            <Text
              style={[
                styles.privacylable,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Advertising
            </Text>
            <Text style={[styles.oncetext, {fontSize: 10}]}>
              Suncrypto may share usage data to 3rd party anaytics platform to
              help improve our targeting and marketing quality.
            </Text>
          </View>
          <View style={{flex: 0.1}}>
            <Switch
              trackColor={{false: '#767577', true: 'red'}}
              thumbColor={isEnableds ? 'white' : 'white'}
              onValueChange={toggleSwitchs}
              value={isEnableds}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  privacytext: {
    fontFamily: FontPath.Poppins_Bold,
    fontSize: 20,
    marginTop: hp(3),
  },

  privacylable: {
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 18,
  },

  viewcontain: {
    marginTop: hp(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: hp(2),
  },
  righticon: {
    width: wp(4),
    height: hp(2),
    resizeMode: 'contain',
  },

  marketingtext: {
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 18,
    marginTop: hp(3),
  },

  oncetext: {
    color: ColorPath.gray2,
    fontSize: 12,
    fontFamily: FontPath.Poppins_Medium,
  },

  viewcontain1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(4),
  },
});

export default Privacy;
