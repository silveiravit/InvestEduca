import { styled } from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${props => props.theme === 'light'?'#fff':'#0D1117'};
    padding: 20px;
`
export const ContainerFaleConosco = styled.View`
    justify-content: flex-start; 
    align-items: center; 
    flex-direction: row; 
    border-bottom-width: 1px; 
    margin: 20px 0; 
    border-bottom-color: ${props => props.theme === 'light'?'#161F4E':'#fff'};
`
export const TextFaleConosco = styled.Text`
    font-size: 30px;
    font-weight: 600;
    color: ${props => props.theme === 'light'?'#161F4E':'#fff'};
    padding-right: 20px;
`
export const Text = styled.Text`
    font-size: 18px;
    color: ${props => props.theme === 'light'?'#161F4E':'#fff'};
`
export const ButtonEnviar = styled.TouchableOpacity`
    border-radius: 5px;
    background-color: ${props => props.theme === 'light'?'#161F4E':'#481298'};
    padding: 10px;
`
export const ButtonText = styled.Text`
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
`
export const CampoDuvida = styled.TextInput`
    border-width: 2px;
    border-radius: 5px;
    margin: 20px 0;
    padding: 10px;
    align-items: flex-start;
    font-size: 20px;
    border-color: #bbb;
    background-color: #fff;
`