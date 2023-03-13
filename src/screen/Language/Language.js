import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import ColorPath from '../../assets/ColorPath';
import ImagePath from '../../assets/ImagePath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontPath from '../../assets/FontPath';
import Navbar from '../../component/Navbar';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

const Language = ({navigation}) => {
  const Theme = useSelector(store => store.ThemeReducer);

  const data = [
    {
      id: 1,
      title: 'Hindi',
    },
    {
      id: 2,
      title: 'English',
    },
    {
      id: 3,
      title: 'Turkce',
    },
    {
      id: 4,
      title: 'Espanol (Latinomerica)',
    },
    {
      id: 5,
      title: 'English (UK)',
    },
    {
      id: 6,
      title: 'Hindi',
    },
    {
      id: 7,
      title: 'English',
    },
    {
      id: 8,
      title: 'Turkce',
    },
    {
      id: 9,
      title: 'Espanol (Latinomerica)',
    },
    {
      id: 10,
      title: 'English (UK)',
    },
    {
      id: 11,
      title: 'Hindi',
    },
    {
      id: 12,
      title: 'English',
    },
    {
      id: 13,
      title: 'Turkce',
    },
    {
      id: 14,
      title: 'Espanol (Latinomerica)',
    },
    {
      id: 15,
      title: 'English (UK)',
    },
  ];

  const [select, setSelect] = useState('');

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelect(index);
        }}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={[
            styles.listtext,
            {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
          ]}>
          {item.title}
        </Text>
        {select == index ? (
          <Image
            source={ImagePath.rightactive}
            style={[
              styles.righticon,
              {
                tintColor:
                  Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
              },
            ]}
          />
        ) : null}
      </TouchableOpacity>
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
        <Text
          style={[
            styles.languagetext,
            {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
          ]}>
          Language
        </Text>
      </View>

      <View
        style={{
          paddingBottom: hp(2),
          marginTop: hp(1),
          flex: 1,
          paddingHorizontal: wp(4),
        }}>
        <FlatList data={data} renderItem={renderItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  languagetext: {
    fontFamily: FontPath.Poppins_Bold,
    fontSize: 20,
    marginTop: hp(3),
  },

  listtext: {
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 17,
    marginTop: hp(3),
  },

  righticon: {
    width: wp(4),
    height: hp(2),
    resizeMode: 'contain',
  },
});

export default Language;
