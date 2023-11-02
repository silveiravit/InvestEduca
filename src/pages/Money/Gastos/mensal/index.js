import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList } from "react-native";

import firebase from '../../../../../database/FirebaseConnection'

import CampoGasto from "./campogasto";

import {AuthContext} from '../../../../contexts/auth'

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH * 0.95

export default function Mensal(){

    const { user } = useContext(AuthContext)
    const [valor, setValor] = useState(null)
    
    useEffect( () => {

        function getUser(){
            if( !user ){
                return
            }

            firebase.database().ref('gastos').child(user).on('value', (snapshot) => {

                setValor([])

                snapshot?.forEach( (childItem) => {
                    let data = {
                        key: childItem.key,
                        nomeGasto: childItem.val().nomeGasto,
                        valorGasto: childItem.val().valorGasto
                    }

                    setValor(oldValor => [...oldValor, data])

                })

            })

        }

        getUser()

    }, [user])

    function handleDelete(key){
        firebase.database().ref('gastos').child(user).child(key).remove()
        .then( () => {
            const findGastos = valor.filter( item => item.key !== key)
            setValor(findGastos)
        })
    }

    function handleEdit(){

    }

    return(
        <View style={ styles.container }>
            <View style={ styles.registros }>

                <View style={ styles.areaMes }>
                    <Text style={ styles.textMes }>Novembro</Text>
                </View>

                <FlatList 
                    data={valor}
                    keyExtractor={ (item) => item.key }
                    renderItem={ ({item}) => (
                        <CampoGasto data={item} deleteItem={handleDelete} editItem={handleEdit} />
                    )}
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    registros: {
        backgroundColor: '#E9AB43',
        borderWidth: 2,
        borderRadius: 10,
        width: ITEM_WIDTH,
        marginVertical: 20,
        paddingVertical: 20
    },
    areaMes: {
        marginBottom: 20
    },
    textMes: {
        fontSize: 25,
        color: '#000',
        fontWeight: '600',
        textAlign: 'center'
    }
})