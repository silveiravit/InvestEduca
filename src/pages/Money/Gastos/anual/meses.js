import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Meses({ data, handleMes, keyMes }){

    function mesesSelect(){
        handleMes(data.mes)
        keyMes(data.key)
    }

    return(
        <View>
            <TouchableOpacity style={ styles.btn } onPress={ mesesSelect }>
                <Text style={{ marginHorizontal: 10, marginVertical: 10, color: '#fff', fontSize: 25, fontWeight: '600'}}>
                    { data.mes }
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomWidth: 2,
        borderBottomColor: '#E9AB43'
    },
})