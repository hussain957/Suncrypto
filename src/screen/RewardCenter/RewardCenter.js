import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import ColorPath from '../../assets/ColorPath';
import FontPath from '../../assets/FontPath';
import ImagePath from '../../assets/ImagePath';
import Navbar from '../../component/Navbar';
import styles from './styles';

const RewardCenter = ({navigation}) => {
  
  const Theme = useSelector(store => store.ThemeReducer);

  const data = [
    {
      id: 1,
      lable: 'Saving',
    },

    {
      id: 2,
      lable: '500.0000000 BUSD',
    },

    {
      id: 3,
      lable: 'Expiry Date',
    },
  ];

  const renderItem1 = ({item, index}) => {
    return (
      <View style={{paddingHorizontal: index == 0 ? 0 : wp(1.5)}}>
        <TouchableOpacity style={[styles.button,{backgroundColor:Theme=='Dark'?ColorPath.bluedark:ColorPath.lightgray}]}>
          <Text style={[styles.Savingtext,{color:Theme=='Dark'?ColorPath.lightgray:ColorPath.darkblack}]}>{item.lable}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const list = [
    {
      id: 1,
      backgourndtext: '7 Day Trial Fund',
      lable: 'Trial Fund',
      text: 'Expiry Date 2022-07-11 21:32:16 (UTC + 5.5)',
      nottext: '*Not eligible for withdrawal or exchange any...',
    },

    {
      id: 2,
      backgourndtext: '10 USDT',
      lable: 'Cashback Voucher',
      text: 'Expiry Date 2022-07-11 21:32:16 (UTC + 5.5)',
      nottext: 'Reward Time : 7 Days',
    },

    {
      id: 3,
      backgourndtext: '7 Day Trial Fund',
      lable: 'Trial Fund',
      text: 'Expiry Date 2022-07-11 21:32:16 (UTC + 5.5)',
      nottext: '*Not eligible for withdrawal or exchange any...',
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View style={{flexDirection: 'row', marginTop: hp(3)}}>
        <View style={{flex: 1}}>
          <ImageBackground
            source={Theme=='Dark'?ImagePath.backgrounddark:  ImagePath.background}
            style={styles.background}>
            <Text
              style={[
                styles.boxtext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.gray2 : ColorPath.lightgray,
                },
              ]}>
              {item.backgourndtext}
            </Text>
          </ImageBackground>
        </View>

        <View
          style={[
            styles.boxborder,
            {
              borderColor:
                Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
            },
          ]}>
          <Text
            style={[
              styles.trialtext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            {item.lable}
          </Text>
          <Text
            style={[
              styles.expirytext,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2},
            ]}>
            {item.text}
          </Text>

          <View style={{marginTop: hp(1.5)}}>
            <FlatList horizontal data={data} renderItem={renderItem1} />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              paddingVertical: hp(1.5),
            }}>
            <Text style={[styles.Nottext,{color:Theme=='Dark'?ColorPath.lightgray:ColorPath.gray2}]}>{item.nottext}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView
      style={[
        styles.container,
        {backgroundColor: Theme == 'Dark' ? ColorPath.blue : ColorPath.white},
      ]}>
      <View style={{paddingHorizontal: wp(4), paddingVertical: hp(1)}}>
        <Navbar
          onPress={() => {
            navigation.goBack();
          }}
          righticon={Theme == 'Dark' ? ImagePath.homedark : ImagePath.home1}
          lefticon2={
            Theme == 'Dark' ? ImagePath.rongicondark : ImagePath.rongicon
          }
          onPress2={() => {
            navigation.navigate('BottomTab');
          }}
        />
      </View>

      <View>
        <Text
          style={[
            styles.Rewardtext,
            {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
          ]}>
          Reward Center
        </Text>
      </View>

      <View style={{paddingHorizontal: wp(3), marginTop: hp(2)}}>
        <Text
          style={[
            styles.Enjoytext,
            {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2},
          ]}>
          Enjoy special bonus and reward with Binance Vouchers.
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              styles.redeem,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2},
            ]}>
            How to redeem a voucher?
          </Text>
          <TouchableOpacity>
            <Text style={styles.buttontext}>Learn More</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[
            styles.voucherbutton,
            {
              backgroundColor:
                Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray,
            },
          ]}>
          <Image
            source={ImagePath.voucher}
            style={[
              styles.vouchericon,
              {
                tintColor:
                  Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
              },
            ]}
          />
          <Text
            style={[
              styles.Vouchertext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Voucher Code
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{paddingVertical: hp(3), paddingHorizontal: wp(3)}}>
        <FlatList data={list} renderItem={renderItem} />
      </View>
    </ScrollView>
  );
};

export default RewardCenter;
