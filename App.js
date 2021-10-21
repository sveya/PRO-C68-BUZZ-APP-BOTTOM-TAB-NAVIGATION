import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import InstagramScreen from "./screens/InstagramScreen";
import FacebookScreen from "./screens/FacebookScreen";
import{createAppContainer} from "react-navigation";
import{createBottomTabNavigator} from "react-navigation-tabs";

export default class App extends React.Component{
 render(){
   return(
     <AppContainer/>
   )
 } 
}

const TabNavigator=createBottomTabNavigator({
  Facebook:{screen:FacebookScreen},
  Instagram:{screen:InstagramScreen}
});

const AppContainer=createAppContainer(TabNavigator)