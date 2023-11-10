import react, { useState, useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native' // Hook de navegação

// Componente de carregamento de página
import Loading from '../../components/Loading';

// Componente de autenticação
import { AuthContext } from '../../contexts/auth';

// Biblioteca de icones
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Login() {

    const { logar, resetPassword } = useContext(AuthContext)
    const navigation = useNavigation()
    const [email, setEmail] = useState('investeduca07@gmail.com')
    const [senha, setSenha] = useState('123456')
    const [loading, setLoading] = useState(false)
    const [hidePass, setHidePass] = useState(true)

    // Acima foi declarado as states de navegação e de usuário

    // Função de login para acessar a home do aplicativo
    function acessar(){
        setLoading(true)
        setTimeout( () => {
            logar(email, senha)
            setLoading(false)
        }, 5000)
        
    }

    // Função de esqueceu a senha para caso o usuário não lembre da senha
    function resetSenha(){

        resetPassword(email)

    }

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
                            source={require('../../images/Porco.png')}
                            style={ styles.img }
                        />
                    </View>

                    <View style={ styles.viewCad }>

                        <Text style={ styles.titulo }>Entrar</Text>

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

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                            <TouchableOpacity onPress={ resetSenha }>
                                <Text style={{ fontSize: 20, fontStyle: 'italic', color: '#161F4E', fontWeight: '500', borderBottomWidth: 1, borderBottomColor: '#161F4E' }}>Esqueceu a senha?</Text>
                            </TouchableOpacity>

                            <Text style={{ marginVertical: 10, fontSize: 20, fontStyle: 'italic', color: '#161F4E', fontWeight: '500'}}>Ou entre com </Text>

                            <TouchableOpacity style={{ backgroundColor: '#E9AB43', padding: 10, borderRadius: 50 }}>
                                <AntDesign name="google" size={30} color="#161F4E" />
                            </TouchableOpacity>
                        </View>

                    </View>

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
        justifyContent: 'flex-start',
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
    }
});