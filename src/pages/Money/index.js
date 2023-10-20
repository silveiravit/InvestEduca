import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, Dimensions, Button} from "react-native";
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';

import Login from "../Login";

import firebase from '../../../database/FirebaseConnection'

import Gasto from "./Gastos";
import Objetivo from "./Objetivos";

export default function Money(){

    const [type, setType] = useState('')
    const navigation = useNavigation()

    return(
        <View style={ styles.container }>
            <StatusBar 
                barStyle={'light-content'}
                backgroundColor={'#000'}
            />

            <TouchableOpacity 
                style={ styles.btn } 
                onPress={ () => navigation.navigate('Objetivo') }
            >   
                <View style={ styles.view }>
                    <Text style={ styles.textoBtn }>OBJETIVOS </Text>
                    <View style={ styles.icon }>
                        <AntDesign name="arrowright" size={30} color="black" /> 
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
                style={ styles.btn } 
                onPress={ () => navigation.navigate('Gasto') }
            >
                <View style={ styles.view }>
                    <Text style={ styles.textoBtn }>GASTOS</Text>
                    <View style={ styles.icon }>
                        <AntDesign name="arrowright" size={30} color="black" /> 
                    </View>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: '#161F4E',
        margin: 7,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },  
    textoBtn: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
    },
    icon: {
        backgroundColor: '#E9AB43',
        justifyContent: 'center',
        borderRadius: 30,
        padding: 5
    },
    view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
})