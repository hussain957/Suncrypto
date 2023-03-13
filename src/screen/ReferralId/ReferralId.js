import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
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

const ReferralId = ({navigation}) => {
  
  const Theme = useSelector(store => store.ThemeReducer);

  return (
    <ScrollView
      style={[
        styles.container,
        {backgroundColor: Theme == 'Dark' ? ColorPath.blue : ColorPath.white},
      ]}>
      <View style={{paddingHorizontal: wp(4), paddingVertical: hp(1)}}>
        <Navbar
          righticon={Theme == 'Dark' ? ImagePath.angleleft2 : ImagePath.angleleft}
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
      </View>

      <View>
        <Text
          style={[
            styles.Refertext,
            {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
          ]}>
          Refer Friends & Earn Crypto{' '}
        </Text>
      </View>

      <View style={{paddingHorizontal: wp(3), marginTop: hp(2)}}>
        <Text
          style={[
            styles.Earntext,
            {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2},
          ]}>
          Earn up to 40% Commission on every trade across
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              styles.Suncrypto,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2},
            ]}>
            Suncrypto Spot, Future & Poo
          </Text>
          <TouchableOpacity>
            <Text style={styles.buttontext}>View Referral Rules.</Text>
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'flex-end'}}>
          <Image
            source={
              Theme == 'Dark'
                ? ImagePath.Illustrationdark
                : ImagePath.Illustration
            }
            style={styles.IllustrationIcon}
          />
        </View>

        <View
          style={[
            styles.boxview,
            {backgroundColor: Theme == 'Dark' ? ColorPath.bluedark : '#F2F2F2'},
          ]}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                marginTop: hp(3),
                alignItems: 'center',
              }}>
              <Image source={ImagePath.money} style={styles.money} />
              <Text
                style={[
                  styles.yourtext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                Your Total Bonus
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'flex-end',
                marginTop: hp(3),
                alignItems: 'center',
              }}>
              <Text
                style={[
                  styles.yourtext,
                  {
                    fontWeight: '600',
                    marginRight: wp(2),
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                0 BTC
              </Text>
              <Image
                source={ImagePath.angleleft1}
                style={[
                  styles.angleleft,
                  {
                    tintColor:
                      Theme == 'Dark'
                        ? ColorPath.lightgray
                        : ColorPath.darkblack,
                  },
                ]}
              />
            </View>
          </View>

          <View style={{flexDirection: 'row', marginTop: hp(0.5)}}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                marginTop: hp(1),
                alignItems: 'center',
              }}>
              <Image
                source={ImagePath.medal_ribbon}
                style={styles.medal_ribbon}
              />
              <Text
                style={[
                  styles.yourtext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                24h Top 1
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'flex-end',
                marginTop: hp(1),
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={[
                    styles.yourtext,
                    {
                      fontWeight: '600',
                      marginRight: wp(2),
                      color:
                        Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                    },
                  ]}>
                  12.78419898 BTC
                </Text>
                <Text
                  style={[
                    styles.yourtext,
                    {
                      marginRight: wp(2),
                      color:
                        Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                    },
                  ]}>
                  ID 42520824
                </Text>
              </View>
              <Image
                source={ImagePath.angleleft1}
                style={[
                  styles.angleleft,
                  {
                    tintColor:
                      Theme == 'Dark'
                        ? ColorPath.lightgray
                        : ColorPath.darkblack,
                  },
                ]}
              />
            </View>
          </View>
        </View>

        <View
          style={[
            styles.boxview2,
            {
              borderColor:
                Theme == 'Dark' ? ColorPath.lightgray : ColorPath.darkblack,
            },
          ]}>
          <Text
            style={[
              styles.defaulttext,
              {color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2},
            ]}>
            Default Referral
          </Text>

          <View
            style={[
              styles.persentview,
              {
                backgroundColor:
                  Theme == 'Dark'
                    ? 'rgba(239, 185, 17, 0.19)'
                    : 'rgba(239, 185, 17, 0.2)',
              },
            ]}>
            <View style={{flex: 1}}>
              <Text
                style={[
                  styles.Receivedtext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                You Received
              </Text>
              <Text
                style={[
                  styles.persenttext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                20%
              </Text>
            </View>

            <View style={{flex: 0.9}}>
              <Text
                style={[
                  styles.Receivedtext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                Friends Receive
              </Text>
              <Text
                style={[
                  styles.persenttext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                0%
              </Text>
            </View>
          </View>

          <View
            style={[
              styles.graybox,
              {
                backgroundColor:
                  Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
              },
            ]}>
            <View style={{flex: 1}}>
              <Text
                style={[
                  styles.Referralidtext,
                  {
                    color:
                      Theme == 'Dark'
                        ? ColorPath.darkblack
                        : ColorPath.lightgray,
                  },
                ]}>
                Referral ID
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Text
                style={[
                  styles.Referralidtext,
                  {
                    color:
                      Theme == 'Dark'
                        ? ColorPath.darkblack
                        : ColorPath.lightgray,
                  },
                ]}>
                443567963
              </Text>
              <Image
                style={[
                  styles.angleleft,
                  {
                    tintColor:
                      Theme == 'Dark'
                        ? ColorPath.darkblack
                        : ColorPath.lightgray,
                    marginLeft: wp(1),
                  },
                ]}
                source={ImagePath.copyicon}
              />
            </View>
          </View>

          <View
            style={[
              styles.graybox,
              {
                marginTop: hp(1),
                backgroundColor:
                  Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
              },
            ]}>
            <View style={{flex: 1}}>
              <Text
                style={[
                  styles.Referralidtext,
                  {
                    color:
                      Theme == 'Dark'
                        ? ColorPath.darkblack
                        : ColorPath.lightgray,
                  },
                ]}>
                Referral Link
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Text
                style={[
                  styles.Referralidtext,
                  {
                    color:
                      Theme == 'Dark'
                        ? ColorPath.darkblack
                        : ColorPath.lightgray,
                  },
                ]}>
                https://../443567963
              </Text>
              <Image
                style={[
                  styles.angleleft,
                  {
                    tintColor:
                      Theme == 'Dark'
                        ? ColorPath.darkblack
                        : ColorPath.lightgray,
                    marginLeft: wp(1),
                  },
                ]}
                source={ImagePath.copyicon}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: hp(2),
            }}>
            <TouchableOpacity style={styles.button}>
              <Text
                style={[
                  styles.Referralidtext,
                  {color: ColorPath.darkblack, textAlign: 'center'},
                ]}>
                Invite Friends
              </Text>
            </TouchableOpacity>

            <Image
              source={ImagePath.qrcode}
              style={[
                styles.qrcodeicon,
                {
                  tintColor:
                    Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                },
              ]}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: wp(5),
            marginTop: hp(4),
          }}>
          <View style={{flex: 1}}>
            <Text
              style={[
                styles.Quartarlytext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Quartarly Bonus (BUSD)
            </Text>
            <Text
              style={[
                styles.persenttext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              0
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text
              style={[
                styles.Quartarlytext,
                {
                  width: wp(15),
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Cashback (USDT)
            </Text>
            <Text
              style={[
                styles.persenttext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              0
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: wp(5),
            paddingVertical: hp(3),
          }}>
          <View style={{flex: 1}}>
            <Text
              style={[
                styles.Quartarlytext,
                {
                  width: wp(13),
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Total Referrals
            </Text>
            <Text
              style={[
                styles.persenttext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              0
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Text
              style={[
                styles.Quartarlytext,
                {
                  width: wp(16),
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Successful Referrals
            </Text>
            <Text
              style={[
                styles.persenttext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              0
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ReferralId;
