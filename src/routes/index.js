import React, { useContext } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Biblioteca de icones
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

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
            return <MaterialIcons name="monetization-on" size={40} color={ color } />
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