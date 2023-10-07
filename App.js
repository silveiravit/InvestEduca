import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack' //Biblioteca de navegação
import React from 'react';

//Páginas
import Routes from './src/routes';
import Inicio from './src/pages/Inicial';
import Cadastro from './src/pages/Cadastro';
import Login from './src/pages/Login';

const Stack = createNativeStackNavigator()

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

        </Stack.Navigator>

      </NavigationContainer>
    );
}