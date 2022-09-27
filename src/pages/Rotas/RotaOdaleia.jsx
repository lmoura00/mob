import React from "react";
import {View, Text, StyleSheet} from 'react-native'

import MapView from 'react-native-maps';

export function RotaOdaleia(){
    return(
        <View style={styles.container}>
        <MapView 
            style={styles.map}
            initialRegion={{
                latitude: -5.107304351065697,
                longitude: -42.830840868719605,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
        >

        </MapView>

    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',

    },
    text:{
        fontSize:15,
        height:'40%'
    },
    map:{
        height:'100%',

    }
})