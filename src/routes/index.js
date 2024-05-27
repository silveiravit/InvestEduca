import React, { useContext } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Autenticação
import { AuthContext } from '../contexts/auth';

// Páginas da navegação principal
import Login from '../pages/Login';

// Constante de navegação
import BottomTabRoutes from "../components/BottomTabRoutes";

export default function Routes(){

  const { user, themeMode } = useContext(AuthContext)
  
  if( !user ){
    return(
      <Login status={ (user) => setUser(user) }/>
    )
  }

  return(
    <BottomTabRoutes theme={themeMode}/>
  )
}