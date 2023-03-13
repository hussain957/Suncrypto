import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ColorPath from '../../assets/ColorPath';
import ImagePath from '../../assets/ImagePath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontPath from '../../assets/FontPath';
import {useSelector} from 'react-redux';

const Security = ({navigation}) => {
  const Theme = useSelector(store => store.ThemeReducer);

  const data = [
    {
      id: 1,
      text: 'Account Activities',
      icon: ImagePath.Rightaero,
      route: 'Activities',
      color: Theme == 'Dark' ? ColorPath.yellow : ColorPath.darkblack,
      tintColor: Theme == 'Dark' ? ColorPath.yellow : ColorPath.darkblack,
    },

    {
      id: 2,
      text: 'Auto-Lock',
      icon: ImagePath.Rightaero,
      route: 'Autolock',
      color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
      tintColor: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
    },

    {
      id: 3,
      text: 'Third-Party Apps With Account Access',
      icon: ImagePath.Rightaero,
      route: 'ThirdParty',
      color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
      tintColor: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
    },

    {
      id: 4,
      text: 'Account Connections',
      icon: ImagePath.Rightaero,
      route: 'Account',
      color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
      tintColor: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
    },

    {
      id: 5,
      text: 'Devices',
      icon: ImagePath.Rightaero,
      route: 'Devices',
      color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
      tintColor: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
    },

    {
      id: 6,
      text: 'Change Password',
      icon: ImagePath.Rightaero,
      color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
      tintColor: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
    },

    {
      id: 7,
      text: 'Manage Account',
      icon: ImagePath.Rightaero,
      route: 'ManageAccount',
      color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
      tintColor: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
    },
  ];

  const Nextscreen = goHome => {
    navigation.navigate(goHome.route);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          Nextscreen(item);
        }}
        style={{
          flexDirection: 'row',
          paddingBottom: wp(6),
        }}>
        <View style={{flex: 5, flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[styles.listtext, {color: item.color}]}>
            {item.text}
          </Text>
        </View>

        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Image
            source={item.icon}
            style={[
              styles.righticon,
              {
                tintColor: item.tintColor,
              },
            ]}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Theme == 'Dark' ? ColorPath.blue : ColorPath.white,
      }}>
      <View style={{paddingHorizontal: wp(4)}}>
        <View style={styles.mainview}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={
                Theme == 'Dark' ? ImagePath.angleleft2 : ImagePath.angleleft
              }
              style={styles.lefticon}
            />
          </TouchableOpacity>

          <View>
            <Text
              style={[
                styles.securitytext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Security
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('BottomTab');
            }}
            style={{alignItems: 'flex-end'}}>
            <Image
              source={
                Theme == 'Dark' ? ImagePath.rongicondark : ImagePath.rongicon
              }
              style={styles.lefticon}
            />
          </TouchableOpacity>
        </View>

        <View style={{marginTop: hp(3)}}>
          <Text
            style={[
              styles.towtext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Tow-Factor Authentication (2FA)
          </Text>
          <Text
            style={[
              styles.protect,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2},
            ]}>
            To Protect your account, it recommended to turn on at least one 2FA.
          </Text>
        </View>
      </View>

      <View style={{paddingHorizontal: wp(4)}}>
        <View style={styles.viewcontainer}>
          <View
            style={[
              styles.viewcontainer1,
              {
                backgroundColor:
                  Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray4,
              },
            ]}>
            <View style={styles.viewcontainer2}>
              <View
                style={{
                  backgroundColor: ColorPath.gray2,
                  borderRadius: 25,
                  height: hp(5),
                  width: wp(10),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={ImagePath.fingerprint} style={styles.icon} />
              </View>
              <Image source={ImagePath.greenicon} style={[styles.greenicon,{top:hp(2.8),right:wp(29.5)}]} />
              <Image
                source={ImagePath.angleleft1}
                style={[
                  styles.lefticon1,
                  {
                    tintColor:
                      Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                  },
                ]}
              />
            </View>

            <Text
              style={[
                styles.biomerricstext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Biometrics and Security Keys
            </Text>
          </View>
          <View
            style={[
              styles.viewcontainer1,
              {
                backgroundColor:
                  Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray4,
              },
            ]}>
            <View style={styles.viewcontainer2}>
              <View
                style={{
                  backgroundColor: ColorPath.gray2,
                  borderRadius: 25,
                  height: hp(5),
                  width: wp(10),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={ImagePath.keyicon} style={styles.icon} />
              </View>
              <Image source={ImagePath.greenicon} style={styles.greenicon} />
              <Image
                source={ImagePath.angleleft1}
                style={[
                  styles.lefticon1,
                  {
                    tintColor:
                      Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                  },
                ]}
              />
            </View>

            <Text
              style={[
                styles.biomerricstext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Acthenticator App
            </Text>
          </View>
        </View>

        <View style={styles.viewcontainer}>
          <View
            style={[
              styles.viewcontainer1,
              {
                backgroundColor:
                  Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray4,
              },
            ]}>
            <View style={styles.viewcontainer2}>
              <View
                style={{
                  backgroundColor: ColorPath.gray2,
                  borderRadius: 25,
                  height: hp(5),
                  width: wp(10),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={ImagePath.emailwhite} style={styles.icon} />
              </View>
              <Image source={ImagePath.greenicon} style={[styles.greenicon,{right:wp(29)}]} />
              <Image
                source={ImagePath.angleleft1}
                style={[
                  styles.lefticon1,
                  {
                    tintColor:
                      Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                  },
                ]}
              />
            </View>

            <Text
              style={[
                styles.biomerricstext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Email
            </Text>
          </View>

          <View
            style={[
              styles.viewcontainer1,
              {
                backgroundColor:
                  Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray4,
              },
            ]}>
            <View style={styles.viewcontainer2}>
              <View
                style={{
                  backgroundColor: ColorPath.gray2,
                  borderRadius: 25,
                  height: hp(5),
                  width: wp(10),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={ImagePath.chat} style={styles.icon} />
              </View>
              <Image source={ImagePath.greenicon} style={styles.greenicon} />

              <Image
                source={ImagePath.angleleft1}
                style={[
                  styles.lefticon1,
                  {
                    tintColor:
                      Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                  },
                ]}
              />
            </View>

            <Text
              style={[
                styles.biomerricstext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Phone Number
            </Text>
          </View>
        </View>
      </View>

      <View style={{paddingHorizontal: wp(4), marginTop: hp(2), flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  securitytext: {
    fontFamily: FontPath.Poppins_Bold,
    fontSize: 18,
  },

  lefticon: {
    width: wp(5),
    height: hp(2.5),
    resizeMode: 'contain',
  },

  towtext: {
    color: ColorPath.darkblack,
    fontSize: 15,
    fontFamily: FontPath.Poppins_Medium,
  },

  protect: {
    fontSize: 13,
    fontFamily: FontPath.Poppins_Medium,
  },

  viewcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(2),
  },

  viewcontainer1: {
    paddingHorizontal: wp(2),
    paddingVertical: hp(1),
    width: wp(45),
  },

  viewcontainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  icon: {
    width: wp(6),
    height: hp(3),
    resizeMode: 'contain',
  },
  greenicon: {
    width: wp(4),
    height: hp(2),
    resizeMode: 'contain',
    position: 'absolute',
    right: wp(30),
    top: hp(3),
  },

  lefticon1: {
    width: wp(3),
    height: hp(1.5),
    resizeMode: 'contain',
  },

  biomerricstext: {
    fontSize: 11,
    fontFamily: FontPath.Poppins_Medium,
    marginTop: hp(1),
  },

  mainview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(1.5),
  },

  listtext: {
    fontFamily: FontPath.Poppins_Medium,
    fontWeight: '500',
    fontSize: 13.5,
  },

  righticon: {
    width: wp(3),
    height: hp(1.5),
    resizeMode: 'contain',
  },
});

export default Security;
