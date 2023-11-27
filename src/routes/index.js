import React, { useContext } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from "react-native";

// Biblioteca de icones
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

// Autenticação
import { AuthContext } from '../contexts/auth';

// Tema
import ThemeContext from '../contexts/ThemeContext';

// Páginas da navegação principal
import Login from '../pages/Login';
import Home from '../pages/Home';
import Learn from '../pages/Learn';
import Money from '../pages/Money';
import Config from '../pages/Config';

// Constante de navegação
const Tab = createBottomTabNavigator()

export default function Routes(){

  const { user } = useContext(AuthContext)
  const [themeMode] = useContext(ThemeContext)

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
          tabBarInactiveTintColor: themeMode === 'light' ? '#161F4E' : '#fff',
          tabBarStyle: {
              height: 55,
              borderTopWidth: 1,
              borderTopColor: themeMode === 'light' ? '#161F4E' : '#fff',
              backgroundColor: themeMode === 'light' ? '#fff' : '#0D1117'
          }
      }}
    >

      <Tab.Screen 
        name='Home' 
        component={Home} 
        options={{
          tabBarIcon: ({color, size}) => {
            return <Octicons name="home" size={40} color={ color } />
          }
        }}
      />

      <Tab.Screen 
        name='Learn' 
        component={Learn} 
        options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name="book" size={40} color={ color } />
          },
        }}
      />

      <Tab.Screen 
        name='Money' 
        component={Money} 
        options={{
          tabBarIcon: ({color, size}) => {
            return <Image source={require('../icons/Iconmoeda.png')} style={{ height: 40, width: 40, tintColor: color }}/>
          },
        }}
      />

      <Tab.Screen 
        name='Config' 
        component={Config} 
        options={{
          tabBarIcon: ({color, size}) => {
            return <MaterialIcons name="settings" size={40} color={ color } />
          }
        }}
      />

    </Tab.Navigator>
  )
}