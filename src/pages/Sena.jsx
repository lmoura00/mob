import React, {useState} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions, ImageStore} from 'react-native'

import {Linking} from 'react-native'

import { Entypo } from '@expo/vector-icons'; 

import {useNavigation} from '@react-navigation/native'

const {width} = Dimensions.get('window');
const height = width * 0.9;

const imagens = [
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t39.30808-6/291966220_464438312355010_1995833858411629636_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHKjUo3cWuVnl_aC9p5pJ3rM8LtgcI9f4czwu2Bwj1_h_0HrlBQfwz4kumZzkAxsdbmqvoxx6bb10dqorVveiuw&_nc_ohc=b0jJ6UepU4cAX-BwHV7&_nc_oc=AQkZkfzZ-qwTQYL0mTQBwSpxinQllwKKvAHC2A74UHg2ysuVhkAq7PKLZEpnhE-RrQwvW2AhHcE8UjUnfIhwF-Yd&_nc_ht=scontent.fthe18-1.fna&oh=00_AT92A6NhZKzIIrM6M6RY5b8j7AZmVvlfpReH-ruYNzICPw&oe=63292261',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t39.30808-6/292199280_464438315688343_4903387904887053176_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH3w8tW8NV8HsTfPaHXFIh-8qBnbvhBIqHyoGdu-EEiofJMx-h7WYXIGXJc3WWPeVZWYFh2QRGTdkZ_s5sG95na&_nc_ohc=VU1EEWxvoxYAX9SLpXj&tn=3WG5uJQzW1OH0zMc&_nc_ht=scontent.fthe18-1.fna&oh=00_AT9sA006RdVJLmNT_Jjt5y4goNFztLCDcC1YOwuBcusCjw&oe=63293EB5',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t1.6435-9/52259297_2158083440897464_8501675857335549952_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeF_GDhvU5HCuyzxH2fOsIzIP0OMEzXc5Lw_Q4wTNdzkvIt46pV_ovSWaVs6Q36V-ExhMq8hatOkGS79flWBJl_a&_nc_ohc=SGTKX3kjeWsAX8lxKpu&_nc_ht=scontent.fthe18-1.fna&oh=00_AT_WqK-EBvVCBh_eCxWiw9YXf9L0a8Nb8sSy8uEGw_rwwA&oe=634A6E45',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t31.18172-8/27356286_1666496590056154_7191896113182433501_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEubHUBVA0zo_qJKNovi7fFICQ2UqiYrBkgJDZSqJisGcS_KVqVovhTGFQ1Skf0N0-YREO4COBpj6EiTAg2MCHG&_nc_ohc=pYFymSOZwEIAX-1mm8X&_nc_ht=scontent.fthe18-1.fna&oh=00_AT9Z5RSTJkJVbF7GaFxwvVKxyvEA5jjsWgfd7LCLyfGoxg&oe=634B3D6E',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t1.18169-9/26229628_1641677735871373_6660569954311734036_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHjjuoctuuHBRMwciqmTjjPPNvlIIcvXlc82-Ughy9eV8G1_obanH1BaJs5440p1DCoZKGF9tWbbU7FwCYJZaGK&_nc_ohc=Ya5SuOXaRW0AX_OVplt&_nc_ht=scontent.fthe18-1.fna&oh=00_AT9S3LZGu-y-dfNNQgn3v5sj4WB4YWtTUfGpWxtxXqzVqQ&oe=634A73D5',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t1.18169-9/26170010_1641677679204712_2128731059042671486_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHA8vkOJvnuUwJdcdq6vijKPXWMuepUviU9dYy56lS-JYDouWUqHX6UEaQtLtP8xGYOZXvLKXTOflY8nQAdbhZy&_nc_ohc=vqsjyyECHeoAX-X5HRH&_nc_ht=scontent.fthe18-1.fna&oh=00_AT9T9uk2WnjP34Owj1CchmGJlY3ioImg7OIGrlFs6G_cCg&oe=634BFE4D',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t1.18169-9/26730874_1641677559204724_8916095637717786256_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEPht2TbRDZGtlzkKnj5pEJlEtZJOv4WpOUS1kk6_hak8Pca3G0y3wu0AeSbWI4rCszoi34aMLJiXB7HaoB9wOR&_nc_ohc=eqMLZNdlQ08AX-nGy05&_nc_ht=scontent.fthe18-1.fna&oh=00_AT8ji3POIACUhPjj2ubb5-RRnoxW0AYVKFfMKZ0NXELAKA&oe=634BF15E',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t1.18169-9/26220276_1641677375871409_7958013120165993740_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGR2HHuPEVAJ4JDdDPAbwL53XSF3WVzmvbddIXdZXOa9u61ChlxWWpPtdxMJvAn-8ZmBptH3VPyeUIeMr3aH6LY&_nc_ohc=rsPPIpAYQXsAX_VmKMc&_nc_oc=AQn7Bv8fpUuMNLOGbE1YuLEGdEhnWSBYZafZTt_SSsWncZ9f0yOZ12cyNg4B2iLRLNDGyoWbDr8veeepUyJeBlbx&_nc_ht=scontent.fthe18-1.fna&oh=00_AT9xO2hYw73_0yHqDHPqN5dLXSPpEvglfTjzVy4CVL2g7w&oe=634A929F',


]   

export function Sena(){

const navigation = useNavigation()

    return(
           <View style={{backgroundColor:'#334A58'}}>
               <ScrollView style={{backgroundColor:'#fff', marginBottom:15,}}>
                   <View style={styles.containerImages}>
                       <ScrollView 
                       pagingEnabled 
                       horizontal 
                       showsHorizontalScrollIndicator={false}
                       style={styles.scroll}>
                           {
                               imagens.map((imagem, index) => (
                                   <Image 
                                       key={index}
                                       style={styles.image} 
                                       source={{uri:imagem}}/>
                               ))
                           }
                       </ScrollView>
                       <View style={styles.pagination}>
                           {
                               imagens.map((i,k) => (
                                   <Text key={k} style={styles.paginText}>⬤</Text>
                               ))
                           }
                       </View>
                   </View>
                   
                   <View style={styles.containerInfor}>
                       <Text style={styles.title}>BALNEÁRIO</Text>
                       <Text style={styles.title1}>SENA BRASIL</Text>
                       
                       <View>
                           <Text style={styles.middle}>⬤ Comida no local;</Text>
                           <Text style={styles.middle}>⬤ Piscina;</Text>
                           <Text style={styles.middle}>⬤ Riacho;</Text>
                           <Text style={styles.middle}>⬤ Funcionamento: </Text>
                           <Text style={styles.middle}>Sábado e Domingo</Text>

                           <View style={{flexDirection:'row', marginTop:15, alignItems:'center'}}>
                            <Entypo name="instagram" size={24} color="black" style={{marginRight:10}} />
                                <TouchableOpacity onPress={()=>Linking.openURL('https://www.instagram.com/senabrasil_balnear/')}>
                                    <Text style={styles.link}>@senabrasil_balnear</Text>
                                </TouchableOpacity>
                           </View>

                           <View style={{flexDirection:'row', marginTop:15, alignItems:'center'}}>
                            <Entypo name="facebook" size={24} color="black" style={{marginRight:10}} />
                                <TouchableOpacity onPress={()=>Linking.openURL('https://www.facebook.com/BalnearioSennaBrasil/')}>
                                    <Text style={styles.link}>Balneario SENNA Brasil</Text>
                                </TouchableOpacity>
                           </View>

                       </View>

                       <Text style={styles.taxa}>TAXA PARA ENTRAR:</Text>
                       <Text style={styles.taxa1}>R$ 20 REAIS POR PESSOA</Text>

                       <TouchableOpacity style={styles.sobre}>
                           <Text style={styles.textoBotao}>SOBRE</Text>
                       </TouchableOpacity>

                       <TouchableOpacity style={styles.verRota} onPress={()=>navigation.navigate('RotaSena')}>
                           <Text style={styles.textoBotao}>VER ROTA</Text>
                       </TouchableOpacity>

                       <TouchableOpacity style={styles.voltar} onPress={()=> navigation.navigate('PtsTur')}>
                           <Text style={styles.textoBotao}>VOLTAR</Text>
                       </TouchableOpacity>
                   </View>
               </ScrollView>
           
           </View> 
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#334A58",
        marginTop:15,
    },
    containerImages:{
       marginTop:25,
       marginBottom:25,
       width,
       height,
       backgroundColor:'#334A58'
    },
    containerInfor:{
        alignItems:'center',
        backgroundColor:'#D9D9D9'
    },
    taxa:{
        fontSize:20,
        fontWeight:'600',
        marginTop:15
    },
    taxa1:{
        fontSize:20,
        fontWeight:'600',
        marginBottom:15
    },
    middle:{
        fontSize:20,
        
    },
    link:{
        fontSize:20,
        color:'#0206eb',
        textDecorationLine:'underline'
    },
    title:{
        fontSize:27,
        color:'black',
        fontWeight:'900'
    },
    title1:{
        fontSize:27,
        color:'black',
        fontWeight:'700',
        marginBottom:20
    },
    image:{
        width, 
        height, 
        resizeMode: 'cover'
    },
    scroll:{
        width,
        height
    },
    pagination:{
        flexDirection:'row', 
        position: 'absolute', 
        bottom:0, 
        alignSelf:'center'
    },
    paginText:{
        color:'#fff',
        margin:3,
    },
    paginActiveText:{
        color:'#888',
        margin:3,
    },
    sobre:{  
        backgroundColor:'#fff',
        height:45,
        width: 270,
        marginTop:10,
        borderRadius:8,
        borderWidth:1,
    },
    verRota:{
        backgroundColor:'#14BC9C',
        height:45,
        width: 270,
        marginTop:10,
        borderRadius:8,
        borderWidth:1,
    },
    voltar:{  
        backgroundColor:'#FF3030',
        height:45,
        width: 270,
        marginTop:10,
        borderRadius:8,
        borderWidth:1,
        marginBottom:30,
    },
    textoBotao:{
        fontSize:18,
        padding:8,
        fontWeight:'600',
        color:'black',
        textAlign:'center'
    }
})