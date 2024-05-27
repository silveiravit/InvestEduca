import react, { useState, useContext } from 'react'
import { TouchableOpacity, Modal, ActivityIndicator } from 'react-native';

// Styles
import {
    Container,
    ContainerModal,
    ContainerInvestEduca,
    TextInvest,
    TextEduca,
    ContainerForm,
    ContainerCad,
    Image,
    ContainerImage,
    FieldInput,
    ContainerPassword,
    Input,
    ContainerIconsButtons,
    ContainerLinkCadastro,
    TextForgetPassword,
    ContainerButton,
    ButtonLogin,
    TextButtonLogin,
    LinkCadastro,
    TextLogin1,
    TextLogin2,
    TextLogin
} from './styles/styles'

// Hook de navegação
import { useNavigation } from '@react-navigation/native' 

// Componente de autenticação
import { AuthContext } from '../../contexts/auth';

// Biblioteca de icones
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Login() {

    // Context logar e resetsenha
    const { logar, resetPassword, loading, themeMode, transparent } = useContext(AuthContext)

    // Constante de navegação
    const navigation = useNavigation()

    // State de email
    const [email, setEmail] = useState('')

    // State de senha
    const [senha, setSenha] = useState('')

    // State de ocultar senha
    const [hidePass, setHidePass] = useState(true)

    // Função de login para acessar a home do aplicativo
    function acessar(){
        logar(email, senha)  
    }

    // Função de esqueceu a senha para caso o usuário não lembre da senha
    function resetSenha(){
        resetPassword(email)
    }

    return (
        <Container theme={themeMode}>
            <Modal transparent={transparent} visible={loading}>
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
                    <TextLogin theme={themeMode}>Entrar</TextLogin>
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
                            autoCapitalize='none'
                        /> 
                        <TouchableOpacity onPress={() => setHidePass(!hidePass)}>                               
                            <Entypo name={ !hidePass ? 'eye-with-line' : 'eye'} size={30} color="black" />
                        </TouchableOpacity>
                    </ContainerPassword>
                    <ContainerIconsButtons>
                        <TouchableOpacity>
                            <AntDesign name="google" size={40} color={themeMode === 'light'?'#161F4E':'#0D1117'} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <AntDesign name="facebook-square" size={40} color={themeMode === 'light'?'#161F4E':'#000'} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <AntDesign name="github" size={40} color={themeMode === 'light'?'#161F4E':'#0D1117'} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <AntDesign name="instagram" size={40} color={themeMode === 'light'?'#161F4E':'#0D1117'} />
                        </TouchableOpacity>
                    </ContainerIconsButtons>
                    <ContainerLinkCadastro>
                        <TouchableOpacity onPress={resetSenha}>
                            <TextForgetPassword>Esqueceu a senha?</TextForgetPassword>
                        </TouchableOpacity>
                    </ContainerLinkCadastro>
                </ContainerCad>
            </ContainerForm>
            <ContainerButton>  
                <ButtonLogin onPress={acessar}>
                    <TextButtonLogin theme={themeMode}>ENTRAR</TextButtonLogin>
                </ButtonLogin>
                <LinkCadastro onPress={() => navigation.navigate('Cadastro')}>
                    <TextLogin1>Não tem uma conta?</TextLogin1>
                    <TextLogin2>Cadastre-se</TextLogin2>
                </LinkCadastro>
            </ContainerButton>
        </Container>
    );
}