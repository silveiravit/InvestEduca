import { styled } from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
`
export const Text = styled.Text`
    font-weight: 600;
    font-size: 25px;
    color: #fff;
`
export const TextSaldo = styled.Text`
    font-size: 30px;
    color: ${ props => props.saldo > 0 ? '#27E309' : '#ff0000'};
    font-weight: bold;
`