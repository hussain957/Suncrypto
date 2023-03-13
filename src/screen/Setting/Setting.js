import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Modal,
} from 'react-native';
import ColorPath from '../../assets/ColorPath';
import ImagePath from '../../assets/ImagePath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontPath from '../../assets/FontPath';
import {useSelector} from 'react-redux';

const Setting = ({navigation}) => {
  const Theme = useSelector(store => store.ThemeReducer);

  const [modalVisible, setModalVisible] = useState(false);

  const data = [
    {
      id: 1,
      text: 'Push Notifications',
      icon: ImagePath.Rightaero,
      route: 'PushNotification',
    },

    {
      id: 2,
      text: 'Crypto Withdrawal Settings',
      icon: ImagePath.Rightaero,
      route: 'CryptoWithdrawal',
    },

    {
      id: 3,
      text: 'Floating window',
      icon: ImagePath.Rightaero,
      route: 'FloatingWindow',
    },

    {
      id: 4,
      text: 'Language',
      icon: ImagePath.Rightaero,
      route: 'Language',
    },

    {
      id: 5,
      text: 'Currency',
      icon: ImagePath.Rightaero,
      route: 'Currency',
    },

    {
      id: 6,
      text: 'Payment Currency',
      icon: ImagePath.Rightaero,
      route: 'PaymentCurrency',
    },

    {
      id: 7,
      text: 'Change Basis',
      icon: ImagePath.Rightaero,
      route: 'ChangeBasis',
    },
    {
      id: 8,
      text: 'Appearance',
      icon: ImagePath.Rightaero,
      route: 'Appearance',
    },
    {
      id: 9,
      text: 'Style Settings',
      icon: ImagePath.Rightaero,
      route: 'StyleSetting',
    },

    {
      id: 10,
      text: 'Color Preference',
      icon: ImagePath.Rightaero,
      route: '',
    },
    {
      id: 11,
      text: 'Clear Cache',
      icon: ImagePath.Rightaero,
      route: '',
    },
    {
      id: 12,
      text: 'Trust Certificate',
      icon: ImagePath.Rightaero,
      route: '',
    },

    {
      id: 13,
      text: 'Network Test',
      icon: ImagePath.Rightaero,
      route: '',
    },
    {
      id: 14,
      text: 'Terms of Use',
      icon: ImagePath.Rightaero,
      route: '',
    },
    {
      id: 15,
      text: 'Privacy Policy',
      icon: ImagePath.Rightaero,
      route: 'Privacy',
    },
    {
      id: 16,
      text: 'About Us',
      icon: ImagePath.Rightaero,
      route: 'AboutUs',
    },
  ];

  const Nextscreen = goHome => {
    navigation.navigate(goHome.route);
  };
  const onPressItem = (item, index) => {
    if (item.id == 11) {
      setModalVisible(true);
    } else {
      Nextscreen(item);
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onPressItem(item, index);
        }}
        style={{
          flexDirection: 'row',
          paddingBottom: wp(8),
        }}>
        <View style={{flex: 5, flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={[
              styles.listtext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            {item.text}
          </Text>
        </View>

        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Image
            source={item.icon}
            style={[
              styles.righticon,
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
      <View style={{paddingHorizontal: wp(4)}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: hp(1.5),
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={
                Theme == 'Dark' ? ImagePath.angleleft2 : ImagePath.angleleft
              }
              style={styles.arrowicon}
            />
          </TouchableOpacity>

          <View>
            <Text
              style={[
                styles.settingtext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Settings
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('BottomTab');
            }}
            style={{alignItems: 'flex-end'}}>
            <Image
              source={
                Theme == 'Dark' ? ImagePath.rongicondark : ImagePath.rongicon
              }
              style={styles.arrowicon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{paddingHorizontal: wp(4), marginTop: hp(4)}}>
        <FlatList data={data} renderItem={renderItem} />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View
            style={[
              styles.modalView,
              {
                backgroundColor:
                  Theme == 'Dark' ? ColorPath.blue : ColorPath.white,
              },
            ]}>
            <View style={{paddingHorizontal: wp(4), paddingVertical: hp(2)}}>
              <Text
                style={[
                  styles.cleartext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                Clear Cache
              </Text>

              <Text
                style={[
                  styles.cleartext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                Are you sure you want to clear the cache?
              </Text>

              <View
                style={{
                  marginTop: hp(3),
                  paddingHorizontal: wp(3),
                }}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttontext}>Yes</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                  style={[
                    styles.button,
                    {marginTop: hp(1.5), backgroundColor: 'transparent'},
                  ]}>
                  <Text
                    style={[
                      styles.buttontext,
                      {
                        color:
                          Theme == 'Dark'
                            ? ColorPath.white
                            : ColorPath.darkblack,
                      },
                    ]}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: wp(4),
    backgroundColor: 'rgba(201, 201, 201, 0.39)',
  },
  modalView: {
    borderRadius: 15,
    elevation: 10,
  },

  settingtext: {
    fontFamily: FontPath.Poppins_Bold,
    fontSize: 18,
  },

  arrowicon: {
    width: wp(5),
    height: hp(2.5),
    resizeMode: 'contain',
  },

  cleartext: {
    fontSize: 16,
    fontFamily: FontPath.Poppins_Medium,
    textAlign: 'center',
  },

  button: {
    backgroundColor: ColorPath.yellow,
    paddingVertical: hp(1),
    borderRadius: 8,
  },

  buttontext: {
    color: ColorPath.darkblack,
    fontSize: 15,
    textAlign: 'center',
    fontFamily: FontPath.Poppins_Medium,
  },

  listtext: {
    fontFamily: FontPath.Poppins_Medium,
    fontWeight: '500',
    fontSize: 13.5,
  },

  righticon: {
    width: wp(3),
    height: hp(1.5),
    resizeMode: 'contain',
  },
});

export default Setting;
