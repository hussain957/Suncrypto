
import { StyleSheet } from 'react-native';
import ColorPath from '../../assets/ColorPath';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontPath from '../../assets/FontPath';

const styles = StyleSheet.create({


    container: {
        flex: 1,
    },


    Refertext: {
        fontFamily: FontPath.Poppins_Bold,
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 30,
        paddingHorizontal: wp(4),
        marginTop: hp(2)
    },



    Earntext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18,
    },

    Suncrypto: {
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

    IllustrationIcon: {
        width: wp(24),
        height: hp(12),
        resizeMode: 'contain',
        marginRight: wp(5)
    },

    boxview: {
        borderRadius: 26,
        marginTop: hp(-2.3),
        paddingHorizontal: wp(5),
        height: hp(11),
    },

    money: {
        width: wp(4),
        height: hp(2),
        resizeMode: 'contain',
        tintColor: ColorPath.yellow
    },

    yourtext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '400',
        fontSize: 8,
        lineHeight: 12,
        marginLeft: wp(1)
    },

    angleleft: {
        width: wp(2.5),
        height: hp(1.5),
        resizeMode: 'contain',
    },

    medal_ribbon: {
        width: wp(4),
        height: hp(2),
        resizeMode: 'contain',
    },

    boxview2: {
        borderWidth: 1,
        borderRadius: 26,
        paddingHorizontal: wp(4),
        paddingVertical: hp(2),
        marginTop: hp(2)

    },

    defaulttext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 22,
        textAlign: 'center'
    },

    persentview: {
        borderRadius: 11,
        flexDirection: 'row',
        paddingHorizontal: wp(10),
        paddingVertical: hp(2),
        marginTop: hp(2)

    },

    Receivedtext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '400',
        fontSize: 8,
        lineHeight: 12,
    },

    persenttext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 30,
    },

    graybox: {
        borderRadius: 7,
        flexDirection: 'row',
        paddingHorizontal: wp(5),
        paddingVertical: hp(2),
        marginTop: hp(4)
    },

    Referralidtext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18,
        color: ColorPath.lightgray,
    },

    button: {
        backgroundColor: ColorPath.yellow,
        borderRadius: 11,
        paddingVertical: hp(1.5),
        flex: 1,
        marginLeft: wp(4)
    },

    qrcodeicon: {
        width: wp(6),
        height: hp(3),
        resizeMode: 'contain',
        flex: .3,
    },

    Quartarlytext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18,
        width: wp(24)
    }



});

export default styles
