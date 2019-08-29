import {DrawerItems, createDrawerNavigator, createStackNavigator, createBottomTabNavigator} from 'react-navigation';
//import DrawerComp from '../components/DrawerComp';
import theme from '../customTheme';
import React from 'react';
import {View} from 'react-native';

import DrawerComp from '../components/MainMenuComp';
import AppbarComp from '../components/AppbarComp';

import HomeScreen from '../screens/HomeScreen';
import PostsScreen from '../screens/PostsScreen';
import PostScreen from '../screens/PostScreen';
import StartScreen from '../screens/StartScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MenusScreen from '../screens/MenusScreen';
import PagesScreen from '../screens/PagesScreen';
import ThemeScreen from '../screens/ThemeScreen';

const {colors} = theme();


const drawerViewConfig = {
    contentComponent: DrawerComp,
    contentOptions: {
      activeTintColor: colors.backdrop,
      activeBackgroundColor: colors.primary,
      inactiveTintColor: colors.text,
      inactiveBackgroundColor: colors.surface,
      style: {},
      labelStyle: {}
    },
    drawerWidth : 300,
    drawerType: 'front',// 'front' | 'back' | 'slide';
    drawerLockMode: "locked-closed", //'unlocked' | 'locked-closed' | 'locked-open';
    edgeWidth: 1,
    drawerPosition: 'left'
  //  hideStatusBar: false,
  //  overlayColor: "#fff",
  };
  

const stackConfig = {mode: 'card', //modal| 'card'
      headerBackTitleVisible:false,
      headerLayoutPreset: 'center',
      cardOverlayEnabled: false,

/*
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.background,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
      */
     defaultNavigationOptions: ({ navigation }) => {
      return ({
        header: (
          <AppbarComp navigation={navigation} />
        ),
      })
    }
    };

const SettingsNavigator = createBottomTabNavigator({
  Settings: {screen: SettingsScreen},
  Menus: {screen: MenusScreen},
  Pages: {screen: PagesScreen},
  Theme: {screen: ThemeScreen}

},{
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  }
});


const HomeNavigator = createStackNavigator({
  Splash: {screen: StartScreen},
  Home: {screen: HomeScreen},
  Posts: {screen: PostsScreen},
  Post: {screen: PostScreen}
},
{...stackConfig});

export default createDrawerNavigator({
  App: HomeNavigator,
  Settings: SettingsNavigator,
},
  {
    initialRouteName: "App",
    
    ...drawerViewConfig,

  });
