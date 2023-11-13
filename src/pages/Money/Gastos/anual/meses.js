import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'

export default function Meses({ data, handleMes }){

    return(
        <View>
            <TouchableOpacity onPress={ () => handleMes(data.mes) }>
                <Text style={{ marginHorizontal: 10, marginVertical: 10, color: '#fff', fontSize: 25, fontWeight: '600'}}>
                    { data.mes }
                </Text>
            </TouchableOpacity>
        </View>
    )
}