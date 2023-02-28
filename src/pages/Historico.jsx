import React, {useEffect, useState, useRef} from "react";
import {View, Image, ScrollView, Text, StyleSheet, TouchableOpacity, RefreshControl, FlatList, Alert} from 'react-native'
import { FontAwesome5, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'; 
import LottieView from 'lottie-react-native';
import { getDatabase, ref, child, get, onValue, push, set} from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {useNavigation} from '@react-navigation/native'
import { useAuth } from "../Hooks/Auth";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import MapViewDirections from "react-native-maps-directions";
import api from "../../config/index.json";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';






//PARA PEGAR TODAS AS CORRIDAS FEITAS POR AQUELA PESSOA COMO MOTORISTA
function HistoricoMot() {
    const GOOGLE_MAPS_APIKEY = api.googleApi;
    const navigation = useNavigation();
    const auth = getAuth()
    const userUid = auth.currentUser.uid
    const [historico, setHistorico] = useState([])
    const [distance, SetDistance] = useState(null);
    const mapEl = useRef(null);
    const initial = {latitude: -5.098669809, longitude: -42.835647386, latitudeDelta: 0.00098, longitudeDelta: 0.000254}
    const [location, setLocation] = useState(null);
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
       lerHistorico();
       
        wait(500).then(() => setRefreshing(false));
    }, []);

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
              latitudeDelta: 0.0852,
              longitudeDelta: 0.0421,
          })
          
        })();
      }, []);
  

    async function lerHistorico(){
        const dados = []
        const db = getDatabase();
        setHistorico(null)
        const historicoRef = ref(db, 'Historico/' + userUid );
        onValue(historicoRef, (snapshot) => {
          snapshot.forEach((item)=>{
            let data = {
                paxUid: userUid,
                caronasKey:item.val().id,
                email: item.val().email,
                image : item.val().imageUrl,
                data: item.val().data,
                destino:item.val().destino,
                destinoString:item.val().destinoString,
                horario:item.val().horario,
                partida:item.val().partida,
                partidaString:item.val().partidaString,
                vagas: item.val().vagas,
                name: item.val().name,
                lastName: item.val().lastname,
                telefone: item.val().telefone,
                placa: item.val().placa,
                uid:item.val().uid,
                interessados:item.val().interessados
            }
            dados.push(data)
            setHistorico(dados)
            //console.log(historico)
          });
          
        });
    }



    useEffect(()=>{
        lerHistorico()
        
    },[])

    

    return(
        <View style={styles.container}>
             <RefreshControl style={{flex:1}} onRefresh={onRefresh} refreshing={refreshing}>
             { historico  ?
                <FlatList
                    data={historico}
                    renderItem={({item})=> (
                        <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('DetHistoricoMot', {item})}>
                        <View style={{width:50, height:50, left:25}}>
                        {item.image ? (
                                <Image 
                                    source={{uri:item.image}} 
                                    style={{
                                        width:70, 
                                        height:70, 
                                        borderRadius:10, 
                                        borderWidth:2,
                                        borderColor:'#F6C445',
                                        position:'absolute'
                                    }}/>)
                                : (
                                <LottieView 
                                    source={require('../Assets/28497-profile-icon.json')} 
                                    autoPlay={true} 
                                    loop={true} 
                                    style={{}} 
                                />
                                
                                )
                            }
                        </View>
                        <View style={{flexDirection:'column', position:'absolute', right:75}}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.name}>{item.lastName}</Text>
                    
                        
                        </View>

                        <View style={{flexDirection:'column', position:'absolute', bottom:10, left:15}}>
                            <Text>HORÁRIO: {item.data}</Text>
                            <Text>PARTIDA: {item.horario} h</Text>
                        </View>
                        <View style={{ }}>
                <MapView 
                    style={{ width:135, top:60, height:65, position:'absolute', left:140}}
                    initialRegion={item.partida}
                    showsUserLocation={false}
                    ref={mapEl}
                    loadingEnabled
                >
                <MapViewDirections
                    origin={item.partida}
                    destination={item.destino}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={2}
                    strokeColor="blue"
                    onReady={result=>{
                        SetDistance(result.distance)
                        mapEl.current.fitToCoordinates(
                            result.coordinates,{
                                edgePadding:{
                                    top:0.2,
                                    bottom:0.2,
                                    left:0.2,
                                    right:0.2
                                }
                            }
                        )
                    }}
                    
                />
            
                </MapView>
                        </View>
                        <View style={{height:50, width:50, position:'absolute',right:5, top:45}}>
                        <LottieView source={require('../Assets/11515-swipe-right-arrows.json')} autoPlay={true} loop={true} />
                        </View>
                    </TouchableOpacity>
                    )}               
                />
                :
                <View style={{flex:1}}>
                    
                    <LottieView 
                        source={require('../Assets/93134-not-found.json')} 
                        autoPlay={true} 
                        loop={true} 
                        style={{}} 
                    />
                    
                </View>
                


            }
            </RefreshControl>
        </View>
    )
}
  
  




//PARA PEGAR TODAS AS CORRIDAS DAQUELE USUARIO COMO PAX
function HistoricoPax() {
    const GOOGLE_MAPS_APIKEY = api.googleApi;
    const navigation = useNavigation();
    const auth = getAuth()
    const userUid = auth.currentUser.uid
    const [historico, setHistorico] = useState([])
    const [distance, SetDistance] = useState(null);
    const mapEl = useRef(null);
    const initial = {latitude: -5.098669809, longitude: -42.835647386, latitudeDelta: 0.00098, longitudeDelta: 0.000254}
    const [location, setLocation] = useState(null);
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
       lerHistorico();
       
        wait(500).then(() => setRefreshing(false));
    }, []);

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
              latitudeDelta: 0.0852,
              longitudeDelta: 0.0421,
          })
          
        })();
      }, []);
  

    async function lerHistorico(){
        const dados = []
        const db = getDatabase();
        setHistorico(null)
        const historicoRef = ref(db, 'HistoricoPax/' + userUid );
        onValue(historicoRef, (snapshot) => {
          snapshot.forEach((item)=>{
            let data = {
                paxUid: userUid,
                caronasKey:item.val().key,
                email: item.val().email,
                image : item.val().image,
                data: item.val().data,
                destino:item.val().destino,
                destinoString:item.val().destinoString,
                horario:item.val().horario,
                partida:item.val().partida,
                partidaString:item.val().partidaString,
                vagas: item.val().vagas,
                uidMot:item.val().key,
                name: item.val().name,
                lastName: item.val().lastName,
                telefone: item.val().telefone,
                uidMot: item.val().uidMot,
                placa: item.val().placa,
            }
            dados.push(data)
            setHistorico(dados)
            //console.log(data)
          });
          
        });
    }



    useEffect(()=>{
        lerHistorico()
        
    },[])

    

    return(
        <View style={styles.container}>
             <RefreshControl style={{flex:1}} onRefresh={onRefresh} refreshing={refreshing}>
             { historico  ?
                <FlatList
                    data={historico}
                    renderItem={({item})=> (
                        <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('DetalhesHistorico', {item})}>
                        <View style={{width:50, height:50, left:25}}>
                        {item.image ? (
                                <Image 
                                    source={{uri:item.image}} 
                                    style={{
                                        width:70, 
                                        height:70, 
                                        borderRadius:10, 
                                        borderWidth:2,
                                        borderColor:'#F6C445',
                                        position:'absolute'
                                    }}/>)
                                : (
                                <LottieView 
                                    source={require('../Assets/28497-profile-icon.json')} 
                                    autoPlay={true} 
                                    loop={true} 
                                    style={{}} 
                                />
                                
                                )
                            }
                        </View>
                        <View style={{flexDirection:'column', position:'absolute', right:75}}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.name}>{item.lastName}</Text>
                    
                        
                        </View>

                        <View style={{flexDirection:'column', position:'absolute', bottom:10, left:15}}>
                            <Text>HORÁRIO: {item.data}</Text>
                            <Text>PARTIDA: {item.horario} h</Text>
                        </View>
                        <View style={{ }}>
                <MapView 
                    style={{ width:135, top:60, height:65, position:'absolute', left:140}}
                    initialRegion={item.partida}
                    showsUserLocation={false}
                    ref={mapEl}
                    loadingEnabled
                >
                <MapViewDirections
                    origin={item.partida}
                    destination={item.destino}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={2}
                    strokeColor="blue"
                    onReady={result=>{
                        SetDistance(result.distance)
                        mapEl.current.fitToCoordinates(
                            result.coordinates,{
                                edgePadding:{
                                    top:0.2,
                                    bottom:0.2,
                                    left:0.2,
                                    right:0.2
                                }
                            }
                        )
                    }}
                    
                />
            
                </MapView>
                        </View>
                        <View style={{height:50, width:50, position:'absolute',right:5, top:45}}>
                        <LottieView source={require('../Assets/11515-swipe-right-arrows.json')} autoPlay={true} loop={true} />
                        </View>
                    </TouchableOpacity>
                    )}               
                />
                :
                <View style={{flex:1}}>
                    
                    <LottieView 
                        source={require('../Assets/123841-empty-state-ghost.json')} 
                        autoPlay={true} 
                        loop={true} 
                        style={{}} 
                    />
                
                </View>
                


            }
            </RefreshControl>
        </View>
    )

}


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "HistoricoPax") {
            return focused ? (
              <LottieView
                source={require("../Assets/125338-first.json")}
                autoPlay={true}
                loop={true}
              ></LottieView>
            ) : (
                <MaterialCommunityIcons name="bag-personal" size={size} color={color} />
            );
          } else if (route.name === "HistoricoMot") {
            return focused ? (
              <LottieView
                source={require("../Assets/122456-driver-steering-wheel-car-map-road-location-marker-sign-preloader.json")}
                autoPlay={true}
                loop={true}
              ></LottieView>
            ):(
                <MaterialCommunityIcons name="steering" size={size} color={color} />
            )}},
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "grey",
        })}
            >
      <Tab.Screen name="HistoricoPax" component={HistoricoPax} options={{headerShown:false, tabBarLabel:'Passageiro'}}/>
      <Tab.Screen name="HistoricoMot" component={HistoricoMot} options={{headerShown:false, tabBarLabel:'Motorista'}}/>
    </Tab.Navigator>
  );
}



export function Historico(){
    return (
    
        <MyTabs />
    
      )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#334A58",
        paddingTop:10
        
    },
    titulo:{
        fontSize:28,
        color:'#f9f9f9',
        textAlign:'center',
        fontFamily:'BalsamiqSans_700Bold',
        marginTop:80
    },
    name:{
        fontSize:22,
        color:'black',
        fontFamily:'Ubuntu_500Medium',
        textTransform:'uppercase'
    },
    placa:{
        fontSize:18,
        color:'black'
    },
    imagem:{
        width:150,
        height:150,
    },
    textoBotaoAdCarona:{
        fontSize:45
        
    },
    botaoAdCarona:{
        position: 'absolute',
        backgroundColor:'#1FFA50',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        right: 18,
        bottom: 15,
        opacity:0.8,
        borderRadius:30,
        textAlign:'center'
    },
    botao:{
        flexDirection:'row',
        backgroundColor:'#fff',
        width:'100%',
        height:145,
        borderWidth:2,
        marginBottom:12,
        borderRadius:8, 
        elevation:10,
        padding:5
    },
    title:{
        fontSize:25,
        color:'black'
    },
})