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
                        <Text style={ [styles.titulo, appTheme[themeMode]] }>Organização financeira</Text>

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
                        
                        <Text style={ [styles.tituloParagrafo1, { textAlign: 'center', fontSize: 25, marginVertical: 20}, appTheme[themeMode] ] }>9 dicas simples para ajudar você a organizar as finanças pessoais:</Text>
                        
                        <View style={ [styles.paragrafo, {borderLeftColor: themeMode === 'light' ? '#161F4E' : '#E9AB43', backgroundColor: themeMode === 'light' ? '#E9AB4333' : '#481298'} ] }>
                            <Text style={ [styles.tituloParagrafo1, {color: themeMode === 'light' ? '#000' : '#fff'}] }>1º Faça um orçamento</Text>
                        </View>

                        <Text style={ [styles.paragrafo1, appTheme[themeMode]] }>
                        Elabore uma lista com todos os seus custos fixos, como água, luz, telefone, aluguel etc. Depois calcule qual é a quantia média de todas essas despesas no mês. O valor encontrado é o seu custo de vida.
                        {'\n'}
                        {'\n'}
                        É necessário ter claro em mente que esse montante já compromete uma parte da sua renda todo mês e, por isso, é preciso acompanhar sempre suas futuras despesas para garantir que tudo esteja conforme o planejado.
                        {'\n'}
                        {'\n'}
                        O valor que sobrar é o que você tem disponível para aplicar em custos variáveis, fazer investimentos ou criar uma reserva financeira.
                        {'\n'}
                        </Text>

                        <View style={ [styles.paragrafo, {borderLeftColor: themeMode === 'light' ? '#161F4E' : '#E9AB43', backgroundColor: themeMode === 'light' ? '#E9AB4333' : '#481298'} ] }>
                            <Text style={ [styles.tituloParagrafo1, {color: themeMode === 'light' ? '#000' : '#fff'}] }>2º Estabeleça metas para economizar</Text>
                        </View>

                        <Text style={ [styles.paragrafo1, appTheme[themeMode]] }>
                        A economia não pode ser feita somente com o dinheiro que sobrou no final do mês. Ela deve ser um objetivo, pois assim você não só monitora suas despesas como também passa a ter uma projeção financeira.
                        {'\n'}
                        {'\n'}
                        Para isso, você pode determinar um valor mensal para reservar e, ao receber o salário, separar imediatamente essa quantia em um lugar diferente da conta que você usa para os gastos diários.
                        {'\n'}
                        </Text>

                        <View style={ [styles.paragrafo, {borderLeftColor: themeMode === 'light' ? '#161F4E' : '#E9AB43', backgroundColor: themeMode === 'light' ? '#E9AB4333' : '#481298'} ] }>
                            <Text style={ [styles.tituloParagrafo1, {color: themeMode === 'light' ? '#000' : '#fff'}] }>3º Restrinja seus gastos do dia a dia</Text>
                        </View>

                        <Text style={ [styles.paragrafo1, appTheme[themeMode]] }>
                        Da mesma forma que você deve estipular metas para economizar, uma boa ideia é definir metas para os gastos, estabelecendo um limite máximo por mês que pode ser empregado em cada tipo de despesa. Você pode fazer essa divisão por categorias, por exemplo:
                        {'\n'}
                        {'\n'}
                        15% com supermercado;
                        10% com lazer;
                        5% com vestuário e demais acessórios.
                        {'\n'}
                        {'\n'}
                        Isso não significa que você deve gastar esse valor todo mês, mas sim que é o máximo que pode investir em cada modalidade. Esse é um grande avanço no seu processo para organizar as finanças pessoais.
                        {'\n'}
                        </Text>

                        <View style={ [styles.paragrafo, {borderLeftColor: themeMode === 'light' ? '#161F4E' : '#E9AB43', backgroundColor: themeMode === 'light' ? '#E9AB4333' : '#481298'} ] }>
                            <Text style={ [styles.tituloParagrafo1, {color: themeMode === 'light' ? '#000' : '#fff'}] }>4º Evite gastos desnecessários</Text>
                        </View>

                        <Text style={ [styles.paragrafo1, appTheme[themeMode]] }>
                        Quando entende para onde sua renda está indo, fica mais fácil avaliar o que é importante e o que é dispensável em seu orçamento pessoal. Dessa forma, você consegue evitar o comprometimento do seu salário com despesas que não pode pagar.
                        {'\n'}
                        {'\n'}
                        Quando for comprar algo, pergunte para si mesmo se tem condições de pagar e se realmente aquilo é necessário. Às vezes a vontade fala mais alto, mas é preciso se controlar, já que é melhor não ter aquilo do que se endividar.
                        {'\n'}
                        {'\n'}
                        Caso tenha mais de uma prioridade, porém só possa arcar com uma delas, dê preferência a mais essencial. Em alguns momentos é necessário ponderar algumas coisas.
                        {'\n'}
                        {'\n'}
                        Que tal você deixar de gastar em coisas supérfluas para poder investir, guardar para ter uma aposentadoria mais tranquila ou economizar para conquistar algo que deseja muito? Isso pode ser bem interessante!
                        {'\n'}
                        </Text>

                        <View style={ [styles.paragrafo, {borderLeftColor: themeMode === 'light' ? '#161F4E' : '#E9AB43', backgroundColor: themeMode === 'light' ? '#E9AB4333' : '#481298'} ] }>
                            <Text style={ [styles.tituloParagrafo1, {color: themeMode === 'light' ? '#000' : '#fff'}] }>5º  Fique longe das dívidas</Text>
                        </View>

                        <Text style={ [styles.paragrafo1, appTheme[themeMode]] }>
                        Caso você não tenha dívidas, já está indo por um bom caminho em relação ao controle das finanças pessoais. Contudo, caso tenha, esse é o primeiro problema que deve solucionar para se organizar financeiramente.
                        {'\n'}
                        {'\n'}
                        Contas em atraso acarretam outros custos, já que taxas e juros são cobrados e tiram a chance de você economizar e se controlar. Nessas situações, todo o dinheiro que entra é gasto com pagamentos das contas, e o objetivo principal passa a ser quitar a dívida. 
                        {'\n'}
                        {'\n'}
                        Como forma de resolver esse problema, você pode tentar renegociar ou parcelar a dívida, e ficar livre dessa “pedra” no seu projeto de organização financeira.
                        {'\n'}
                        </Text>

                        <View style={ [styles.paragrafo, {borderLeftColor: themeMode === 'light' ? '#161F4E' : '#E9AB43', backgroundColor: themeMode === 'light' ? '#E9AB4333' : '#481298'} ] }>
                            <Text style={ [styles.tituloParagrafo1, {color: themeMode === 'light' ? '#000' : '#fff'}] }>6º Separe um valor para as despesas anuais</Text>
                        </View>

                        <Text style={ [styles.paragrafo1, appTheme[themeMode]] }>
                        Um erro cometido pela maioria das pessoas é focar somente nos gastos mensais e deixar de considerar as despesas anuais, por exemplo, IPVA, IPTU e seguros. Esses gastos acabam se tornando um problema quando não são programados, já que, se você não se planeja para pagá-los, pode passar por aperto quando eles chegarem.
                        {'\n'}
                        {'\n'}
                        Por esse motivo, o adequado é reservar uma quantia para essas despesas no decorrer do ano. Uma ideia é você separar um valor específico todo mês para elas.
                        </Text>

                        <View style={ [styles.paragrafo, {borderLeftColor: themeMode === 'light' ? '#161F4E' : '#E9AB43', backgroundColor: themeMode === 'light' ? '#E9AB4333' : '#481298'} ] }>
                            <Text style={ [styles.tituloParagrafo1, {color: themeMode === 'light' ? '#000' : '#fff'}] }>7º Tenha uma reserva para emergências</Text>
                        </View>

                        <Text style={ [styles.paragrafo1, appTheme[themeMode]] }>
                        Situações inesperadas podem acontecer a qualquer momento, por isso é preciso estar preparado. A finalidade de criar um fundo de emergência é se prevenir para os imprevistos, como rescisão de contratos, problemas de saúde, consertos no carro, entre outros. É necessário ter tranquilidade financeira em horas como essas e a reserva emergencial assegura isso.
                        {'\n'}
                        </Text>

                        <View style={ [styles.paragrafo, {borderLeftColor: themeMode === 'light' ? '#161F4E' : '#E9AB43', backgroundColor: themeMode === 'light' ? '#E9AB4333' : '#481298'} ] }>
                            <Text style={ [styles.tituloParagrafo1, {color: themeMode === 'light' ? '#000' : '#fff'}] }>8º Separe as contas pessoais das contas profissionais</Text>
                        </View>

                        <Text style={ [styles.paragrafo1, appTheme[themeMode]] }>
                        O controle financeiro deve ser feito por qualquer pessoa. Mas, quando você também é uma pessoa jurídica, é necessário ter atenção redobrada. As contas pessoais nunca podem se misturar com as contas profissionais e isso vai além da questão de se organizar.
                        {'\n'}
                        {'\n'}
                        Se misturar essas contas e usar sua renda pessoal para quitar dívidas da pessoa jurídica e vice-versa, além de poder ter sérias consequências, por exemplo, a impossibilidade de planejamento financeiro do negócio, sua contabilidade também ficará comprometida. Isso, porque, todo CNPJ deve fazer a conciliação bancária que é a verificação do extrato bancário da conta PJ com a declaração de entradas e saídas da empresa. Ao misturar finanças pessoais e profissionais, a conta não fecha.
                        {'\n'}
                        {'\n'}
                        Para não ter esse problema, o ideal é abrir duas contas bancárias diferentes: uma para pessoa física e outra para pessoa jurídica. Com isso, você evita que as contas e rendas das duas se misturem.
                        </Text>

                        <View style={ [styles.paragrafo, {borderLeftColor: themeMode === 'light' ? '#161F4E' : '#E9AB43', backgroundColor: themeMode === 'light' ? '#E9AB4333' : '#481298'} ] }>
                            <Text style={ [styles.tituloParagrafo1, {color: themeMode === 'light' ? '#000' : '#fff'}] }>9º Use a tecnologia a seu favor</Text>
                        </View>

                        <Text style={ [styles.paragrafo1, appTheme[themeMode]] }>
                        Existem diversos aplicativos disponíveis no mercado que podem auxiliar nessa tarefa de organizar as finanças pessoais no seu dia a dia. Dessa forma, fica mais fácil registrar e controlar todos os gastos que fazem parte da sua rotina. Um bom exemplo é o GuiaBolso.
                        {'\n'}
                        {'\n'}
                        Isso vai permitir que você identifique quais valores estão sendo gastos desnecessariamente e, assim, poderá cortá-los. O importante é aprender a controlar as finanças, economizar e cuidar melhor da sua renda.
                        {'\n'}
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
    paragrafo1: {
        textAlign: 'justify', 
        fontSize: 20, 
        fontWeight: '600', 
        marginTop: 20,
    },
    paragrafo: {
        borderLeftWidth: 10, 
        borderLeftColor: '#161F4E', 
        backgroundColor: '#E9AB4333', 
        marginTop: 20, 
        padding: 15
    },
    tituloParagrafo1: {
        textAlign: 'left', 
        fontSize: 20, 
        fontWeight: '600'
    }
})