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
import {useSelector} from 'react-redux';

const Help = ({navigation}) => {
  const Theme = useSelector(store => store.ThemeReducer);

  const [modalVisible, setModalVisible] = useState(false);

  const data = [
    {
      id: 1,
      text: 'Need help? Check FAQs',
      icon: ImagePath.Rightaero,
      route: 'NeedHelp',
    },

    {
      id: 2,
      text: 'System Feedback',
      icon: ImagePath.Rightaero,
    },

    {
      id: 3,
      text: 'Chat',
      icon: ImagePath.Rightaero,
      route: 'Chat',
    },
  ];

  const Nextscreen = goHome => {
    navigation.navigate(goHome.route);
  };

  const onPressItem = item => {
    if (item.id == 2) {
      setModalVisible(true);
    } else {
      Nextscreen(item);
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onPressItem(item, index);
        }}
        style={{
          flexDirection: 'row',
          paddingBottom: wp(8),
        }}>
        <View style={{flex: 5, flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={[
              styles.listtext,
              {color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack},
            ]}>
            {item.text}
          </Text>
        </View>

        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Image
            source={item.icon}
            style={[
              styles.righticon,
              {
                tintColor:
                  Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
              },
            ]}
          />
        </View>
      </TouchableOpacity>
    );
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
                styles.helptext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Help & Support
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('BottomTab');
            }}
            style={{alignItems: 'flex-end'}}>
            <Image
              source={
                Theme == 'Dark' ? ImagePath.rongicondark : ImagePath.rongicon
              }
              style={styles.lefticon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{paddingHorizontal: wp(4), marginTop: hp(4)}}>
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
                  styles.systemtext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                System Feedback
              </Text>

              <Text
                style={[
                  styles.feedbacktext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                Feedback lets you send error logs about our products. We welcome
                problem reports.
              </Text>

              <View
                style={{
                  marginTop: hp(3),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
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
    </ScrollView>
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

  listtext: {
    fontFamily: FontPath.Poppins_Medium,
    fontWeight: '500',
    fontSize: 13.5,
  },

  righticon: {
    width: wp(3),
    height: hp(1.5),
    resizeMode: 'contain',
  },

  viewcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(1.5),
  },

  lefticon: {
    width: wp(5),
    height: hp(2.5),
    resizeMode: 'contain',
  },

  helptext: {
    fontFamily: FontPath.Poppins_Bold,
    fontSize: 18,
  },

  systemtext: {
    fontSize: 18,
    fontFamily: FontPath.Poppins_Bold,
    textAlign: 'center',
  },

  feedbacktext: {
    fontSize: 18,
    fontFamily: FontPath.Poppins_Medium,
    textAlign: 'center',
    marginTop: hp(1),
  },

  button: {
    backgroundColor: ColorPath.yellow,
    paddingVertical: hp(1),
    borderRadius: 10,
    width: wp(40),
  },

  buttontext: {
    color: ColorPath.darkblack,
    fontSize: 15,
    textAlign: 'center',
    fontFamily: FontPath.Poppins_Medium,
  },
});

export default Help;
