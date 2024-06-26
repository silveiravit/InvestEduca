import react, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Modal, Dimensions } from 'react-native';

// Styles
import {

} from './styles/styles'

// Biblioteca de icones
import { AntDesign } from '@expo/vector-icons';

// Hook de navegação
import { useNavigation } from '@react-navigation/native'

// Tema
import { AuthContext } from '../../contexts/auth';

// Dimensões da tela
const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH * 0.1

export default function Inicio(){

    // Constante de navegação
    const navigation = useNavigation()

    const { themeMode } = useContext(AuthContext)

    // State de loading
    const [loading, setLoading] = useState(false)

    // Context do tema

    useEffect(() => {
        setLoading(true)
        function iniciar(){
            setTimeout( () => {
                navigation.navigate('Login')
                setLoading(false)
            })
        }
        iniciar()
    }, [])

    function proximo(){
        setLoading(true)
        setTimeout( () => {
            navigation.navigate('Login')
            setLoading(false)
        }, 2000)
    }

    return(
        <View style={ [styles.container, { backgroundColor: themeMode === 'light' ? '#161F4E' : '#0D1117'}] }>

            <Modal transparent visible={loading}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator 
                        size={100}
                        color={"#fff"}
                        animating={true}
                    />
                </View>
            </Modal>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginHorizontal: ITEM_WIDTH }}>

                <View style={ styles.areaTitulo }>
                    <Text style={ styles.text }>Invest</Text>
                    <Text style={ styles.text1 }>Educa</Text>
                </View>

                <TouchableOpacity style={ styles.btn } onPress={ proximo }>
                    <AntDesign name="arrowright" size={50} color={ themeMode === 'light' ? '#161F4E' : '#0D1117' } />
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161F4E',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 70,
        color: '#fff',
        fontWeight: 'bold'
    },
    text1: {
        fontSize: 70,
        color: '#E9AB43',
        fontWeight: 'bold'
    },
    btn: {
        backgroundColor: '#E9AB43',
        padding: 15,
        borderRadius: 50,
    },
    areaTitulo: {
        flexDirection: 'row',
        marginVertical: 100
    }
})