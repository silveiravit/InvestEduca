import { NavigationContainer } from '@react-navigation/native' // Componente para efetuar a navegação entre telas
import { createNativeStackNavigator } from '@react-navigation/native-stack' //Biblioteca de navegação
import React, { useState } from 'react';

import AuthProvider from './src/contexts/auth';

// Tema
import ThemeContext from './src/contexts/ThemeContext';

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
import Suporte from './src/pages/Config/suporte';
import Consultar from './src/pages/Money/Objetivos/consultar';

const Stack = createNativeStackNavigator() // Constante de navegação

export default function App () {

    const themeHook = useState("light")

    return (
      
      <NavigationContainer>
        <ThemeContext.Provider value={themeHook}>
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
                  statusBarColor: themeHook === 'light' ? '#0D1117' : '#161F4E'
                }}
              />
              <Stack.Screen
                name='Cadastro'
                component={Cadastro}
                options={{
                  statusBarColor: themeHook === 'light' ? '#0D1117' : '#161F4E'
                }}
              />
              <Stack.Screen
                name='Login'
                component={Login}
                options={{
                  statusBarColor: themeHook === 'light' ? '#0D1117' : '#161F4E'
                }}
              />
              {/* Navegação onde terá as telas de home, aprender, dinheiro e configuração */}
              <Stack.Screen
                name='Routes'
                component={Routes}
                options={{
                  statusBarColor: themeHook === 'light' ? '#000' : '#0D1117',
                  statusBarStyle: 'light'
                }}
              />
              {/* Subtelas da área de dinheiro */}
              <Stack.Screen
                name='Objetivo'
                component={Objetivo}
                options={{
                  headerShown: false,
                  headerTintColor: '#FFF',
                  statusBarColor: themeHook === 'light' ? '#161F4E' : '#0D1117',
                  headerStyle: {
                    backgroundColor: '#161F4E'
                  }
                }}
              />
              <Stack.Screen
                name='Gasto'
                component={Gasto}
                options={{
                  headerShown: false,
                  headerTintColor: '#161F4E',
                  statusBarColor: '#000',
                  headerTitleAlign: 'center',
                  headerTitleStyle: { fontSize: 25},
                  headerStyle: {
                    backgroundColor: '#fff'
                  }
                }}
              />
              <Stack.Screen
                name='Consultar'
                component={Consultar}
                options={{
                  headerShown: false,
                  headerTintColor: '#FFF',
                  statusBarColor: themeHook === 'light' ? '#161F4E' : '#0D1117',
                  headerStyle: {
                    backgroundColor: '#161F4E'
                  }
                }}
              />
              {/* Subtelas da área de configuração */}
          
              <Stack.Screen
                name='InformConta'
                component={InformConta}
                options={{
                  statusBarColor: themeHook === 'light' ? '#161F4E' : '#0D1117',
                  statusBarStyle: 'light',
                  headerShown: false
                }}
              />
              <Stack.Screen
                name='Suporte'
                component={Suporte}
                options={{
                  statusBarColor: themeHook === 'light' ? '#161F4E' : '#0D1117',
                  statusBarStyle: 'light',
                  headerShown: false
                }}
              />
          
              {/* Subtelas da área de aprender */}
              <Stack.Screen
                name='EducaFinan'
                component={EducaFinan}
                options={{
                  statusBarColor: '#E9AB43',
                  statusBarStyle: 'auto',
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
        </ThemeContext.Provider>
      </NavigationContainer>
    );
}