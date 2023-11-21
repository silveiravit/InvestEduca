import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
//<AntDesign name="check" size={30} color="white" />

export default function Categoria({ data, add }){

    const [checked, setChecked] = useState(false)

    function adicionar(){
        Alert.alert(
            "Deseja confirmar?",
            `Categoria Selecionada: ${data.categoria}`,
            [
                {
                    text: "Cancelar",
                    onPress: () => {return},
                    style: "cancel"
                },
                { 
                    text: "OK", 
                    onPress: () => {add(data.categoria)} 
                }
            ]
        )
    }

    return(
        <View>
            <TouchableOpacity onPress={ adicionar } style={ styles.btn }>
            
                <Text style={ styles.textBtn }>
                    { data.categoria }
                </Text>
                
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#E9AB43'
    },
    textBtn: {
        paddingHorizontal: 10, 
        marginVertical: 20,
        color: '#fff', 
        fontSize: 25, 
        fontWeight: '600',
        flex: 1
    },
})