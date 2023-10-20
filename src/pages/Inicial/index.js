import react, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

export default function Inicio(){

    const navigation = useNavigation()

    return(
        <View style={ styles.container }>

            <StatusBar 
                barStyle={'light-content'}
                backgroundColor={'#161F4E'}
            />

            <View style={ styles.areaTitulo }>
                <Text style={ styles.text }>Invest</Text>
                <Text style={ styles.text1 }>Educa</Text>
            </View>

            <TouchableOpacity style={ styles.btn } onPress={ () => navigation.navigate('Cadastro') }>
                <AntDesign name="arrowright" size={50} color="white" />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161F4E',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 70,
        color: '#fff',
        marginBottom: 50,
        fontWeight: 'bold'
    },
    text1: {
        fontSize: 70,
        color: '#E9AB43',
        marginBottom: 50,
        fontWeight: 'bold'
    },
    btn: {
        backgroundColor: '#E9AB43',
        padding: 10,
        borderRadius: 50
    },
    areaTitulo: {
        flexDirection: 'row',
        paddingHorizontal: 10
    }
})