import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import Conversor from "../../../services/conversor";
import { AntDesign } from '@expo/vector-icons';

export default function Home(){

    return(
        <View style={ styles.container }>
            
            <Conversor moedaA="USD" moedaB="BRL" />

            <View>
                <TouchableOpacity style={ styles.btn }>
                    <Text style={ styles.textoBtn }>Objetivos </Text>

                    <View style={{ marginLeft: 160}}>
                        <Text style={{ backgroundColor: '#E9AB43', borderRadius: 50, padding: 10 }}> <AntDesign name="arrowright" size={30} color="black" /> </Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity style={ styles.btn }>
                    <Text style={ styles.textoBtn }>Metas</Text>

                    <View style={{ marginLeft: 210}}>
                        <Text style={{ backgroundColor: '#E9AB43', borderRadius: 50, padding: 10 }}> <AntDesign name="arrowright" size={30} color="black" /> </Text>
                    </View>

                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    btn: {
        backgroundColor: '#161F4E',
        margin: 8,
        borderRadius: 20,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },  
    textoBtn: {
        color: '#E9AB43',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 15
    }
})