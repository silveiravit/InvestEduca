import styled from "styled-components/native";

// View principal
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${ props => props.theme === 'light' ? '#fff' : '#0D1117' };
    justify-content: space-between;
`
export const ViewContainerCotacao = styled.View`
    height: 50px;
`
export const ViewContainerMovimentacao = styled.View`
    height: 150px;
`
export const ViewContainerImages = styled.View`
    height: 350px;
    margin: 5px 0;
`
// Área referente aos botões
export const SpaceButton = styled.View`
    margin: 5px 0;
`
export const AreaBtn = styled.View`
    margin: 0px 15px;
    margin-bottom: 80px;
    justify-content: space-between;
`
export const Button = styled.TouchableOpacity`
    border-radius: 10px;
    padding: 10px;
    flex-direction: row;
    align-items: center;
    background-color: ${ props => props.theme === 'light' ? '#161F4E' : '#481298' };
`
export const ViewButton = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 3%;
`
export const TextButton = styled.Text`
    color: #FFF;
    font-size: 30px;
    font-weight: bold;
`
export const ViewIcon = styled.View`
    background-color: #E9AB43;
    justify-content: center;
    border-radius: 30px;
    padding: 5px;
`