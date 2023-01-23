import {  StyleSheet,} from 'react-native';
import ColorPath from '../../assets/ColorPath';
import FontPath from '../../assets/FontPath';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const styles = StyleSheet.create({


    container: {
        flex: 1,
    },


    Rewardtext: {
        fontFamily: FontPath.Poppins_Bold,
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 30,
        paddingHorizontal: wp(4),
        marginTop: hp(2)
    },



    Enjoytext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18,
    },

    redeem: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18,
    },



    buttontext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18,
        color: ColorPath.yellow,
        borderBottomWidth: 1,
        borderBottomColor: ColorPath.yellow,
        marginLeft: wp(1)

    },

    vouchericon: {
        width: wp(4),
        height: hp(2),
        resizeMode: 'contain'
    },

    Vouchertext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '500',
        fontSize: 10,
        lineHeight: 15,
        marginLeft: wp(2)
    },

    voucherbutton: {
        borderRadius: 7,
        flexDirection: 'row',
        width: wp(30),
        paddingVertical: hp(.8),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp(3),
    },

    background: {
        width: wp(22),
        height: hp(25),
        resizeMode: 'contain',
        justifyContent: 'center',
    },

    boxtext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 24,
        textAlign: 'center',
        width: wp(18),
        
    },

    boxborder: {
        flex:2.8,
        borderTopWidth: 0.4,
        borderBottomWidth: 0.4,
        borderRightWidth: 0.4,
        borderTopRightRadius: 24,
        borderBottomRightRadius: 24
    },

    trialtext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 30,
        marginTop:hp(2)
    },

    expirytext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '300',
        fontSize: 8,
        lineHeight: 12,
        letterSpacing: 0.09,
        marginTop: hp(1)
    },

    button: {
        borderRadius: 7,
        paddingVertical: hp(.5),
        paddingHorizontal: wp(3)
    },

    Savingtext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '300',
        fontSize: 8,
        lineHeight: 12,
        textAlign: 'center'
    },

    Nottext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '300',
        fontSize: 8,
        lineHeight: 12,
        letterSpacing: 0.06,
        borderTopWidth: 1,
        borderColor: ColorPath.gray2,
        paddingTop: hp(1),
        width:wp(60)
    }
});

export default styles