import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import ColorPath from '../../assets/ColorPath';
import ImagePath from '../../assets/ImagePath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontPath from '../../assets/FontPath';
import {useSelector} from 'react-redux';

const Notification = ({navigation}) => {
  const Theme = useSelector(store => store.ThemeReducer);

  const [select, setSelect] = useState(1);

  const data = [
    {
      id: 1,
      title: 'System',
    },

    {
      id: 2,
      title: 'Announcement',
    },
  ];

  const renderItem1 = ({item, index}) => {
    return (
      <View style={{paddingHorizontal: index == 0 ? 0 : wp(1.5)}}>
        <TouchableOpacity
          onPress={() => {
            setSelect(item.id);
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color:
                  Theme == 'Dark'
                    ? select == item.id
                      ? ColorPath.white
                      : ColorPath.lightgray2
                    : select == item.id
                    ? ColorPath.darkblack
                    : ColorPath.gray2,
                fontFamily: FontPath.Poppins_Medium,
                fontWeight: '400',
                lineHeight: 20,
                textAlign: 'center',
                fontSize: 18,
                marginLeft: index == 0 ? 0 : wp(2),
              }}>
              {item.title}
            </Text>
            <Image
              source={ImagePath.yellowcircle}
              style={{
                width: wp(2),
                height: hp(1),
                resizeMode: 'contain',
                marginLeft: wp(1.5),
                tintColor:
                  Theme == 'Dark'
                    ? select == item.id
                      ? ColorPath.yellow
                      : ColorPath.blue
                    : select == item.id
                    ? ColorPath.yellow
                    : ColorPath.white,
              }}
            />
          </View>
          <Image
            source={ImagePath.yellowline}
            style={{
              width: wp(10),
              height: hp(5),
              resizeMode: 'contain',
              alignSelf: 'center',
              marginTop: hp(-2),
              tintColor:
                Theme == 'Dark'
                  ? select == item.id
                    ? ColorPath.yellow
                    : ColorPath.blue
                  : select == item.id
                  ? ColorPath.yellow
                  : ColorPath.white,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const notificationdata = [
    {
      id: 1,
      images: Theme == 'Dark' ? ImagePath.emailwhite : ImagePath.email,
    },

    {
      id: 2,
      images:
        Theme == 'Dark' ? ImagePath.notificationwhite : ImagePath.Notification1,
    },
    {
      id: 3,
      images: Theme == 'Dark' ? ImagePath.emailwhite : ImagePath.email,
    },

    {
      id: 4,
      images:
        Theme == 'Dark' ? ImagePath.notificationwhite : ImagePath.Notification1,
    },
    {
      id: 5,
      images: Theme == 'Dark' ? ImagePath.emailwhite : ImagePath.email,
    },

    {
      id: 6,
      images:
        Theme == 'Dark' ? ImagePath.notificationwhite : ImagePath.Notification1,
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View
        style={[
          styles.viewcontainer,
          {
            borderBottomColor:
              Theme == 'Dark' ? ColorPath.lightgray2 : ColorPath.lightgray4,
          },
        ]}>
        <View
          style={{
            width: wp(8),
            height: hp(4),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
            backgroundColor:
              Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray4,
          }}>
          <Image source={item.images} style={styles.icon} />
        </View>

        <View style={{flex: 1, marginLeft: wp(3)}}>
          <Text
            style={[
              styles.logintext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Login attempted from new IP
          </Text>
          <Text
            style={[
              styles.systemtext,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2},
            ]}>
            The system has datected that your account is logged in from an
            unused IP address....
          </Text>
          <Text
            style={[
              styles.datetext,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2},
            ]}>
            2023-02-03 10:27:48
          </Text>
        </View>
      </View>
    );
  };

  const binancedata = [
    {
      id: 1,
    },

    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
    {
      id: 11,
    },
    {
      id: 12,
    },
    {
      id: 13,
    },
    {
      id: 14,
    },
    {
      id: 15,
    },
    {
      id: 16,
    },
    {
      id: 17,
    },
    {
      id: 18,
    },
    {
      id: 19,
    },
  ];

  const renderItem2 = () => {
    return (
      <View
        style={[
          styles.viewcontainer,
          {
            borderBottomColor:
              Theme == 'Dark' ? ColorPath.lightgray2 : ColorPath.lightgray4,
          },
        ]}>
        <View
          style={{
            width: wp(8),
            height: hp(4),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
            backgroundColor:
              Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray4,
          }}>
          <Image
            source={
              Theme == 'Dark' ? ImagePath.vectoriconwhite : ImagePath.vectoricon
            }
            style={styles.icon}
          />
        </View>

        <View
          style={{
            flex: 1,
            marginLeft: wp(3),
          }}>
          <Text
            style={[
              styles.logintext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Suncrypto Will Support the Harmony (ONE) Network Upgrade & Hard Fork
          </Text>
          <Text
            style={[
              styles.systemtext,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2},
            ]}>
            Fellow Binance, Binance Will Support the Harmony (ONE) Network
            Upgrade
          </Text>
          <Text
            style={[
              styles.datetext,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2},
            ]}>
            2023-02-03 07:50:12
          </Text>
        </View>
      </View>
    );
  };

  const System = () => {
    if (select == 2) {
      return (
        <View style={{marginTop: hp(2), paddingBottom: hp(12)}}>
          <FlatList data={binancedata} renderItem={renderItem2} />
        </View>
      );
    } else {
      return (
        <View style={{marginTop: hp(2), paddingBottom: hp(12)}}>
          <FlatList data={notificationdata} renderItem={renderItem} />
        </View>
      );
    }
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: Theme == 'Dark' ? ColorPath.blue : ColorPath.white},
      ]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: hp(1.5),
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={
              Theme == 'Dark' ? ImagePath.angleleft2 : ImagePath.angleleft
            }
            style={styles.righticon}
          />
        </TouchableOpacity>

        <View>
          <Text
            style={[
              styles.notificationtext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Notifications
          </Text>
        </View>

        <View style={{alignItems: 'flex-end'}}>
          <Image
            source={Theme == 'Dark' ? ImagePath.edit1 : ImagePath.edit}
            style={{width: wp(5), height: hp(2.5), resizeMode: 'contain'}}
          />
        </View>
      </View>
      <View></View>
      <View style={{marginTop: hp(2.5)}}>
        <FlatList
          horizontal
          data={data}
          renderItem={renderItem1}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View>{System()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(4),
  },

  notificationtext: {
    fontFamily: FontPath.Poppins_Bold,
    fontSize: 18,
  },

  viewcontainer: {
    flexDirection: 'row',
    marginTop: hp(2),
    borderBottomWidth: 1,
    paddingBottom: hp(3),
  },

  icon: {
    width: wp(4),
    height: hp(2),
    resizeMode: 'contain',
  },

  logintext: {
    fontSize: 15,
    fontFamily: FontPath.Poppins_Medium,
  },

  systemtext: {
    fontSize: 13,
    fontFamily: FontPath.Poppins_Medium,
  },

  datetext: {
    fontSize: 13,
    fontFamily: FontPath.Poppins_Medium,
    marginTop: hp(2),
  },

  righticon: {
    width: wp(5),
    height: hp(2.5),
    resizeMode: 'contain',
  },
});

export default Notification;
