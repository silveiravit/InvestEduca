import React, { createContext, useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native'
import firebase from '../../database/FirebaseConnection'

import { Alert } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({})

export default function AuthProvider({ children }){

    const navigation = useNavigation()
    const [user, setUser] = useState(null)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [loading, setLoading] = useState(false)
    const [themeMode, setThemeMode] = useState('light')
    const [transparent, setTransparent] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTransparent(false)
        async function logged(){
            const e = await AsyncStorage.getItem('chave_email')
            const s = await AsyncStorage.getItem('chave_senha') 
            const t = await AsyncStorage.getItem('chave_tema')
            if(e && s){
                firebase.auth().signInWithEmailAndPassword(e, s)
                .then((user) => {
                    firebase.database().ref('Usuarios').child(user.user.uid).on('value', (snapshot) => {
                        setUsername(snapshot.val().username)
                    })
                    setThemeMode(t === 'light'?'dark':'light')
                    setUser(user.user.uid)
                    setEmail(user.user.email)
                    setTransparent(true)
                    navigation.navigate('Routes')
                    setLoading(false)
                })
                .catch(() => {
                    alert('Ops, algo deu errado!')
                    setLoading(false)
                    setTransparent(true)
                })
            }else{
                setLoading(false)
                setTransparent(true)
            }
        }   
        logged()
    }, [])

    async function logar(email, senha){
        setLoading(true)
        setTransparent(true)
        firebase.auth().signInWithEmailAndPassword(email, senha).then( (user) => {
            if(!firebase.auth().currentUser.emailVerified){
                alert('Verifique o seu e-mail antes de prosseguir.')
                return
            }
            firebase.database().ref('Usuarios').child(user.user.uid).on('value', (snapshot) => {
                setUsername(snapshot.val().username)
            })
            AsyncStorage.setItem('chave_email', email)
            AsyncStorage.setItem('chave_senha', senha)
            setTransparent(false)
            setLoading(false)
            setUser(user.user.uid)
            setEmail(user.user.email)
            navigation.navigate('Routes')
        }).catch( (e) => {
            setLoading(false)
            setTransparent(false)
            switch(e.code){
                case 'auth/user-not-found':
                    console.log(e)
                    break
                case 'auth/wrong-password':
                    console.log(e)
                    break
                default:
                    alert('Ops, algo deu errado! Verifique seu e-mail e senha.')
            }
        })
    }

    function resetPassword(email){
        Alert.alert(
            "Deseja trocar sua senha?",
            ``,
            [
                {
                    text: "Cancelar",
                    onPress: () => { return },
                    style: "cancel"
                },
                {
                    text: "Confirmar",
                    onPress: () => {
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
                }
            ]
        )
    }

    function logout(){
        setLoading(true)
        setTransparent(true)
        setTimeout(() => {
            firebase.auth().signOut().then(() => {
                AsyncStorage.clear()
                setUser(null)
                setEmail(null)
                setLoading(false)
                setTransparent(false)
            }).catch(() => {
                AsyncStorage.clear()
                setUser(null)
                setEmail(null)
                setLoading(false)
                setTransparent(false)
                alert('Ops, algo deu errado!')
            })
        })
    }

    function theme(){
        setThemeMode(themeMode === 'light'?'dark':'light')
        AsyncStorage.setItem('chave_tema', themeMode)
    }

    return(
        <AuthContext.Provider value={{ logar, user, email, username, resetPassword, loading, logout, theme, themeMode, transparent }}>
            {children}
        </AuthContext.Provider>
    )

}