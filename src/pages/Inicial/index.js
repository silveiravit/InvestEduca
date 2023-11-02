import react, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

export default function Inicio(){

    const navigation = useNavigation()
    const [loading, setLoading] = useState(false)

    function proximo(){
        setTimeout( () => {
            setLoading(true)
            navigation.navigate('Cadastro')
        }, setLoading(false))
    }

    return(
        <View style={ styles.container }>

            <Modal transparent visible={loading}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator 
                        size={100}
                        color={"#fff"}
                        animating={true}
                    />
                </View>
            </Modal>

            <View style={ styles.areaTitulo }>
                <Text style={ styles.text }>Invest</Text>
                <Text style={ styles.text1 }>Educa</Text>
            </View>

            <TouchableOpacity style={ styles.btn } onPress={ proximo }>
                <AntDesign name="arrowright" size={50} color="white" />
            </TouchableOpacity>

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
        marginBottom: 50,
        fontWeight: 'bold'
    },
    text1: {
        fontSize: 70,
        color: '#E9AB43',
        marginBottom: 50,
        fontWeight: 'bold'
    },
    btn: {
        backgroundColor: '#E9AB43',
        padding: 10,
        borderRadius: 50,
        elevation: 8,
        shadowColor: '#E9AB43',
        shadowOffset: {width: 150, height: 150},
        shadowRadius: '1'
    },
    areaTitulo: {
        flexDirection: 'row',
        paddingHorizontal: 10
    }
})