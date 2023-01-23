import { StyleSheet, } from 'react-native';
import ColorPath from '../../assets/ColorPath';
import FontPath from '../../assets/FontPath';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: wp(7),
        paddingVertical: hp(2)
    },


    Welcome: {
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 30,
        fontFamily: FontPath.Poppins_Bold,
    },

    join: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        fontFamily: FontPath.Poppins_Medium,
    },

    button: {
        backgroundColor: ColorPath.yellow,
        paddingVertical: hp(1.5),
        borderRadius: 12,
        marginTop: hp(7)
    },

    buttontext: {
        color: ColorPath.darkblack,
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        marginLeft: 15,
        fontFamily: FontPath.Poppins_Medium
    },

    text: {
        color: ColorPath.gray2,
        fontSize: 15,
        lineHeight: 22,
        fontWeight: '400',
        fontFamily: FontPath.Poppins_Medium
    },

    viewcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: wp(3),
        marginTop: hp(4)
    },

    linecontainer: {
        borderTopWidth: 1,
        borderTopColor: ColorPath.gray2,
        width: wp(30)
    },

    alreadytext: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        fontFamily: FontPath.Poppins_Medium
    },

    skiptext: {
        color: ColorPath.gray3,
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '300',
        fontSize: 12,
        lineHeight: 18
    },

    waving: {
        width: wp(25),
        height: hp(15),
        resizeMode: 'contain'
    },

    profileicon: {
        width: wp(5),
        height: hp(2.5),
        resizeMode: 'contain',
    },

});

export default styles