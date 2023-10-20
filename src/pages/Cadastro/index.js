import react, { useState } from 'react' // Hook de estados
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, StatusBar } from 'react-native'; // Componentes
import { useNavigation } from '@react-navigation/native' // Hook de navegação

import firebase from '../../../database/FirebaseConnection'; // Importação do firebase

export default function Cadastro() {

    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmSenha, setConfirmSenha] = useState('')
    const [username, setUsername] = useState('')
    const [user, setUser] = useState(null)

    // Acima foi declarado as states de navegação e de usuário

    async function cadastrar(){

        if( confirmSenha === senha){

            await firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then( (user) => {
                
                firebase.database().ref('usuarios').child(user.user.uid).set({
                    username: username
                })

                alert('Usuário cadastrado, '+ username)
                navigation.navigate('Login')

            } )
            .catch( (error) => {
                alert('Ops, ocorreu um erro!')
            })

        }else{

            alert('Senhas diferentes!')
            return

        }
    }

    // Acima é feito a autenticação no banco de dados firebase para efetuar o cadastro

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
                        placeholderTextColor={'#161F4E'}
                    />

                    <TextInput 
                        style={ styles.input }
                        onChangeText={ (email) => setEmail(email) }
                        placeholder='E-mail'
                        placeholderTextColor={'#161F4E'}
                    />

                    <TextInput 
                        style={ styles.input }
                        onChangeText={ (senha) => setSenha(senha) }
                        keyboardType='numeric'
                        secureTextEntry={true}
                        placeholder='Senha'
                        placeholderTextColor={'#161F4E'}
                    />

                    <TextInput 
                        style={ styles.input }
                        onChangeText={ (confirmsenha) => setConfirmSenha(confirmsenha) }
                        keyboardType='numeric'
                        secureTextEntry={true}
                        placeholder='Confirmação de senha'
                        placeholderTextColor={'#161F4E'}
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