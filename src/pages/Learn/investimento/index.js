import React from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function Investimento(){

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
                        <Text style={ styles.titulo }>O que é investimento?</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 20, fontWeight: '600', marginTop: 20}}>
                        Entendemos por investimentos qualquer valor capaz de gerar um lucro, seja em um período de curto, médio ou longo prazo.

                        Muitas pessoas não investem por pensar que é algo muito complexo e que necessita de uma grande quantia de dinheiro para começar, mas isso não é verdade.

                        Há diferentes oportunidades capazes de render mais do que a poupança. Você pode começar investindo seu dinheiro em uma conta digital que renda 100% do CDI ou comprando um título no Tesouro Direto a partir de R$ 30,00, por exemplo.

                        No início, isso pode trazer retornos pequenos, mas se você persistir em estudar mais sobre o assunto e se aprofundar cada vez mais em entender o que são investimentos, colherá recompensas a longo prazo.
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