import React, {useState, useEffect} from 'react';
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

const Autolock = ({navigation}) => {
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
            navigation.navigate('Security');
          }}
        />

        <View>
          <Text
            style={[
              styles.autotext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Auto-Lock
          </Text>

          <Text
            style={[
              styles.enabletext,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2},
            ]}>
            Enable to lock Suncrypto app automatically
          </Text>

          <Text
            style={[
              styles.unlocktext,
              {
                color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                borderBottomColor:
                  Theme == 'Dark' ? ColorPath.gray : ColorPath.lightgray4,
              },
            ]}>
            Unlock Method
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
                styles.touchtext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Touch ID
            </Text>
            <Text
              style={[
                styles.usingtext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray3,
                },
              ]}>
              Using Touch ID to unlock the app
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
                styles.touchtext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Pattern
            </Text>
            <Text
              style={[
                styles.usingtext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray3,
                },
              ]}>
              Using Pattern to unlock the app
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
  autotext: {
    fontFamily: FontPath.Poppins_Bold,
    fontSize: 20,
    marginTop: hp(4),
  },

  enabletext: {
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 13,
    marginTop: hp(0.2),
  },

  unlocktext: {
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 16,
    marginTop: hp(3),
    borderBottomWidth: 1,
    paddingBottom: hp(0.5),
  },

  touchtext: {
    fontSize: 18,
    fontFamily: FontPath.Poppins_Medium,
  },

  usingtext: {
    fontSize: 12,
    fontFamily: FontPath.Poppins_Medium,
  },
});

export default Autolock;
