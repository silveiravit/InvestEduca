import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'

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
        fetch(`https://economia.awesomeapi.com.br/last/${this.state.moedaA}`)
        .then( response => response.json())
        .then( response => 
            this.setState({
                valorConvertido: response[`${this.state.moedaA}${this.state.moedaB}`].high
            })
        ) 
    }

    render(){

        let moedaA = this.state.moedaA
        let cotacaoReal = this.state.valorConvertido
        let bandeira = {
            usd: require('../../icons/dolar.png'),
            btc: require('../../icons/bitcoin.png'),
            euro: require('../../icons/euro.png'),
            libra: require('../../icons/libra.png'),
            dolarcanad: require('../../icons/canada.png'),
            sek: require('../../icons/suecia.png'),
            suico: require('../../icons/suica.png'),
            china: require('../../icons/china.png'),
        }

        if( this.state.moedaA === 'USD'){
            moedaA = 'DÓLAR'
            bandeira = bandeira.usd
            
        }else if( this.state.moedaA === 'BTC' ){
            moedaA = 'BITCOIN'
            bandeira = bandeira.btc

        }else if( this.state.moedaA === 'EUR' ){
            moedaA = 'EURO'
            bandeira = bandeira.euro

        }else if( this.state.moedaA === 'GBP' ){
            moedaA = 'LIBRA'
            bandeira = bandeira.libra

        }else if( this.state.moedaA === 'CAD' ){
            moedaA = 'DÓLAR CANADENSE'
            bandeira = bandeira.dolarcanad

        }else if( this.state.moedaA === 'SEK' ){
            moedaA = 'COROA SUECA'
            bandeira = bandeira.sek

        }else if( this.state.moedaA === 'CHF'){
            moedaA = 'FRANCO SUÍÇO'
            bandeira = bandeira.suico

        }else if( this.state.moedaA === 'CNY'){
            moedaA = 'YUAN CHINÊS'
            bandeira = bandeira.china
        }

        return(
            <View>
                <View style={styles.view1}>
                    <Text style={styles.textMoeda}>
                        { moedaA }
                    </Text>
                    <Text style={styles.cotacao}>
                        { cotacaoReal === 0 ? <ActivityIndicator size={30} color={'#fff'} /> : Number(cotacaoReal).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) }
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
    textMoeda: {
        fontWeight: '600',
        fontSize: 20,
        color: '#fff',
    },
    cotacao: {
        fontWeight: '600',
        fontSize: 20,
        color: '#fff',
        marginHorizontal: 5,
    },
    view1: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center'
    },
    bandeira: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius:50
    }
})