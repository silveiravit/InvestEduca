import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, Switch } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function Tema(){

    const [checked, setChecked] = useState()

    return(
        <View style={ styles.container }>

            <Text style={ styles.tema }>TEMA</Text>

            <TouchableOpacity style={ styles.btn } onPress={ (claro) => setChecked('claro')}>
                <Text style={ styles.textBtn }>Claro</Text>

                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                    { checked === 'claro' ? <AntDesign name="check" size={24} color="#161F4E" /> : '' }
                </View>
                
            </TouchableOpacity>

            <TouchableOpacity style={ styles.btn } onPress={ (escuro) => setChecked('escuro')}>
                <Text style={ styles.textBtn }>Escuro</Text>

                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                    { checked === 'escuro' ? <AntDesign name="check" size={24} color="#161F4E" /> : '' }
                </View>
                
            </TouchableOpacity>

            <TouchableOpacity style={ styles.btn } onPress={ (automatico) => setChecked('automatico')}>
                <Text style={ styles.textBtn }>Automático</Text>

                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                    { checked === 'automatico' ? <AntDesign name="check" size={24} color="#161F4E" /> : '' }
                </View>

            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        paddingHorizontal: 20
    },
    tema: {
        fontSize: 25,
        fontWeight: '600',
        color: '#161F4E',
        marginVertical: 10
    },
    btn: {
        marginVertical: 10,
        flexDirection: 'row'
    },
    textBtn: {
        fontSize: 20,
        fontWeight: '600',
        color: '#161F4E'
    }
})