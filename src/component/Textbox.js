import React from 'react';
import { TextInput, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ColorPath from '../assets/ColorPath';
import ImagePath from '../assets/ImagePath';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontPath from '../assets/FontPath';
import { useSelector } from 'react-redux';



export default function Textbox(props) {

  const Theme = useSelector(store => store.ThemeReducer);

    return (
        <>
            {props.InputBox &&
                <TextInput
                    style={[styles.inputtype,{color:Theme=='Dark'?ColorPath.lightgray:ColorPath.gray}]}
                    editable={props.editable}
                    value={props.value}
                    onSubmitEditing={props.onSubmitEditing}
                    autoCorrect={false}
                    maxLength={props.maxLength}
                    placeholder={props.placeholder}
                    onChangeText={props.onChangeText}
                    keyboardType={props.keyboardType}
                    returnKeyType={props.returnKeyType}
                    secureTextEntry={props.secureTextEntry}
                    multiline={props.multiline}
                    underlineColorAndroid="transparent"
                    ref={props.getRef}
                    navigation={props.navigation}
                    placeholderTextColor={props.placeholderTextColor}
                />}


            <View style={{ position: 'relative' }}>
                {props.InputBox2 &&
                    <TextInput
                        style={[styles.inputtype3,{color:Theme=='Dark'?ColorPath.lightgray:ColorPath.gray}]}
                        editable={props.editable}
                        value={props.value}
                        onSubmitEditing={props.onSubmitEditing}
                        autoCorrect={false}
                        maxLength={props.maxLength}
                        placeholder={props.placeholder}
                        onChangeText={props.onChangeText}
                        keyboardType={props.keyboardType}
                        returnKeyType={props.returnKeyType}
                        secureTextEntry={props.secureTextEntry}
                        multiline={props.multiline}
                        underlineColorAndroid="transparent"
                        ref={props.getRef}
                        navigation={props.navigation}
                        placeholderTextColor={props.placeholderTextColor}
                    />
                }

                {props.icon ? (
                    <TouchableOpacity onPress={props.onPress}>
                        <Image source={props. Images} style={[styles.eyeicon,{tintColor:Theme=='Dark'?ColorPath.lightgray:ColorPath.gray2}]} />
                    </TouchableOpacity>) : null
                }
            </View>

        </>

    )
}

const styles = StyleSheet.create({

    inputtype: {
        borderRadius: 12,
        backgroundColor: 'rgba(217, 217, 217, 0.25)',
        height: hp(7),
        marginTop: 3,
        paddingLeft: wp(3),
        fontSize: 14,
        fontWeight: '400',
        fontFamily: FontPath.Poppins_Medium,
        lineHeight: 21,

    },

   

    inputtype3: {
        borderRadius: 12,
        backgroundColor: 'rgba(217, 217, 217, 0.25)',
        height: hp(7),
        marginTop: 3,
        paddingLeft: wp(3),
        fontSize: 14,
        fontWeight: '400',
        fontFamily: FontPath.Poppins_Medium,
        lineHeight: 21,
    },

    eyeicon: {
        width: wp(7),
        height: hp(4),
        resizeMode: 'contain',
        position: 'absolute',
        top: hp(-5.6),
        left: wp(77),

    },


});