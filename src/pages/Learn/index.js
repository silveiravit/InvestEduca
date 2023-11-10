import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView, Image, TouchableOpacity } from "react-native";

import { useNavigation } from '@react-navigation/native'

export default function Learn(){

    const navigation = useNavigation()

    return(
        <View style={ styles.container }>

            <View style={ styles.areaTitulo }>
                <Text style={ styles.titulo }>O que você quer aprender hoje?</Text>
            </View>

            <View style={ styles.areaAssunto }>

                <TouchableOpacity style={ styles.assunto } onPress={ () => navigation.navigate('EducaFinan')}>
                    <View style={ styles.areaImg }>
                        <Image
                            source={ require('../../images/ef4.png')}
                            style={ styles.imagem }
                        />
                    </View>
                    <View style={ styles.areaText }>
                        <Text style={ styles.textAssunto }>O que é educação financeira?</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.assunto } onPress={ () => navigation.navigate('Dividas') }>
                    <View style={ styles.areaImg }>
                        <Image
                            source={ require('../../images/ef5.jpg')}
                            style={ styles.imagem }
                        />
                    </View>
                    <View style={ styles.areaText }>
                        <Text style={ styles.textAssunto }>Dívidas</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.assunto } onPress={ () => navigation.navigate('Investimento') }>
                    <View style={ styles.areaImg }>
                        <Image
                            source={ require('../../images/ef3.jpg')}
                            style={ styles.imagem }
                        />
                    </View>

                    <View style={ styles.areaText }>
                        <Text style={ styles.textAssunto }>O que é investimento?</Text>
                    </View>
                </TouchableOpacity> 

                <TouchableOpacity style={ styles.assunto } onPress={ () => navigation.navigate('Organizar') }>
                    <View style={ styles.areaImg }>
                        <Image
                            source={ require('../../images/ef6.jpg')}
                            style={ styles.imagem }
                        />
                    </View>

                    <View style={ styles.areaText }>
                        <Text style={ styles.textAssunto }>Como organizar suas finanças?</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    assunto: {
        width: '90%',
        backgroundColor: '#161F4EEB',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 20,
    },
    imagem: {
        height: 60, 
        width: 60, 
        borderRadius: 50
    },
    areaImg: {
        justifyContent: 'flex-start',
        borderWidth: 3,
        borderColor: '#fff',
        padding: 7,
        borderRadius: 50
    },
    textAssunto: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600'
    },
    titulo: {
        fontSize: 25,
        color: '#161F4E',
        fontWeight: '600',
    },
    areaText: {
        flex: 1,
        alignItems: 'flex-start',
        marginHorizontal: 20
    },
    areaTitulo: {
        marginVertical: 50
    },
    areaAssunto: {
        flex: 1,
        justifyContent: 'flex-start'
    }
})