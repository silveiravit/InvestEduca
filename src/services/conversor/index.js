import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from 'react-native'

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

    // async componentDidMount(){

    //     const valor = this.state.moedaA + '_' + this.state.moedaB

    //     const cotacao = await api.get(`convert?q=${valor}&compact=ultra&apiKey=f18e5ed01731c7e9aa73`)

    //     const response = cotacao.data[valor]

    //     this.setState({
    //         valorConvertido: 'R$ '+ response.toFixed(2).replace('.',',')
    //     })

    // }

    render(){

        let moedaA = this.state.moedaA
        let cotacaoReal = this.state.valorConvertido
        let bandeira = {
            usd: require('../../icons/estados-unidos.png'),
            euro: require('../../icons/finlandia.png'),
            libra: require('../../icons/reino-unido.png'),
            dolarcanad: require('../../icons/canada.png'),
            sek: require('../../icons/suecia.png'),
            dolaraust: require('../../icons/australia.png'),
            suico: require('../../icons/suica.png'),
            china: require('../../icons/china.png'),
            argentina: require('../../icons/argentina.png'),
        }

        if( this.state.moedaA === 'USD'){
            moedaA = 'Cotação do Dólar'
            bandeira = bandeira.usd
            
        }else if( this.state.moedaA === 'EUR' ){
            moedaA = 'Cotação do Euro'
            bandeira = bandeira.euro

        }else if( this.state.moedaA === 'GBP' ){
            moedaA = 'Cotação da Libra Esterlina'
            bandeira = bandeira.libra

        }else if( this.state.moedaA === 'CAD' ){
            moedaA = 'Cotação do Dólar Canadense'
            bandeira = bandeira.dolarcanad

        }else if( this.state.moedaA === 'SEK' ){
            moedaA = 'Cotação da Coroa Sueca'
            bandeira = bandeira.sek

        }else if( this.state.moedaA === 'AUD' ){
            moedaA = 'Cotação do Dólar Australiano'
            bandeira = bandeira.dolaraust

        }else if( this.state.moedaA === 'CHF'){
            moedaA = 'Cotação do Franco Suíço'
            bandeira = bandeira.suico

        }else if( this.state.moedaA === 'CNY'){
            moedaA = 'Cotação do Yuan Renminbi'
            bandeira = bandeira.china

        }else if( this.state.moedaA === 'ARS'){
            moedaA = 'Cotação do Peso Argentino'
            bandeira = bandeira.argentina
        }

        return(
            <View>
                <View style={styles.view1}>
                    
                    <Text style={styles.cotacao}>
                        { moedaA } { cotacaoReal }
                    </Text>
                    
                    <Image 
                        source={ bandeira }
                        style={ styles.bandeira }
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cotacao: {
        fontWeight: '600',
        fontSize: 20,
        color: '#fff',
        marginHorizontal: 10
    },
    view1: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center'
    },
    bandeira: {
        width: 25,
        height: 25,
    }
})