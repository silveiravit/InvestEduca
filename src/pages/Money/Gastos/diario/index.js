import React, { useState, useContext } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, FlatList, Modal, TouchableWithoutFeedback, Alert, ActivityIndicator } from "react-native";

import { AntDesign } from '@expo/vector-icons';

import CurrencyInput from "react-native-currency-input";

import format from "date-fns/format";

// Dimensões da tela
const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH * 0.90

// Banco de Dados
import firebase from '../../../../../database/FirebaseConnection'

// Tema
import {
    Container,
    CampoTitulo,
    CampoValor,
    AreaInputMoeda,
    ButtonAdd,
    Input,
    AreaCategoria,
    CampoCategoria,
    CategoriaText,
    CampoCategoria1,
    ButtonAddCategoria,
    Titulo
} from '../styles/styles'

// Componente de autenticação
import { AuthContext } from "../../../../contexts/auth";

// Componentes
import Categoria from "../../../../components/Categoria/categoria";
import RegisterTypes from "../../../../components/RegisterTypes";

export default function Diario(){
    
    // Context de usuário e tema
    const { user, themeMode } = useContext(AuthContext)

    // Exibir modal
    const [modalVisible, setModalVisible] = useState(false)
    const [modalCadastro, setModalCadastro] = useState(false)
    
    // States de valores
    const [novoValor, setNovoValor] = useState(0)
    const [valor, setValor] = useState('')
    const [nomeGasto, setNomeGasto] = useState('')
    const [type, setType] = useState('Receita')

    // State de categorias
    const [categoria] = useState([
        { key: 0, categoria: 'Salário'},
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
            "Confirme seus dados:",
            `Tipo: ${type} \nCategoria: ${nomeGasto} \nValor: ${novoValor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`,
            [
                {
                    text: "Cancelar",
                    onPress: () => { return },
                    style: "cancel"
                },
                { 
                    text: "Confirmar", 
                    onPress: () => { 
                        setModalCadastro(true)
                        let gastos = firebase.database().ref('Gastos').child(user)
                        let chave = gastos.push().key

                        gastos.child(chave).set({
                            nomeGasto: nomeGasto,
                            tipo: type,
                            valorGasto: type === 'Receita'?Number(novoValor.toFixed(2).replace('-','')):Number('-'+novoValor.toFixed(2).replace('-','')),
                            data: format(new Date(), "dd/MM/yyyy")
                        })
                        .then( () => {
                            const data = {
                                key: chave,
                                nomeGasto: nomeGasto,
                                tipo: type,
                                valorGasto: type === 'Receita'?Number(novoValor.toFixed(2).replace('-','')):Number('-'+novoValor.toFixed(2).replace('-','')),
                                data: format(new Date(), "dd/MM/yyyy")
                            }
                            setValor(oldValor => [...oldValor, data].reverse())
                            setModalCadastro(false)
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
        <Container theme={themeMode}>
            <CampoTitulo>
                <Titulo theme={themeMode}>Registro de Gastos</Titulo>
            </CampoTitulo>
            <CampoValor>
                <AreaInputMoeda>                         
                    <CurrencyInput 
                        value={Number(novoValor)}
                        onChangeValue={(value) => setNovoValor(Number(value))}
                        renderTextInput={textInputProps => <Input {...textInputProps} variant='filled' />}
                        prefix="R$ "
                        delimiter="."
                        separator=","
                        precision={2}
                        placeholder="Digite o valor"
                        keyboardType="numeric"
                    />
                    <ButtonAdd theme={themeMode} onPress={handleAdd}>
                        <AntDesign name="plus" size={30} color="white" />
                    </ButtonAdd>
                </AreaInputMoeda> 
                <RegisterTypes type={type} sendTypeChanged={(item) => setType(item)}/>
            </CampoValor>

            <AreaCategoria> 
                <CampoCategoria theme={themeMode}>
                    <CategoriaText theme={themeMode}>CATEGORIA</CategoriaText>
                </CampoCategoria>
                <CampoCategoria1 theme={themeMode}>
                    <FlatList
                        data={categoria}
                        keyExtractor={ (item) => item.key }
                        renderItem={ ({item}) => (
                            <Categoria data={item} add={ (gasto) => setNomeGasto(gasto) } />
                        )}
                    />
                </CampoCategoria1>

                <ButtonAddCategoria theme={themeMode} onPress={ () => setModalVisible(true) }>
                    <Text style={ styles.textOutros }>Adicionar outra categoria</Text>
                </ButtonAddCategoria>
            </AreaCategoria> 
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
                        <Text style={{ fontSize: 25, color: '#fff', fontWeight: '600'}}>ok</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            <Modal visible={modalCadastro} animationType="fade" transparent={true}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#dddddd99'}}>
                    <ActivityIndicator 
                        size={100}
                        color={ themeMode === 'light' ? '#161F4E' : '#0D1117' }
                        animating={true}
                    />
                </View>
            </Modal>
        </Container>
    )
}

const styles = StyleSheet.create({
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
    },
    btnDate: {
        marginHorizontal: 10,
        flexDirection: 'row',
        width: ITEM_WIDTH,
        justifyContent: 'space-between',
        borderWidth: 2,
        borderRadius: 10,
        padding: 8
    },
    viewData: {
        height: '40%',
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
})