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

            if(!firebase.auth().currentUser.emailVerified){
                alert('Verifique o seu e-mail antes de prosseguir.')
                return
            }

            firebase.database().ref('Usuarios').child(user.user.uid).on('value', (snapshot) => {
                setUsername(snapshot.val().username)
            })
  
            setUser(user.user.uid)
            setEmail(user.user.email)
            navigation.navigate('Routes')
            
        })
        .catch( (e) => {
            switch(e.code){
                case 'auth/user-not-found':
                    console.log(e)
                    break
                case 'auth/wrong-password':
                    console.log(e)
                    break
                default:
                    alert('Ops, algo deu errado!')
            }
        })

    }

    function resetPassword(){

        firebase.auth().sendPasswordResetEmail(email)
        .then( () => {
            alert('Foi enviado um e-mail de recuperação para: '+ email + '. Verifique a sua caixa de e-mail.')
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