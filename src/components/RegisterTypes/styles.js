import { styled } from 'styled-components/native'

export const ButtonArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0;
`
export const Buttons = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.checked ? '#fff':'#ccc'};
    padding: 10px;
    border-radius: 5px;
    width: 45%;
    border-width: 1px;
    border-color: #0D1117;
`
export const ButtonText = styled.Text`
    color: #000;
    font-size: 20px;
    font-weight: bold;
    font-style: italic;
`