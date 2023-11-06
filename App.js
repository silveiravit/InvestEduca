import { NavigationContainer } from '@react-navigation/native' // Componente para efetuar a navegação entre telas
import { createNativeStackNavigator } from '@react-navigation/native-stack' //Biblioteca de navegação
import React from 'react';

import AuthProvider from './src/contexts/auth';

//Páginas
import Routes from './src/routes';
import Inicio from './src/pages/Inicial';
import Cadastro from './src/pages/Cadastro';
import Login from './src/pages/Login';
import Objetivo from './src/pages/Money/Objetivos';
import Gasto from './src/pages/Money/Gastos';
import InformConta from './src/pages/Config/informConta';
import EducaFinan from './src/pages/Learn/educacaofinanceira';
import Dividas from './src/pages/Learn/dividas';
import Investimento from './src/pages/Learn/investimento';
import Organizar from './src/pages/Learn/organizar';
import Tema from './src/pages/Config/tema'

const Stack = createNativeStackNavigator() // Constante de navegação

export default function App () {

    return (
      
      <NavigationContainer>
        <AuthProvider>
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
          >
            {/* Telas de início, cadastro e login */}
            <Stack.Screen 
              name='Inicio'
              component={Inicio}
              options={{
                statusBarColor: '#161F4E'
              }}
            />

            <Stack.Screen 
              name='Cadastro'
              component={Cadastro}
              options={{
                statusBarColor: '#161F4E'
              }}
            />

            <Stack.Screen 
              name='Login'
              component={Login}
              options={{
                statusBarColor: '#161F4E'
              }}
            />

            {/* Navegação onde terá as telas de home, aprender, dinheiro e configuração */}
            <Stack.Screen 
              name='Routes'
              component={Routes}
              options={{
                statusBarColor: '#000',
                statusBarStyle: 'light'
              }}
            />

            {/* Subtelas da área de dinheiro */}
            <Stack.Screen
              name='Objetivo'
              component={Objetivo}
              options={{
                headerShown: true,
                headerTitle: 'VOLTAR',
                headerTintColor: '#FFF',
                statusBarColor: '#161F4E',
                headerStyle: {
                  backgroundColor: '#161F4E'
                }
              }}
            />

            <Stack.Screen
              name='Gasto'
              component={Gasto}
              options={{
                headerShown: true,
                headerTitle: 'Controle seus Gastos',
                headerTintColor: '#161F4E',
                statusBarColor: '#000',
                headerTitleAlign: 'center',
                headerTitleStyle: { fontSize: 25},
                headerStyle: {
                  backgroundColor: '#fff'
                }
              }}
            />

            {/* Subtelas da área de configuração */}

            <Stack.Screen
              name='Tema'
              component={Tema}
              options={{
                statusBarColor: '#000',
                statusBarStyle: 'light',
                headerShown: true,
                headerTitle: 'VOLTAR'
              }}
            />

            <Stack.Screen
              name='InformConta'
              component={InformConta}
              options={{
                statusBarColor: '#000',
                statusBarStyle: 'light',
                headerShown: true,
                headerTitle: 'VOLTAR'
              }}
            />

            {/* Subtelas da área de aprender */}
            <Stack.Screen 
              name='EducaFinan' 
              component={EducaFinan}
              options={{
                statusBarColor: '#E9AB43',
                statusBarStyle: 'light',
                headerShown: false,
              }}
            />

            <Stack.Screen 
              name='Dividas' 
              component={Dividas}
              options={{
                statusBarColor: '#E9AB43',
                statusBarStyle: 'light',
                headerShown: false,
              }}
            />

            <Stack.Screen 
              name='Investimento' 
              component={Investimento}
              options={{
                statusBarColor: '#E9AB43',
                statusBarStyle: 'light',
                headerShown: false,
              }}
            />

            <Stack.Screen 
              name='Organizar' 
              component={Organizar}
              options={{
                statusBarColor: '#E9AB43',
                statusBarStyle: 'light',
                headerShown: false,
              }}
            />

          </Stack.Navigator>
        </AuthProvider>

      </NavigationContainer>
    );
}