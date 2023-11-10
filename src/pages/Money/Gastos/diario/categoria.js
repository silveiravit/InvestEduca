import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
//<AntDesign name="check" size={30} color="white" />

export default function Categoria({ data, add }){

    const [checked, setChecked] = useState(false)

    function adicionar(){

        add(data.categoria)
    }

    return(
        <View>
            <TouchableOpacity onPress={ adicionar } style={ styles.btn }>
            
                <Text style={ styles.textBtn }>
                    { data.categoria }
                </Text>

                { checked !== false ? <AntDesign name="check" size={30} color="white" /> : '' }
                
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBtn: {
        paddingHorizontal: 10, 
        marginVertical: 10, 
        color: '#fff', 
        fontSize: 25, 
        fontWeight: '600',
        flex: 1
    }
})