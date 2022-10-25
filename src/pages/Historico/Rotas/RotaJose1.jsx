import React, { useState, useEffect, useRef } from "react";
import {View, Text, StyleSheet} from 'react-native'

import MapView, {Marker} from 'react-native-maps';
import *  as Location from 'expo-location'
import * as Permission from 'expo-permissions'
import config from '../../../../config/index.json'
import MapViewDirections from 'react-native-maps-directions';



export function RotaJose1(){
    const mapEl = useRef(null)
    const partida = {latitude: -5.117517200852349, longitude: -42.83394512280961, latitudeDelta: 0.0922, longitudeDelta: 0.0421,}
    const [location, setLocation] = useState(null);
    const destination = {latitude: -5.111598176123656,    longitude:  -42.8537928876194,};
    const [distance, SetDistance] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const GOOGLE_MAPS_APIKEY = config.googleApi;
    useEffect(() => {
      (async () => {
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permissão ao acesso a localização foi negado');
          return;
        }
  
        let locationCurrent = await Location.getCurrentPositionAsync({});
        setLocation({
            latitude: locationCurrent.coords.latitude,
            longitude: locationCurrent.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        })
        
      })();
    }, []);

    
  

    return(
        <View style={styles.container}>
        <MapView 
            style={styles.map}
            initialRegion={partida}
            showsUserLocation={true}
            ref={mapEl}
            loadingEnabled
        >
            <MapViewDirections
                origin={partida}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="blue"
                onReady={result=>{
                    SetDistance(result.distance)
                    mapEl.current.fitToCoordinates(
                        result.coordinates,{
                            edgePadding:{
                                top:50,
                                bottom:50,
                                left:50,
                                right:50,
                            }
                        }
                    )
                }}
            />
        <Marker 
        coordinate={destination}
        />
        <Marker 
        coordinate={partida}
        pinColor={'#14BC9C'}
        />
        </MapView>
            <View style={{backgroundColor:'#fff', width:'100%', height:100, alignSelf:'center', alignItems:'center'}}>
                {distance && 
                    <Text style={{fontSize:18}}>Distância: {distance} m</Text>
                }
            </View>

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