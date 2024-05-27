import react, { useState, useEffect, useContext } from 'react'
import { ActivityIndicator } from 'react-native'
import firebase from '../../../database/FirebaseConnection'
import { AuthContext } from '../../contexts/auth'
import {
    Container,
    Text,
    TextSaldo
} from './styles'

export default function Saldo(){
    const { user } = useContext(AuthContext)
    const [valorMensal, setValorMensal] = useState()
    
    useEffect( () => {
        function saldo(){
            firebase.database().ref('Gastos').child(user).on('value', (snapshot) => {
                setValorMensal([])
                let gasto = []
                snapshot?.forEach( (childItem) => {
                    let data = {
                        valorGasto: childItem.val().valorGasto
                    }
                    gasto.push(data.valorGasto)
                })
                let total = gasto.reduce((a, b) => a + b, 0)
                setValorMensal(total)
            })
        }
        saldo()
    }, [user])

    return(
        <Container>
            <Text>Saldo atual</Text>
            <TextSaldo saldo={valorMensal}>
                { isNaN(valorMensal) ? 
                    <ActivityIndicator size={70} color={'#fff'} />
                    :
                    Number(valorMensal).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) 
                }
            </TextSaldo>
        </Container>
    )
}