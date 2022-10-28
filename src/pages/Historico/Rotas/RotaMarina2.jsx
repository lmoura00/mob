import React, { useState, useEffect, useRef } from "react";
import {View, Text, StyleSheet} from 'react-native'

import MapView, {Marker} from 'react-native-maps';
import *  as Location from 'expo-location'
import * as Permission from 'expo-permissions'
import config from '../../../../config/index.json'
import MapViewDirections from 'react-native-maps-directions';



export function RotaMarina2(){
    const mapEl = useRef(null)
    const [location, setLocation] = useState(null);
    const partida = {latitude: -5.111860538851942,     longitude:   -42.853870638343864 , latitudeDelta: 0.0922, longitudeDelta: 0.0421,};
    const destination = {latitude: -5.117587611245755,     longitude:  -42.82496834879366 };
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
            title='PARTIDA'
            coordinate={partida}
            />
            <Marker 
            pinColor={'#14BC9C'}
            coordinate={destination}
            title='DESTINO'
            />
        </MapView>
            <View style={styles.distance}>
                {distance && 
                    <Text style={{fontSize:18,}}>Distância: {distance} m</Text>
                }
            </View>

    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
      },
      text: {
        fontSize: 15,
        height: "40%",
      },
      map: {
        flex: 1,
      },
      distance:{
        justifyContent: "flex-end",
        left: "25%",
        bottom: 10,
        position: "absolute",
        backgroundColor: "#fff",
        alignSelf: "center",
        width: "50%",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.7,
        borderRadius:10,
        elevation:10
      },
})