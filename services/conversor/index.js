import React, { Component } from "react";
import { View, Text, StyleSheet} from 'react-native'
import { Picker } from '@react-native-picker/picker';

import api from "../api/api";

export default class Conversor extends Component{

    constructor(props){
        super(props)
        this.state = {
            moedaA: props.moedaA,
            moedaB: props.moedaB,
            moedaB_valor: 0,
            valorConvertido: 0,
            cotacao: 0,
            dolareuro: [
                {key: 1, money: 'USD'},
                {key: 2, money: 'EUR'}
            ]
        }
    }

    async componentDidMount(){

        const valor = this.state.moedaA + '_' + this.state.moedaB

        const cotacao = await api.get(`convert?q=${valor}&compact=ultra&apiKey=19aae28063acb0c5a2c2`)

        const response = cotacao.data[valor]

        this.setState({
            valorConvertido: 'R$ '+ response.toFixed(2).replace('.',',')
        })

    }

    render(){

        let moneyItem = this.state.dolareuro.map( (v, k) => {
            return <Picker.Item key={k} value={v} label={v.money} />
        } )

        return(
            <View>
                <View style={styles.view1}>
                    <View style={{ flex: 1, flexDirection:'row'}}>
                        <Text style={styles.cotacao}>
                            Cotação do { ( this.state.moedaA === 'USD' ? 'Dólar' : 'Euro') }
                        </Text>
                        
                        <Text style={styles.valor}> { this.state.valorConvertido } </Text> 
                    </View>

                    <View style={{ justifyContent: 'flex-end'}}>
                        <Picker 
                        style={ styles.picker }
                        selectedValue={ this.state.cotacao }
                        onValueChange={ (itemvalue, itemindex) => this.setState({ cotacao: itemvalue }) }
                        >
                            { moneyItem }
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
    },
    valor: {
        color: '#ff0000',
        fontSize: 20,
        marginLeft: 10,
        fontWeight: '600',
    },
    view1: {
        flexDirection: 'row', 
        alignItems: 'center',
        paddingHorizontal: 10
    },
    picker: {
        width: 120, 
    }
})