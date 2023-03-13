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
    resizeMode: 'contain',
  },

  Noticetext: {
    fontFamily: FontPath.Poppins_Medium,
    fontWeight: '400',
    fontSize: 8,
    lineHeight: 12,
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
    lineHeight: 15,
  },

  fasterttext: {
    color: 'gray',
    fontSize: 13,
    marginTop: 3,
  },

  usericon: {
    width: wp(12),
    height: hp(6),
    marginTop: hp(5),
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
    marginLeft: 5,
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
    justifyContent: 'center',
  },

  numbertext: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: FontPath.Poppins_Medium,
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '10%',
    paddingLeft: 15,
    paddingTop: 10,
    width: 10,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    padding: 16,
    color: 'white',
  },
  textTitle1: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    padding: 16,
    color: 'white',
  },
  cardView: {
    width: -32,
    height: -350,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
    padding: 25,
    marginLeft: 5,
    marginRight: 5,
    marginTop: '10%',
    backgroundColor: 'white',
  },
  scanCardView: {
    width: 32,
    height: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 25,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    backgroundColor: 'white',
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonScan: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#258ce3',
    paddingTop: 5,
    paddingRight: 25,
    paddingBottom: 5,
    paddingLeft: 25,
    marginTop: 20,
  },
  buttonScan2: {
    marginLeft: -50,
    width: 100,
    height: 100,
  },
  highlight: {
    fontWeight: '700',
  },
  centerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    padding: 32,
    color: 'white',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  bottomContent: {
    width: 100,
    height: 120,
  },
  buttonTouchable: {
    fontSize: 21,
    backgroundColor: 'white',
    marginTop: 32,
    width: 62,
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
  },
  buttonTextStyle: {
    color: 'black',
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    backgroundColor: ColorPath.white,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
  },

  inputbox: {
    backgroundColor: ColorPath.lightgray,
    color: ColorPath.darkblack,
    borderRadius: 25,
    width: wp(83),
    alignSelf: 'flex-end',
    paddingLeft: wp(4),
  },

  usericon1: {
    width: wp(4),
    height: hp(2),
    resizeMode: 'contain',
  },

  profilename: {
    fontSize: 14,
    fontFamily: FontPath.Poppins_Medium,
    marginLeft: wp(2),
  },

  suncryptotext: {
    fontSize: 14,
    fontFamily: FontPath.Poppins_Medium,
    marginTop: hp(1),
  },

  button: {
    backgroundColor: ColorPath.lightgray,
    paddingVertical: hp(0.5),
    borderRadius: 8,
    width: wp(30),
  },

  buttontext: {
    color: ColorPath.darkblack,
    fontSize: 14,
    fontFamily: FontPath.Poppins_Medium,
    textAlign: 'center',
  },

  liketext: {
    fontSize: 15,
    fontFamily: FontPath.Poppins_Medium,
    marginLeft: wp(2),
  },

  nottext: {
    fontSize: 13,
    fontFamily: FontPath.Poppins_Medium,
    marginTop: hp(1),
    borderBottomWidth: 1,
    paddingBottom: hp(1),
  },

  doyoutext: {
    fontSize: 13,
    fontFamily: FontPath.Poppins_Medium,
    marginTop: hp(1),
  },

  camaigntext: {
    fontSize: 17,
    fontFamily: FontPath.Poppins_Medium,
  },

  Viewtext: {
    color: ColorPath.yellow,
    fontSize: 15,
    fontFamily: FontPath.Poppins_Medium,
  },

  yesbutton: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: hp(1),
    marginTop: hp(1),
  },

  yestext: {
    fontSize: 15,
    fontFamily: FontPath.Poppins_Medium,
    textAlign: 'center',
  },
  graybox: {
    borderRadius: 12,
    paddingVertical: hp(1),
    paddingHorizontal: wp(4),
    marginTop: hp(1),
  },

  numbertext1: {
    fontSize: 15,
    fontFamily: FontPath.Poppins_Medium,
  },

  usdttext: {
    fontSize: 15,
    fontFamily: FontPath.Poppins_Medium,
    marginLeft: wp(2.5),
    marginTop: hp(1),
  },

  aprtext: {
    color: ColorPath.green,
    fontSize: 14,
    fontFamily: FontPath.Poppins_Medium,
  },

  graybox1: {
    borderRadius: 12,
    paddingVertical: hp(1),
    width: wp(45),
  },

  flexbletext: {
    fontSize: 15,
    fontFamily: FontPath.Poppins_Medium,
    paddingHorizontal: wp(3),
  },

  arrowicon: {
    width: wp(5),
    height: hp(2.5),
    resizeMode: 'contain',
  },

  bitcointext: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: FontPath.Poppins_Medium,
    lineHeight: 20,
  },

  numbertext3: {
    fontSize: 15,
    fontWeight: '600',
    fontFamily: FontPath.Poppins_Medium,
    lineHeight: 22,
  },

  numbertext4: {
    fontSize: 15,
    fontWeight: '600',
    fontFamily: FontPath.Poppins_Medium,
  },

  numbertext2: {
    fontSize: 11,
    color: ColorPath.red,
    fontWeight: '400',
    fontFamily: FontPath.Poppins_Medium,
  },

  addbutton: {
    backgroundColor: ColorPath.yellow,
    borderRadius: 20,
    padding: hp(1),
    width: wp(50),
    alignSelf: 'center',
    marginTop: 30,
  },

  addtext: {
    fontSize: 15,
    fontWeight: '400',
    color: ColorPath.darkblack,
    textAlign: 'center',
    fontFamily: FontPath.Poppins_Medium,
    lineHeight: 22,
  },
});

export default styles;
