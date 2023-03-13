import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import ImagePath from '../../assets/ImagePath';
import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ColorPath from '../../assets/ColorPath';
import FontPath from '../../assets/FontPath';
// import {SelectList} from 'react-native-dropdown-select-list';
import {useSelector} from 'react-redux';

const Market = ({navigation, route}) => {
  const Theme = useSelector(store => store.ThemeReducer);

  const [select, setSelect] = useState(1);
  const [onselect, setOnselect] = useState(1);
  // const [selectedValues, setSelectedValues] = useState('');
  // const [selectedItems, setSelectedItems] = useState([]);

  const data = [
    {
      id: 1,
      title: 'Favorite',
    },

    {
      id: 2,
      title: 'Spot',
    },

    {
      id: 3,
      title: 'Futures',
    },

    {
      id: 4,
      title: 'Data',
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View style={{paddingHorizontal: index == 0 ? 0 : wp(4)}}>
        <TouchableOpacity
          onPress={() => {
            setSelect(item.id);
          }}
          style={{
            paddingVertical: hp(0.4),
            paddingHorizontal: wp(1.8),
            borderBottomWidth: 2,
            borderBottomColor:
              Theme == 'Dark'
                ? select == item.id
                  ? ColorPath.yellow
                  : ColorPath.blue
                : select == item.id
                ? ColorPath.yellow
                : ColorPath.white,
            marginLeft: wp(3),
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
                  : ColorPath.lightgray,
              fontFamily: FontPath.Poppins_Medium,
              fontWeight: '400',
              lineHeight: 20,
              textAlign: 'center',
              fontSize: 13,
            }}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const busddata = [
    {
      id: 1,
      title: 'BUSD',
    },

    {
      id: 2,
      title: 'USDT',
    },

    {
      id: 3,
      title: 'BNB',
    },

    {
      id: 4,
      title: 'BTC',
    },

    {
      id: 5,
      title: 'ALTS',
    },

    {
      id: 6,
      title: 'FIAT',
    },
  ];

  const renderItem1 = ({item, index}) => {
    return (
      <View style={{paddingHorizontal: index == 0 ? 0 : wp(1.5)}}>
        <TouchableOpacity
          onPress={() => {
            setOnselect(item.id);
          }}
          style={{
            backgroundColor:
              Theme == 'Dark'
                ? onselect == item.id
                  ? ColorPath.lightgray
                  : ColorPath.gray2
                : onselect == item.id
                ? ColorPath.lightgray
                : ColorPath.white,
            borderRadius: 8,
            paddingVertical: hp(0.4),
            paddingHorizontal: wp(1.8),
          }}>
          <Text
            style={{
              color:
                Theme == 'Dark'
                  ? onselect == item.id
                    ? ColorPath.darkblack
                    : ColorPath.white
                  : onselect == item.id
                  ? ColorPath.darkblack
                  : ColorPath.gray2,
              fontFamily: FontPath.Poppins_Medium,
              fontWeight: '400',
              lineHeight: 20,
              textAlign: 'center',
              fontSize: 13,
            }}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const [namelist, setNamelist] = useState([
    {
      id: 1,
      text: 'BTC /BUSD',
      voltext: 'Vol 3.35B',
      number: '22,868.40',
      dolortext: '22,868.40',
      box: '-1.69%',
    },

    {
      id: 2,
      text: 'ETH /BUSD',
      voltext: 'Vol 549.95M',
      number: '1,570.62',
      dolortext: '1,570.62',
      box: '-1.35%',
    },

    {
      id: 3,
      text: 'DOGE /BUSD',
      voltext: 'Vol 115.27M',
      number: '0,09153',
      dolortext: '0.09153',
      box: '-0.18%',
    },

    {
      id: 4,
      text: 'APT /BUSD',
      voltext: 'Vol 3.35B',
      number: '42,868.40',
      dolortext: '22,868.40',
      box: '-0.18%',
    },

    {
      id: 5,
      text: 'HIGH /BUSD',
      voltext: 'Vol 3.35B',
      number: '0,09153',
      dolortext: '22,868.40',
      box: '-0.18%',
    },

    {
      id: 6,
      text: 'SOL /BUSD',
      voltext: 'Vol 3.35B',
      number: '22,868.40',
      dolortext: '22,868.40',
      box: '-0.18%',
    },

    {
      id: 7,
      text: 'BNB /BUSD',
      voltext: 'Vol 3.35B',
      number: '1,570.62',
      dolortext: '22,868.40',
      box: '-0.18%',
    },

    {
      id: 8,
      text: 'XRP /BUSD',
      voltext: 'Vol 3.35B',
      number: '22,868.40',
      dolortext: '22,868.40',
      box: '-0.18%',
    },

    {
      id: 9,
      text: 'LOKA /BUSD',
      voltext: 'Vol 3.35B',
      number: '1,570.62',
      dolortext: '22,868.40',
      box: '+ 0.18%',
    },

    {
      id: 10,
      text: 'MATIC /BUSD',
      voltext: 'Vol 3.35B',
      number: '22,868.40',
      dolortext: '22,868.40',
      box: '-0.18%',
    },

    {
      id: 11,
      text: 'AVAX /BUSD',
      voltext: 'Vol 3.35B',
      number: '1,570.62',
      dolortext: '22,868.40',
      box: '-0.18%',
    },
  ]);

  const renderItem2 = ({item, index}) => {
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(
              'DemoChart',
              (item.text ? 'f2f' : 'F2F', {F2F: item.text}),
            );
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: hp(1),
          }}>
          <View style={{flex: 1}}>
            <Text
              style={[
                styles.numbertext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              {item.text}
            </Text>

            <Text
              style={[
                styles.numbertext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                  fontSize: 10,
                },
              ]}>
              {item.voltext}
            </Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text
              style={[
                styles.numbertext,
                {
                  color: ColorPath.green,
                },
              ]}>
              {item.number}
            </Text>

            <Text
              style={[
                styles.numbertext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                  fontSize: 10,
                },
              ]}>
              $ {item.dolortext}
            </Text>
          </View>

          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <View style={styles.numberbutton}>
              <Text style={[styles.numbertext, {color: ColorPath.white}]}>
                {item.box}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  // const [selected, setSelected] = React.useState('');

  // const selectdata = [
  //   {key: '1', value: 'Mobiles'},
  //   {key: '2', value: 'Appliances'},
  //   {key: '3', value: 'Cameras'},
  //   {key: '4', value: 'Computers'},
  //   {key: '5', value: 'Vegetables'},
  //   {key: '6', value: 'Diary Products'},
  //   {key: '7', value: 'Drinks'},
  // ];

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: Theme == 'Dark' ? ColorPath.blue : ColorPath.white},
      ]}>
      <View style={{paddingHorizontal: wp(4)}}>
        <View>
          <TextInput
            style={styles.inputtext}
            placeholder="Search Coin Pairs"
            placeholderTextColor={ColorPath.gray2}
          />
          <Image style={styles.searchicon} source={ImagePath.searchicon} />
        </View>
        {/* <View>
          <SelectList
            save="value"
            setSelected={val => setSelected(val)}
            data={selectdata}
            arrowicon={true}
            disabled={true}
            placeholder={'Search Coin Pairs'}
            dropdownStyles={{
              backgroundColor: ColorPath.white,
              borderColor: ColorPath.white,
            }}
            dropdownItemStyles={{backgroundColor: ColorPath.white}}
            dropdownTextStyles={{color: ColorPath.black, paddingBottom: hp(2)}}
            searchPlaceholder={'Search Coin Pairs'}
            boxStyles={{
              backgroundColor: ColorPath.lightgray,
              borderRadius: 25,
              paddingLeft: wp(10),
              borderColor: ColorPath.white,
            }}
            searchicon={true}
            // closeicon={true}
            inputStyles={{color: ColorPath.gray2, fontSize: 13}}
            notFoundText={true}
          />
          <Image style={styles.searchicon} source={ImagePath.searchicon} />
        </View> */}
        <View style={{marginTop: hp(3)}}>
          <FlatList
            horizontal
            data={data}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      <View
        style={[
          styles.whitebox,
          {
            backgroundColor:
              Theme == 'Dark' ? ColorPath.bluedark : ColorPath.white,
          },
        ]}>
        <View style={{marginTop: hp(1)}}>
          <FlatList
            horizontal
            data={busddata}
            renderItem={renderItem1}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View style={{paddingHorizontal: wp(1.5)}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: hp(2.5),
            }}>
            <View style={{flex: 1}}>
              <Text
                style={[
                  styles.nametext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                Name
              </Text>
            </View>

            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Text
                style={[
                  styles.nametext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                Last Price
              </Text>
            </View>

            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Text
                style={[
                  styles.nametext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                24h Chg%
              </Text>
            </View>
          </View>
        </View>
        <View style={{marginTop: hp(1), flex: 1, paddingBottom: hp(5)}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={namelist}
            renderItem={renderItem2}
            // showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default Market;
