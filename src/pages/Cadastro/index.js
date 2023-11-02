import react, { useState } from 'react' // Hook de estados
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, StatusBar } from 'react-native'; // Componentes
import { useNavigation } from '@react-navigation/native' // Hook de navegação
import firebase from '../../../database/FirebaseConnection'; // Importação do firebase
import Loading from '../../Loading'; //Componente de Loading 
import { Entypo } from '@expo/vector-icons';

export default function Cadastro() {

    const navigation = useNavigation()
    const [email, setEmail] = useState('vitor@gmail.com')
    const [senha, setSenha] = useState('123456')
    const [confirmSenha, setConfirmSenha] = useState('123456')
    const [username, setUsername] = useState('vitor')
    const [loading, setLoading] = useState(false)
    const [hidePass, setHidePass] = useState(true)
    const [hidePass1, setHidePass1] = useState(true)

    // Acima foi declarado as states de navegação e de usuário

    function cadastrar(){

        setLoading(true)

        if( confirmSenha === senha){

            firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then( (user) => {
                firebase.database().ref('usuarios').child(user.user.uid).set({
                    username: username
                })
                alert('Usuário cadastrado!')
                navigation.navigate('Login')
                setLoading(false)

            } )
            .catch( (error) => {
                if( error.code === 'auth/invalid-email'){
                    alert('E-mail é inválido.')

                }
                if( error.code === 'auth/email-already-exists' ){
                    alert('O e-mail fornecido já está em uso por outro usuário.')
                }
                if( error.code === 'auth/weak-password' ){
                    alert('Sua senha deve ter pelo menos 6 caracteres.')
                }

                setLoading(false)
            })

        }else{
            alert('Senhas diferentes!')
            setLoading(false)
            return
        }
    }

    // Acima é feito a autenticação no banco de dados firebase para efetuar o cadastro

    return (
        <View style={styles.container}>

            <View style={ styles.viewCont }>

                <Loading visible={loading} />

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

                    <View style={ styles.viewCad }>

                        <Text style={ styles.titulo }>Cadastrar</Text>

                        <TextInput 
                            style={ styles.input }
                            onChangeText={ (username) => setUsername(username) }
                            placeholder='Username'
                            placeholderTextColor={'#161F4E'}
                            value={username}
                        />

                        <TextInput 
                            style={ styles.input }
                            onChangeText={ (email) => setEmail(email) }
                            placeholder='E-mail'
                            placeholderTextColor={'#161F4E'}
                            value={email}
                            autoCapitalize='none'
                        />

                        <View style={ styles.inputSenha }>

                            <TextInput 
                                style={ styles.input1 }
                                onChangeText={ (senha) => setSenha(senha) }
                                keyboardType='numeric'
                                secureTextEntry={ hidePass }
                                placeholder='Senha'
                                placeholderTextColor={'#161F4E'}
                                value={senha}
                            /> 

                            <TouchableOpacity onPress={ () => setHidePass(!hidePass)} >                               
                                <Entypo name={ !hidePass ? 'eye-with-line' : 'eye'} size={30} color="black" />
                            </TouchableOpacity>

                        </View>

                        <View style={ styles.inputSenha }>

                            <TextInput 
                                style={ styles.input1 }
                                onChangeText={ (senha) => setConfirmSenha(senha) }
                                keyboardType='numeric'
                                secureTextEntry={ hidePass1 }
                                placeholder='Senha'
                                placeholderTextColor={'#161F4E'}
                                value={confirmSenha}
                            /> 

                            <TouchableOpacity onPress={ () => setHidePass1(!hidePass1)} >                               
                                <Entypo name={ !hidePass1 ? 'eye-with-line' : 'eye'} size={30} color="black" />
                            </TouchableOpacity>

                        </View> 

                    </View>

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
        width: '90%'
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
    viewCad: {
        flex: 1,
        justifyContent: 'flex-start'
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
        marginHorizontal: '2%',
        marginVertical: '3%'
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
        marginVertical: '3%',
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '-25%'
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
    },
    input1: {
        fontSize: 25,
        textAlign: 'left',
        color: '#161F4E',
        flex: 1
    },
    inputSenha: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E9AB43',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 30,
        paddingHorizontal: 20,
        justifyContent: 'center',
        paddingVertical: 5,
        marginHorizontal: '2%',
        margin: 10
    },
});