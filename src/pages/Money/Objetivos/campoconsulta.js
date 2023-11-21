import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CampoConsulta({ data, deleteItem }){

    const valorMensal = Number(data.valorMensal).toFixed(2).replace('.',',')
    const renda = Number(data.renda).toFixed(2).replace('.',',')

    return(
        <View style={ styles.container }>
            <TouchableOpacity onPress={ () => deleteItem(data.key) }>
                <View style={ styles.campoRegisto }>  
                    <Text style={ styles.text }>Objetivo: { data.nomeObjetivo } </Text>
                    
                    <Text style={ styles.text }>Valor Investido: { valorMensal } </Text>
                    
                    <Text style={ styles.text }>Data Prevista: { data.dataPrevista } </Text>
                    
                    <Text style={ styles.text }>Sua renda: R$ { renda } </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    text: {
        color: '#000',
        fontSize: 20,
        paddingLeft: 10
    },
    campoRegisto: {
        borderWidth: 1,
        backgroundColor: '#FFF',
        marginBottom: 15,
        padding: 15,
        borderRadius: 10,
    }
})