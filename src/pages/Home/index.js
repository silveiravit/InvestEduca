import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, TouchableWithoutFeedback } from "react-native";

// Importado o arquivo de conversor de moeda
import Conversor from "../../services/conversor"; 

// Biblioteca de icones
import { AntDesign } from '@expo/vector-icons';

// Hook de navegação
import { useNavigation } from '@react-navigation/native'

// Biblioteca de animação/carousel
import Carousel from 'react-native-reanimated-carousel'
// import Animated, { Easing } from 'react-native-reanimated';

// Temas
import ThemeContext from "../../contexts/ThemeContext";
import appTheme from "../../themes/Themes";

// Dimensões da tela
const SLIDER_WIDTH = Dimensions.get('window').width

// Acima faremos com que os componentes da tela se adaptem de acordo com a tela do celular

export default function Home(){

    // Constate de navegação
    const navigation = useNavigation()

    // Context do tema
    const [themeMode] = useContext(ThemeContext)

    const carouselMoeda = [
        { moeda: ( <Conversor moedaA="USD" moedaB="BRL" /> ) },
        { moeda: ( <Conversor moedaA="EUR" moedaB="BRL" /> ) },
        { moeda: ( <Conversor moedaA="GBP" moedaB="BRL" /> ) },
        { moeda: ( <Conversor moedaA="CAD" moedaB="BRL" /> ) },
        { moeda: ( <Conversor moedaA="SEK" moedaB="BRL" /> ) },
        { moeda: ( <Conversor moedaA="AUD" moedaB="BRL" /> ) },
        { moeda: ( <Conversor moedaA="CHF" moedaB="BRL" /> ) },
        { moeda: ( <Conversor moedaA="CNY" moedaB="BRL" /> ) },
        { moeda: ( <Conversor moedaA="ARS" moedaB="BRL" /> ) },
        { moeda: ( <Conversor moedaA="JPY" moedaB="BRL" /> ) },
    ]

    const carouselImagem = [
        { 
            image:  'https://investidorsardinha.r7.com/wp-content/uploads/2020/10/o-que-e-educacao-financeira-importancia-e-10-dicas-para-alcancar-1200x900.png' 
        },
        { 
            image:  'https://futurofunsejem.org.br/online/wp-content/uploads/2021/09/120-edfinanceira-1920x1080px-1.jpg' 
        },
        { 
            image:  'https://www.sucessor.com.br/wp-content/uploads/2020/09/educa%C3%A7%C3%A3o-financeira-scaled.jpg' 
        },
        { 
            image:  'https://querofinanciar.com/wp-content/uploads/2019/11/312463-conheca-6-incriveis-aplicativos-de-educacao-financeira.jpg' 
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

    function renderMoeda({ item }){
        return(
            <View style={ [styles.areaCotacao, { backgroundColor: themeMode === 'light' ? '#000' : '#0D1117'}] }>     
                {item.moeda}
            </View> 
        )
    }

    function renderItem({ item }){
        return(
            <View style={ styles.carouselItemContainer }>     
                <Image
                    source={{ uri: `${item.image}`}}
                    style={ styles.image }
                />
            </View> 
        )
    }

    function renderItemCentro({ item }){
        return(
            <View style={ [styles.carouselItemContainerCentro, { borderColor: themeMode === 'light' ? '#161F4E' : '#481298' }] }> 

                <TouchableWithoutFeedback onPress={ () => mudarTela(item.title) }>
                    <Image
                        source={{ uri: `${item.image}` }}
                        style={ styles.imageCentro }
                    />
                </TouchableWithoutFeedback>

                <Text style={ styles.title }>{ item.title }</Text>
                <Text style={ styles.text }>{ item.text }</Text>
            </View> 
        )
    }

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
        <View style={ [styles.container, appTheme[themeMode]] }>        

            <View style={ styles.viewPrincipalCotacao }>
                <Carousel
                    data={carouselMoeda}
                    renderItem={renderMoeda}
                    width={SLIDER_WIDTH}
                    height={50}
                    loop={true}
                    autoPlay
                    withAnimation={{
                        type: "timing",
                        config: {
                          duration: 3000,
                        },
                    }}
                    enabled={false}
                />
            </View>

            <View style={ styles.viewPrincipalImagem }>
                <Carousel
                    data={carouselImagem}
                    renderItem={renderItem}
                    width={SLIDER_WIDTH}
                    height={150}
                    loop={true}
                    autoPlay
                    scrollAnimationDuration={5000}
                    withAnimation={{
                        type: "spring",
                        config: {
                          duration: 2000,
                        },
                    }}
                    enabled={false}
                />
            </View>

            <View style={ [styles.viewCentroImagem, appTheme[themeMode]] }>
                <Carousel
                    data={carouselImagemCentro}
                    renderItem={renderItemCentro}
                    width={SLIDER_WIDTH}
                    height={SLIDER_WIDTH/1.055}
                    loop={true}
                    autoPlay
                    withAnimation={{
                        type: "spring",
                        config: {
                          duration: 5000,
                        },
                    }}
                />
            </View>

            <View style={ styles.areaBtn }>
                <TouchableOpacity 
                    style={ [styles.btn, { backgroundColor: themeMode === 'light' ? '#161F4E' : '#481298' }] } 
                    onPress={ () => navigation.navigate('Objetivo') }
                >   
                    <View style={ styles.viewBtn }>
                        <Text style={ styles.textoBtn }>OBJETIVOS</Text>
                        <View style={ styles.icon }>
                            <AntDesign name="arrowright" size={30} color={ themeMode === 'light' ? '#161F4E' : '#481298' } /> 
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={ [styles.btn, { backgroundColor: themeMode === 'light' ? '#161F4E' : '#481298' }] } 
                    onPress={ () => navigation.navigate('Gasto') }
                >
                    <View style={ styles.viewBtn }>
                        <Text style={ styles.textoBtn }>GASTOS</Text>
                        <View style={ styles.icon }>
                            <AntDesign name="arrowright" size={30} color={ themeMode === 'light' ? '#161F4E' : '#481298' } /> 
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    // Interface
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    areaCotacao: {      
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:  '#000',
    },
    carouselItemContainer: {
        marginHorizontal: '3%',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    viewConteudo:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewPrincipalCotacao: {
        marginBottom: '3%',
    },
    viewPrincipalImagem: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    carouselItemContainerCentro: {
        padding: 20,
        marginVertical: '4%',
        marginHorizontal: '3%',
        borderRadius: 10,
        borderWidth: 3,
        backgroundColor: '#FFF'
    },
    imageCentro : {
        width: '100%',
        height: 200,
        borderRadius: 10
    },
    viewCentroImagem : {
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 18,
        color: '#161F4E',
        fontWeight: '400',
        marginTop: 10
    }, 
    text: {
        fontSize: 14,
        color: '#161F4E',
        fontWeight: '400',
        textAlign: 'justify'
    },

    // Botões
    areaBtn: {
        justifyContent: 'flex-end',
        marginHorizontal: '3%'
    },
    viewBtn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '3%'
    },
    btn: {
        backgroundColor: '#161F4E',
        marginBottom: '3%',
        borderRadius: 15,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },  
    textoBtn: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
    },
    icon: {
        backgroundColor: '#E9AB43',
        justifyContent: 'center',
        borderRadius: 30,
        padding: 5
    }
})