import {StyleSheet} from 'react-native';
import ColorPath from '../../assets/ColorPath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontPath from '../../assets/FontPath';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(1),
  },

  inputtext: {
    backgroundColor: ColorPath.lightgray,
    borderRadius: 25,
    color: ColorPath.black,
    paddingLeft: wp(10),borderColor:ColorPath.white
  },

  searchicon: {
    height: hp(2),
    width: wp(4),
    resizeMode: 'contain',
    position: 'absolute',
    top: hp(2),
    left: wp(4),
  },

  whitebox: {
    elevation: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingVertical: hp(2),
    marginTop: hp(2),
    paddingHorizontal: wp(4),
    flex: 1,
  },

  numberbutton: {
    borderRadius: 7,
    backgroundColor: ColorPath.green,
    width: wp(20),
    height: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
  },

  numbertext: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: FontPath.Poppins_Medium,
  },

  nametext: {
    fontFamily: FontPath.Poppins_Medium,
    fontWeight: '400',
    fontSize: 10,
  },
});

export default styles;
