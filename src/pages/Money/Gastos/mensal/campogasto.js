import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CampoGasto({ data, deleteItem, editItem, chave, editValor }){

    const [valor] = useState(Number(data.valorGasto).toFixed(2).replace('.',','))

    function acoesEditChave(){
        editItem(data.nomeGasto)
        chave(data.key)
    }

    function acaoEditValor(){
        editValor(data.valorGasto)
        chave(data.key)
    }

    return(
        <View style={ styles.container }>
            <TouchableOpacity onPress={ () => deleteItem(data.key) }>
                <View style={ styles.campoRegisto }>
                    <TouchableOpacity onPress={ acoesEditChave }>
                        <Text style={ styles.text }> { data.nomeGasto } </Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity onPress={ acaoEditValor }>
                        <Text style={[ styles.valor, { color: valor.replace(',','.') > 0 ? '#27E309' : '#ff0000'} ]}>
                            { Number(data.valorGasto).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }
                        </Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
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
        fontWeight: '600',
        paddingLeft: 6
    },
    campoRegisto: {
        borderWidth: 1,
        backgroundColor: '#FFF',
        marginBottom: 15,
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'flex-start'
    }
})