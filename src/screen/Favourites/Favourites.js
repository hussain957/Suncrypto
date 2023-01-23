import React, {useState} from 'react';
import {Image, View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SliderBox} from 'react-native-image-slider-box';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import styles from './styles';
import ImagePath from '../../assets/ImagePath';
import ColorPath from '../../assets/ColorPath';
import Navbar from '../../component/Navbar';
import Watchlist from '../Watchlist/Watchlist';
import Coin from '../Coin/Coin';
import {useSelector} from 'react-redux';

const Tab = createMaterialTopTabNavigator();

const Favourites = ({navigation}) => {
  const Theme = useSelector(store => store.ThemeReducer);

  const Images = [
    ImagePath.banner,
    ImagePath.banner,
    ImagePath.banner,
    ImagePath.banner,
    ImagePath.banner,
  ];

  return (
    <>
      <View
        style={[
          styles.container,
          {backgroundColor: Theme == 'Dark' ? ColorPath.blue : ColorPath.white},
        ]}>
        <Navbar
          righticon={Theme == 'Dark' ? ImagePath.usericon1 : ImagePath.usericon}
          lefticon={
            Theme == 'Dark' ? ImagePath.searchwhite : ImagePath.searchicon
          }
          lefticon2={Theme == 'Dark' ? ImagePath.barcode : ImagePath.scan2}
        />

        <View style={{alignItems: 'center', marginTop: hp(3)}}>
          <Image source={ImagePath.loveicon} style={styles.loveicon} />
          <Text
            style={[
              styles.welcometext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Welcome To Suncrypto
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: hp(3),
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}
            style={[
              styles.button,
              {
                backgroundColor:
                  Theme == 'Dark' ? '#506B75' : ColorPath.lightgray,
              },
            ]}>
            <Text
              style={[
                styles.buttontext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Sign up
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}
            style={[styles.button, {backgroundColor: ColorPath.yellow}]}>
            <Text style={[styles.buttontext, {color: ColorPath.darkblack}]}>
              Log In
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 40}}>
          <SliderBox
            images={Images}
            sliderBoxHeight={hp(15)}
            ImageComponentStyle={{
              width: wp(90),
              borderRadius: 20,
              marginRight: wp(5),
            }}
            imageLoadingColor="blue"
            dotColor="#808080"
            inactiveDotColor="#808080"
            autoplay
            circleLoop
            paginationBoxStyle={{
              right: 0,
              bottom: 0,
              padding: 0,
            }}
            dotStyle={{
              width: wp(2),
              height: hp(1),
              borderRadius: 10,
            }}
          />
        </View>

        <View style={{flex: 1, marginTop: hp(1)}}>
          <Tab.Navigator
            screenOptions={{
              tabBarContentContainerStyle: {},
              tabBarItemStyle: {
                backgroundColor:
                  Theme == 'Dark' ? ColorPath.blue : ColorPath.white,
                flex: 1,
              },
              tabBarActiveTintColor:
                Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
              tabBarInactiveTintColor: ColorPath.lightgray2,
              tabBarIndicatorStyle: {
                backgroundColor: ColorPath.yellow,
                height: hp(0.5),
                width: wp(10),
                marginLeft: wp(9),
              },
            }}>
            <Tab.Screen name="Watchlist" component={Watchlist} />
            <Tab.Screen name="Coin" component={Coin} />
          </Tab.Navigator>
        </View>
      </View>

      <View
        style={[
          styles.containerbottom,
          {backgroundColor: Theme == 'Dark' ? ColorPath.blue : ColorPath.white},
        ]}>
        <Image
          source={ImagePath.Graph2}
          style={[
            styles.Graphicon,
            {
              tintColor:
                Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
            },
          ]}
        />
        <Image source={ImagePath.Rectangle} style={styles.aweoicon} />
        <Image
          source={ImagePath.walletlight}
          style={[
            styles.Graphicon,
            {
              tintColor:
                Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
            },
          ]}
        />
      </View>
    </>
  );
};

export default Favourites;
