import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

// Tema
import ThemeContext from '../../../contexts/ThemeContext'
import appTheme from '../../../themes/Themes'

export default function Investimento(){

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
                        <Text style={ [styles.titulo, appTheme[themeMode]] }>O que é investimento?</Text>

                        <Text style={[{ textAlign: 'justify', fontSize: 20, fontWeight: '600', marginTop: 20}, appTheme[themeMode]]}>
                        Entendemos por investimentos qualquer valor capaz de gerar um lucro, seja em um período de curto, médio ou longo prazo.
                        {'\n'}
                        {'\n'}
                        Muitas pessoas não investem por pensar que é algo muito complexo e que necessita de uma grande quantia de dinheiro para começar, mas isso não é verdade.
                        {'\n'}
                        {'\n'}
                        Há diferentes oportunidades capazes de render mais do que a poupança. Você pode começar investindo seu dinheiro em uma conta digital que renda 100% do CDI ou comprando um título no Tesouro Direto a partir de R$ 30,00, por exemplo.
                        {'\n'}
                        {'\n'}
                        No início, isso pode trazer retornos pequenos, mas se você persistir em estudar mais sobre o assunto e se aprofundar cada vez mais em entender o que são investimentos, colherá recompensas a longo prazo.
                        </Text>
                    </View>

                    <View style={ styles.areaEstudo1 }>
                        
                        <Text style={ [styles.tituloParagrafo1, { textAlign: 'center', fontSize: 25, marginVertical: 20}, appTheme[themeMode] ] }>Como começar a investir?</Text>
                        
                        <View style={ [styles.paragrafo, {borderLeftColor: themeMode === 'light' ? '#161F4E' : '#E9AB43', backgroundColor: themeMode === 'light' ? '#E9AB4333' : '#481298'} ] }>
                            <Text style={ [styles.tituloParagrafo1, {color: themeMode === 'light' ? '#000' : '#fff'}] }>1º Estabeleça os seus objetivos</Text>
                        </View>

                        <Text style={ [styles.paragrafo1, appTheme[themeMode]] }>
                        Não adianta investir sem um propósito definido. Nesse sentido, vale considerar fatores como quantia e tempo.
                        {'\n'} 
                        {'\n'}
                        Vamos nos aprofundar um pouco mais no que são investimentos de curto, médio e longo prazo:
                        </Text>

                        <View style={ [styles.paragrafo, {borderLeftColor: themeMode === 'light' ? '#161F4E' : '#E9AB43', backgroundColor: themeMode === 'light' ? '#E9AB4333' : '#481298'} ] }>
                            <Text style={ [styles.tituloParagrafo1, {color: themeMode === 'light' ? '#000' : '#fff'}] }>Curto prazo — Reserva emergencial</Text>
                        </View>

                        <Text style={ [styles.paragrafo1, appTheme[themeMode] ] }>
                        É indispensável contar com uma reserva para lidar com imprevistos. A reserva de emergência nada mais é do que um dinheiro guardado somente para situações não planejadas.
                        {'\n'}
                        {'\n'}
                        Quem se prepara para situações de emergência consegue sair das dificuldades com mais facilidade, pois já está preparado. Dessa forma, você não precisa interromper os estudos ou cancelar o convênio médico, por exemplo.
                        {'\n'}
                        {'\n'}
                        O objetivo é ter uma quantia referente ao total de seus gastos de três a seis meses. Quanto mais gastos financeiros você tiver, maior deve ser a sua reserva emergencial.
                        </Text>
                        
                        <View style={ [styles.paragrafo, {borderLeftColor: themeMode === 'light' ? '#161F4E' : '#E9AB43', backgroundColor: themeMode === 'light' ? '#E9AB4333' : '#481298'} ] }>
                            <Text style={ [styles.tituloParagrafo1, {color: themeMode === 'light' ? '#000' : '#fff'}] }>Médio prazo — Objetivos de vida</Text>
                        </View>

                        <Text style={ [styles.paragrafo1, appTheme[themeMode] ] }>
                        As metas de médio prazo. Elas variam de acordo com seu objetivo. Pode ser pagar uma pós-graduação, comprar um carro, fazer uma viagem com a família, comemorar aniversário, casamento, etc. São objetivos ou investimentos que podem complementar sua caminhada financeira e dar mais conforto.
                        </Text>

                        <View style={ [styles.paragrafo, {borderLeftColor: themeMode === 'light' ? '#161F4E' : '#E9AB43', backgroundColor: themeMode === 'light' ? '#E9AB4333' : '#481298'} ] }>
                            <Text style={ [styles.tituloParagrafo1, {color: themeMode === 'light' ? '#000' : '#fff'}] }>Longo prazo — Aposentadoria</Text>
                        </View>

                        <Text style={ [styles.paragrafo1, appTheme[themeMode], { borderBottomWidth: 2, borderBottomColor: themeMode === 'light' ? '#161F4E' : '#E9AB43', paddingBottom: 30} ] }>
                        A aposentadoria configura uma meta de longo prazo. O total pago pela Previdência Social pode ser insuficiente para ter uma vida financeira tranquila.
                        {'\n'}
                        {'\n'}
                        Logo, se você quer parar de trabalhar aos 65 anos, é preciso ter dinheiro para se manter por mais 20 ou 30 anos. Montar um patrimônio que garanta renda prolongada demanda muita disciplina, portanto, quanto antes começar, melhor.
                        </Text>

                        <View style={ [styles.paragrafo, { borderLeftColor: themeMode === 'light' ? '#161F4E' : '#E9AB43', backgroundColor: themeMode === 'light' ? '#E9AB4333' : '#481298'} ] }>
                            <Text style={ [styles.tituloParagrafo1, {color: themeMode === 'light' ? '#000' : '#fff'}] }>2º Determine a quantia ideal</Text>
                        </View>

                        <Text style={ [styles.paragrafo1, appTheme[themeMode], { borderBottomWidth: 2, borderBottomColor: themeMode === 'light' ? '#161F4E' : '#E9AB43', paddingBottom: 30}] }>
                        Tenha foco e comprometimento. Você deve guardar um valor específico do seu orçamento para investir. Esse percentual vai depender dos seus objetivos financeiros. O segredo é se envolver com a causa.
                        {'\n'}
                        {'\n'}
                        Por exemplo, quando receber seu dinheiro, separe uma parcela e invista em seguida. Não importa a quantia, com R$50,00, R$70,00 ou R$100,00 é possível começar.
                        </Text>

                        <View style={ [styles.paragrafo, {borderLeftColor: themeMode === 'light' ? '#161F4E' : '#E9AB43', backgroundColor: themeMode === 'light' ? '#E9AB4333' : '#481298'} ] }>
                            <Text style={ [styles.tituloParagrafo1, {color: themeMode === 'light' ? '#000' : '#fff'}] }>3º Conheça o seu perfil de investidor</Text>
                        </View>

                        <Text style={ [styles.paragrafo1, appTheme[themeMode]] }>
                        Tão importante quanto entender o que são investimentos é entender o seu perfil de investidor. Isso porque cada pessoa apresenta características, comportamentos e necessidades próprias. Quando relacionamos esse contexto com o universo dos investimentos, estamos falando da maneira como cada um lida com os riscos. Sendo assim, os perfis são classificados em três categorias:
                        </Text>

                        <View style={ [styles.paragrafo, {borderLeftColor: themeMode === 'light' ? '#161F4E' : '#E9AB43', backgroundColor: themeMode === 'light' ? '#E9AB4333' : '#481298'} ] }>
                            <Text style={ [styles.tituloParagrafo1, {color: themeMode === 'light' ? '#000' : '#fff'}] }>Conservador</Text>
                        </View>

                        <Text style={ [styles.paragrafo1, appTheme[themeMode] ] }>
                        Não abre mão da segurança, mesmo que isso leve a uma rentabilidade reduzida.
                        </Text>

                        <View style={ [styles.paragrafo, {borderLeftColor: themeMode === 'light' ? '#161F4E' : '#E9AB43', backgroundColor: themeMode === 'light' ? '#E9AB4333' : '#481298'} ] }>
                            <Text style={ [styles.tituloParagrafo1, {color: themeMode === 'light' ? '#000' : '#fff'}] }>Moderado</Text>
                        </View>

                        <Text style={ [styles.paragrafo1, appTheme[themeMode] ] }>
                        Costuma colocar parte do dinheiro em aplicações arriscadas, a fim de obter um rendimento maior. Porém, ainda prioriza a segurança para a maior parte da sua carteira.
                        </Text>

                        <View style={ [styles.paragrafo, {borderLeftColor: themeMode === 'light' ? '#161F4E' : '#E9AB43', backgroundColor: themeMode === 'light' ? '#E9AB4333' : '#5C20B6'} ] }>
                            <Text style={ [styles.tituloParagrafo1, {color: themeMode === 'light' ? '#000' : '#fff'}] }>Agressivo (ousado)</Text>
                        </View>

                        <Text style={ [styles.paragrafo1, appTheme[themeMode], { borderBottomWidth: 2, borderBottomColor: themeMode === 'light' ? '#161F4E' : '#E9AB43', paddingBottom: 30} ] }>
                        Valoriza a rentabilidade no longo prazo e compreende que as variações do processo fazem parte do fluxo normal do mercado.
                        </Text>

                        <View style={ [styles.paragrafo, {borderLeftColor: themeMode === 'light' ? '#161F4E' : '#E9AB43', backgroundColor: themeMode === 'light' ? '#E9AB4333' : '#481298'} ] }>
                            <Text style={ [styles.tituloParagrafo1, {color: themeMode === 'light' ? '#000' : '#fff'}] }>4º Avalie os tipos de investimentos</Text>
                        </View>

                        <Text style={ [styles.paragrafo1, appTheme[themeMode]] }>
                        Na hora de buscar o que são investimentos, muitas pessoas encontram os termos “renda fixa” e “renda variável”. Para obter sucesso nessa empreitada, é importante variar em suas economias. Isso porque os eventos diários impactam as finanças de diferentes maneiras.
                        {'\n'}
                        {'\n'}
                        Logo, diversificar onde você guarda ou investe o seu dinheiro é uma forma prudente de diminuir os riscos e elevar a probabilidade de ganhos.
                        {'\n'}
                        {'\n'}
                        A renda fixa representa títulos públicos ou privados, que funcionam como um “empréstimo” do seu dinheiro para uma determinada instituição. Conforme o próprio nome já diz, a quantia que este investimento irá render para você já está fixada.
                        </Text>
                    </View>

                    <View style={ styles.areaEstudo1 }>
                        <Text style={ [styles.titulo, appTheme[themeMode]] }>Referências</Text>

                        <Text style={[{ textAlign: 'justify', fontSize: 18, fontWeight: '400', marginTop: 10}, appTheme[themeMode]]}>
                        https://www.bv.com.br/bv-inspira/orientacao-financeira/comecar-a-investir
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