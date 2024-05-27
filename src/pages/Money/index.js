import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// Hook de navegação
import { useNavigation } from '@react-navigation/native'

// Biblioteca de navegação
import { AntDesign } from '@expo/vector-icons';

// Tema
import { AuthContext } from "../../contexts/auth";
import appTheme from "../../themes/Themes";

export default function Money(){

    // Constante de navegação
    const navigation = useNavigation()

    // Context de tema
    const { themeMode } = useContext(AuthContext)

    return(
        <View style={ [styles.container, appTheme[themeMode]] }>

            <View style={ styles.areaBtn }>

                <Text style={[{ textAlign: 'center', fontSize: 25, color: '#161F4E', fontWeight: '600' }, appTheme[themeMode]]}>O que gostaria de ver?</Text>

                <TouchableOpacity onPress={ () => navigation.navigate('Gasto') } style={ [styles.btn, { borderColor: themeMode === 'light' ? '#161F4E' : '#481298' }] }>

                    <View style={ [styles.view, { backgroundColor: themeMode === 'light' ? '#161F4E' : '#481298',  borderColor: themeMode === 'light' ? '#161F4E' : '#481298' }] } >
                        <View style={ styles.viewBtn }>
                            <Text style={ styles.textoBtn }>GASTOS</Text>
                            <View style={ styles.icon }>
                                <AntDesign name="arrowright" size={30} color={themeMode === 'light' ? '#161F4E' : '#481298'} /> 
                            </View>
                        </View>
                    </View>

                    <Text style={[{textAlign: 'justify', fontSize: 20, margin: 15, color: '#161F4E'}, appTheme[themeMode]]}>Controle financeiro ligado diretamente a datas</Text>

                </TouchableOpacity>

                <TouchableOpacity onPress={ () => navigation.navigate('Objetivo') } style={ [styles.btn, { borderColor: themeMode === 'light' ? '#161F4E' : '#481298' }] }>

                    <View style={ [styles.view, { backgroundColor: themeMode === 'light' ? '#161F4E' : '#481298', borderColor: themeMode === 'light' ? '#161F4E' : '#481298'  }] } >
                        <View style={ styles.viewBtn }>
                            <Text style={ styles.textoBtn }>OBJETIVOS</Text>
                            <View style={ styles.icon }>
                                <AntDesign name="arrowright" size={30} color={themeMode === 'light' ? '#161F4E' : '#481298'} /> 
                            </View>
                        </View>
                    </View>

                    <Text style={[{textAlign: 'justify', fontSize: 20, margin: 15, color: '#161F4E'}, appTheme[themeMode]]}>Demonstrativo de metas estabelecidas no planejamento</Text>

                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 15
    },
    areaBtn: {
        flex: 1,
        justifyContent: 'space-around',
        marginBottom: 100
    },
    viewBtn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '3%'
    },
    view: {
        backgroundColor: '#161F4E',
        marginBottom: '3%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderColor: '#161F4E',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2
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
    },
    btn: {
        borderColor: '#161F4E' , 
        borderWidth: 3, 
        borderRadius: 20, 
        height: 200
    }
})