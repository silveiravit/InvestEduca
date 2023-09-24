import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

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
            tabBarIcon: ({color, size}) => {
              return <Feather name='home' color={'#000'} size={40} />
            }
          }}
        />

        <Tab.Screen 
          name='Learn'
          component={Learn}
          
        />

        <Tab.Screen 
          name='Money'
          component={Money}
          
        />

        <Tab.Screen 
          name='Config' 
          component={Config}
           
        />

      </Tab.Navigator>
    
  )
}