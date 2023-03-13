import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Navbar from '../../component/Navbar';
import styles from './styles';
import ImagePath from '../../assets/ImagePath';
import ColorPath from '../../assets/ColorPath';
import {useSelector} from 'react-redux';

const PayId = ({navigation}) => {
  const Theme = useSelector(store => store.ThemeReducer);

  const data = [
    {
      id: 1,
      text: 'PUBG',
    },

    {
      id: 2,
      text: 'STREAM',
    },

    {
      id: 3,
      text: 'MOBILE TOPUP',
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View style={{paddingHorizontal: index == 0 ? 0 : wp(2)}}>
        <View
          style={{
            backgroundColor:
              Theme == 'Dark' ? ColorPath.bluedark : ColorPath.darkblack,
            height: hp(12),
            width: wp(35),
            borderRadius: 12,
            marginTop: hp(1),
          }}></View>
        <Text
          style={[
            styles.pubgtext,
            {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
          ]}>
          {item.text}
        </Text>
      </View>
    );
  };

  return (
    <ScrollView
      style={[
        styles.container,
        {backgroundColor: Theme == 'Dark' ? ColorPath.blue : ColorPath.white},
      ]}>
      <StatusBar
        backgroundColor={Theme == 'Dark' ? '#1A2E35' : '#FDBF00'}
        barStyle={Theme == 'Dark' ? 'default' : 'dark-content'}
      />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[
          Theme == 'Dark' ? '#1A2E35' : '#FDBF00',
          'rgba(253, 191, 0, 0) 100%)',
        ]}
        style={{height: hp(25)}}>
        <View style={styles.viewcontainer}>
          <Navbar
            onPress={() => {
              navigation.goBack();
            }}
            righticon={
              Theme == 'Dark' ? ImagePath.angleleft2 : ImagePath.angleleft
            }
            lefticon2={Theme=='Dark'?ImagePath.rongicondark: ImagePath.rongicon}
            onPress2={() => {
              navigation.navigate('BottomTab');
            }}
          />
          <Text
            style={[
              styles.Suncryptotext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Suncrypto Pay
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: hp(0.3),
            }}>
            <Text
              style={[
                styles.Paytext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                },
              ]}>
              My Pay ID : 443610327
            </Text>
            <Image
              source={ImagePath.copyicon}
              style={[
                styles.copyicon,
                {
                  tintColor:
                    Theme == 'Dark' ? ColorPath.yellow : ColorPath.gray2,
                },
              ]}
            />
          </View>
        </View>
      </LinearGradient>
      <View style={{paddingHorizontal: wp(4), paddingVertical: hp(2)}}>
        <View
          style={[
            styles.whitebox,
            {
              backgroundColor:
                Theme == 'Dark' ? ColorPath.bluedark : ColorPath.white,
            },
          ]}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
            <TouchableOpacity>
              <Image source={ImagePath.send} style={styles.sendicon} />
              <Text
                style={[
                  styles.sendtext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                  },
                ]}>
                Send
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
            <TouchableOpacity>
              <Image
                source={ImagePath.send1}
                style={[styles.sendicon, {marginLeft: wp(2)}]}
              />
              <Text
                style={[
                  styles.sendtext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                  },
                ]}>
                Receive
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
            <TouchableOpacity>
              <Image source={ImagePath.qrcode1} style={styles.sendicon} />
              <Text
                style={[
                  styles.sendtext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                  },
                ]}>
                Scan
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginTop: hp(3)}}>
          <Text
            style={[
              styles.Latesttext,
              {
                color:
                  Theme == 'Dark' ? ColorPath.lightgray : ColorPath.darkblack,
              },
            ]}>
            Latest Offers
          </Text>
          <View
            style={{
              backgroundColor:
                Theme == 'Dark' ? ColorPath.bluedark : ColorPath.darkblack,
              height: hp(13),
              borderRadius: 13,
              marginTop: hp(1),
            }}></View>
          <View
            style={{
              backgroundColor:
                Theme == 'Dark' ? ColorPath.bluedark : ColorPath.darkblack,
              height: hp(13),
              borderRadius: 13,
              marginTop: hp(2),
            }}></View>
        </View>

        <View style={{marginTop: hp(3)}}>
          <Text
            style={[
              styles.Latesttext,
              {
                color:
                  Theme == 'Dark' ? ColorPath.lightgray : ColorPath.darkblack,
              },
            ]}>
            Hot Deals
          </Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={data}
            renderItem={renderItem}
          />
        </View>

        <View style={{marginTop: hp(3)}}>
          <Text
            style={[
              styles.Latesttext,
              {
                color:
                  Theme == 'Dark' ? ColorPath.lightgray : ColorPath.darkblack,
              },
            ]}>
            Live on crypto
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <View
                style={{
                  backgroundColor:
                    Theme == 'Dark' ? ColorPath.bluedark : ColorPath.darkblack,
                  height: hp(28),
                  borderRadius: 13,
                  marginTop: hp(1),
                  width: wp(44),
                }}></View>
              <Text
                style={[
                  styles.pubgtext,
                  {
                    color:
                      Theme == 'Dark'
                        ? ColorPath.lightgray
                        : ColorPath.darkblack,
                  },
                ]}>
                Bitrefill
              </Text>
            </View>
            <View>
              <View
                style={{
                  backgroundColor:
                    Theme == 'Dark' ? ColorPath.bluedark : ColorPath.darkblack,
                  height: hp(28),
                  borderRadius: 13,
                  marginTop: hp(1),
                  width: wp(44),
                }}></View>
              <Text
                style={[
                  styles.pubgtext,
                  {
                    color:
                      Theme == 'Dark'
                        ? ColorPath.lightgray
                        : ColorPath.darkblack,
                  },
                ]}>
                Coingate
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PayId;
