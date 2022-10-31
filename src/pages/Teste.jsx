import React,{useState, useEffect, useRef} from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Image} from "react-native";
import MapView, {Marker, MarkerAnimated} from "react-native-maps";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import *  as Location from 'expo-location'
import MapViewDirections from 'react-native-maps-directions';
import api from '../../config/index.json'

const Eu = {latitude:-5.114454169401474, longitude:-42.80678751534222, latitudeDelta:0.042, longitudeDelta:0.035}
const Alice  = {latitude: -5.014799040097355, longitude: -43.030555534705435, latitudeDelta:0.042, longitudeDelta:0.035};
const Chico = {latitude: -5.000577737434068,  longitude:   -42.982024312569955, latitudeDelta:0.042, longitudeDelta:0.035}
const Cocais = {latitude: -5.091682590432839, longitude: -42.824027336998554, latitudeDelta:0.042, longitudeDelta:0.035};
const Convencoes = {latitude: -5.095009608462627,    longitude: -42.82405131380548};
const Jericoroa = {latitude: -5.093659589787663,    longitude:   -42.82192448531958};
const Juventude = {latitude: -5.0946646249865735,   longitude:  -42.836622037041074,};
const MiguelLima = {latitude: -5.1050031657056385,   longitude: -42.8271101874807,};
const PonteMetalica = {latitude: -5.087202519172876,   longitude: -42.82500599210132};
const PortalAmazonia = {latitude: -5.0346987, longitude: -43.0132515};
const PortalSol = {latitude: -5.0040103, longitude: -42.9629141};
const Praca = {latitude: -5.097856423506959, longitude:  -42.82447591645458};
const Rodoviaria = {latitude: -5.090041369358882,    longitude: -42.83453854503971};
const Roncador = {latitude: -5.095095838704937,  longitude:  -42.95901965301087};
const Sena = {latitude: -5.06196421786934,   longitude:  -42.90140484502799};
const Sucupira = {latitude: -5.077368432638451,  longitude: -42.841334715344246};
const CentroArtesanato = {latitude: -5.090210890634855,   longitude:  -42.82738778794578}
const LekLek = {latitude: -4.977532424261423,    longitude: -43.060848443769025}
const MeninoJesus = {latitude: -5.132490450706987,    longitude:  -42.83306711564996}
const OsAmigos = {latitude: -4.978301986828953,    longitude: -43.06073042657791}
const PonteAmizade = {latitude: -5.097262188670391,   longitude:  -42.818435331836426}
const Sambico = {latitude: -5.090332458047968,   longitude:  -42.82479990789226}
const SantoAntonio = {latitude: -5.105744633248898,  longitude:  -42.82493502917901}
const SilvaBrito = {latitude: -5.003137796360265,   longitude:  -42.97906284746647}
const TemploCentral = {latitude: -5.1020533099623835,   longitude:   -42.82651218794579}
const Velokart = {latitude: -5.17352117470909,  longitude:   -42.839991974451785}

import sena from '../images/sena.jpg'
import cocais from '../images/cocais.jpg'
import chico from '../images/chico.jpg'
import alice from  '../images/alice.jpg'
import jericoroa from '../images/jericoroa.jpg'
import portalsol from '../images/PortalSol.jpg'
import portalamazonia from '../images/PortalAmazonia.png'
import roncador from '../images/roncador.jpg'
import praca from '../images/saoJose.jpg'
import centro from '../images/centro1.jpg'
import convencao from '../images/convencao.jpg'
import estadio from '../images/estadio2.png'
import ponteMetalica from '../images/ponteMetalica1.jpg'
import sucupira from '../images/sucupira1.jpg'
import rodoviaria  from '../images/rodoviaria.jpg'
import mapa from '../images/mapa.jpg'
import santoantonio from '../images/santoantonio.jpeg'
import velokart from '../images/velokart.jpg'
import silvabrito from '../images/silvabrito.jpg'
import sambico from '../images/sambico.jpg'
import ponteamizade from '../images/ponteamizade.jpg'
import osamigos from '../images/osamigos.jpg'
import meninojesus from '../images/meninojesus.jpg'
import leklek from '../images/leklek.jpg'
import centroartesanato from '../images/centroartesanato.jpg'
import templocentral from '../images/templocentral.jpg'


export function Teste(){
    const navigation = useNavigation();
    const [location, setLocation] = useState(null);
    const mapRef = useRef(null)
    const [region, setRegion] = useState({
        latitude: 51.5079145,
        longitude: -0.0899163,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });

    const goToAlice = () => {
        mapRef.current.animateToRegion(Alice, 2 * 1000);
    };
    const goToChico = () => {
        mapRef.current.animateToRegion(Chico, 2 * 1000);
    };
    const goToCocais = () => {
        mapRef.current.animateToRegion(Cocais, 2 * 1000);
    };


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
            loadingEnabled
            ref={mapRef}
            //liteMode => para mapas mais leves 
            showsBuildings={false}
            showsCompass={true}
            scrollEnabled={false}
            zoomEnabled={false}
            showsUserLocation={true}
            showsMyLocationTouchableOpacity
            showsPointsOfInterest={false}
            //onMapLoaded={()=>alert("completo")} **para mostrar na hora que completar o carregamento
            toolbarEnabled
            style={styles.map}
            onRegionChangeComplete={(region) => setRegion(region)}
            initialRegion={location}
            >
                <Marker
                coordinate={Eu}
                pinColor='green'/>
                <Marker
                coordinate={Alice}
                pinColor='purple'/>
                <Marker
                coordinate={Chico}
                pinColor='blue'/>
                <Marker
                coordinate={Cocais}
                pinColor='yellow'/>

            </MapView>
            <ScrollView
                style={styles.scroll}
                horizontal
                pagingEnabled
                scrollsToTop
                
            >
                <View style={styles.lugares} onMoveShouldSetResponder={goToAlice} >
                    
                    <Text style={styles.titleModal}>VOCÊ ESTÁ AQUI</Text>
                    <Image source={mapa} style={styles.image} />

              
                    <View style={{height:25, width:25,marginTop:25}}>
                        <LottieView
                            source={require("../Assets/13171-forward-arrow.json")}
                            autoPlay={true}
                            loop={true}
                        />
                    </View>
                </View>

                <View style={styles.lugares} onMoveShouldSetResponder={goToChico} >
                    
                    <Text style={styles.titleModal}>SITIO ALICE</Text>
                    <Image source={alice} style={styles.image} />
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Alice')} 
                        style={styles.botaoIr}
                    >
                        <Text style={styles.textBotao}>IR PARA A PAGINA</Text>
                    </TouchableOpacity>
                    <View style={{height:10, width:10,}}>
                        <LottieView
                            source={require("../Assets/13171-forward-arrow.json")}
                            autoPlay={true}
                            loop={true}
                        />
                    </View>
                </View>

                <View style={styles.lugares} onTouchMove={goToCocais}>
                    
                    <Text style={styles.titleModal}>BALNEÁRIO SEU CHICO</Text>
                    <Image source={chico} style={styles.image} />
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Chico')} 
                        style={styles.botaoIr}
                    >
                        <Text style={styles.textBotao}>IR PARA A PAGINA</Text>
                    </TouchableOpacity>
                    <View style={{height:10, width:10,}}>
                        <LottieView
                            source={require("../Assets/13171-forward-arrow.json")}
                            autoPlay={true}
                            loop={true}
                        />
                    </View>
                </View>
                <View style={styles.lugares} >
                    
                    <Text style={styles.titleModal}>SHOPPING COCAIS</Text>
                    <Image source={cocais} style={styles.image} />
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Cocais')} 
                        style={styles.botaoIr}
                    >
                        <Text style={styles.textBotao}>IR PARA A PAGINA</Text>
                    </TouchableOpacity>
                    <View style={{height:10, width:10,}}>
                        <LottieView
                            source={require("../Assets/13171-forward-arrow.json")}
                            autoPlay={true}
                            loop={true}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
const {height, width} = Dimensions.get('window')
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    map:{
       position:'absolute',
       top:0,
       bottom:0,
       right:0,
       left:0
    },
    scroll:{
        width:'100%',
        maxHeight:250,
    },
    lugares:{
        width: width - 40,
        maxHeight:250,
        backgroundColor:'#fff',
        justifyContent:'flex-end',
        alignItems:'center',
        marginHorizontal:20,
        borderRadius:8,
        elevation:10
    },
    botaoIr:{
        width:100,
        height:40,
        backgroundColor:'#FF3030',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        marginBottom:15,
        marginRight:10
    },
    botaoMapa:{
        width:100,
        height:40,
        backgroundColor:'#FF3030',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        marginBottom:15
    },
    titleModal: {
        textAlign: "center",
        fontSize: 20,
        fontWeight:'bold',
        textDecorationLine:'underline'
    },
    image:{
        height:120,
        width:120,
        margin:10
    },
    textBotao:{
        fontSize:15,
        fontFamily:'BalsamiqSans_400Regular',
        textAlign:'center'
    },
})