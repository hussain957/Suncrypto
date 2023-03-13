import React, {useState} from 'react';
import {Image, View, Text, TouchableOpacity, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SliderBox} from 'react-native-image-slider-box';
import styles from './styles';
import ImagePath from '../../assets/ImagePath';
import ColorPath from '../../assets/ColorPath';
import Navbar from '../../component/Navbar';
import {useSelector} from 'react-redux';
import FontPath from '../../assets/FontPath';
import {ScrollView} from 'react-native-gesture-handler';

const Favourites = ({navigation}) => {
  const [color, setColor] = useState(1);

  const [checkchange, setcheckchange] = useState(true);

  const [coinselect, setCoinselect] = useState(1);

  const Theme = useSelector(store => store.ThemeReducer);

  const Images = [
    ImagePath.banner,
    ImagePath.banner,
    ImagePath.banner,
    ImagePath.banner,
    ImagePath.banner,
  ];

  const Watchlist = [
    {
      id: 1,
      lable: 'Wathlist',
    },
    {
      id: 2,
      lable: 'Coin',
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View style={{flex: 1, paddingHorizontal: wp(3), marginTop: hp(2)}}>
        <TouchableOpacity
          onPress={() => {
            setColor(item.id);
          }}>
          <Text
            style={{
              color:
                Theme == 'Dark'
                  ? color == item.id
                    ? ColorPath.white
                    : ColorPath.lightgray2
                  : color == item.id
                  ? ColorPath.darkblack
                  : ColorPath.lightgray2,
              fontSize: 15,
              fontWeight: '400',
              fontFamily: FontPath.Poppins_Regular,
            }}>
            {item.lable}
          </Text>
        </TouchableOpacity>
        <Image
          source={ImagePath.yellowline}
          style={{
            width: wp(8),
            height: hp(4),
            resizeMode: 'contain',
            alignSelf: 'center',
            marginTop: hp(-2),
            tintColor:
              Theme == 'Dark'
                ? color == item.id
                  ? ColorPath.yellow
                  : ColorPath.blue
                : color == item.id
                ? ColorPath.yellow
                : ColorPath.white,
          }}
        />
      </View>
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

  const renderItem1 = ({item}) => {
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

  const Coin = () => {
    const renderItem2 = ({item}) => {
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
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              {item.number}
            </Text>
            <Text style={styles.number2}>{item.number2}</Text>
          </View>
        </View>
      );
    };

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

    const hotdata = [
      {
        id: 1,
        hottext: 'Hot',
      },

      {
        id: 2,
        hottext: 'Market Cap',
      },

      {
        id: 3,
        hottext: 'Price',
      },

      {
        id: 4,
        hottext: '24h Change',
      },
    ];

    const renderItemhot = ({item, index}) => {
      return (
        <View style={{paddingHorizontal: wp(1.5)}}>
          <TouchableOpacity
            onPress={() => {
              setCoinselect(item.id);
            }}
            style={{
              backgroundColor:
                Theme == 'Dark'
                  ? coinselect == item.id
                    ? ColorPath.bluedark
                    : ColorPath.blue
                  : coinselect == item.id
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
                    ? coinselect == item.id
                      ? ColorPath.white
                      : ColorPath.lightgray
                    : coinselect == item.id
                    ? ColorPath.darkblack
                    : ColorPath.gray2,
                fontFamily: FontPath.Poppins_Medium,
                fontWeight: '400',
                lineHeight: 20,
                textAlign: 'center',
                fontSize: 13,
              }}>
              {item.hottext}
            </Text>
          </TouchableOpacity>
        </View>
      );
    };

    if (color == 2) {
      return (
        <View>
          <FlatList horizontal data={hotdata} renderItem={renderItemhot} />
          <View>
            <View>{Hotcoinlist()}</View>
          </View>
        </View>
      );
    } else {
      return (
        <View>
          {checkchange ? (
            <View>
              <FlatList
                data={select}
                numColumns={2}
                renderItem={renderItem1}
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
            </View>
          ) : (
            <FlatList
              data={List}
              renderItem={renderItem2}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      );
    }
  };

  const Hotcoinlist = () => {
    const renderItem2 = ({item}) => {
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
                {
                  color:
                    Theme == 'Dark' ? ColorPath.white : ColorPath.darkblack,
                },
              ]}>
              {item.number}
            </Text>
            <Text style={styles.number2}>{item.number2}</Text>
          </View>
        </View>
      );
    };

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

    if (coinselect == 2) {
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
    if (coinselect == 3) {
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
    if (coinselect == 4) {
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
        <View style={{marginTop: hp(2)}}>
          <FlatList
            data={List}
            renderItem={renderItem2}
            showsVerticalScrollIndicator={false}
          />
        </View>
      );
    }
  };

  return (
    <ScrollView>
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

        <View>
          <FlatList
            horizontal
            data={Watchlist}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View
          style={{
            paddingVertical: hp(1.6),
          }}>
          {Coin()}
        </View>

        <View
          style={[
            styles.containerbottom,
            {
              backgroundColor:
                Theme == 'Dark' ? ColorPath.blue : ColorPath.white,
            },
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
      </View>
    </ScrollView>
  );
};

export default Favourites;
