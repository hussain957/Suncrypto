import {  StyleSheet,} from 'react-native';
import ColorPath from '../../assets/ColorPath';
import FontPath from '../../assets/FontPath';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const styles = StyleSheet.create({

    container: {
        flex: 1,
    },


    tasktext: {
        fontFamily: FontPath.Poppins_Bold,
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 30,
        paddingHorizontal: wp(4),
        marginTop: hp(2)
    },

    limitedtext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 22,
        paddingHorizontal: wp(7),
        marginTop: hp(2),

    },

    oncetext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '400',
        fontSize: 12,
        lineHeight:15
    },

    buttontext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '400',
        fontSize: 12,
        color: ColorPath.yellow,
        borderBottomWidth: 1,
        borderBottomColor: ColorPath.yellow,
    },

    boxcontainer: {
        borderRadius: 12,
    },

    circleicon: {
        width: wp(15),
        height: hp(7.5),
        resizeMode: 'contain'
    },

    maketext: {
        fontFamily: FontPath.Poppins_Bold,
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '500',
        width: wp(41)

    },

    viewtext: {
        fontWeight: '300',
        fontSize: 8,
        lineHeight: 12,
        textDecorationLine: 'underline',
        marginTop: hp(1)
    },

    USDTtext: {
        marginLeft: wp(3),
        fontWeight: '300',
        fontSize: 8,
        lineHeight: 12,
        textDecorationLine: 'underline',
    },
    Complete: {
        color: ColorPath.darkblack,
        fontSize: 12,
        fontWeight: '500',
        transform: [{ rotate: '90deg' }],
    },

    Completebutton: {

    },

    Rstext: {
        color: ColorPath.darkblack,
        fontWeight: '400',
        fontSize: 8,
        lineHeight: 12,
        textAlign: 'center'

    },

    buttonrs: {
        backgroundColor: ColorPath.yellow,
        paddingVertical: hp(.5),
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        width: wp(15)



    },

    Cashbackbutton: {
        backgroundColor: '#C5C5C5',
        paddingVertical: hp(.5),
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        width: wp(20)

    },

    Rewardkbutton: {
        backgroundColor: '#CCFFD7',
        borderRadius: 5,
        paddingVertical: hp(.5),
        width: wp(20),
        marginTop: hp(2)
    },

    Rewardtext: {
        fontSize: 8,
        fontWeight: '500',
        lineHeight: 12,
        color: '#32C352',
        textAlign: 'center'
    },

    Expiredtext: {
        fontSize: 8,
        fontWeight: '300',
        lineHeight: 12,
        marginTop: hp(.7)
    }

});


export default styles