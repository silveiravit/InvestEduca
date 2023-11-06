import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

export default function Categoria({ data, add, addOutro }){

    const [input, setInput] = useState('')

    return(
        <View>
            <TouchableOpacity onPress={ () => add(data.categoria) } >
                { data.categoria !== 'Outro' ?
                    <Text style={{ paddingHorizontal: 10, marginVertical: 10, color: '#fff', fontSize: 25, fontWeight: '600'}}>
                        { data.categoria }
                    </Text> : 

                    <TextInput 
                        placeholder="Outro"
                        placeholderTextColor={'#fff'}
                        onChangeText={ (value) => setInput(value) }
                        style={ styles.input }
                    />
                }
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#ffffff55',
        borderRadius: 10,
        fontSize: 25,
        padding: 5,
        paddingHorizontal: 10,
        color: '#fff',
        fontWeight: '600'
    }
})