import React, { useEffect, useState, useRef } from "react";
import { Text, View, StyleSheet, Image, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';
import MapViewDirections from "react-native-maps-directions";
import api from "../../config/index.json";
import { LocationAccuracy } from "expo-location";
import {
  getDatabase,
  ref,
  set,
  onValue,
  push,
  update,
  child,
  get,
  DataSnapshot,
} from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
} from "firebase/auth";

export function AcompanharRota() {
    const auth = getAuth();
    const userUid = auth.currentUser.uid;
    const diaHj = '0'+new Date().getDate();
    const mesHj = '0' + new Date().getMonth()
    const anoHj = new Date().getFullYear()
    const dataCompleta = diaHj + '/' + mesHj +'/'+anoHj
    const hrAgr = new Date().getHours()
    const minAgr = new Date().getMinutes()
    if (minAgr.toString.length<=1){
      const minAgr = '0' + minAgr
    }
    const hrCompleta = hrAgr + ':'+ minAgr
    const [locationUser, setLocationUser] = useState(null)
    const destino = {latitude: -5.1112507, longitude:  -42.8537605}
    const mapRef = useRef()

    function writeUserData() {
      const db = getDatabase();
      set(ref(db, 'local/' + userUid ), {
        locationUser: locationUser,
        dia: dataCompleta,
        hora: hrCompleta
      });
    }
    async function getLocation(){
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocationUser(location);
      console.log(location);
      writeUserData();
      console.log()
    }
    useEffect(() => {
        getLocation();
        writeUserData();
      }, []);

      useEffect(()=>{
        getLocation();
        writeUserData();
        Location.watchPositionAsync({
            accuracy: Location.LocationAccuracy.Highest,
            timeInterval:1200,
            distanceInterval:1
        },(response)=>{(
            console.log('Nova Localização', response))
            setLocationUser(response);
            mapRef.current?.animateCamera({
              pitch: 20, 
              center: response.coords
            });
            writeUserData();
           
        });
        //console.log(locationUser.coords.latitude)
        
      },[])

  return (
    <View style={styles.container}>
    {
        locationUser&&
      <MapView 
        ref={mapRef}
        style={styles.map}
        showsUserLocation
        initialRegion={{
            latitude: locationUser.coords.latitude,
            longitude: locationUser.coords.longitude,
            latitudeDelta:0.005,
            longitudeDelta:0.005
        }}
    >
        <Marker coordinate={{
            latitude:locationUser.coords.latitude,
            longitude: locationUser.coords.longitude
        }}/>
      </MapView>
    }
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
  },
  map:{
    flex:1,
    width:'100%'
  }
});
