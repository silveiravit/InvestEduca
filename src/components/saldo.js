import react, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, Modal } from 'react-native'
import firebase from '../../database/FirebaseConnection'
import { AuthContext } from '../contexts/auth'

export default function Saldo(){

    const { user } = useContext(AuthContext)
    const [mes] = useState(new Date().getMonth());
    const [valorMensal, setValorMensal] = useState()
    const [loading, setLoading] = useState(false)

    useEffect( () => {

        
        firebase.database().ref('Gastos').child(user).orderByChild('mesCadastro').equalTo(mes).on('value', (snapshot) => {

            setValorMensal([])
            let gasto = []
            snapshot?.forEach( (childItem) => {
                let data = {
                    key: childItem.key,
                    nomeGasto: childItem.val().nomeGasto,
                    valorGasto: childItem.val().valorGasto,
                    mesCadastro: childItem.val().mesCadastro,
                    anoCadastro: childItem.val().anoCadastro
                }
                gasto.push(data.valorGasto)
            })
            let total = gasto.reduce((a, b) => a + b, 0)
            setValorMensal(total)
            
        })

    }, [mes])

    return(
        <View style={ styles.container }>
            <Text style={ styles.text }>Saldo atual</Text>
            <Text style={ styles.textSaldo }>
                { isNaN(valorMensal) ? 
                    <ActivityIndicator size={70} color={'#fff'} />
                    :
                    Number(valorMensal).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) 
                }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 25,
        color: '#fff',
    },
    textSaldo: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold'
    }
})