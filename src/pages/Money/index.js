import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, Dimensions, Button} from "react-native";
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';

export default function Money(){

    const navigation = useNavigation()

    return(
        <View style={ styles.container }>
            <StatusBar 
                barStyle={'light-content'}
                backgroundColor={'#000'}
            />

            <View style={ styles.areaBtn }>

                <Text style={{ textAlign: 'center', fontSize: 25, color: '#161F4E', fontWeight: '600'}}>O que gostaria de ver?</Text>

                <View style={{ height: 200, borderWidth: 3, borderRadius: 20, borderColor: '#161F4E'}}>

                    <TouchableOpacity 
                        style={ styles.btn } 
                        onPress={ () => navigation.navigate('Objetivo') }
                    >   
                        <View style={ styles.viewBtn }>
                            <Text style={ styles.textoBtn }>OBJETIVOS</Text>
                            <View style={ styles.icon }>
                                <AntDesign name="arrowright" size={30} color="black" /> 
                            </View>
                        </View>
                    </TouchableOpacity>

                    <Text style={{ fontSize: 20, margin: 15, color: '#161F4E'}}>Demonstrativo de metas estabelecidas no planejamento</Text>

                </View>

                <View style={{ height: 200, borderWidth: 3, borderRadius: 20, borderColor: '#161F4E'}}>

                    <TouchableOpacity 
                        style={ styles.btn } 
                        onPress={ () => navigation.navigate('Gasto') }
                    >
                        <View style={ styles.viewBtn }>
                            <Text style={ styles.textoBtn }>GASTOS</Text>
                            <View style={ styles.icon }>
                                <AntDesign name="arrowright" size={30} color="black" /> 
                            </View>
                        </View>
                    </TouchableOpacity>

                    <Text style={{ fontSize: 20, margin: 15, color: '#161F4E'}}>Controle financeiro ligado diretamente a datas</Text>

                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    areaBtn: {
        flex: 1,
        justifyContent: 'space-around',
        marginHorizontal: '3%'
    },
    viewBtn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '3%'
    },
    btn: {
        backgroundColor: '#161F4E',
        marginBottom: '3%',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },  
    textoBtn: {
        color: '#FFF',
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