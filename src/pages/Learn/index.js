import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

export default function Learn(){
    return(
        <View style={ styles.container }>

            <StatusBar 
                barStyle={'light-content'}
                backgroundColor={'#E9AB43'}
            />

            <Text>Learn</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})