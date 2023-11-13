import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, Dimensions } from "react-native";
import firebase from '../../../database/FirebaseConnection'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { AuthContext } from "../../contexts/auth";
import Loading from "../../components/Loading";

const WIDTH = Dimensions.get('window').width * 1

export default function Config(){

    const navigation = useNavigation()
    const { username } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)

    function sair(){
        setLoading(true)
        setTimeout( () => {
            firebase.auth().signOut()
            .then( () => {
                navigation.navigate('Login')
                setLoading(false)
            })   
        }, 2000)
    }

    return(
        <View style={ styles.container }>

            <Loading visible={loading} />

            <Image
                source={require('../../images/PorcoConfig.png')}
                style={ styles.img }
            />

            <View style={ styles.nomeUsuario }>
                <Text style={{ fontSize: 25}}>Bem-vindo, { username }!</Text>
            </View>

            <View style={ styles.config }>
                <Text style={ styles.titulo }>Aparência</Text>

                <TouchableOpacity style={ styles.btn } onPress={ () => navigation.navigate('Tema')}>
                    <View style={ styles.areaBtn }>
                        <Text style={ styles.subtitulo }>Tema</Text>
                        <AntDesign name="right" size={25} color="#EE990A" />
                    </View>
                </TouchableOpacity>

                <Text style={ styles.titulo }>Conta</Text>

                <TouchableOpacity style={ styles.btn } onPress={ () => navigation.navigate('Suporte')}>
                    <View style={ styles.areaBtn }>
                        <Text style={ styles.subtitulo }>Ajuda e Suporte</Text>
                        <AntDesign name="right" size={25} color="#EE990A" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.btn } onPress={ () => navigation.navigate('InformConta')}>
                    <View style={ styles.areaBtn }>
                        <Text style={ styles.subtitulo }>Informações da Conta</Text>
                        <AntDesign name="right" size={25} color="#EE990A" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={ sair }>
                    <Text style={ [styles.subtitulo, { color: '#EE990A'}] }>Sair</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        width: WIDTH
    },
    config: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    img: {
        width: 150,
        height: 150,
        marginVertical: 40,
        borderWidth: 1,
        borderColor: '#EE990A',
        borderRadius: 80
    },
    titulo: {
        color: '#EE990A',
        fontWeight: '600',
        fontSize: 25,
        marginVertical: 20
    },
    subtitulo: {
        color: '#161F4E',
        fontWeight: '600',
        fontSize: 25,
        borderBottomColor: '#ccc',
        marginTop: 20,
        marginBottom: 20,
        marginRight: '5%'
    },
    areaBtn: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    btn: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    nomeUsuario: {
        
    }
})