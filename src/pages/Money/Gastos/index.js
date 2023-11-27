import React from "react"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

// Componentes das telas
import Diario from './diario'
import Anual from './anual'
import Mensal from './mensal'

// Constante de navegação
const Tab = createMaterialTopTabNavigator()

export default function Gasto(){

    return(
        <Tab.Navigator   
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#161F4E',
                tabBarLabelStyle: { fontSize: 20, fontWeight: '600'},
                tabBarStyle: {
                    backgroundColor: '#E9AB43',
                    height: 100,
                    justifyContent: 'center',
                    borderBottomWidth: 2,
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