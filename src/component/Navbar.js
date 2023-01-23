import React, { useEffect, useRef, useState } from 'react';
import { Image, StyleSheet, View, Animated, Easing, TouchableOpacity, PanResponder } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Navbar = (props) => {

    // const fadeAnim = useRef(new Animated.Value(0)).current;

    // const fadeIn = () => {
    //     Animated.timing(fadeAnim, {
    //         toValue: 1,
    //         duration: 5000,
    //         easing:Easing.linear
    //     }).start();
    // };

    // const fadeOut = () => {
    //     Animated.timing(fadeAnim, {
    //         toValue: 0,
    //         duration: 3000,
    //         easing:Easing.linear
    //     }).start();
    // };


    return (
        <View style={{ flexDirection: 'row', }} >
            <TouchableOpacity onPress={props.onPress} style={{ flex: 1, }}>
                <Image source={props.righticon} style={styles.profileicon} />
            </TouchableOpacity>
            <View style={{ flex: .3, flexDirection: 'row', justifyContent: 'space-between', }} >
                <TouchableOpacity onPress={props.onPress1} >
                    <Image source={props.lefticon} style={styles.profileicon} />
                </TouchableOpacity>

                {/* <Animated.View
                    style={
                        {
                            // Bind opacity to animated value
                            opacity: fadeAnim
                        }
                    }
                >
                </Animated.View> */}
                {/* onPressIn={fadeIn} onPressOut={fadeOut} */}
                <TouchableOpacity 
                    onPress={props.onPress2} >
                    <Image source={props.lefticon2} style={styles.profileicon} />
                </TouchableOpacity>

            </View>
        </View>

    )

}

const styles = StyleSheet.create({

    icon: {
        width: wp(5),
        height: hp(2.5),
        resizeMode: 'contain',
    },

    profileicon: {
        width: wp(5),
        height: hp(2.5),
        resizeMode: 'contain',
    },





});

export default Navbar