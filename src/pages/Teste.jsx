import React,{useState, useEffect, useRef} from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Image, Animated} from "react-native";
import MapView, {Marker, MarkerAnimated} from "react-native-maps";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import *  as Location from 'expo-location'
import MapViewDirections from 'react-native-maps-directions';
import api from '../../config/index.json'

const Eu = {latitude:-5.114454169401474, longitude:-42.80678751534222, latitudeDelta:0.0032, longitudeDelta:0.0035}
const Alice  = {latitude: -5.014799040097355, longitude: -43.030555534705435, latitudeDelta:0.0082, longitudeDelta:0.0055};
const Chico = {latitude: -5.000577737434068,  longitude:   -42.982024312569955, latitudeDelta:0.0082, longitudeDelta:0.0055}
const Cocais = {latitude: -5.091682590432839, longitude: -42.824027336998554, latitudeDelta:0.0082, longitudeDelta:0.0055};
const Convencoes = {latitude: -5.095009608462627,    longitude: -42.82405131380548,latitudeDelta:0.0082, longitudeDelta:0.0055};
const Jericoroa = {latitude: -5.09277795569128,     longitude:   -42.81977871812526,latitudeDelta:0.0082, longitudeDelta:0.0055};
const Juventude = {latitude: -5.0946646249865735,   longitude:  -42.836622037041074,latitudeDelta:0.0082, longitudeDelta:0.0055};
const MiguelLima = {latitude: -5.1050031657056385,   longitude: -42.8271101874807,latitudeDelta:0.0082, longitudeDelta:0.0055};
const PonteMetalica = {latitude: -5.087202519172876,   longitude: -42.82500599210132,latitudeDelta:0.0082, longitudeDelta:0.0055};
const PortalAmazonia = {latitude: -5.0346987, longitude: -43.0132515,latitudeDelta:0.0082, longitudeDelta:0.0055};
const PortalSol = {latitude: -5.0040103, longitude: -42.9629141,latitudeDelta:0.0082, longitudeDelta:0.0055};
const Praca = {latitude: -5.097856423506959, longitude:  -42.82447591645458, latitudeDelta:0.0082, longitudeDelta:0.0055};
const Rodoviaria = {latitude: -5.090041369358882,    longitude: -42.83453854503971,latitudeDelta:0.0082, longitudeDelta:0.0055};
const Roncador = {latitude: -5.095095838704937,  longitude:  -42.95901965301087, latitudeDelta:0.0082, longitudeDelta:0.0055};
const Sena = {latitude: -5.06196421786934,   longitude:  -42.90140484502799,latitudeDelta:0.0082, longitudeDelta:0.0055};
const Sucupira = {latitude: -5.077368432638451,  longitude: -42.841334715344246, latitudeDelta:0.0082, longitudeDelta:0.0055};
const CentroArtesanato = {latitude: -5.090210890634855,   longitude:  -42.82738778794578, latitudeDelta:0.0082, longitudeDelta:0.0055}
const LekLek = {latitude: -4.977532424261423,    longitude: -43.060848443769025, latitudeDelta:0.0082, longitudeDelta:0.0055}
const MeninoJesus = {latitude: -5.132490450706987,    longitude:  -42.83306711564996, latitudeDelta:0.0082, longitudeDelta:0.0055}
const OsAmigos = {latitude: -4.978301986828953,    longitude: -43.06073042657791, latitudeDelta:0.0082, longitudeDelta:0.0055}
const PonteAmizade = {latitude: -5.097262188670391,   longitude:  -42.818435331836426, latitudeDelta:0.0082, longitudeDelta:0.0055}
const Sambico = {latitude: -5.090332458047968,   longitude:  -42.82479990789226, latitudeDelta:0.0082, longitudeDelta:0.0055}
const SantoAntonio = {latitude: -5.105744633248898,  longitude:  -42.82493502917901, latitudeDelta:0.0082, longitudeDelta:0.0055}
const SilvaBrito = {latitude: -5.003137796360265,   longitude:  -42.97906284746647, latitudeDelta:0.0082, longitudeDelta:0.0055}
const TemploCentral = {latitude: -5.1020533099623835,   longitude:   -42.82651218794579, latitudeDelta:0.0082, longitudeDelta:0.0055}
const Velokart = {latitude: -5.17352117470909,  longitude:   -42.839991974451785, latitudeDelta:0.0082, longitudeDelta:0.0055}

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
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
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
    const goToConvencoes = () => {
        mapRef.current.animateToRegion(Convencoes, 2 * 1000);
    };
    const goToJericoroa = () => {
        mapRef.current.animateToRegion(Jericoroa, 2 * 1000);
    };
    const goToJuventude = () => {
        mapRef.current.animateToRegion(Juventude, 2 * 1000);
    };
    const goToMiguelLima = () => {
        mapRef.current.animateToRegion(MiguelLima, 2 * 1000);
    };
    const goToPonteMetalica = () => {
        mapRef.current.animateToRegion(PonteMetalica, 2 * 1000);
    };
    const goToPonteAmizade = () => {
        mapRef.current.animateToRegion(PonteAmizade, 2 * 1000);
    };
    const goToPortalAmazonia = () => {
        mapRef.current.animateToRegion(PortalAmazonia, 2 * 1000);
    };
    const goToPortalSol = () => {
        mapRef.current.animateToRegion(PortalSol, 2 * 1000);
    };
    const goToPraca = () => {
        mapRef.current.animateToRegion(Praca, 2 * 1000);
    };
    const goToRodoviaria = () => {
        mapRef.current.animateToRegion(Rodoviaria, 2 * 1000);
    };
    const goToRoncador = () => {
        mapRef.current.animateToRegion(Roncador, 2 * 1000);
    };
    const goToSena = () => {
        mapRef.current.animateToRegion(Sena, 2 * 1000);
    };
    const goToSucupira = () => {
        mapRef.current.animateToRegion(Sucupira, 2 * 1000);
    };
    const goToCentroArtesanato = () => {
        mapRef.current.animateToRegion(CentroArtesanato, 2 * 1000);
    };
    const goToLekLek = () => {
        mapRef.current.animateToRegion(LekLek, 2 * 1000);
    };
    const goToMeninoJesus = () => {
        mapRef.current.animateToRegion(MeninoJesus, 2 * 1000);
    };
    const goToOsAmigos = () => {
        mapRef.current.animateToRegion(OsAmigos, 2 * 1000);
    };
    const goToSambico = () => {
        mapRef.current.animateToRegion(Sambico, 2 * 1000);
    };
    const goToSantoAntonio = () => {
        mapRef.current.animateToRegion(SantoAntonio, 2 * 1000);
    };
    const goToSilvaBrito = () => {
        mapRef.current.animateToRegion(SilvaBrito, 2 * 1000);
    };
    const goToTemploCentral = () => {
        mapRef.current.animateToRegion(TemploCentral, 2 * 1000);
    };
    const goToVelokart = () => {
        mapRef.current.animateToRegion(Velokart, 2 * 1000);
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
              latitudeDelta: 0.0072,
              longitudeDelta: 0.0055,
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
            showsMyLocationButton
            
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
                <Marker
                coordinate={Convencoes}
                pinColor='purple'/>
                <Marker
                coordinate={Jericoroa}
                pinColor='pink'/>
                <Marker
                coordinate={Juventude}
                pinColor='orange'/>
                <Marker
                coordinate={MiguelLima}
                pinColor='#7499d6'/>
                <Marker
                coordinate={PonteMetalica}
                pinColor='#285eb5'/>
                <Marker
                coordinate={PonteAmizade}
                pinColor='#208c2b'/>
                <Marker
                coordinate={PortalAmazonia}
                pinColor='#6042db'/>
                <Marker
                coordinate={PortalSol}
                pinColor='#2a1970'/>
                <Marker
                coordinate={Praca}
                pinColor='#521033'/>
                <Marker
                coordinate={Rodoviaria}
                pinColor='#521019'/>
                <Marker
                coordinate={Roncador}
                pinColor='#fcf7f8'/>
                <Marker
                coordinate={Sena}
                pinColor='#5c494b'/>
                <Marker
                coordinate={Sucupira}
                pinColor='#752e37'/>
                <Marker
                coordinate={CentroArtesanato}
                pinColor='#ba021a'/>
                <Marker
                coordinate={LekLek}
                pinColor='#bab402'/>
                <Marker
                coordinate={MeninoJesus}
                pinColor='#e3e07f'/>
                <Marker
                coordinate={OsAmigos}
                pinColor='#524f06'/>
                <Marker
                coordinate={Sambico}
                pinColor='#064f52'/>
                <Marker
                coordinate={SantoAntonio}
                pinColor='#4de5eb'/>
                <Marker
                coordinate={SilvaBrito}
                pinColor='#0c1f57'/>
                <Marker
                coordinate={TemploCentral}
                pinColor='#89a6fa'/>
                <Marker
                coordinate={Velokart}
                pinColor='#870000'/>

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
                    
                </View>
                
                <View style={styles.lugares} onTouchMove={goToConvencoes}>
                    
                    <Text style={styles.titleModal}>SHOPPING COCAIS</Text>
                    <Image source={cocais} style={styles.image} />
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Cocais')} 
                        style={styles.botaoIr}
                    >
                        <Text style={styles.textBotao}>IR PARA A PAGINA</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.lugares} onTouchMove={goToJericoroa}>
                    
                    <Text style={styles.titleModal}>CENTRO DE CONVENÇÕES</Text>
                    <Image source={convencao} style={styles.image} />
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Convencoes')} 
                        style={styles.botaoIr}
                    >
                        <Text style={styles.textBotao}>IR PARA A PAGINA</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.lugares} onTouchMove={goToJuventude}>
                    
                    <Text style={styles.titleModal}>"JERICOROA"</Text>
                    <Image source={jericoroa} style={styles.image} />
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Jericoroa')} 
                        style={styles.botaoIr}
                    >
                        <Text style={styles.textBotao}>IR PARA A PAGINA</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.lugares} onTouchMove={goToMiguelLima}>
                    
                    <Text style={styles.titleModal}>CENTRO DE JUVENTUDE</Text>
                    <Image source={centro} style={styles.image} />
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Juventude')} 
                        style={styles.botaoIr}
                    >
                        <Text style={styles.textBotao}>IR PARA A PAGINA</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.lugares} onTouchMove={goToPonteMetalica}>
                    
                    <Text style={styles.titleModal}>C.E. MIGUEL LIMA</Text>
                    <Image source={estadio} style={styles.image} />
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('MiguelLima')} 
                        style={styles.botaoIr}
                    >
                        <Text style={styles.textBotao}>IR PARA A PAGINA</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.lugares} onTouchMove={goToPonteAmizade}>
                    
                    <Text style={styles.titleModal}>PONTE METALICA</Text>
                    <Image source={ponteMetalica} style={styles.image} />
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('PonteMetalica')} 
                        style={styles.botaoIr}
                    >
                        <Text style={styles.textBotao}>IR PARA A PAGINA</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.lugares} onTouchMove={goToPortalAmazonia}>
                    
                    <Text style={styles.titleModal}>PONTE DA AMIZADE</Text>
                    <Image source={ponteamizade} style={styles.image} />
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('PonteAmizade')} 
                        style={styles.botaoIr}
                    >
                        <Text style={styles.textBotao}>IR PARA A PAGINA</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.lugares} onTouchMove={goToPortalSol}>
                    
                    <Text style={styles.titleModal}>PORTAL DA AMAZÔNIA</Text>
                    <Image source={portalamazonia} style={styles.image} />
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('PortalAmazonia')} 
                        style={styles.botaoIr}
                    >
                        <Text style={styles.textBotao}>IR PARA A PAGINA</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.lugares} onTouchMove={goToPraca}>
                    
                    <Text style={styles.titleModal}>PORTAL DO SOL</Text>
                    <Image source={portalsol} style={styles.image} />
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('PortalSol')} 
                        style={styles.botaoIr}
                    >
                        <Text style={styles.textBotao}>IR PARA A PAGINA</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.lugares} onTouchMove={goToRodoviaria}>
                    
                    <Text style={styles.titleModal}>PRAÇA SÃO JOSÉ</Text>
                    <Image source={praca} style={styles.image} />
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Praca')} 
                        style={styles.botaoIr}
                    >
                        <Text style={styles.textBotao}>IR PARA A PAGINA</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.lugares} onTouchMove={goToRoncador}>
                    
                    <Text style={styles.titleModal}>RODOVIÁRIA</Text>
                    <Image source={rodoviaria} style={styles.image} />
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Rodoviaria')} 
                        style={styles.botaoIr}
                    >
                        <Text style={styles.textBotao}>IR PARA A PAGINA</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.lugares} onTouchMove={goToSena}>
                    
                    <Text style={styles.titleModal}>BALNEÁRIO RONCADOR</Text>
                    <Image source={roncador} style={styles.image} />
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Roncador')} 
                        style={styles.botaoIr}
                    >
                        <Text style={styles.textBotao}>IR PARA A PAGINA</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.lugares} onTouchMove={goToSucupira}>
                    
                    <Text style={styles.titleModal}>BALNEÁRIO SENA BRASIL</Text>
                    <Image source={sena} style={styles.image} />
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Sena')} 
                        style={styles.botaoIr}
                    >
                        <Text style={styles.textBotao}>IR PARA A PAGINA</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.lugares} onTouchMove={goToCentroArtesanato}>
                    
                    <Text style={styles.titleModal}>PARQUE AMBIENTAL SUCUPIRA</Text>
                    <Image source={sucupira} style={styles.image} />
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Sucupira')} 
                        style={styles.botaoIr}
                    >
                        <Text style={styles.textBotao}>IR PARA A PAGINA</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.lugares} onTouchMove={goToLekLek}>
                    
                    <Text style={styles.titleModal}>CENTRO DE ARTESANATO</Text>
                    <Image source={centroartesanato} style={styles.image} />
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('CentroArtesanato')} 
                        style={styles.botaoIr}
                    >
                        <Text style={styles.textBotao}>IR PARA A PAGINA</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.lugares} onTouchMove={goToMeninoJesus}>
                    
                    <Text style={styles.titleModal}>BALNEÁRIO LEK LEK</Text>
                    <Image source={leklek} style={styles.image} />
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('LekLek')} 
                        style={styles.botaoIr}
                    >
                        <Text style={styles.textBotao}>IR PARA A PAGINA</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.lugares} onTouchMove={goToOsAmigos}>
                    
                    <Text style={styles.titleModal}>PARÓQUIA MENINO JESUS</Text>
                    <Image source={meninojesus} style={styles.image} />
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('MeninoJesus')} 
                        style={styles.botaoIr}
                    >
                        <Text style={styles.textBotao}>IR PARA A PAGINA</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.lugares} onTouchMove={goToSambico}>
                    
                    <Text style={styles.titleModal}>BALNEÁRIO OS AMIGOS</Text>
                    <Image source={osamigos} style={styles.image} />
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('OsAmigos')} 
                        style={styles.botaoIr}
                    >
                        <Text style={styles.textBotao}>IR PARA A PAGINA</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.lugares} onTouchMove={goToSantoAntonio}>
                    
                    <Text style={styles.titleModal}>LAGOA SAMBICO</Text>
                    <Image source={sambico} style={styles.image} />
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Sambico')} 
                        style={styles.botaoIr}
                    >
                        <Text style={styles.textBotao}>IR PARA A PAGINA</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.lugares} onTouchMove={goToSilvaBrito}>
                    
                    <Text style={styles.titleModal}>PARÓQUIA SANTO ANTÔNIO</Text>
                    <Image source={santoantonio} style={styles.image} />
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('SantoAntonio')} 
                        style={styles.botaoIr}
                    >
                        <Text style={styles.textBotao}>IR PARA A PAGINA</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.lugares} onTouchMove={goToTemploCentral}>
                    
                    <Text style={styles.titleModal}>BALNEÁRIO SILVA BRITO</Text>
                    <Image source={silvabrito} style={styles.image} />
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('SilvaBrito')} 
                        style={styles.botaoIr}
                    >
                        <Text style={styles.textBotao}>IR PARA A PAGINA</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.lugares} onTouchMove={goToVelokart}>
                    
                    <Text style={styles.titleModal}>TEMPLO CENTRAL</Text>
                    <Image source={templocentral} style={styles.image} />
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('TemploCentral')} 
                        style={styles.botaoIr}
                    >
                        <Text style={styles.textBotao}>IR PARA A PAGINA</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.lugares}>
                    
                    <Text style={styles.titleModal}>VELOKART</Text>
                    <Image source={velokart} style={styles.image} />
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Velokart')} 
                        style={styles.botaoIr}
                    >
                        <Text style={styles.textBotao}>IR PARA A PAGINA</Text>
                    </TouchableOpacity>

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
        borderRadius:8,
        elevation:10,
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
        margin:10,
        borderRadius:8,
        borderWidth:2,
        borderColor:'#252525'
    },
    textBotao:{
        fontSize:15,
        fontFamily:'BalsamiqSans_400Regular',
        textAlign:'center'
    },
})