
import React from 'react';
import {  Text,View,} from 'react-native';
import 'react-native-gesture-handler';
import Route from './src/navigation/Route';
import { Provider, useSelector } from 'react-redux'
import { store } from './src/Redux/Store/Store';


const App = () => {

  return (
    <Provider store={store}>
    <View style={{flex:1}}>
      <Route/>
    </View>
    </Provider>
  );
}


export default App;
