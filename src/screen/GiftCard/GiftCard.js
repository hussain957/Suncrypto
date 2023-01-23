
import React from 'react';
import { Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import ImagePath from '../../assets/ImagePath';
import Navbar from '../../component/Navbar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './styles';
import { SliderBox } from "react-native-image-slider-box";
import ColorPath from '../../assets/ColorPath';



const Images = [
    ImagePath.banner,
    ImagePath.banner,
    ImagePath.banner,
    ImagePath.banner,
    ImagePath.banner
]

const GiftCard = ({ navigation }) => {

    return (

        <ScrollView style={styles.container}>
            <View style={{ paddingHorizontal: wp(4), paddingVertical: hp(1) }}>
                <Navbar
                    righticon={ImagePath.angleleft}
                    lefticon2={ImagePath.rongicon}
                    onPress={() => { navigation.goBack(); }}
                    onPress2={() => { navigation.navigate('BottomTab') }}
                />

                <View style={{ marginTop: hp(3) }}>
                    <Text style={styles.Gifttext}>Gift Card</Text>
                    <SliderBox
                        images={Images}
                        sliderBoxHeight={hp(15)}

                        ImageComponentStyle={{ width: wp(90), borderRadius: 13, marginRight: wp(9), marginTop: hp(1) }}
                        imageLoadingColor='blue'
                        dotColor="#808080"
                        inactiveDotColor='white'
                        autoplay
                        circleLoop
                        paginationBoxStyle={{
                            right: 5,
                            bottom: 0,
                            padding: 0,

                        }}
                        dotStyle={{
                            width: 7,
                            height: 7,
                        }}
                    />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp(2) }}>
                    <TouchableOpacity style={styles.whitebox}>
                        <Text style={styles.sendtext}>Send Gift</Text>
                        <Text style={styles.Createtext}>Create and send gift card</Text>
                        <Image source={ImagePath.giftbox} style={styles.giftboxicon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.whitebox}>
                        <Text style={styles.sendtext}>Redeem</Text>
                        <Text style={styles.Createtext}>Enter Redemption Code</Text>
                        <Image source={ImagePath.GiftBox} style={styles.giftboxicon2} />
                    </TouchableOpacity>
                </View>

                <View style={styles.graybox}>
                    <View style={{ flex: 1 }}>
                        <Image source={ImagePath.transfer} style={styles.transfericon} />
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={styles.sendtext}>Transfer Crypto</Text>
                        <Text style={styles.Createtext}>Send Instantly with 0 Fees</Text>
                    </View>

                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Image source={ImagePath.angleleft1} style={styles.anglelefticon} />
                    </View>
                </View>

                <View style={styles.graybox2}>
                    <Text style={styles.Populartext}>Popular Cards</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View>
                            <View style={{ backgroundColor: ColorPath.white, height: hp(12), width: wp(42), borderRadius: 12, marginTop: hp(1) }}></View>
                            <Text style={styles.Pexpaytext}>Pexpay 💙</Text>
                        </View>
                        <View>
                            <View style={{ backgroundColor: ColorPath.white, height: hp(12), width: wp(42), borderRadius: 12, marginTop: hp(1) }}></View>
                            <Text style={styles.Pexpaytext}>Moonblessing</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View>
                            <View style={{ backgroundColor: ColorPath.white, height: hp(12), width: wp(42), borderRadius: 12, marginTop: hp(1) }}></View>
                            <Text style={styles.Pexpaytext}>Trust Wallet</Text>
                        </View>
                        <View>
                            <View style={{ backgroundColor: ColorPath.white, height: hp(12), width: wp(42), borderRadius: 12, marginTop: hp(1) }}></View>
                            <Text style={styles.Pexpaytext}>#HODL 💛</Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.graybox2,{height: hp(18),}]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginTop:hp(1) }}>
                        <Text style={styles.Populartext}>Popular Cards</Text>
                        <Text style={[styles.Createtext, { textDecorationLine: 'underline' }]}>View History</Text>
                    </View>

                    <View style={{ flex: 1, alignItems: 'center',justifyContent:'center' }}>
                        <Image source={ImagePath.icon} style={styles.icon} />
                        <Text style={[styles.Createtext, { color:ColorPath.darkblack,marginTop:5 }]}>No Data Available, Create One Now!</Text>
                    </View>

                </View>
            </View>



        </ScrollView >
    );
};


export default GiftCard;
