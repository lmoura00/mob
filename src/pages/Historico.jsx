import React, {useEffect, useState} from "react";
import {View, Image, ScrollView, Text, StyleSheet, TouchableOpacity, RefreshControl, FlatList, Alert} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 
import LottieView from 'lottie-react-native';
import { getDatabase, ref, child, get, onValue, push, set} from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {useNavigation} from '@react-navigation/native'
import { useAuth } from "../Hooks/Auth";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import MapViewDirections from "react-native-maps-directions";




export function Historico(){

    const navigation = useNavigation();
    const auth = getAuth()
    const userUid = auth.currentUser.uid
    console.log(userUid)
    const [historico, setHistorico] = useState([])
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
       lerHistorico();
       
        wait(500).then(() => setRefreshing(false));
    }, []);

    async function lerHistorico(){
        const dados = []
        const db = getDatabase();
        setHistorico(null)
        const starCountRef = ref(db, 'Historico/' + userUid );
        onValue(starCountRef, (snapshot) => {
          const data = snapshot.forEach((item)=>{
            let data = {
                key: item.val().key,
                caronasKey:item.val().key,
                email: item.val().email,
                image : item.val().image,
                data: item.val().data,
                destino:item.val().destino,
                horario:item.val().horario,
                partida:item.val().partida,
                vagas: item.val().vagas,
                keyMot:item.val().key,
                name: item.val().name,
                lastName: item.val().lastName,
                id: item.val().id,
                placa: item.val().placa,
            }
            dados.push(data)
            setHistorico(dados)
            console.log(historico)
      
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
                        <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Detalhes', {item})}>
                        <View style={{width:50, height:50}}>
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
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.name}>{item.lastName}</Text>
                    
                        
                        </View>

                        <View style={{flexDirection:'column', position:'absolute', bottom:10}}>
                            <Text>HORÁRIO: {item.data}</Text>
                            <Text>PARTIDA: {item.horario} h</Text>
                        </View>
                        <View style={{ }}>
                        <MapView 
                            style={{position:'absolute', right:5, width:125, top:75, height:55}}
                            initialRegion={item.partida}
                            showsUserLocation={false}
                            loadingEnabled
                            >
                            <Marker
                                coordinate={item.partida}
                                pinColor={'#14BC9C'}
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
                        source={require('../Assets/53034-lost.json')} 
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
        justifyContent:'space-evenly',
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