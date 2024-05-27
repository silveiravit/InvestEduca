import { styled } from 'styled-components/native'

export const RenderCardList = styled.View`
    background-color: ${ props => props.theme === 'light' ? '#161F4E' : '#481298' };
    height: 100%;
    margin: 0 15px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`
export const Text = styled.Text`

`