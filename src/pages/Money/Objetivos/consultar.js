import react, { useState, useEffect, useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';

// Banco de Dados
import firebase from '../../../../database/FirebaseConnection'

// Tema
import ThemeContext from '../../../contexts/ThemeContext'
import appTheme from '../../../themes/Themes'

import CampoConsulta from './campoconsulta';

import { AuthContext } from '../../../contexts/auth';
import { useNavigation } from '@react-navigation/native';

export default function Consultar(){

    const { user } = useContext(AuthContext)
    const [objetivo, setObjetivo] = useState([])
    const navigation = useNavigation()
    const [themeMode] = useContext(ThemeContext)

    useEffect( () => {

        function getUser(){
            if( !user ){
                return
            }

            firebase.database().ref('objetivos').child(user).on('value', (snapshot) => {
            setObjetivo([])

                snapshot?.forEach( (childItem) => {
                    let data = {
                        key: childItem.key,
                        nomeObjetivo: childItem.val().nomeObjetivo,
                        renda: childItem.val().renda,
                        valorMensal: childItem.val().valorMensal,
                        dataPrevista: childItem.val().dataPrevista
                    }
                    setObjetivo(oldObjetivos => [...oldObjetivos, data])
                })
            })

        }
        
        getUser()

    }, [user])

    function deleteItem(key){

        Alert.alert(
            "Confirmar exclusão?",
            "",
            [
                {
                    text: "Cancelar",
                    onPress: () => { return },
                    style: "cancel"
                },
                { 
                    text: "SIM", 
                    onPress: () => { 
                        firebase.database().ref('objetivos').child(user).child(key).remove()
                        .then( () => {
                            const findObjetivos = objetivo.filter( item => item.key !== key)
                            setObjetivo(findObjetivos)
                        })
                    } 
                }
            ]
        )

    }

    return(
        <View style={[{ flex: 1, backgroundColor: '#fff'}, appTheme[themeMode]]}>
            <View style={ [styles.view, appTheme[themeMode]] }>

                <View style={ styles.viewTitulo }>
                    <Text style={ [styles.titulo, appTheme[themeMode]] }>Veja suas simulações já feitas: </Text>
                </View>

                <FlatList 
                    data={objetivo}
                    keyExtractor={ (item) => item.key }
                    renderItem={ ({item}) => (
                        <CampoConsulta data={item} deleteItem={deleteItem} />
                    )}
                />

            </View>

            <View style={ styles.areaBtn }>
                <TouchableOpacity style={ [styles.btn, { backgroundColor: themeMode === 'light' ? '#161F4E' : '#5C20B6' }] } onPress={ () => navigation.navigate('Objetivo')}>
                    <Text style={ styles.textBtn }>VOLTAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#fff',       
    },
    areaBtn: {
        alignItems: 'center'
    },  
    btn: {
        backgroundColor: '#161F4E',
        width: '90%',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        marginBottom: 50,
    },
    textBtn: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600'
    },
    viewTitulo: {
        marginVertical: 30
    },
    titulo: {
        fontSize: 25,
        textAlign: 'center'
    }
})