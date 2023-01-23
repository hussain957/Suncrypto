import {  StyleSheet,} from 'react-native';
import ColorPath from '../../assets/ColorPath';
import FontPath from '../../assets/FontPath';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
    


const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

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

    usericon: {
        width: wp(8),
        height: hp(4),
        resizeMode: 'contain',

    },

    suncryptotext: {
        fontFamily: FontPath.Poppins_Bold,
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 18,
    },

    idtext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '300',
        fontSize: 8,
        lineHeight: 12,
        color: ColorPath.gray2
    },

    copyicon: {
        width: wp(2),
        height: hp(1),
        resizeMode: 'contain',
        marginLeft: wp(2) 
    },

    verifieduser: {
        width: wp(5),
        height: hp(2.5),
        resizeMode: 'contain',
        marginLeft: wp(2) 
    },


    regularview: {
        backgroundColor: ColorPath.lightgray,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: wp(2.5),
        paddingVertical: hp(.7),
        marginTop: hp(4)
    },

    Regulartext: {
        color: ColorPath.darkblack,
        fontFamily: FontPath.Poppins_Medium,
        fontSize: 8,
        fontWeight: '300',
        lineHeight: 12,
        marginLeft: wp(2)
    },

    Usetext: {
        color: ColorPath.gray2,
        fontFamily: FontPath.Poppins_Medium,
        fontSize: 8,
        fontWeight: '600',
        lineHeight: 12,
    },

    Rightaero: {
        width: wp(3),
        height: hp(1.5),
        resizeMode: 'contain',
        marginLeft: wp(1)
    },

    gemicon: {
        width: wp(4),
        height: hp(2),
        resizeMode: 'contain',
    },

    listcontainer: {
        borderBottomRightRadius: 48,
        paddingHorizontal: wp(4),
        marginTop: hp(4)

    },

    listcontainer1: {
        paddingHorizontal: wp(4),
       
    },

    listcontainer2: {
        backgroundColor: ColorPath.lightgray4,
        borderTopLeftRadius: 48,
        paddingHorizontal: wp(4),
        paddingBottom: hp(4)
    },

    tasktext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '500',
        fontSize: 10,
        marginLeft: wp(6)
    },

    Rightaero2: {
        width: wp(3),
        height: hp(1.5),
        resizeMode: 'contain',
    },

});


export default styles