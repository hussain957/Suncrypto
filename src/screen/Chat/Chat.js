import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
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

const Chat = ({navigation}) => {
  const Theme = useSelector(store => store.ThemeReducer);

  const data = [
    {
      id: 1,
      image: ImagePath.send,
      title: 'Getting Started',
      icon: ImagePath.Rightaero,
    },
    {
      id: 2,
      image: ImagePath.send,
      title: 'Account Functions',
      icon: ImagePath.Rightaero,
    },
    {
      id: 3,
      image: ImagePath.send,
      title: 'Buy/Sell Crypto (Fiat/P2P)',
      icon: ImagePath.Rightaero,
    },
    {
      id: 4,
      image: ImagePath.send,
      title: 'Crypto Deposit/Withdrawal',
      icon: ImagePath.Rightaero,
    },
    {
      id: 5,
      image: ImagePath.send,
      title: 'Spot & Margin Trading',
      icon: ImagePath.Rightaero,
    },
    {
      id: 6,
      image: ImagePath.send,
      title: 'Website Activities / Promotion',
      icon: ImagePath.Rightaero,
    },
    {
      id: 7,
      image: ImagePath.send,
      title: 'News / Announcement',
      icon: ImagePath.Rightaero,
    },
    {
      id: 8,
      image: ImagePath.send,
      title: 'Suncrypto Card & Suncrypto Pay',
      icon: ImagePath.Rightaero,
    },
    {
      id: 9,
      image: ImagePath.send,
      title: 'Suncrypto Earn',
      icon: ImagePath.Rightaero,
    },
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={[
          styles.listbutton,
          {
            backgroundColor:
              Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray4,
          },
        ]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={item.image} style={styles.righticon} />
          <Text
            style={[
              styles.listtitle,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            {item.title}
          </Text>
        </View>

        <View>
          <Image
            source={item.icon}
            style={[
              styles.lefticon,
              {
                tintColor:
                  Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
              },
            ]}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView
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
            navigation.navigate('MyDrawer');
          }}
        />

        <View>
          <Text
            style={[
              styles.suncryptotext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Hi Suncrypto User,
          </Text>
          <Text
            style={[
              styles.whattext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            What can I do for you?
          </Text>
        </View>

        <View
          style={[
            styles.viewcontainer,
            {
              backgroundColor:
                Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray4,
            },
          ]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={[
                styles.youtext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              You Might be looking for
            </Text>
            <Image
              source={ImagePath.refresh}
              style={[
                styles.icon,
                {
                  tintColor:
                    Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                },
              ]}
            />
          </View>

          <TouchableOpacity style={styles.button}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={ImagePath.send} style={styles.righticon} />
              <Text
                style={[
                  styles.updateingtext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                Updateing Latan Payment Methods Schedule(P2P)
              </Text>
            </View>
            <View>
              <Image
                source={ImagePath.Rightaero}
                style={[
                  styles.lefticon,
                  {
                    tintColor:
                      Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                  },
                ]}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={ImagePath.send} style={styles.righticon} />
              <Text
                style={[
                  styles.updateingtext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                P2P seller did not release cryptos
              </Text>
            </View>
            <View>
              <Image
                source={ImagePath.Rightaero}
                style={[
                  styles.lefticon,
                  {
                    tintColor:
                      Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                  },
                ]}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={ImagePath.send} style={styles.righticon} />
              <Text
                style={[
                  styles.updateingtext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                Unable to do Spot trading
              </Text>
            </View>
            <View>
              <Image
                source={ImagePath.Rightaero}
                style={[
                  styles.lefticon,
                  {
                    tintColor:
                      Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                  },
                ]}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={ImagePath.send} style={styles.righticon} />
              <Text
                style={[
                  styles.updateingtext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                P2P trading order canceled buyer
              </Text>
            </View>
            <View>
              <Image
                source={ImagePath.Rightaero}
                style={[
                  styles.lefticon,
                  {
                    tintColor:
                      Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                  },
                ]}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.viewcontainerbox}>
          <Text
            style={[
              styles.selltext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Sell Service
          </Text>
          <Image
            source={ImagePath.refresh}
            style={[
              styles.icon,
              {
                tintColor:
                  Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
              },
            ]}
          />
        </View>

        <View style={styles.graybox}>
          <TouchableOpacity
            style={[
              styles.buttongray,
              {
                backgroundColor:
                  Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray4,
              },
            ]}>
            <Image
              source={
                Theme == 'Dark'
                  ? ImagePath.authenticationdark
                  : ImagePath.authenticator
              }
              style={styles.righticon}
            />
            <Text
              style={[
                styles.resettext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Reset two-factor authention
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttongray,
              {
                backgroundColor:
                  Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray4,
              },
            ]}>
            <Image
              source={
                Theme == 'Dark'
                  ? ImagePath.resetpassworddark
                  : ImagePath.resetpassword
              }
              style={styles.righticon}
            />
            <Text
              style={[
                styles.resettext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Reset Password
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.graybox, {marginTop: hp(2)}]}>
          <TouchableOpacity
            style={[
              styles.buttongray,
              {
                backgroundColor:
                  Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray4,
              },
            ]}>
            <Image
              source={Theme == 'Dark' ? ImagePath.unlockdark : ImagePath.unlock}
              style={styles.righticon}
            />
            <Text
              style={[
                styles.resettext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Reactivate Account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttongray,
              {
                backgroundColor:
                  Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray4,
              },
            ]}>
            <Image
              source={
                Theme == 'Dark'
                  ? ImagePath.refreshdark
                  : ImagePath.refreshyellow
              }
              style={styles.righticon}
            />
            <Text
              style={[
                styles.resettext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Account Migration
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[
            styles.viewbutton,
            {
              backgroundColor:
                Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray4,
            },
          ]}>
          <Text
            style={[
              styles.viewtext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            View All
          </Text>
        </TouchableOpacity>

        <View>
          <Text
            style={[
              styles.faqtext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            FAQ
          </Text>
        </View>

        <View>
          <FlatList data={data} renderItem={renderItem} />
        </View>

        <View style={{paddingBottom: hp(3)}}>
          <TouchableOpacity
            style={[
              styles.getbutton,
              {
                backgroundColor:
                  Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray4,
              },
            ]}>
            <Image
              source={ImagePath.headphone}
              style={[
                styles.righticon,
                {
                  tintColor:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}
            />
            <Text
              style={[
                styles.gettext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Get Support
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  suncryptotext: {
    fontFamily: FontPath.Poppins_Bold,
    fontSize: 20,
    marginTop: hp(3),
  },

  whattext: {
    color: ColorPath.darkblack,
    fontFamily: FontPath.Poppins_Bold,
    fontSize: 14,
    marginTop: hp(1),
  },

  viewcontainer: {
    borderRadius: 12,
    paddingHorizontal: wp(3),
    paddingVertical: hp(2),
    marginTop: hp(3),
  },

  youtext: {
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 12,
  },

  icon: {
    width: wp(3),
    height: hp(1.5),
    resizeMode: 'contain',
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(2),
  },

  righticon: {
    width: wp(5),
    height: hp(2.5),
    resizeMode: 'contain',
  },

  updateingtext: {
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 15,
    marginLeft: wp(4),
  },

  lefticon: {
    width: wp(4),
    height: hp(2),
    resizeMode: 'contain',
  },

  viewcontainerbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(3),
  },

  selltext: {
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 20,
  },

  graybox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  buttongray: {
    borderRadius: 12,
    paddingHorizontal: wp(4),
    height: hp(10),
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(45),
  },

  resettext: {
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 13,
    marginLeft: wp(2),
  },

  viewbutton: {
    paddingVertical: hp(1),
    borderRadius: 12,
    marginTop: hp(2),
  },

  viewtext: {
    fontSize: 18,
    fontFamily: FontPath.Poppins_Medium,
    textAlign: 'center',
  },

  faqtext: {
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 20,
    marginTop: hp(2),
  },

  getbutton: {
    paddingVertical: hp(1),
    borderRadius: 12,
    marginTop: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  gettext: {
    fontSize: 18,
    fontFamily: FontPath.Poppins_Medium,
    textAlign: 'center',
    marginLeft: wp(3),
  },

  listbutton: {
    borderRadius: 12,
    paddingHorizontal: wp(3),
    paddingVertical: hp(1.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(2),
  },

  listtitle: {
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 15,
    marginLeft: wp(4),
  },
});

export default Chat;
