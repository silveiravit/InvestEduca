import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import React, { useContext } from "react";

import { AuthContext } from '../contexts/auth';

// Páginas da navegação principal
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
          tabBarHideOnKeyboard: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#E9AB43',
          tabBarInactiveTintColor: '#161F4E',
          tabBarStyle: {
              height: 55,
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
            return <AntDesign name="home" size={38} color={ color } />
          }
        }}
      />

      <Tab.Screen 
        name='Learn' 
        component={Learn} 
        options={{
          tabBarIcon: ({color, size}) => {
            return <Entypo name="book" size={38} color={ color } />
          },
        }}
      />

      <Tab.Screen 
        name='Money' 
        component={Money} 
        options={{
          tabBarIcon: ({color, size}) => {
            return <MaterialIcons name="monetization-on" size={38} color={ color } />
          },
        }}
      />

      <Tab.Screen 
        name='Config' 
        component={Config} 
        options={{
          tabBarIcon: ({color, size}) => {
            return <MaterialIcons name="settings" size={38} color={ color } />
          }
        }}
      />

    </Tab.Navigator>
  )
}