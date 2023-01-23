import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, Image, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import ColorPath from '../../assets/ColorPath';
import FontPath from '../../assets/FontPath';
import ImagePath from '../../assets/ImagePath';
import styles from './styles';

const Coin = () => {
  const Theme = useSelector(store => store.ThemeReducer);

  const [select, setSelect] = useState(0);
  console.log(select);

  const data = [
    {
      id: 1,
      title: 'Hot',
    },

    {
      id: 2,
      title: 'Market Cap',
    },

    {
      id: 3,
      title: 'Price',
    },

    {
      id: 4,
      title: '24h Change',
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

  const renderItem = ({item, index}) => {
    return (
      <View style={{paddingHorizontal: index == 0 ? 0 : wp(1.5)}}>
        <TouchableOpacity
          onPress={() => {
            setSelect(item.id);
          }}
          style={{
            backgroundColor:
              Theme == 'Dark'
                ? select == item.id
                  ? ColorPath.bluedark
                  : ColorPath.blue
                : select == item.id
                ? ColorPath.lightgray
                : ColorPath.white,
            borderRadius: 10,
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}>
          <Text
            style={{
              color:
                Theme == 'Dark'
                  ? select == item.id
                    ? ColorPath.white
                    : ColorPath.lightgray
                  : select == item.id
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

  const renderItem1 = ({item}) => {
    return (
      <View style={styles.listbox}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Image source={ImagePath.image1} style={styles.icon} />
          <View>
            <Text
              style={[
                styles.eostext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              {item.title}
            </Text>
            <Text style={styles.eostext2}>{item.lable}</Text>
          </View>
        </View>

        <View style={{flex: 1, alignItems: 'center'}}>
          <Image source={item.image} style={styles.icon2} />
        </View>

        <View style={{flex: 1}}>
          <Text
            style={[
              styles.number,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            {item.number}
          </Text>
          <Text style={styles.number2}>{item.number2}</Text>
        </View>
      </View>
    );
  };

  //CHANGING RENDER ONPRESS BUTTON
  const ConditionRendering = () => {
    if (select == 2) {
      return (
        <View style={{}}>
          <Text
            style={{
              color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
            }}>
            Market Cap
          </Text>
        </View>
      );
    }
    if (select == 3) {
      return (
        <View style={{}}>
          <Text
            style={{
              color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
            }}>
            Price
          </Text>
        </View>
      );
    }
    if (select == 4) {
      return (
        <View style={{}}>
          <Text
            style={{
              color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
            }}>
            24h Change
          </Text>
        </View>
      );
    } else {
      return (
        <FlatList
          data={List}
          renderItem={renderItem1}
          showsVerticalScrollIndicator={false}
        />
      );
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Theme == 'Dark' ? ColorPath.blue : ColorPath.white,
        paddingHorizontal: wp(2),
        paddingVertical: hp(2),paddingBottom:hp(4)
      }}>
      <View>
        <FlatList
          horizontal
          data={data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View
        style={{
          marginTop: hp(2),
          paddingVertical: hp(1.6),
        }}>
        {ConditionRendering()}
      </View>
    </View>
  );
};

export default Coin;
