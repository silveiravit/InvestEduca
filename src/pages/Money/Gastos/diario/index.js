import React, { useState, useContext } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import firebase from '../../../../../database/FirebaseConnection'

import { AuthContext } from "../../../../contexts/auth";
import Categoria from "./categoria";

export default function Diario(){

    const { user } = useContext(AuthContext)
    const [novoValor, setNovoValor] = useState('')
    const [valor, setValor] = useState('')
    const [nomeGasto, setNomeGasto] = useState('')
    const [dataAtual, setDataAtual] = useState(Date())
    const [categoria] = useState([
        { key: 1, categoria: 'Veículo'},
        { key: 2, categoria: 'Imovél'},
        { key: 3, categoria: 'Empréstimo'},
        { key: 4, categoria: 'Despesas'},
        { key: 5, categoria: 'Estudos'},
        { key: 6, categoria: 'Outros'},
    ])

    function handleAdd(){

        if( novoValor === '' ){
            return
        }

        let gastos = firebase.database().ref('gastos').child(user)
        let chave = gastos.push().key

        gastos.child(chave).set({
            nomeGasto: nomeGasto,
            valorGasto: novoValor,
            dataCadastro: dataAtual
        })
        .then( () => {
            const data = {
                key: chave,
                nomeGasto: nomeGasto,
                valorGasto: novoValor,
                dataCadastro: dataAtual
            }
            setValor(oldValor => [...oldValor, data])
        })
        .catch( (error) => {
            alert('Digite um valor para adicionar.')
        })

    }

    return(
        <View style={ styles.container }>
            <View style={ styles.campoValor }>
                
                    <TextInput
                        placeholder="R$"
                        onChangeText={ (valor) => setNovoValor(valor) }
                        style={ styles.input }
                        keyboardType="numeric"
                    />
                

                <TouchableOpacity style={ styles.icon } onPress={ handleAdd }>
                    <AntDesign name="plus" size={25} color="white" />
                </TouchableOpacity>
            </View>

            <View style={ styles.viewCategoria } > 
                <View style={ styles.campoCategoria }>
                    <Text style={{ fontSize: 30, color: '#161F4E', fontWeight: '600'}}>CATEGORIA</Text>
                </View>

                <View style={ styles.campoCategoria1 }>
                    
                    <FlatList 
                        data={categoria}
                        keyExtractor={ (item) => item.key }
                        renderItem={ ({item}) => (
                            <Categoria data={item} add={ (gasto) => setNomeGasto(gasto) } />
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                    
                </View>
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    campoValor: {
        backgroundColor: '#E9AB43',
        borderWidth: 2,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 20,
        width:'95%',
        paddingHorizontal: 40
    },
    input: {
        backgroundColor: '#ffffffbb',
        borderRadius: 10,
        marginVertical: 50,
        padding: 5,
        marginHorizontal: 10,
        fontSize: 25,
        textAlign: 'center',
        flex: 1
    },
    icon: {
        backgroundColor: '#161F4E',
        padding: 10,
        borderRadius: 10
    },
    campoCategoria: {
        backgroundColor: '#E9AB43',
        borderWidth: 2,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 30      
    },
    campoCategoria1: {
        backgroundColor: '#161F4E',
        height: '40%',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    viewCategoria: {
        flex: 1,
        width: '95%',
    }
})