import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import ColorPath from '../../assets/ColorPath';
import ImagePath from '../../assets/ImagePath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontPath from '../../assets/FontPath';
import Navbar from '../../component/Navbar';

const MyGift = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: ColorPath.white}}>
      <View style={{paddingHorizontal: wp(4), paddingVertical: hp(1)}}>
        <Navbar
          onPress={() => {
            navigation.goBack();
          }}
          righticon={ImagePath.angleleft}
          lefticon2={ImagePath.rongicon}
          onPress2={() => {
            navigation.navigate('BottomTab');
          }}
        />

        <View>
          <Text
            style={{
              color: ColorPath.darkblack,
              fontFamily: FontPath.Poppins_Bold,
              fontSize: 20,
              marginTop: hp(3),
            }}>
            My Gifts
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MyGift;
