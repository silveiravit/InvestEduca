import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from "react-native";
import firebase from '../../../database/FirebaseConnection'
import { useNavigation } from '@react-navigation/native'

export default function Config(){

    const navigation = useNavigation()

    async function sair(){
        
        await firebase.auth().signOut()
        .then( (value) => {
            alert('Saindo da aplicação!')
            navigation.navigate('Login')
        })
        .catch( (error) => {
            alert('Ops, ocorreu um erro!')
        })

    }

    return(
        <View style={ styles.container }>

            <StatusBar 
                barStyle={'light-content'}
                backgroundColor={'#000'}
            />

            <Image
                source={require('../../img/PorcoConfig.png')}
                style={ styles.img }
            />

            <View style={ styles.config }>
                <Text style={ styles.titulo }>Aparência</Text>

                <TouchableOpacity>
                    <Text style={ styles.subtitulo }>Tema</Text>
                </TouchableOpacity>

                <Text style={ styles.titulo }>Conta</Text>

                <TouchableOpacity>
                    <Text style={ styles.subtitulo }>Informações da conta</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={ styles.subtitulo }>Notificações</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={ styles.subtitulo }>Privacidade</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={ sair }>
                    <Text style={ [styles.subtitulo, { color: '#ff0000'}] }>Sair</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#eee'
    },
    config: {
        flex: 1,
        justifyContent: 'center'
    },
    img: {
        width: 150,
        height: 150,
        marginTop: 40,
        borderWidth: 1,
        borderColor: '#EE990A',
        borderRadius: 80
    },
    titulo: {
        color: '#EE990A',
        fontWeight: '600',
        fontSize: 25
    },
    subtitulo: {
        color: '#161F4E',
        fontWeight: '600',
        fontSize: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginTop: 20,
        marginBottom: 30
    }
})