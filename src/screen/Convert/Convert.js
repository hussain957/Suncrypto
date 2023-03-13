import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ColorPath from '../../assets/ColorPath';
import ImagePath from '../../assets/ImagePath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontPath from '../../assets/FontPath';
import RNPickerSelect from 'react-native-picker-select';

const Convert = ({navigation}) => {
  let Title = [{label: 'AGLD', value: '1'}];
  let btccoin = [{label: 'BTC', value: '1'}];

  const [select, setSelect] = useState(1);

  const data = [
    {
      id: 1,
      title: 'Market',
    },

    {
      id: 2,
      title: 'Limit',
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity
          style={{marginLeft: index == 0 ? 0 : wp(15)}}
          onPress={() => {
            setSelect(item.id);
          }}>
          <Text
            style={{
              color:
                select == item.id ? ColorPath.darkblack : ColorPath.lightgray2,
              fontFamily: FontPath.Poppins_Medium,
              fontWeight: '400',
              lineHeight: 20,
              textAlign: 'center',
              fontSize: 18,
              marginHorizontal: index == 0 ? 0 : wp(5),
            }}>
            {item.title}
          </Text>
        </TouchableOpacity>

        <Image
          source={ImagePath.yellowline}
          style={{
            width: wp(8),
            height: hp(4),
            marginLeft: index == 0 ? 0 : wp(15),
            resizeMode: 'contain',
            alignSelf: 'center',
            marginTop: hp(-2),
            tintColor: select == item.id ? ColorPath.yellow : ColorPath.white,
          }}
        />
      </View>
    );
  };

  const Market = () => {
    if (select == 1) {
      return (
        <View>
          <View style={styles.viewcontainer}>
            <Text style={styles.formtext}>From</Text>
            <Text style={styles.formtext}>Spot Wallet</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <RNPickerSelect
              useNativeAndroidPickerStyle={false}
              items={Title}
              placeholder={{label: 'Select', value: null}}
              // value={state.selectLanguage}
              style={pickerSelectStyles}
              onValueChange={value => console.log(value)}
              Icon={() => {
                return (
                  <Image source={ImagePath.Downaero} style={styles.downicon} />
                );
              }}
            />
            <TextInput style={styles.inputtext} />
          </View>
          <Text style={styles.formtext}>Available: 0 AGLD</Text>
          <Text style={[styles.formtext, {marginTop: hp(2)}]}>To</Text>

          <View style={{flexDirection: 'row'}}>
            <RNPickerSelect
              useNativeAndroidPickerStyle={false}
              items={btccoin}
              placeholder={{label: 'Select', value: null}}
              // value={state.selectLanguage}
              style={pickerSelectStyles}
              onValueChange={value => console.log(value)}
              Icon={() => {
                return (
                  <Image
                    source={ImagePath.Downaero}
                    style={{
                      width: wp(2),
                      height: hp(1),
                      right: wp(7),
                      top: hp(2.5),
                      resizeMode: 'contain',
                      position: 'absolute',
                    }}
                  />
                );
              }}
            />
            <TextInput style={styles.inputtext} />
          </View>
        </View>
      );
    }
    if (select == 2) {
      return (
        <View>
          <Text
            style={{
              color: ColorPath.darkblack,
              fontSize: 15,
              fontFamily: FontPath.Poppins_Medium,
              marginTop: hp(2),
            }}>
            Limit
          </Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', marginTop: hp(2)}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={ImagePath.arrow} style={styles.arrowicon} />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.converttext}>Convert</Text>
        </View>
      </View>
      <View style={{marginTop: hp(3), alignItems: 'center'}}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View>{Market()}</View>
      <View
        style={{
          justifyContent: 'flex-end',
          flex: 1,
          paddingVertical: hp(2),
        }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>Preview Conversion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    backgroundColor: ColorPath.lightgray,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    color: ColorPath.darkblack,
    fontSize: 13,
    paddingLeft: wp(7),
    width: wp(28),
  },
  placeholder: {
    color: ColorPath.gray2,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorPath.white,
    paddingHorizontal: wp(4),
  },
  arrowicon: {
    width: wp(5),
    height: hp(2.5),
    resizeMode: 'contain',
    tintColor: ColorPath.gray2,
  },

  converttext: {
    color: ColorPath.darkblack,
    fontSize: 18,
    fontFamily: FontPath.Poppins_Bold,
  },

  inputtext: {
    backgroundColor: ColorPath.lightgray,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    width: wp(65),
    fontSize: 15,
    fontFamily: FontPath.Poppins_Medium,
    color: ColorPath.gray2,
    borderLeftWidth: 1,
    borderLeftColor: ColorPath.lightgray,
    paddingVertical: hp(0.7),
    paddingLeft: wp(3),
  },

  formtext: {
    color: ColorPath.gray2,
    fontSize: 13,
    marginTop: hp(0.4),
    fontFamily: FontPath.Poppins_Medium,
  },

  button: {
    backgroundColor: ColorPath.yellow,
    paddingVertical: hp(1.5),
    borderRadius: 10,
  },

  buttontext: {
    color: ColorPath.darkblack,
    fontSize: 15,
    fontFamily: FontPath.Poppins_Medium,
    textAlign: 'center',
  },

  viewcontainer: {
    marginTop: hp(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  downicon: {
    width: wp(2),
    height: hp(1),
    right: wp(7),
    top: hp(2.3),
    resizeMode: 'contain',
    position: 'absolute',
  },
});

export default Convert;
