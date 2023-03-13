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
import Navbar from '../../component/Navbar';
import {useSelector} from 'react-redux';

const ChangeBasis = ({navigation}) => {
  const Theme = useSelector(store => store.ThemeReducer);

  const data = [
    {
      id: 1,
      title: 'Last 24 hours',
      color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
      tintColor: Theme == 'Dark' ? ColorPath.blue : ColorPath.white,
    },
    {
      id: 2,
      title: 'UTC+5, 00:00 (Device time zone)',
      color: Theme == 'Dark' ? ColorPath.gray3 : ColorPath.gray2,
      tintColor: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
    },
    {
      id: 3,
      title: 'UTC+12, 00:00',
      color: Theme == 'Dark' ? ColorPath.gray3 : ColorPath.gray2,
      tintColor: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
    },
    {
      id: 4,
      title: 'UTC+12, 00:00',
      color: Theme == 'Dark' ? ColorPath.gray3 : ColorPath.gray2,
      tintColor: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
    },
    {
      id: 5,
      title: 'UTC+11, 00:00',
      color: Theme == 'Dark' ? ColorPath.gray3 : ColorPath.gray2,
      tintColor: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
    },
    {
      id: 6,
      title: 'UTC+10, 00:00',
      color: Theme == 'Dark' ? ColorPath.gray3 : ColorPath.gray2,
      tintColor: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
    },
    {
      id: 7,
      title: 'UTC+9, 00:00',
      color: Theme == 'Dark' ? ColorPath.gray3 : ColorPath.gray2,
      tintColor: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
    },
    {
      id: 8,
      title: 'UTC+8, 00:00',
      color: Theme == 'Dark' ? ColorPath.gray3 : ColorPath.gray2,
      tintColor: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
    },
    {
      id: 9,
      title: 'UTC+7, 00:00',
      color: Theme == 'Dark' ? ColorPath.gray3 : ColorPath.gray2,
      tintColor: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
    },
    {
      id: 10,
      title: 'UTC+6, 00:00',
      color: Theme == 'Dark' ? ColorPath.gray3 : ColorPath.gray2,
      tintColor: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
    },
    {
      id: 11,
      title: 'UTC+5, 00:00',
      color: Theme == 'Dark' ? ColorPath.gray3 : ColorPath.gray2,
      tintColor: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
    },
    {
      id: 12,
      title: 'UTC+4, 00:00',
      color: Theme == 'Dark' ? ColorPath.gray3 : ColorPath.gray2,
      tintColor: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
    },
    {
      id: 13,
      title: 'UTC+3, 00:00',
      color: Theme == 'Dark' ? ColorPath.gray3 : ColorPath.gray2,
      tintColor: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
    },
    {
      id: 14,
      title: 'UTC+2, 00:00',
      color: Theme == 'Dark' ? ColorPath.gray3 : ColorPath.gray2,
      tintColor: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
    },
    {
      id: 15,
      title: 'UTC+1, 00:00',
      color: Theme == 'Dark' ? ColorPath.gray3 : ColorPath.gray2,
      tintColor: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
    },
  ];

  const [select, setSelect] = useState('');

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelect(index);
        }}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={[styles.listtext, {color: item.color}]}>{item.title}</Text>
        {select == index ? (
          <Image
            source={ImagePath.rightactive}
            style={[
              styles.righticon,
              {
                tintColor: item.tintColor,
              },
            ]}
          />
        ) : null}
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
            navigation.navigate('Setting');
          }}
        />

        <View>
          <Text
            style={[
              styles.changetext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Change Basis
          </Text>
          <Text
            style={[
              styles.whentext,
              {color: Theme == 'Dark' ? ColorPath.gray2 : ColorPath.gray3},
            ]}>
            1. Wehen you swith to a new UTC time zone, the change (%) for Spot,
            Margin, Options and Futures(excluding Mock Trading) will be
            calculated based on your new time zone.
          </Text>

          <Text
            style={[
              styles.whentext,
              {
                marginTop: hp(1),
                color: Theme == 'Dark' ? ColorPath.gray2 : ColorPath.gray3,
              },
            ]}>
            2. Wehen you swith to a new UTC time zone, the change (%) for Spot,
            Margin, Options and Futures(excluding Mock Trading) will be
            calculated based on your new time zone.
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingBottom: hp(2),
          marginTop: hp(1),
          flex: 1,
          paddingHorizontal: wp(4),
        }}>
        <FlatList data={data} renderItem={renderItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  changetext: {
    fontFamily: FontPath.Poppins_Bold,
    fontSize: 20,
    marginTop: hp(3),
  },

  whentext: {
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 12.5,
  },

  listtext: {
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 15,
    marginTop: hp(3),
  },

  righticon: {
    width: wp(4),
    height: hp(2),
    resizeMode: 'contain',
  },
});

export default ChangeBasis;
