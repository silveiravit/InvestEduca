import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from "react-native";

export default function CampoGasto({ data, deleteItem, editItem }){

    const [valor] = useState(data.valorGasto)

    return(
        <View style={ styles.container }>
            <TouchableOpacity onPress={ () => deleteItem(data.key) }>
                <View style={ styles.campoRegisto }>
                    <TouchableWithoutFeedback onPress={ () => editItem(data) }>
                        <Text style={ styles.text }> { data.nomeGasto } </Text>
                    </TouchableWithoutFeedback>
                
                    <TouchableWithoutFeedback >
                        <Text style={[ styles.valor, { color: valor > 0 ? '#27E309' : '#ff0000'} ]}>
                            R$ { valor }
                        </Text>
                    </TouchableWithoutFeedback>
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