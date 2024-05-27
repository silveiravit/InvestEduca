import react, { useState, useContext } from 'react' // Hook de estados
import { TouchableOpacity, Modal, ActivityIndicator } from 'react-native';

// Styles
import { 
    Container,
    ContainerModal,
    ContainerInvestEduca,
    TextInvest,
    TextEduca,
    ContainerForm,
    ContainerImage,
    ContainerCad,
    FieldInput,
    ContainerPassword,
    Input,
    ContainerButton,
    ButtonCadastro,
    TextButtonCadastro,
    LinkLogin,
    TextLogin1,
    TextLogin2,
    Image,
    TextCadastrar
 } from './styles/styles'

// Hook de navegação
import { useNavigation } from '@react-navigation/native' 

// Importação do firebase
import firebase from '../../../database/FirebaseConnection';

// Biblioteca de navegação
import { Entypo } from '@expo/vector-icons';

// Tema
import { AuthContext } from '../../contexts/auth';

export default function Cadastro() {

    // Constante de navegação
    const navigation = useNavigation()

    // State de email
    const [email, setEmail] = useState('')

    // State de senha
    const [senha, setSenha] = useState('')

    // State de confirmação de senha
    const [confirmSenha, setConfirmSenha] = useState('')

    // State de username
    const [username, setUsername] = useState('')

    // State de Loading
    const [loading, setLoading] = useState(false)

    // State de ocultar senha
    const [hidePass, setHidePass] = useState(true)

    // State de ocultar confirmação de senha
    const [hidePass1, setHidePass1] = useState(true)

    // Context do tema
    const { themeMode } = useContext(AuthContext)

    function cadastrar(){

        setLoading(true)

        if( confirmSenha === senha && username !== '' ){

            firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then( (user) => {
                
                let userF = firebase.auth().currentUser
                userF.sendEmailVerification()
                .then( () => {
                    alert('Foi enviado um e-mail de verificação para '+email+'.')
                })
                .catch( (error) => {
                    alert('Ops, algo deu errado.')
                })

                firebase.database().ref('Usuarios').child(user.user.uid).set({
                    username: username
                })
                navigation.navigate('Login')
                setLoading(false)

            } )
            .catch( (e) => {
                switch(e.code){
                    case 'auth/invalid-email':
                        alert('E-mail está inválido.')
                        break
                    case 'auth/email-already-in-use':
                        alert('O e-mail fornecido já está em uso por outro usuário.')
                        break
                    case 'auth/weak-password':
                        alert('Sua senha deve ter pelo menos 6 caracteres.')
                        break
                }
                setLoading(false)
            })

        }else{
            alert('Preencha o username e verifique a senha!')
            setLoading(false)
            return
        }
    }

    // Acima é feito a autenticação no banco de dados firebase para efetuar o cadastro

    return (
        <Container theme={themeMode}>
            <Modal transparent visible={loading}>
                <ContainerModal>
                    <ActivityIndicator 
                        size={100}
                        color={themeMode === 'light' ? '#161F4E' : '#0D1117'}
                        animating={true}
                    />
                </ContainerModal>
            </Modal>
            <ContainerInvestEduca>
                <TextInvest>Invest</TextInvest>
                <TextEduca>Educa</TextEduca>
            </ContainerInvestEduca>
            <ContainerForm>
                <ContainerImage>
                    <Image 
                        source={require('../../images/Porco.png')}
                    />
                </ContainerImage>
                <ContainerCad>
                    <TextCadastrar theme={themeMode}>Cadastrar</TextCadastrar>
                    <FieldInput 
                        theme={themeMode}
                        onChangeText={(username) => setUsername(username)}
                        placeholder='Username'
                        placeholderTextColor='#555' 
                        value={username}
                    />
                    <FieldInput
                        theme={themeMode} 
                        onChangeText={(email) => setEmail(email)}
                        placeholder='E-mail'
                        placeholderTextColor='#555'
                        value={email}
                        autoCapitalize='none'
                    />
                    <ContainerPassword>
                        <Input
                            theme={themeMode} 
                            onChangeText={(senha) => setSenha(senha)}
                            secureTextEntry={hidePass}
                            placeholder='Senha'
                            placeholderTextColor='#555'
                            value={senha}
                        /> 
                        <TouchableOpacity onPress={() => setHidePass(!hidePass)} >                               
                            <Entypo name={!hidePass ? 'eye-with-line' : 'eye'} size={30} color="black"/>
                        </TouchableOpacity>
                    </ContainerPassword>
                    <ContainerPassword>
                        <Input
                            theme={themeMode} 
                            onChangeText={(senha) => setConfirmSenha(senha)}
                            secureTextEntry={hidePass1}
                            placeholder='Confirme a senha'
                            placeholderTextColor='#555'
                            value={confirmSenha}
                        /> 
                        <TouchableOpacity onPress={() => setHidePass1(!hidePass1)} >                               
                            <Entypo name={!hidePass1 ? 'eye-with-line' : 'eye'} size={30} color="black"/>
                        </TouchableOpacity>
                    </ContainerPassword> 
                </ContainerCad>
            </ContainerForm>
            <ContainerButton>  
                <ButtonCadastro onPress={cadastrar}>
                    <TextButtonCadastro theme={themeMode}>CADASTRAR</TextButtonCadastro>
                </ButtonCadastro>
                <LinkLogin onPress={() => navigation.navigate('Login')}>
                    <TextLogin1>Já possui conta?</TextLogin1>
                    <TextLogin2>Faça o login</TextLogin2>
                </LinkLogin>
            </ContainerButton>
        </Container>
    );
}