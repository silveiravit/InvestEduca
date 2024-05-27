import { styled } from 'styled-components/native'

// Containers
export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    justify-content: center;
    padding: 30px;
    background-color: ${ props => props.theme === 'light' ? '#fff' : '#0D1117'};
`

// Imagens
export const ContainerImage = styled.View`
    margin: 20px;
    align-items: center;
`

export const Image = styled.Image`
    width: 150px;
    height: 150px;
`

// Textos
export const Titulo = styled.Text`
    color: ${ props => props.theme === 'light' ? '#161F4E' : '#fff'};
    font-size: 25px;
    text-align: center;
    font-weight: 600;
`

export const Subtitulo = styled.Text`
    font-Size: 20px;
    color: ${ props => props.theme === 'light' ? '#161F4E' : '#fff'};
    margin-Left: 3%;
    margin-bottom: 15px;
    font-weight: 600;
`

export const ViewFormulario = styled.View`
    margin-bottom: 15px;
`

// Botões
export const DateButton = styled.TouchableOpacity`
    background-color: ${ props => props.theme === 'light' ? '#161F4E' : '#fff'};
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border-width: 2px;
    border-radius: 10px;
    padding: 8px;
`

export const TextDateButton = styled.Text`
    flex: 1; 
    text-align: center;
    font-size: 20px; 
    color: #666;
`

export const Buttons = styled.TouchableOpacity`
    background-color:  ${ props => props.theme === 'light' ? '#161F4E' : '#481298'};
    border-radius: 10px;
    width: 150px;
    height: 50px;
    justify-content: center;
`

export const TextButtons = styled.Text`
    color: #FFF;
    font-size: 25px;
    text-align: center;
    font-weight: bold;
`

export const AreaButton = styled.View`  
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
`

// Input
export const Input = styled.TextInput`
    border-width: 2px;
    border-radius: 10px;
    font-size: 20px;
    padding: 10px;
    width: 100%;
    text-align: center;
    background-color: #fff;
`

// Picker
export const ContainerPicker = styled.View`
    border-width: 2px;
    border-radius: 10px;
    background-color: #fff;
`