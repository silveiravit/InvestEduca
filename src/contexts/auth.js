import React, { createContext, useState } from "react";
import { useNavigation } from '@react-navigation/native'
import firebase from '../../database/FirebaseConnection'

import Loading from '../Loading'

export const AuthContext = createContext({})

export default function AuthProvider({ children }){

    const [user, setUser] = useState(null)
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')

    function logar(email, senha){

        const user = firebase.auth().signInWithEmailAndPassword(email, senha)
        .then( (user) => {
            firebase.database().ref('usuarios').child(user.user.uid).on('value', (snapshot) => {
                setUsername(snapshot.val().username)
            })
  
            setUser(user.user.uid)
            setEmail(user.user.email)
            navigation.navigate('Routes')
            
        })
        .catch( (error) => {
            if( error.code === 'auth/invalid-email'){
                alert('E-mail inválido!')
            }
            else if( error.code === 'auth/weak-password'){
                alert('Sua senha precisa ter pelo menos 6 caracteres.')
            }
        })

    }

    function resetPassword(){

        firebase.auth().sendPasswordResetEmail(email)
        .then( () => {
            alert('Foi enviado um e-mail para: '+ email + '. Verifique a sua caixa de e-mail.')
        })
        .catch( (error) => {
            if( error.code === 'auth/user-not-found'){
                alert('Usuário não cadastrado.')
            }else if( error.code === 'auth/wrong-password'){
                alert('Erro na senha.')
            }else if( error.code === 'auth/invalid-email'){
                alert('E-mail inválido.')
            }
        })

    }

    return(
        <AuthContext.Provider value={{ logar, user, email, username, resetPassword }}>
            {children}
        </AuthContext.Provider>
    )

}