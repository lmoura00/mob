import React from "react";
import {View, Text, StyleSheet, Image,RefreshControl, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import LottieView from 'lottie-react-native'
import { getDatabase, ref, child, get, onValue } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { useState } from "react";
import { useEffect } from "react";



export function CaronasDisponiveis(){
    
    const navigation = useNavigation()
    const [nome, setNome] = useState()
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);





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
        
    },[])
    

    

        

    return(
        <SafeAreaView style={styles.container}>

            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
          />
        }
      >
            <View>
                <Text style={{color:'#f9f9f9', fontSize: 25, textAlign:'center'}}>Bem vindo(a) {nome}</Text>
            </View>
                <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Gabrielly')}>
                    <View style={{width:50, height:50}}>
                    <LottieView source={require('../Assets/28497-profile-icon.json')} autoPlay={true} loop={true} style={{}} />
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.nome}>GABRIELLY</Text>
                        <Text >PLACA:PIX-7563</Text>
                    
                    </View>

                    <View style={{flexDirection:'column'}}>
                        <Text>PARTIDA: 00:00 h</Text>
                        <Text>14/09/2022</Text>
                    </View>
                    <View style={{height:50, width:50}}>
                    <LottieView source={require('../Assets/11515-swipe-right-arrows.json')} autoPlay={true} loop={true} />
                    </View>
                </TouchableOpacity>




                <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Jose')}>
                    <View style={{width:50, height:50}}>
                    <LottieView source={require('../Assets/28497-profile-icon.json')} autoPlay={true} loop={true} style={{}} />
                    </View>
                    <View style={{flexDirection:'column', }}>
                        <Text style={styles.nome}>JOSÉ V.</Text>
                        <Text >PLACA: HUT-5694</Text>
                    
                    </View>

                    <View style={{flexDirection:'column', }}>
                        <Text>PARTIDA: 15:00 h</Text>
                        <Text>18/08/2022</Text>
                    </View>
                    <View style={{height:50, width:50}}>
                    <LottieView source={require('../Assets/11515-swipe-right-arrows.json')} autoPlay={true} loop={true} />
                    </View>
                </TouchableOpacity>



                <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Marina')}>
                    <View style={{width:50, height:50}}>
                    <LottieView source={require('../Assets/28497-profile-icon.json')} autoPlay={true} loop={true} style={{}} />
                    </View>
                    <View style={{flexDirection:'column',}}>
                        <Text style={styles.nome}>MARINA</Text>
                        <Text >PLACA:PAP-5678</Text>
                    
                    </View>

                    <View style={{flexDirection:'column',}}>
                        <Text>PARTIDA: 15:30 h</Text>
                        <Text>14/09/2022</Text>
                    </View>
                    <View style={{height:50, width:50}}>
                    <LottieView source={require('../Assets/11515-swipe-right-arrows.json')} autoPlay={true} loop={true} />
                    </View>
                </TouchableOpacity>




                <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Odaleia')}>
                    <View style={{width:50, height:50}}>
                    <LottieView source={require('../Assets/28497-profile-icon.json')} autoPlay={true} loop={true} style={{}} />
                    </View>
                    <View style={{flexDirection:'column', }}>
                        <Text style={styles.nome}>ODALEIA</Text>
                        <Text >PLACA: PRO-1243</Text>
                    
                    </View>

                    <View style={{flexDirection:'column',}}>
                        <Text>PARTIDA: 18:45 h</Text>
                        <Text>17/08/2022</Text>
                    </View>
                    <View style={{height:50, width:50}}>
                    <LottieView source={require('../Assets/11515-swipe-right-arrows.json')} autoPlay={true} loop={true} />
                    </View>
                </TouchableOpacity>



                <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Thaiane')}>
                    <View style={{width:50, height:50}}>
                    <LottieView source={require('../Assets/28497-profile-icon.json')} autoPlay={true} loop={true} style={{}} />
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.nome}>THAIANE</Text>
                        <Text >PLACA: PIX-4571</Text>
                    
                    </View>

                    <View style={{flexDirection:'column'}}>
                        <Text>PARTIDA: 12:00 h</Text>
                        <Text>18/08/2022</Text>
                    </View>
                    <View style={{height:50, width:50}}>
                    <LottieView source={require('../Assets/11515-swipe-right-arrows.json')} autoPlay={true} loop={true} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Vitoria')}>
                    <View style={{width:50, height:50}}>
                    <LottieView source={require('../Assets/28497-profile-icon.json')} autoPlay={true} loop={true} style={{}} />
                    </View>

                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.nome}>VITORIA EV.</Text>
                        <Text >PLACA: ABC-4196</Text>
                    
                    </View>

                    <View style={{flexDirection:'column'}}>
                        <Text>PARTIDA: 12:00 h</Text>
                        <Text>18/08/2022</Text>
                    </View>
                    <View style={{height:50, width:50}}>
                    <LottieView source={require('../Assets/11515-swipe-right-arrows.json')} autoPlay={true} loop={true} />
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Yuri')}>
                    <View style={{width:50, height:50}}>
                    <LottieView source={require('../Assets/28497-profile-icon.json')} autoPlay={true} loop={true} style={{}} />
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.nome}>YURI</Text>
                        <Text >PLACA: PIT-7854</Text>
                    
                    </View>

                    <View style={{flexDirection:'column'}}>
                        <Text>PARTIDA: 19:00 h</Text>
                        <Text>17/08/2022</Text>
                    </View>
                    <View style={{height:50, width:50}}>
                    <LottieView source={require('../Assets/11515-swipe-right-arrows.json')} autoPlay={true} loop={true} />
                    </View>
                </TouchableOpacity>

            
            
            </ScrollView>
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
        fontFamily:'Ubuntu_500Medium'
    },
    placa:{
        fontSize:18,
        color:'black'
    },
    imagem:{
        width:150,
        height:150,
    },
})