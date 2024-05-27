import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';


export default function Converter(){

    const cotacao = 4

    return(
        <View style={ styles.container }>
            <View style={ styles.viewTitulo }>
                <Text style={ styles.titulo }>COTAÇÃO DE MOEDAS</Text>
            </View>

            <View style={ styles.cotacao1 }>
                <TouchableOpacity style={styles.btnCot}>
                    <Image source={require('../../../icons/estados-unidos.png')} style={{ width: 40, height: 40}} />
                </TouchableOpacity>

                <TextInput 
                    placeholder='R$ 4,00'
                    placeholderTextColor={'#fff'}
                    style={styles.inputCot}
                    keyboardType='numeric'
                />
            </View>

            <TouchableOpacity>
                <AntDesign name="retweet" size={50} color="black" />
            </TouchableOpacity>

            <View style={ styles.calc }>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cotacao1: {
        backgroundColor: '#161F4E',
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputCot: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        fontSize: 20,
        padding: 10,
        textAlign: 'center',
        marginVertical: 10,
        color: '#fff',
        width: '70%'
    },
    btnCot: {
        borderWidth: 1,
        borderColor: '#fff',
        padding: 5,
        borderRadius: 10,
        marginHorizontal: 10
    },
    viewTitulo: {
        marginVertical: 10
    },
    titulo: {
        fontSize: 25,
        fontWeight: '600',
        color: '#161F4E'
    },
    calc: {
        flex: 1
    }
})