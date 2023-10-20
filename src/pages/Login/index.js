import react, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, StatusBar } from 'react-native'; // Componentes
import firebase from '../../../database/FirebaseConnection' // Importação do firebase
import { useNavigation } from '@react-navigation/native' // Hook de navegação

export default function Login({ changeStatus }) {

    const navigation = useNavigation()
    const [email, setEmail] = useState('teste@teste.com')
    const [senha, setSenha] = useState('123456')
    const [username, setUsername] = useState('')

    // Acima foi declarado as states de navegação e de usuário

    function acessar(){

        const user = firebase.auth().signInWithEmailAndPassword(email, senha)
        .then( (user) => {
            // changeStatus(user.user.uid)
            // firebase.database().ref('usuarios').child(user.user.uid).once('value', (snapshot) => {
            //     setUsername(snapshot)
            //     username: username
            // })
            alert('Acesso permitido, '+ user.user.email)
            navigation.navigate('Routes')

        } )
        .catch( () => {
            alert('Acesso negado!')
        })

    }

    // Acima é feito a autenticação no banco de dados firebase para efetuar o login

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

                    <Text style={ styles.titulo }>Entrar</Text>

                    <TextInput 
                        style={ styles.input }
                        onChangeText={ (email) => setEmail(email) }
                        placeholder='E-mail'
                        placeholderTextColor={'#161F4E'}
                        value={email}
                    />

                    <TextInput 
                        style={ styles.input }
                        onChangeText={ (senha) => setSenha(senha) }
                        keyboardType='numeric'
                        secureTextEntry={true}
                        placeholder='Senha'
                        placeholderTextColor={'#161F4E'}
                        value={senha}
                    />

                </View>

                <View style={ styles.view2 }>  
                    <TouchableOpacity style={ styles.btn } onPress={ acessar } >
                        <Text style={ styles.textoBtn }>ENTRAR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ styles.cadastre } onPress={ () => navigation.navigate('Cadastro') }>
                        <Text style={ styles.textoCadastro }>
                            Não tem uma conta? 
                        </Text>

                        <Text style={ styles.textoCadastro1 }>
                            Cadastre-se
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
        margin: 10,
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
        alignItems: 'center',
        marginBottom: 20
    },
    text: {
        fontSize: 40,
        color: '#fff',
        marginBottom: 50,
        fontWeight: 'bold'
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
        marginTop: -240,
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