import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  StatusBar,
} from 'react-native';
import ColorPath from '../../assets/ColorPath';
import ImagePath from '../../assets/ImagePath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontPath from '../../assets/FontPath';

const P2P = ({navigation}) => {
  const [select, setSelect] = useState(1);
  const [selects, setSelects] = useState(1);

  const data = [
    {
      id: 1,
      title: 'USDT',
    },

    {
      id: 2,
      title: 'BTC',
    },

    {
      id: 3,
      title: 'BUSD',
    },

    {
      id: 4,
      title: 'BNB',
    },

    {
      id: 5,
      title: 'ETH',
    },
    {
      id: 6,
      title: 'ADA',
    },
    {
      id: 7,
      title: 'TRX',
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View style={{paddingHorizontal: index == 0 ? 0 : wp(3)}}>
        <TouchableOpacity
          onPress={() => {
            setSelect(item.id);
          }}
          style={{
            borderBottomWidth: 2,
            borderBottomColor:
              select == item.id ? ColorPath.yellow : ColorPath.white,
          }}>
          <Text
            style={{
              color:
                select == item.id ? ColorPath.darkblack : ColorPath.lightgray,
              fontFamily: FontPath.Poppins_Medium,
              fontWeight: '400',
              textAlign: 'center',
              fontSize: 15,
            }}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const buy = [
    {
      id: 1,
      title: 'Buy',
    },

    {
      id: 2,
      title: 'Sell',
    },
  ];

  const renderItems = ({item, index}) => {
    return (
      <View style={{paddingHorizontal: index == 0 ? 0 : wp(3)}}>
        <TouchableOpacity
          onPress={() => {
            setSelects(item.id);
          }}>
          <Text
            style={{
              color:
                selects == item.id ? ColorPath.darkblack : ColorPath.lightgray,
              fontFamily: FontPath.Poppins_Medium,
              fontWeight: '400',
              textAlign: 'center',
              fontSize: 17,
            }}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const listdata = [
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
  ];

  const renderItem1 = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: ColorPath.lightgray4,
          paddingBottom: hp(1),
          marginTop: hp(1),
        }}>
        <View style={{flex: 2}}>
          <Text style={styles.crookedtext}>crooked_phonenix</Text>
          <Text style={[styles.crookedtext, {color: ColorPath.gray2}]}>
            6 Trades Completion 66.70%
          </Text>
          <Text style={[styles.crookedtext, {fontSize: 20}]}>₹ 86.88</Text>
          <Text style={[styles.crookedtext, {color: ColorPath.gray2}]}>
            Crypto Amount 8.25 USDT
          </Text>
          <Text style={[styles.crookedtext, {color: ColorPath.gray2}]}>
            Limit ₹ 100.00-₹ 716.76
          </Text>

          <Text
            style={[
              styles.crookedtext,
              {color: ColorPath.gray2, marginTop: hp(1)},
            ]}>
            UPI Google Pay (GPay)
          </Text>
        </View>

        <View style={{flex: 1, marginTop: hp(3)}}>
          <TouchableOpacity style={styles.button}>
            <Text style={[styles.crookedtext, {textAlign: 'center'}]}>
              Restricted
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: wp(4)}}>
        <View style={{flexDirection: 'row', marginTop: hp(2)}}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={ImagePath.arrow} style={styles.arrowicon} />
          </TouchableOpacity>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={styles.P2Ptext}>P2P</Text>
          </View>
        </View>
      </View>
      <View style={styles.whitebox}>
        <View style={{marginTop: hp(2)}}>
          <FlatList
            horizontal
            data={buy}
            renderItem={renderItems}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View
          style={{
            marginTop: hp(1),
            borderBottomWidth: 2,
            borderBottomColor: ColorPath.lightgray4,
          }}>
          <FlatList
            horizontal
            data={data}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: hp(1.5),
            borderBottomWidth: 1,
            borderBottomColor: ColorPath.lightgray4,
            paddingBottom: hp(1.5),
          }}>
          <View
            style={{
              flex: 1.1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.amounttext}>Amount</Text>
            <Text style={styles.amounttext}>Payment Mehthod</Text>
          </View>

          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text style={styles.amounttext}>Filter</Text>
          </View>
        </View>

        <View style={{flex: 1, marginTop: hp(2)}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={listdata}
            renderItem={renderItem1}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorPath.yellow,
  },

  arrowicon: {
    width: wp(5),
    height: hp(2.5),
    resizeMode: 'contain',
    tintColor: ColorPath.gray2,
  },

  P2Ptext: {
    color: ColorPath.darkblack,
    fontSize: 18,
    fontFamily: FontPath.Poppins_Bold,
  },
  whitebox: {
    backgroundColor: ColorPath.white,
    elevation: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingVertical: hp(2),
    marginTop: hp(2),
    paddingHorizontal: wp(4),
    flex: 1,
  },

  amounttext: {
    color: ColorPath.gray2,
    fontSize: 11,
    fontFamily: FontPath.Poppins_Medium,
  },

  crookedtext: {
    color: ColorPath.darkblack,
    fontSize: 13,
    fontFamily: FontPath.Poppins_Medium,
  },

  button: {
    backgroundColor: ColorPath.lightgray,
    borderRadius: 10,
    paddingVertical: hp(1),
  },
});

export default P2P;
