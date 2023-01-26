import React, { Children } from "react";
import {View, Text, StyleSheet, Image,RefreshControl, SafeAreaView, Alert, TouchableOpacity, ScrollView, FlatList, KeyboardAvoidingView} from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import LottieView from 'lottie-react-native'
import { getDatabase, ref, child, get, onValue, push} from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { useState } from "react";
import { useEffect } from "react";



export function CaronasDisponiveis(){
    
    const navigation = useNavigation()
    const [name, setname] = useState()
    const [caronas, setCaronas] = [''] 
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);




    const userData = [];
    useEffect(()=>{
        const auth = getAuth()
        const dbRef = ref(getDatabase());
        const userId = auth.currentUser.uid
        get(child(dbRef, `users/${userId}/name`)).then((snapshot) => {
          if (snapshot.exists()) {
            setname(snapshot.val());
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });

       
        get(child(dbRef, `caronas/${'-NMj2w2WjpDrqdr9GTpl'}`))
        .then((snapshot) =>{
        if (snapshot.exists()) {
            
           userData.push(snapshot.exportVal())
           
       
           
        console.log(userData)
        console.log(userData)
        console.log(data)
        console.log(auth.currentUser.email)
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        console.error(error);
        });
    },[])
    const data = [
       
        {
            id: "NM_B5pweIHX1gIydMap",
            name: 'Luca',
            placa: 'PIT-7854',
            horario: '19:00',
            data: '17/08/2022',
            partida: {"latitude": -5.111737100000001, "latitudeDelta": 0.000922, "longitude": -42.8538358, "longitudeDelta": 0.000421},
            destino: {"latitude": -5.088821900000001, "latitudeDelta": 0.000922, "longitude": -42.8112273, "longitudeDelta": 0.000421},
        },
        {
            data: "27/01/2023", 
            destino: {
                "latitude": -5.088821900000001, 
                "latitudeDelta": 0.000922, 
                "longitude": -42.8112273, 
                "longitudeDelta": 0.000421
            }, 
            horario: "12:00", 
            id: "w4OE5BFZDAa1lKHv0si6p9ofqK93", 
            lastname: "Moura ", 
            name: "Lucas", 
            partida: {
                "latitude": -5.111737100000001, 
                "latitudeDelta": 0.000922, 
                "longitude": -42.8538358, 
                "longitudeDelta": 0.000421
            }, 
            placa: "Tetetwt", 
            telefone: "(86) 98101-9840"
        },


    ]
 

    const Item = ({name, horario, data, placa }) => (
                <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Detalhes')}>
                    <View style={{width:50, height:50}}>
                    <LottieView source={require('../Assets/28497-profile-icon.json')} autoPlay={true} loop={true} style={{}} />
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.name}>{name}</Text>
                        <Text >{placa}</Text>
                    
                    </View>

                    <View style={{flexDirection:'column'}}>
                        <Text>PARTIDA: {horario} h</Text>
                        <Text>{data}</Text>
                    </View>
                    <View style={{height:50, width:50}}>
                    <LottieView source={require('../Assets/11515-swipe-right-arrows.json')} autoPlay={true} loop={true} />
                    </View>
                </TouchableOpacity>

    );
    

        

    return(
        <SafeAreaView style={styles.container}>


            <View>
                <Text style={{color:'#f9f9f9', fontSize: 25, textAlign:'center'}}>Bem vindo(a) {name}</Text>
            </View>
                <FlatList
                    data={userData}
                    renderItem={
                        ({item})=> 
                        <Item 
                            data={item.data}
                            horario = {item.horario}
                            name = {item.name}
                            placa = {item.placa}
                    /> }
                />


                

           
                <TouchableOpacity style={styles.botaoAdCarona} onPress={()=>navigation.navigate('HomeMot')}>
                    <Text style={styles.textoBotaoAdCarona}>+</Text>
                </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:5,
        backgroundColor:"#334A58"
    },
    botao:{
        flexDirection:'row',
        backgroundColor:'#fff',
        width:'100%',
        height:75,
        alignItems:'center',
        justifyContent:'space-evenly',
        borderWidth:2,
        margin:5
    },
    title:{
        fontSize:25,
        color:'black'
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
})