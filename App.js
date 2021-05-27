import * as React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from './screens/HomeScreen' ;
import SettingsScreen from './screens/SettingsScreen';

export default class App extends React.Component {
  render(){
  return(
    <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home : {screen:HomeScreen, 
    navigationOptions:{tabBarIcon:({tintColor})=>(
      <Image 
      source={require('./assets/homeicon.png')}
      resizeMode='contain'
      style={{width:50, height:50}} />
    )}},
  Setting : {screen:SettingsScreen, 
    navigationOptions:{tabBarIcon:({tintColor})=>(
      <Image 
      source={require('./assets/Settingicon.png')}
      resizeMode='contain'
      style={{width:20, height:20}} />
    )}},
})

const AppContainer = createAppContainer(TabNavigator)
