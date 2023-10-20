import React, { Component, useState } from "react";
import { View, Text, StyleSheet} from 'react-native'

import api from "../api/api";

export default class Conversor extends Component{

    constructor(props){
        super(props)
        this.state = {
            moedaA: props.moedaA,
            moedaB: props.moedaB,
            valorConvertido: 0,
        }
    }

    async componentDidMount(){

        const valor = this.state.moedaA + '_' + this.state.moedaB

        const cotacao = await api.get(`convert?q=${valor}&compact=ultra&apiKey=35d807af28b8ab7e3d9d`)

        const response = cotacao.data[valor]

        this.setState({
            valorConvertido: 'R$ '+ response.toFixed(2).replace('.',',')
        })

    }

    render(){

        let moedaA = this.state.moedaA
        let cotacaoReal = this.state.valorConvertido

        return(
            <View>
                <View style={styles.view1}>
                    
                    <Text style={styles.cotacao}>
                        Cotação do { ( moedaA === 'USD' ? 'Dólar' : 'Euro') } { cotacaoReal }
                    </Text>
                           
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cotacao: {
        fontWeight: '600',
        fontSize: 20,
        color: '#fff'
    },
    view1: {
        flexDirection: 'row', 
        alignItems: 'center',
    }
})