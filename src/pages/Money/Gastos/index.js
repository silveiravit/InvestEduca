import React from "react"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'

import Diario from './diario'
import Anual from './anual'
import Mensal from './mensal'

const Tab = createMaterialTopTabNavigator()

export default function Gasto(){

    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: { fontSize: 20, fontWeight: '600'},
                tabBarStyle: {
                    backgroundColor: '#E9AB43',
                    borderColor: '#000',
                    borderWidth: 2,
                    borderRadius: 10,
                    margin: 10,
                    height: 100,
                    justifyContent: 'center',
                },      
            }}
            
        >
            <Tab.Screen
                name="Diário"
                component={Diario}
            />

            <Tab.Screen
                name="Mensal"
                component={Mensal}
            />

            <Tab.Screen
                name="Anual"
                component={Anual}
            />

        </Tab.Navigator>
    )
}