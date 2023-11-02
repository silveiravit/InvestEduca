import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Modal} from 'react-native'

import api from "../api/api";

export default class Conversor extends Component{

    constructor(props){
        super(props)
        this.state = {
            moedaA: props.moedaA,
            moedaB: props.moedaB,
            valorConvertido: 0,
            loading: 'false'
        }
    }

    // async componentDidMount(){

    //     this.setState({
    //         loading: 'true'
    //     })

    //     const valor = this.state.moedaA + '_' + this.state.moedaB

    //     const cotacao = await api.get(`convert?q=${valor}&compact=ultra&apiKey=35d807af28b8ab7e3d9d`)

    //     const response = cotacao.data[valor]

    //     this.setState({
    //         valorConvertido: 'R$ '+ response.toFixed(2).replace('.',','),
    //         loading: 'false'
    //     })

    // }

    render(){

        let moedaA = this.state.moedaA
        let cotacaoReal = this.state.valorConvertido

        if( this.state.moedaA === 'USD'){
            moedaA = 'Cotação do Dólar'
            
        }else if( this.state.moedaA === 'EUR' ){
            moedaA = 'Cotação do Euro'

        }else if( this.state.moedaA === 'CAD' ){
            moedaA = 'Cotação do Dólar Canadense'

        }else if( this.state.moedaA === 'SEK' ){
            moedaA = 'Cotação da Coroa Sueca'

        }else if( this.state.moedaA === 'AUD' ){
            moedaA = 'Cotação do Dólar Australiano'

        }else if( this.state.moedaA === 'CHF'){
            moedaA = 'Cotação do Franco Suíço'

        }else if( this.state.moedaA === 'CNY'){
            moedaA = 'Cotação do Yuan Renminbi'

        }else if( this.state.moedaA === 'ARS'){
            moedaA = 'Cotação do Peso Argentino'
            
        }

        return(
            <View>
                <Modal transparent visible={this.state.loading}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <ActivityIndicator 
                            size={50}
                            color={"#fff"}
                            animating={true}
                        />
                    </View>
                </Modal>

                <View style={styles.view1}>
                    
                    <Text style={styles.cotacao}>
                        { moedaA } { cotacaoReal }
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