import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import ColorPath from '../../assets/ColorPath';
import FontPath from '../../assets/FontPath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RNPickerSelect from 'react-native-picker-select';
import ImagePath from '../../assets/ImagePath';

const Trades = ({navigation}) => {
  const [select, setSelect] = useState(2);
  const [selects, setSelects] = useState(1);
  const [selects1, setSelects1] = useState(1);

  let Title = [{label: 'Limit', value: '1'}];
  let amount = [{label: '0.00000001', value: '1'}];
  let cross = [{label: 'Cross', value: '1'}];
  let normal = [{label: 'Normal', value: '1'}];
  let currency = [{label: 'INR', value: '1'}];

  const data = [
    {
      id: 1,
      title: 'Convert',
      route: 'Convert',
    },

    {
      id: 2,
      title: 'Spot',
    },

    {
      id: 3,
      title: 'Margin',
    },

    {
      id: 4,
      title: 'Fiat',
    },

    {
      id: 5,
      title: 'P2P',
      route: 'P2P',
    },

    {
      id: 6,
      title: 'Auto-Invest',
      route: 'Autoinvest',
    },
  ];

  const Nextscreen = goHome => {
    navigation.navigate(goHome.route);
  };

  const onpressItem = item => {
    if (item.id == 1) {
      Nextscreen(item);
    } else if (item.id == 5) {
      Nextscreen(item);
    } else if (item.id == 6) {
      Nextscreen(item);
    } else {
      Convert();
    }
  };

  const renderItem1 = ({item, index}) => {
    return (
      <View style={{paddingHorizontal: wp(1.5)}}>
        <TouchableOpacity
          onPress={() => {
            setSelect(item.id);
            onpressItem(item, index);
          }}
          style={{
            backgroundColor:
              select == item.id ? ColorPath.gray2 : ColorPath.lightgray,
            borderRadius: 8,
            paddingVertical: hp(0.4),
            paddingHorizontal: wp(1.8),
          }}>
          <Text
            style={{
              color: select == item.id ? '#FFFFFF' : '#808080',
              fontFamily: FontPath.Poppins_Medium,
              fontWeight: '400',
              lineHeight: 20,
              textAlign: 'center',
              fontSize: 12,
            }}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const Order = () => {
    if (selects == 1) {
      return (
        <View>
          <Text
            style={{
              color: ColorPath.darkblack,
              fontSize: 15,
              fontFamily: FontPath.Poppins_Medium,
              marginTop: hp(2),
            }}>
            Open Orders
          </Text>
        </View>
      );
    }
    if (selects == 2) {
      return (
        <View>
          <Text
            style={{
              color: ColorPath.darkblack,
              fontSize: 15,
              fontFamily: FontPath.Poppins_Medium,
              marginTop: hp(2),
            }}>
            Funds
          </Text>
        </View>
      );
    }
  };

  const openorder = () => {
    if (selects1 == 1) {
      return (
        <View>
          <Text
            style={{
              color: ColorPath.darkblack,
              fontSize: 15,
              fontFamily: FontPath.Poppins_Medium,
              marginTop: hp(2),
            }}>
            Open Orders
          </Text>
        </View>
      );
    }
    if (selects1 == 2) {
      return (
        <View>
          <Text
            style={{
              color: ColorPath.darkblack,
              fontSize: 15,
              fontFamily: FontPath.Poppins_Medium,
              marginTop: hp(2),
            }}>
            Positions
          </Text>
        </View>
      );
    }
  };

  const Convert = () => {
    const renderItem = ({item, index}) => {
      return (
        <View style={{paddingHorizontal: index == 0 ? 0 : wp(1.5)}}>
          <TouchableOpacity
            onPress={() => {
              setSelects(item.id);
            }}>
            <Text
              style={{
                color:
                  selects == item.id
                    ? ColorPath.darkblack
                    : ColorPath.lightgray2,
                borderBottomWidth: 3,
                borderBottomColor:
                  selects == item.id ? ColorPath.yellow : ColorPath.white,
                fontFamily: FontPath.Poppins_Medium,
                fontWeight: '400',
                textAlign: 'center',
                fontSize: 15,
                marginHorizontal: index == 0 ? 0 : wp(4),
              }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        </View>
      );
    };

    const data = [
      {
        id: 1,
        title: 'Open Orders (0)',
      },

      {
        id: 2,
        title: 'Funds',
      },
    ];

    const renderItems = ({item, index}) => {
      return (
        <View style={{paddingHorizontal: index == 0 ? 0 : wp(1.5)}}>
          <TouchableOpacity
            onPress={() => {
              setSelects1(item.id);
            }}>
            <Text
              style={{
                color:
                  selects == item.id
                    ? ColorPath.darkblack
                    : ColorPath.lightgray2,
                borderBottomWidth: 3,
                borderBottomColor:
                  selects == item.id ? ColorPath.yellow : ColorPath.white,
                fontFamily: FontPath.Poppins_Medium,
                fontWeight: '400',
                textAlign: 'center',
                fontSize: 15,
                marginHorizontal: index == 0 ? 0 : wp(4),
              }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        </View>
      );
    };

    const datas = [
      {
        id: 1,
        title: 'Open Orders (0)',
      },

      {
        id: 2,
        title: 'Positions (0)',
      },
    ];

    if (select == 2) {
      return (
        <>
          <Text style={styles.numbert}>+0.00%</Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: hp(1),
            }}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: hp(1),
                }}>
                <TouchableOpacity
                  style={[
                    styles.button,
                    {
                      borderTopLeftRadius: 10,
                      borderBottomLeftRadius: 10,
                    },
                  ]}>
                  <Text style={styles.buttontext}>Buy</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.button,
                    {
                      backgroundColor: ColorPath.lightgray,
                      borderTopRightRadius: 10,
                      borderBottomRightRadius: 10,
                    },
                  ]}>
                  <Text style={[styles.buttontext, {color: ColorPath.gray2}]}>
                    Sell
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{marginTop: hp(3)}}>
                <RNPickerSelect
                  useNativeAndroidPickerStyle={false}
                  items={Title}
                  placeholder={{label: 'Select', value: null,}}
                  // value={state.selectLanguage}
                  style={pickerSelectStyles}
                  onValueChange={value => console.log(value)}
                  Icon={() => {
                    return (
                      <Image
                        source={ImagePath.Downaero}
                        style={{
                          width: wp(3),
                          height: hp(1.5),
                          top: hp(1.3),
                          right: wp(6),
                          resizeMode: 'contain',
                          position: 'absolute',
                        }}
                      />
                    );
                  }}
                />
              </View>
              <View style={styles.graybox}>
                <TouchableOpacity>
                  <Text style={styles.price}>-</Text>
                </TouchableOpacity>
                <View>
                  <Text style={styles.price}>Price(--)</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.price}>+</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.graybox}>
                <TouchableOpacity>
                  <Text style={styles.price}>-</Text>
                </TouchableOpacity>
                <View>
                  <Text style={styles.price}>Amount(--)</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.price}>+</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.totalbox}>
                <Text style={[styles.price, {textAlign: 'center'}]}>
                  Total(--)
                </Text>
              </View>
              <TouchableOpacity style={styles.greenbox}>
                <Text style={[styles.buttontext, {fontSize: 15}]}>Buy--</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flex: 1,
                marginLeft: wp(4),
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flex: 1}}>
                  <Text style={[styles.price, {fontSize: 14}]}>Price</Text>
                  <Text style={[styles.price, {fontSize: 14}]}>(--)</Text>
                  <Text style={[styles.price, {fontSize: 14}]}>--</Text>
                  <Text style={[styles.price, {fontSize: 14}]}>--</Text>
                  <Text style={[styles.price, {fontSize: 14}]}>--</Text>
                  <Text style={[styles.price, {fontSize: 14}]}>--</Text>
                  <Text style={[styles.price, {fontSize: 14}]}>--</Text>
                  <Text style={[styles.price, {fontSize: 14}]}>--</Text>
                  <Text style={[styles.price, {fontSize: 14}]}>--</Text>
                  <Text style={[styles.price, {fontSize: 14}]}>--</Text>
                  <Text style={[styles.price, {fontSize: 14}]}>--</Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <Text style={[styles.price, {fontSize: 14}]}>Amount</Text>
                  <Text style={[styles.price, {fontSize: 14}]}>(--)</Text>
                  <Text style={[styles.price, {fontSize: 14}]}>--</Text>
                  <Text style={[styles.price, {fontSize: 14}]}>--</Text>
                  <Text style={[styles.price, {fontSize: 14}]}>--</Text>
                  <Text style={[styles.price, {fontSize: 14}]}>--</Text>
                  <Text style={[styles.price, {fontSize: 14}]}>--</Text>
                  <Text style={[styles.price, {fontSize: 14}]}>--</Text>
                  <Text style={[styles.price, {fontSize: 14}]}>--</Text>
                  <Text style={[styles.price, {fontSize: 14}]}>--</Text>
                  <Text style={[styles.price, {fontSize: 14}]}>--</Text>
                </View>
              </View>
              <View style={{marginTop: hp(1)}}>
                <RNPickerSelect
                  useNativeAndroidPickerStyle={false}
                  items={amount}
                  placeholder={{label: 'Select', value: null}}
                  // value={state.selectLanguage}
                  style={pickerSelectStyles}
                  onValueChange={value => console.log(value)}
                  Icon={() => {
                    return (
                      <Image
                        source={ImagePath.Downaero}
                        style={{
                          width: wp(3),
                          height: hp(1.5),
                          top: hp(1.4),
                          right: wp(6),
                          resizeMode: 'contain',
                          position: 'absolute',
                        }}
                      />
                    );
                  }}
                />
              </View>
            </View>
          </View>
          <View style={{marginTop: hp(3)}}>
            <FlatList
              horizontal
              data={data}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
          </View>
          <View>{Order()}</View>
        </>
      );
    }

    if (select == 3) {
      return (
        <>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: hp(1),
            }}>
            <Text
              style={[
                styles.numbert,
                {
                  fontSize: 16,
                  color: ColorPath.darkblack,
                  fontFamily: FontPath.Poppins_Bold,
                },
              ]}>
              BTC/USDT
            </Text>
            <Text style={styles.numbert}> +1.25%</Text>
          </View>

          <View
            style={{
              marginTop: hp(3),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flex: 1}}>
              <View style={{flexDirection: 'row'}}>
                <RNPickerSelect
                  useNativeAndroidPickerStyle={false}
                  items={cross}
                  placeholder={{label: 'Select', value: null}}
                  // value={state.selectLanguage}
                  style={pickerSelect}
                  onValueChange={value => console.log(value)}
                  Icon={() => {
                    return (
                      <Image
                        source={ImagePath.Downaero}
                        style={{
                          width: wp(3),
                          height: hp(1.5),
                          top: hp(1.3),
                          right: wp(6),
                          resizeMode: 'contain',
                          position: 'absolute',
                        }}
                      />
                    );
                  }}
                />

                <TouchableOpacity
                  style={[
                    styles.button,
                    {
                      borderRadius: 10,
                      backgroundColor: ColorPath.lightgray,
                      marginLeft: wp(2),
                    },
                  ]}>
                  <Text
                    style={[styles.buttontext, {color: ColorPath.darkblack}]}>
                    Borrow
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Text style={styles.margintext}>Margin Level</Text>
              <Text style={[styles.margintext, {color: ColorPath.green, fontSize: 13}]}>
                999.00
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: hp(1),
            }}>
            <View>
              <View>
                <RNPickerSelect
                  useNativeAndroidPickerStyle={false}
                  items={normal}
                  placeholder={{label: 'Select', value: null}}
                  // value={state.selectLanguage}
                  style={pickerSelectStyles}
                  onValueChange={value => console.log(value)}
                  Icon={() => {
                    return (
                      <Image
                        source={ImagePath.Downaero}
                        style={{
                          width: wp(3),
                          height: hp(1.5),
                          top: hp(1.4),
                          right: wp(6),
                          resizeMode: 'contain',
                          position: 'absolute',
                        }}
                      />
                    );
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: hp(1),
                }}>
                <TouchableOpacity
                  style={[
                    styles.button,
                    {
                      borderTopLeftRadius: 10,
                      borderBottomLeftRadius: 10,
                    },
                  ]}>
                  <Text style={styles.buttontext}>Buy</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.button,
                    {
                      backgroundColor: ColorPath.lightgray,
                      borderTopRightRadius: 12,
                      borderBottomRightRadius: 12,
                    },
                  ]}>
                  <Text style={[styles.buttontext, {color: ColorPath.gray2}]}>
                    Sell
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{marginTop: hp(3)}}>
                <RNPickerSelect
                  useNativeAndroidPickerStyle={false}
                  items={Title}
                  placeholder={{label: 'Select', value: null}}
                  // value={state.selectLanguage}
                  style={pickerSelectStyles}
                  onValueChange={value => console.log(value)}
                  Icon={() => {
                    return (
                      <Image
                        source={ImagePath.Downaero}
                        style={{
                          width: wp(3),
                          height: hp(1.5),
                          top: hp(1.4),
                          right: wp(6),
                          resizeMode: 'contain',
                          position: 'absolute',
                        }}
                      />
                    );
                  }}
                />
              </View>
              <View style={styles.graybox}>
                <TouchableOpacity>
                  <Text style={styles.price}>-</Text>
                </TouchableOpacity>
                <View>
                  <Text style={styles.price}>Price(--)</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.price}>+</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.graybox}>
                <TouchableOpacity>
                  <Text style={styles.price}>-</Text>
                </TouchableOpacity>
                <View>
                  <Text style={styles.price}>Amount(--)</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.price}>+</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.totalbox}>
                <Text style={[styles.price, {textAlign: 'center'}]}>
                  Total(--)
                </Text>
              </View>
              <TouchableOpacity style={styles.greenbox}>
                <Text style={[styles.buttontext, {fontSize: 15}]}>Buy BTC</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flex: 1,
                marginLeft: wp(4),
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flex: 1}}>
                  <Text style={[styles.price, {fontSize: 12}]}>Price </Text>
                  <Text style={[styles.price, {fontSize: 10}]}>(USDT)</Text>
                  <Text style={[styles.price, {fontSize: 10}]}>23,194.38</Text>
                  <Text style={[styles.price, {fontSize: 10}]}>23,194.38</Text>
                  <Text style={[styles.price, {fontSize: 10}]}>23,194.37</Text>
                  <Text style={[styles.price, {fontSize: 10}]}>23,194.36</Text>
                  <Text style={[styles.price, {fontSize: 10}]}>23,194.12</Text>
                  <Text style={[styles.price, {fontSize: 10}]}>23,194.11</Text>
                  <Text style={[styles.price, {fontSize: 10}]}>23,194.00</Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <Text style={[styles.price, {fontSize: 10}]}>Amount</Text>
                  <Text style={[styles.price, {fontSize: 10}]}>(BTC)</Text>
                  <Text style={[styles.price, {fontSize: 10}]}>0.19089</Text>
                  <Text style={[styles.price, {fontSize: 10}]}>0.34485</Text>
                  <Text style={[styles.price, {fontSize: 10}]}>0.13028</Text>
                  <Text style={[styles.price, {fontSize: 10}]}>0.19089</Text>
                  <Text style={[styles.price, {fontSize: 10}]}>0.02260</Text>
                  <Text style={[styles.price, {fontSize: 10}]}>0.1200</Text>
                  <Text style={[styles.price, {fontSize: 10}]}>0.00770</Text>
                </View>
              </View>
              <Text style={[styles.price, {fontSize: 13, textAlign: 'center'}]}>
                23192.64
              </Text>
              <Text style={[styles.price, {fontSize: 10, textAlign: 'center'}]}>
                1,915,712.06
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flex: 1}}>
                  <Text style={[styles.price, {fontSize: 10}]}>23,193.72</Text>
                  <Text style={[styles.price, {fontSize: 10}]}>23,193.60</Text>
                  <Text style={[styles.price, {fontSize: 10}]}>23,193.33</Text>
                  <Text style={[styles.price, {fontSize: 10}]}>23,193.32</Text>
                  <Text style={[styles.price, {fontSize: 10}]}>23,193.25</Text>
                  <Text style={[styles.price, {fontSize: 10}]}>23,193.21</Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <Text style={[styles.price, {fontSize: 10}]}>0.00066</Text>
                  <Text style={[styles.price, {fontSize: 10}]}>0.04000</Text>
                  <Text style={[styles.price, {fontSize: 10}]}>0.02843</Text>
                  <Text style={[styles.price, {fontSize: 10}]}>0.00066</Text>
                  <Text style={[styles.price, {fontSize: 10}]}>0.00678</Text>
                  <Text style={[styles.price, {fontSize: 10}]}>0.0485</Text>
                </View>
              </View>
              <View style={{marginTop: hp(1)}}>
                <RNPickerSelect
                  useNativeAndroidPickerStyle={false}
                  items={amount}
                  placeholder={{label: 'Select', value: null}}
                  // value={state.selectLanguage}
                  style={pickerSelectStyles}
                  onValueChange={value => console.log(value)}
                  Icon={() => {
                    return (
                      <Image
                        source={ImagePath.Downaero}
                        style={{
                          width: wp(3),
                          height: hp(1.5),
                          top: hp(1.4),
                          right: wp(6),
                          resizeMode: 'contain',
                          position: 'absolute',
                        }}
                      />
                    );
                  }}
                />
              </View>
            </View>
          </View>
          <View style={{marginTop: hp(3)}}>
            <FlatList
              horizontal
              data={datas}
              renderItem={renderItems}
              showsVerticalScrollIndicator={false}
            />
          </View>
          <View>{openorder()}</View>
        </>
      );
    }

    if (select == 4) {
      return (
        <View style={{marginTop: hp(3)}}>
          <Text style={styles.price}>Select Currency</Text>
          <View style={{marginTop: hp(1)}}>
            <RNPickerSelect
              useNativeAndroidPickerStyle={false}
              items={currency}
              placeholder={{label: 'Select', value: null}}
              // value={state.selectLanguage}
              style={pickercurrency}
              onValueChange={value => console.log(value)}
              Icon={() => {
                return (
                  <Image
                    source={ImagePath.Downaero}
                    style={{
                      width: wp(3),
                      height: hp(1.5),
                      top: hp(2.2),
                      right: wp(6),
                      resizeMode: 'contain',
                      position: 'absolute',
                    }}
                  />
                );
              }}
            />
          </View>
          <Text style={styles.price}>Start to pay </Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={{marginTop: hp(3)}}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={data}
          renderItem={renderItem1}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View>{Convert()}</View>
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    backgroundColor: ColorPath.lightgray,
    borderRadius: 8,
    color: ColorPath.gray2,
    fontSize: 13,
    paddingLeft: wp(3),
    height: hp(4.3),
  },
  placeholder: {
    color: ColorPath.gray2,
  },
});

const pickerSelect = StyleSheet.create({
  inputAndroid: {
    backgroundColor: ColorPath.lightgray,
    borderRadius: 8,
    color: ColorPath.gray2,
    fontSize: 13,
    paddingLeft: wp(3),
    height: hp(4.3),
    width: wp(33),
  },
  placeholder: {
    color: ColorPath.gray2,
  },
});

const pickercurrency = StyleSheet.create({
  inputAndroid: {
    backgroundColor: ColorPath.lightgray,
    borderRadius: 8,
    color: ColorPath.darkblack,
    fontSize: 13,
    paddingLeft: wp(3),
    height: hp(6.6),
  },
  placeholder: {
    color: ColorPath.gray2,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorPath.white,
    paddingHorizontal: wp(4),
  },
  button: {
    backgroundColor: ColorPath.green,
    paddingVertical: hp(0.8),
    width: wp(25),
  },

  numbert: {
    color: 'green',
    fontSize: 13,
    fontFamily: FontPath.Poppins_Medium,
    marginTop: hp(1),
  },

  buttontext: {
    color: ColorPath.white,
    fontSize: 12,
    fontFamily: FontPath.Poppins_Medium,
    textAlign: 'center',
  },

  graybox: {
    backgroundColor: ColorPath.lightgray,
    paddingVertical: hp(1),
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    marginTop: hp(1),
  },
  price: {
    color: ColorPath.gray2,
    fontSize: 14,
    fontFamily: FontPath.Poppins_Medium,
    marginTop: hp(0.5),
  },

  totalbox: {
    backgroundColor: ColorPath.lightgray,
    paddingVertical: hp(1),
    borderRadius: 10,
    marginTop: hp(1),
  },

  greenbox: {
    backgroundColor: ColorPath.green,
    paddingVertical: hp(1.5),
    borderRadius: 10,
    alignItems: 'center',
    marginTop: hp(2),
  },

  margintext: {
    color: ColorPath.gray2,
    fontSize: 14,
    fontFamily: FontPath.Poppins_Medium,
  },
});

export default Trades;
