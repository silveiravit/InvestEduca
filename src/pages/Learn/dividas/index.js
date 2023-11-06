import React from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function Dividas(){

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
                        <Text style={ styles.titulo }>Como o trabalho de educação financeira pode evitar dívidas?</Text>

                        <Text style={{ textAlign: 'justify', fontSize: 20, fontWeight: '600', marginTop: 20}}>
                        Uma palavra que assombra muitos brasileiros é “dívida”. Para muitos, ela é justamente a principal razão para não começar a investir. Entretanto, a educação financeira pode ser o primeiro passo para transformar os juros em aliados. Sancionada no início de julho, a Lei do Superendividamento busca dar mais empoderamento aos consumidores através do conhecimento.
                        
                        Segundo dados do Serasa, a inadimplência afeta 61,4% dos brasileiros. Por conta da renda comprometida com dívidas, a construção de uma reserva de emergência é um desafio. Além dos inadimplentes, muitos brasileiros possuem dívidas altas, especialmente por conta do uso de cartão de crédito, financiamentos e empréstimos bancários. Para especialistas, quitar os débitos deve ser o passo inicial para quem deseja ver o dinheiro render.

                        Os “superendividados” são os consumidores impossibilitados de pagar a totalidade de suas dívidas sem comprometer a renda com alimentação e ensino básico dos dependentes. Segundo o novo texto da Lei do Superendividamento, as empresas que oferecem crédito e serviços financeiros devem dar mais transparência para evitar que o consumidor seja prejudicado.
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