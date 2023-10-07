import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar } from "react-native";

export default function Money(){
    return(
        <View style={ styles.container }>
            
            <StatusBar 
                barStyle={'light-content'}
                backgroundColor={'#000'}
            />

            <View style={ styles.view1 }>
                <Text style={ styles.titulo }>Estabeleça seus Objetivos</Text>
            </View>

            <View style={ styles.view2 }>

                <Text style={ styles.subtitulo }>GASTOS MENSAIS</Text>
                <TextInput style={ styles.input } />
            
                <Text style={ styles.subtitulo }>QUAL O SEU OBJETIVO?</Text>
                <TextInput style={ styles.input } />
            
                <Text style={ styles.subtitulo }>VALOR MENSAL</Text>
                <TextInput style={ styles.input } />
            
                <Text style={ styles.subtitulo }>DATA PREVISTA</Text>
                <TextInput style={ styles.input } />
            
                <Text style={ styles.subtitulo }>RENDA</Text>
                <TextInput style={ styles.input } />

            </View>

            <View style={ styles.areaBtn }>
                <TouchableOpacity style={ styles.btn }>
                    <Text style={ styles.textoBtn }>CALCULAR</Text>
                </TouchableOpacity>
            </View>
            

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    view1: {
        flex: 1,
        justifyContent: 'center'
    },
    view2: {
        marginTop: 10,
        justifyContent: 'center'
    },
    areaBtn: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 30
    },
    titulo: {
        color: '#161F4E',
        fontSize: 25,
        textAlign: 'center'
    },
    subtitulo: {
        fontSize: 20,
        color: '#161F4E',
        marginLeft: 15,
        fontWeight: '600'
    },
    input: {
        borderWidth: 2,
        borderRadius: 50,
        fontSize: 20,
        padding: 10,
        margin: 10,
        width: 380,
        textAlign: 'center'
    },
    btn: {
        backgroundColor: '#161F4E',
        borderRadius: 10,
        width: 200,
        marginTop: 20,
        height: 50,
        justifyContent: 'center'
    },
    textoBtn: {
        color: '#E9AB43',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        
    }
})