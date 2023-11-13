import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList, Modal, TouchableWithoutFeedback } from "react-native";
import Meses from "./meses";
import { AntDesign } from '@expo/vector-icons';

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH * 0.95

export default function Anual(){

    const [meses] = useState([
        { key: 1, mes: 'Janeiro'},
        { key: 2, mes: 'Fevereiro'},
        { key: 3, mes: 'Março'},
        { key: 4, mes: 'Abril'},
        { key: 5, mes: 'Maio'},
        { key: 6, mes: 'Junho'},
        { key: 7, mes: 'Julho'},
        { key: 8, mes: 'Agosto'},
        { key: 9, mes: 'Setembro'},
        { key: 10, mes: 'Outubro'},
        { key: 11, mes: 'Novembro'},
        { key: 12, mes: 'Dezembro'},
    ])
    const [modalVisible, setModalVisible] = useState(false)
    const [mesPress, setMesPress] = useState('')
    const [valor, setValor] = useState('')

    function handleMes(mes){
        setModalVisible(true)
        setMesPress(mes)
    }

    return(
        <View style={ styles.container }>
            <View style={ styles.registros }>

                <View style={ styles.areaAno }>
                    <Text style={ styles.ano }>2023</Text>
                </View>

                <View style={ styles.areaMes }>                
                    <TouchableOpacity>
                        <FlatList
                            data={meses}
                            keyExtractor={ (item) => item.key }
                            renderItem={ ({item}) => (
                                <Meses data={item} handleMes={handleMes}/>
                            )}
                        />
                    </TouchableOpacity>
                </View>

            </View>

            <Modal visible={modalVisible} transparent={true} animationType="fade">
                <TouchableWithoutFeedback onPress={ () => setModalVisible(false)}>
                    <View style={{ flex: 1, backgroundColor: '#ffffff88'}}></View>
                </TouchableWithoutFeedback>

                <View style={ styles.mesModal }>
                    <Text style={ styles.textMes }> Seu orçamento no mes de { mesPress }: </Text>

                    <Text style={ [styles.totalMes, { color: valor > 0 ? '#27E309' : '#ff0000'} ] }>R$ 100</Text>

                    <TouchableOpacity style={ styles.btnFeito } onPress={ () => setModalVisible(false) } >
                        <Text style={{ fontSize: 20, color: '#fff', fontWeight: '600'}}>CONCLUÍDO</Text>
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
        borderRadius: 20,
        padding: 10,
        height: 250
    },
    ano: {
        color: '#000',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '600'
    },
    areaAno: {
        marginBottom: 20
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