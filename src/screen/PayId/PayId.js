import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, FlatList, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Navbar from '../../component/Navbar';
import styles from './styles';
import ImagePath from '../../assets/ImagePath';
import ColorPath from '../../assets/ColorPath';



const data = [
    {
        id: 1,
        text: 'PUBG'
    },

    {
        id: 2,
        text: 'STREAM'

    },

    {
        id: 3,
        text: 'MOBILE TOPUP'

    }
]

const renderItem = ({ item ,index}) => {
    return (
        <View style={{paddingHorizontal: index == 0 ? 0 : wp(2), }}>
            <View style={{ backgroundColor: ColorPath.darkblack, height: hp(12), width: wp(35), borderRadius: 12, marginTop: hp(1) }}></View>
            <Text style={styles.pubgtext}>{item.text}</Text>
        </View>
    )
}

const PayId = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor={'#FDBF00'} barStyle={'dark-content'} />
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#FDBF00', 'rgba(253, 191, 0, 0) 100%)']} style={{ height: hp(25), }}>
                <View style={styles.viewcontainer}>
                    <Navbar
                        onPress={() => { navigation.goBack(); }}
                        righticon={ImagePath.angleleft}
                        lefticon2={ImagePath.rongicon}
                        onPress2={() => { navigation.navigate('BottomTab') }}
                    />
                    <Text style={styles.Suncryptotext}>Suncrypto Pay</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp(.3) }}>
                        <Text style={styles.Paytext}>My Pay ID : 443610327</Text>
                        <Image source={ImagePath.copyicon} style={styles.copyicon} />

                    </View>
                </View>
            </LinearGradient>
            <View style={{ paddingHorizontal: wp(4), paddingVertical: hp(2) }}>
                <View style={styles.whitebox}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', }}>
                        <TouchableOpacity  >
                            <Image source={ImagePath.send} style={styles.sendicon} />
                            <Text style={styles.sendtext}>Send</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', }}>

                        <TouchableOpacity>
                            <Image source={ImagePath.send1} style={[styles.sendicon, { marginLeft: wp(2) }]} />
                            <Text style={styles.sendtext}>Receive</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', }}>

                        <TouchableOpacity>
                            <Image source={ImagePath.qrcode1} style={styles.sendicon} />
                            <Text style={styles.sendtext}>Scan</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginTop: hp(3) }}>
                    <Text style={styles.Latesttext}>Latest Offers</Text>
                    <View style={{ backgroundColor: ColorPath.darkblack, height: hp(13), borderRadius: 13, marginTop: hp(1) }}></View>
                    <View style={{ backgroundColor: ColorPath.darkblack, height: hp(13), borderRadius: 13, marginTop: hp(2) }}></View>
                </View>

                <View style={{ marginTop: hp(3), }}>
                    <Text style={styles.Latesttext}>Hot Deals</Text>
                    <FlatList
                        horizontal
                        data={data}
                        renderItem={renderItem}
                    />
                </View>

                <View style={{ marginTop: hp(3) }}>
                    <Text style={styles.Latesttext}>Live on crypto</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <View style={{ backgroundColor: ColorPath.darkblack, height: hp(28), borderRadius: 13, marginTop: hp(1), width: wp(44) }}></View>
                            <Text style={styles.pubgtext}>Bitrefill</Text>
                        </View>
                        <View>

                            <View style={{ backgroundColor: ColorPath.darkblack, height: hp(28), borderRadius: 13, marginTop: hp(1), width: wp(44) }}></View>
                            <Text style={styles.pubgtext}>Coingate</Text>
                        </View>

                    </View>
                </View>

            </View>

        </ScrollView>
    );
}

export default PayId;