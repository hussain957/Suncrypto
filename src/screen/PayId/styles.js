
import { StyleSheet } from 'react-native';
import ColorPath from '../../assets/ColorPath';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontPath from '../../assets/FontPath';


const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    viewcontainer: {
        paddingHorizontal: wp(4),
        paddingVertical: hp(2)
    },

    Suncryptotext: {
        fontFamily: FontPath.Poppins_Bold,
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 30,
        marginTop: hp(2.5)
    },

    Paytext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18,
    },

    copyicon: {
        width: wp(3),
        height: hp(1.5),
        resizeMode: 'contain',
        marginLeft: wp(2)
    },

    whitebox: {
        borderRadius: 12,
        flexDirection: 'row',
        marginTop:hp(-8),
        elevation:10,
        shadowColor:'black',
        height: hp(11),
        paddingVertical:hp(1.5),
    },

    sendicon: {
        width: wp(8),
        height: hp(4),
        resizeMode: 'contain'
    },

    sendtext: {
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18,
        marginTop:3,
    },

    Latesttext:{
      fontFamily:FontPath.Poppins_Medium,
      fontWeight:'400',
      fontSize:15,
      lineHeight:22  ,
      marginTop:3,
    },

    pubgtext:{
        fontFamily: FontPath.Poppins_Medium,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18,
        marginTop:3,
    }
});

export default styles