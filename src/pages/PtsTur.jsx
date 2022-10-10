import React from "react";
import {View, Text, Switch, StyleSheet, Image, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native'

import { EvilIcons } from '@expo/vector-icons';

import {useNavigation} from '@react-navigation/native'


import sena from '../images/sena.jpg'
import cocais from '../images/cocais.jpg'
import chico from '../images/chico.jpg'
import alice from  '../images/alice.jpg'
import jericoroa from '../images/jericoroa.jpg'
import portalsol from '../images/PortalSol.jpg'
import portalamazonia from '../images/PortalAmazonia.png'
import roncador from '../images/roncador.jpg'
import saoJose from '../images/saoJose.jpg'

export function PtsTur(){

const navigation = useNavigation()

    return(
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.tag} onPress={()=> navigation.navigate("Sena")}>
                    <Image source={sena} style={styles.imageSmaw}></Image>
                    <Text style={styles.title1}>BALNEÁRIO SENA BRASIL</Text>
                    <EvilIcons name="arrow-right" size={30} color="black" style={{margin:5}}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tag} onPress={()=>navigation.navigate('Cocais')}>
                    <Image source={cocais} style={styles.imageSmaw}></Image>
                    <Text style={styles.title1}>COCAIS SHOPPING</Text>
                    <EvilIcons name="arrow-right" size={30} color="black" style={{margin:5}}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tag} onPress={()=>navigation.navigate('Chico')}>
                    <Image source={chico} style={styles.imageSmaw}></Image>
                    <Text style={styles.title1}>BALNEÁRIO SEU CHICO</Text>
                    <EvilIcons name="arrow-right" size={30} color="black" style={{margin:5}}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tag} onPress={()=>navigation.navigate('Alice')}>
                    <Image source={alice} style={styles.imageSmaw}></Image>
                    <Text style={styles.title1}>SÍTIO ALICE</Text>
                    <EvilIcons name="arrow-right" size={30} color="black" style={{margin:5}}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tag} onPress={()=>navigation.navigate('PortalAmazonia')}>
                    <Image source={portalamazonia} style={styles.imageSmaw}></Image>
                    <Text style={styles.title1}>PORTAL DA AMAZÔNIA</Text>
                    <EvilIcons name="arrow-right" size={30} color="black" style={{margin:5}} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.tag} onPress={()=>navigation.navigate('PortalSol')}>
                    <Image source={portalsol} style={styles.imageSmaw}></Image>
                    <Text style={styles.title1}>BALNEÁRIO PORTAL DO SOL</Text>
                    <EvilIcons name="arrow-right" size={30} color="black" style={{margin:5}} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.tag} onPress={()=>navigation.navigate('Jericoroa')}>
                    <Image source={jericoroa} style={styles.imageSmaw}></Image>
                    <Text style={styles.title1}>"JERICOROA"</Text>
                    <EvilIcons name="arrow-right" size={30} color="black" style={{margin:5}} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.tag} onPress={()=>navigation.navigate('Roncador')}>
                    <Image source={roncador} style={styles.imageSmaw}></Image>
                    <Text style={styles.title1}>RONCADOR</Text>
                    <EvilIcons name="arrow-right" size={30} color="black" style={{margin:5}} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.tagLast} onPress={()=>navigation.navigate('PracaSaoJose')}>
                    <Image source={saoJose} style={styles.imageSmaw}></Image>
                    <Text style={styles.title1}>PRAÇA SÃO JOSÉ</Text>
                    <EvilIcons name="arrow-right" size={30} color="black" style={{margin:5}} />
            </TouchableOpacity>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#334A58",
        padding:5,
    },
    title:{
        fontSize:25,
        color:'black'
    },
    imagem:{
        width:150,
        height:150,
    },
    tag:{
        backgroundColor:'#fff',
        width:'100%',
        alignItems:'center',
        height:75,
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:1,
        margin:5
    },
    tagLast:{
        backgroundColor:'#fff',
        width:'100%',
        alignItems:'center',
        height:75,
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:1,
        margin:5,
        marginBottom:20
    },
    imageSmaw:{
        height:55,
        width:55,
        margin:5
    },
    title1:{
        fontSize:18,
        fontWeight:'500',
        margin:5
    }

})