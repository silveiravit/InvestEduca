import { styled } from 'styled-components/native'
// <--- Tela de Diário --->

// Views
export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    background-color: ${props => props.theme === 'light'?'#fff':'#0D1117'};
    padding: 0 15px;
`
export const CampoValor = styled.View`
    background-color: #E9AB43;
    border-width: 0px;
    border-radius: 5px;
    width: 100%;
    padding: 0 40px;
    margin-bottom: 20px;
`
export const AreaInputMoeda = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
`
export const AreaCategoria = styled.View`
    width: 100%;
`
export const CampoCategoria = styled.View`
    background-color: #E9AB43;
    border-width: 0px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 20px 0; 
`
export const CategoriaText = styled.Text`
    font-size: 30px; 
    color: ${props => props.theme === 'light'?'#161f4e':'#481298'}; 
    font-weight: 700;
`
export const CampoCategoria1 = styled.View`
    background-color: ${props => props.theme === 'light'?'#161F4E' : '#481298'};
    height: 50%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    border-bottom-width: 2px;
    border-color: #E9AB43;
`
export const CampoTitulo = styled.View`
    justify-content: center;
    margin: 20px 0;
`
export const Titulo = styled.Text`
    color: ${props => props.theme === 'light'?'#161f4e':'#fff'};
    font-size: 30px;
    font-style: italic;
    font-weight: bold;
`
// Buttons
export const ButtonAddCategoria = styled.TouchableOpacity`
    background-color: ${props => props.theme === 'light'?'#161F4E' : '#481298'};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 10px;
`
export const ButtonAdd = styled.TouchableOpacity`
    background-color: ${props => props.theme === 'light'?'#161F4E' : '#481298'};
    padding: 10px;
    border-radius: 5px;
`
// TextInput
export const Input = styled.TextInput`
    font-size: 25px;
    text-align: center;
    color: #000;
    width: 80%;
    height: 50px;
    background-color: #ffffff88;
    border-radius: 5px;
    border-width: 1px;
`

// <--- Tela de Mensal --->
// Container
export const ContainerCarregar1 = styled.View`
    flex: 1; 
    align-items: center;
    justify-content: center;
    background-color: #dddddd99;
`
export const ContainerRegistros = styled.View`
    width: 100%;
    flex: 1;
    margin-bottom: 100px;
`
export const ContainerMes = styled.TouchableOpacity`
    margin: 20px 0;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`
export const ContainerAreaTotal = styled.View`
    background-color: #eee;
    width: 100%;
    border-width: 0px;
    border-radius: 5px;
    height: 130px;
    justify-content: center;
    align-items: flex-start;
    padding-left: 20px;
    margin: 0;
`
// Text
export const TituloMes = styled.Text`
    color: ${props => props.color === 'light'?'#161F4E':'#fff'};
    text-align: center;
    font-size: 25px;
    font-weight: 600;
    margin: 0;
    padding: 0 5px;
`
export const TextTotal = styled.Text`
    color: ${props => props.color > 0 ? '#12870C' : '#ff0000'};
    font-size: 30px;
    font-weight: bold;
`
export const TextSaldo = styled.Text`
    font-size: 25px;
    font-weight: 400;
`
export const TextEditar = styled.Text`
    font-size: 20px;
    margin: 0 10px;
`
export const ModalEditGastos = styled.View`
    height: 300px;
    padding: 0 15px;
    background-color: #fff;
    justify-content: space-around;
    border-width: 1px;
    border-color: #161F4E;
`
export const ButtonOk = styled.TouchableOpacity`
    background-color: #161F4E;
    border-radius: 5px;
    align-items: center; 
    padding: 10px;
    flex-direction: row;
    justify-content: center;
`
export const ButtonTextOk = styled.Text`
    font-size: 22px; 
    color: #fff;
    font-weight: 600;
`
export const InputEdit = styled.TextInput`
    border-width: 1px;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    font-size: 20px;
`
// <--- Tela de Anual --->
export const ContainerCarregar = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`
export const Registro = styled.View`
    width: 100%;
`
export const ContainerAno = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    border-bottom-width: 2px;
    border-bottom-color: ${props => props.color === 'light'?'#161f4e':'#fff'};
`
export const ContainerLancamento = styled.View`
    justify-content: center;
    align-items: center;
`
export const LancamentosGastos = styled.View`
    height: 550px;
`
export const TituloAno = styled.Text`
    color: ${props => props.color === 'light'?'#161f4e':'#fff'};
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    margin: 10px 0;
`
export const ContainerModalClick = styled.View`
    flex: 1; 
    background-color: #00000055;
`
export const ModalClickMes = styled.View`
    flex: 1;
    background-color: #fff;
    justify-content: center;
    align-items: center;
`
export const ButtonFeito = styled.TouchableOpacity`
    background-color: #fff;
    margin: 20px; 
    border-radius: 5px; 
    align-items: center; 
    padding: 10px;
    justify-content: center;
    width: 100px;
    border-color: #161F4E;
    border-width: 2px;
`
export const ButtonTextFeito = styled.Text`
    font-size: 20px; 
    color: #161F4E; 
    font-weight: 600;
`
export const ButtonFeito1 = styled.TouchableOpacity`
    background-color: #161F4E;
    margin: 20px; 
    border-radius: 5px; 
    align-items: center; 
    padding: 10px;
    justify-content: center;
    width: 100px;
`
export const ButtonTextFeito1 = styled.Text`
    font-size: 20px; 
    color: #fff; 
    font-weight: 600;
`
export const ButtonAno = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const ContainerExtratoFiltro = styled.View`
    flex: 1;
    width: 100%;
    justify-content: space-around;
    align-items: flex-start;
    padding: 10px 20px;
`
export const AreaButton = styled.View`
    flex-direction: row;
    justify-content: space-around;
    border-top-width: 1px;
    width: 100%;
`
export const TextFiltro = styled.Text`
    font-size: 22px;
`
export const ButtonData = styled.TouchableOpacity`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`
export const TextData = styled.Text`
    font-size: 20px;
    margin-left: 20px;
`
export const AreaButtonData = styled.View`
    align-items: flex-start;
`
export const ContainerTextFiltro = styled.View`

`
export const AreaButtonLancamento = styled.View`
    align-items: flex-start;
`
export const ButtonLancamento = styled.TouchableOpacity`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`
export const TextLancamento = styled.Text`
    font-size: 20px;
    margin-left: 20px;
`
export const ContainerDataInicial = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`
export const ContainerTipoLancamento = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`