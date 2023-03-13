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
import SplashScreen from '../screen/SplashScreen/SplashScreen';
import Welcome from '../screen/Welcome/Welcome';
import SideBar from '../screen/SideBar/SideBar';
import TaskCenter from '../screen/TaskCenter/TaskCenter';
import RewardCenter from '../screen/RewardCenter/RewardCenter';
import ReferralId from '../screen/ReferralId/ReferralId';
import GiftCard from '../screen/GiftCard/GiftCard';
import DemoChart from '../screen/DemoChart';
import Scan from '../screen/Scan';
import Notification from '../screen/Notification/Notification';
import Security from '../screen/Security/Security';
import Setting from '../screen/Setting/Setting';
import Help from '../screen/Help/Help';
import Appearance from '../screen/Appearance/Appearance';
import ChangeBasis from '../screen/ChangeBasis/ChangeBasis';
import StyleSetting from '../screen/StyleSetting/StyleSetting';
import PaymentCurrency from '../screen/PaymentCurrency/PaymentCurrency';
import Language from '../screen/Language/Language';
import CryptoWithdrawal from '../screen/CryptoWithdrawal/CryptoWithdrawal';
import PushNotification from '../screen/PushNotification/PushNotification';
import AboutUs from '../screen/AboutUs/AboutUs';
import Chat from '../screen/Chat/Chat';
import FloatingWindow from '../screen/FloatingWindow/FloatingWindow';
import Currency from '../screen/Currency/Currency';
import Privacy from '../screen/Privacy/Privacy';
import NeedHelp from '../screen/NeedHelp/NeedHelp';
import Activities from '../screen/Activities/Activities';
import Autolock from '../screen/Autolock/Autolock';
import ThirdParty from '../screen/ThirdParty/ThirdParty';
import Account from '../screen/Account/Account';
import Devices from '../screen/Devices/Devices';
import ManageAccount from '../screen/ManageAccount/ManageAccount';
import DisableAccount from '../screen/DisableAccount/DisableAccount';
import DeleteAccount from '../screen/DeleteAccount/DeleteAccount';
import PaymentMethod from '../screen/PaymentMethod/PaymentMethod';
import MyGift from '../screen/MyGift/MyGift';
import Convert from '../screen/Convert/Convert';
import P2P from '../screen/P2P/P2P';
import Autoinvest from '../screen/Autoinvest/Autoinvest';


const Drawer = createDrawerNavigator();
function MyDrawer() {

  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        drawerStyle: {
          width:"100%"
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
        <Stack.Screen name="DemoChart" component={DemoChart} options={{ headerShown: false }} />
        <Stack.Screen name="Scan" component={Scan} options={{ headerShown: false }} />
        <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
        <Stack.Screen name="Security" component={Security} options={{ headerShown: false }} />
        <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false }} />
        <Stack.Screen name="Help" component={Help} options={{ headerShown: false }} />
        <Stack.Screen name="Appearance" component={Appearance} options={{ headerShown: false }} />
        <Stack.Screen name="ChangeBasis" component={ChangeBasis} options={{ headerShown: false }} />
        <Stack.Screen name="StyleSetting" component={StyleSetting} options={{ headerShown: false }} />
        <Stack.Screen name="PaymentCurrency" component={PaymentCurrency} options={{ headerShown: false }} />
        <Stack.Screen name="Language" component={Language} options={{ headerShown: false }} />
        <Stack.Screen name="CryptoWithdrawal" component={CryptoWithdrawal} options={{ headerShown: false }} />
        <Stack.Screen name="PushNotification" component={PushNotification} options={{ headerShown: false }} />
        <Stack.Screen name="AboutUs" component={AboutUs} options={{ headerShown: false }} />
        <Stack.Screen name="NeedHelp" component={NeedHelp} options={{ headerShown: false }} />
        <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
        <Stack.Screen name="FloatingWindow" component={FloatingWindow} options={{ headerShown: false }} />
        <Stack.Screen name="Currency" component={Currency} options={{ headerShown: false }} />
        <Stack.Screen name="Privacy" component={Privacy} options={{ headerShown: false }} />
        <Stack.Screen name="Activities" component={Activities} options={{ headerShown: false }} />
        <Stack.Screen name="Autolock" component={Autolock} options={{ headerShown: false }} />
        <Stack.Screen name="ThirdParty" component={ThirdParty} options={{ headerShown: false }} />
        <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} />
        <Stack.Screen name="Devices" component={Devices} options={{ headerShown: false }} />
        <Stack.Screen name="ManageAccount" component={ManageAccount} options={{ headerShown: false }} />
        <Stack.Screen name="DisableAccount" component={DisableAccount} options={{ headerShown: false }} />
        <Stack.Screen name="DeleteAccount" component={DeleteAccount} options={{ headerShown: false }} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethod} options={{ headerShown: false }} />
        <Stack.Screen name="MyGift" component={MyGift} options={{ headerShown: false }} />
        <Stack.Screen name="Convert" component={Convert} options={{ headerShown: false }} />
        <Stack.Screen name="P2P" component={P2P} options={{ headerShown: false }} />
        <Stack.Screen name="Autoinvest" component={Autoinvest} options={{ headerShown: false }} />
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

