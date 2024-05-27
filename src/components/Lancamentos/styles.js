import { styled } from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
`
export const Text = styled.Text`
    color: #000;
    font-size: 20px;
`
export const TextData = styled.Text`
    font-weight: bold;
    font-size: 20px;
`
export const Valor = styled.Text`
    color: ${props => props.color > 0 ?'#12870C' : '#ff0000'};
    font-size: 22px;
    font-weight: bold;
`
export const CampoRegistro = styled.View`
    border-width: 0px;
    background-color: #eee;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 5px;
    justify-content: center;
    align-items: flex-start;
`