import React from 'react';
import {Text, TouchableOpacity, View, ScrollView, Image} from 'react-native';
import ImagePath from '../../assets/ImagePath';
import Navbar from '../../component/Navbar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './styles';
import {SliderBox} from 'react-native-image-slider-box';
import ColorPath from '../../assets/ColorPath';
import {useSelector} from 'react-redux';

const GiftCard = ({navigation}) => {
  const Theme = useSelector(store => store.ThemeReducer);

  const Images = [
    ImagePath.banner,
    ImagePath.banner,
    ImagePath.banner,
    ImagePath.banner,
    ImagePath.banner,
  ];

  return (
    <ScrollView
      style={[
        styles.container,
        {backgroundColor: Theme == 'Dark' ? ColorPath.blue : ColorPath.white},
      ]}>
      <View style={{paddingHorizontal: wp(4), paddingVertical: hp(1)}}>
        <Navbar
          righticon={
            Theme == 'Dark' ? ImagePath.angleleft2 : ImagePath.angleleft
          }
          lefticon2={
            Theme == 'Dark' ? ImagePath.rongicondark : ImagePath.rongicon
          }
          onPress={() => {
            navigation.goBack();
          }}
          onPress2={() => {
            navigation.navigate('BottomTab');
          }}
        />

        <View style={{marginTop: hp(3)}}>
          <Text
            style={[
              styles.Gifttext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Gift Card
          </Text>
          <SliderBox
            images={Images}
            sliderBoxHeight={hp(15)}
            ImageComponentStyle={{
              width: wp(90),
              borderRadius: 13,
              marginRight: wp(9),
              marginTop: hp(1),
            }}
            imageLoadingColor="blue"
            dotColor="#808080"
            inactiveDotColor="white"
            autoplay
            circleLoop
            paginationBoxStyle={{
              right: 5,
              bottom: 0,
              padding: 0,
            }}
            dotStyle={{
              width: 7,
              height: 7,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: hp(2),
          }}>
          <TouchableOpacity
            style={[
              styles.whitebox,
              {backgroundColor: Theme == 'Dark' ? '#66848E' : ColorPath.white},
            ]}>
            <Text style={styles.sendtext}>Send Gift</Text>
            <Text
              style={[
                styles.Createtext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                },
              ]}>
              Create and send gift card
            </Text>
            <Image source={ImagePath.giftbox} style={styles.giftboxicon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.whitebox,
              {backgroundColor: Theme == 'Dark' ? '#66848E' : ColorPath.white},
            ]}>
            <Text style={styles.sendtext}>Redeem</Text>
            <Text
              style={[
                styles.Createtext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                },
              ]}>
              Enter Redemption Code
            </Text>
            <Image source={ImagePath.GiftBox} style={styles.giftboxicon2} />
          </TouchableOpacity>
        </View>

        <View
          style={[
            styles.graybox,
            {
              backgroundColor:
                Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray,
            },
          ]}>
          <View style={{flex: 1}}>
            <Image
              source={
                Theme == 'Dark' ? ImagePath.transferdark : ImagePath.transfer
              }
              style={styles.transfericon}
            />
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text
              style={[
                styles.sendtext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Transfer Crypto
            </Text>
            <Text style={[styles.Createtext, {color: ColorPath.gray2}]}>
              Send Instantly with 0 Fees
            </Text>
          </View>

          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Image
              source={
                Theme == 'Dark' ? ImagePath.rightiaero : ImagePath.angleleft1
              }
              style={styles.anglelefticon}
            />
          </View>
        </View>

        <View
          style={[
            styles.graybox2,
            {
              backgroundColor:
                Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray,
            },
          ]}>
          <Text
            style={[
              styles.Populartext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Popular Cards
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <View
                style={{
                  backgroundColor:
                    Theme == 'Dark' ? '#2E3638' : ColorPath.white,
                  height: hp(12),
                  width: wp(42),
                  borderRadius: 12,
                  marginTop: hp(1),
                }}></View>
              <Text
                style={[
                  styles.Pexpaytext,
                  {
                    color:
                      Theme == 'Dark'
                        ? ColorPath.lightgray
                        : ColorPath.darkblack,
                  },
                ]}>
                Pexpay 💙
              </Text>
            </View>
            <View>
              <View
                style={{
                  backgroundColor:
                    Theme == 'Dark' ? '#2E3638' : ColorPath.white,
                  height: hp(12),
                  width: wp(42),
                  borderRadius: 12,
                  marginTop: hp(1),
                }}></View>
              <Text
                style={[
                  styles.Pexpaytext,
                  {
                    color:
                      Theme == 'Dark'
                        ? ColorPath.lightgray
                        : ColorPath.darkblack,
                  },
                ]}>
                Moonblessing
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <View
                style={{
                  backgroundColor:
                    Theme == 'Dark' ? '#2E3638' : ColorPath.white,
                  height: hp(12),
                  width: wp(42),
                  borderRadius: 12,
                  marginTop: hp(1),
                }}></View>
              <Text
                style={[
                  styles.Pexpaytext,
                  {
                    color:
                      Theme == 'Dark'
                        ? ColorPath.lightgray
                        : ColorPath.darkblack,
                  },
                ]}>
                Trust Wallet
              </Text>
            </View>
            <View>
              <View
                style={{
                  backgroundColor:
                    Theme == 'Dark' ? '#2E3638' : ColorPath.white,
                  height: hp(12),
                  width: wp(42),
                  borderRadius: 12,
                  marginTop: hp(1),
                }}></View>
              <Text
                style={[
                  styles.Pexpaytext,
                  {
                    color:
                      Theme == 'Dark'
                        ? ColorPath.lightgray
                        : ColorPath.darkblack,
                  },
                ]}>
                #HODL 💛
              </Text>
            </View>
          </View>
        </View>

        <View
          style={[
            styles.graybox2,
            {
              height: hp(18),
              backgroundColor:
                Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray,
            },
          ]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: hp(1),
            }}>
            <Text
              style={[
                styles.Populartext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Popular Cards
            </Text>
            <TouchableOpacity>
              <Text
                style={[
                  styles.Createtext,
                  {
                    textDecorationLine: 'underline',
                    color:
                      Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                  },
                ]}>
                View History
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={ImagePath.icon} style={styles.icon} />
            <Text
              style={[
                styles.Createtext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.lightgray : ColorPath.darkblack,
                  marginTop: 5,
                },
              ]}>
              No Data Available, Create One Now!
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default GiftCard;
