import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ColorPath from '../../assets/ColorPath';
import ImagePath from '../../assets/ImagePath';
import Navbar from '../../component/Navbar';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {ChangeTheme} from '../../Redux/Actions/Action';
import Share from 'react-native-share';

const SideBar = ({navigation}) => {
  const dispatch = useDispatch();
  const Theme = useSelector(store => store.ThemeReducer);

  const onclick = () => {
    AsyncStorage.setItem('CheckLocalTheme', Theme);
    dispatch(ChangeTheme(Theme == 'Light' ? 'Dark' : 'Light'));
  };

  const url = 'https://play.google.com/store/apps/details?id=com.suncrypto.in';
  const title = 'Awesome Contents';
  const message = 'Please check this out.';

  const options = {
    title,
    url,
    message,
  };

  const share = async (customOptions = options) => {
    try {
      await Share.open(customOptions);
    } catch (err) {
      console.log(err);
    }
  };

  const data = [
    {
      id: 1,
      Image: ImagePath.taskcenter,
      text: 'Task Center',
      icon: ImagePath.Rightaero,
      routes: 'TaskCenter',
    },

    {
      id: 2,
      Image: ImagePath.trophy2,
      text: 'Reward Center',
      icon: ImagePath.Rightaero,
      routes: 'RewardCenter',
    },

    {
      id: 3,
      Image: ImagePath.useradd,
      text: 'My Referral ID',
      icon: ImagePath.Rightaero,
      routes: 'ReferralId',
    },

    {
      id: 4,
      Image: ImagePath.money,
      text: 'Pay',
      icon: ImagePath.Rightaero,
      routes: 'PayId',
    },

    {
      id: 5,
      Image: ImagePath.gift,
      text: 'Gift Card',
      icon: ImagePath.Rightaero,
      routes: 'GiftCard',
    },

    {
      id: 6,
      Image: ImagePath.gift1,
      text: 'My Gift',
      icon: ImagePath.Rightaero,
      routes: 'MyGift',
    },
  ];

  const list = [
    {
      id: 1,
      Image: ImagePath.bell,
      text: 'Notification',
      routes: 'Notification',
      icon: ImagePath.Rightaero,
    },

    {
      id: 2,
      Image: ImagePath.payment,
      text: 'Payment Methods',
      icon: ImagePath.Rightaero,
      routes: 'PaymentMethod',
    },

    {
      id: 3,
      Image: ImagePath.shieldcheck,
      text: 'Security ',
      routes: 'Security',
      icon: ImagePath.Rightaero,
    },

    {
      id: 4,
      Image: ImagePath.settings,
      text: 'Settings',
      routes: 'Setting',
      icon: ImagePath.Rightaero,
    },
  ];

  const onPressItem = item => {
    if (item.id == 2) {
      share();
    } else {
      NextScreen(item);
    }
  };
  const list1 = [
    {
      id: 1,
      Image: ImagePath.interrogation,
      text: 'Help & Support ',
      routes: 'Help',
      icon: ImagePath.Rightaero,
    },

    {
      id: 2,
      Image: ImagePath.share,
      text: 'Share The App ',
      routes: 'Help',
      icon: ImagePath.Rightaero,
    },
  ];

  const NextScreen = goHome => {
    navigation.navigate(goHome.routes);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          NextScreen(item);
        }}
        style={{
          flexDirection: 'row',
          paddingBottom: wp(8),
          paddingVertical: hp(3),
        }}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={item.Image}
            style={[
              styles.gemicon,
              {
                tintColor:
                  Theme == 'Dark' ? ColorPath.white : ColorPath.darkblue,
              },
            ]}
          />
          <Text
            style={[
              styles.tasktext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.bluedark},
            ]}>
            {item.text}
          </Text>
        </View>

        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Image
            source={item.icon}
            style={[
              styles.Rightaero2,
              {
                tintColor:
                  Theme == 'Dark' ? ColorPath.white : ColorPath.darkblue,
                marginTop: hp(0.6),
              },
            ]}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem1 = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          NextScreen(item);
        }}
        style={{
          flexDirection: 'row',
          paddingBottom: wp(8),
          paddingVertical: hp(3),
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image
            source={item.Image}
            style={[
              styles.gemicon,
              {
                tintColor:
                  Theme == 'Dark' ? ColorPath.white : ColorPath.darkblue,
              },
            ]}
          />
          <Text
            style={[
              styles.tasktext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.bluedark},
            ]}>
            {item.text}
          </Text>
        </View>

        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Image
            source={item.icon}
            style={[
              styles.Rightaero2,
              {
                tintColor:
                  Theme == 'Dark' ? ColorPath.white : ColorPath.darkblue,
                marginTop: hp(0.6),
              },
            ]}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem2 = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onPressItem(item, index);
        }}
        style={{
          flexDirection: 'row',
          paddingBottom: wp(8),
          paddingVertical: hp(3),
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image
            source={item.Image}
            style={[
              styles.gemicon,
              {
                tintColor:
                  Theme == 'Dark' ? ColorPath.white : ColorPath.darkblue,
              },
            ]}
          />
          <Text
            style={[
              styles.tasktext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.bluedark},
            ]}>
            {item.text}
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Image
            source={item.icon}
            style={[
              styles.Rightaero2,
              {
                tintColor:
                  Theme == 'Dark' ? ColorPath.white : ColorPath.darkblue,
                marginTop: hp(0.6),
              },
            ]}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: Theme == 'Dark' ? ColorPath.blue : ColorPath.white},
      ]}>
      <StatusBar
        backgroundColor={Theme == 'Dark' ? ColorPath.blue : ColorPath.white}
        barStyle={Theme == 'Dark' ? 'default' : 'dark-content'}
      />

      <View style={{paddingHorizontal: wp(4), paddingVertical: hp(1)}}>
        <Navbar
          righticon={
            Theme == 'Dark' ? ImagePath.angleleft2 : ImagePath.angleleft
          }
          lefticon={
            Theme == 'Dark' ? ImagePath.headphone1 : ImagePath.headphone
          }
          lefticon2={Theme == 'Dark' ? ImagePath.Weather1 : ImagePath.Weather}
          onPress={() => {
            navigation.closeDrawer();
          }}
          onPress2={() => {
            onclick();
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: hp(3),
          }}>
          <View
            style={{
              borderWidth: 1,
              borderColor:
                Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
              borderRadius: 30,
              width: 60,
              height: 60,
              lineHeight: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={ImagePath.usericon}
              style={[
                styles.usericon,
                {
                  tintColor:
                    Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                },
              ]}
            />
          </View>
          <View style={{marginLeft: wp(3.5)}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={[
                  styles.suncryptotext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                  },
                ]}>
                Suncrypto-User5452342
              </Text>
              <Image
                source={ImagePath.verifieduser}
                style={[
                  styles.verifieduser,
                  {
                    tintColor:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.black,
                  },
                ]}
              />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={[
                  styles.Regulartext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                  },
                ]}>
                ID : 445234234
              </Text>
              <Image
                source={ImagePath.copyicon}
                style={[
                  styles.copyicon,
                  {
                    tintColor:
                      Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                  },
                ]}
              />
            </View>
          </View>
        </View>

        <View style={styles.regularview}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <Image source={ImagePath.gem} style={styles.gemicon} />
            <Text style={[styles.Regulartext, {marginLeft: wp(1)}]}>
              REGULAR
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <Text style={styles.Usetext}>Use Suncrypto to get discount</Text>
            <Image source={ImagePath.Rightaero} style={styles.Rightaero} />
          </View>
        </View>
      </View>

      <ScrollView>
        <View
          style={[
            styles.listcontainer,
            {
              backgroundColor:
                Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray4,
            },
          ]}>
          <FlatList data={data} renderItem={renderItem} />
        </View>

        <View style={styles.listcontainer1}>
          <FlatList data={list} renderItem={renderItem1} />
        </View>

        <View
          style={[
            styles.listcontainer2,
            {
              backgroundColor:
                Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray4,
            },
          ]}>
          <FlatList data={list1} renderItem={renderItem2} />
        </View>
        <View style={{paddingHorizontal: wp(6), paddingBottom: hp(2),marginTop:hp(2)}}>
        <TouchableOpacity
          style={[
            styles.graybutton,
            {
              backgroundColor:
                Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray,
            },
          ]}>
          <Text
            style={[
              styles.Logouttext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Logout
          </Text>
        </TouchableOpacity>

        <Text
          style={[
            styles.pleasetext,
            {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2},
          ]}>
          Please do not disclose SMS and Google Authentication codes to anyone,
          including Suncrypto customer support.
        </Text>
      </View>
      </ScrollView>
    </View>
  );
};

export default SideBar;
