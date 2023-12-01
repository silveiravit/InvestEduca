import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'

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

    //     const cotacao = await api.get(`convert?q=${valor}&compact=ultra&apiKey=e2808abb288d729c7fb4`)

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
            japao: require('../../icons/japao.png'),
        }

        if( this.state.moedaA === 'USD'){
            moedaA = 'DÓLAR'
            bandeira = bandeira.usd
            
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

        }else if( this.state.moedaA === 'AUD' ){
            moedaA = 'DÓLAR AUSTRALIANO'
            bandeira = bandeira.dolaraust

        }else if( this.state.moedaA === 'CHF'){
            moedaA = 'FRANCO SUÍÇO'
            bandeira = bandeira.suico

        }else if( this.state.moedaA === 'CNY'){
            moedaA = 'YUAN CHINÊS'
            bandeira = bandeira.china

        }else if( this.state.moedaA === 'ARS'){
            moedaA = 'PESO ARGENTINO'
            bandeira = bandeira.argentina

        }else if( this.state.moedaA === 'JPY'){
            moedaA = 'IENE JAPONÊS'
            bandeira = bandeira.japao
        }

        return(
            <View>
                <View style={styles.view1}>
                    
                    <Text style={styles.textMoeda}>
                        { moedaA }
                    </Text>
                    
                    <Text style={styles.cotacao}>
                        { cotacaoReal === 0 ? <ActivityIndicator size={30} color={'#fff'} /> : cotacaoReal }
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
        marginHorizontal: 10,
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