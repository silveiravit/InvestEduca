import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native'

import Home from '../pages/Home';
import Learn from '../pages/Learn';
import Money from '../pages/Money';
import Config from '../pages/Config';

const Tab = createBottomTabNavigator()

export default function Routes (){
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
                borderTopColor: '#161F4E'
            }
        }}
      >

        <Tab.Screen 
          name='Home' 
          component={Home} 
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name='home' color={ color } size={ 40 } />
            }
          }}
        />

        <Tab.Screen 
          name='Learn'
          component={Learn}
          options={{
            headerTitle: 'Venha aprender',
            tabBarIcon: ({ color, size }) => {
              return <Feather name='book' color={ color } size={ 40 } />
            }
          }}
        />

        <Tab.Screen 
          name='Money'
          component={Money}
          options={{
            headerTitle: 'Organize seu dinheiro',
            tabBarIcon: ({ color, size }) => {
              return <MaterialIcons name="attach-money" size={40} color={ color } />
            }
          }}
        />

        <Tab.Screen 
          name='Config' 
          component={Config}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="settings-outline" size={40} color={ color } />
            }
          }} 
        />

      </Tab.Navigator>
    
  )
}