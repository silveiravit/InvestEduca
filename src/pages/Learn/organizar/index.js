import React from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function Organizar(){

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
                        <Text style={ styles.titulo }>Dicas para organizar suas finanças?</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 20, fontWeight: '600', marginTop: 20}}>
                        Organizar as finanças pessoais é um grande desafio para várias pessoas, especialmente para trabalha com CNPJ e precisa cuidar também das finanças da empresa.

                        No entanto, é uma tarefa muito importante, já que a falta de planejamento pode gerar sérios problemas, como aumento de dívidas, gastos desnecessários que comprometem a renda, entre outros.

                        Para evitar que isso aconteça, é preciso investir em um controle financeiro eficaz do seu dinheiro. Isso contribui para que você tenha que se preocupar menos no final do mês, além de outras vantagens, como a possibilidade de investir e multiplicar seu capital, fazer uma viagem, trocar de carro etc.
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