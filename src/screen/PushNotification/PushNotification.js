import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import ColorPath from '../../assets/ColorPath';
import ImagePath from '../../assets/ImagePath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontPath from '../../assets/FontPath';
import Navbar from '../../component/Navbar';
import {useSelector} from 'react-redux';

const PushNotification = ({navigation}) => {
  const Theme = useSelector(store => store.ThemeReducer);

  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnableds, setIsEnableds] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitchs = () => setIsEnableds(previousState => !previousState);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

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
              styles.notificationtext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Push Notifications
          </Text>
          <Text
            style={[
              styles.youtext,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2},
            ]}>
            You can change push language on website.
          </Text>
        </View>
        <View
          style={{
            marginTop: hp(2),
            borderBottomWidth: 1,
            borderBottomColor:
              Theme == 'Dark' ? ColorPath.gray2 : ColorPath.lightgray4,
            paddingBottom: hp(1),
          }}>
          <Text
            style={[
              styles.apptext,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2},
            ]}>
            APP Notification
          </Text>
        </View>

        <View>
          <Text
            style={[
              styles.notificationsetting,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Notification Settings
          </Text>

          <Text
            style={[
              styles.youtext,
              {
                fontSize: 13,
                color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
              },
            ]}>
            Once disabled, you will not be able to receive Operetional, Margin
            Calls and Forced Liquidations Notifications
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: hp(2),
          }}>
          <View>
            <Text
              style={[
                styles.operetionaltext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Operetional Notifications
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

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: hp(4),
          }}>
          <View>
            <Text
              style={[
                styles.operetionaltext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Transaction Risk Notifications
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

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: hp(5),
          }}>
          <View>
            <Text
              style={[
                styles.operetionaltext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Marketing Campaigns
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Switch
              trackColor={{false: '#767577', true: 'red'}}
              thumbColor={isEnabled1 ? 'white' : 'white'}
              onValueChange={toggleSwitch1}
              value={isEnabled1}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationtext: {
    fontFamily: FontPath.Poppins_Bold,
    fontSize: 20,
    marginTop: hp(3),
  },

  youtext: {
    fontSize: 12,
    fontFamily: FontPath.Poppins_Medium,
  },

  apptext: {
    fontSize: 18,
    fontFamily: FontPath.Poppins_Bold,
  },

  notificationsetting: {
    fontFamily: FontPath.Poppins_Bold,
    fontSize: 18,
    marginTop: hp(3),
  },

  operetionaltext: {
    fontSize: 15,
    fontFamily: FontPath.Poppins_Medium,
  },
});

export default PushNotification;
