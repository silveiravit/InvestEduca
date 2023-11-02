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
                            source={ require('../../img/ef4.png')}
                            style={ styles.imagem }
                        />
                    </View>
                    <View style={ styles.areaText }>
                        <Text style={ styles.textAssunto }>O que é educação financeira?</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.assunto }>
                    <View style={ styles.areaImg }>
                        <Image
                            source={ require('../../img/ef5.jpg')}
                            style={ styles.imagem }
                        />
                    </View>
                    <View style={ styles.areaText }>
                        <Text style={ styles.textAssunto }>Dívidas?</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.assunto }>
                    <View style={ styles.areaImg }>
                        <Image
                            source={ require('../../img/ef3.jpg')}
                            style={ styles.imagem }
                        />
                    </View>

                    <View style={ styles.areaText }>
                        <Text style={ styles.textAssunto }>O que é investimento?</Text>
                    </View>
                </TouchableOpacity> 

                <TouchableOpacity style={ styles.assunto }>
                    <View style={ styles.areaImg }>
                        <Image
                            source={ require('../../img/ef6.jpg')}
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
        
    },
    assunto: {
        width: '90%',
        backgroundColor: '#161F4EEB',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        marginVertical: 20
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
        padding: 5,
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
        fontStyle: 'italic'
    },
    areaText: {
        flex: 1,
        alignItems: 'flex-start',
        marginHorizontal: 10
    },
    areaTitulo: {
        marginVertical: 50
    },
    areaAssunto: {
        flex: 1,
        justifyContent: 'flex-start'
    }
})