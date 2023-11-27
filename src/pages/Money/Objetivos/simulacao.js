import react, { useContext, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { differenceInDays, format } from 'date-fns'
// Tema
import ThemeContext from '../../../contexts/ThemeContext'
import appTheme from '../../../themes/Themes'
import { useState } from 'react';

export default function Simular({ setVisible, data, dataPrevista, valorMensal }){

    // Context de tema
    const [themeMode] = useContext(ThemeContext)

    // Objetos de imagens
    const imagem = {
        imovel: require('../../../images/casas.png'),
        carro: require('../../../images/carro.png'),
        moto: require('../../../images/moto.png'),
        viagem: require('../../../images/viagem.png')
    }
    
    // State para renderizar as imagens
    const [img, setImg] = useState()

    // State do valor mensal
    const [valor] = useState(valorMensal)

    // State das taxas
    const [taxa, setTaxa] = useState('')

    // State data

    
    useEffect(() => {

        if( data === 'Imóvel' ){
            setImg(imagem.imovel)
            setTaxa('Taxa média para imóvel: 8,5% ao ano.')
        } else if( data === 'Carro' ){
            setImg(imagem.carro)
            setTaxa('Taxa média para carro: 2,03% ao mês.')
        } else if( data === 'Moto' ){
            setImg(imagem.moto)
            setTaxa('Taxa média para moto: 1,5% ao mês.')
        } else {
            setImg(imagem.viagem)
        }
        
    }, [])

    return(
        <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center'}, appTheme[themeMode]]}>
            <View style={ styles.view }>

                <View style={ styles.areaText }>
                    <Text style={ [{ color: '#000', fontSize: 25, textAlign: 'center', marginHorizontal: 20}, appTheme[themeMode]] }>Objetivo desejado: { data }</Text>
                </View>

                <View style={{ justifyContent: 'flex-start', alignItems: 'center', marginVertical: 20 }}>
                    <Image 
                        source={ img }
                        style={ styles.img }
                    />
                </View>

                <View style={ styles.areaText }>
                    <Text style={ [styles.text, appTheme[themeMode]] }>{ taxa }</Text>
                </View>

                <View style={ styles.areaText }>
                    <Text style={ [styles.text, appTheme[themeMode]] }>Ao final da data prevista de { dataPrevista }, o valor que você terá é de R$ { valor }</Text>
                </View>

            </View>

            <TouchableOpacity onPress={ () => setVisible(false) } style={ [styles.btn, { backgroundColor: themeMode === 'light' ? '#161F4E' : '#5C20B6' }] }>
                <Text style={ styles.textBtn }>VOLTAR</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center'
    },
    btn: {
        backgroundColor: '#161F4E',
        width: '90%',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        marginBottom: 50
    },
    textBtn: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600'
    },
    img: {
        width: 250,
        height: 200,
        borderRadius: 500
    },
    text: {
        fontSize: 25,
        fontFamily: '',
        textAlign: 'justify',
        marginHorizontal: 20
    },
    areaText: {
        marginVertical: 10,
        
    }
})