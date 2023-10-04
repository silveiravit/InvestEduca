import react, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, StatusBar } from 'react-native';
import firebase from '../../../database/FirebaseConnection'
import { useNavigation } from '@react-navigation/native'

export default function Login() {

    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [username, setUsername] = useState('')

    async function logar(){

        await firebase.auth().signInWithEmailAndPassword(email, senha)
        .then( (value) => {
            firebase.database().ref('usuarios').child(value.user.uid).on('value', (snapshot) => {
                alert('Bem-vindo, '+ snapshot.val().username + '!')
            })
            
            navigation.navigate('Routes')
        })
        .catch( (error) => {
            alert('Ops, ocorreu um erro!')
        } )

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

                    <Text style={ styles.titulo }>Entrar</Text>

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

                </View>

                <View style={ styles.view2 }>  
                    <TouchableOpacity style={ styles.btn } onPress={ logar } >
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