import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Picker } from '@react-native-picker/picker';

export default function Money(){
    return(
        <View style={ styles.container }>
            <ScrollView>
                <Text style={ styles.titulo }>Estabeleça seus Objetivos</Text>

                <View style={ styles.view2 }>
                    <Text style={ styles.subtitulo }>QUAL O SEU OBJETIVO?</Text>
                    <View style={styles.picker}>
                        <Picker style={styles.picker1}>
                            <Picker.Item 
                                key={1}
                                value={1}
                                label="Carro"
                            />

                            <Picker.Item 
                                key={1}
                                value={1}
                                label="Imóvel"
                            />
                        </Picker>
                    </View>
                </View>

                <View style={ styles.view2 }>
                    <Text style={ styles.subtitulo }>GASTOS MENSAIS</Text>
                    <TextInput style={ styles.input } />
                </View>

                <View style={ styles.view2 }>
                    <Text style={ styles.subtitulo }>VALOR MENSAL</Text>
                    <TextInput style={ styles.input } />
                </View>

                <View style={ styles.view2 }>
                    <Text style={ styles.subtitulo }>DATA PREVISTA</Text>
                    <TextInput style={ styles.input } />
                </View>

                <View style={ styles.view2 }>
                    <Text style={ styles.subtitulo }>RENDA</Text>
                    <TextInput style={ styles.input } />
                </View>

                <TouchableOpacity style={ styles.btn }>
                    <Text style={ styles.textoBtn }>CALCULAR</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 50
    },
    titulo: {
        color: '#161F4E',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 25
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
        padding: 5,
        margin: 10,
        width: 380,
        textAlign: 'center'
    },
    view2: {
        marginTop: 10
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
    },
    picker: {
        borderRadius: 50,
        margin: 10,
        borderWidth: 2,
        padding: 0
    },
    picker1: {
        margin: -5
    }
})