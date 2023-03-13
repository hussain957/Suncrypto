import { StyleSheet } from 'react-native';
import ColorPath from '../../assets/ColorPath';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontPath from '../../assets/FontPath';

const styles = StyleSheet.create({


    container: {
        flex: 1,
    },

    Gifttext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 30,
    },

    whitebox: {
        borderRadius: 12,
        alignItems: 'center',
        elevation: 3,
        shadowColor: ColorPath.black,
        paddingVertical: hp(2),
        width: wp(44)
    },

    sendtext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18,
        color: ColorPath.darkblack,
    },

    Createtext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '400',
        fontSize: 8,
        lineHeight: 12,
    },

    giftboxicon: {
        width: wp(18),
        height: hp(9),
        resizeMode: 'contain',
        marginTop: hp(1.5)
    },

    giftboxicon2: {
        width: wp(16),
        height: hp(8),
        resizeMode: 'contain',
        marginTop: hp(1.5)
    },

    graybox: {
        borderRadius: 13,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: hp(2),
        paddingHorizontal: wp(4),
        marginTop: hp(2)
    },

    transfericon: {
        width: wp(8),
        height: hp(4),
        resizeMode: 'contain',
    },

    anglelefticon: {
        width: wp(4),
        height: hp(2),
        resizeMode: 'contain',
    },

    graybox2: {
        borderRadius: 13,
        paddingHorizontal:wp(2),
        paddingVertical:hp(1),
        marginTop:hp(2)
    },


    Populartext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 22,
    },


    Pexpaytext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18,
        marginTop: 5,
    },

    icon:{
        width: wp(8),
        height: hp(4),
        resizeMode: 'contain',
    }

});

export default styles