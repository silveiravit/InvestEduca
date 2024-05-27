import react, { useState, useContext, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { differenceInCalendarMonths } from 'date-fns'

// Tema
import { AuthContext } from '../../../contexts/auth';
import appTheme from '../../../themes/Themes'

export default function Simular({ setVisible, data, dataPrevista, valorMensal, dataFormat, valorObjetivo }){

    // Context de tema
    const { themeMode } = useContext(AuthContext)

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

    // State valor objetivo
    const [valorObj] = useState(valorObjetivo)

    // State das taxas
    const [taxa, setTaxa] = useState('')

    // State de sugestão
    const [sugestao, setSugestao] = useState('')

    // State data
    let data1 = new Date(dataFormat)
    let data2 = new Date()
    let diferencaDias = differenceInCalendarMonths(data1, data2)
    let total = diferencaDias * valor

    // Objetivos
    let casa = valorObj * 20/100
    let veiculo = valorObj * 10/100
    
    useEffect(() => {

        if( data === 'Imóvel' ){
            setImg(imagem.imovel)
            setTaxa('Taxa média para imóvel: 8,5% ao ano.')

            if( total >= casa && total < valorObjetivo ){
                setSugestao('Valor investido é superior a 20% do valor do imóvel. Você pode financiar um imóvel.')
                
            } else if( total >= valorObjetivo){
                setSugestao('Parabéns, você pode comprar o seu imóvel tranquilamente.')

            }else {
                setSugestao('Valor investido é inferior a 20% do valor do imóvel. Aguarde mais um pouco.')
            }

        } else if( data === 'Carro' ){
            setImg(imagem.carro)
            setTaxa('Taxa média para carro: 2,03% ao mês.')

            if( total >= veiculo && total < valorObjetivo ){
                setSugestao('Valor investido é superior a 10% do valor do carro. Você pode financiar um carro.')
                
            } else if( total >= valorObjetivo){
                setSugestao('Parabéns, você pode comprar o seu carro tranquilamente.')

            }else {
                setSugestao('Valor investido é inferior a 10% do valor do carro. Aguarde mais um pouco.')
            }

        } else if( data === 'Moto' ){
            setImg(imagem.moto)
            setTaxa('Taxa média para moto: 1,5% ao mês.')

            if( total >= veiculo && total < valorObjetivo ){
                setSugestao('Valor investido é superior a 10% do valor do moto. Você pode financiar um moto.')
                
            } else if( total >= valorObjetivo){
                setSugestao('Parabéns, você pode comprar a sua moto tranquilamente.')

            }else {
                setSugestao('Valor investido é inferior a 10% do valor do moto. Aguarde mais um pouco.')
            }

        } else if( data === 'Viagem' ){
            setImg(imagem.viagem)

            if( valor < valorObjetivo ){
                setSugestao('Continue investindo e pague a viagem à vista.')
            } else {
                setSugestao('Parabéns você poderá fazer uma viagem tranquilamente.')
            }
        }
        
    }, [])

    return(
        <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center'}, appTheme[themeMode]]}>
            <View style={ styles.view }>

                <View style={ styles.areaText }>
                    <Text style={ [{ color: '#000', fontSize: 25, textAlign: 'center', marginHorizontal: 20}, appTheme[themeMode]] }>Valor do Objetivo: { Number(valorObj).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }</Text>
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
                    <Text style={ [styles.text, appTheme[themeMode]] }>Ao final da data prevista de { dataPrevista }, o valor que você terá é de { total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }.</Text>
                </View>

                <View style={ styles.areaText }>
                    { total > valorObj ? '' :
                        <Text style={ [styles.text, appTheme[themeMode], { textAlign: 'center' }] }>Sugestão:</Text>
                    }
                
                    <Text style={ [styles.text, appTheme[themeMode]] }>{ sugestao }</Text>
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