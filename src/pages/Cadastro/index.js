import react, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import firebase from '../../../database/FirebaseConnection';

export default function Cadastro() {

    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [username, setUsername] = useState('')

    async function cadastrar(){

        await firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then( (value) => {
            firebase.database().ref('usuarios').child(value.user.uid).set({
                username: username
            })
            alert('Usuário cadastrado: ' + username)
            navigation.navigate('Login')
        } )
        .catch( (error) => {
            alert('Ops, ocorreu um erro!')
        })
    }

    return (
        <View style={styles.container}>

            <StatusBar 
                barStyle={'light-content'}
                backgroundColor={'#161F4E'}
            />

            <View style={ styles.viewCont }>

                <View style={ styles.areaTitulo }>
                    <Text style={ styles.text }>Invest</Text>
                    <Text style={ styles.text1 }>Educa</Text>
                </View>

                <View style={ styles.view1 }>

                    <View style={ styles.areaImg }>
                        <Image 
                            source={require('../../img/Porco.png')}
                            style={ styles.img }
                        />
                    </View>

                    <Text style={ styles.titulo }>Cadastrar</Text>

                    <TextInput 
                        style={ styles.input }
                        onChangeText={ (username) => setUsername(username) }
                        placeholder='Username'
                    />

                    <TextInput 
                        style={ styles.input }
                        onChangeText={ (email) => setEmail(email) }
                        placeholder='E-mail'
                    />

                    <TextInput 
                        style={ styles.input }
                        onChangeText={ (senha) => setSenha(senha) }
                        keyboardType='numeric'
                        secureTextEntry={true}
                        placeholder='Senha'
                    />

                    <TextInput 
                        style={ styles.input }
                        onChangeText={ (senha) => setSenha(senha) }
                        keyboardType='numeric'
                        secureTextEntry={true}
                        placeholder='Confirmação de senha'
                    />

                </View>

                <View style={ styles.view2 }>  
                    <TouchableOpacity style={ styles.btn } onPress={ cadastrar }>
                        <Text style={ styles.textoBtn }>CADASTRAR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ styles.cadastre } onPress={ () => navigation.navigate('Login') }>
                        <Text style={ styles.textoCadastro }>
                            Já possui conta? 
                        </Text>

                        <Text style={ styles.textoCadastro1 }>
                            Faça o login
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161F4E',
    },
    view1: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        height: 400,
        paddingHorizontal: '5%',
        borderRadius: 15,
        width: '95%'
    },
    view2: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    viewCont:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto: {
        fontSize: 25,
        color: '#fff',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        fontSize: 25,
        textAlign: 'left',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 30,
        color: '#161F4E',
        backgroundColor: '#E9AB43',
        margin: 10
    },
    btn: {
        backgroundColor: '#E9AB43',
        padding: 10,
        alignItems: 'center',
        borderRadius: 30,
        width: 200
    },
    textoBtn: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
    },
    titulo: {
        color: '#161F4E',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 40,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    areaTitulo: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    text: {
        fontSize: 40,
        color: '#fff',
        marginBottom: 50,
        fontWeight: 'bold',
    },
    text1: {
        fontSize: 40,
        color: '#E9AB43',
        marginBottom: 50,
        fontWeight: 'bold'
    },
    img: {
        width: 130,
        height: 130
    },
    areaImg: {
        marginTop: -110,
        alignItems: 'center'
    },
    textoCadastro: {
        color: '#fff', 
        fontSize: 23, 
        textAlign: 'center'
    },
    textoCadastro1: {
        color: '#E9AB43', 
        fontSize: 23, 
        textAlign: 'center',
        marginLeft: 5,
        fontWeight: 'bold'
    },
    cadastre: {
        flexDirection: 'row',
        marginTop: 10
    }
});