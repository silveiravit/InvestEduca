import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Dimensions, FlatList, Alert, Modal, ActivityIndicator } from "react-native";

import CampoGasto from "./campogasto";

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

    const [modal, setModal] = useState(false)
    const { user } = useContext(AuthContext)
    const [valor, setValor] = useState(null)
    const [valorTotal, setValorTotal] = useState(0)
    const [themeMode] = useContext(ThemeContext)
    const [mesSelect] = useState(new Date())
    let mesFormat = mesSelect.getMonth()
    let exibirMes = ''

    useEffect( () => {
        
        setModal(true)

        function getUser(){
            if( !user ){
                return
            }

            firebase.database().ref('gastos').child(user).orderByChild('dataCadastro').equalTo(mesFormat).on('value', (snapshot) => {
                setValor([])
                let gasto = []
                snapshot?.forEach( (childItem) => {
                    let data = {
                        key: childItem.key,
                        nomeGasto: childItem.val().nomeGasto,
                        valorGasto: childItem.val().valorGasto,
                        dataCadastro: childItem.val().dataCadastro
                    }
                    gasto.push(data.valorGasto)
                    setValor(oldValor => [...oldValor, data].reverse())
                })
                let total = gasto.reduce((a, b) => a + b, 0)
                setValorTotal(total)
                setModal(false)
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
                        setModal(true)
                        firebase.database().ref('gastos').child(user).child(key).remove()
                        .then( () => {
                            const findGastos = valor.filter( item => item.key !== key)
                            setValor(findGastos)
                            setModal(false)
                        })
                    } 
                }
            ]
        )
    }

    function handleEdit(){

    }

    switch (mesFormat){
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
            <View style={ styles.registros }>

                <View style={ styles.areaMes }>
                    <Text style={ styles.textMes }>{ exibirMes }</Text>
                </View>

                <FlatList 
                    data={valor}
                    keyExtractor={ (item) => item.key }
                    renderItem={ ({item}) => (
                        <CampoGasto data={item} deleteItem={handleDelete} editItem={handleEdit} />
                    )}
                />

            </View>

            <View style={ styles.areaTotal }>
                <Text style={{ color: valorTotal > 0 ? '#12870C' : '#ff0000', fontSize: 25, fontWeight: '600', marginRight: 5}}>
                    TOTAL 
                </Text>

                <Text style={{ color: valorTotal > 0 ? '#12870C' : '#ff0000', fontSize: 25, fontWeight: '600'}}>
                    R$ { valorTotal.toFixed(2).replace('.',',') } 
                </Text>
            </View>

            <Modal visible={modal} animationType="fade" transparent={true}>
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
    }
})