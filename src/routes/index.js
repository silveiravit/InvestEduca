import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import React, { useState, useContext } from "react";

import { AuthContext } from '../contexts/auth';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Learn from '../pages/Learn';
import Money from '../pages/Money';
import Config from '../pages/Config';

const Tab = createBottomTabNavigator()

export default function Routes(){

  const { user } = useContext(AuthContext)

  if( !user ){
    return(
      <Login status={ (user) => setUser(user) }/>
    )
  }

  return(
    <Tab.Navigator
      screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#E9AB43',
          tabBarInactiveTintColor: '#161F4E',
          tabBarStyle: {
              height: 60,
              borderTopWidth: 1,
              borderTopColor: '#161F4E',
          }
      }}
    >

      <Tab.Screen 
        name='Home' 
        component={Home} 
        options={{
          tabBarIcon: ({color, size}) => {
            return <AntDesign name="home" size={40} color={ color } />
          }
        }}
      />

      <Tab.Screen 
        name='Learn' 
        component={Learn} 
        options={{
          tabBarIcon: ({color, size}) => {
            return <Entypo name="book" size={40} color={ color } />
          },
        }}
      />

      <Tab.Screen 
        name='Money' 
        component={Money} 
        options={{
          tabBarIcon: ({color, size}) => {
            return <MaterialIcons name="attach-money" size={40} color={ color } />
          },
        }}
      />

      <Tab.Screen 
        name='Config' 
        component={Config} 
        options={{
          tabBarIcon: ({color, size}) => {
            return <AntDesign name="setting" size={40} color={ color } />
          }
        }}
      />

    </Tab.Navigator>
  )
}