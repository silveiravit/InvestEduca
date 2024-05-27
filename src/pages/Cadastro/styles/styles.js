import { styled } from 'styled-components/native'

// Estilo dos container
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${props => props.theme === 'light' ? '#161F4E' : '#0D1117'};
    justify-content: center;
    align-items: center;
`

export const ContainerModal = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const ContainerInvestEduca = styled.View`
    flex-direction: row;
    margin-bottom: 70px;
`

export const ContainerForm = styled.View`
    justify-content: center;
    background-color: #fff;
    height: 400px;
    padding: 0 5%;
    border-radius: 5px;
    width: 90%;
`

export const ContainerImage = styled.View`
    justify-content: flex-start;
    align-items: center;
    margin-top: -25%;
`

export const ContainerCad = styled.View`
    flex: 1;
    justify-content: space-around;
    padding-bottom: 20px;
`

// Estilo dos textos
export const TextCadastrar = styled.Text`
    color: ${props => props.theme === 'light'?'#161F4E' : '#0D1117'};
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    font-style: italic;
`

export const TextInvest = styled.Text`
    font-size: 40px;
    color: #fff;
    font-weight: bold;
`

export const TextEduca = styled.Text`
    font-size: 40px;
    color: #E9AB43;
    font-weight: bold;
`

// Estilo dos inputs
export const FieldInput = styled.TextInput`
    font-size: 22px;
    text-align: left;
    border-radius: 5px;
    color: ${props => props.theme === 'light'?'#161F4E' : '#0D1117'};
    background-color: #E9AB43;
    padding: 10px 20px;
`

export const ContainerPassword = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #E9AB43;
    border-radius: 5px;
    justify-content: center;
    padding: 10px 20px;
`

export const Input = styled.TextInput`
    flex: 1;
    font-size: 22px;
    text-align: left;
    color: ${props => props.theme === 'light'?'#161F4E' : '#0D1117'};
`

// Estilo dos botões
export const ContainerButton = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`

export const ButtonCadastro = styled.TouchableOpacity`
    background-color: #E9AB43;
    padding: 10px;
    align-items: center;
    border-radius: 5px;
    width: 200px;
`

export const TextButtonCadastro = styled.Text`
    color: ${props => props.theme === 'light'?'#161F4E' : '#0D1117'};
    font-size: 25px;
    font-weight: bold;
`

export const LinkLogin = styled.TouchableOpacity`
    flex-direction: row;
    margin-top: 10px;
`

export const TextLogin1 = styled.Text`
    color: #fff; 
    font-size: 23px;
    text-align: center;
`

export const TextLogin2 = styled.Text`
    color: #E9AB43; 
    font-size: 23px;
    text-align: center;
    margin-left: 5px;
    font-weight: bold;
`

// Estilo de Imagens
export const Image = styled.Image`
    width: 130px;
    height: 130px;
`