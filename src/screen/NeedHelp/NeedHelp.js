import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
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
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

const NeedHelp = ({navigation}) => {
  const Theme = useSelector(store => store.ThemeReducer);

  const data = [
    {
      id: 1,
      title: 'Reset Password',
      image:
        Theme == 'Dark' ? ImagePath.resetpassworddark : ImagePath.resetpassword,
    },
    {
      id: 2,
      title: 'Unlock Account',
      image: Theme == 'Dark' ? ImagePath.unlockdark : ImagePath.unlock,
    },
    {
      id: 3,
      title: 'Reset Phone Security Verification',
      image: Theme == 'Dark' ? ImagePath.phoneicondark : ImagePath.phoneicon,
    },
    {
      id: 4,
      title: 'Change Email Address',
      image: Theme == 'Dark' ? ImagePath.emailwhite : ImagePath.email,
    },
    {
      id: 5,
      title: 'Reset Google Authenticator',
      image:
        Theme == 'Dark'
          ? ImagePath.authenticationdark
          : ImagePath.authenticator,
    },
    {
      id: 6,
      title: 'Crypto Deposit Not Credited',
      image:
        Theme == 'Dark' ? ImagePath.creaditedicondark : ImagePath.creaditedicon,
    },
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: hp(2),
        }}>
        <View
          style={{
            borderRadius: 12,
            alignItems: 'center',
            borderWidth: 0.5,
            borderColor:
              Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
            width: wp(44),
            height: hp(13),
          }}>
          <Image source={item.image} style={styles.listicon} />
          <Text
            style={[
              styles.listtitile,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const listdata = [
    {
      id: 1,
      lable: 'Account Functions',
    },
    {
      id: 2,
      lable: 'Tutorial',
    },
    {
      id: 3,
      lable: 'Suncrypto Fan Tokan',
    },
    {
      id: 4,
      lable: 'Suncrypto Earn',
    },
    {
      id: 5,
      lable: 'Crypto Deposit/Withdrawal',
    },
    {
      id: 6,
      lable: 'Buy Crypto (Fiat/P2P)',
    },
    {
      id: 7,
      lable: 'Spot & Margin Trading',
    },
    {
      id: 8,
      lable: 'Crypto Derivatives',
    },

    {
      id: 9,
      lable: 'Finace',
    },
    {
      id: 10,
      lable: 'API',
    },
    {
      id: 11,
      lable: 'Security',
    },
    {
      id: 12,
      lable: 'Other Topics',
    },
    {
      id: 13,
      lable: 'Suncrypto Convert',
    },

    {
      id: 14,
      lable: 'Suncrypto Link',
    },

    {
      id: 15,
      lable: 'NFT',
    },

    {
      id: 16,
      lable: 'VIP',
    },
  ];

  const renderItem1 = ({item}) => {
    return (
      <View
        style={{
          marginTop: hp(3),
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{width: wp(3)}}>
            <Image source={ImagePath.usericon} style={styles.icon} />
          </View>
          <View style={{width: wp(44)}}>
            <Text
              style={[
                styles.listtext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              {item.lable}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const announcementlist = [
    {
      id: 1,
      text: 'New Cryptocurency...',
    },
    {
      id: 2,
      text: 'Latest Suncrypto News',
    },

    {
      id: 3,
      text: 'Latest Activities',
    },
    {
      id: 4,
      text: 'New Fiat Listings',
    },
    {
      id: 5,
      text: 'Delisting',
    },
    {
      id: 6,
      text: 'Wallet Maintenance U...',
    },
    {
      id: 7,
      text: 'API Updates',
    },
    {
      id: 8,
      text: 'Crypto Airdrop',
    },
  ];

  const renderItem2 = ({item}) => {
    return (
      <View
        style={{
          marginTop: hp(3),
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{width: wp(3)}}>
            <Image source={ImagePath.usericon} style={styles.icon} />
          </View>
          <View style={{width: wp(44)}}>
            <Text
              style={[
                styles.listtext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              {item.text}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
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
              styles.helptext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Help Center
          </Text>
        </View>

        <View>
          <Text
            style={[
              styles.helptext,
              {
                color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                fontFamily: FontPath.Poppins_Medium,
              },
            ]}>
            Search our FAQ
          </Text>
        </View>

        <View style={{marginTop: hp(1)}}>
          <TextInput
            style={styles.textinput}
            clearButtonMode={'while-editing'}
            placeholder="Search currency"
            placeholderTextColor={ColorPath.gray2}
          />
          <Image style={styles.searchicon} source={ImagePath.searchicon} />
        </View>

        <View style={{marginTop: hp(2)}}>
          <Text
            style={[
              styles.selftext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Self-Service
          </Text>
        </View>
        <View style={{marginTop: hp(3)}}>
          <FlatList numColumns={2} data={data} renderItem={renderItem} />
        </View>
        <View>
          <Text
            style={[
              styles.selftext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            FAQ
          </Text>
        </View>
        <View>
          <FlatList numColumns={2} data={listdata} renderItem={renderItem1} />
        </View>

        <View>
          <Text
            style={{
              color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
              fontFamily: FontPath.Poppins_Medium,
              fontSize: 20,
              marginTop: hp(3),
            }}>
            Announcement
          </Text>
        </View>

        <View>
          <FlatList
            numColumns={2}
            data={announcementlist}
            renderItem={renderItem2}
          />
        </View>

        <View>
          <Text
            style={{
              color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
              fontFamily: FontPath.Poppins_Medium,
              fontSize: 20,
              marginTop: hp(6),
            }}>
            Latest Articles
          </Text>
        </View>

        <View>
          <Text
            style={{
              color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
              fontSize: 13,
              fontFamily: FontPath.Poppins_Medium,
              marginTop: hp(3),
              paddingBottom: hp(4),
            }}>
            Wallet Maintenance for Tron Network (TRX)-2023-02-05 2023-02-03
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: wp(4),
    height: hp(2),
    resizeMode: 'contain',
    tintColor: ColorPath.gray2,
  },

  listtext: {
    fontSize: 13,
    fontFamily: FontPath.Poppins_Medium,
    marginLeft: wp(3),
  },

  listicon: {
    width: wp(8),
    height: hp(4),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: hp(1),
  },

  listtitile: {
    fontSize: 14,
    fontFamily: FontPath.Poppins_Medium,
    textAlign: 'center',
    marginTop: hp(1),
  },

  helptext: {
    fontFamily: FontPath.Poppins_Bold,
    fontSize: 20,
    marginTop: hp(3),
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

  selftext: {
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 20,
  },
});

export default NeedHelp;
