import {  StyleSheet,} from 'react-native';
import ColorPath from '../../assets/ColorPath';
import FontPath from '../../assets/FontPath';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
    },

    darklogo: {
        width: wp(30),
        height: hp(15),
        resizeMode:'contain'
    },

    suntext: {
        fontSize: 30,
        // lineheight: 28,
        fontFamily: FontPath.astroarmada,
        fontWeight: '400'

    },

    cryptotext: {
        color: ColorPath.yellow,
        fontSize: 30,
        // lineheight: 28,
        fontFamily: FontPath.astroarmada,
        fontWeight: '400'
    },

    securedtext: {
        fontSize: 10,
        fontWeight: '400'

    },

    ledger: {
        width: wp(15),
        height: hp(5),
        resizeMode: 'contain'
    }



});

export default styles