import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Config(){
    return(
        <View style={ styles.container }>
            <Image 
                source={require('../../assets/usuario.png')}
                style={ styles.img }
            />

            <View style={ styles.config }>
                <Text style={ styles.titulo }>Aparência</Text>

                <TouchableOpacity>
                    <Text style={ styles.subtitulo }>Tema</Text>
                </TouchableOpacity>

                <Text style={ styles.titulo }>Conta</Text>

                <TouchableOpacity>
                    <Text style={ styles.subtitulo }>Informações da conta</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={ styles.subtitulo }>Notificações</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={ styles.subtitulo }>Privacidade</Text>
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
    config: {
        width: '70%',
        marginTop: 70,
        justifyContent: 'flex-start'
    },
    img: {
        width: 150,
        height: 150,
        marginTop: 70
    },
    titulo: {
        color: '#EE990A',
        fontWeight: '600',
        fontSize: 25
    },
    subtitulo: {
        color: '#161F4E',
        fontWeight: '600',
        fontSize: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginTop: 20,
        marginBottom: 30,
        
    }
})