import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import ColorPath from '../../assets/ColorPath';
import ImagePath from '../../assets/ImagePath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontPath from '../../assets/FontPath';
import Navbar from '../../component/Navbar';
import {useSelector} from 'react-redux';

const AboutUs = ({navigation}) => {
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
            navigation.navigate('Setting');
          }}
        />

        <View>
          <Text
            style={[
              styles.abouttext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            About Us
          </Text>
        </View>

        <View style={styles.viewcontainer}>
          <Image source={ImagePath.Darklogopng} style={styles.logoicon} />
        </View>

        <Text
          style={[
            styles.version,
            {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
          ]}>
          v 2.59.3
        </Text>

        <TouchableOpacity style={styles.button}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: wp(9.5),
                height: hp(4.5),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 25,
                backgroundColor:
                  Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray4,
              }}>
              <Image
                source={ImagePath.facebook}
                style={[
                  styles.icon,
                  {
                    tintColor:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.gray2,
                  },
                ]}
              />
            </View>
            <Text
              style={[
                styles.buttontext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Like us on Facebook
            </Text>
          </View>

          <View>
            <Image source={ImagePath.Rightaero} style={styles.righticon} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: wp(9.5),
                height: hp(4.5),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 25,
                backgroundColor:
                  Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray4,
              }}>
              <Image
                source={ImagePath.twitter}
                style={[
                  styles.icon,
                  {
                    tintColor:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.gray2,
                  },
                ]}
              />
            </View>
            <Text
              style={[
                styles.buttontext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Follow us on Twitter
            </Text>
          </View>

          <View>
            <Image source={ImagePath.Rightaero} style={styles.righticon} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: wp(9.5),
                height: hp(4.5),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 25,
                backgroundColor:
                  Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray4,
              }}>
              <Image
                source={ImagePath.telegram}
                style={[
                  styles.icon,
                  {
                    tintColor:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.gray2,
                  },
                ]}
              />
            </View>
            <Text
              style={[
                styles.buttontext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Join us on Telegram
            </Text>
          </View>

          <View>
            <Image source={ImagePath.Rightaero} style={styles.righticon} />
          </View>
        </TouchableOpacity>

        <View
          style={[styles.devicebutton, {borderBottomColor: ColorPath.gray3}]}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: wp(9.5),
                height: hp(4.5),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 25,
                backgroundColor:
                  Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray4,
              }}>
              <Image
                source={ImagePath.smartphone}
                style={[
                  styles.icon,
                  {
                    tintColor:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.gray2,
                  },
                ]}
              />
            </View>
            <View>
              <Text
                style={[
                  styles.buttontext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                DeviceID
              </Text>
              <Text
                style={[
                  styles.buttontext,
                  {
                    fontSize: 13,
                    color: ColorPath.gray2,
                  },
                ]}>
                08d1d5g6sh373gsjjw638jehee73kw628
              </Text>
            </View>
          </View>

          <TouchableOpacity>
            <Image
              source={ImagePath.copyicon}
              style={[styles.righticon, {tintColor: ColorPath.gray2}]}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            marginTop: hp(3),
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: wp(9.5),
                height: hp(4.5),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 25,
                backgroundColor:
                  Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray4,
              }}>
              <Image
                source={ImagePath.updateicon}
                style={[
                  styles.icon,
                  {
                    tintColor:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.gray2,
                  },
                ]}
              />
            </View>
            <View>
              <Text
                style={[
                  styles.buttontext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                Check for updates
              </Text>
              <Text
                style={[
                  styles.buttontext,
                  {fontSize: 13, color: ColorPath.gray2},
                ]}>
                Your current version is up to date.
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  abouttext: {
    fontFamily: FontPath.Poppins_Bold,
    fontSize: 20,
    marginTop: hp(3),
  },

  viewcontainer: {
    backgroundColor: ColorPath.white,
    elevation: 10,
    borderRadius: 15,
    width: wp(30),
    height: hp(15),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: hp(2),
  },

  logoicon: {
    width: wp(18),
    height: hp(9),
    resizeMode: 'contain',
  },

  version: {
    fontSize: 15,
    fontFamily: FontPath.Poppins_Medium,
    textAlign: 'center',
    marginTop: hp(2),
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(5),
  },

  icon: {
    width: wp(5),
    height: hp(2.5),
    resizeMode: 'contain',
  },

  buttontext: {
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 15,
    marginLeft: wp(4),
  },

  righticon: {
    width: wp(4),
    height: hp(2),
    resizeMode: 'contain',
  },

  devicebutton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(4),
    borderBottomWidth: 1,
    paddingBottom: hp(2),
  },
});

export default AboutUs;
