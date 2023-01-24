import React, { Children } from "react";
import {View, Text, StyleSheet, Image,RefreshControl, SafeAreaView, Alert, TouchableOpacity, ScrollView, FlatList} from 'react-native'
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
    const [nome, setNome] = useState()
    const [caronas, setCaronas] = [] 
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);




    let userData = [];
    useEffect(()=>{
        const auth = getAuth()
        const dbRef = ref(getDatabase());
        const userId = auth.currentUser.uid
        get(child(dbRef, `users/${userId}/name`)).then((snapshot) => {
          if (snapshot.exists()) {
            setNome(snapshot.val());
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });

       
        get(child(dbRef, `caronas/`)).then((snapshot) => {
        
        if (snapshot.exists()) {
            
            snapshot.forEach((child) => {
                 
        })
       
        
        console.log(userData)
        console.log(caronas)
        
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        console.error(error);
        });
    },[])
    const data = [
        {
            id: 1,
            nome: 'gabrielly',
            placa: 'PIX-7563',
            start: '00:00',
            date: '14/09/2022'
        },
        {
            id: 2,
            nome: 'JOSÉ V.',
            placa: 'HUT-5694',
            start: '15:00',
            date: '18/08/2022'
        },
        {
            id: 3,
            nome: 'MARINA.',
            placa: 'PAP-5678',
            start: '15:30',
            date: '17/08/2022'
        },
        {
            id: 4,
            nome: 'ODALEIA',
            placa: 'PRO-1234',
            start: '18:45',
            date: '18/08/2022'
        },
        {
            id: 5,
            nome: 'THAIANE',
            placa: 'ABC-4196',
            start: '12:00',
            date: '18/08/2022'
        },
        {
            id: 6,
            nome: 'YURI',
            placa: 'PIT-7854',
            start: '19:00',
            date: '17/08/2022'
        },
        {
            id: 7,
            nome: 'Lucas',
            placa: 'RZX4U8T',
            start: '19:00',
            date: '17/08/2022'
        },

    ]
    
    const Item = ({nome, start, date, placa }) => (
                <TouchableOpacity style={styles.botao} >
                    <View style={{width:50, height:50}}>
                    <LottieView source={require('../Assets/28497-profile-icon.json')} autoPlay={true} loop={true} style={{}} />
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.nome}>{nome}</Text>
                        <Text >{placa}</Text>
                    
                    </View>

                    <View style={{flexDirection:'column'}}>
                        <Text>PARTIDA: {start} h</Text>
                        <Text>{date}</Text>
                    </View>
                    <View style={{height:50, width:50}}>
                    <LottieView source={require('../Assets/11515-swipe-right-arrows.json')} autoPlay={true} loop={true} />
                    </View>
                </TouchableOpacity>

    );
    

        

    return(
        <SafeAreaView style={styles.container}>


            <View>
                <Text style={{color:'#f9f9f9', fontSize: 25, textAlign:'center'}}>Bem vindo(a) {nome}</Text>
            </View>
 
                <FlatList
                    data={data}
                    renderItem={
                        ({item})=>
                        <data 
                            date={item.date}
                            nome={item.nome}
                            partida={item.start}
                            placa={item.placa}
                            />
                    }
                    keyExtractor={(item)=>item.id}
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
    nome:{
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