import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Dimensions } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker'

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH * 0.95

export default function Objetivo(){

    const [date, setDate] = useState(new Date())
    const [showPicker, setShowPicker] = useState(false)
    const [objetivos, setObjetivo] = useState(['Imóvel', 'Automóvel', 'Viagem', 'Outro'])
    const [objetivoSelect, setObjetivoSelect] = useState([])    

    return(
        <View style={ styles.container }>
            
            <StatusBar 
                barStyle={'light-content'}
                backgroundColor={'#000'}
            />

            <View style={ styles.view1 }>
                <Text style={ styles.titulo }>Estabeleça seus Objetivos</Text>
            </View>

            <View style={ styles.view2 }>

                <Text style={ styles.subtitulo }>GASTOS MENSAIS</Text>
                <TextInput style={ styles.input } />
            
                <Text style={ styles.subtitulo }>QUAL O SEU OBJETIVO?</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>

                    <View style={ styles.pickerObj }>
                        <Picker
                            selectedValue={ objetivoSelect }
                            onValueChange={ (itemvalue) => setObjetivoSelect(itemvalue) }
                        >
                            {
                                objetivos.map(obj => {
                                    return <Picker.Item value={obj} label={obj} />
                                })
                            }
                            
                        </Picker> 
                    </View>

                </View>

                <Text style={ styles.subtitulo }>VALOR MENSAL</Text>
                <TextInput style={ styles.input } />

                <View>

                    <Text style={ styles.subtitulo }>DATA PREVISTA</Text>
                    
                    <TextInput style={ styles.input } />

                </View>
            
                <Text style={ styles.subtitulo }>RENDA</Text>
                <TextInput style={ styles.input } />

            </View>

            <View style={ styles.areaBtn }>
                <TouchableOpacity style={ styles.btn }>
                    <Text style={ styles.textoBtn }>CALCULAR</Text>
                </TouchableOpacity>
            </View>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    view1: {
        justifyContent: 'flex-start',
        marginVertical: 30
    },
    view2: {
        justifyContent: 'center',
    },
    areaBtn: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 30
    },
    titulo: {
        color: '#161F4E',
        fontSize: 25,
        textAlign: 'center'
    },
    subtitulo: {
        fontSize: 20,
        color: '#161F4E',
        marginLeft: '2%',
        marginTop: '5%',
        fontWeight: '600'
    },
    input: {
        borderWidth: 2,
        borderRadius: 50,
        fontSize: 20,
        padding: 10,
        width: ITEM_WIDTH,
        textAlign: 'center'
    },
    btn: {
        backgroundColor: '#161F4E',
        borderRadius: 10,
        width: 200,
        marginTop: 20,
        height: 50,
        justifyContent: 'center'
    },
    textoBtn: {
        color: '#E9AB43',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    pickerObj: {
        borderWidth: 2,
        borderRadius: 50,      
        width: '50%'  
    }
})