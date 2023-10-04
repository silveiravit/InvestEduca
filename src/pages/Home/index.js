import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, Dimensions} from "react-native";
import Conversor from "../../../services/conversor";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
//import Carousel, { Pagination }  from 'react-native-snap-carousel'
import { SliderBox } from "react-native-image-slider-box";

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH * 0.95

export default function Home(){

    const navigation = useNavigation()

    const carousel = [
        'https://investidorsardinha.r7.com/wp-content/uploads/2020/10/o-que-e-educacao-financeira-importancia-e-10-dicas-para-alcancar-1200x900.png',

        'https://andrebona.com.br/wp-content/uploads/2019/04/financial-3268440_1920.jpg',
        
        'https://www.fundsexplorer.com.br/artigos/wp-content/uploads/2022/03/Imagem21.png',
        
        'https://somosleve.com.br/wp-content/uploads/2021/10/28_post.png'
        
    ]

    function renderItem({ item }){
        return(
            <View style={ styles.containerCarousel }>
                <Image 
                    source={{ uri: `${item.Image}`}}
                    style={ styles.imgCarousel }
                />
            </View>
        )
    }


    const [index, setIndex] = React.useState(0)
    //const isCarousel = React.useRef(null)

    return(
        <View style={ styles.container }>
            
            <StatusBar 
                barStyle={'light-content'}
            />

            <View style={ styles.areaCotacao }>
                <Conversor moedaA="USD" moedaB="BRL" />
            </View>  

            <View style={ styles.sliderImg }> 
                {/* <Carousel 
                    layout={'default'}
                    data={carousel}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    renderItem={renderItem}
                    autoplay={true}
                    //ref={isCarousel}
                    onSnapToItem={(index) => setIndex(index)}
                    //useScrollView={true}
                    loop={true}
                />
                <Pagination
                    dotsLength={carousel.length}
                    activeDotIndex={index}
                    //carouselRef={isCarousel}
                    dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.92)'
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                /> */}

                <SliderBox 
                    images={carousel} 
                    autoplay={true}
                    autoplayinterval={1000}
                    dotColor='#E9AB43'
                    circleLoop={true}
                />

            </View>
            
            <TouchableOpacity 
                style={ styles.btn } 
                onPress={ () => navigation.navigate('Money') }
            >   
                <View style={ styles.view }>

                    <Text style={ styles.textoBtn }>Objetivos </Text>

                    <View style={ styles.icon }>
                        <AntDesign name="arrowright" size={30} color="black" /> 
                    </View>

                </View>
            </TouchableOpacity>

            <TouchableOpacity 
                style={ styles.btn } 
                onPress={ () => navigation.navigate('Money') }
            >
                <View style={ styles.view }>

                    <Text style={ styles.textoBtn }>Metas</Text>

                    <View style={ styles.icon }>
                        <AntDesign name="arrowright" size={30} color="black" /> 
                    </View>

                </View>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    areaCotacao: {
        //flex:1,
        marginTop: 20,
        justifyContent: 'flex-start'
    },
    cotacao: {
        fontSize: 30
    },
    btn: {
        backgroundColor: '#161F4E',
        margin: 8,
        borderRadius: 20,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },  
    textoBtn: {
        color: '#E9AB43',
        fontSize: 30,
        fontWeight: 'bold',
    },
    icon: {
        backgroundColor: '#E9AB43',
        justifyContent: 'center',
        borderRadius: 30,
        padding: 5
    },
    sliderImg: {
        flex: 1,
        paddingTop: 20
    },
    containerCarousel: {
        width: ITEM_WIDTH,
    },
    imgCarousel: {
        width: ITEM_WIDTH,
        height: 200,
        borderRadius: 20
    }
})