import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, Switch } from "react-native";

import { AuthContext } from "../../../contexts/auth";

export default function InformConta(){

    const { email, senha, username } = useContext(AuthContext)

    return(
        <View style={ styles.container }>
            <View style={ styles.view1 }>
                <Text style={ { color: '#161F4E', fontSize: 25, fontWeight: '600'} }>Informações da Conta</Text>

                <View style={ styles.informacoes }>
                    <Text style={ styles.titulo }>Nome de Usuário</Text>
                    <Text style={ styles.subtitulo }>{ username }</Text>
                </View>

                <View style={ styles.informacoes }>
                    <Text style={ styles.titulo }>E-mail</Text>
                    <Text style={ [styles.subtitulo, { textDecorationLine: 'underline' }] }>{ email }</Text>
                </View>

                <View style={ styles.informacoes }>
                    <Text style={ styles.titulo }>Senha</Text>
                    <Text style={ styles.subtitulo }>{ senha }</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center'
    },
    view1: {
        margin: 20
    },
    titulo: {
        color: '#161F4E', 
        fontSize: 25,
        marginTop: 20,
        fontWeight: '600'
    },
    subtitulo: {
        color: '#161F4E', 
        fontSize: 22,
        fontWeight: '600'
    }
})