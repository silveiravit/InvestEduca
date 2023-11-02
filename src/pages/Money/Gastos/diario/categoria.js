import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'

export default function Categoria({ data, add }){

    return(
        <View>
            <TouchableOpacity onPress={ () => add(data) }>
                <Text style={{ marginVertical: 10, color: '#fff', fontSize: 25, fontWeight: '600'}}>
                    { data.categoria }
                </Text>
            </TouchableOpacity>
        </View>
    )
}