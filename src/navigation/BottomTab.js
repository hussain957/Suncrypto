import React from 'react';
import {View, Text, Image, _Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ImagePath from '../assets/ImagePath';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ColorPath from '../assets/ColorPath';
import Home from '../screen/Home/Home';
import {useSelector} from 'react-redux';
import Market from '../screen/Market/Market';
import Refresh from '../screen/Refresh/Refresh';
import Trades from '../screen/Trades/Trades';
import Wallets from '../screen/Wallets/Wallets';

const RenderTabIcon = props => {
  const {activeIcon, inActiveIcon, title, isFocused} = props;
  return (
    <View style={styles.container}>
      <Image
        source={isFocused ? activeIcon : inActiveIcon}
        style={
          isFocused
            ? {
                width: wp(5),
                height: hp(2.5),
                resizeMode: 'contain',
                marginTop: 12,
                tintColor: ColorPath.yellow,
              }
            : {
                width: wp(5),
                height: hp(2.5),
                resizeMode: 'contain',
                marginTop: 12,
                tintColor: ColorPath.lightgray,
              }
        }
      />
    </View>
  );
};

const homepage = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <homepage.Navigator>
      <homepage.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </homepage.Navigator>
  );
}

const Marketpage = createNativeStackNavigator();
function MarketStackScreen() {
  return (
    <Marketpage.Navigator>
      <Marketpage.Screen
        name="Market"
        component={Market}
        options={{headerShown: false}}
      />
    </Marketpage.Navigator>
  );
}

const Tradespage = createNativeStackNavigator();
function TradesStackScreen() {
  return (
    <Tradespage.Navigator>
      <Tradespage.Screen
        name="Trades"
        component={Trades}
        options={{headerShown: false}}
      />
    </Tradespage.Navigator>
  );
}

const Refreshpage = createNativeStackNavigator();
function RefreshStackScreen() {
  return (
    <Refreshpage.Navigator>
      <Refreshpage.Screen
        name="Refresh"
        component={Refresh}
        options={{headerShown: false}}
      />
    </Refreshpage.Navigator>
  );
}

const Walletspage = createNativeStackNavigator();
function WalletsStackScreen() {
  return (
    <Walletspage.Navigator>
      <Walletspage.Screen
        name="Wallets"
        component={Wallets}
        options={{headerShown: false}}
      />
    </Walletspage.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function BottomTab() {
  const Theme = useSelector(store => store.ThemeReducer);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarStyle: {
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          backgroundColor:
            Theme == 'Dark' ? ColorPath.bluedark : ColorPath.white,
          position: 'absolute',
          overflow: 'hidden',
          borderTopWidth: 0,
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Homes"
        component={HomeStackScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return (
              <RenderTabIcon
                isFocused={focused}
                activeIcon={ImagePath.homeactiveicon}
                inActiveIcon={ImagePath.homeactiveicon}
                title={'Home'}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Marketss"
        component={MarketStackScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return (
              <RenderTabIcon
                isFocused={focused}
                activeIcon={ImagePath.stats}
                inActiveIcon={ImagePath.stats}
                title={'Markets'}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Tradess"
        component={TradesStackScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return (
              <RenderTabIcon
                isFocused={focused}
                activeIcon={ImagePath.briefcase}
                inActiveIcon={ImagePath.briefcase}
                title={'Trades'}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Refreshs"
        component={RefreshStackScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return (
              <RenderTabIcon
                isFocused={focused}
                activeIcon={ImagePath.refresh2}
                inActiveIcon={ImagePath.refresh2}
                title={'Refresh'}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Walletss"
        component={WalletsStackScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => {
            return (
              <RenderTabIcon
                isFocused={focused}
                activeIcon={ImagePath.wallet}
                inActiveIcon={ImagePath.wallet}
                title={'Wallets'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default BottomTab;
