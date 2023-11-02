import React, { createContext, useState } from "react";
import { useNavigation } from '@react-navigation/native'

import firebase from '../../database/FirebaseConnection'

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
        .catch( () => {
            alert('Ops, algo deu errado!')
        })

    }

    return(
        <AuthContext.Provider value={{ logar, user, email, username }}>
            {children}
        </AuthContext.Provider>
    )

}