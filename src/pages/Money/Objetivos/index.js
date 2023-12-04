import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, ScrollView, Modal, Platform, ActivityIndicator } from "react-native";

// Biblioteca de icones
import { AntDesign } from '@expo/vector-icons';

// Autenticação e Banco de Dados
import { AuthContext } from "../../../contexts/auth";
import firebase from '../../../../database/FirebaseConnection'

// Data e escolha de objetivo
import { Picker } from '@react-native-picker/picker'
import DateTimePicker from '@react-native-community/datetimepicker';

// Componente de simulação
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

    // Constante de navegação
    const navigation = useNavigation()

    // Context de usuário
    const { user } = useContext(AuthContext)

    // State de datas
    const [date, setDate] = useState(new Date())

    // State para mostrar a data
    const [showDate, setShowDate] = useState(false)

    // State para definir a data prevista
    const [dataPrevista, setDataPrevista] = useState('')

    // Context de Tema
    const [themeMode] = useContext(ThemeContext)

    // State de array de objetos de objetivos
    const [objetivos] = useState([
        {key: 0, nome: 'Imóvel'}, 
        {key: 1, nome: 'Carro'},
        {key: 2, nome: 'Moto'},  
        {key: 3, nome: 'Viagem'},
    ])

    // State que define o objetivo selecionado
    const [objetivoSelect, setObjetivoSelect] = useState([])    

    // State para exibir o modal
    const [modalVisible, setModalVisible] = useState(false)

    // State do valor mensal registrado
    const [valorMensal, setValorMensal] = useState('')

    // State da renda do usuário
    const [valorObjetivo, setValorObjetivo] = useState('')

    // State de loading
    const [loading, setLoading] = useState(false)

    // State de data não formatado
    const [dataFormat, setDataFormat] = useState()

    function dataSelecionada({ type }, selectDate){
        if( type == 'set' ){
            const currentDate = selectDate
            setDate(currentDate)
            
            if(Platform.OS === "android"){
                dateFunc()
                setDataPrevista(formatDate(currentDate))
            }

        } else {
            dateFunc()
        }
    }

    function formatDate(dataSelect){
        let date = new Date(dataSelect)

        setDataFormat(date)

        let ano = date.getFullYear()
        let mes = date.getMonth()+1
        let dia = date.getDate()

        return `${dia}/${mes}/${ano}` 
    }

    function dateFunc(){
        setShowDate(!showDate)
    }

    function adicionarObjetivo(){

        if( valorMensal === '' ){
            alert('Preencha o campo valor mensal.')
            return
        } else if( valorObjetivo === ''){
            alert('Preencha o campo valor do seu objetivo.')
            return
        } else if( dataPrevista === '' ){
            alert('Preencha o campo de data prevista.')
            return
        }

        setLoading(true)
        setTimeout( () => {
            
            setModalVisible(true)

            let objetivo = firebase.database().ref('Objetivos').child(user)
            let chave = objetivo.push().key

            objetivo.child(chave).set({
                nomeObjetivo: objetivoSelect,
                valorMensal: Number(valorMensal.replace(',','.')),
                valorObjetivo: valorObjetivo,
                dataPrevista: dataPrevista
            })
            .then( () => {
                const data = {
                    key: chave,
                    nomeObjetivo: objetivoSelect,
                    valorMensal: Number(valorMensal.replace(',','.')),
                    valorObjetivo: valorObjetivo,
                    dataPrevista: dataPrevista
                }
                setLoading(false)
                setValorMensal('')
                setValorObjetivo('')
            })
            .catch( () => {
                alert('Ops, algo deu errado.')
            })
        }, 3000)
    }

    return(
        <View style={ styles.container }>
            <View style={ [styles.viewCont, appTheme[themeMode]] }>
                <Modal transparent visible={loading}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffffcc'}}>
                        <ActivityIndicator 
                            size={100}
                            color={themeMode === 'light' ? '#161F4E' :'#0D1117'}
                            animating={true}
                        />
                        <Text style={{ fontSize: 25, marginTop: 50, fontWeight: 'bold', color: themeMode === 'light' ? '#161F4E' :'#0D1117' }}>SIMULANDO</Text>
                    </View>
                </Modal>
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
                                    placeholder={'teste'}
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
                                onChangeText={ (value) => setValorMensal(value.replace(/[ #*;.<>\{\}\[\]\\\/]/gi, '')) }
                                value={valorMensal}
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
                            

                            { showDate && (
                                <DateTimePicker 
                                    mode="date"
                                    value={date}
                                    display="default"
                                    onChange={dataSelecionada}
                                    minimumDate={new Date()}
                                />
                            ) }     
            
                        </View>
                        <View style={ styles.form }>
                            <Text style={ [styles.subtitulo, appTheme[themeMode]] }>VALOR DO SEU OBJETIVO</Text>
                            <TextInput
                                style={ [styles.input, { backgroundColor: '#fff'}] }
                                keyboardType="numeric"
                                placeholder="Valor do seu objetivo desejado"
                                onChangeText={ (value) => setValorObjetivo(value.replace(/[ #*;.<>\{\}\[\]\\\/]/gi, '')) }
                                value={valorObjetivo}
                            />
                        </View>
                        <View style={ styles.areaBtn }>
                            <TouchableOpacity style={ [styles.btn, { backgroundColor: themeMode === 'light' ? '#161F4E' : '#481298'}] } onPress={ adicionarObjetivo } >
                                <Text style={ styles.textoBtn }>SIMULAR</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={ [styles.areaBtn1, { borderTopColor: themeMode === 'light' ? '#161F4E' : '#481298'}] }>
                            <TouchableOpacity style={ [styles.simBtn, { backgroundColor: themeMode === 'light' ? '#161F4E' : '#481298'} ] } onPress={ () => navigation.navigate('Consultar') } >
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
                    dataPrevista={dataPrevista}
                    valorMensal={valorMensal}
                    dataFormat={dataFormat}
                    valorObjetivo={valorObjetivo}
                />
            </Modal>                
            
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