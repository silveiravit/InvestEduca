import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ActivityIndicator, Modal } from "react-native";

// Conexão Firebase
import firebase from '../../../database/FirebaseConnection'

// Hook de navegação
import { useNavigation } from '@react-navigation/native'

// Biblioteca de icones
import { AntDesign } from '@expo/vector-icons';

// Componente de autenticação
import { AuthContext } from "../../contexts/auth";

// Biblioteca do switch para alterar o tema
import { Switch } from "react-native-switch";

// Tema
import ThemeContext from "../../contexts/ThemeContext";
import appTheme from "../../themes/Themes";

// Dimensões da tela
const WIDTH = Dimensions.get('window').width * 1

export default function Config(){

    // Constante de navegação
    const navigation = useNavigation()

    // Context username
    const { username } = useContext(AuthContext)

    // Constante de loading
    const [loading, setLoading] = useState(false)

    // Constante do tema
    const [themeMode, setThemeMode] = useContext(ThemeContext)

    function sair(){
        setLoading(true)
        setTimeout( () => {
            firebase.auth().signOut()
            .then( () => {
                navigation.navigate('Login')
                setLoading(false)
            })
            .catch( () => {
                alert('Ops, algo deu errado.')
            })   
        }, 2000)
    }

    return(
        <View style={ [styles.container, appTheme[themeMode]] }>

            <Modal transparent visible={loading}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator 
                        size={100}
                        color={ themeMode === 'light' ? '#161F4E' : '#fff' }
                        animating={true}
                    />
                </View>
            </Modal>

            <Image
                source={require('../../images/PorcoConfig.png')}
                style={ styles.img }
            />

            <View style={ styles.nomeUsuario }>
                <Text style={[{ fontSize: 25, fontWeight: '600', color: '#161F4E' }, appTheme[themeMode]]}>Bem-vindo, { username }!</Text>
            </View>

            <View style={ styles.config }>
                <Text style={ styles.titulo }>Aparência</Text>

                <View style={ [styles.areaBtn, { borderBottomWidth: 1, borderBottomColor: '#ccc' }] }>
                    <Text style={ [styles.subtitulo, appTheme[themeMode] ]}>Tema Escuro</Text>
                    <Switch
                        value={themeMode === 'light' ? false : true }
                        onValueChange={ () => setThemeMode(themeMode === 'light' ? 'dark' : 'light')}
                        circleSize={35}
                        activeText={'ON'}
                        inActiveText={'OFF'}
                    />
                </View>               

                <Text style={ styles.titulo }>Conta</Text>

                <TouchableOpacity style={ styles.btn } onPress={ () => navigation.navigate('Suporte')}>
                    <View style={ styles.areaBtn }>
                        <Text style={ [styles.subtitulo, appTheme[themeMode]] }>Ajuda e Suporte</Text>
                        <AntDesign name="right" size={25} color="#EE990A" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.btn } onPress={ () => navigation.navigate('InformConta')}>
                    <View style={ styles.areaBtn }>
                        <Text style={ [styles.subtitulo, appTheme[themeMode]] }>Informações da Conta</Text>
                        <AntDesign name="right" size={25} color="#EE990A" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={ sair }>
                    <Text style={ [styles.subtitulo, { color: '#EE990A'}] }>Sair</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        width: WIDTH
    },
    config: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    img: {
        width: 150,
        height: 150,
        marginVertical: 40,
        borderWidth: 1,
        borderColor: '#EE990A',
        borderRadius: 80
    },
    titulo: {
        color: '#EE990A',
        fontWeight: '600',
        fontSize: 25,
        marginVertical: 20
    },
    subtitulo: {
        color: '#161F4E',
        fontWeight: '600',
        fontSize: 25,
        borderBottomColor: '#ccc',
        marginTop: 20,
        marginBottom: 20,
        marginRight: '5%'
    },
    areaBtn: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    btn: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    nomeUsuario: {
        
    }
})