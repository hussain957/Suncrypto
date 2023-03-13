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

const Devices = ({navigation}) => {
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
              styles.devicetext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Devices
          </Text>
          <Text
            style={[
              styles.thesetext,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2},
            ]}>
            These are the devices currently allowed to access your account.
          </Text>
        </View>

        <View style={{marginTop: hp(3)}}>
          <Text
            style={[
              styles.devicename,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            M2101K9AI
          </Text>
        </View>

        <View style={styles.viewcontainer}>
          <Text
            style={[
              styles.datetext,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2},
            ]}>
            Date:
          </Text>
          <Text
            style={[
              styles.datetimetext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            2023-02-03 10:27:48
          </Text>
        </View>

        <View style={styles.viewcontainer}>
          <Text
            style={[
              styles.datetext,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2},
            ]}>
            Location:
          </Text>
          <Text
            style={[
              styles.datetimetext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Jaipur India
          </Text>
        </View>

        <View style={styles.viewcontainer}>
          <Text
            style={[
              styles.datetext,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2},
            ]}>
            IP:
          </Text>
          <Text
            style={[
              styles.datetimetext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            106.205.197.182
          </Text>
        </View>

        <View style={{marginTop: hp(3)}}>
          <Text
            style={[
              styles.devicename,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            M2101K9AI
          </Text>
        </View>

        <View style={styles.viewcontainer}>
          <Text
            style={[
              styles.datetext,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2},
            ]}>
            Date:
          </Text>
          <Text
            style={[
              styles.datetimetext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            2022-04-25 16:36:28
          </Text>
        </View>

        <View style={styles.viewcontainer}>
          <Text
            style={[
              styles.datetext,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2},
            ]}>
            Location:
          </Text>
          <Text
            style={[
              styles.datetimetext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Jaipur India
          </Text>
        </View>

        <View style={styles.viewcontainer}>
          <Text
            style={[
              styles.datetext,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2},
            ]}>
            IP:
          </Text>
          <Text
            style={[
              styles.datetimetext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            103.59.75.20
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  devicetext: {
    fontFamily: FontPath.Poppins_Bold,
    fontSize: 20,
    marginTop: hp(3),
  },

  thesetext: {
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 13,
  },

  devicename: {
    fontSize: 15,
    fontFamily: FontPath.Poppins_Medium,
  },

  viewcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(1),
  },

  datetext: {
    fontSize: 13,
    fontFamily: FontPath.Poppins_Medium,
  },

  datetimetext: {
    fontSize: 13,
    fontFamily: FontPath.Poppins_Medium,
  },
});

export default Devices;
