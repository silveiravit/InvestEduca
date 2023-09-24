import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
//import 'react-native-gesture-handler';
import React,  { Component } from 'react';

//import { createStackNavigator } from '@react-navigation/stack'

import Routes from './src/routes'

//const Stack = createStackNavigator()

export default function App () {
  
    return (

        <NavigationContainer>

          <Routes />
          
        </NavigationContainer>

    );
  
}