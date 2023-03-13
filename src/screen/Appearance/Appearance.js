import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import ColorPath from '../../assets/ColorPath';
import ImagePath from '../../assets/ImagePath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontPath from '../../assets/FontPath';
import Navbar from '../../component/Navbar';
import {useDispatch, useSelector} from 'react-redux';
import {ChangeTheme} from '../../Redux/Actions/Action';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Appearance = ({navigation}) => {
  const dispatch = useDispatch();
  const Theme = useSelector(store => store.ThemeReducer);
  const [select, setSelect] = useState();

  useEffect(() => {
    Theme == 'Dark' ? setSelect(0) : setSelect(1);
  }, [Theme]);

  const onclick = () => {
    AsyncStorage.setItem('CheckLocalTheme', Theme);
    dispatch(ChangeTheme(Theme == 'Light' && select == 1 ? 'Dark' : 'Light'));
    // console.log({Theme: Theme, select: select});
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
              styles.apptext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Appearance
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            setSelect(0);
            onclick();
          }}
          disabled={select == 0 ? true : false}
          style={styles.button}>
          <Text
            style={[
              styles.buttontext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Dark Mode
          </Text>

          {select == 0 ? (
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

        <TouchableOpacity
          onPress={() => {
            setSelect(1);
            onclick();
          }}
          disabled={select == 1 ? true : false}
          style={styles.button}>
          <Text
            style={[
              styles.buttontext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Light Mode
          </Text>
          {select == 1 ? (
            <Image source={ImagePath.rightactive} style={styles.righticon} />
          ) : null}
        </TouchableOpacity>

        <View>
          <Text
            style={[
              styles.buttontext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Use device settings
          </Text>

          <Text style={[styles.aftertext,{color:Theme=='Dark'?ColorPath.lightgray:ColorPath.gray3}]}>
            After opening, day or night mode will be folllowed by device
            settings
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  apptext: {
    fontFamily: FontPath.Poppins_Bold,
    fontSize: 20,
    marginTop: hp(3),
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  buttontext: {
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 17,
    marginTop: hp(5),
  },

  righticon: {
    width: wp(4),
    height: hp(2),
    resizeMode: 'contain',
  },

  aftertext: {
    fontFamily: FontPath.Poppins_Medium,
    fontSize: 13,
  },
});

export default Appearance;
