import react, {useState, useEffect, useContext} from "react";
import { ActivityIndicator } from 'react-native'
import firebase from '../../../database/FirebaseConnection'

import { AuthContext } from "../../contexts/auth";

import {
    Container,
    Text,
    TextReceita
} from './styles'

export default function Despesa(){
    const { user } = useContext(AuthContext)
    const [despesa, setDespesa] = useState()

    useEffect( () => {
        function receita(){
            firebase.database().ref('Gastos').child(user).orderByChild('tipo').equalTo('Despesa').on('value', (snapshot) => {
                setDespesa([])
                let gasto = []
                snapshot?.forEach( (childItem) => {
                    let data = {
                        valorGasto: childItem.val().valorGasto
                    }
                    gasto.push(data.valorGasto)
                })
                let total = gasto.reduce((a, b) => a + b, 0)
                setDespesa(total)
            })
        }
        receita()
    }, [user])

    return(
        <Container>
            <Text>Saídas</Text>
                <TextReceita>
                    { isNaN(despesa) ? 
                        <ActivityIndicator size={70} color={'#fff'} />
                        :
                        Number(despesa).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) 
                    }
                </TextReceita>
        </Container>
    )
}