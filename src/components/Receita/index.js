import react, {useState, useEffect, useContext} from "react";
import { ActivityIndicator } from 'react-native'
import firebase from '../../../database/FirebaseConnection'

import { AuthContext } from "../../contexts/auth";

import {
    Container,
    Text,
    TextReceita
} from './styles'

export default function Receita(){
    const { user } = useContext(AuthContext)
    const [receita, setReceita] = useState()

    useEffect( () => {
        function receita(){
            firebase.database().ref('Gastos').child(user).orderByChild('tipo').equalTo('Receita').on('value', (snapshot) => {
                setReceita([])
                let gasto = []
                snapshot?.forEach( (childItem) => {
                    let data = {
                        valorGasto: childItem.val().valorGasto
                    }
                    gasto.push(data.valorGasto)
                })
                let total = gasto.reduce((a, b) => a + b, 0)
                setReceita(total)
            })
        }
        receita()
    }, [user])

    return(
        <Container>
            <Text>Entradas</Text>
                <TextReceita>
                    { isNaN(receita) ? 
                        <ActivityIndicator size={70} color={'#fff'} />
                        :
                        Number(receita).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) 
                    }
                </TextReceita>
        </Container>
    )
}