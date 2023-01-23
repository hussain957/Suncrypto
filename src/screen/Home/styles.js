
import { StyleSheet} from 'react-native';
import ColorPath from '../../assets/ColorPath';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontPath from '../../assets/FontPath';


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

    Layericon: {
        width: wp(4),
        height: hp(2),
        resizeMode: 'contain'
    },

    Noticetext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '400',
        fontSize: 8,
        lineHeight: 12
    },

    flatlistcontainer: {
        paddingVertical: hp(2),
    },

    boxcontainer: {
        width: wp(50),
        paddingHorizontal: wp(3),
        paddingVertical: hp(2),
        margin: 10,
    },
  

    iconbutton: {
        width: wp(20),
        height: hp(8),
        marginHorizontal: wp(1),
        marginTop: hp(2),
    },

    icons: {
        width: wp(6.5),
        height: hp(3.5),
        alignSelf: 'center',
        resizeMode: 'contain',
    },

    icontext: {
        fontSize: 10,
        textAlign: 'center',
        marginTop: 5,
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '400',
        lineHeight: 15

    },


    fasterttext: {
        color: 'gray',
        fontSize: 13,
        marginTop: 3,

    },

    usericon: {
        width: wp(12),
        height: hp(6),
        marginTop: hp(5)
    },

    darktext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '300',
        fontSize: 10,
        lineHeight: 15,
    },

    downicon: {
        width: wp(3),
        height: hp(2),
        resizeMode: 'contain',
        marginLeft: 5
    },

    nametext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '400',
        fontSize: 10,
        lineHeight: 15,

    },

    numberbutton: {
        borderRadius: 7,
        backgroundColor: ColorPath.darkred,
        width: 50,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },

    numbertext: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        fontFamily: FontPath.Poppins_Medium
    }
});

export default styles
