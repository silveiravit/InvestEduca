import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Dimensions, FlatList, Alert, Modal, ActivityIndicator, TouchableWithoutFeedback, TouchableOpacity, TextInput } from "react-native";

import CampoGasto from "./campogasto";

// Biblioteca de icones
import { AntDesign } from '@expo/vector-icons';

// Componente de autenticação e conexão firebase
import { AuthContext } from '../../../../contexts/auth'
import firebase from '../../../../../database/FirebaseConnection'

// Temas 
import ThemeContext from '../../../../contexts/ThemeContext'
import appTheme from '../../../../themes/Themes'

// Dimensões da tela
const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH * 0.95

export default function Mensal(){

    // Context de usuário e tema
    const { user } = useContext(AuthContext)
    const [themeMode] = useContext(ThemeContext)

    // State para exibir o modal
    const [modalEdit, setModalEdit] = useState(false)
    const [loading, setloading] = useState(false)
    const [modalEditValor,setModalEditValor] = useState(false)

    // State para valores
    const [novoGasto, setNovoGasto] = useState('')
    const [valor, setValor] = useState(null)
    const [valorTotal, setValorTotal] = useState(0)
    const [novoValorGasto, setNovoValorGasto] = useState('')
    
    // Constante para mês
    const [dataCad] = useState(new Date())
    let mesCad = dataCad.getMonth()
    let anoCad = dataCad.getFullYear()
    let exibirMes = ''

    // Chave edição
    const [Key, setKey] = useState(0)

    useEffect( () => {
        
        setloading(true)

        function getUser(){
            if( !user ){
                return
            }

            firebase.database().ref('Gastos').child(user).orderByChild('mesCadastro').equalTo(mesCad).on('value', (snapshot) => {
                
                setValor([])
                let gasto = []
                snapshot?.forEach( (childItem) => {
                    let data = {
                        key: childItem.key,
                        nomeGasto: childItem.val().nomeGasto,
                        valorGasto: childItem.val().valorGasto,
                        mesCadastro: childItem.val().mesCadastro,
                        anoCadastro: childItem.val().anoCadastro
                    }
                    gasto.push(data.valorGasto)
                    setValor(oldValor => [...oldValor, data].reverse())
                })
                let total = gasto.reduce((a, b) => a + b, 0)
                setValorTotal(total)
                setloading(false)
            })
            
        }
        
        getUser()

    }, [user])

    function handleDelete(key){
        Alert.alert(
            "Confirmar exclusão?",
            "",
            [
                {
                    text: "Cancelar",
                    onPress: () => { return },
                    style: "cancel"
                },
                { 
                    text: "SIM", 
                    onPress: () => { 
                        setloading(true)
                        firebase.database().ref('Gastos').child(user).child(key).remove()
                        .then( () => {
                            const findGastos = valor.filter( item => item.key !== key)
                            setValor(findGastos)
                            setloading(false)
                        })
                    } 
                }
            ]
        )
    }

    function atualizarCampoValor(){

        if( novoValorGasto === '' ){
            alert('Preencha o campo corretamente.')
            return
        }

        setloading(true)
        firebase.database().ref('Gastos').child(user).child(Key).update({
            valorGasto: Number(novoValorGasto.replace(',','.'))
        })
        .then( () => {
            alert('Alteração concluída.')
            setModalEditValor(false)
            setloading(false)
        })
        .catch( () => {
            alert('Não foi possível realizar a alteração.')
            setModalEditValor(false)
            setloading(false)
        })

    }

    function handleEditValor(){
        
        setModalEditValor(true)

    }

    function atualizarCampo(){

        if( novoGasto === '' ){
            alert('Preencha o campo corretamente.')
            return
        }

        setloading(true)
        firebase.database().ref('Gastos').child(user).child(Key).update({
            nomeGasto: novoGasto
        })
        .then( () => {
            alert('Alteração concluída.')
            setModalEdit(false)
            setloading(false)
        })
        .catch( () => {
            alert('Não foi possível realizar a alteração.')
            setModalEdit(false)
            setloading(false)
        })

    }

    function handleEdit(){
        
        setModalEdit(true)

    }

    switch (mesCad){
        case 0: 
            exibirMes = 'JANEIRO'
            break
        case 1: 
            exibirMes = 'FEVEREIRO'
            break
        case 2: 
            exibirMes = 'MARÇO'
            break
        case 3: 
            exibirMes = 'ABRIL'
            break
        case 4:
            exibirMes = 'MAIO'
            break
        case 5:
            exibirMes = 'JUNHO'
            break
        case 6: 
            exibirMes = 'JULHO'
            break
        case 7:
            exibirMes = 'AGOSTO'
            break
        case 8:
            exibirMes = 'SETEMBRO'
            break
        case 9:
            exibirMes = 'OUTUBRO'
            break
        case 10:
            exibirMes = 'NOVEMBRO'
            break
        case 11:
            exibirMes = 'DEZEMBRO'
            break
        default:
            alert('Ops, algo deu errado')
    }

    return(
        <View style={ [styles.container, appTheme[themeMode]] }>

            <Modal visible={loading} animationType="fade" transparent={true}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#dddddd99'}}>
                    <ActivityIndicator 
                        size={100}
                        color={ themeMode === 'light' ? '#161F4E' : '#0D1117' }
                        animating={true}
                    />
                </View>
            </Modal>

            <View style={ styles.registros }>

                <View style={ styles.areaMes }>
                    <Text style={ styles.textMes }>{ exibirMes }</Text>
                </View>

                <FlatList 
                    data={valor}
                    keyExtractor={ (item) => item.key }
                    renderItem={ ({item}) => (
                        <CampoGasto data={item} deleteItem={handleDelete} editItem={handleEdit} chave={ (key) => setKey(key) } editValor={handleEditValor} />
                    )}
                />

            </View>

            <View style={ styles.areaTotal }>
                <Text style={{ color: valorTotal > 0 ? '#12870C' : '#ff0000', fontSize: 25, fontWeight: '600', marginRight: 5}}>
                    TOTAL 
                </Text>

                <Text style={{ color: valorTotal > 0 ? '#12870C' : '#ff0000', fontSize: 25, fontWeight: '600'}}>
                    { valorTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) } 
                </Text>
            </View>

            <Modal visible={modalEdit} transparent={true} animationType="fade">
                <TouchableWithoutFeedback onPress={ () => setModalEdit(false)}>
                    <View style={{ flex: 1, backgroundColor: '#ffffff88'}}></View>
                </TouchableWithoutFeedback>

                <View style={ styles.modalEdit }>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={ styles.textMes }>EDITAR GASTOS</Text>

                        <TouchableOpacity onPress={ () => setModalEdit(false) }>
                            <AntDesign name="closecircleo" size={35} color="#ff0000" />
                        </TouchableOpacity>
                    </View>

                    <TextInput 
                        placeholder="Digite aqui"
                        style={ styles.inputEdit }
                        onChangeText={ (novo) => setNovoGasto(novo) }
                    />

                    <TouchableOpacity style={ styles.btnFeito } onPress={ atualizarCampo } >
                        <Text style={{ fontSize: 20, color: '#fff', fontWeight: '600'}}>CONCLUÍDO </Text>
                        <AntDesign name="check" size={30} color="white" />
                    </TouchableOpacity>
                </View>
            </Modal>

            <Modal visible={modalEditValor} transparent={true} animationType="fade">
                <TouchableWithoutFeedback onPress={ () => setModalEditValor(false) }>
                    <View style={{ flex: 1, backgroundColor: '#ffffff88'}}></View>
                </TouchableWithoutFeedback>

                <View style={ styles.modalEdit }>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={ styles.textMes }>EDITAR VALORES</Text>

                        <TouchableOpacity onPress={ () => setModalEditValor(false) }>
                            <AntDesign name="closecircleo" size={35} color="#ff0000" />
                        </TouchableOpacity>
                    </View>

                    <TextInput 
                        placeholder="R$"
                        style={ styles.inputEdit }
                        onChangeText={ (novo) => setNovoValorGasto(novo.replace(/[ #*;.<>\{\}\[\]\\\/]/gi, '')) }
                        keyboardType="numeric"
                        value={novoValorGasto}
                    />

                    <TouchableOpacity style={ styles.btnFeito } onPress={ atualizarCampoValor } >
                        <Text style={{ fontSize: 20, color: '#fff', fontWeight: '600'}}>CONCLUÍDO </Text>
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
        alignItems: 'center'
    },
    registros: {
        backgroundColor: '#E9AB43',
        borderWidth: 2,
        borderRadius: 10,
        width: ITEM_WIDTH,
        marginVertical: 20,
        paddingVertical: 20,
        height: '60%'
    },
    areaMes: {
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textMes: {
        color: '#000',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '600',
        marginHorizontal: 10
    },
    areaTotal: {
        backgroundColor: '#E9AB43',
        width: ITEM_WIDTH,
        borderWidth: 2,
        borderRadius: 10,
        height: '11%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
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
    modalEdit: {
        height: 250,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderColor: '#161F4E'
    },
    inputEdit: {
        borderWidth: 2,
        marginHorizontal: 20,
        borderRadius: 10,
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
    },
})