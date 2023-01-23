import {  StyleSheet, } from 'react-native';
import ColorPath from '../../assets/ColorPath';
import FontPath from '../../assets/FontPath';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const styles = StyleSheet.create({

    container: {
        paddingHorizontal: wp(2),
        flex: 1
    },

   
    welcometext: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: hp(2),
        fontFamily: FontPath.Poppins_Bold,
        lineHeight: 30,

    },

    button: {
        borderRadius: 20,
        padding: hp(1),
        width: wp(45)
    },

    buttontext: {
        fontSize: 15,
        fontWeight: '400',
        alignSelf: 'center',
        alignItems: 'center',
        fontFamily: FontPath.Poppins_Medium,
        lineHeight: 22,

    },



    numbertext: {
        fontSize: 15,
        fontWeight: '600',
        color: ColorPath.darkblack
    },


    righticon: {
        width: wp(5),
        height: hp(2.5),
        resizeMode: 'contain',
        marginTop: 20
    },

    aweoicon: {
        width: wp(10),
        height: hp(5),
        resizeMode: 'contain',
    },

    Graphicon: {
        width: wp(6),
        height: hp(3),
        resizeMode: 'contain',
        marginTop: 5
    },

    containerbottom: {
        flexDirection: 'row',
        justifyContent: 'center',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderTopColor: ColorPath.lightgray4,
        paddingVertical: hp(1),
    },

    loveicon:{
        width:wp(25),
        height: hp(15),
        resizeMode:'contain'
    }

});

export default styles