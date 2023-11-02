import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Dimensions, FlatList } from "react-native";
import Meses from "./meses";

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH * 0.95

export default function Anual(){

    const [meses] = useState([
        { key: 1, mes: 'Janeiro'},
        { key: 2, mes: 'Fevereiro'},
        { key: 3, mes: 'Março'},
        { key: 4, mes: 'Abril'},
        { key: 5, mes: 'Maio'},
        { key: 6, mes: 'Junho'},
        { key: 7, mes: 'Julho'},
        { key: 8, mes: 'Agosto'},
        { key: 9, mes: 'Setembro'},
        { key: 10, mes: 'Outubro'},
        { key: 11, mes: 'Novembro'},
        { key: 12, mes: 'Dezembro'},
    ])


    return(
        <View style={ styles.container }>
            <View style={ styles.registros }>

                <View style={ styles.areaAno }>
                    <Text style={ styles.ano }>2023</Text>
                </View>

                <View style={ styles.areaMes }>                
                    <FlatList 
                        data={meses}
                        keyExtractor={ (item) => item.key }
                        renderItem={ ({item}) => (
                            <Meses data={item} />
                        )}
                    />
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    registros: {
        backgroundColor: '#E9AB43',
        borderWidth: 2,
        borderRadius: 10,
        width: ITEM_WIDTH,
        marginVertical: 20,
        paddingVertical: 20
    },
    areaMes: {
        backgroundColor: '#161F4E',
        margin: 10,
        borderRadius: 20,
        padding: 10,
        height: 250
    },
    ano: {
        color: '#000',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '600'
    },
    areaAno: {
        marginBottom: 20
    }
})