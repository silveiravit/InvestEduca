import react, { useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

// Tema
import ThemeContext from '../../../contexts/ThemeContext'
import appTheme from '../../../themes/Themes'

export default function Simular({ setVisible, data, valorMensal, renda, dataPrevista }){

    const [themeMode] = useContext(ThemeContext)
    const imagem = {
        casa: require('../../../images/casas.png'),
        carro: require('../../../images/carro.png'),
        moto: require('../../../images/moto.png'),
        viagem: require('../../../images/viagem.png')
    }

    return(
        <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center'}, appTheme[themeMode]]}>
            <View style={ styles.view }>

                <View style={{ alignItems: 'center', marginVertical: 20 }}>
                    <Image 
                        source={ imagem.carro }
                        style={ styles.img }
                    />
                </View>

                <View style={ styles.areaText }>
                    <Text style={ [styles.text, appTheme[themeMode]] }>O seu objetivo é: { data }</Text>
                </View>

                <View style={ styles.areaText }>
                    <Text style={ [styles.text, appTheme[themeMode]] }>Investimento: R$ { valorMensal }</Text>
                </View>

                <View style={ styles.areaText }>
                    <Text style={ [styles.text, appTheme[themeMode]] }>Data prevista: { dataPrevista }</Text>
                </View>

                <View style={ styles.areaText }>
                    <Text style={ [styles.text, appTheme[themeMode]] }>Renda mensal R$: { renda }</Text>
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
        width: 350,
        height: 300,
        borderRadius: 500
    },
    text: {
        fontSize: 25,
        fontFamily: '',
        textAlign: 'center'
    },
    areaText: {
        marginVertical: 10
    }
})