import React, { useState, useEffect, useRef } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

import MapView, {Marker} from 'react-native-maps';
import *  as Location from 'expo-location'
import * as Permission from 'expo-permissions'
import config from '../../../config/index.json'
import MapViewDirections from 'react-native-maps-directions';
import {useNavigation} from '@react-navigation/native'


export function RotaGabrielly(){
    const navigation = useNavigation()
    const pinPartida = '#14BC9C'
    const mapEl = useRef(null)
    const [location, setLocation] = useState(null);
    const partida = {latitude: -4.952219564302834,  longitude: -47.499684515768244,latitudeDelta: 0.0922, longitudeDelta: 0.0421,};
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
            title='DESTINO'
            />
            <Marker 
            coordinate={partida}
            pinColor={'#14BC9C'}
            title='PARTIDA'
            />

        </MapView>
            <View>
              <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate("Gabrielly") &&  setVisible(true)}>
                <Text style={{fontSize:18}}>QUERO A CARONA!</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.distance}>
                {distance && 
                    <Text style={{fontSize:18}}>Distância: {distance} m</Text>
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
      botao:{
        justifyContent: "flex-end",
        left: "25%",
        bottom: 80,
        position: "absolute",
        backgroundColor: "red",
        alignSelf: "center",
        width: "50%",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        opacity: 1,
        borderRadius:10,
        elevation:10
      }
})