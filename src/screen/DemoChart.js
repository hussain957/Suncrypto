import React from 'react';
import {Dimensions, Text, View, Image, TouchableOpacity} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import ImagePath from '../assets/ImagePath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ColorPath from '../assets/ColorPath';
import FontPath from '../assets/FontPath';

const DemoChart = ({route, navigation}) => {
  
  const gettype = route.params.F2F;

  return (
    <View style={{flex: 1, backgroundColor: ColorPath.white}}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: wp(4),
          marginTop: hp(2),
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={ImagePath.arrow}
            style={{width: wp(5), height: hp(2.5), resizeMode: 'contain'}}
          />
        </TouchableOpacity>

        <View style={{flex: 1, alignItems: 'center'}}>
          <Text
            style={{
              color: ColorPath.gray2,
              fontSize: 16,
              fontFamily: FontPath.Poppins_Medium,
            }}>
            {gettype}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: wp(4),
          marginTop: hp(2),
        }}>
        <View style={{flex: 1}}>
          <Text
            style={{
              color: 'red',
              fontSize: 17,
              fontFamily: FontPath.Poppins_Bold,
            }}>
            22,868.76{' '}
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 12,
              fontFamily: FontPath.Poppins_Bold,
            }}>
            22,868.76 -1.65%{' '}
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flex: 1}}>
            <View>
              <Text
                style={{
                  color: ColorPath.gray2,
                  fontSize: 12,
                  fontFamily: FontPath.Poppins_Medium,
                }}>
                24h High
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 12,
                  fontFamily: FontPath.Poppins_Medium,
                }}>
                23,303.36
              </Text>
            </View>

            <View>
              <Text
                style={{
                  color: ColorPath.gray2,
                  fontSize: 12,
                  fontFamily: FontPath.Poppins_Medium,
                }}>
                24h Low{' '}
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 12,
                  fontFamily: FontPath.Poppins_Medium,
                }}>
                22,482.00
              </Text>
            </View>
          </View>

          <View style={{flex: 1.3}}>
            <View>
              <Text
                style={{
                  color: ColorPath.gray2,
                  fontSize: 12,
                  fontFamily: FontPath.Poppins_Medium,
                }}>
                24h Vol(BTC){' '}
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 12,
                  fontFamily: FontPath.Poppins_Medium,
                }}>
                145,767.49
              </Text>
            </View>

            <View>
              <Text
                style={{
                  color: ColorPath.gray2,
                  fontSize: 12,
                  fontFamily: FontPath.Poppins_Medium,
                }}>
                24h Vol(BUSD){' '}
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 12,
                  fontFamily: FontPath.Poppins_Medium,
                }}>
                3.35B
              </Text>
            </View>
          </View>
        </View>
      </View>

      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [20, 30, 40, 50, 10],
            },
          ],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default DemoChart;
