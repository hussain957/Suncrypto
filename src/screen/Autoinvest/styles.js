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
    backgroundColor: ColorPath.white,
  },

  inputtext: {
    backgroundColor: ColorPath.lightgray,
    borderRadius: 25,
    color: ColorPath.black,
    paddingLeft: wp(13),
    borderColor: ColorPath.white,
  },

  searchicon: {
    height: hp(2),
    width: wp(4),
    resizeMode: 'contain',
    position: 'absolute',
    top: hp(2),
    left: wp(4),
  },

  numberbutton: {
    borderRadius: 7,
    backgroundColor: ColorPath.darkred,
    width: wp(20),
    height: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
  },

  numbertext: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    fontFamily: FontPath.Poppins_Medium,
  },

  nametext: {
    fontFamily: FontPath.Poppins_Medium,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 15,
  },

  autotext: {
    color: ColorPath.darkblack,
    fontSize: 17,
    fontFamily: FontPath.Poppins_Bold,
  },

  viewcontainer: {
    paddingHorizontal: wp(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(3),
  },

  producttext: {
    fontFamily: FontPath.Poppins_Medium,
    fontWeight: '400',
    fontSize: 13,
    color: ColorPath.gray2,
    flex: 1,
  },

  listcontianer: {
    paddingBottom: hp(2),
    marginTop: hp(1),
    flex: 1,
    paddingHorizontal: wp(4),
  },
});

export default styles;
