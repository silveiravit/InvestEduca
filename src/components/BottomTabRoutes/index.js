import react from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Biblioteca de icones
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

// Telas
import Home from "../../pages/Home";
import Learn from "../../pages/Learn";
import Money from "../../pages/Money";
import Config from "../../pages/Config";

const Tab = createBottomTabNavigator()

export default function BottomTabRoutes({ theme }){
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarLabelStyle: {fontSize: 15},
                tabBarActiveTintColor: '#E9AB43',
                tabBarInactiveTintColor: '#fff',
                tabBarStyle: {
                    height: 60,
                    backgroundColor: theme === 'light' ? '#161F4E' : '#481298',
                    position: 'absolute',
                    bottom: 10,
                    left: 15,
                    right: 15,
                    borderRadius: 10,
                    borderWidth: 0,
                    borderColor: '#000'
                }
            }}
        >

        <Tab.Screen 
            name='Home' 
            component={Home} 
            options={{
            tabBarIcon: ({color, size}) => {
                return <AntDesign name="home" size={30} color={ color } />
            }
            }}
        />

        <Tab.Screen 
            name='Aprenda' 
            component={Learn} 
            options={{
            tabBarIcon: ({color, size}) => {
                return <FontAwesome name="book" size={30} color={ color } />
            },
            }}
        />

        <Tab.Screen 
            name='Economias' 
            component={Money} 
            options={{
            tabBarIcon: ({color, size}) => {
                return <Zocial name="bitcoin" size={30} color={ color } />
            },
            }}
        />

        <Tab.Screen 
            name='Perfil' 
            component={Config} 
            options={{
            tabBarIcon: ({color, size}) => {
                return <Entypo name="user" size={30} color={color} />
            }
            }}
        />

        </Tab.Navigator>
    )
}