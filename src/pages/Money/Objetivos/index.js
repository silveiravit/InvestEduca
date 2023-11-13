import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, ScrollView, Modal, TouchableWithoutFeedback } from "react-native";
import { Picker } from '@react-native-picker/picker'
import { AntDesign } from '@expo/vector-icons';

import { Calendar } from 'react-native-calendars'

import Simular from "./simulacao";

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH * 0.90

export default function Objetivo(){

    const [date, setDate] = useState(new Date())
    const [showDate, setShowDate] = useState(false)
    const [markedDate, setMarkedDates] = useState({})
    const [dataPrevista, setDataPrevista] = useState()

    const [objetivos, setObjetivo] = useState([
        {key: 0, nome: 'Escolha uma opção'},
        {key: 1, nome: 'Imóvel'}, 
        {key: 2, nome: 'Veículo'}, 
        {key: 3, nome: 'Viagem'}, 
        {key: 4, nome: 'Outro'}
    ])
    const [objetivoSelect, setObjetivoSelect] = useState([])    
    const [modalVisible, setModalVisible] = useState(false)
    const [valorMensal, setValorMensal] = useState('')
    const [renda, setRenda] = useState('')

    function handleDate(date){
        setDate(new Date(date.dateString))

        let markedDay = {}

        markedDay[date.dateString] = {
            selected: true,
            selectedColor: '#0000ff',
            color: '#fff'
        }

        setMarkedDates(markedDay)
        
    }

    function dataSelect(dateSel){
        //setDate(markedDate)
        console.log(markedDate)
        setShowDate(false)
    }

    return(
        <View style={ styles.container }>

            <ScrollView>
            <View style={ styles.viewCont }>
                
                <View style={ styles.view1 }>
                    <Text style={ styles.titulo }>Estabeleça seus Objetivos</Text>
                    
                    <View style={ styles.form }>
                        <Text style={ styles.subtitulo }>QUAL O SEU OBJETIVO?</Text>
                        <View style={ styles.pickerObj }>
                            <Picker
                                selectedValue={ objetivoSelect }
                                onValueChange={ (itemvalue) => setObjetivoSelect(itemvalue) }
                                style={{ width: ITEM_WIDTH }}
                                
                            >
                                { 
                                    objetivos.map(obj => {
                                        return <Picker.Item value={obj.nome} label={obj.nome} key={obj.key} />
                                    })
                                }
                
                            </Picker>
                        </View>
                
                    </View>

                    <View style={ styles.form }>
                        <Text style={ styles.subtitulo }>VALOR MENSAL</Text>
                        <TextInput 
                            style={ styles.input } 
                            keyboardType="numeric" 
                            placeholder="Valor mensal que pode investir"
                            onChangeText={ (value) => setValorMensal(value) }
                        />
                    </View>
                    
                    <View style={ styles.form }>
                        <Text style={ styles.subtitulo }>DATA PREVISTA</Text>
                                
                        <TouchableOpacity style={ styles.btnDate } onPress={ () => setShowDate(true) }>
                            <Text style={{ flex: 1, textAlign: 'center', fontSize: 20, color: '#999'}}>
                                
                            </Text>
                                    
                            <AntDesign name="calendar" size={30} color="#FF0000" />
                        </TouchableOpacity>
                        
                    </View>
                
                    <View style={ styles.form }>
                        <Text style={ styles.subtitulo }>RENDA</Text>
                        <TextInput 
                            style={ styles.input } 
                            keyboardType="numeric" 
                            placeholder="Sua renda mensal"
                            onChangeText={ (value) => setRenda(value) }
                        />
                    </View>
                </View>

                <View style={ styles.areaBtn }>
                    <TouchableOpacity style={ styles.btn } onPress={ () => setModalVisible(true)} >
                        <Text style={ styles.textoBtn }>SIMULAR</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            </ScrollView>

            <Modal visible={modalVisible} animationType="fade">
                <Simular 
                    setVisible={ () => setModalVisible(false)}
                    data={objetivoSelect}
                    valorMensal={valorMensal}
                    renda={renda}
                />
            </Modal>

            <Modal visible={showDate} animationType="fade" transparent={true} >
                <TouchableWithoutFeedback onPress={ () => setShowDate(false)} >
                    <View style={{ flex: 1, backgroundColor: '#ffffff88'}}></View>
                </TouchableWithoutFeedback>

                <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#fff'}}>
                    <Calendar 
                        onDayPress={handleDate}
                        markedDates={markedDate}
                        enableSwipeMonths={true}
                        theme={{
                            todayTextColor: '#ff0000',
                            selectedDayBackgroundColor: '#161F4E',
                            selectedDayTextColor: '#fff'
                        }}
                        dataPrevista={markedDate}
                        initialDate={date.dateString}
                    />
                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#161F4E', marginTop: 20, marginHorizontal: 20,
                borderRadius: 10, alignItems: 'center', padding: 10, justifyContent: 'center'}} onPress={ dataSelect }>
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
    },
    view1: {
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    viewCont: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    areaBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
        
    },
    titulo: {
        color: '#161F4E',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: '600',
        marginVertical: 30
    },
    subtitulo: {
        fontSize: 20,
        color: '#161F4E',
        marginLeft: '3%',
        marginBottom: 15,
        fontWeight: '600'
    },
    input: {
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 20,
        padding: 10,
        width: ITEM_WIDTH,
        textAlign: 'center',
    },
    btn: {
        backgroundColor: '#161F4E',
        borderRadius: 50,
        width: 200,
        height: 50,
        justifyContent: 'center'
    },
    textoBtn: {
        color: '#FFF',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    pickerObj: {
        borderWidth: 2,
        borderRadius: 10,      
    },
    form: {
        marginVertical: 10,
    },
    btnDate: {
        marginHorizontal: 10,
        flexDirection: 'row',
        width: ITEM_WIDTH,
        justifyContent: 'space-between',
        borderWidth: 2,
        borderRadius: 10,
        padding: 8
    }
})