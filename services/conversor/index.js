import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity} from 'react-native'
import {Picker} from '@react-native-picker/picker';

import api from "../api";

export default class Conversor extends Component{

    constructor(props){
        super(props)
        this.state = {
            moedaA: props.moedaA,
            moedaB: props.moedaB,
            moedaB_valor: 0,
            valorConvertido: 0,
            moeda: 0
        }
    }

    async componentDidMount(){

        const valor = this.state.moedaA + '_' + this.state.moedaB

        const cotacao = await api.get(`convert?q=${valor}&compact=ultra&apiKey=19aae28063acb0c5a2c2`) 

        const response = cotacao.data[valor]

        this.setState({
            valorConvertido: 'R$ '+response.toFixed(2).replace('.',',')
        })

    }

    render(){
        return(
            <View>

            <View style={{flexDirection: 'row', marginTop: -280}}>
                <View>
                    <Text style={styles.cotacao}>Cotação do Dólar: 
                        <Text style={styles.valor}>{( this.state.valorConvertido === '' ? <ActivityIndicator size={40} /> : this.state.valorConvertido )}
                        </Text> 
                    </Text>
                </View>

                <View style={{marginLeft: 30}}>
                    <Picker
                        selectedValue={this.state.moeda}
                        onValueChange={ (itemValue, itemIndex) =>  this.setState({moeda: itemValue})}
                        style={{ width: 120, marginTop: -260}}
                    >
                        
                    </Picker> 
                </View>
            </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    cotacao: {
        fontWeight: '600',
        fontSize: 20,
        marginTop: -250,
        textAlign: 'left',
        marginLeft: 20
    },
    valor: {
        color: '#ff0000',
    }
})