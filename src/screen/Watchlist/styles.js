import { StyleSheet, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ColorPath from '../../assets/ColorPath';
import FontPath from '../../assets/FontPath';


const styles = StyleSheet.create({



    bitcointext: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: FontPath.Poppins_Medium,
        lineHeight: 20
    },

    numbertext: {
        fontSize: 15,
        fontWeight: '600',
        fontFamily: FontPath.Poppins_Medium,
        lineHeight: 22,

    },

    numbertext2: {
        fontSize: 11,
        color: ColorPath.red,
        fontWeight: '400',
        fontFamily: FontPath.Poppins_Medium,
        lineHeight: 16
    },


    addbutton: {
        backgroundColor: ColorPath.yellow,
        borderRadius: 20,
        padding: hp(1),
        width: wp(50),
        alignSelf: 'center',
        marginTop: 30
    },

    addtext: {
        fontSize: 15,
        fontWeight: '400',
        color: ColorPath.darkblack,
        textAlign: 'center',
        fontFamily: FontPath.Poppins_Medium,
        lineHeight: 22
    },


    listbox: {
        backgroundColor: 'rgba(217, 217, 217, 0.1)',
        borderRadius: 14,
        paddingHorizontal: wp(3),
        paddingVertical: hp(2),
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: hp(.5)
    },

    icon: {
        width: wp(8),
        height: hp(4),
        resizeMode: 'contain'
    },

    eostext: {
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 22,
        fontFamily: FontPath.Poppins_Medium,
        marginLeft: 8
    },

    eostext2: {
        fontSize: 8,
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '400',
        lineHeight: 12,
        color: ColorPath.lightgray3,
        marginLeft: 8

    },

    icon2: {
        width: wp(14),
        height: hp(5),
        resizeMode: 'contain'
    },
    number: {
        fontSize: 13,
        fontWeight: '500',
        lineHeight: 20,
        textAlign: 'right',
        fontFamily: FontPath.Poppins_Medium,
    },

    number2: {
        fontSize: 8,
        fontWeight: '500',
        lineHeight: 12,
        textAlign: 'right',
        fontFamily: FontPath.Poppins_Medium,
        color: ColorPath.red
    }



});

export default styles