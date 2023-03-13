import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import ColorPath from '../../assets/ColorPath';
import ImagePath from '../../assets/ImagePath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontPath from '../../assets/FontPath';
import Navbar from '../../component/Navbar';
import {useSelector} from 'react-redux';

const PaymentMethod = ({navigation}) => {
  const Theme = useSelector(store => store.ThemeReducer);

  const data = [
    {
      id: 1,
      title: 'P2P Payment Mrthod(s)',
      icon: ImagePath.Rightaero,
    },
    {
      id: 2,
      title: 'P2P Notifications',
      icon: ImagePath.Rightaero,
    },
    {
      id: 3,
      title: 'P2P Help Center',
      icon: ImagePath.Rightaero,
    },
    {
      id: 4,
      title: 'P2P User Center',
      icon: ImagePath.Rightaero,
    },
    {
      id: 5,
      title: 'Ad Sharing Code',
      icon: ImagePath.Rightaero,
    },
    {
      id: 6,
      title: 'Switch Mode',
      icon: ImagePath.Rightaero,
    },
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.button}>
        <Text
          style={[
            styles.buttontext,
            {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
          ]}>
          {item.title}
        </Text>
        <Image
          source={item.icon}
          style={[
            styles.righticon,
            {tintColor: Theme == 'Dark' ? ColorPath.white : ColorPath.gray2},
          ]}
        />
      </TouchableOpacity>
    );
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
            navigation.navigate('BottomTab');
          }}
        />

        <View>
          <Text
            style={[
              styles.paymenttext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Payment Methods
          </Text>

          <Text
            style={[
              styles.p2ptext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            P2P settings
          </Text>

          <Text
            style={[
              styles.buytext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Buy and Sell crypto instantly thorugh our Peer-to-Peer exchange
          </Text>
        </View>

        <View>
          <FlatList data={data} renderItem={renderItem} />
        </View>

        <Text
          style={[
            styles.advertisementtext,
            {
              color:
                Theme == 'Dark' ? ColorPath.lightgray : ColorPath.darkblack,
              borderBottomColor:
                Theme == 'Dark' ? ColorPath.lightgray2 : ColorPath.lightgray,
            },
          ]}>
          Advertisement mode is optimized for users that post advertisments.
          Order mode is optimized for users that buy and sell from
          advertisments.
        </Text>

        <View>
          <Text
            style={[
              styles.cashtext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Cash Settings
          </Text>

          <Text
            style={[
              styles.managetext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Manage your Cash Payment Methods
          </Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text
            style={[
              styles.buttontext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Cash Payment Methods
          </Text>

          <Image
            source={ImagePath.Rightaero}
            style={[
              styles.righticon,
              {tintColor: Theme == 'Dark' ? ColorPath.white : ColorPath.gray2},
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paymenttext: {
    fontFamily: FontPath.Poppins_Bold,
    fontSize: 20,
    marginTop: hp(3),
  },

  p2ptext: {
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 20,
    marginTop: hp(3),
  },

  buytext: {
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 11,
  },

  button: {
    paddingVertical: hp(1.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(2),
  },

  buttontext: {
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 17,
  },

  righticon: {
    width: wp(3),
    height: hp(1.5),
    resizeMode: 'contain',
  },

  advertisementtext: {
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 11,
    borderBottomWidth: 1,
    paddingBottom: hp(2),
  },

  cashtext: {
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 17,
    marginTop: hp(3),
  },

  managetext: {
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 11,
  },
});

export default PaymentMethod;
