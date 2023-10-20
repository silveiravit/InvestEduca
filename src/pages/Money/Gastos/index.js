import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Dimensions, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import CampoGasto from "./campogasto";

import firebase from '../../../../database/FirebaseConnection'

import Login from "../../Login";

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH * 0.95

export default function Gasto(){

    const [valor, setValor] = useState([])
    const [novoValor, setNovoValor] = useState('')
    const [user, setUser] = useState(null)

    function handleAdd(){

        if( novoValor === ''){
            return
        }

        let gastos = firebase.database().ref('Gastos').child(user)
        let chave = gastos.push().key

        gastos.child(chave).set({
            gasto: novoValor
        })
        .then( () => {
            const data = {
                key: chave,
                gasto: novoValor
            }

            setValor(oldValor => [...oldValor, data])

        })

        

    }

    function handleDelete(){

    }

    function handleEdit(){

    }

    

    return(
        <View style={ styles.container }>
            
            <StatusBar 
                barStyle={'light-content'}
                backgroundColor={'#000'}
            />

            <View style={ styles.view1 }>
                <Text style={ styles.titulo }>Organize seus Gastos</Text>
            </View>

            <View style={ styles.areaMensal }>
                <TouchableOpacity>
                    <Text style={ styles.textMensal }>Diário</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={ styles.textMensal }>Mensal</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={ styles.textMensal }>Anual</Text>
                </TouchableOpacity>
            </View>

            <View style={ styles.registro }>
                
                <TextInput 
                    style={ styles.campoRegistro }
                    placeholder="R$"
                    onChangeText={ (valor) => setNovoValor(valor) }
                    value={novoValor}
                    
                />

                <TouchableOpacity style={ styles.regBtn } onPress={ handleAdd }>
                    <AntDesign name="plus" size={35} color={'#fff'}/>
                </TouchableOpacity>

            </View>
    
            <FlatList 
                data={valor}
                keyExtractor={ (item) => item.key }
                renderItem={ ({ item }) => (
                    <CampoGasto data={item} deleteItem={ handleDelete } editItem={ handleEdit } />
                ) }
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    titulo: {
        color: '#161F4E',
        fontSize: 25,
        textAlign: 'center'
    },
    areaMensal: {
        flexDirection: 'row',
        backgroundColor: '#E9AB43',
        width: ITEM_WIDTH,
        borderRadius: 10,
        height: 100, 
        alignItems: 'center',
        justifyContent: 'space-around',
        borderWidth: 2,
        borderColor: '#000'
    },
    textMensal: {
        fontSize: 20,
        color: '#161F4E',
        fontWeight: '600'
    },
    registro: {
        backgroundColor: '#E9AB43',
        width: ITEM_WIDTH,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
        marginTop: 30,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    campoRegistro: {
        fontSize: 20,
        backgroundColor: '#eee',
        width: '70%',
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        marginHorizontal: 10
    },
    regBtn: {
        backgroundColor: '#161F4E',
        padding: 5,
        borderRadius: 10,
    }
})