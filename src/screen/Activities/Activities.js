import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Modal,
  StyleSheet,
} from 'react-native';
import ColorPath from '../../assets/ColorPath';
import ImagePath from '../../assets/ImagePath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontPath from '../../assets/FontPath';
import RNPickerSelect from 'react-native-picker-select';
import {useSelector} from 'react-redux';

const Activities = ({navigation}) => {
  const Theme = useSelector(store => store.ThemeReducer);

  let Title = [
    {label: '1 Day', value: '1'},
    {label: '2 Day', value: '2'},
  ];

  const [select, setSelect] = useState(1);

  const data = [
    {
      id: 1,
      title: 'Login Activity',
    },

    {
      id: 2,
      title: 'Security Activity',
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View style={{paddingHorizontal: wp(10)}}>
        <TouchableOpacity
          onPress={() => {
            setSelect(item.id);
          }}>
          <Text
            style={{
              color:
                Theme == 'Dark'
                  ? select == item.id
                    ? ColorPath.white
                    : ColorPath.lightgray2
                  : select == item.id
                  ? ColorPath.darkblack
                  : ColorPath.lightgray2,
              fontFamily: FontPath.Poppins_Medium,
              fontWeight: '400',
              lineHeight: 20,
              textAlign: 'center',
              fontSize: 13,
            }}>
            {item.title}
          </Text>
        </TouchableOpacity>

        <Image
          source={ImagePath.yellowline}
          style={{
            width: wp(8),
            height: hp(4),
            resizeMode: 'contain',
            alignSelf: 'center',
            marginTop: hp(-2),
            tintColor:
              Theme == 'Dark'
                ? select == item.id
                  ? ColorPath.yellow
                  : ColorPath.blue
                : select == item.id
                ? ColorPath.yellow
                : ColorPath.white,
          }}
        />
      </View>
    );
  };

  const Activitiesselect = () => {
    if (select == 2) {
      return (
        <View>
          <Text
            style={{
              color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
              fontSize: 15,
            }}>
            Security Activity
          </Text>
        </View>
      );
    } else {
      return (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{marginTop: hp(3), paddingBottom: hp(2)}}>
            <RNPickerSelect
              useNativeAndroidPickerStyle={false}
              items={Title}
              placeholder={{label: 'Select an Day', value: null}}
              // value={state.selectLanguage}
              style={pickerSelectStyles}
              onValueChange={value => console.log(value)}
              Icon={() => {
                return (
                  <Image
                    source={ImagePath.Downaero}
                    style={{
                      width: wp(3),
                      height: hp(1.5),
                      top: hp(2),
                      right: wp(6),
                      resizeMode: 'contain',
                      position: 'absolute',
                    }}
                  />
                );
              }}
            />
          </View>
          <View style={{marginTop: hp(3), paddingBottom: hp(2)}}>
            <RNPickerSelect
              useNativeAndroidPickerStyle={false}
              items={Title}
              placeholder={{label: 'Select an All', value: null}}
              // value={state.selectLanguage}
              style={pickerSelectStyles}
              onValueChange={value => console.log(value)}
              Icon={() => {
                return (
                  <Image
                    source={ImagePath.Downaero}
                    style={{
                      width: wp(3),
                      height: hp(1.5),
                      top: hp(2),
                      right: wp(6),
                      resizeMode: 'contain',
                      position: 'absolute',
                    }}
                  />
                );
              }}
            />
          </View>
        </View>
      );
    }
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: Theme == 'Dark' ? ColorPath.blue : ColorPath.white,
      }}>
      <View style={{paddingHorizontal: wp(4)}}>
        <View style={styles.viewcontainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={
                Theme == 'Dark' ? ImagePath.angleleft2 : ImagePath.angleleft
              }
              style={styles.lefticon}
            />
          </TouchableOpacity>

          <View>
            <Text
              style={[
                styles.activitiestext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Activities
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Security');
            }}
            style={{alignItems: 'flex-end'}}>
            <Image source={ImagePath.rongicon} style={styles.lefticon} />
          </TouchableOpacity>
        </View>

        <View style={{marginTop: hp(3)}}>
          <FlatList
            horizontal
            data={data}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View>{Activitiesselect()}</View>
      </View>
    </ScrollView>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    backgroundColor: ColorPath.white,
    borderRadius: 10,
    color: ColorPath.darkblack,
    fontSize: 15,
    paddingLeft: wp(3),
    elevation: 5,
    width: wp(43),
    height: hp(5),
  },
});

const styles = StyleSheet.create({
  activitiestext: {
    fontFamily: FontPath.Poppins_Bold,
    fontSize: 18,
  },

  lefticon: {
    width: wp(5),
    height: hp(2.5),
    resizeMode: 'contain',
  },

  viewcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(1.5),
  },
});

export default Activities;
