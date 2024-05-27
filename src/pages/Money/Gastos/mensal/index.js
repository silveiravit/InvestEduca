import React, { useState, useEffect, useContext } from "react";
import { View, Text, FlatList, Alert, Modal, ActivityIndicator, TouchableWithoutFeedback, TouchableOpacity } from "react-native";

import DateTimePicker from "react-native-modal-datetime-picker";
import format from "date-fns/format";
import CurrencyInput from "react-native-currency-input";

import { 
    Container,
    CampoTitulo,
    Titulo,
    ContainerRegistros,
    ContainerMes,
    TituloMes,
    ContainerAreaTotal,
    TextTotal,
    TextSaldo,
    ContainerCarregar1,
    TextEditar,
    ModalEditGastos,
    ButtonOk,
    ButtonTextOk,
    InputEdit
} from '../styles/styles'

import CampoGasto from '../../../../components/CampoGasto'
import RegisterTypes from "../../../../components/RegisterTypes";

// Biblioteca de icones
import { AntDesign } from '@expo/vector-icons';

// Componente de autenticação e conexão firebase
import { AuthContext } from '../../../../contexts/auth'
import firebase from '../../../../../database/FirebaseConnection'

export default function Mensal(){

    // Botões de receita e despesa
    const [type, setType] = useState('Receita')

    // Context de usuário e tema
    const { user, themeMode } = useContext(AuthContext)

    // State para exibir o modal
    const [modalEdit, setModalEdit] = useState(false)
    const [loading, setloading] = useState(false)
    const [modalEditValor, setModalEditValor] = useState(false)

    // Data
    const [showDate, setShowDate] = useState(false)
    const [data, setData] = useState(format(new Date(), "dd/MM/yyyy"))

    // State para valores
    const [novoGasto, setNovoGasto] = useState('')
    const [novoValorGasto, setNovoValorGasto] = useState(0)   
    const [valor, setValor] = useState(null)
    const [valorTotal, setValorTotal] = useState(0)

    // Chave edição
    const [Key, setKey] = useState(0)

    useEffect( () => {
        setloading(true)
        function filtroGastos(){
            firebase.database().ref('Gastos').child(user).orderByChild('data').equalTo(data).on('value', (snapshot) => {
                setValor([])
                snapshot?.forEach( (childItem) => {
                    let data = {
                        key: childItem.key,
                        nomeGasto: childItem.val().nomeGasto,
                        valorGasto: childItem.val().valorGasto,
                    }
                    setValor(oldValor => [...oldValor, data])
                })
                setloading(false)
            })
        }
        function saldoTotal(){
            firebase.database().ref('Gastos').child(user).on('value', (snapshot) => {
                let gasto = []
                snapshot?.forEach( (childItem) => {
                    let data = {
                        valorGasto: childItem.val().valorGasto,
                    }
                    gasto.push(data.valorGasto)
                })
                let total = gasto.reduce((a, b) => a + b, 0)
                setValorTotal(total)
                setloading(false)
            })
        }
        filtroGastos()
        saldoTotal()
    }, [data])

    function handleConfirm(date){
        const formatData = format(new Date(date),"dd/MM/yyyy")
        setData(formatData)
        hideDatePicker()
    }
    function hideDatePicker(){
        setShowDate(false)
    }
    function handleDelete(key){
        Alert.alert(
            "Deseja excluir o gasto?",
            "",
            [
                {
                    text: "Cancelar",
                    onPress: () => { return },
                    style: "cancel"
                },
                { 
                    text: "Confirmar", 
                    onPress: () => { 
                        setloading(true)
                        firebase.database().ref('Gastos').child(user).child(key).remove()
                        .then( () => {
                            const findGastos = valor.filter( item => item.key !== key)
                            setValor(findGastos)
                            setloading(false)
                        })
                    } 
                }
            ]
        )
    }
    function atualizarCampoValor(){
        if( novoValorGasto === '' ){
            alert('Preencha o campo corretamente.')
            return
        }
        setloading(true)
        firebase.database().ref('Gastos').child(user).child(Key).update({
            valorGasto: type === 'Receita'?Number(novoValorGasto.toFixed(2).replace('-','')):Number('-'+novoValorGasto.toFixed(2).replace('-',''))
        })
        .then( () => {
            alert('Alteração concluída.')
            setModalEditValor(false)
            setloading(false)
        })
        .catch( () => {
            alert('Não foi possível realizar a alteração.')
            setModalEditValor(false)
            setloading(false)
        })
    }
    function handleEditValor(){
        setModalEditValor(true)
    }
    function atualizarCampo(){
        if( novoGasto === '' ){
            alert('Preencha o campo corretamente.')
            return
        }
        setloading(true)
        firebase.database().ref('Gastos').child(user).child(Key).update({
            nomeGasto: novoGasto
        })
        .then( () => {
            alert('Alteração concluída.')
            setModalEdit(false)
            setloading(false)
        })
        .catch( () => {
            alert('Não foi possível realizar a alteração.')
            setModalEdit(false)
            setloading(false)
        })
    }
    function handleEdit(){
        setModalEdit(true)
    }

    return(
        <Container theme={themeMode}>
            <CampoTitulo>
                <Titulo theme={themeMode}>Carteira</Titulo>
            </CampoTitulo>
            <Modal visible={loading} animationType="fade" transparent={true}>
                <ContainerCarregar1>
                    <ActivityIndicator 
                        size={100}
                        color={ themeMode === 'light' ? '#161F4E' : '#0D1117' }
                        animating={true}
                    />
                </ContainerCarregar1>
            </Modal>
            <ContainerAreaTotal>
                <TextSaldo>Saldo</TextSaldo>
                <TextTotal color={valorTotal}>
                    { isNaN(valorTotal)
                    ? <ActivityIndicator size={70} color={themeMode === 'light'?'#161f4e':'#481298'} /> 
                    : valorTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) 
                    } 
                </TextTotal>
            </ContainerAreaTotal>
            <ContainerRegistros>
                <ContainerMes onPress={() => setShowDate(true)}>
                    <AntDesign name="calendar" size={25} color={ themeMode === 'light' ? '#161F4E' : '#fff' } />
                    <TituloMes color={themeMode} numberOfLines={1}>Movimentações - {data}</TituloMes>
                </ContainerMes>
                <DateTimePicker
                    mode="date"
                    isVisible={showDate}
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    maximumDate={new Date()}
                />
                { valor == 0 ? (
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: themeMode === 'light'?'#000':'#fff',fontSize: 20, fontWeight: 600}}>Não há movimentações para esse dia</Text>
                    </View>
                ) : (
                    <FlatList 
                    showsVerticalScrollIndicator={false}
                    data={valor}
                    keyExtractor={(item) => item.key}
                    renderItem={({item}) => ( 
                        <CampoGasto 
                            data={item} 
                            deleteItem={handleDelete} 
                            editItem={handleEdit} 
                            chave={(key) => setKey(key)} 
                            editValor={handleEditValor}
                        />
                        )} 
                    />
                )}
            </ContainerRegistros>
            <Modal visible={modalEdit} transparent={true} animationType="fade">
                <TouchableWithoutFeedback onPress={ () => setModalEdit(false)}>
                    <View style={{ flex: 1, backgroundColor: '#ffffff88'}}></View>
                </TouchableWithoutFeedback>
                <ModalEditGastos>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <TextEditar>EDITAR GASTOS</TextEditar>
                        <TouchableOpacity onPress={ () => setModalEdit(false) }>
                            <AntDesign name="closecircleo" size={30} color="#ff0000" />
                        </TouchableOpacity>
                    </View>
                    <InputEdit 
                        placeholder="Digite aqui"
                        onChangeText={ (novo) => setNovoGasto(novo) }
                    />
                    <ButtonOk onPress={ atualizarCampo } >
                        <ButtonTextOk>ok</ButtonTextOk>
                    </ButtonOk>
                </ModalEditGastos>
            </Modal>
            <Modal visible={modalEditValor} transparent={true} animationType="fade">
                <TouchableWithoutFeedback onPress={ () => setModalEditValor(false) }>
                    <View style={{ flex: 1, backgroundColor: '#ffffff77'}}></View>
                </TouchableWithoutFeedback>
                <ModalEditGastos>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <TextEditar>EDITAR VALORES</TextEditar>
                        <TouchableOpacity onPress={ () => setModalEditValor(false) }>
                            <AntDesign name="closecircleo" size={30} color="#ff0000" />
                        </TouchableOpacity>
                    </View>
                    <CurrencyInput 
                        value={Number(novoValorGasto)}
                        onChangeValue={(value) => setNovoValorGasto(Number(value))}
                        renderTextInput={textInputProps => <InputEdit {...textInputProps} variant='filled' />}
                        prefix="R$ "
                        delimiter="."
                        separator=","
                        precision={2}
                        placeholder="Digite o valor"
                        keyboardType="numeric"
                    />
                    <RegisterTypes type={type} sendTypeChanged={(item) => setType(item)}/>
                    <ButtonOk onPress={ atualizarCampoValor } >
                        <ButtonTextOk>ok</ButtonTextOk>
                    </ButtonOk>
                </ModalEditGastos>
            </Modal>
        </Container>
    )
}