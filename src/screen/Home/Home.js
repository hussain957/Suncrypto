import React, {Fragment, useState} from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
  Linking,
  TextInput,
  Modal,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SliderBox} from 'react-native-image-slider-box';
import ImagePath from '../../assets/ImagePath';
import ColorPath from '../../assets/ColorPath';
import FontPath from '../../assets/FontPath';
import styles from './styles';
import {useSelector} from 'react-redux';
import QRCodeScanner from 'react-native-qrcode-scanner';

const Home = ({navigation}) => {
  const [scan, setScan] = useState(false);
  const [scanResult, setScanResult] = useState(false);
  const [result, setResult] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);

  const [onselect, setonSelect] = useState(false);

  const onclick = () => {
    setonSelect(!onselect);
  };

  const onSuccess = e => {
    const check = e.data.substring(0, 4);
    console.log('scanned', check);
    setResult({
      result: e,
    });

    setScan({
      scan: false,
    });

    setScanResult({
      ScanResult: true,
    });
    if (check === 'http') {
      Linking.openURL(e.data).catch(err =>
        console.error('An error occured', err),
      );
    } else {
      setResult({
        result: e,
      });

      setScan({
        scan: false,
      });

      setScanResult({
        ScanResult: true,
      });
    }
  };
  const activeQR = () => {
    setScan(true);
  };
  const scanAgain = () => {
    setScan(true);
    setScanResult(false);
  };

  const Theme = useSelector(store => store.ThemeReducer);

  const [change, setChange] = useState(1);

  const data = [
    {
      id: 1,
      title: 'Hot',
    },

    {
      id: 2,
      title: 'Favorites',
    },

    {
      id: 3,
      title: 'Gainer',
    },

    {
      id: 4,
      title: 'Loosers',
    },

    {
      id: 5,
      title: '24h Vol',
    },
  ];

  const [list, setList] = useState([
    {
      id: 1,
      Text: 'Deposit',
      images: Theme == 'Dark' ? ImagePath.deposit : ImagePath.download,
    },
    {
      id: 2,
      Text: 'Strategy Trading',
      images:
        Theme == 'Dark' ? ImagePath.stockmarketdark : ImagePath.stockmarket,
    },
    {
      id: 3,
      Text: 'Battle',
      images: Theme == 'Dark' ? ImagePath.swordsdark : ImagePath.swords,
    },
    {
      id: 4,
      Text: 'Launchpad',
      images: Theme == 'Dark' ? ImagePath.startupdark : ImagePath.startup,
    },
  ]);

  const [namelist, setNamelist] = useState([
    {
      id: 1,
      text: 'BNB',
      number: '278.4',
      box: '-0.18%',
    },

    {
      id: 2,
      text: 'BTC',
      number: '19,809.87',
      box: '-1.30%',
    },

    {
      id: 3,
      text: 'ETH',
      number: '1,450.42',
      box: '-1.30%',
    },

    {
      id: 4,
      text: 'XEC',
      number: '0.0004853',
      box: '+1.60%',
    },

    {
      id: 5,
      text: 'SOL',
      number: '30.38',
      box: '-1.30%',
    },

    {
      id: 6,
      text: 'SHIB',
      number: '0.00001193',
      box: '-1.30%',
    },

    {
      id: 7,
      text: 'MATIC',
      number: '0.7785',
      box: '-1.30%',
    },

    {
      id: 8,
      text: 'LUNC',
      number: '0.00013072',
      box: '+5.30%',
    },

    {
      id: 9,
      text: 'ADA',
      number: '0.4329',
      box: '-1.30%',
    },

    {
      id: 10,
      text: 'AVAX',
      number: '17.71',
      box: '-1.30%',
    },
  ]);

  const Images = [
    ImagePath.banner,
    ImagePath.banner,
    ImagePath.banner,
    ImagePath.banner,
    ImagePath.banner,
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.iconbutton}>
        <Image source={item.images} style={styles.icons} />
        <Text
          style={[
            styles.icontext,
            {
              color:
                Theme == 'Dark' ? ColorPath.lightgray : ColorPath.darkblack,
            },
          ]}>
          {item.Text}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderItem1 = ({item, index}) => {
    return (
      <View style={{paddingHorizontal: index == 0 ? 0 : wp(1.5)}}>
        <TouchableOpacity
          onPress={() => {
            setChange(item.id);
          }}
          style={{
            backgroundColor:
              Theme == 'Dark'
                ? change == item.id
                  ? ColorPath.bluedark
                  : ColorPath.blue
                : change == item.id
                ? ColorPath.gray2
                : ColorPath.lightgray,
            borderRadius: 8,
            paddingVertical: hp(0.4),
            paddingHorizontal: wp(1.8),
          }}>
          <Text
            style={{
              color: change == item.id ? '#FFFFFF' : '#808080',
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

  const renderItem2 = ({item, index}) => {
    return (
      <TouchableOpacity
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
                color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
              },
            ]}>
            {item.text}
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Text
            style={[
              styles.numbertext,
              {
                color: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
              },
            ]}>
            {item.number}
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
    );
  };

  const Data = [
    {
      id: 1,
      Text: ' Bitcoin',
      numbertext: '$21,483.59',
      numbric: '-0.28%',
      label: 'BTC',
      icon: ImagePath.Righticon,
      selected: false,
    },

    {
      id: 2,
      Text: ' Bnb',
      numbertext: '$21,483.59',
      numbric: '-0.28%',
      label: 'BNB',
      icon: ImagePath.Righticon,
      selected: false,
    },

    {
      id: 3,
      Text: 'Ethereum',
      numbertext: '$21,483.59',
      numbric: '-0.28%',
      label: 'ETH',
      icon: ImagePath.Righticon,
      selected: false,
    },

    {
      id: 4,
      Text: ' Ripple',
      numbertext: '$21,483.59',
      numbric: '+0.28%',
      label: 'XRP',
      icon: ImagePath.Righticon,
      selected: false,
    },

    {
      id: 5,
      Text: ' Bitcoin Cash',
      numbertext: '$21,483.59',
      numbric: '-0.28%',
      label: 'BTC',
      icon: ImagePath.Righticon,
      selected: false,
    },

    {
      id: 6,
      Text: ' EOS',
      numbertext: '$21,483.59',
      numbric: '-0.28%',
      label: 'EOS',
      icon: ImagePath.Righticon,
      selected: false,
    },
  ];

  const [select, setSelect] = useState(Data);

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

  const renderItem3 = ({item}) => {
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
            marginTop: wp(2),
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
                  styles.numbertext4,
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
                  tintColor:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                }}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const Favorite = () => {
    if (change == 2) {
      return (
        <>
          <FlatList
            data={select}
            numColumns={2}
            renderItem={renderItem3}
            scrollEnabled={true}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
          <TouchableOpacity style={styles.addbutton}>
            <Text style={styles.addtext}>Add Favourites</Text>
          </TouchableOpacity>
        </>
      );
    }

    if (change == 3) {
      return (
        <View
          style={{
            flex: 1,
            paddingHorizontal: wp(4),
          }}>
          <FlatList
            data={namelist}
            renderItem={renderItem2}
            // showsVerticalScrollIndicator={false}
          />
        </View>
      );
    }

    if (change == 4) {
      return (
        <View
          style={{
            flex: 1,
            paddingHorizontal: wp(4),
          }}>
          <FlatList
            data={namelist}
            renderItem={renderItem2}
            // showsVerticalScrollIndicator={false}
          />
        </View>
      );
    }

    if (change == 5) {
      return (
        <View
          style={{
            flex: 1,
            paddingHorizontal: wp(4),
          }}>
          <FlatList
            data={namelist}
            renderItem={renderItem2}
            // showsVerticalScrollIndicator={false}
          />
        </View>
      );
    } else {
      return (
        <>
          <View
            style={{
              paddingHorizontal: wp(4),
              paddingBottom: hp(2),
            }}>
            <FlatList
              data={namelist}
              renderItem={renderItem2}
              // showsVerticalScrollIndicator={false}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: hp(2),
              }}>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={ImagePath.usericon}
                  style={[
                    styles.usericon1,
                    {
                      tintColor:
                        Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                    },
                  ]}
                />
                <Text
                  style={[
                    styles.profilename,
                    {
                      color:
                        Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                    },
                  ]}>
                  BERIT
                </Text>

                <Text
                  style={[
                    styles.profilename,
                    {
                      color:
                        Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                      fontSize: 12,
                    },
                  ]}>
                  3 mins ago
                </Text>
              </View>

              <View style={{flex: 1}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: ColorPath.yellow,
                    borderRadius: 8,
                    paddingVertical: hp(0.5),
                  }}>
                  <Text
                    style={{
                      color: ColorPath.darkblack,
                      fontSize: 16,
                      textAlign: 'center',
                    }}>
                    Follow
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Text
                style={[
                  styles.suncryptotext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                Suncrypto Colombia signs an agreement with Universidad de los
                Andes one of the biggest universities in the region
              </Text>

              <Text
                style={[
                  styles.suncryptotext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                From this collaboration Suncrypto will work with the university
                to create a series of educational programs for the student
                teachers to learn about Blockchain and Web3
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: hp(2),
              }}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>FOR -3.02%</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, {marginLeft: wp(2)}]}>
                <Text style={styles.buttontext}>ONE -9.20%</Text>
              </TouchableOpacity>
            </View>

            <View>
              <Image
                source={ImagePath.banner}
                style={{
                  width: wp(90),
                  height: hp(30),
                  borderRadius: 15,
                  marginTop: hp(2),
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: hp(3),
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={() => {
                  onclick();
                }}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={onselect ? ImagePath.likeblack : ImagePath.like}
                  style={[
                    styles.usericon1,
                    {
                      tintColor:
                        Theme == 'Dark'
                          ? ColorPath.lightgray
                          : ColorPath.darkblack,
                    },
                  ]}
                />
                <Text
                  style={[
                    styles.liketext,
                    {
                      color:
                        Theme == 'Dark'
                          ? onselect
                            ? ColorPath.white
                            : ColorPath.lightgray
                          : onselect
                          ? ColorPath.darkblack
                          : ColorPath.gray2,
                    },
                  ]}>
                  Like
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: wp(5),
                  justifyContent: 'center',
                }}>
                {/* <Image source={ImagePath.icon} style={styles.usericon1} /> */}
                <Text
                  style={[
                    styles.liketext,
                    {
                      color:
                        Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                    },
                  ]}>
                  0
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {/* <Image source={ImagePath.icon} style={styles.usericon1} /> */}
                <Text
                  style={[
                    styles.liketext,
                    {
                      color:
                        Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                    },
                  ]}>
                  0
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                {/* <Image source={ImagePath.icon} style={styles.usericon1} /> */}
              </View>
            </View>

            <Text
              style={[
                styles.nottext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                  borderBottomColor:
                    Theme == 'Dark' ? ColorPath.gray2 : ColorPath.lightgray,
                },
              ]}>
              Not financial advice. Not endorsement of 3rd party opinions. See
              full disclaimers and terms.
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: hp(1),
              }}>
              <Text
                style={[
                  styles.camaigntext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                Campaign
              </Text>
              <TouchableOpacity>
                <Text style={styles.Viewtext}>View More</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor:
                  Theme == 'Dark' ? ColorPath.gray2 : ColorPath.lightgray,
                paddingBottom: hp(1.5),
              }}>
              <Image
                source={ImagePath.banner}
                style={{
                  width: wp(90),
                  height: hp(20),
                  resizeMode: 'contain',
                  marginTop: hp(1),
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: hp(2),
              }}>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image source={ImagePath.usericon} style={styles.usericon1} />
                <Text
                  style={[
                    styles.profilename,
                    {
                      color:
                        Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                    },
                  ]}>
                  Crypto Master
                </Text>

                <Text
                  style={[
                    styles.profilename,
                    {
                      color:
                        Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                      fontSize: 12,
                    },
                  ]}>
                  3 mins ago
                </Text>
              </View>

              <View style={{flex: 1}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: ColorPath.yellow,
                    borderRadius: 8,
                    paddingVertical: hp(0.5),
                  }}>
                  <Text
                    style={{
                      color: ColorPath.darkblack,
                      fontSize: 16,
                      textAlign: 'center',
                    }}>
                    Follow
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <Text
              style={[
                styles.doyoutext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Do You Want a Article on Arbitrum Project And It's Growth
            </Text>

            <TouchableOpacity
              style={[
                styles.yesbutton,
                {
                  borderColor:
                    Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                },
              ]}>
              <Text
                style={[
                  styles.yestext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                yes
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.yesbutton,
                {
                  borderColor:
                    Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                },
              ]}>
              <Text
                style={[
                  styles.yestext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                no
              </Text>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: hp(3),
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    onclick();
                  }}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={onselect ? ImagePath.likeblack : ImagePath.like}
                    style={[
                      styles.usericon1,
                      {
                        tintColor:
                          Theme == 'Dark'
                            ? ColorPath.lightgray
                            : ColorPath.darkblack,
                      },
                    ]}
                  />
                  <Text
                    style={[
                      styles.liketext,
                      {
                        color:
                          Theme == 'Dark'
                            ? onselect
                              ? ColorPath.white
                              : ColorPath.lightgray
                            : onselect
                            ? ColorPath.darkblack
                            : ColorPath.gray2,
                      },
                    ]}>
                    Like
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: wp(5),
                }}>
                {/* <Image source={ImagePath.icon} style={styles.usericon1} /> */}
                <Text
                  style={[
                    styles.liketext,
                    {
                      color:
                        Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                    },
                  ]}>
                  0
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {/* <Image source={ImagePath.icon} style={styles.usericon1} /> */}
                <Text
                  style={[
                    styles.liketext,
                    {
                      color:
                        Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                    },
                  ]}>
                  0
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                {/* <Image source={ImagePath.icon} style={styles.usericon1} /> */}
              </View>
            </View>

            <Text
              style={[
                styles.nottext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                  borderColor:
                    Theme == 'Dark' ? ColorPath.gray2 : ColorPath.lightgray,
                },
              ]}>
              Not financial advice. Not endorsement of 3rd party opinions. See
              full disclaimers and terms.
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: hp(2),
              }}>
              <Text
                style={[
                  styles.camaigntext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                Trending Topics
              </Text>
              <TouchableOpacity>
                <Text
                  style={[
                    styles.Viewtext,
                    {
                      color:
                        Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                    },
                  ]}>
                  View More
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={[
                styles.graybox,
                {
                  backgroundColor:
                    Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray,
                },
              ]}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={[
                    styles.numbertext1,
                    {
                      color:
                        Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                    },
                  ]}>
                  1
                </Text>
                <Text
                  style={[
                    styles.numbertext1,
                    {
                      marginLeft: wp(2),
                      color:
                        Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                    },
                  ]}>
                  #BTC
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: hp(1),
                }}>
                <Text
                  style={[
                    styles.numbertext1,
                    {
                      color:
                        Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                    },
                  ]}>
                  2
                </Text>
                <Text
                  style={[
                    styles.numbertext1,
                    {
                      marginLeft: wp(2),
                      color:
                        Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                    },
                  ]}>
                  #bnbgreenfield
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: hp(1),
                }}>
                <Text
                  style={[
                    styles.numbertext1,
                    {
                      color:
                        Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                    },
                  ]}>
                  3
                </Text>
                <Text
                  style={[
                    styles.numbertext1,
                    {
                      marginLeft: wp(2),
                      color:
                        Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                    },
                  ]}>
                  #Stablecoins
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: hp(1),
                }}>
                <Text
                  style={[
                    styles.numbertext1,
                    {
                      color:
                        Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                    },
                  ]}>
                  4
                </Text>
                <Text
                  style={[
                    styles.numbertext1,
                    {
                      marginLeft: wp(2),
                      color:
                        Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                    },
                  ]}>
                  #BNB
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: hp(1),
                }}>
                <Text
                  style={[
                    styles.numbertext1,
                    {
                      color:
                        Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                    },
                  ]}>
                  5
                </Text>
                <Text
                  style={[
                    styles.numbertext1,
                    {
                      marginLeft: wp(2),
                      color:
                        Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                    },
                  ]}>
                  #inflation
                </Text>
              </View>
            </View>

            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor:
                  Theme == 'Dark' ? ColorPath.gray2 : ColorPath.lightgray,
                paddingBottom: hp(1.5),
              }}></View>

            <Text
              style={[
                styles.camaigntext,
                {
                  marginTop: hp(1),
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Products For You
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                {/* <Image source={ImagePath.icon} style={styles.Layericon} /> */}
                <Text
                  style={[
                    styles.usdttext,
                    {
                      color:
                        Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                    },
                  ]}>
                  USDT
                </Text>
              </View>

              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={styles.aprtext}>APR 0.6 ~ 198.9%</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: hp(1),
              }}>
              <View
                style={[
                  styles.graybox1,
                  {
                    backgroundColor:
                      Theme == 'Dark'
                        ? ColorPath.bluedark
                        : ColorPath.lightgray,
                  },
                ]}>
                <Text
                  style={[
                    styles.flexbletext,
                    {
                      color:
                        Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                    },
                  ]}>
                  Flexible
                </Text>
                <Text
                  style={[
                    styles.flexbletext,
                    {color: ColorPath.gray2, fontSize: 12},
                  ]}>
                  APR
                </Text>
                <Text style={[styles.flexbletext, {color: ColorPath.green}]}>
                  5.5%
                </Text>
              </View>
              <View
                style={[
                  styles.graybox1,
                  {
                    backgroundColor: 'Dark'
                      ? ColorPath.bluedark
                      : ColorPath.lightgray,
                  },
                ]}>
                <Text
                  style={[
                    styles.flexbletext,
                    {
                      color:
                        Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                    },
                  ]}>
                  Dual Investment
                </Text>
                <Text
                  style={[
                    styles.flexbletext,
                    {color: ColorPath.gray2, fontSize: 12},
                  ]}>
                  APR
                </Text>
                <Text style={[styles.flexbletext, {color: ColorPath.green}]}>
                  4.03% ~ 198.9%
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: hp(1),
                borderBottomWidth: 1,
                borderBottomColor:
                  Theme == 'Dark' ? ColorPath.gray2 : ColorPath.lightgray,
                paddingBottom: hp(1.5),
              }}>
              <View
                style={[
                  styles.graybox1,
                  {
                    backgroundColor:
                      Theme == 'Dark'
                        ? ColorPath.bluedark
                        : ColorPath.lightgray,
                  },
                ]}>
                <Text
                  style={[
                    styles.flexbletext,
                    {
                      color:
                        Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                    },
                  ]}>
                  Liquidity Farming
                </Text>
                <Text
                  style={[
                    styles.flexbletext,
                    {color: ColorPath.gray2, fontSize: 12},
                  ]}>
                  APR
                </Text>
                <Text style={[styles.flexbletext, {color: ColorPath.green}]}>
                  1.07% ~ 106.29%
                </Text>
              </View>
              <View
                style={[
                  styles.graybox1,
                  {
                    backgroundColor:
                      Theme == 'Dark'
                        ? ColorPath.bluedark
                        : ColorPath.lightgray,
                  },
                ]}>
                <Text
                  style={[
                    styles.flexbletext,
                    {
                      color:
                        Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                    },
                  ]}>
                  DeFi Staking
                </Text>
                <Text
                  style={[
                    styles.flexbletext,
                    {color: ColorPath.gray2, fontSize: 12},
                  ]}>
                  APR
                </Text>
                <Text style={[styles.flexbletext, {color: ColorPath.green}]}>
                  0.6%
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: hp(2),
              }}>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={ImagePath.usericon}
                  style={[
                    styles.usericon1,
                    {
                      tintColor:
                        Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                    },
                  ]}
                />
                <Text
                  style={[
                    styles.profilename,
                    {
                      color:
                        Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                    },
                  ]}>
                  FortuneNode
                </Text>

                <Text
                  style={[
                    styles.profilename,
                    {
                      color:
                        Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                      fontSize: 12,
                    },
                  ]}>
                  6 mins ago
                </Text>
              </View>

              <View style={{flex: 1}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: ColorPath.yellow,
                    borderRadius: 8,
                    paddingVertical: hp(0.5),
                  }}>
                  <Text
                    style={{
                      color: ColorPath.darkblack,
                      fontSize: 16,
                      textAlign: 'center',
                    }}>
                    Follow
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={[
                styles.doyoutext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              Blockchain is the ultimate disruptor, poised to revolutionize
              every idustry from finance to healthcare,
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: hp(3),
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                {/* <Image source={ImagePath.icon} style={styles.usericon1} /> */}
                <Text style={styles.liketext}>Like</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: wp(5),
                }}>
                {/* <Image source={ImagePath.icon} style={styles.usericon1} /> */}
                <Text style={styles.liketext}>0</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {/* <Image source={ImagePath.icon} style={styles.usericon1} /> */}
                <Text style={styles.liketext}>0</Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                {/* <Image source={ImagePath.icon} style={styles.usericon1} /> */}
              </View>
            </View>

            <Text
              style={[
                styles.nottext,
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  borderColor:
                    Theme == 'Dark' ? ColorPath.gray2 : ColorPath.lightgray,
                },
              ]}>
              Not finance advice. Not endorsement of 3rd party opinions. See
              full disclaimers and terms.
            </Text>

            <Image
              source={ImagePath.banner}
              style={{
                width: wp(90),
                height: hp(20),
                resizeMode: 'contain',
                marginTop: hp(1),
              }}
            />
          </View>
        </>
      );
    }
  };

  return (
    <ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Image source={ImagePath.arrow} style={styles.arrowicon} />
            </TouchableOpacity>
            <TextInput style={styles.inputbox} />
          </View>
        </View>
      </Modal>
      {!scan && !scanResult && (
        <View
          style={[
            styles.container,
            {
              backgroundColor:
                Theme == 'Dark' ? ColorPath.blue : ColorPath.white,
            },
          ]}>
          <View style={{paddingHorizontal: wp(4), paddingVertical: hp(1)}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.openDrawer();
                }}
                style={{flex: 1}}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor:
                      Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                    borderRadius: 30,
                    width: 40,
                    height: 40,
                    lineHeight: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={ImagePath.usericon}
                    style={[
                      styles.profileicon,
                      {
                        tintColor:
                          Theme == 'Dark'
                            ? ColorPath.lightgray
                            : ColorPath.gray2,
                      },
                    ]}
                  />
                </View>
              </TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <Image
                  source={ImagePath.headphone}
                  style={[
                    styles.icon,
                    {
                      marginRight: wp(5),
                      tintColor:
                        Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                    },
                  ]}
                />
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(true);
                  }}>
                  <Image
                    source={ImagePath.searchicon}
                    style={[
                      styles.icon,
                      {
                        marginRight: wp(5),
                        tintColor:
                          Theme == 'Dark'
                            ? ColorPath.lightgray
                            : ColorPath.gray2,
                      },
                    ]}
                  />
                </TouchableOpacity>

                {!scan && !scanResult && (
                  <TouchableOpacity
                    onPress={() => {
                      activeQR();
                    }}>
                    <Image
                      source={ImagePath.scan2}
                      style={[
                        styles.icon,
                        {
                          tintColor:
                            Theme == 'Dark'
                              ? ColorPath.lightgray
                              : ColorPath.gray2,
                        },
                      ]}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: hp(2),
              }}>
              <Text
                style={[
                  styles.darktext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                  },
                ]}>
                Drag Down To Marketplace
              </Text>
              <Image
                source={ImagePath.down}
                style={[
                  styles.downicon,
                  {
                    tintColor:
                      Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                  },
                ]}
              />
            </View>

            <View style={{marginTop: hp(1)}}>
              <SliderBox
                images={Images}
                sliderBoxHeight={hp(18)}
                ImageComponentStyle={{width: wp(95), borderRadius: 21}}
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

            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: wp(3),
                justifyContent: 'space-between',
                marginTop: hp(1),
                alignItems: 'center',
              }}>
              <View style={{flex: 1}}>
                <Image
                  source={ImagePath.Layer}
                  style={[
                    styles.Layericon,
                    {
                      tintColor:
                        Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                    },
                  ]}
                />
              </View>

              <Text
                style={[
                  styles.Noticetext,
                  {
                    color:
                      Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                  },
                ]}>
                Notice : The Crypto withdrawl are disabled right now read
                more...
              </Text>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Image
                  source={ImagePath.menu}
                  style={[
                    styles.Layericon,
                    {
                      tintColor:
                        Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2,
                    },
                  ]}
                />
              </View>
            </View>

            <View style={styles.flatlistcontainer}>
              <View style={{alignItems: 'center'}}>
                <FlatList
                  numColumns={4}
                  data={list}
                  renderItem={renderItem}
                  showsVerticalScrollIndicator={false}
                />
              </View>
              <View style={{paddingHorizontal: wp(5)}}>
                <View style={{marginTop: hp(3)}}>
                  <SliderBox
                    images={Images}
                    sliderBoxHeight={hp(12)}
                    ImageComponentStyle={{
                      width: wp(90),
                      borderRadius: 21,
                      marginRight: wp(9),
                    }}
                    imageLoadingColor="blue"
                    dotColor="#808080"
                    inactiveDotColor="#808080"
                    autoplay
                    circleLoop
                    paginationBoxStyle={{
                      right: wp(4),
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

                <View style={{marginTop: hp(3)}}>
                  <FlatList
                    horizontal
                    data={data}
                    renderItem={renderItem1}
                    showsVerticalScrollIndicator={false}
                  />
                </View>
                {select == 1 ? (
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
                                Theme == 'Dark'
                                  ? ColorPath.white
                                  : ColorPath.darkblack,
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
                                Theme == 'Dark'
                                  ? ColorPath.white
                                  : ColorPath.darkblack,
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
                                Theme == 'Dark'
                                  ? ColorPath.white
                                  : ColorPath.darkblack,
                            },
                          ]}>
                          24h Chg%
                        </Text>
                      </View>
                    </View>
                  </View>
                ) : null}
              </View>
            </View>

            <View style={{paddingBottom: hp(8)}}>{Favorite()}</View>
          </View>
        </View>
      )}
      {scanResult && (
        <Fragment>
          <Text style={{color: 'red', fontSize: 15}}>Result !</Text>
          <View
            style={
              scanResult ? {backgroundColor: 'blue'} : {backgroundColor: 'blue'}
            }>
            <Text>Type : {result.type}</Text>
            <Text>Result : {result.data}</Text>
            <Text numberOfLines={1}>RawData: {result.rawData}</Text>
            <TouchableOpacity
              onPress={() => {
                scanAgain();
              }}
              style={{
                backgroundColor: 'red',
                padding: 10,
                borderRadius: 15,
              }}>
              <Text style={{color: 'white', fontSize: 15}}>
                Click to Scan again!
              </Text>
            </TouchableOpacity>
          </View>
        </Fragment>
      )}

      {scan && (
        <View style={{marginTop: hp(20)}}>
          <QRCodeScanner
            reactivate={true}
            showMarker={true}
            onRead={onSuccess}
          />
          <View style={{paddingHorizontal: wp(4)}}>
            <TouchableOpacity
              style={{
                backgroundColor: ColorPath.gray2,
                paddingVertical: hp(1),
                borderRadius: 12,
                marginTop: hp(12),
              }}
              onPress={() => setScan(false)}>
              <Text
                style={{
                  color: ColorPath.white,
                  fontSize: 15,
                  textAlign: 'center',
                }}>
                Stop Scan
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default Home;
