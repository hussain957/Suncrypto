import {  StyleSheet, } from 'react-native';
import ColorPath from '../../assets/ColorPath';
import FontPath from '../../assets/FontPath';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: wp(6),
        paddingVertical: hp(2)
    },


    createtext: {
        fontSize: 20,
        fontWeight: '600',
        fontFamily: FontPath.Poppins_Bold,
        lineHeight: 30,
    },

    firstext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        color: ColorPath.gray
    },



    button: {
        backgroundColor: ColorPath.yellow,
        paddingVertical: hp(1.5),
        borderRadius: 12,
        marginTop: hp(7),
        width: wp(60),
        alignSelf: 'center'
    },

    buttontext: {
        color: ColorPath.darkblack,
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        fontFamily: FontPath.Poppins_Medium,
        textAlign: 'center'
    },


    InputBox: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        marginLeft: wp(9),
        marginTop: wp(1)
    }
});

export default styles