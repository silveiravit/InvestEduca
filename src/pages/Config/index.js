import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ActivityIndicator, Modal } from "react-native";
// import * as ImagePicker from 'expo-image-picker';

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

    // Imagem usuário
    // const [img, setImage] = useState(null);

    // useEffect( () => {
        
    //     firebase.database().ref('imagemUsuario').child(user).on('value', (snapshot) => {
    //         setImage(snapshot.val().imagemUsuario)
    //     })

    // }, [user])

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

    // async function uploadImg(){
    //     try{
    //         let result = await ImagePicker.launchImageLibraryAsync({
    //             mediaTypes: ImagePicker.MediaTypeOptions.All,
    //             allowsEditing: true,
    //             aspect: [4, 3],
    //             quality: 1,
    //           });

    //         if(!result.canceled){
    //             saveImg(result.assets[0].uri)
    //         }
    //     } catch(error){
    //         alert('Erro ao fazer o upload da imagem.')
    //     }
    // }

    // function saveImg(image){
        
    //     firebase.database().ref('imagemUsuario').child(user).set({
    //         imagemUsuario: image
    //     })
    //     .then( () => {
    //         alert('Imagem salva.')
    //     })
    //     .catch( () => {
    //         alert('Não foi possivel salvar a imagem.')
    //     })
        
    // }

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

            <View style={ styles.areaImg }>
                
                <Image
                    source={ require('../../images/PorcoConfig.png') }
                    style={ styles.img }
                />
                
            </View>

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
                    <Text style={ [styles.subtitulo, { color: '#EE990A', textDecorationLine: 'underline', textDecorationColor: '#EE990A'}] }>Sair</Text>
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
        width: 141,
        height: 141,
        borderRadius: 80,
        margin: 0.5
    },
    areaImg: {
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderWidth: 4,
        borderColor: '#EE990A',
        borderRadius: 80,
        width: 150,
        height: 150,
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
        marginVertical: 20
    }
})