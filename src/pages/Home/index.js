import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import Conversor from "../../../services/conversor"; // Importado o arquivo de conversor de moeda
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import Carousel from 'react-native-snap-carousel'

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH * 1

// Acima faremos com que os componentes da tela se adaptem de acordo com a tela do celular

export default function Home(){

    const navigation = useNavigation()

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
            title: 'Investindo da melhor forma',
            text: 'Chega um momento das nossas vidas que precisamos investir em algo para termos retorno no futuro. Aqui você está no lugar certo.',
            image:  'https://assets-blog.pagseguro.uol.com.br/wp-content/2022/05/real-digital.jpg' 
        },
        { 
            title: 'Estabelecendo metas',
            text: 'Você já pensou sobre o que quer fazer daqui a 5 anos? Está certo sobre qual é o seu objetivo principal no momento? Sabe o que você quer ter alcançado ',
            image:  'https://images.pexels.com/photos/6368833/pexels-photo-6368833.jpeg?auto=compress&cs=tinysrgb&w=600' 
        },
        { 
            title: 'Saindo das dívidas',
            text: 'Sabe aquele momento que parece que suas dívidas não tem fim? Não fique desesperado, com o organizamento financeiro correto você conseguirá sair delas.',
            image:  'https://www.tupi.fm/wp-content/uploads/Endividamento-do-brasileiro-em-2019-Blog-Consignet.png' 
        },
    ]

    function renderMoeda({ item }){
        return(
            <View style={ styles.areaCotacao }>     
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
            <View style={ styles.carouselItemContainerCentro }>     
                <Image 
                    source={{ uri: `${item.image}` }} 
                    style={ styles.imageCentro }
                />
                <Text style={ styles.title }>{ item.title }</Text>
                <Text style={ styles.text }>{ item.text }</Text>
            </View> 
        )
    }

    return(
        <View style={ styles.container }>        

            <View style={ styles.viewPrincipalCotacao }>
                <Carousel
                    data={carouselMoeda}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    renderItem={renderMoeda}
                    autoplay={true}
                    loop={true}
                    autoplayInterval={3000}
                    scrollAnimationDuration={3000}
                />
            </View>

            <View style={ styles.viewPrincipalImagem }>
                <Carousel
                    data={carouselImagem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    renderItem={renderItem}
                    autoplay={true}
                    loop={true}
                    autoplayInterval={5000}
                />
            </View>

            <View style={ styles.viewCentroImagem }>
                <Carousel
                    data={carouselImagemCentro}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    renderItem={renderItemCentro}
                    autoplay={true}
                    loop={true}
                    autoplayInterval={5000}
                    layout="stack"
                />
            </View>

            <View style={ styles.areaBtn }>
                <TouchableOpacity 
                    style={ styles.btn } 
                    onPress={ () => navigation.navigate('Objetivo') }
                >   
                    <View style={ styles.viewBtn }>
                        <Text style={ styles.textoBtn }>OBJETIVOS</Text>
                        <View style={ styles.icon }>
                            <AntDesign name="arrowright" size={30} color="black" /> 
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={ styles.btn } 
                    onPress={ () => navigation.navigate('Gasto') }
                >
                    <View style={ styles.viewBtn }>
                        <Text style={ styles.textoBtn }>GASTOS</Text>
                        <View style={ styles.icon }>
                            <AntDesign name="arrowright" size={30} color="black" /> 
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
        marginVertical: '5%',
        marginHorizontal: '3%',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#161F4E',
        backgroundColor: '#F7FFE5'
    },
    imageCentro : {
        width: '100%',
        height: 200,
        borderRadius: 10
    },
    viewCentroImagem : {
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 18,
        color: '#161F4E',
        fontWeight: '400',
        marginTop: 8
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