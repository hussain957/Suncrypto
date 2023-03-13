import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
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

const PaymentCurrency = ({navigation}) => {
  const Theme = useSelector(store => store.ThemeReducer);

  const [search, setSearch] = useState([]);
  const [searchText, setSearchText] = useState('');

  const data = [
    {
      id: 1,
      title: 'AED',
    },
    {
      id: 2,
      title: 'AMD',
    },
    {
      id: 3,
      title: 'ARS',
    },
    {
      id: 4,
      title: 'AUD',
    },
    {
      id: 5,
      title: 'AZN',
    },
    {
      id: 6,
      title: 'BDT',
    },
    {
      id: 7,
      title: 'BOB',
    },
    {
      id: 8,
      title: 'BGN',
    },
    {
      id: 9,
      title: 'BHD',
    },
    {
      id: 10,
      title: 'BND',
    },
    {
      id: 11,
      title: 'BOB',
    },
    {
      id: 12,
      title: 'BRL',
    },
    {
      id: 13,
      title: 'ARS',
    },
  ];
  useEffect(() => {
    setSearch(data);
    // console.log('777')
  }, []);
  useEffect(() => {
    searchData(searchText);
  }, [searchText]);
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSearchText(item?.title);
        }}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: hp(2),
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image source={ImagePath.send} style={styles.listicon} />
          <Text
            style={[
              styles.listtext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            {item.title}
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <View
            style={{
              backgroundColor: ColorPath.yellow,
              width: wp(6),
              height: hp(3),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 30,
            }}>
            <Text
              style={{
                color: ColorPath.white,
                fontSize: 10,
                fontFamily: FontPath.Poppins_Medium,
              }}>
              A
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const searchData = item => {
    if (item != '') {
      var filterData = data?.filter(text =>
        text.title.toLowerCase().includes(item.toLowerCase()),
      );
      // console.log('99999', filterData);
      setSearch(filterData);
    } else {
      setSearch(data);
    }
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
              styles.currencytext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Payment Currency
          </Text>
          <Text
            style={[
              styles.settext,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray3},
            ]}>
            Set up the default currency for fiat payment
          </Text>
        </View>

        <View style={{marginTop: hp(1)}}>
          <TextInput
            style={styles.textinput}
            clearButtonMode={'while-editing'}
            placeholder="Search currency"
            placeholderTextColor={ColorPath.gray2}
            value={searchText}
            onChangeText={item => {
              setSearchText(item);
              searchData(item);
            }}
          />
          <Image style={styles.searchicon} source={ImagePath.searchicon} />

          <TouchableOpacity
            onPress={() => {
              setSearchText('');
            }}
            style={{position: 'absolute', top: hp(1.8), right: wp(6)}}>
            <Image style={styles.rongicon} source={ImagePath.rongicon} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          paddingBottom: hp(2),
          marginTop: hp(1),
          flex: 1,
          paddingHorizontal: wp(4),
        }}>
        <FlatList data={search} renderItem={renderItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  currencytext: {
    fontFamily: FontPath.Poppins_Bold,
    fontSize: 20,
    marginTop: hp(3),
  },

  settext: {
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 11,
  },

  textinput: {
    backgroundColor: ColorPath.lightgray4,
    borderRadius: 25,
    color: ColorPath.black,
    paddingLeft: wp(10),
    borderColor: ColorPath.white,
    paddingVertical: hp(1),
  },

  searchicon: {
    height: hp(2),
    width: wp(4),
    resizeMode: 'contain',
    position: 'absolute',
    top: hp(2),
    left: wp(4),
    tintColor: ColorPath.gray2,
  },

  rongicon: {
    height: hp(2),
    width: wp(4),
    resizeMode: 'contain',
    tintColor: ColorPath.gray2,
  },

  listicon: {
    width: wp(5),
    height: hp(2.5),
    resizeMode: 'contain',
  },

  listtext: {
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 15,
    marginLeft: wp(3),
  },
});

export default PaymentCurrency;
