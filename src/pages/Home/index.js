import React, { useContext } from "react";
import { Dimensions } from "react-native";
import { 
    Container,
    ViewContainerCotacao,
    ViewContainerMovimentacao,
    ViewContainerImages,
    AreaBtn,
    Button,
    ViewButton,
    TextButton,
    ViewIcon,
    SpaceButton
} from './styles/styles'

// Importado o arquivo de conversor de moeda
import Conversor from "../../services/conversor"; 
import Saldo from "../../components/Saldo"
import Receita from "../../components/Receita";
import Despesa from "../../components/Despesa";
import CarouselCotacao from "../../components/CarouselCotacao";
import CarouselMovimentacao from "../../components/CarouselMovimentacao";
import CarouselAssuntos from "../../components/CarouselAssuntos";

// Biblioteca de icones
import { AntDesign } from '@expo/vector-icons';

// Hook de navegação
import { useNavigation } from '@react-navigation/native'

// Biblioteca de animação/carousel
import Carousel from 'react-native-reanimated-carousel'

// Temas
import { AuthContext } from "../../contexts/auth";

// Dimensões da tela
const screenWidth = Dimensions.get('window').width

// Acima faremos com que os componentes da tela se adaptem de acordo com a tela do celular

export default function Home(){

    // Constate de navegação
    const navigation = useNavigation()

    // Context do tema
    const { themeMode } = useContext(AuthContext)

    const carouselMoeda = [
        { moeda: ( <Conversor moedaA="USD" moedaB="BRL" /> ) },
        { moeda: ( <Conversor moedaA="BTC" moedaB="BRL" /> ) },
        { moeda: ( <Conversor moedaA="EUR" moedaB="BRL" /> ) },
        { moeda: ( <Conversor moedaA="GBP" moedaB="BRL" /> ) },
        { moeda: ( <Conversor moedaA="CAD" moedaB="BRL" /> ) },
        { moeda: ( <Conversor moedaA="SEK" moedaB="BRL" /> ) },
        { moeda: ( <Conversor moedaA="CHF" moedaB="BRL" /> ) },
        { moeda: ( <Conversor moedaA="CNY" moedaB="BRL" /> ) },
    ]

    const carouselImagem = [
        {   
            key: 1,
            text:  ( <Saldo /> )
        },
        {   
            key: 2,
            text:  ( <Receita /> )
        },
        {   
            key: 3,
            text:  ( <Despesa /> )
        },
    ]

    const carouselImagemCentro = [
        {   
            key: 1,
            title: 'O que é investimento?',
            text: 'Chega um momento das nossas vidas que precisamos investir em algo para termos retorno no futuro, como um carro ou até mesmo um imóvel. Aqui você está no lugar certo.',
            image:  'https://assets-blog.pagseguro.uol.com.br/wp-content/2022/05/real-digital.jpg' 
        },
        {   
            key: 2,
            title: 'Dicas para organizar suas finanças',
            text: 'Você já pensou sobre o que quer fazer daqui a 5 anos? Está certo sobre qual é o seu objetivo principal no momento? Para essas perguntas precisamos estabelecer metas. ',
            image:  'https://images.pexels.com/photos/6368833/pexels-photo-6368833.jpeg?auto=compress&cs=tinysrgb&w=600' 
        },
        {   
            key: 3,
            title: 'Saindo das dívidas',
            text: 'Sabe aquele momento que parece que suas dívidas não tem fim? Não fique desesperado, com o organizamento financeiro correto você conseguirá sair delas.',
            image:  'https://www.tupi.fm/wp-content/uploads/Endividamento-do-brasileiro-em-2019-Blog-Consignet.png' 
        },
        {   
            key: 4,
            title: 'O que é educação financeira?',
            text: 'Entenda e compreenda os principais assuntos sobre educação financeira com as melhores fontes, como por exemplo a Caixa e o Serasa e você ainda poderá registrar seus gastos.',
            image:  'https://noticiasdab3.com.br/wordpress/wp-content/files/noticiasdab3.com.br/2023/09/educacao-financeira-o-caminho-para-a-prosperidade.jpg',
        },
    ]

    function mudarTela(navegar){
        if( navegar === 'O que é investimento?' ){
            navigation.navigate('Investimento')
            
        } else if( navegar === 'Dicas para organizar suas finanças' ){
            navigation.navigate('Organizar')

        } else if( navegar === 'O que é educação financeira?' ){
            navigation.navigate('EducaFinan')

        } else if( navegar === 'Saindo das dívidas' ){
            navigation.navigate('Dividas')
        }
    }

    return(
        <Container theme={themeMode}>
            <ViewContainerCotacao>      
                <Carousel
                    data={carouselMoeda}
                    renderItem={({item}) => <CarouselCotacao data={item} theme={themeMode}/>}
                    width={screenWidth}
                    height={0}
                    loop={true}
                    autoPlay
                    withAnimation={{
                        type: "timing",
                        config: {
                            duration: 3000,
                        },
                    }}
                    enabled={true}
                />
            </ViewContainerCotacao>  
            <ViewContainerMovimentacao>
                <Carousel
                    data={carouselImagem}
                    renderItem={({item}) => <CarouselMovimentacao data={item} theme={themeMode}/>}
                    width={screenWidth}
                    height={0}
                    loop={true}
                    autoPlay={true}
                    withAnimation={{
                        type: "spring",
                        config: {
                            duration: 5000,
                        },
                    }}
                    enabled={false}
                />
            </ViewContainerMovimentacao>
            <ViewContainerImages>
                <Carousel
                    data={carouselImagemCentro}
                    renderItem={({item}) => <CarouselAssuntos data={item} />}
                    width={screenWidth}
                    height={0}
                    loop={true}
                    autoPlay
                    withAnimation={{
                        type: "spring",
                        config: {
                            duration: 6000,
                        },
                    }}
                />
            </ViewContainerImages>
            <AreaBtn>
                <Button onPress={ () => navigation.navigate('Gasto') } theme={themeMode}>
                    <ViewButton>
                        <TextButton>GASTOS</TextButton>
                        <ViewIcon>
                            <AntDesign 
                                name="arrowright" 
                                size={30} 
                                color={ themeMode === 'light' ? '#161F4E' : '#481298' } 
                            />
                        </ViewIcon>
                    </ViewButton>
                </Button>
                <SpaceButton></SpaceButton>
                <Button onPress={ () => navigation.navigate('Objetivo') } theme={themeMode}>
                    <ViewButton>
                        <TextButton>OBJETIVOS</TextButton>
                        <ViewIcon>
                            <AntDesign 
                                name="arrowright" 
                                size={30} 
                                color={ themeMode === 'light' ? '#161F4E' : '#481298' } 
                            />
                        </ViewIcon>
                    </ViewButton>
                </Button>
            </AreaBtn>
        </Container>
    )
}