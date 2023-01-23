
import React, { useEffect, useState } from 'react';
import { Text, Image, TouchableOpacity, View, FlatList, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SliderBox } from "react-native-image-slider-box";
import ImagePath from '../../assets/ImagePath';
import ColorPath from '../../assets/ColorPath';
import FontPath from '../../assets/FontPath';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';

const Home = ({ navigation }) => {

    const Theme = useSelector((store) => store.ThemeReducer)

    const [select, setSelect] = useState()

    const data = [
        {
            id: 1,
            title: 'Hot'
        },

        {
            id: 2,
            title: 'Favorites'
        },

        {
            id: 3,
            title: 'Gainer'
        },

        {
            id: 4,
            title: 'Loosers'
        },

        {
            id: 5,
            title: '24h Vol'
        },
    ];



    const [list, setList] = useState([
        {
            id: 1,
            Text: 'Deposit',
            images:Theme=='Dark'?ImagePath.deposit: ImagePath.download

        },
        {
            id: 2,
            Text: 'Strategy Trading',
            images:Theme=='Dark'?ImagePath.stockmarketdark: ImagePath.stockmarket

        },
        {
            id: 3,
            Text: 'Battle',
            images:Theme=='Dark'?ImagePath.swordsdark: ImagePath.swords

        },
        {
            id: 4,
            Text: 'Launchpad',
            images:Theme=='Dark'?ImagePath.startupdark: ImagePath.startup

        },
    ])

    const [namelist, setNamelist] = useState([

        {
            id: 1,
            text: 'BNB',
            number: '278.4',
            box: '-0.18%'
        },

        {
            id: 2,
            text: 'BTC',
            number: '19,809.87',
            box: '-1.30%'
        },

        {
            id: 3,
            text: 'ETH',
            number: '1,450.42',
            box: '-1.30%'
        },

        {
            id: 4,
            text: 'XEC',
            number: '0.0004853',
            box: '+1.60%'
        },

        {
            id: 5,
            text: 'SOL',
            number: '30.38',
            box: '-1.30%'
        },

        {
            id: 6,
            text: 'SHIB',
            number: '0.00001193',
            box: '-1.30%'
        },

        {
            id: 7,
            text: 'MATIC',
            number: '0.7785',
            box: '-1.30%'
        },

        {
            id: 8,
            text: 'LUNC',
            number: '0.00013072',
            box: '+5.30%'
        },

        {
            id: 9,
            text: 'ADA',
            number: '0.4329',
            box: '-1.30%'
        },

        {
            id: 10,
            text: 'AVAX',
            number: '17.71',
            box: '-1.30%'
        },


    ])

    const Images = [
        ImagePath.banner,
        ImagePath.banner,
        ImagePath.banner,
        ImagePath.banner,
        ImagePath.banner,
    ]

    const renderItem = ({ item }) => {
        return (
                <TouchableOpacity style={styles.iconbutton}>
                    <Image source={item.images} style={styles.icons} />
                    <Text style={[styles.icontext,{color:Theme=='Dark'?ColorPath.lightgray:ColorPath.darkblack}]}>{item.Text}</Text>
                </TouchableOpacity>
        )
    }


    const renderItem1 = ({ item, index }) => {
        return (
            <View style={{ paddingHorizontal: index == 0 ? 0 : wp(1.5), }}>
                <TouchableOpacity onPress={() => { setSelect(item.id) }} style={{
                    backgroundColor:Theme=='Dark'? select == item.id ? ColorPath.bluedark : ColorPath.blue: select == item.id ?ColorPath.gray2 : ColorPath.lightgray,
                    borderRadius: 8,
                    paddingVertical: hp(.4),
                    paddingHorizontal: wp(1.8)}}>

                    <Text style={{
                        color: select == item.id ? '#FFFFFF' : '#808080',
                        fontFamily: FontPath.Poppins_Medium,
                        fontWeight: '400',
                        lineHeight: 20,
                        textAlign: 'center',
                        fontSize: 13
                    }}>{item.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }


    const renderItem2 = ({ item, index }) => {
        return (
            <>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: hp(1), }}>
                    <View style={{ flex: 1, }}>
                        <Text style={[styles.numbertext,{color:Theme=='Dark'?ColorPath.white:ColorPath.darkblack}]}>{item.text}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Text style={[styles.numbertext,{color:Theme=='Dark'?ColorPath.white:ColorPath.darkblack}]}>{item.number}</Text>
                    </View>

                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={styles.numberbutton}>
                            <Text style={[styles.numbertext, { color: ColorPath.white }]}>{item.box}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </>
        )
    }


    return (
        <ScrollView>
            <View style={[styles.container, { backgroundColor: Theme == 'Dark' ? ColorPath.blue : ColorPath.white, }]}>
                <View style={{ paddingHorizontal: wp(4), paddingVertical: hp(1) }}>
                    <View style={{ flexDirection: 'row', }} >
                        <TouchableOpacity onPress={() => { navigation.openDrawer(); }} style={{ flex: 1, }}>
                            <View style={{ borderWidth: 1, borderColor:Theme=='Dark'?ColorPath.lightgray: ColorPath.gray2, borderRadius: 30, width: 40, height: 40, lineHeight: 40, justifyContent: 'center', alignItems: 'center', }}>
                                <Image source={ImagePath.usericon} style={[styles.profileicon,{tintColor:Theme=='Dark'?ColorPath.lightgray:ColorPath.gray2}]} />
                            </View>
                        </TouchableOpacity>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }} >
                            <Image source={ImagePath.headphone} style={[styles.icon, { marginRight: wp(5),tintColor:Theme=='Dark'?ColorPath.lightgray:ColorPath.gray2 }]} />
                            <Image source={ImagePath.searchicon} style={[styles.icon, { marginRight: wp(5),tintColor:Theme=='Dark'?ColorPath.lightgray:ColorPath.gray2 }]} />
                            <Image source={ImagePath.scan2} style={[styles.icon,{tintColor:Theme=='Dark'?ColorPath.lightgray:ColorPath.gray2}]} />
                        </View>
                    </View>
                </View>


                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: hp(2) }}>
                    <Text style={[styles.darktext,{color:Theme=='Dark'?ColorPath.lightgray:ColorPath.gray2}]}>Drag Down To Marketplace</Text>
                    <Image source={ImagePath.down} style={[styles.downicon,{tintColor:Theme=='Dark'?ColorPath.lightgray:ColorPath.gray2}]} />
                </View>

                <View style={{ marginTop: hp(1), }}>
                    <SliderBox
                        images={Images}
                        sliderBoxHeight={hp(18)}
                        ImageComponentStyle={{ width: wp(95), borderRadius: 21, }}
                        imageLoadingColor='blue'
                        dotColor="#808080"
                        inactiveDotColor='#808080'
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

                <View style={{
                    flexDirection: 'row', paddingHorizontal: wp(3),
                    justifyContent: 'space-between', marginTop: hp(1), alignItems: 'center'
                }}>
                    <View style={{ flex: 1, }}>
                        <Image source={ImagePath.Layer} style={[styles.Layericon,{tintColor:Theme=='Dark'?ColorPath.lightgray:ColorPath.gray2}]} />
                    </View>

                    <Text style={[styles.Noticetext,{color:Theme=='Dark'?ColorPath.white:ColorPath.darkblack}]}>Notice : The Crypto withdrawl are disabled right now read more...</Text>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Image source={ImagePath.menu} style={[styles.Layericon,{tintColor:Theme=='Dark'?ColorPath.lightgray:ColorPath.gray2}]} />
                    </View>
                </View>

                <View style={styles.flatlistcontainer}>
                    <View style={{ alignItems: 'center' }}>
                        <FlatList
                            numColumns={4}
                            data={list}
                            renderItem={renderItem}
                            showsVerticalScrollIndicator={false}
                        />

                    </View>
                    <View style={{ paddingHorizontal: wp(5) }}>
                        <View style={{ marginTop: hp(3) }}>
                            <SliderBox
                                images={Images}
                                sliderBoxHeight={hp(12)}
                                ImageComponentStyle={{ width: wp(90), borderRadius: 21, marginRight: wp(9) }}
                                imageLoadingColor='blue'
                                dotColor="#808080"
                                inactiveDotColor='#808080'
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
                        
                        <View style={{ marginTop: hp(3), }}>
                            <FlatList
                                horizontal
                                data={data}
                                renderItem={renderItem1}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                        <View style={{ paddingHorizontal: wp(1.5) }}>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp(2.5) }}>
                                <View style={{ flex: 1, }}>
                                    <Text style={[styles.nametext,{color:Theme=='Dark'?ColorPath.white:ColorPath.darkblack}]}>Name</Text>
                                </View>

                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={[styles.nametext,{color:Theme=='Dark'?ColorPath.white:ColorPath.darkblack}]}>Last Price</Text>
                                </View>

                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={[styles.nametext,{color:Theme=='Dark'?ColorPath.white:ColorPath.darkblack}]}>24h Chg%</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{flex: 1, paddingHorizontal: wp(6.5), backgroundColor: ColorPath.lightwhite, paddingBottom: hp(8)}}>
                    <FlatList
                        data={namelist}
                        renderItem={renderItem2}
                    // showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default Home;