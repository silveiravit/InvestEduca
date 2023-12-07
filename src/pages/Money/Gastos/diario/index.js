import React, { useState, useContext } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, FlatList, Modal, TouchableWithoutFeedback, Alert, ActivityIndicator } from "react-native";
import { AntDesign } from '@expo/vector-icons';

// Dimensões da tela
const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH * 0.90

// Banco de Dados
import firebase from '../../../../../database/FirebaseConnection'

// Tema
import ThemeContext from '../../../../contexts/ThemeContext'
import appTheme from '../../../../themes/Themes'

// Componente de autenticação
import { AuthContext } from "../../../../contexts/auth";

// Componente categoria
import Categoria from "./categoria";

export default function Diario(){
    
    // Context de usuário e tema
    const { user } = useContext(AuthContext)
    const [themeMode] = useContext(ThemeContext)

    // Exibir modal
    const [modalVisible, setModalVisible] = useState(false)
    const [modalCadastro, setModalCadastro] = useState(false)
    
    // States de valores
    const [novoValor, setNovoValor] = useState('')
    const [valor, setValor] = useState('')
    const [nomeGasto, setNomeGasto] = useState('')

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
            "Confirme o gasto e o valor:",
            `Gasto: ${nomeGasto} \nValor: R$ ${novoValor.replace('.',',')}`,
            [
                {
                    text: "Cancelar",
                    onPress: () => { return },
                    style: "cancel"
                },
                { 
                    text: "OK", 
                    onPress: () => { 
                        setModalCadastro(true)
                        let gastos = firebase.database().ref('Gastos').child(user)
                        let chave = gastos.push().key

                        gastos.child(chave).set({
                            nomeGasto: nomeGasto,
                            valorGasto: Number(novoValor.replace(',','.')),
                            mesCadastro: new Date().getMonth(),
                            anoCadastro: new Date().getFullYear()
                        })
                        .then( () => {
                            const data = {
                                key: chave,
                                nomeGasto: nomeGasto,
                                valorGasto: Number(novoValor.replace(',','.')),
                                mesCadastro: new Date(),
                                anoCadastro: new Date().getFullYear()
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
        <View style={ [styles.container, appTheme[themeMode]] }>
            <View style={ styles.campoValor }>
                
                <View style={ styles.areaInputMoeda }>
                    <TouchableOpacity >                               
                        <Text style={{ fontSize: 25, fontWeight: '600'}}>R$ </Text>
                    </TouchableOpacity>

                    <TextInput 
                        style={ styles.input }
                        onChangeText={ (valor) => setNovoValor(valor.replace(/[ #*;.<>\{\}\[\]\\\/]/gi, ',')) }
                        keyboardType="numeric"
                        value={novoValor}
                    /> 

                </View> 

                <TouchableOpacity style={ styles.icon } onPress={ handleAdd }>
                    <AntDesign name="plus" size={30} color="white" />
                </TouchableOpacity>
            </View>

            <View style={ styles.viewCategoria } > 
                <View style={ [styles.campoCategoria, { borderWidth: themeMode === 'light' ? 2 : 0 }] }>
                    <Text style={{ fontSize: 30, color: '#161F4E', fontWeight: '700'}}>CATEGORIA</Text>
                </View>

                <View style={ [styles.campoCategoria1, { backgroundColor: themeMode === 'light' ? '#161F4E' : '#481298', borderColor: '#E9AB43'}] }>
                        
                    <FlatList
                        data={categoria}
                        keyExtractor={ (item) => item.key }
                        renderItem={ ({item}) => (
                            <Categoria data={item} add={ (gasto) => setNomeGasto(gasto) } />
                        )}
                    />
                        
                </View>

                <TouchableOpacity style={ [styles.btnOutros, { backgroundColor: themeMode === 'light' ? '#161F4E' : '#481298', borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth: 0,}] } onPress={ () => setModalVisible(true) }>
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
                        <Text style={{ fontSize: 25, color: '#fff', fontWeight: '600'}}>FEITO </Text>
                        <AntDesign name="check" size={30} color="white" />
                    </TouchableOpacity>
                </View>
            </Modal>

            <Modal visible={modalCadastro} animationType="fade" transparent={true}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#dddddd99'}}>
                    <ActivityIndicator 
                        size={150}
                        color={ themeMode === 'light' ? '#161F4E' : '#0D1117' }
                        animating={true}
                    />
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
        fontSize: 25,
        textAlign: 'center',
        color: '#000',
        width: '70%',
        height: 50
    },
    areaInputMoeda: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center',      
        marginVertical: 40,
        width: '75%',
        marginHorizontal: 10,
        backgroundColor: '#ffffff77',
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
        borderBottomWidth: 2,
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