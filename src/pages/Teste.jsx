import React from "react";
import {View, ScrollView, StyleSheet, Text} from 'react-native'


export function Teste(){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Teste</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    },
    texto:{
        fontSize:15
    }
})