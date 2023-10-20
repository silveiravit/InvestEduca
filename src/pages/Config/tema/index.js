import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, Switch } from "react-native";

export default function Tema(){

    return(
        <View style={ styles.container }>

            <Text>tema escuro</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#eee'
    }
})