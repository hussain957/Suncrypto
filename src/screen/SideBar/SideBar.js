import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ColorPath from '../../assets/ColorPath';
import FontPath from '../../assets/FontPath';
import ImagePath from '../../assets/ImagePath';
import Navbar from '../../component/Navbar';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated from 'react-native-reanimated';
import { transform } from '@babel/core';
import { useSelector, useDispatch } from 'react-redux';
import { ChangeTheme } from '../../Redux/Actions/Action';


const SideBar = ({ navigation }) => {

    const dispatch = useDispatch()
    const Theme = useSelector((store) => store.ThemeReducer)


    const onclick = () => {
        AsyncStorage.setItem('CheckLocalTheme', Theme)
        dispatch(ChangeTheme(Theme == 'Dark' ? 'Light' : 'Dark'))
    }

    const data = [
        {
            id: 1,
            Image: ImagePath.taskcenter,
            text: 'Task Center',
            icon: ImagePath.Rightaero,
            routes: 'TaskCenter'
        },

        {
            id: 2,
            Image: ImagePath.trophy2,
            text: 'Reward Center',
            icon: ImagePath.Rightaero,
            routes: 'RewardCenter'


        },

        {
            id: 3,
            Image: ImagePath.useradd,
            text: 'My Referral ID',
            icon: ImagePath.Rightaero,
            routes: 'ReferralId'

        },

        {
            id: 4,
            Image: ImagePath.money,
            text: 'Pay',
            icon: ImagePath.Rightaero,
            routes: 'PayId'

        },

        {
            id: 5,
            Image: ImagePath.gift,
            text: 'Gift Card',
            icon: ImagePath.Rightaero,
            routes: 'GiftCard'

        },

        {
            id: 6,
            Image: ImagePath.gift1,
            text: 'My Gift',
            icon: ImagePath.Rightaero

        }
    ]

    const list = [
        {
            id: 1,
            Image: ImagePath.bell,
            text: 'Notification',

        },

        {
            id: 2,
            Image: ImagePath.payment,
            text: 'Payment Methods',

        },

        {
            id: 3,
            Image: ImagePath.shieldcheck,
            text: 'Security ',

        },

        {
            id: 4,
            Image: ImagePath.settings,
            text: 'Settings',

        },

    ]


    const list1 = [
        {
            id: 1,
            Image: ImagePath.interrogation,
            text: 'Help & Support ',

        },

        {
            id: 2,
            Image: ImagePath.share,
            text: 'Share The App',

        },

    ]

    const NextScreen = (goHome) => {
        navigation.navigate(goHome.routes)
    }

    const renderItem = ({ item }) => {
        return (

            <TouchableOpacity onPress={() => { NextScreen(item) }} style={{ flexDirection: 'row', paddingBottom: wp(8), paddingVertical: hp(3), }}>
                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <Image source={item.Image} style={[styles.gemicon, { tintColor: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblue }]} />
                    <Text style={[styles.tasktext, { color: Theme == 'Dark' ? ColorPath.white : ColorPath.bluedark }]}>{item.text}</Text>
                </View>

                <View style={{ flex: 1, alignItems: 'flex-end', }}>
                    <Image source={item.icon} style={[styles.Rightaero2, { tintColor: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblue }]} />
                </View>
            </TouchableOpacity>
        )
    }

    const renderItem1 = ({ item }) => {
        return (

            <TouchableOpacity onPress={() => { NextScreen(item) }} style={{ flexDirection: 'row', paddingBottom: wp(8), paddingVertical: hp(3), }}>
                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <Image source={item.Image} style={[styles.gemicon, { tintColor: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblue }]} />
                    <Text style={[styles.tasktext, { color: Theme == 'Dark' ? ColorPath.white : ColorPath.bluedark }]}>{item.text}</Text>
                </View>

                <View style={{ flex: 1, alignItems: 'flex-end', }}>
                    <Image source={item.icon} style={[styles.Rightaero2, { tintColor: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblue }]} />
                </View>
            </TouchableOpacity>
        )
    }


    const renderItem2 = ({ item }) => {
        return (

            <TouchableOpacity onPress={() => { NextScreen(item) }} style={{ flexDirection: 'row', paddingBottom: wp(8), paddingVertical: hp(3), }}>
                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <Image source={item.Image} style={[styles.gemicon, { tintColor: Theme == 'Dark' ? ColorPath.white : ColorPath.darkblue }]} />
                    <Text style={[styles.tasktext, { color: Theme == 'Dark' ? ColorPath.white : ColorPath.bluedark }]}>{item.text}</Text>
                </View>

                <View style={{ flex: 1, alignItems: 'flex-end', }}>
                    <Image source={item.icon} style={styles.Rightaero2} />
                </View>
            </TouchableOpacity>
        )
    }



    return (

        <View style={[styles.container, { backgroundColor: Theme == 'Dark' ? ColorPath.blue : ColorPath.white, }]}>
            <StatusBar backgroundColor={Theme == 'Dark' ? ColorPath.blue : ColorPath.white} barStyle={Theme == 'Dark' ? 'default' : 'dark-content'} />

            <View style={{ paddingHorizontal: wp(4), paddingVertical: hp(1) }}>
                <Navbar
                    righticon={Theme == 'Dark' ? ImagePath.angleleft2 : ImagePath.angleleft}
                    lefticon={Theme == 'Dark' ? ImagePath.headphone1 : ImagePath.headphone}
                    lefticon2={Theme == 'Dark' ? ImagePath.Weather1 : ImagePath.Weather}
                    onPress={() => { navigation.closeDrawer(); }}
                    onPress2={() => { onclick() }}
                />


                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp(3) }}>
                    <View style={{ borderWidth: 1, borderColor: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2, borderRadius: 30, width: 60, height: 60, lineHeight: 60, justifyContent: 'center', alignItems: 'center', }}>

                        <Image source={ImagePath.usericon} style={[styles.usericon, { tintColor: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2 }]} />
                    </View>
                    <View style={{ marginLeft: wp(2) }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={[styles.suncryptotext, { color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2 }]}>Suncrypto-User5452342</Text>
                            <Image source={ImagePath.verifieduser} style={[styles.verifieduser, { tintColor: Theme == 'Dark' ? ColorPath.white : ColorPath.black }]} />

                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                            <Text style={[styles.Regulartext, { color: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2 }]}>ID : 445234234</Text>
                            <Image source={ImagePath.copyicon} style={[styles.copyicon, { tintColor: Theme == 'Dark' ? ColorPath.lightgray : ColorPath.gray2 }]} />
                        </View>
                    </View>
                </View>

                <View style={styles.regularview}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, }}>
                        <Image source={ImagePath.gem} style={styles.gemicon} />
                        <Text style={styles.Regulartext}>REGULAR</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'flex-end' }}>
                        <Text style={styles.Usetext}>Use Suncrypto to get discount</Text>
                        <Image source={ImagePath.Rightaero} style={styles.Rightaero} />
                    </View>
                </View>
            </View>


            <ScrollView>

                <View style={[styles.listcontainer, { backgroundColor: Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray4, }]}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}

                    />
                </View>

                <View style={styles.listcontainer1}>
                    <FlatList
                        data={list}
                        renderItem={renderItem1}
                    />
                </View>

                <View style={[styles.listcontainer2, { backgroundColor: Theme == 'Dark' ? ColorPath.bluedark : ColorPath.lightgray4, }]}>
                    <FlatList
                        data={list1}
                        renderItem={renderItem2}
                    />
                </View>
            </ScrollView >
        </View >

    );
}

export default SideBar;