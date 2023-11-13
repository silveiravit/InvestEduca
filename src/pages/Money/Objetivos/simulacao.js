import react, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export default function Simular({ setVisible, data, valorMensal, renda, dataPrevista }){

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={ styles.view }>

                <View>
                    <Text>Para realizar o seu objetivo vai precisar: </Text>
                </View>

                <View>
                    <Text>O seu objetivo é { data }</Text>
                </View>

                <View>
                    <Text>Investir { valorMensal }</Text>
                </View>

                <View>
                    <Text>A data prevista é { dataPrevista }</Text>
                </View>

                <View>
                    <Text>A renda mensal é { renda }</Text>
                </View>

            </View>

            <TouchableOpacity onPress={ () => setVisible(false) } style={ styles.btn }>
                <Text style={ styles.textBtn }>VOLTAR</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center'
    },
    btn: {
        backgroundColor: '#161F4E',
        width: 150,
        alignItems: 'center',
        borderRadius: 50,
        padding: 10,
        marginBottom: 50
    },
    textBtn: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600'
    }
})