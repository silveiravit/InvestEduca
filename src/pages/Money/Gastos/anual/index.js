import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList, Modal, TouchableWithoutFeedback, ActivityIndicator } from "react-native";

// Componente de autenticação
import { AuthContext } from "../../../../contexts/auth";

// Conexão firebase
import firebase from '../../../../../database/FirebaseConnection'

// Componente dos meses
import Meses from "./meses";

// Biblioteca de icones
import { AntDesign } from '@expo/vector-icons';


// Tema
import ThemeContext from "../../../../contexts/ThemeContext";
import appTheme from "../../../../themes/Themes";

// Dimensões da tela
const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH * 0.95

export default function Anual(){

    const [loading, setLoading] = useState(false)

    // Context de Tema
    const [themeMode] = useContext(ThemeContext)
    // Context de Usuário
    const { user } = useContext(AuthContext)

    // Constantes de objetos dos meses
    const [meses] = useState([
        { key: 0, mes: 'Janeiro'},
        { key: 1, mes: 'Fevereiro'},
        { key: 2, mes: 'Março'},
        { key: 3, mes: 'Abril'},
        { key: 4, mes: 'Maio'},
        { key: 5, mes: 'Junho'},
        { key: 6, mes: 'Julho'},
        { key: 7, mes: 'Agosto'},
        { key: 8, mes: 'Setembro'},
        { key: 9, mes: 'Outubro'},
        { key: 10, mes: 'Novembro'},
        { key: 11, mes: 'Dezembro'},
    ])

    // Exibir modal mensal
    const [modalVisible, setModalVisible] = useState(false)

    // Exibir mês selecionado
    const [mesPress, setMesPress] = useState('')

    // Valor mensal registrado
    const [valorMensal, setValorMensal] = useState()
    
    // Definir a data selecionada
    const [anoAtual] = useState(new Date())
    let anoCad = anoAtual.getFullYear()

    // State para filtrar pelo mês
    const [mesCad, setMesCad] = useState(null);
    
    useEffect( () => {

        firebase.database().ref('gastos').child(user).orderByChild('mesCadastro').equalTo(mesCad).on('value', (snapshot) => {

            setValorMensal([])
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
            })
            let total = gasto.reduce((a, b) => a + b, 0)
            setValorMensal(total)
            
        })

    }, [mesCad])


    function keyMes(key){
        setLoading(true)
        setTimeout( () => {
            setMesCad(key)
            setLoading(false)
        }, 1000)
            
    }

    function handleMes(mes){
        setTimeout( () => {
            setModalVisible(true)
            setMesPress(mes)
        }, 1500) 
    }

    return(
        <View style={ [styles.container, appTheme[themeMode]] }>
            <Modal transparent visible={loading}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator 
                        size={100}
                        color={'#fff'}
                        animating={true}
                    />
                </View>
            </Modal>

            <View style={ styles.registros }>
                
                <TouchableOpacity style={ styles.areaAno } >
                    <Text style={ styles.ano }>{ anoAtual.getFullYear() }</Text>
                </TouchableOpacity>

                <View style={ [styles.areaMes, { backgroundColor: themeMode === 'light' ? '#161F4E' : '#481298', borderColor: '#E9AB43'}] }>                
                    <TouchableOpacity>
                        <FlatList
                            data={meses}
                            keyExtractor={ (item) => item.key }
                            renderItem={ ({item}) => (
                                <Meses data={item} handleMes={handleMes} keyMes={keyMes}/>
                            )}
                        />
                    </TouchableOpacity>
                </View>

            </View>

            <Modal visible={modalVisible} transparent={true} animationType="fade">
                <TouchableWithoutFeedback onPress={ () => setModalVisible(false) }>
                    <View style={{ flex: 1, backgroundColor: '#ffffff88'}}></View>
                </TouchableWithoutFeedback>

                <View style={ styles.mesModal }>
                    <Text style={ styles.textMes }> Extrato do mês de { mesPress }: </Text>

                    <Text style={ [styles.totalMes, { color: valorMensal > 0 ? '#27E309' : '#ff0000'} ] }>R$ { Number(valorMensal).toFixed(2).replace('.',',') }</Text>

                    <TouchableOpacity style={ styles.btnFeito } onPress={ () => setModalVisible(false) } >
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
        paddingVertical: 20
    },
    areaMes: {
        backgroundColor: '#161F4E',
        margin: 10,
        borderRadius: 10,
        padding: 10,
        height: 250
    },
    ano: {
        color: '#000',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '600',
        marginHorizontal: 10
    },
    areaAno: {
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mesModal: {
        height: 200,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderColor: '#161F4E'
    },
    textMes: {
        fontSize: 20,
        textAlign: 'center'
    },
    totalMes: {
        fontSize: 20,
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