import React, { useState, useContext } from "react";
import { View, Text, Modal, ActivityIndicator } from "react-native";

import CurrencyInput from "react-native-currency-input";

import format from "date-fns/format";

import { 
    Container,
    Titulo,
    ViewFormulario,
    DateButton,
    Subtitulo,
    TextDateButton,
    Buttons,
    TextButtons,
    ContainerImage,
    Image,
    AreaButton,
    Input,
    ContainerPicker
} from './styles/styles'

// Biblioteca de icones
import { Entypo } from '@expo/vector-icons';

// Autenticação e Banco de Dados
import { AuthContext } from "../../../contexts/auth";
import firebase from '../../../../database/FirebaseConnection'

// Data e escolha de objetivo
import { Picker } from '@react-native-picker/picker'
import DateTimePicker from 'react-native-modal-datetime-picker';

// Componente de simulação
import Simular from "./simulacao";

// Navegação
import { useNavigation } from "@react-navigation/native";

export default function Objetivo(){

    // Constante de navegação e context
    const navigation = useNavigation()
    const { user, themeMode } = useContext(AuthContext)

    // Modais
    const [showDate, setShowDate] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [loading, setLoading] = useState(false)

    // State para definir a data prevista
    const [dataPrevista, setDataPrevista] = useState(format(new Date, "dd/MM/yyyy"))
    const [dataFormat, setDataFormat] = useState()

    // State de array de objetos de objetivos
    const [objetivos] = useState([
        {key: 0, nome: 'Imóvel'}, 
        {key: 1, nome: 'Carro'},
        {key: 2, nome: 'Moto'},  
        {key: 3, nome: 'Viagem'},
    ])

    // State que define o objetivo selecionado
    const [objetivoSelect, setObjetivoSelect] = useState([])    
    const [valorMensal, setValorMensal] = useState('')
    const [valorObjetivo, setValorObjetivo] = useState('')    

    function handleConfirm(date){
        const formatData = format(new Date(date),"dd/MM/yyyy")
        setDataPrevista(formatData)
        setDataFormat(formatData)
        hideDatePicker()
    }
    function hideDatePicker(){
        setShowDate(false)
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
                valorMensal: Number(valorMensal),
                valorObjetivo: Number(valorObjetivo),
                dataPrevista: dataPrevista
            })
            .then( () => {
                const data = {
                    key: chave,
                    nomeObjetivo: objetivoSelect,
                    valorMensal: Number(valorMensal),
                    valorObjetivo: Number(valorObjetivo),
                    dataPrevista: dataPrevista
                }
                setLoading(false)
                setValorMensal('')
                setValorObjetivo('')
            })
            .catch( () => {
                alert('Ops, algo deu errado.')
            })
        })
    }

    return(
        <Container theme={themeMode}>
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
            
            <Titulo theme={themeMode}>Estabeleça seus Objetivos</Titulo>

            <ContainerImage>
                <Image 
                    source={require('../../../images/objetivos.png')}
                />
            </ContainerImage>

            <ViewFormulario theme={themeMode}>
                <Subtitulo theme={themeMode}>QUAL O SEU OBJETIVO?</Subtitulo>
                <ContainerPicker>
                    <Picker
                        selectedValue={ objetivoSelect }
                        onValueChange={ (itemvalue) => setObjetivoSelect(itemvalue) }
                        style={{ width: '100%' }}
                    >
                        {
                            objetivos.map(obj => {
                                return <Picker.Item value={obj.nome} label={obj.nome} key={obj.key} />
                            })
                        }
                    </Picker>
                </ContainerPicker>
            </ViewFormulario>

            <ViewFormulario theme={themeMode}>
                <Subtitulo theme={themeMode}>VALOR MENSAL</Subtitulo>
                <CurrencyInput
                    placeholder="Valor mensal de investimento"
                    onChangeValue={ (value) => setValorMensal(value) }
                    value={valorMensal}
                    prefix="R$"
                    delimiter="."
                    separator=","
                    minValue={0}
                    renderTextInput={textInputProps => <Input {...textInputProps} variant='filled' />}
                />
            </ViewFormulario>

            <ViewFormulario theme={themeMode}>
                <Subtitulo theme={themeMode}>DATA PREVISTA</Subtitulo>
                <DateButton onPress={() => setShowDate(true)}>
                    <TextDateButton>
                        { dataPrevista }
                    </TextDateButton>
                    <Entypo name="calendar" size={30} color="red" />
                </DateButton>
                <DateTimePicker
                    mode="date"
                    isVisible={showDate}
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    minimumDate={new Date()}
                />    
            </ViewFormulario>

            <ViewFormulario theme={themeMode}>
                <Subtitulo theme={themeMode}>VALOR DO SEU OBJETIVO</Subtitulo>
                <CurrencyInput
                    placeholder="Valor do objetivo desejado"
                    onChangeValue={ (value) => setValorObjetivo(value) }
                    value={valorObjetivo}
                    prefix="R$"
                    delimiter="."
                    separator=","
                    minValue={0}
                    renderTextInput={textInputProps => <Input {...textInputProps} variant='filled' />}
                />
            </ViewFormulario>

            <AreaButton>
                <Buttons onPress={ adicionarObjetivo } theme={themeMode}>
                    <TextButtons>Simular</TextButtons>
                </Buttons>

                <Buttons onPress={ () => navigation.navigate('Consultar') } theme={themeMode}>
                    <TextButtons>Consulte</TextButtons>
                </Buttons>
            </AreaButton>

            <Modal visible={modalVisible} animationType="fade">
                <Simular 
                    setVisible={ () => setModalVisible(false)}
                    data={objetivoSelect}
                    dataPrevista={dataPrevista}
                    valorMensal={Number(valorMensal)}
                    dataFormat={dataFormat}
                    valorObjetivo={Number(valorObjetivo)}
                />
            </Modal>                
            
        </Container>
    )
}