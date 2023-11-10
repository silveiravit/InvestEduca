import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

export default function Suporte(){

    return(
        <View style={ styles.container }>

            <View style={{ borderBottomWidth: 1, marginVertical: 20, borderBottomColor: '#161F4E'}}>
                <Text style={ styles.titulo }>Fale Conosco</Text>
            </View>

            <View>
                <Text style={{ fontSize: 20}}>Mande sua mensagem no campo abaixo:</Text>
                <TextInput
                    placeholder="Digite sua dúvida aqui"
                    multiline={true}
                    numberOfLines={10}
                    style={ styles.input }
                    textAlignVertical="top"
                />
                <TouchableOpacity style={ styles.btn }>
                    <Text style={ styles.textBtn }>ENVIAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        paddingHorizontal: 20
    },
    titulo: {
        fontSize: 30,
        fontWeight: '600',
        color: '#161F4E'
    },
    input: {
        borderWidth: 2,
        borderRadius: 5,
        marginVertical: 20,
        padding: 10,
        alignItems: 'flex-start'
    },
    btn: {
        borderRadius: 10,
        backgroundColor: '#161F4E',
        padding: 10
    },
    textBtn: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600'
    }
})