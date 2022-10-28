import React from "react";
import {View, Image, ScrollView, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 
import LottieView from 'lottie-react-native';

import {useNavigation} from '@react-navigation/native'


export function Historico(){

    const navigation = useNavigation();

    return(
        <ScrollView style={styles.container}>
            <Text style={{textAlign:'center', fontSize:18, fontWeight:'bold', marginBottom:10, marginTop:10, color:'#fff', textDecorationLine:'underline'}}>26/09/2022</Text>

                <TouchableOpacity style={{flexDirection:'row', backgroundColor:'#fff', justifyContent:'space-evenly'}} onPress={()=>navigation.navigate("HistoricoJose26")}>
                    <View>
                    <Image source={{uri:'https://inovaisencoes.com.br/wp-content/uploads/2020/11/range-rover-velar-20MY-1.png'}} style={{width:150, height:90, margin:10}}/>
                    </View>
                    <View style={{flexDirection:'column', marginTop:15}}>
                        <Text style={{fontSize:18, textAlign:'center', fontWeight:'bold'}}>JOSÉ V.</Text>
                        <Text style={{fontSize:16, textAlign:'center',}}>PARTIDA: 15:00 h </Text>
                        <Text style={{fontSize:16, textAlign:'center',}}>CHEGADA: 15:30 h </Text>
                    </View>
                    <View style={{height:75, width:75,justifyContent:'center', alignSelf:'center'}}>
                    <LottieView source={require('../Assets/11515-swipe-right-arrows.json')} autoPlay={true} loop={true} />
                    </View>
                </TouchableOpacity>



            <Text style={{textAlign:'center', fontSize:18, fontWeight:'bold', marginBottom:10, marginTop:10, color:'#FFF', textDecorationLine:'underline'}}>22/09/2022</Text>

                <TouchableOpacity style={{flexDirection:'row', backgroundColor:'#fff', justifyContent:'space-evenly'}} onPress={()=>navigation.navigate('HistoricoMarina1')}>
                    <Image source={{uri:'https://cdn.autopapo.com.br/carro/audi/q3-14-tfsi-attraction-plus-s-tronic-flex-2017/destaque-v1.png'}} style={{width:150, height:90, margin:10}}/>
                    <View style={{flexDirection:'column', marginTop:15}}>
                        <Text style={{fontSize:18, textAlign:'center', fontWeight:'bold'}}>MARINA</Text>
                        <Text style={{fontSize:16, textAlign:'center',}}>PARTIDA: 15:00 h </Text>
                        <Text style={{fontSize:16, textAlign:'center',}}>CHEGADA: 15:30 h </Text>
                    </View>
                    <View style={{height:75, width:75,justifyContent:'center', alignSelf:'center'}}>
                    <LottieView source={require('../Assets/11515-swipe-right-arrows.json')} autoPlay={true} loop={true} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection:'row', backgroundColor:'#fff', marginTop:10,justifyContent:'space-evenly'}} onPress={()=>navigation.navigate('HistoricoMarina2')}>
                    <Image source={{uri:'https://cdn.autopapo.com.br/carro/audi/q3-14-tfsi-attraction-plus-s-tronic-flex-2017/destaque-v1.png'}} style={{width:150, height:90, margin:10}}/>
                    <View style={{flexDirection:'column', marginTop:15,}}>
                        <Text style={{fontSize:18, textAlign:'center', fontWeight:'bold',}}>MARINA</Text>
                        <Text style={{fontSize:16, textAlign:'center',}}>PARTIDA: 18:00 h </Text>
                        <Text style={{fontSize:16, textAlign:'center',}}>CHEGADA: 18:45 h </Text>
                    </View>
                    <View style={{height:75, width:75,justifyContent:'center', alignSelf:'center'}}>
                    <LottieView source={require('../Assets/11515-swipe-right-arrows.json')} autoPlay={true} loop={true} />
                    </View>
                </TouchableOpacity>



            <Text style={{textAlign:'center', fontSize:18, fontWeight:'bold', marginBottom:10, marginTop:10, color:'#FFF', textDecorationLine:'underline'}} >21/09/2022</Text>

                <TouchableOpacity style={{flexDirection:'row', backgroundColor:'#fff',justifyContent:'space-evenly' }} onPress={()=>navigation.navigate("HistoricoJose21")}>
                    <Image source={{uri:'https://inovaisencoes.com.br/wp-content/uploads/2020/11/range-rover-velar-20MY-1.png'}} style={{width:150, height:80, margin:10}}/>
                    <View style={{flexDirection:'column', marginTop:15}}>
                        <Text style={{fontSize:18, textAlign:'center', fontWeight:'bold'}}>JOSÉ V.</Text>
                        <Text style={{fontSize:16, textAlign:'center',}}>PARTIDA: 15:00 h </Text>
                        <Text style={{fontSize:16, textAlign:'center',}}>CHEGADA: 15:30 h </Text>
                    </View>
                    <View style={{height:75, width:75,justifyContent:'center', alignSelf:'center'}}>
                    <LottieView source={require('../Assets/11515-swipe-right-arrows.json')} autoPlay={true} loop={true} />
                    </View>
                </TouchableOpacity>


            <Text style={{textAlign:'center', fontSize:18, fontWeight:'bold', marginBottom:10, marginTop:10, textDecorationLine:'underline', color:'#FFF'}}>20/09/2022</Text>

                <TouchableOpacity style={{flexDirection:'row', backgroundColor:'#fff', marginBottom:15, justifyContent:'space-evenly'}} onPress={()=>navigation.navigate('HistoricoOdaleia')}>
                <Image 
                    source={{uri:'https://cdn.autopapo.com.br/carro/volkswagen/fox-16-msi-comfortline-imotion-flex-2017/destaque-v1.png'}} 
                    style={{
                        width:150, 
                        height:80, 
                        margin:10
                        }}
                    />
                    <View style={{flexDirection:'column', marginTop:15}}>
                        <Text style={{fontSize:18, textAlign:'center', fontWeight:'bold'}}>ODALEIA</Text>
                        <Text style={{fontSize:16, textAlign:'center',}}>PARTIDA: 15:00 h </Text>
                        <Text style={{fontSize:16, textAlign:'center',}}>CHEGADA: 15:30 h </Text>
                    </View>
                    <View style={{height:75, width:75,justifyContent:'center', alignSelf:'center'}}>
                    <LottieView source={require('../Assets/11515-swipe-right-arrows.json')} autoPlay={true} loop={true} />
                    </View>
                </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#334A58",
        
    },
    botao:{
        backgroundColor:'#f9f9f9',
        flexDirection:'row',
    }
})