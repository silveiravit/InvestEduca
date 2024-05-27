import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList, Modal, TouchableWithoutFeedback, ActivityIndicator } from "react-native";

import DateTimePicker from "react-native-modal-datetime-picker";

import { RadioButton } from 'react-native-paper'

import format from "date-fns/format";

import Lancamentos from "../../../../components/Lancamentos";

import {
    Container,
    Titulo,
    CampoTitulo,
    Registro,
    ContainerAno,
    TituloAno,
    ContainerModalClick,
    ModalClickMes,
    ButtonFeito,
    ButtonFeito1,
    ButtonTextFeito,
    ButtonTextFeito1,
    ContainerCarregar,
    ButtonAno,
    ContainerLancamento,
    LancamentosGastos,
    ContainerExtratoFiltro,
    AreaButton,
    TextFiltro,
    ButtonData,
    TextData,
    AreaButtonData,
    ContainerTextFiltro,
    AreaButtonLancamento,
    ButtonLancamento,
    TextLancamento,
    ContainerDataInicial,
    ContainerTipoLancamento
} from '../styles/styles'

// Componente de autenticação
import { AuthContext } from "../../../../contexts/auth";

// Conexão firebase
import firebase from '../../../../../database/FirebaseConnection'

// Biblioteca de icones
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Anual(){

    const [loading, setLoading] = useState(false)

    // paginas
    const perPage = 4
    const [page, setPage] = useState(1)
    const [datas, setData] = useState([])
    
    // Context de Usuário
    const { user, themeMode } = useContext(AuthContext)   

    // Exibir modal mensal
    const [modalVisible, setModalVisible] = useState(false)
    const [checked, setChecked] = useState(null)

    // Valor mensal registrado
    const [valor, setValor] = useState(0)
    
    // Definir a data selecionada
    const [dataInicial, setDataInicial] = useState(null)
    const [dataFinal, setDataFinal] = useState(null)
    const [showDate, setShowDate] = useState(false)
    const [showDateFinal, setShowDateFinal] = useState(false)
    
    useEffect( () => {
        if(dataInicial !== null && dataFinal !== null){
            filtroData()
        }else{
            extrato()
        }
    }, [checked])

    function extrato(){
        firebase.database().ref('Gastos').child(user).limitToLast(4).on('value', (snapshot) => {
            setValor([])
            snapshot?.forEach( (childItem) => {
                let data = {
                    key: childItem.key,
                    nomeGasto: childItem.val().nomeGasto,
                    valorGasto: childItem.val().valorGasto,
                    data: childItem.val().data
                }
                setValor(oldData => [...oldData, data])
            })
        })
    }   
    function filtroData(){
        firebase.database().ref('Gastos').child(user).orderByChild('data').startAt(dataInicial).endAt(dataFinal).on('value', (snapshot) => {
            setValor([])
            snapshot?.forEach( (childItem) => {
                let data = {
                    key: childItem.key,
                    nomeGasto: childItem.val().nomeGasto,
                    valorGasto: childItem.val().valorGasto,
                    data: childItem.val().data
                }
                setValor(oldData => [...oldData, data])
            })
        })
    }   

    function handleConfirmDataInicial(date){
        const formatDataInicial = format(new Date(date), "dd/MM/yyyy")
        setDataInicial(formatDataInicial)
        hideDatePicker()
    }
    function handleConfirmDataFinal(date){
        const formatDataFinal = format(new Date(date), "dd/MM/yyyy")
        setDataFinal(formatDataFinal)
        hideDatePicker()
    }
    function hideDatePicker(){
        setShowDate(false)
        setShowDateFinal(false)
    }   
    function filtrar(){
        setModalVisible(false)
    }
    function redefinir(){
        setValor(null)
        setDataInicial(null)
        setDataFinal(null)
        setChecked(null)
    }
    function changeType(type){
        if(type == 'Receita'){
            setChecked('Receita')
        }else{
            setChecked('Despesa')
        }
    }

    return(
        <Container theme={themeMode}>
            <CampoTitulo>
                <Titulo theme={themeMode}>Extrato</Titulo>
            </CampoTitulo>
            <Modal transparent visible={loading}>
                <ContainerCarregar>
                    <ActivityIndicator 
                        size={100}
                        color={'#fff'}
                        animating={true}
                    />
                </ContainerCarregar>
            </Modal>
            <Registro>
                <ContainerAno color={themeMode}>
                    <ContainerLancamento>
                        <TituloAno color={themeMode}>Lançamentos</TituloAno>
                    </ContainerLancamento>
                    <ButtonAno onPress={() => setModalVisible(true)}>
                        <MaterialCommunityIcons name="filter-menu" size={30} color={themeMode === 'light'?'#161f4e':'#fff'}/>
                    </ButtonAno>
                </ContainerAno>
                <LancamentosGastos>
                    { valor == 0 ? (
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: themeMode === 'light'?'#000':'#fff', fontSize: 20, fontWeight: 600}}>Não há lançamentos</Text>
                        </View>
                    ):(
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={valor}
                            keyExtractor={(item) => item.key}
                            renderItem={({item}) => (
                                <Lancamentos 
                                data={item}
                                />
                            )}
                            
                        />
                        )
                    }
                </LancamentosGastos>
            </Registro>
            <Modal visible={modalVisible} transparent={true} animationType="fade">
                <TouchableWithoutFeedback onPress={ () => setModalVisible(false) }>
                    <ContainerModalClick></ContainerModalClick>
                </TouchableWithoutFeedback>
                <ModalClickMes>
                    <ContainerExtratoFiltro>
                        <ContainerTextFiltro>
                            <TextFiltro>Filtro</TextFiltro>
                        </ContainerTextFiltro>
                        <AreaButtonData>
                            <ButtonData onPress={() => setShowDate(true)}>
                                <ContainerDataInicial>
                                    <AntDesign name="calendar" size={30} color="black" />
                                    <TextData>Data Inicial {dataInicial && `- ${dataInicial}`}</TextData>
                                </ContainerDataInicial>
                                <AntDesign name="right" size={30} color="black" />
                            </ButtonData>
                            <DateTimePicker
                                mode="date"
                                isVisible={showDate}
                                onConfirm={handleConfirmDataInicial}
                                onCancel={hideDatePicker}
                                maximumDate={new Date()}
                            />
                            <ButtonData onPress={() => setShowDateFinal(true)}>
                                <ContainerDataInicial>
                                    <AntDesign name="calendar" size={30} color="black" />
                                    <TextData>Data Final {dataFinal && `- ${dataFinal}`}</TextData>
                                </ContainerDataInicial>
                                <AntDesign name="right" size={30} color="black" />
                            </ButtonData>
                            <DateTimePicker
                                mode="date"
                                isVisible={showDateFinal}
                                onConfirm={handleConfirmDataFinal}
                                onCancel={hideDatePicker}
                                maximumDate={new Date()}
                            />
                        </AreaButtonData>
                        <ContainerTextFiltro>
                            <TextFiltro>Tipo de lançamento</TextFiltro>
                        </ContainerTextFiltro>
                        <AreaButtonLancamento>
                            <ButtonLancamento onPress={() => changeType('Receita')}>
                                <ContainerTipoLancamento>
                                    <AntDesign name="arrowup" size={30} color="black" />
                                    <TextLancamento>Entradas</TextLancamento>
                                </ContainerTipoLancamento>
                                <RadioButton
                                    value="Receita"
                                    status={ checked === 'Receita' ? 'checked' : 'unchecked' }
                                />
                            </ButtonLancamento>
                            <ButtonLancamento onPress={() => changeType('Despesa')}>
                                <ContainerTipoLancamento>
                                    <AntDesign name="arrowdown" size={30} color="black" />
                                    <TextLancamento>Saídas</TextLancamento>
                                </ContainerTipoLancamento>
                                <RadioButton
                                    value="Despesa"
                                    status={ checked === 'Despesa' ? 'checked' : 'unchecked' }
                                />
                            </ButtonLancamento>                   
                        </AreaButtonLancamento>
                    </ContainerExtratoFiltro>
                    <AreaButton>
                        <ButtonFeito onPress={redefinir} >
                            <ButtonTextFeito>redefinir</ButtonTextFeito>
                        </ButtonFeito>
                        <ButtonFeito1 onPress={filtrar} >
                            <ButtonTextFeito1>ok</ButtonTextFeito1>
                        </ButtonFeito1>
                    </AreaButton>
                </ModalClickMes>
            </Modal>
        </Container>
    )
}