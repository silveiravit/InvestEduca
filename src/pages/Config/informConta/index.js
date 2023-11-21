import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// Componente de autenticação
import { AuthContext } from "../../../contexts/auth";

// Tema
import ThemeContext from '../../../contexts/ThemeContext'
import appTheme from '../../../themes/Themes'

export default function InformConta(){

    const { email, resetPassword, username } = useContext(AuthContext)
    const [themeMode] = useContext(ThemeContext)

    return(
        <View style={ [styles.container, appTheme[themeMode]] }>
            <View style={ styles.view1 }>
                <Text style={ [{ color: '#161F4E', fontSize: 25, fontWeight: '600'}, appTheme[themeMode]] }>Informações da Conta</Text>

                <View style={ styles.informacoes }>
                    <Text style={ [styles.titulo, appTheme[themeMode]] }>Nome de Usuário</Text>
                    <Text style={ [styles.subtitulo, appTheme[themeMode]] }>{ username }</Text>
                </View>

                <View style={ styles.informacoes }>
                    <Text style={ [styles.titulo, appTheme[themeMode]] }>E-mail</Text>
                    <Text style={ [styles.subtitulo, { textDecorationLine: 'underline' }, appTheme[themeMode]] }>{ email }</Text>
                </View>

                <View style={ styles.informacoes }>
                    <TouchableOpacity onPress={ resetPassword }>
                        <Text style={ [styles.titulo, appTheme[themeMode]] }>Trocar Senha</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center'
    },
    view1: {
        margin: 20
    },
    titulo: {
        color: '#161F4E', 
        fontSize: 25,
        marginTop: 20,
        fontWeight: '600'
    },
    subtitulo: {
        color: '#161F4E', 
        fontSize: 22,
        fontWeight: '600'
    }
})