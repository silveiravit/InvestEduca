import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function CampoGasto({ data, deleteItem, editItem }){

    return(
        <View style={ styles.container }>
                
            <TouchableOpacity onPress={ () => deleteItem(data) }>
                <Entypo name="trash" size={24} color="black" />
            </TouchableOpacity>

            <View style={{ paddingRight: 10}}>
                <TouchableWithoutFeedback onPress={ () => editItem(data) }>
                    <Text style={ styles.text }> teste </Text>
                </TouchableWithoutFeedback>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#03254E',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 4
    },
    text: {
        color: '#fff',
        paddingRight: 10,
        fontSize: 17
    }
})