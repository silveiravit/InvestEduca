import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar} from "react-native";
import Conversor from "../../../services/conversor";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

export default function Home(){

    const navigation = useNavigation()

    return(
        <View style={ styles.container }>
            
            <StatusBar 
                barStyle={'light-content'}
            />

            <View style={ styles.areaCotacao }>
                <Conversor moedaA="USD" moedaB="BRL" />
            </View>  
            
            <TouchableOpacity 
                style={ styles.btn } 
                onPress={ () => navigation.navigate('Money') }
            >   
                <View style={ styles.view }>

                    <Text style={ styles.textoBtn }>Objetivos </Text>

                    <View style={ styles.icon }>
                        <AntDesign name="arrowright" size={30} color="black" /> 
                    </View>

                </View>
            </TouchableOpacity>

            <TouchableOpacity 
                style={ styles.btn } 
                onPress={ () => navigation.navigate('Money') }
            >
                <View style={ styles.view }>

                    <Text style={ styles.textoBtn }>Metas</Text>

                    <View style={ styles.icon }>
                        <AntDesign name="arrowright" size={30} color="black" /> 
                    </View>

                </View>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    areaCotacao: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'flex-start'
    },
    cotacao: {
        fontSize: 30
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
    },
    icon: {
        backgroundColor: '#E9AB43',
        justifyContent: 'center',
        borderRadius: 30,
        padding: 5
    }
})