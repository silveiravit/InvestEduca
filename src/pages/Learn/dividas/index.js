import React, { useContext } from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

// Tema
import ThemeContext from '../../../contexts/ThemeContext'
import appTheme from '../../../themes/Themes'

export default function Dividas(){

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

                    <View style={{ borderLeftWidth: 10, borderLeftColor: themeMode === 'light' ? '#161F4E' : '#E9AB43', backgroundColor: themeMode === 'light' ? '#E9AB4333' : '#481298' , marginTop: 20, padding: 15}}>
                        <Text style={{ textAlign: 'center', fontSize: 23, fontWeight: '600', color: themeMode === 'light' ? '#000' : '#fff'}}>Conheça sua realidade financeira</Text>
                    </View>

                    <View style={ styles.areaEstudo1 }>
                        <Text style={[{ textAlign: 'center', fontSize: 20, fontWeight: '600', marginVertical: 20 }, appTheme[themeMode]]}>
                            Ciência da realidade financeira é o ponto de partida para economizar de forma efetiva.
                            É o passo determinante para estabelecer metas.
                        </Text>
                    </View>

                    <View style={ styles.areaEstudo1 }>
                        <Text style={ [styles.titulo, appTheme[themeMode]] }>Como o trabalho de educação financeira pode evitar dívidas?</Text>

                        <Text style={ [styles.paragrafo1, appTheme[themeMode]] }>
                        Uma palavra que assombra muitos brasileiros é “dívida”. Para muitos, ela é justamente a principal razão para não começar a investir. Entretanto, a educação financeira pode ser o primeiro passo para transformar os juros em aliados. Sancionada no início de julho, a Lei do Superendividamento busca dar mais empoderamento aos consumidores através do conhecimento.
                        {'\n'}
                        {'\n'}
                        Segundo dados do Serasa, a inadimplência afeta 61,4% dos brasileiros. Por conta da renda comprometida com dívidas, a construção de uma reserva de emergência é um desafio. Além dos inadimplentes, muitos brasileiros possuem dívidas altas, especialmente por conta do uso de cartão de crédito, financiamentos e empréstimos bancários. Para especialistas, quitar os débitos deve ser o passo inicial para quem deseja ver o dinheiro render.
                        {'\n'}
                        {'\n'}
                        Os “superendividados” são os consumidores impossibilitados de pagar a totalidade de suas dívidas sem comprometer a renda com alimentação e ensino básico dos dependentes. Segundo o novo texto da Lei do Superendividamento, as empresas que oferecem crédito e serviços financeiros devem dar mais transparência para evitar que o consumidor seja prejudicado.
                        </Text>

                    </View>

                    <View style={ styles.areaEstudo1 }>
                        <Text style={ [styles.titulo, appTheme[themeMode]] }>O que é grau de endividamento?</Text>

                        <Text style={ [styles.paragrafo1, appTheme[themeMode]] }>
                        Grau de endividamento pessoal, ou índice de endividamento, é uma medida que ajuda a avaliar o comprometimento da renda doméstica para pagamento de dívidas. Quanto mais alto for esse índice, maiores as chances de inadimplência.
                        {'\n'}
                        {'\n'}
                        Ou seja, o endividamento por si (mesmo que as contas estejam em dia) já abre uma porta para a inadimplência. Por isso o excesso de dívidas pode ser uma ameaça à tranquilidade financeira.
                        </Text>

                    </View>

                    <View style={ styles.areaEstudo1 }>
                        <Text style={ [styles.titulo, appTheme[themeMode]] }>Como calcular o grau de endividamento?</Text>

                        <Text style={ [styles.paragrafo1, appTheme[themeMode]] }>
                        Para calcular o grau de endividamento, é preciso somar todas as dívidas mensais e saber exatamente quanto dinheiro entra por mês. Considere como dívidas as prestações do carro, da casa, parcelas de empréstimo, crediários de loja e faturas de cartão de crédito.
                        {'\n'}
                        {'\n'}
                        Com os dois valores em mãos, basta dividir o total das dívidas pelo total dos ganhos e depois multiplicar por 100. O resultado é a porcentagem do seu grau de endividamento.
                        {'\n'}
                        {'\n'}
                        Se o resultado for igual ou inferior a 30%, parabéns! Essa é a taxa considerada ideal, na qual as dívidas podem ser administradas com tranquilidade. Se for entre 30% e 35%, é preciso cautela. Caso esse índice esteja entre 35% e 40%, reveja seu orçamento e mude seus hábitos para não ficar inadimplente. Um grau acima de 40% é um indicador de endividamento grave, já que compromete quase metade da renda.
                        </Text>

                    </View>

                    <View style={ styles.areaEstudo1 }>
                        
                        <Text style={ [styles.tituloParagrafo1, { textAlign: 'center', fontSize: 25, marginVertical: 20}, appTheme[themeMode] ] }>Como lidar com as dívidas em 4 passos</Text>
                        
                        <View style={ [styles.paragrafo, {borderLeftColor: themeMode === 'light' ? '#161F4E' : '#E9AB43', backgroundColor: themeMode === 'light' ? '#E9AB4333' : '#481298'} ] }>
                            <Text style={ [styles.tituloParagrafo1, {color: themeMode === 'light' ? '#000' : '#fff'}] }>1º Faça um planejamento financeiro</Text>
                        </View>

                        <Text style={ [styles.paragrafo1, appTheme[themeMode]] }>
                        Esse primeiro passo é indispensável para quem precisa assumir o controle da vida financeira. Entenda exatamente quais são as despesas fixas, as dívidas que ainda precisa pagar e quanto dinheiro está disponível para isso por mês. A partir desse panorama, será possível planejar prioridades. 
                        </Text>

                        <View style={ [styles.paragrafo, {borderLeftColor: themeMode === 'light' ? '#161F4E' : '#E9AB43', backgroundColor: themeMode === 'light' ? '#E9AB4333' : '#481298'} ] }>
                            <Text style={ [styles.tituloParagrafo1, {color: themeMode === 'light' ? '#000' : '#fff'}] }>2º Não ultrapasse 30% de grau de endividamento</Text>
                        </View>

                        <Text style={ [styles.paragrafo1, appTheme[themeMode]] }>
                        Se hoje a renda tiver um comprometimento mensal maior de 30%, reveja os gastos e avalie o que pode ser feito para mudar esse índice. Por exemplo, compre roupas novas só quando tiver dinheiro à vista ou diminua o uso de aplicativos que cobram o valor da compra no cartão de crédito.
                        </Text>

                        <View style={ [styles.paragrafo, {borderLeftColor: themeMode === 'light' ? '#161F4E' : '#E9AB43', backgroundColor: themeMode === 'light' ? '#E9AB4333' : '#481298'} ] }>
                            <Text style={ [styles.tituloParagrafo1, {color: themeMode === 'light' ? '#000' : '#fff'}] }>3º Diminua os gastos do mês</Text>
                        </View>

                        <Text style={ [styles.paragrafo1, appTheme[themeMode]] }>
                        Se a temporada é de dívidas para pagar, equilibre as contas economizando no que for possível. Diminuindo um pouco cada custo, é possível alcançar uma economia considerável em casa. Vale olhar para todos os hábitos: as compras no mercado, o uso de energia, o gasto com delivery e até as assinaturas de streaming.


                        </Text>

                        <View style={ [styles.paragrafo, {borderLeftColor: themeMode === 'light' ? '#161F4E' : '#E9AB43', backgroundColor: themeMode === 'light' ? '#E9AB4333' : '#481298'} ] }>
                            <Text style={ [styles.tituloParagrafo1, {color: themeMode === 'light' ? '#000' : '#fff'}] }>4º Renegocie as dívidas</Text>
                        </View>

                        <Text style={ [styles.paragrafo1, appTheme[themeMode]] }>
                        Caso esteja inadimplente, dê prioridade para resolver a situação. Estar negativado pode trazer consequências como dificuldade de acesso a crédito. Muitas empresas cobram juros maiores no crédito para quem está negativado. Além disso, quanto mais tempo a dívida vencida levar para ser quitada, maiores serão os juros acumulados.
                        </Text>
                    </View>

                    <View style={ styles.areaEstudo1 }>
                        <Text style={ [styles.titulo, appTheme[themeMode]] }>Referências</Text>

                        <Text style={[{ textAlign: 'justify', fontSize: 18, fontWeight: '400', marginTop: 10}, appTheme[themeMode]]}>
                            https://einvestidor.estadao.com.br/educacao-financeira/como-educacao-financeira-pode-evitar-dividas/
                            {'\n'}
                            {'\n'}
                            https://www.serasa.com.br/limpa-nome-online/blog/endividamento-como-saber-se-faco-parte-da-estatistica/
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
    paragrafo: {
        borderLeftWidth: 10, 
        borderLeftColor: '#161F4E', 
        backgroundColor: '#E9AB4333', 
        marginTop: 20, 
        padding: 15
    },
    paragrafo1: {
        textAlign: 'justify', 
        fontSize: 20, 
        fontWeight: '600', 
        marginTop: 20,
    },
    tituloParagrafo1: {
        textAlign: 'left', 
        fontSize: 20, 
        fontWeight: '600'
    }
})