import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList, Modal, TouchableWithoutFeedback, Platform } from "react-native";

// Componente dos meses
import Meses from "./meses";


// Biblioteca de icones
import { AntDesign } from '@expo/vector-icons';

// Biblioteca de data
import DateTimePicker from '@react-native-community/datetimepicker';

// Tema
import ThemeContext from "../../../../contexts/ThemeContext";
import appTheme from "../../../../themes/Themes";

// Dimensões da tela
const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH * 0.95

export default function Anual(){

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
    const [modalVisible, setModalVisible] = useState(false)
    const [mesPress, setMesPress] = useState('')
    const [valor, setValor] = useState()
    const [themeMode] = useContext(ThemeContext)
    const [anoAtual, setAnoAtual] = useState(new Date())
    const [showAno, setShowAno] = useState(false)

    function handleMes(mes){
        setModalVisible(true)
        setMesPress(mes)
    }

    function ano(){
        setShowAno(!showAno)
    }

    function anoSelecionado({ type }, selectDate){
        if( type == 'set' ){
            const currentDate = selectDate
            setAnoAtual(currentDate)

            if(Platform.OS === "android"){
                ano()
                setAnoAtual(formatDate(currentDate))
            }
        } else {
            ano()
        }
    }

    return(
        <View style={ [styles.container, appTheme[themeMode]] }>
            <View style={ styles.registros }>
                
                <TouchableOpacity style={ styles.areaAno } onPress={ ano }>
                    <Text style={ styles.ano }>{ anoAtual.getFullYear() }</Text>
                    <AntDesign name="downcircleo" size={25} color="black" />
                </TouchableOpacity>

                <View style={ [styles.areaMes, { backgroundColor: themeMode === 'light' ? '#161F4E' : '#481298', borderColor: '#E9AB43'}] }>                
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
                    <Text style={ styles.textMes }> Orçamento no mês de { mesPress }: </Text>

                    <Text style={ [styles.totalMes, { color: valor > 0 ? '#27E309' : '#ff0000'} ] }>R$ { valor }</Text>

                    <TouchableOpacity style={ styles.btnFeito } onPress={ () => setModalVisible(false) } >
                        <Text style={{ fontSize: 20, color: '#fff', fontWeight: '600'}}>CONCLUÍDO</Text>
                        <AntDesign name="check" size={30} color="white" />
                    </TouchableOpacity>
                </View>
            </Modal>

            { showAno && (
                <DateTimePicker 
                    mode="date"
                    value={anoAtual}
                    display="default"
                    dateFormat="yyyy"
                    maximumDate={new Date()}
                    onChange={anoSelecionado}
                />
            )}

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