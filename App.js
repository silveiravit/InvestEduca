import { NavigationContainer } from '@react-navigation/native' // Componente para efetuar a navegação entre telas
import { createNativeStackNavigator } from '@react-navigation/native-stack' //Biblioteca de navegação
import React, { useState } from 'react';

//Páginas
import Routes from './src/routes';
import Inicio from './src/pages/Inicial';
import Cadastro from './src/pages/Cadastro';
import Login from './src/pages/Login';
import Objetivo from './src/pages/Money/Objetivos';
import Gasto from './src/pages/Money/Gastos';

const Stack = createNativeStackNavigator() // Constante de navegação

export default function App () {

    return (
      
      <NavigationContainer>

        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >

          <Stack.Screen 
            name='Inicio'
            component={Inicio}
          />

          <Stack.Screen 
            name='Cadastro'
            component={Cadastro}
          />

          <Stack.Screen 
            name='Login'
            component={Login}
          />

          <Stack.Screen
            name='Routes'
            component={Routes}
          />

          <Stack.Screen
            name='Gasto'
            component={Gasto}
          />

          <Stack.Screen
            name='Objetivo'
            component={Objetivo}
          />

        </Stack.Navigator>

      </NavigationContainer>
    );
}