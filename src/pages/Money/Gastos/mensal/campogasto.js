import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Dimensions } from "react-native";
import { Octicons } from '@expo/vector-icons';

export default function CampoGasto({ data, deleteItem, editItem }){

    const [valor] = useState(data.valorGasto)

    return(
        <View style={ styles.container }>
            <View style={ styles.campoRegisto }>
                <TouchableOpacity onPress={ () => deleteItem(data.key) }>
                    <Octicons name="trash" size={25} color="black" />
                </TouchableOpacity>

                <TouchableWithoutFeedback onPress={ () => editItem(data) }>
                    <Text style={ styles.text }> { data.nomeGasto } </Text>
                </TouchableWithoutFeedback>
                
                <TouchableWithoutFeedback >
                    <Text style={[ styles.valor, { color: valor > 0 ? '#27E309' : '#ff0000'} ]}> 
                        R$ { data.valorGasto } 
                    </Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: '#000',
        fontSize: 20
    },
    valor: {
        fontSize: 20,
        fontWeight: '600'
    },
    campoRegisto: {
        borderWidth: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 15,
        marginHorizontal: 10,
        paddingHorizontal: 15,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})