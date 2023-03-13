import React, {Component, Fragment, useState} from 'react';
import {
  TouchableOpacity,
  Text,
  Linking,
  View,
  Image,
  ImageBackground,
  BackHandler,
  StyleSheet,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {Dimensions} from 'react-native';
import ImagePath from '../assets/ImagePath';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const Scan = () => {

  const [scan, setScan] = useState(false);
  const [scanResult, setScanResult] = useState(false);
  const [result, setResult] = useState(null);

 const onSuccess = e => {
    const check = e.data.substring(0, 4);
    console.log('scanned', check);
    setResult({
      result: e,
    });

    setScan({
      scan: false,
    });

    setScanResult({
      ScanResult: true,
    });
    if (check === 'http') {
      Linking.openURL(e.data).catch(err =>
        console.error('An error occured', err),
      );
    } else {
      setResult({
        result: e,
      });

      setScan({
        scan: false,
      });

      setScanResult({
        ScanResult: true,
      });
    }
  };
  const activeQR = () => {
    setScan(true);
  };
  const scanAgain = () => {
    setScan(true);
    setScanResult(false);
  };

  return (
    <View style={styles.scrollViewStyle}>
      <Fragment>
        <Text style={styles.textTitle}>
          Welcome To React-Native QR Code Tutorial !
        </Text>
        {!scan && !scanResult && (
          <View style={styles.cardView}>
            <TouchableOpacity
              onPress={() => {
                activeQR();
              }}
              style={styles.buttonTouchable}>
              <Text style={styles.buttonTextStyle}>Click to Scan !</Text>
            </TouchableOpacity>
          </View>
        )}

        {scanResult && (
          <Fragment>
            <Text style={styles.textTitle1}>Result !</Text>
            <View style={scanResult ? styles.scanCardView : styles.cardView}>
              <Text>Type : {result.type}</Text>
              <Text>Result : {result.data}</Text>
              <Text numberOfLines={1}>RawData: {result.rawData}</Text>
              <TouchableOpacity
                onPress={() => {
                  scanAgain();
                }}
                style={styles.buttonTouchable}>
                <Text style={styles.buttonTextStyle}>Click to Scan again!</Text>
              </TouchableOpacity>
            </View>
          </Fragment>
        )}

        {scan && (
          <QRCodeScanner
            reactivate={true}
            showMarker={true}
            onRead={onSuccess}
            topContent={
              <Text style={styles.centerText}>
                Go to{' '}
                <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text>{' '}
                on your computer and scan the QR code to test.
              </Text>
            }
            bottomContent={
              <View>
                <TouchableOpacity
                  style={styles.buttonTouchable}
                  >
                  <Text style={styles.buttonTextStyle}>OK. Got it!</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttonTouchable}
                  onPress={() => setScan(false)}>
                  <Text style={styles.buttonTextStyle}>Stop Scan</Text>
                </TouchableOpacity>
              </View>
            }
          />
        )}
      </Fragment>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#2196f3',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '10%',
    paddingLeft: 15,
    paddingTop: 10,
    width: deviceWidth,
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
    width: deviceWidth - 32,
    height: deviceHeight - 350,
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
    width: deviceWidth - 32,
    height: deviceHeight / 2,
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
    marginLeft: deviceWidth / 2 - 50,
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
    width: deviceWidth,
    height: 120,
  },
  buttonTouchable: {
    fontSize: 21,
    backgroundColor: 'white',
    marginTop: 32,
    width: deviceWidth - 62,
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
  },
  buttonTextStyle: {
    color: 'black',
    fontWeight: 'bold',
  },
});
export default Scan;
