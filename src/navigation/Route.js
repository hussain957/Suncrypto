import * as React from 'react';
import { View, Text, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './BottomTab';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favourites from '../screen/Favourites/Favourites';
import PayId from '../screen/PayId/PayId';
import ForgotPassword from '../screen/ForgotPassword/ForgotPassword';
import Login from '../screen/Login/Login';
import SignUp from '../screen/SignUp/SignUp';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SplashScreen from '../screen/SplashScreen/SplashScreen';
import Welcome from '../screen/Welcome/Welcome';
import SideBar from '../screen/SideBar/SideBar';
import TaskCenter from '../screen/TaskCenter/TaskCenter';
import RewardCenter from '../screen/RewardCenter/RewardCenter';
import ReferralId from '../screen/ReferralId/ReferralId';
import GiftCard from '../screen/GiftCard/GiftCard';


const Drawer = createDrawerNavigator();
function MyDrawer() {

  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        drawerStyle: {
          width:wp(100)
        },
      }}
      drawerContent={(props) => (
        <SideBar navigation={props.navigation} />)}>
      <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen'>
        <Stack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false }} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Favourites" component={Favourites} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name="TaskCenter" component={TaskCenter} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={BottomTab} options={{ headerShown: false }} />
        <Stack.Screen name="RewardCenter" component={RewardCenter} options={{ headerShown: false }} />
        <Stack.Screen name="ReferralId" component={ReferralId} options={{ headerShown: false }} />
        <Stack.Screen name="PayId" component={PayId} options={{ headerShown: false }} />
        <Stack.Screen name="GiftCard" component={GiftCard} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function handleNavigation(nav) {

  switch (nav.type) {
    case 'push':
      nav.navigation.navigate(nav.page, nav.passProps);
      break;
    case 'setRoot':
      nav.navigation.reset({ index: 0, routes: [{ name: nav.page }] })
      break;
    case 'pop':
      nav.navigation.goBack();
      break;
    case 'popToTop':
      nav.navigation.popToTop();
      break;
  }
}

export default Route;

