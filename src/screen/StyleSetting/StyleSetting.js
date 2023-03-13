import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  Image,
  StyleSheet,
} from 'react-native';
import ColorPath from '../../assets/ColorPath';
import ImagePath from '../../assets/ImagePath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontPath from '../../assets/FontPath';
import Navbar from '../../component/Navbar';
import {useSelector} from 'react-redux';

const StyleSetting = ({navigation}) => {
  const Theme = useSelector(store => store.ThemeReducer);

  const [modalVisible, setModalVisible] = useState(false);

  const data = [
    {
      id: 1,
      title: 'Fresh',
    },
    {
      id: 2,
      title: 'Traditional',
    },
    {
      id: 3,
      title: 'Color Vision Deficiency',
    },
  ];

  const [select, setSelect] = useState('');

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelect(index);
          setModalVisible(!modalVisible);
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

        <View>
          <Text
            style={[
              styles.styletext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            Style Settings
          </Text>
        </View>
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View
            style={[
              styles.modalView,
              {
                backgroundColor:
                  Theme == 'Dark' ? ColorPath.blue : ColorPath.white,
              },
            ]}>
            <View style={{paddingHorizontal: wp(4), paddingVertical: hp(2)}}>
              <Text
                style={[
                  styles.tradtionaltext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                Traditional
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  marginTop: hp(3),
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                  style={styles.button}>
                  <Text style={styles.buttontext}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttontext}>Ok</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: wp(4),
    backgroundColor: 'rgba(201, 201, 201, 0.39)',
  },
  modalView: {
    borderRadius: 15,
    elevation: 10,
  },

  styletext: {
    fontFamily: FontPath.Poppins_Bold,
    fontSize: 20,
    marginTop: hp(3),
  },

  tradtionaltext: {
    fontSize: 18,
    fontFamily: FontPath.Poppins_Bold,
    textAlign: 'center',
  },

  button: {
    width: wp(35),
    backgroundColor: ColorPath.yellow,
    paddingVertical: hp(1),
    borderRadius: 10,
  },

  buttontext: {
    color: ColorPath.darkblack,
    fontSize: 15,
    textAlign: 'center',
    fontFamily: FontPath.Poppins_Medium,
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

export default StyleSetting;
