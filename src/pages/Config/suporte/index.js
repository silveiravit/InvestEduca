import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, ScrollView } from "react-native"; // componentes

// pacote de envio de email
import email from "react-native-email"; 

// biblioteca de icones
import { Feather } from '@expo/vector-icons'; 

// Temas
import ThemeContext from '../../../contexts/ThemeContext'
import appTheme from '../../../themes/Themes'

export default function Suporte(){

    const to = ['investeduca07@gmail.com']
    const [pergunta, setPergunta] = useState('')
    const [themeMode] = useContext(ThemeContext)

    function enviar(){
        email(to, {
            subject: '',
            body: pergunta,
            checkCanOpen: false
        })
    }
    // Função que fará o redirecionamento para o usuário entrar em contato conosco

    return(
        <View style={ [styles.container, appTheme[themeMode]] }>
            <ScrollView>
                <View style={ [styles.faleConosco, { borderColor: themeMode === 'light' ? '#161F4E' : '#fff' }] }>
                    <Text style={ [styles.titulo, appTheme[themeMode]] }>Fale Conosco</Text>
                    <Feather name="phone-call" size={30} color={themeMode === 'light' ? '#161F4E' : '#fff'} />
                </View>
                
                <View>
                    <Text style={[{ fontSize: 20}, appTheme[themeMode]]}>Mande sua mensagem no campo abaixo:</Text>
                    <TextInput
                        placeholder="Digite sua dúvida aqui!"
                        multiline={true}
                        numberOfLines={12}
                        style={ [styles.input, { backgroundColor: themeMode === 'light' ? '#fff' : '#fff'}] }
                        textAlignVertical="top"
                        onChangeText={ (value) => setPergunta(value) }
                    />
                    <TouchableOpacity style={ [styles.btn, { backgroundColor: themeMode === 'light' ? '#161F4E' : '#5C20B6' }] } onPress={ enviar }>
                        <Text style={ styles.textBtn }>ENVIAR</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        paddingHorizontal: 20
    },
    titulo: {
        fontSize: 30,
        fontWeight: '600',
        color: '#161F4E',
        paddingRight: 20
    },
    input: {
        borderWidth: 2,
        borderRadius: 5,
        marginVertical: 20,
        padding: 10,
        alignItems: 'flex-start',
        fontSize: 20
    },
    btn: {
        borderRadius: 10,
        backgroundColor: '#161F4E',
        padding: 10
    },
    textBtn: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600'
    },
    faleConosco: {
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        flexDirection: 'row', 
        borderBottomWidth: 1, 
        marginVertical: 20, 
        borderBottomColor: '#161F4E'
    }
})