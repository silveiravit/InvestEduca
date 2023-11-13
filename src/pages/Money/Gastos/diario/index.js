import React, { useState, useContext, Component } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, FlatList, Modal, TouchableWithoutFeedback, Alert } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import firebase from '../../../../../database/FirebaseConnection'

import { AuthContext } from "../../../../contexts/auth";
import Categoria from "./categoria";

export default function Diario(){

    const [modalVisible, setModalVisible] = useState(false)
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
    ])

    function handleAdd(){

        if( novoValor === '' || nomeGasto === '' ){
            alert('Preencha os campos corretamente.')
            return
        }
        
        Alert.alert(
            "Confirme o gasto e o valor:",
            `Gasto: ${nomeGasto} \nValor: R$ ${novoValor}`,
            [
                {
                    text: "Cancelar",
                    onPress: () => { return },
                    style: "cancel"
                },
                { 
                    text: "OK", 
                    onPress: () => { 
                        let gastos = firebase.database().ref('gastos').child(user)
                        let chave = gastos.push().key

                        gastos.child(chave).set({
                            nomeGasto: nomeGasto,
                            valorGasto: Number(novoValor),
                            dataCadastro: dataAtual
                        })
                        .then( () => {
                            const data = {
                                key: chave,
                                nomeGasto: nomeGasto,
                                valorGasto: novoValor,
                                dataCadastro: dataAtual
                            }
                            setValor(oldValor => [...oldValor, data].reverse())
                        })
                        .catch( (error) => {
                            alert('Digite um valor para adicionar.')
                        })
                        setNovoValor('')
                    } 
                }
            ]
        )
    }

    function concluido(){
        if( nomeGasto === '' ){
            alert('Preencha o campo.')
            return
        }else{
            setModalVisible(false)
            alert('Categoria adicionada com sucesso!')
        }
    }

    return(
        <View style={ styles.container }>
            <View style={ styles.campoValor }>
                
                <TextInput
                    placeholder="R$"
                    onChangeText={ (valor) => setNovoValor(valor) }
                    style={ styles.input }
                    keyboardType="decimal-pad"
                    value={novoValor}
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
                    />
                        
                </View>

                <TouchableOpacity style={ styles.btnOutros } onPress={ () => setModalVisible(true) }>
                    <Text style={ styles.textOutros }>Adicionar outra categoria</Text>
                </TouchableOpacity>
            </View> 

            <Modal visible={modalVisible} animationType="fade" transparent={true}>
                <TouchableWithoutFeedback onPress={ () => setModalVisible(false)}>
                    <View style={ styles.viewModal1 }></View>
                </TouchableWithoutFeedback>

                <View style={ styles.viewOutros }>
                    <Text style={ styles.tituloOutros }>Informe outra categoria</Text>

                    <TextInput 
                        placeholder="Digite aqui"
                        style={ styles.inputOutros }
                        onChangeText={ (value) => setNomeGasto(value) }
                    />

                    <TouchableOpacity style={ styles.btnFeito } onPress={ concluido }>
                        <Text style={{ fontSize: 25, color: '#fff', fontWeight: '600'}}>FEITO</Text>
                        <AntDesign name="check" size={30} color="white" />
                    </TouchableOpacity>
                </View>
            </Modal>
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
        width: '80%',
        backgroundColor: '#ffffffbb',
        borderRadius: 10,
        marginVertical: 50,
        padding: 5,
        marginHorizontal: 10,
        fontSize: 25,
        textAlign: 'center',
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
        paddingVertical: 20      
    },
    campoCategoria1: {
        backgroundColor: '#161F4E',
        height: '40%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderBottomWidth: 2,
    },
    viewCategoria: {
        flex: 1,
        width: '95%',
    },
    btnOutros: {
        backgroundColor: '#161F4E',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        padding: 10,
    },
    textOutros: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 25
    },
    viewModal1: {
        backgroundColor: '#ffffff77',
        flex: 1
    },
    viewOutros: {
        height: '40%',
        backgroundColor: '#fff',
        justifyContent: 'space-around',
    },
    inputOutros: {
        borderWidth: 2,
        marginHorizontal: 20,
        borderRadius: 10,
        padding: 10,
        textAlign: 'center',
        fontSize: 20
    },
    tituloOutros: {
        fontSize: 25,
        fontWeight: '600',
        textAlign: 'center'
    },
    btnFeito: {
        backgroundColor: '#161F4E', 
        marginTop: 20, 
        marginHorizontal: 20,
        borderRadius: 10, 
        alignItems: 'center', 
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    }
})