import React, {useState} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import ColorPath from '../../assets/ColorPath';
import ImagePath from '../../assets/ImagePath';
import styles from './styles';

const Watchlist = () => {
  const [checkchange, setcheckchange] = useState(true);

  const Theme = useSelector(store => store.ThemeReducer);

  const Data = [
    {
      id: 1,
      Text: ' Bitcoin',
      numbertext: '$21,483.59',
      numbric: '-0.28%',
      label: '  BTC',
      icon: ImagePath.Righticon,
      selected: false,
    },

    {
      id: 2,
      Text: ' Bnb',
      numbertext: '$21,483.59',
      numbric: '-0.28%',
      label: '  BNB',
      icon: ImagePath.Righticon,
      selected: false,
    },

    {
      id: 3,
      Text: ' Ethereum',
      numbertext: '$21,483.59',
      numbric: '-0.28%',
      label: '  ETH',
      icon: ImagePath.Righticon,
      selected: false,
    },

    {
      id: 4,
      Text: ' Ripple',
      numbertext: '$21,483.59',
      numbric: '+0.28%',
      label: '  XRP',
      icon: ImagePath.Righticon,
      selected: false,
    },

    {
      id: 5,
      Text: ' Bitcoin Cash',
      numbertext: '$21,483.59',
      numbric: '-0.28%',
      label: '  BTC',
      icon: ImagePath.Righticon,
      selected: false,
    },

    {
      id: 6,
      Text: ' EOS',
      numbertext: '$21,483.59',
      numbric: '-0.28%',
      label: '  EOS',
      icon: ImagePath.Righticon,
      selected: false,
    },
  ];

  const List = [
    {
      id: 1,
      title: 'EOS',
      lable: 'EOS',
      image: ImagePath.graph1,
      number: '$1.65',
      number2: '-1.96%',
    },

    {
      id: 2,
      title: 'BCH',
      lable: 'BITCOIN CASH',
      image: ImagePath.graph3,
      number: '$1.65',
      number2: '+1.96%',
    },

    {
      id: 3,
      title: 'XRP',
      lable: 'RIPPLE',
      image: ImagePath.graph1,
      number: '$1.65',
      number2: '-1.96%',
    },

    {
      id: 4,
      title: 'ETH',
      lable: 'ETHEREUM',
      image: ImagePath.graph3,
      number: '$1.65',
      number2: '+1.96%',
    },
  ];

  const [select, setSelect] = useState(Data);
  console.log('selectitem', select);

  const handleOnpress = item => {
    const newItem = select.map(val => {
      if (val.id === item.id) {
        return {...val, selected: !val.selected};
      } else {
        return val;
      }
    });

    setSelect(newItem);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => handleOnpress(item)}>
        <View
          style={{
            backgroundColor:
              Theme == 'Dark'
                ? item.selected
                  ? '#3D5B65'
                  : 'rgba(61, 91, 101, 0.2)'
                : item.selected
                ? ' rgba(217, 217, 217, 0.5)'
                : 'rgba(217, 217, 217, 0.2)',
            borderRadius: 15,
            width: wp(45),
            paddingHorizontal: wp(2.5),
            paddingVertical: hp(1),
            marginTop: 20,
            margin: 5,
            height: hp(11.5),
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flex: 2}}>
              <Text
                style={[
                  styles.bitcointext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                {item.Text}
              </Text>
              <Text
                style={[
                  styles.numbertext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                {item.numbertext}
              </Text>
              <Text style={styles.numbertext2}>{item.numbric}</Text>
            </View>

            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Text
                style={[
                  styles.bitcointext,
                  {color: Theme == 'Dark' ? '#C9C9C9' : ColorPath.gray},
                ]}>
                {item.label}
              </Text>
              <Image
                source={
                  item.selected ? ImagePath.rightactive : ImagePath.Righticon
                }
                style={{
                  width: wp(5),
                  height: hp(2.5),
                  resizeMode: 'contain',
                  marginTop: 20,
                  tintColor:Theme=='Dark'?ColorPath.white:ColorPath.darkblack
                }}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem1 = ({item}) => {
    return (
      <View style={styles.listbox}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Image source={ImagePath.image1} style={styles.icon} />
          <View>
            <Text style={[styles.eostext,{color:Theme=='Dark'?ColorPath.white:ColorPath.darkblack}]}>{item.title}</Text>
            <Text style={styles.eostext2}>{item.lable}</Text>
          </View>
        </View>

        <View style={{flex: 1, alignItems: 'center'}}>
          <Image source={item.image} style={styles.icon2} />
        </View>

        <View style={{flex: 1}}>
          <Text style={[styles.number,{color:Theme=='Dark'?ColorPath.white:ColorPath.darkblack}]}>{item.number}</Text>
          <Text style={styles.number2}>{item.number2}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: Theme=='Dark'?ColorPath.blue:ColorPath.white, flex: 1,paddingBottom:hp(2)}}>
      {checkchange ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={select}
            numColumns={2}
            renderItem={renderItem}
            scrollEnabled={true}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />

          <View style={{paddingBottom: hp(2)}}>
            <TouchableOpacity
              onPress={() => {
                setcheckchange(false);
              }}
              style={styles.addbutton}>
              <Text style={styles.addtext}>Add Favourites</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      ) : (
        <View style={{marginTop: hp(2), flex: 1}}>
          <FlatList
            data={List}
            scrollEnabled={true}
            renderItem={renderItem1}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
};

export default Watchlist;
