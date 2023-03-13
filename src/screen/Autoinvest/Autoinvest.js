import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import ImagePath from '../../assets/ImagePath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ColorPath from '../../assets/ColorPath';
import FontPath from '../../assets/FontPath';
import styles from './styles';

const Autoinvest = ({navigation, route}) => {
  const [select, setSelect] = useState(1);
  const [search, setSearch] = useState([]);
  const [searchText, setSearchText] = useState('');

  const data = [
    {
      id: 1,
      title: 'Single Token',
    },

    {
      id: 2,
      title: 'Portfolio',
    },

    {
      id: 3,
      title: 'Index-Link',
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View style={{paddingHorizontal: index == 0 ? 0 : wp(4)}}>
        <TouchableOpacity
          onPress={() => {
            setSelect(item.id);
          }}
          style={{
            paddingVertical: hp(0.4),
            paddingHorizontal: wp(1.8),
            borderBottomWidth: 2,
            borderBottomColor:
              select == item.id ? ColorPath.yellow : ColorPath.white,
            marginLeft: wp(3),
          }}>
          <Text
            style={{
              color:
                select == item.id ? ColorPath.darkblack : ColorPath.lightgray,
              fontFamily: FontPath.Poppins_Medium,
              fontWeight: '400',
              lineHeight: 20,
              textAlign: 'center',
              fontSize: 13,
            }}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const datas = [
    {
      id: 1,
      title: 'BTC',
      roihistorical: '111.64%',
      price: '23,193.95',
    },
    {
      id: 2,
      title: 'ETH',
      roihistorical: '359.39%',
      price: '1,672.48',
    },
    {
      id: 3,
      title: 'BNB',
      roihistorical: '1,289.48%',
      price: '330.00',
    },
    {
      id: 4,
      title: 'MDX',
      roihistorical: '-38.92%',
      price: '0.099',
    },
    {
      id: 5,
      title: 'XRP',
      roihistorical: '0.83%',
      price: '0.3995',
    },
    {
      id: 6,
      title: 'ADA',
      roihistorical: '103.78%',
      price: '0.3969',
    },
    {
      id: 7,
      title: 'MATIC',
      roihistorical: '2142.15%',
      price: '1.27',
    },
  ];
  useEffect(() => {
    setSearch(datas);
    // console.log('777')
  }, []);
  useEffect(() => {
    searchData(searchText);
  }, [searchText]);
  const renderItems = ({item}) => {
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
          <Image
            source={ImagePath.send}
            style={{width: wp(5), height: hp(2.5), resizeMode: 'contain'}}
          />
          <Text
            style={{
              color: ColorPath.darkblack,
              fontFamily: FontPath.Poppins_Medium,
              fontSize: 15,
              marginLeft: wp(3),
            }}>
            {item.title}
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={{
              color: ColorPath.green,
              fontSize: 15,
              fontFamily: FontPath.Poppins_Medium,
            }}>
            {item.roihistorical}
          </Text>
        </View>

        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Text
            style={{
              color: ColorPath.green,
              fontSize: 15,
              fontFamily: FontPath.Poppins_Medium,
            }}>
            {item.price}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const searchData = item => {
    if (item != '') {
      var filterData = datas?.filter(text =>
        text.title.toLowerCase().includes(item.toLowerCase()),
      );
      // console.log('99999', filterData);
      setSearch(filterData);
    } else {
      setSearch(datas);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: wp(4), marginTop: hp(1)}}>
        <View>
          <Text style={styles.autotext}>Auto-Invest</Text>
        </View>
        <View style={{marginTop: hp(3)}}>
          <FlatList
            horizontal
            data={data}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View style={{marginTop: hp(3)}}>
          <TextInput
            style={styles.inputtext}
            placeholder="Search Coin"
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
            <Image
              style={{
                height: hp(2),
                width: wp(4),
                resizeMode: 'contain',
                tintColor: ColorPath.gray2,
              }}
              source={ImagePath.rongicon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewcontainer}>
        <Text style={styles.producttext}>Product</Text>
        <Text style={[styles.producttext, {textAlign: 'center'}]}>
          Historical ROI
        </Text>

        <Text style={[styles.producttext, {textAlign: 'right'}]}>
          Spot Price
        </Text>
      </View>
      <View
        style={styles.listcontianer}>
        <FlatList data={search} renderItem={renderItems} />
      </View>
    </View>
  );
};

export default Autoinvest;
