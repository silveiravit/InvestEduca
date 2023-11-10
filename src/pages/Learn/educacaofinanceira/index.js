import React from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function EducaFinan(){

    return(
        <View style={ styles.container }>
            
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
                        <Text style={ styles.titulo }>Economizando para construir um bom controle financeiro</Text>
                    </View>

                    <View style={{ borderLeftWidth: 10, borderLeftColor: '#161F4E', backgroundColor: '#E9AB4333', marginTop: 20, padding: 15}}>
                        <Text style={{ textAlign: 'center', fontSize: 23, fontWeight: '600'}}>Conheça sua realidade financeira</Text>
                    </View>

                    <View style={ [styles.areaEstudo1, { borderTopWidth: 1, borderBottomWidth: 1 }] }>
                        <Text style={{ textAlign: 'left', fontSize: 20, fontWeight: '600', marginVertical: 20}}>
                            Ciência da realidade financeira é o ponto de partida para economizar de forma efetiva.
                            É o passo determinante para estabelecer metas. Para tal, é preciso responder às seguintes perguntas:
                        </Text>
                    </View>

                    <View style={ styles.areaEstudo1 }>
                        <Text style={ styles.titulo }>O que é educação financeira?</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 20, fontWeight: '600', marginTop: 20}}>
                            Educação financeira é todo o conhecimento relacionado ao dinheiro e como ele funciona.
                            Ou seja, é o processo que ajuda a compreender melhor os produtos e serviços financeiros, assim, você se torna capaz de fazer melhores escolhas.
                            {'\n'}
                            {'\n'}
                            Dessa forma, ter conhecimento sobre temas como: juros, poupança, Selic, inflação e outros pode ajudá-lo a tomar decisões financeiras de forma consciente e inteligente.
                            De forma prática, quanto mais educado(a) financeiramente você for, mais consciente e confiante ficará para tomar decisões de como utilizar o seu dinheiro.
                            {'\n'}
                            {'\n'}
                            Além disso, ao se educar financeiramente, você conseguirá melhorar o processo de como cortar gastos, aumentar receitas e investir valores poupados periodicamente para gerar acúmulo de riqueza.
                            {'\n'}
                            {'\n'}
                            Nesse sentido, fica muito mais fácil fazer o seu dinheiro trabalhar para você! Veja abaixo o que fazer para ter educação financeira.
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
        borderTopColor: '#E9AB4333',
        borderBottomColor: '#E9AB4333'
    },
})