import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import ColorPath from '../../assets/ColorPath';
import ImagePath from '../../assets/ImagePath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontPath from '../../assets/FontPath';
import Navbar from '../../component/Navbar';
import * as Progress from 'react-native-progress';
import {useSelector} from 'react-redux';

const FloatingWindow = ({navigation}) => {
  const Theme = useSelector(store => store.ThemeReducer);

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const data = [
    {
      id: 1,
      title: 'BTC /BUSD',
    },

    {
      id: 2,
      title: 'ETH /BUSD',
    },

    {
      id: 3,
      title: 'BNB /BUSD',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: hp(2),
        }}>
        <View style={{flex: 1}}>
          <Text
            style={[
              styles.floatingtext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            {item.title}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 0.3,
          }}>
          <Image
            source={ImagePath.arrowup}
            style={[
              styles.righticon,
              {
                tintColor:
                  Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
              },
            ]}
          />
          <Image
            source={ImagePath.equalicon}
            style={[
              styles.righticon,
              {
                tintColor:
                  Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
              },
            ]}
          />
        </View>
      </View>
    );
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
              styles.settingtext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Settings
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: hp(2),
          }}>
          <View style={{flex: 1}}>
            <Text
              style={[
                styles.floatingtext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Floating window display
            </Text>
          </View>
          <Switch
            trackColor={{false: '#767577', true: 'red'}}
            thumbColor={isEnabled ? 'white' : 'white'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        <View style={{marginTop: hp(2)}}>
          <Text
            style={[
              styles.floatingtext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Transparency
          </Text>
        </View>

        <View style={{marginTop: hp(2)}}>
          <Progress.Bar
            color={Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray}
            progress={0.8}
            width={wp(90)}
          />
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor:
              Theme == 'Dark' ? ColorPath.gray2 : ColorPath.lightgray4,
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: hp(1.5),
              marginTop: hp(2),
            }}>
            <View>
              <Text
                style={[
                  styles.floatingtext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                Display number
              </Text>
            </View>
            <View>
              <Image
                source={ImagePath.Rightaero}
                style={{
                  width: wp(4),
                  height: hp(2),
                  resizeMode: 'contain',
                  tintColor:
                    Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: hp(3)}}>
          <Text
            style={[
              styles.floatingtext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Market selection
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: hp(3),
          }}>
          <View style={{flex: 1}}>
            <Text
              style={[
                styles.floatingtext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.gray3 : ColorPath.lightgray,
                },
              ]}>
              Pair
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              flex: 0.3,
            }}>
            <Text
              style={[
                styles.floatingtext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.gray3 : ColorPath.lightgray,
                },
              ]}>
              Top
            </Text>
            <Text
              style={[
                styles.floatingtext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.gray3 : ColorPath.lightgray,
                },
              ]}>
              Sort
            </Text>
          </View>
        </View>

        <View>
          <FlatList data={data} renderItem={renderItem} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingtext: {
    fontFamily: FontPath.Poppins_Bold,
    fontSize: 20,
    marginTop: hp(3),
  },

  floatingtext: {
    fontSize: 15,
    fontFamily: FontPath.Poppins_Medium,
  },

  righticon: {
    width: wp(4),
    height: hp(2),
    resizeMode: 'contain',
  },
});
export default FloatingWindow;
