import react from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Diario from "../../pages/Money/Gastos/diario";
import Mensal from "../../pages/Money/Gastos/mensal";
import Anual from "../../pages/Money/Gastos/anual";

import { AntDesign, Fontisto } from 'react-native-vector-icons'

const BottomTab = createBottomTabNavigator()

export default function BottomTabMoney({ theme }){
    return(
        <BottomTab.Navigator  
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#E9AB43',
                tabBarInactiveTintColor: '#fff',
                tabBarShowLabel: true,
                tabBarLabelStyle: {fontSize: 15},
                tabBarStyle: {
                    backgroundColor: theme === 'light'?'#161F4E':'#481298',
                    position: 'absolute',
                    bottom: 10,
                    left: 15,
                    right: 15,
                    borderRadius: 10,
                    borderColor: '#000',
                    height: 60
                }
            }}
        >
            <BottomTab.Screen
                name="Registrar"
                component={Diario}
                options={{
                    tabBarIcon: ({color}) => (
                        <AntDesign name="shoppingcart" size={30} color={color} />
                    )
                }}
            />

            <BottomTab.Screen
                name="Carteira"
                component={Mensal}
                options={{
                    tabBarIcon: ({color}) => (
                        <Fontisto name="wallet" size={30} color={color} />
                    )
                }}      
            />

            <BottomTab.Screen
                name="Extrato"
                component={Anual}
                options={{
                    tabBarIcon: ({color}) => (
                        <AntDesign name="areachart" size={30} color={color} />
                    )
                }}
            />

        </BottomTab.Navigator>
    )
}