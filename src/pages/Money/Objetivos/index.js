import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, ScrollView, Modal } from "react-native";
import { Picker } from '@react-native-picker/picker'

// Biblioteca de icones
import { AntDesign } from '@expo/vector-icons';

// Autenticação e Banco de Dados
import { AuthContext } from "../../../contexts/auth";
import firebase from '../../../../database/FirebaseConnection'

// Data
import DateTimePicker from '@react-native-community/datetimepicker';

import Simular from "./simulacao";

// Tema
import ThemeContext from '../../../contexts/ThemeContext'
import appTheme from '../../../themes/Themes'

// Navegação
import { useNavigation } from "@react-navigation/native";

// Dimensões da tela
const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH * 0.90

export default function Objetivo(){

    const navigation = useNavigation()
    const { user } = useContext(AuthContext)
    const [date, setDate] = useState(new Date())
    const [showDate, setShowDate] = useState(false)
    const [dataPrevista, setDataPrevista] = useState('')
    const [themeMode] = useContext(ThemeContext)

    const [objetivos] = useState([
        {key: 0, nome: 'Escolha uma opção'},
        {key: 1, nome: 'Imóvel'}, 
        {key: 2, nome: 'Carro'},
        {key: 2, nome: 'Moto'},  
        {key: 3, nome: 'Viagem'}, 
        {key: 4, nome: 'Outro'}
    ])
    const [objetivoSelect, setObjetivoSelect] = useState([])    
    const [modalVisible, setModalVisible] = useState(false)
    const [valorMensal, setValorMensal] = useState('')
    const [renda, setRenda] = useState('')

    const onChange = ({ type }, selectDate) => {
        if( type == 'set'){
            const currentDate = selectDate
            setDate(currentDate)
            setDataPrevista(formatDate(currentDate))
        } else {
            dateFunc()
        }
    }

    function formatDate(dataSelect){
        let date = new Date(dataSelect)

        let ano = date.getFullYear()
        let mes = date.getMonth()+1
        let dia = date.getDate()

        return `${dia}/${mes}/${ano}` 
    }

    function dateFunc(){
        setShowDate(!showDate)
    }

    function adicionarObjetivo(){

        if( valorMensal === '' || renda === '' || objetivos[0] === 'Escolha uma opção' || dataPrevista === '' ){
            alert('Preencha os campos corretamente.')
            return
        }

        setModalVisible(true)

        let objetivo = firebase.database().ref('objetivos').child(user)
        let chave = objetivo.push().key

        objetivo.child(chave).set({
            nomeObjetivo: objetivoSelect,
            valorMensal: valorMensal,
            renda: renda,
            dataPrevista: dataPrevista
        })
        .then( () => {
            const data = {
                key: chave,
                nomeObjetivo: objetivoSelect,
                valorMensal: valorMensal,
                renda: renda,
                dataPrevista: dataPrevista
            }

        })
        .catch( () => {
            alert('Ops, algo deu errado.')
        })

    }

    return(
        <View style={ styles.container }>
            <View style={ [styles.viewCont, appTheme[themeMode]] }>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={ [styles.view1, appTheme[themeMode]] }>
                        <Text style={ [styles.titulo, appTheme[themeMode]] }>Estabeleça seus Objetivos</Text>
                        <View style={ styles.form }>
                            <Text style={ [styles.subtitulo, appTheme[themeMode]] }>QUAL O SEU OBJETIVO?</Text>
                            <View style={ [styles.pickerObj, { backgroundColor: '#fff' }] }>
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
                            <Text style={ [styles.subtitulo, appTheme[themeMode]] }>VALOR MENSAL</Text>
                            <TextInput
                                style={ [styles.input, { backgroundColor: '#fff'}] }
                                keyboardType="numeric"
                                placeholder="Valor mensal que pode investir"
                                onChangeText={ (value) => setValorMensal(value) }
                            />
                        </View>
            
                        <View style={ styles.form }>
                            <Text style={ [styles.subtitulo, appTheme[themeMode]] }>DATA PREVISTA</Text>
            
                            <TouchableOpacity style={ [styles.btnDate, { backgroundColor: '#fff'}] } onPress={ dateFunc }>
                                <Text style={{ flex: 1, textAlign: 'center', fontSize: 20, color: '#777'}}>
                                    { dataPrevista == '' ? `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}` : dataPrevista }
                                </Text>
            
                                <AntDesign name="calendar" size={30} color="#FF0000" />
                            </TouchableOpacity>
            
                        </View>
                        <View style={ styles.form }>
                            <Text style={ [styles.subtitulo, appTheme[themeMode]] }>RENDA</Text>
                            <TextInput
                                style={ [styles.input, { backgroundColor: '#fff'}] }
                                keyboardType="numeric"
                                placeholder="Sua renda mensal"
                                onChangeText={ (value) => setRenda(value) }
                            />
                        </View>
                        <View style={ styles.areaBtn }>
                            <TouchableOpacity style={ [styles.btn, { backgroundColor: themeMode === 'light' ? '#161F4E' : '#5C20B6'}] } onPress={ adicionarObjetivo } >
                                <Text style={ styles.textoBtn }>SIMULAR</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={ [styles.areaBtn1, { borderTopColor: themeMode === 'light' ? '#161F4E' : '#5C20B6'}] }>
                            <TouchableOpacity style={ [styles.simBtn, { backgroundColor: themeMode === 'light' ? '#161F4E' : '#5C20B6'} ] } onPress={ () => navigation.navigate('Consultar') } >
                                <Text style={ styles.textoSimBtn }>Consulte suas simulações</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>

            <Modal visible={modalVisible} animationType="fade">
                <Simular 
                    setVisible={ () => setModalVisible(false)}
                    data={objetivoSelect}
                    valorMensal={valorMensal}
                    renda={renda}
                    dataPrevista={dataPrevista}
                />
            </Modal>

            { showDate && (
                <DateTimePicker 
                    mode="date"
                    value={date}
                    display="default"
                    onChange={onChange}
                    minimumDate={new Date()}
                />
            ) }                
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view1: {
        alignItems: 'center',
        backgroundColor: '#fff',
        marginVertical: '3%'
    },
    viewCont: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1
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
        marginVertical: 40
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
    },
    simBtn: {
        backgroundColor: '#161F4E',
        borderRadius: 10,
        width: ITEM_WIDTH,
        height: 50,
        justifyContent: 'center',
    },
    textoSimBtn: {
        color: '#FFF',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    areaBtn1: {
        borderTopColor: '#161F4E',
        borderTopWidth: 2,
        paddingVertical: 30,
        alignItems: 'center',
    },
})