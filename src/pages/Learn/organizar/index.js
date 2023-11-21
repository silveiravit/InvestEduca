import React, { useContext } from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

// Tema
import ThemeContext from '../../../contexts/ThemeContext'
import appTheme from '../../../themes/Themes'

export default function Organizar(){

    const [themeMode] = useContext(ThemeContext)

    return(
        <View style={ [styles.container, appTheme[themeMode]] }>
            
            <View style={ styles.areaTitulo }>
                <Text style={ styles.text }>Invest</Text>
                <Text style={ styles.text1 }>Educa</Text>
            </View>
            
            <View style={ styles.areaEstudo }>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                        <FontAwesome name="circle" size={15} color="#E9AB43" />
                        <Text style={ [styles.titulo, appTheme[themeMode]] }>Economizando para construir um bom controle financeiro</Text>
                    </View>

                    <View style={{ borderLeftWidth: 10, borderLeftColor: themeMode === 'light' ? '#161F4E' : '#E9AB43', backgroundColor: themeMode === 'light' ? '#E9AB4333' : '#5C20B6' , marginTop: 20, padding: 15}}>
                        <Text style={{ textAlign: 'center', fontSize: 23, fontWeight: '600', color: themeMode === 'light' ? '#000' : '#fff'}}>Conheça sua realidade financeira</Text>
                    </View>

                    <View style={ styles.areaEstudo1 }>
                        <Text style={[{ textAlign: 'center', fontSize: 20, fontWeight: '600', marginVertical: 20 }, appTheme[themeMode]]}>
                            Ciência da realidade financeira é o ponto de partida para economizar de forma efetiva.
                            É o passo determinante para estabelecer metas.
                        </Text>
                    </View>

                    <View style={ styles.areaEstudo1 }>
                        <Text style={ [styles.titulo, appTheme[themeMode]] }>Dicas para organizar suas finanças?</Text>

                        <Text style={[{ textAlign: 'justify', fontSize: 20, fontWeight: '600', marginTop: 20}, appTheme[themeMode]]}>
                        Organizar as finanças pessoais é um grande desafio para várias pessoas, especialmente para trabalha com CNPJ e precisa cuidar também das finanças da empresa.
                        {'\n'}
                        {'\n'}
                        No entanto, é uma tarefa muito importante, já que a falta de planejamento pode gerar sérios problemas, como aumento de dívidas, gastos desnecessários que comprometem a renda, entre outros.
                        {'\n'}
                        {'\n'}
                        Para evitar que isso aconteça, é preciso investir em um controle financeiro eficaz do seu dinheiro. Isso contribui para que você tenha que se preocupar menos no final do mês, além de outras vantagens, como a possibilidade de investir e multiplicar seu capital, fazer uma viagem, trocar de carro etc.
                        </Text>
                    </View>

                    <View style={ styles.areaEstudo1 }>
                        <Text style={ [styles.titulo, appTheme[themeMode]] }>Referências</Text>

                        <Text style={[{ textAlign: 'justify', fontSize: 18, fontWeight: '400', marginTop: 10}, appTheme[themeMode]]}>
                        https://www.contabilizei.com.br/contabilidade-online/9-dicas-para-organizar-suas-financas-pessoais/
                        </Text>
                    </View>
                    
                </ScrollView>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    areaTitulo: {
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: '#E9AB43',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderBottomColor: '#000',
        borderBottomWidth: 1
    },
    text: {
        fontSize: 40,
        color: '#fff',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    text1: {
        fontSize: 40,
        color: '#161F4E',
        marginBottom: 10,
        fontWeight: 'bold'
    },
    areaEstudo: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    titulo: {
        fontSize: 23,
        textAlign: 'left',
        fontWeight: '600'
    },
    areaEstudo1: {
        marginVertical: 10,
        padding: 10,
        borderTopColor: '#E9AB43',
        borderTopWidth: 2
    },
})