import { addListener } from "expo-updates";
import React, {Component, useState} from "react";
import {View, ScrollView, Image, StyleSheet, Text, Dimensions, Modal, TouchableOpacity} from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";


import sena from '../../images/sena.jpg'
import cocais from '../../images/cocais.jpg'
import chico from '../../images/chico.jpg'
import alice from  '../../images/alice.jpg'
import jericoroa from '../../images/jericoroa.jpg'
import portalsol from '../../images/PortalSol.jpg'
import portalamazonia from '../../images/PortalAmazonia.png'
import roncador from '../../images/roncador.jpg'
import praca from '../../images/saoJose.jpg'
import centro from '../../images/centro1.jpg'
import convencao from '../../images/convencao.jpg'
import estadio from '../../images/estadio2.png'
import ponteMetalica from '../../images/ponteMetalica1.jpg'
import sucupira from '../../images/sucupira1.jpg'
import rodoviaria  from '../../images/rodoviaria.jpg'
import mapa from '../../images/mapa.jpg'
import santoantonio from '../../images/santoantonio.jpeg'
import velokart from '../../images/velokart.jpg'
import silvabrito from '../../images/silvabrito.jpg'
import sambico from '../../images/sambico.jpg'
import ponteamizade from '../../images/ponteamizade.jpg'
import osamigos from '../../images/osamigos.jpg'
import meninojesus from '../../images/meninojesus.jpg'
import leklek from '../../images/leklek.jpg'
import centroartesanato from '../../images/centroartesanato.jpg'
import templocentral from '../../images/templocentral.jpg'


const Alice  = {latitude: -5.014799040097355, longitude: -43.030555534705435};
const Chico = {latitude: -5.000577737434068,  longitude:   -42.982024312569955,}
const Cocais = {latitude: -5.091682590432839, longitude: -42.824027336998554};
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

export function Todos(){
    const Navigation = useNavigation()
    const [Modal1Visible, setModal1Visible] = useState(false)
    const [Modal2Visible, setModal2Visible] = useState(false)
    const [Modal3Visible, setModal3Visible] = useState(false)
    const [Modal4Visible, setModal4Visible] = useState(false)
    const [Modal5Visible, setModal5Visible] = useState(false)
    const [Modal6Visible, setModal6Visible] = useState(false)
    const [Modal7Visible, setModal7Visible] = useState(false)
    const [Modal8Visible, setModal8Visible] = useState(false)
    const [Modal9Visible, setModal9Visible] = useState(false)
    const [Modal10Visible, setModal10Visible] = useState(false)
    const [Modal11Visible, setModal11Visible] = useState(false)
    const [Modal12Visible, setModal12Visible] = useState(false)
    const [Modal13Visible, setModal13Visible] = useState(false)
    const [Modal14Visible, setModal14Visible] = useState(false)
    const [Modal15Visible, setModal15Visible] = useState(false)
    const [Modal16Visible, setModal16Visible] = useState(false)
    const [Modal17Visible, setModal17Visible] = useState(false)
    const [Modal18Visible, setModal18Visible] = useState(false)
    const [Modal19Visible, setModal19Visible] = useState(false)
    const [Modal20Visible, setModal20Visible] = useState(false)
    const [Modal21Visible, setModal21Visible] = useState(false)
    const [Modal22Visible, setModal22Visible] = useState(false)
    const [Modal23Visible, setModal23Visible] = useState(false)
    const [Modal24Visible, setModal24Visible] = useState(false)
    const [Modal25Visible, setModal25Visible] = useState(false)
    return(
        <View style={styles.container}>

            <Modal
            animationType="slide"
            visible={Modal1Visible}
            statusBarTranslucent={false}
            transparent={true}
            style={{}}
            
            >
            <View style={styles.modal}>
            <View
                    style={{ flexDirection: "row", justifyContent: "center", alignItems:'center', backgroundColor: "#fff",elevation:10, borderRadius:8}}
                    >
                    <Text style={styles.titleModal}>SÍTIO ALICE:</Text>
                    <TouchableOpacity onPress={()=>setModal1Visible(false)}>
                    <LottieView
                        source={require("../../Assets/28566-to-x.json")}
                        autoPlay={true}
                        loop={true}
                        style={{ width: 50, height: 50, marginLeft:20 }}
                    />
                    </TouchableOpacity>
                </View>
                <Image source={alice} style={styles.image}/>
                <TouchableOpacity
                onPress={() =>
                    Navigation.navigate("Alice") || setModal1Visible(false)
                }
                style={styles.botaoModalAlerta}
                >
                <Text style={styles.textBotao}>VER MAIS</Text>
                </TouchableOpacity>
                </View>
            </Modal>

            <Modal
            animationType="slide"
            visible={Modal2Visible}
            statusBarTranslucent={false}
            transparent={true}
            style={{}}
            >
            <View style={styles.modal}>
            <View
                    style={{ flexDirection: "row", justifyContent: "center", alignItems:'center', backgroundColor: "#fff",elevation:10, borderRadius:8}}
                    >
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.titleModal}>BALNEÁRIO</Text>
                            <Text style={styles.titleModal}>SEU CHICO</Text>
                        </View>
                    <TouchableOpacity onPress={()=>setModal2Visible(false)}>
                    <LottieView
                        source={require("../../Assets/28566-to-x.json")}
                        autoPlay={true}
                        loop={true}
                        style={{ width: 50, height: 50, marginLeft:20 }}
                    />
                    </TouchableOpacity>
                </View>
                <Image source={chico} style={styles.image}/>
                <TouchableOpacity
                onPress={() =>
                    Navigation.navigate("Chico") || setModal2Visible(false)
                }
                style={styles.botaoModalAlerta}
                >
                <Text style={styles.textBotao}>VER MAIS</Text>
                </TouchableOpacity>
                </View>
            </Modal>

            <Modal
            animationType="slide"
            visible={Modal3Visible}
            statusBarTranslucent={false}
            transparent={true}
            style={{}}
            >
            <View style={styles.modal}>
            <View
                    style={{ flexDirection: "row", justifyContent: "center", alignItems:'center', backgroundColor: "#fff",elevation:10, borderRadius:8}}
                    >
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.titleModal}>SHOPPING</Text>
                            <Text style={styles.titleModal}>COCAIS</Text>
                        </View>
                    <TouchableOpacity onPress={()=>setModal3Visible(false)}>
                    <LottieView
                        source={require("../../Assets/28566-to-x.json")}
                        autoPlay={true}
                        loop={true}
                        style={{ width: 50, height: 50, marginLeft:20 }}
                    />
                    </TouchableOpacity>
                </View>
                <Image source={cocais} style={styles.image}/>
                <TouchableOpacity
                onPress={() =>
                    Navigation.navigate("Cocais") || setModal3Visible(false)
                }
                style={styles.botaoModalAlerta}
                >
                <Text style={styles.textBotao}>VER MAIS</Text>
                </TouchableOpacity>
                </View>
            </Modal>

            <Modal
            animationType="slide"
            visible={Modal4Visible}
            statusBarTranslucent={false}
            transparent={true}
            style={{}}
            >
            <View style={styles.modal}>
            <View
                    style={{ flexDirection: "row", justifyContent: "center", alignItems:'center', backgroundColor: "#fff",elevation:10, borderRadius:8}}
                    >
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.titleModal}>C. CONVENÇÕES</Text>
                          
                        </View>
                    <TouchableOpacity onPress={()=>setModal4Visible(false)}>
                    <LottieView
                        source={require("../../Assets/28566-to-x.json")}
                        autoPlay={true}
                        loop={true}
                        style={{ width: 50, height: 50, marginLeft:20 }}
                    />
                    </TouchableOpacity>
                </View>
                <Image source={convencao} style={styles.image}/>
                <TouchableOpacity
                onPress={() =>
                    Navigation.navigate("Convencoes") || setModal4Visible(false)
                }
                style={styles.botaoModalAlerta}
                >
                <Text style={styles.textBotao}>VER MAIS</Text>
                </TouchableOpacity>
                </View>
            </Modal>

            <Modal
            animationType="slide"
            visible={Modal5Visible}
            statusBarTranslucent={false}
            transparent={true}
            style={{}}
            >
            <View style={styles.modal}>
            <View
                    style={{ flexDirection: "row", justifyContent: "center", alignItems:'center', backgroundColor: "#fff",elevation:10, borderRadius:8}}
                    >
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.titleModal}>JERICOROA</Text>
                          
                        </View>
                    <TouchableOpacity onPress={()=>setModal5Visible(false)}>
                    <LottieView
                        source={require("../../Assets/28566-to-x.json")}
                        autoPlay={true}
                        loop={true}
                        style={{ width: 50, height: 50, marginLeft:20 }}
                    />
                    </TouchableOpacity>
                </View>
                <Image source={jericoroa} style={styles.image}/>
                <TouchableOpacity
                onPress={() =>
                    Navigation.navigate("Jericoroa") || setModal5Visible(false)
                }
                style={styles.botaoModalAlerta}
                >
                <Text style={styles.textBotao}>VER MAIS</Text>
                </TouchableOpacity>
                </View>
            </Modal>

            <Modal
            animationType="slide"
            visible={Modal6Visible}
            statusBarTranslucent={false}
            transparent={true}
            style={{}}
            >
            <View style={styles.modal}>
            <View
                    style={{ flexDirection: "row", justifyContent: "center", alignItems:'center', backgroundColor: "#fff",elevation:10, borderRadius:8}}
                    >
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.titleModal}>C. JUVENTUDE</Text>
                          
                        </View>
                    <TouchableOpacity onPress={()=>setModal6Visible(false)}>
                    <LottieView
                        source={require("../../Assets/28566-to-x.json")}
                        autoPlay={true}
                        loop={true}
                        style={{ width: 50, height: 50, marginLeft:20 }}
                    />
                    </TouchableOpacity>
                </View>
                <Image source={centro} style={styles.image}/>
                <TouchableOpacity
                onPress={() =>
                    Navigation.navigate("Juventude") || setModal6Visible(false)
                }
                style={styles.botaoModalAlerta}
                >
                <Text style={styles.textBotao}>VER MAIS</Text>
                </TouchableOpacity>
                </View>
            </Modal>

            <Modal
            animationType="slide"
            visible={Modal7Visible}
            statusBarTranslucent={false}
            transparent={true}
            style={{}}
            >
            <View style={styles.modal}>
            <View
                    style={{ flexDirection: "row", justifyContent: "center", alignItems:'center', backgroundColor: "#fff",elevation:10, borderRadius:8}}
                    >
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.titleModal}>MIGUEL LIMA</Text>
                          
                        </View>
                    <TouchableOpacity onPress={()=>setModal7Visible(false)}>
                    <LottieView
                        source={require("../../Assets/28566-to-x.json")}
                        autoPlay={true}
                        loop={true}
                        style={{ width: 50, height: 50, marginLeft:20 }}
                    />
                    </TouchableOpacity>
                </View>
                <Image source={estadio} style={styles.image}/>
                <TouchableOpacity
                onPress={() =>
                    Navigation.navigate("MiguelLima") || setModal7Visible(false)
                }
                style={styles.botaoModalAlerta}
                >
                <Text style={styles.textBotao}>VER MAIS</Text>
                </TouchableOpacity>
                </View>
            </Modal>

            <Modal
            animationType="slide"
            visible={Modal8Visible}
            statusBarTranslucent={false}
            transparent={true}
            style={{}}
            >
            <View style={styles.modal}>
            <View
                    style={{ flexDirection: "row", justifyContent: "center", alignItems:'center', backgroundColor: "#fff",elevation:10, borderRadius:8}}
                    >
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.titleModal}>PONTE</Text>
                            <Text style={styles.titleModal}>METALICA</Text>
                          
                        </View>
                    <TouchableOpacity onPress={()=>setModal8Visible(false)}>
                    <LottieView
                        source={require("../../Assets/28566-to-x.json")}
                        autoPlay={true}
                        loop={true}
                        style={{ width: 50, height: 50, marginLeft:20 }}
                    />
                    </TouchableOpacity>
                </View>
                <Image source={ponteMetalica} style={styles.image}/>
                <TouchableOpacity
                onPress={() =>
                    Navigation.navigate("PonteMetalica") || setModal8Visible(false)
                }
                style={styles.botaoModalAlerta}
                >
                <Text style={styles.textBotao}>VER MAIS</Text>
                </TouchableOpacity>
                </View>
            </Modal>

            <Modal
            animationType="slide"
            visible={Modal9Visible}
            statusBarTranslucent={false}
            transparent={true}
            style={{}}
            >
            <View style={styles.modal}>
            <View
                    style={{ flexDirection: "row", justifyContent: "center", alignItems:'center', backgroundColor: "#fff",elevation:10, borderRadius:8}}
                    >
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.titleModal}>PORTAL DA </Text>
                            <Text style={styles.titleModal}>AMAZÔNIA</Text>
                          
                        </View>
                    <TouchableOpacity onPress={()=>setModal9Visible(false)}>
                    <LottieView
                        source={require("../../Assets/28566-to-x.json")}
                        autoPlay={true}
                        loop={true}
                        style={{ width: 50, height: 50, marginLeft:20 }}
                    />
                    </TouchableOpacity>
                </View>
                <Image source={portalamazonia} style={styles.image}/>
                <TouchableOpacity
                onPress={() =>
                    Navigation.navigate("PortalAmazonia") || setModal9Visible(false)
                }
                style={styles.botaoModalAlerta}
                >
                <Text style={styles.textBotao}>VER MAIS</Text>
                </TouchableOpacity>
                </View>
            </Modal>

            <Modal
            animationType="slide"
            visible={Modal10Visible}
            statusBarTranslucent={false}
            transparent={true}
            style={{}}
            >
            <View style={styles.modal}>
            <View
                    style={{ flexDirection: "row", justifyContent: "center", alignItems:'center', backgroundColor: "#fff",elevation:10, borderRadius:8}}
                    >
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.titleModal}> PORTAL </Text>
                            <Text style={styles.titleModal}>DO SOL</Text>
                          
                        </View>
                    <TouchableOpacity onPress={()=>setModal10Visible(false)}>
                    <LottieView
                        source={require("../../Assets/28566-to-x.json")}
                        autoPlay={true}
                        loop={true}
                        style={{ width: 50, height: 50, marginLeft:20 }}
                    />
                    </TouchableOpacity>
                </View>
                <Image source={portalsol} style={styles.image}/>
                <TouchableOpacity
                onPress={() =>
                    Navigation.navigate("PortalSol") || setModal10Visible(false)
                }
                style={styles.botaoModalAlerta}
                >
                <Text style={styles.textBotao}>VER MAIS</Text>
                </TouchableOpacity>
                </View>
            </Modal>

            <Modal
            animationType="slide"
            visible={Modal11Visible}
            statusBarTranslucent={false}
            transparent={true}
            style={{}}
            >
            <View style={styles.modal}>
            <View
                    style={{ flexDirection: "row", justifyContent: "center", alignItems:'center', backgroundColor: "#fff",elevation:10, borderRadius:8}}
                    >
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.titleModal}> PRAÇA </Text>
                            <Text style={styles.titleModal}>SÃO JOSÉ</Text>
                          
                        </View>
                    <TouchableOpacity onPress={()=>setModal11Visible(false)}>
                    <LottieView
                        source={require("../../Assets/28566-to-x.json")}
                        autoPlay={true}
                        loop={true}
                        style={{ width: 50, height: 50, marginLeft:20 }}
                    />
                    </TouchableOpacity>
                </View>
                <Image source={praca} style={styles.image}/>
                <TouchableOpacity
                onPress={() =>
                    Navigation.navigate("PracaSaoJose") || setModal11Visible(false)
                }
                style={styles.botaoModalAlerta}
                >
                <Text style={styles.textBotao}>VER MAIS</Text>
                </TouchableOpacity>
                </View>
            </Modal>

            <Modal
            animationType="slide"
            visible={Modal12Visible}
            statusBarTranslucent={false}
            transparent={true}
            style={{}}
            >
            <View style={styles.modal}>
            <View
                    style={{ flexDirection: "row", justifyContent: "center", alignItems:'center', backgroundColor: "#fff",elevation:10, borderRadius:8}}
                    >
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.titleModal}> TERMINAL </Text>
                            <Text style={styles.titleModal}>RODOVIÁRIO</Text>
                          
                        </View>
                    <TouchableOpacity onPress={()=>setModal12Visible(false)}>
                    <LottieView
                        source={require("../../Assets/28566-to-x.json")}
                        autoPlay={true}
                        loop={true}
                        style={{ width: 50, height: 50, marginLeft:20 }}
                    />
                    </TouchableOpacity>
                </View>
                <Image source={rodoviaria} style={styles.image}/>
                <TouchableOpacity
                onPress={() =>
                    Navigation.navigate("Rodoviaria") || setModal12Visible(false)
                }
                style={styles.botaoModalAlerta}
                >
                <Text style={styles.textBotao}>VER MAIS</Text>
                </TouchableOpacity>
                </View>
            </Modal>

            <Modal
            animationType="slide"
            visible={Modal13Visible}
            statusBarTranslucent={false}
            transparent={true}
            style={{}}
            >
            <View style={styles.modal}>
            <View
                    style={{ flexDirection: "row", justifyContent: "center", alignItems:'center', backgroundColor: "#fff",elevation:10, borderRadius:8}}
                    >
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.titleModal}> BALNEÁRIO </Text>
                            <Text style={styles.titleModal}>RONCADOR</Text>
                          
                        </View>
                    <TouchableOpacity onPress={()=>setModal13Visible(false)}>
                    <LottieView
                        source={require("../../Assets/28566-to-x.json")}
                        autoPlay={true}
                        loop={true}
                        style={{ width: 50, height: 50, marginLeft:20 }}
                    />
                    </TouchableOpacity>
                </View>
                <Image source={roncador} style={styles.image}/>
                <TouchableOpacity
                onPress={() =>
                    Navigation.navigate("Roncador") || setModal13Visible(false)
                }
                style={styles.botaoModalAlerta}
                >
                <Text style={styles.textBotao}>VER MAIS</Text>
                </TouchableOpacity>
                </View>
            </Modal>


            <Modal
            animationType="slide"
            visible={Modal14Visible}
            statusBarTranslucent={false}
            transparent={true}
            style={{}}
            >
            <View style={styles.modal}>
            <View
                    style={{ flexDirection: "row", justifyContent: "center", alignItems:'center', backgroundColor: "#fff",elevation:10, borderRadius:8}}
                    >
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.titleModal}> BALNEÁRIO </Text>
                            <Text style={styles.titleModal}>SENA BRASIL</Text>
                          
                        </View>
                    <TouchableOpacity onPress={()=>setModal14Visible(false)}>
                    <LottieView
                        source={require("../../Assets/28566-to-x.json")}
                        autoPlay={true}
                        loop={true}
                        style={{ width: 50, height: 50, marginLeft:20 }}
                    />
                    </TouchableOpacity>
                </View>
                <Image source={sena} style={styles.image}/>
                <TouchableOpacity
                onPress={() =>
                    Navigation.navigate("Sena") || setModal14Visible(false)
                }
                style={styles.botaoModalAlerta}
                >
                <Text style={styles.textBotao}>VER MAIS</Text>
                </TouchableOpacity>
                </View>
            </Modal>

            <Modal
            animationType="slide"
            visible={Modal15Visible}
            statusBarTranslucent={false}
            transparent={true}
            style={{}}
            >
            <View style={styles.modal}>
            <View
                    style={{ flexDirection: "row", justifyContent: "center", alignItems:'center', backgroundColor: "#fff",elevation:10, borderRadius:8}}
                    >
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.titleModal}> PARQUE </Text>
                            <Text style={styles.titleModal}>SUCUPIRA</Text>
                          
                        </View>
                    <TouchableOpacity onPress={()=>setModal15Visible(false)}>
                    <LottieView
                        source={require("../../Assets/28566-to-x.json")}
                        autoPlay={true}
                        loop={true}
                        style={{ width: 50, height: 50, marginLeft:20 }}
                    />
                    </TouchableOpacity>
                </View>
                <Image source={sucupira} style={styles.image}/>
                <TouchableOpacity
                onPress={() =>
                    Navigation.navigate("Sucupira") || setModal15Visible(false)
                }
                style={styles.botaoModalAlerta}
                >
                <Text style={styles.textBotao}>VER MAIS</Text>
                </TouchableOpacity>
                </View>
            </Modal>

            <Modal
            animationType="slide"
            visible={Modal16Visible}
            statusBarTranslucent={false}
            transparent={true}
            style={{}}
            >
            <View style={styles.modal}>
            <View
                    style={{ flexDirection: "row", justifyContent: "center", alignItems:'center', backgroundColor: "#fff",elevation:10, borderRadius:8}}
                    >
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.titleModal}> CENTRO  </Text>
                            <Text style={styles.titleModal}>ARTESANATO</Text>
                          
                        </View>
                    <TouchableOpacity onPress={()=>setModal16Visible(false)}>
                    <LottieView
                        source={require("../../Assets/28566-to-x.json")}
                        autoPlay={true}
                        loop={true}
                        style={{ width: 50, height: 50, marginLeft:20 }}
                    />
                    </TouchableOpacity>
                </View>
                <Image source={centroartesanato} style={styles.image}/>
                <TouchableOpacity
                onPress={() =>
                    Navigation.navigate("CentroArtesanato") || setModal16Visible(false)
                }
                style={styles.botaoModalAlerta}
                >
                <Text style={styles.textBotao}>VER MAIS</Text>
                </TouchableOpacity>
                </View>
            </Modal>

            <Modal
            animationType="slide"
            visible={Modal17Visible}
            statusBarTranslucent={false}
            transparent={true}
            style={{}}
            >
            <View style={styles.modal}>
            <View
                    style={{ flexDirection: "row", justifyContent: "center", alignItems:'center', backgroundColor: "#fff",elevation:10, borderRadius:8}}
                    >
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.titleModal}>PARÓQUIA</Text>
                            <Text style={styles.titleModal}>SANTO ANTÔNIO</Text>
                          
                        </View>
                    <TouchableOpacity onPress={()=>setModal17Visible(false)}>
                    <LottieView
                        source={require("../../Assets/28566-to-x.json")}
                        autoPlay={true}
                        loop={true}
                        style={{ width: 50, height: 50, marginLeft:20 }}
                    />
                    </TouchableOpacity>
                </View>
                <Image source={santoantonio} style={styles.image}/>
                <TouchableOpacity
                onPress={() =>
                    Navigation.navigate("SantoAntonio") || setModal17Visible(false)
                }
                style={styles.botaoModalAlerta}
                >
                <Text style={styles.textBotao}>VER MAIS</Text>
                </TouchableOpacity>
                </View>
            </Modal>

            <Modal
            animationType="slide"
            visible={Modal18Visible}
            statusBarTranslucent={false}
            transparent={true}
            style={{}}
            >
            <View style={styles.modal}>
            <View
                    style={{ flexDirection: "row", justifyContent: "center", alignItems:'center', backgroundColor: "#fff",elevation:10, borderRadius:8}}
                    >
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.titleModal}>VELOKART</Text>
                            <Text style={styles.titleModal}></Text>
                          
                        </View>
                    <TouchableOpacity onPress={()=>setModal18Visible(false)}>
                    <LottieView
                        source={require("../../Assets/28566-to-x.json")}
                        autoPlay={true}
                        loop={true}
                        style={{ width: 50, height: 50, marginLeft:20 }}
                    />
                    </TouchableOpacity>
                </View>
                <Image source={velokart} style={styles.image}/>
                <TouchableOpacity
                onPress={() =>
                    Navigation.navigate("Velokart") || setModal18Visible(false)
                }
                style={styles.botaoModalAlerta}
                >
                <Text style={styles.textBotao}>VER MAIS</Text>
                </TouchableOpacity>
                </View>
            </Modal>

            <Modal
            animationType="slide"
            visible={Modal19Visible}
            statusBarTranslucent={false}
            transparent={true}
            style={{}}
            >
            <View style={styles.modal}>
            <View
                    style={{ flexDirection: "row", justifyContent: "center", alignItems:'center', backgroundColor: "#fff",elevation:10, borderRadius:8}}
                    >
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.titleModal}>BALNEÁRIO</Text>
                            <Text style={styles.titleModal}>SILVA BRITO</Text>
                          
                        </View>
                    <TouchableOpacity onPress={()=>setModal19Visible(false)}>
                    <LottieView
                        source={require("../../Assets/28566-to-x.json")}
                        autoPlay={true}
                        loop={true}
                        style={{ width: 50, height: 50, marginLeft:20 }}
                    />
                    </TouchableOpacity>
                </View>
                <Image source={silvabrito} style={styles.image}/>
                <TouchableOpacity
                onPress={() =>
                    Navigation.navigate("SilvaBrito") || setModal19Visible(false)
                }
                style={styles.botaoModalAlerta}
                >
                <Text style={styles.textBotao}>VER MAIS</Text>
                </TouchableOpacity>
                </View>
            </Modal>

            <Modal
            animationType="slide"
            visible={Modal20Visible}
            statusBarTranslucent={false}
            transparent={true}
            style={{}}
            >
            <View style={styles.modal}>
            <View
                    style={{ flexDirection: "row", justifyContent: "center", alignItems:'center', backgroundColor: "#fff",elevation:10, borderRadius:8}}
                    >
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.titleModal}>LAGOA</Text>
                            <Text style={styles.titleModal}>SAMBICO</Text>
                          
                        </View>
                    <TouchableOpacity onPress={()=>setModal20Visible(false)}>
                    <LottieView
                        source={require("../../Assets/28566-to-x.json")}
                        autoPlay={true}
                        loop={true}
                        style={{ width: 50, height: 50, marginLeft:20 }}
                    />
                    </TouchableOpacity>
                </View>
                <Image source={sambico} style={styles.image}/>
                <TouchableOpacity
                onPress={() =>
                    Navigation.navigate("Sambico") || setModal20Visible(false)
                }
                style={styles.botaoModalAlerta}
                >
                <Text style={styles.textBotao}>VER MAIS</Text>
                </TouchableOpacity>
                </View>
            </Modal>

            <Modal
            animationType="slide"
            visible={Modal21Visible}
            statusBarTranslucent={false}
            transparent={true}
            style={{}}
            >
            <View style={styles.modal}>
            <View
                    style={{ flexDirection: "row", justifyContent: "center", alignItems:'center', backgroundColor: "#fff",elevation:10, borderRadius:8}}
                    >
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.titleModal}>PONTE</Text>
                            <Text style={styles.titleModal}>AMIZADE</Text>
                          
                        </View>
                    <TouchableOpacity onPress={()=>setModal21Visible(false)}>
                    <LottieView
                        source={require("../../Assets/28566-to-x.json")}
                        autoPlay={true}
                        loop={true}
                        style={{ width: 50, height: 50, marginLeft:20 }}
                    />
                    </TouchableOpacity>
                </View>
                <Image source={ponteamizade} style={styles.image}/>
                <TouchableOpacity
                onPress={() =>
                    Navigation.navigate("PonteAmizade") || setModal21Visible(false)
                }
                style={styles.botaoModalAlerta}
                >
                <Text style={styles.textBotao}>VER MAIS</Text>
                </TouchableOpacity>
                </View>
            </Modal>

            <Modal
            animationType="slide"
            visible={Modal22Visible}
            statusBarTranslucent={false}
            transparent={true}
            style={{}}
            >
            <View style={styles.modal}>
            <View
                    style={{ flexDirection: "row", justifyContent: "center", alignItems:'center', backgroundColor: "#fff",elevation:10, borderRadius:8}}
                    >
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.titleModal}>SÍTIO</Text>
                            <Text style={styles.titleModal}>OS AMIGOS</Text>
                          
                        </View>
                    <TouchableOpacity onPress={()=>setModal22Visible(false)}>
                    <LottieView
                        source={require("../../Assets/28566-to-x.json")}
                        autoPlay={true}
                        loop={true}
                        style={{ width: 50, height: 50, marginLeft:20 }}
                    />
                    </TouchableOpacity>
                </View>
                <Image source={osamigos} style={styles.image}/>
                <TouchableOpacity
                onPress={() =>
                    Navigation.navigate("OsAmigos") || setModal22Visible(false)
                }
                style={styles.botaoModalAlerta}
                >
                <Text style={styles.textBotao}>VER MAIS</Text>
                </TouchableOpacity>
                </View>
            </Modal>

            <Modal
            animationType="slide"
            visible={Modal23Visible}
            statusBarTranslucent={false}
            transparent={true}
            style={{}}
            >
            <View style={styles.modal}>
            <View
                    style={{ flexDirection: "row", justifyContent: "center", alignItems:'center', backgroundColor: "#fff",elevation:10, borderRadius:8}}
                    >
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.titleModal}>PAROQUIA</Text>
                            <Text style={styles.titleModal}>MENINO JESUS</Text>
                          
                        </View>
                    <TouchableOpacity onPress={()=>setModal23Visible(false)}>
                    <LottieView
                        source={require("../../Assets/28566-to-x.json")}
                        autoPlay={true}
                        loop={true}
                        style={{ width: 50, height: 50, marginLeft:20 }}
                    />
                    </TouchableOpacity>
                </View>
                <Image source={meninojesus} style={styles.image}/>
                <TouchableOpacity
                onPress={() =>
                    Navigation.navigate("MeninoJesus") || setModal23Visible(false)
                }
                style={styles.botaoModalAlerta}
                >
                <Text style={styles.textBotao}>VER MAIS</Text>
                </TouchableOpacity>
                </View>
            </Modal>

            <Modal
            animationType="slide"
            visible={Modal24Visible}
            statusBarTranslucent={false}
            transparent={true}
            style={{}}
            >
            <View style={styles.modal}>
            <View
                    style={{ flexDirection: "row", justifyContent: "center", alignItems:'center', backgroundColor: "#fff",elevation:10, borderRadius:8}}
                    >
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.titleModal}>BALNEÁRIO</Text>
                            <Text style={styles.titleModal}>LEK LEK</Text>
                          
                        </View>
                    <TouchableOpacity onPress={()=>setModal24Visible(false)}>
                    <LottieView
                        source={require("../../Assets/28566-to-x.json")}
                        autoPlay={true}
                        loop={true}
                        style={{ width: 50, height: 50, marginLeft:20 }}
                    />
                    </TouchableOpacity>
                </View>
                <Image source={leklek} style={styles.image}/>
                <TouchableOpacity
                onPress={() =>
                    Navigation.navigate("LekLek") || setModal24Visible(false)
                }
                style={styles.botaoModalAlerta}
                >
                <Text style={styles.textBotao}>VER MAIS</Text>
                </TouchableOpacity>
                </View>
            </Modal>

            <Modal
            animationType="slide"
            visible={Modal25Visible}
            statusBarTranslucent={false}
            transparent={true}
            style={{}}
            >
            <View style={styles.modal}>
            <View
                    style={{ flexDirection: "row", justifyContent: "center", alignItems:'center', backgroundColor: "#fff",elevation:10, borderRadius:8}}
                    >
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.titleModal}>TEMPLO</Text>
                            <Text style={styles.titleModal}>CENTRAL</Text>
                          
                        </View>
                    <TouchableOpacity onPress={()=>setModal25Visible(false)}>
                    <LottieView
                        source={require("../../Assets/28566-to-x.json")}
                        autoPlay={true}
                        loop={true}
                        style={{ width: 50, height: 50, marginLeft:20 }}
                    />
                    </TouchableOpacity>
                </View>
                <Image source={templocentral} style={styles.image}/>
                <TouchableOpacity
                onPress={() =>
                    Navigation.navigate("TemploCentral") || setModal25Visible(false)
                }
                style={styles.botaoModalAlerta}
                >
                <Text style={styles.textBotao}>VER MAIS</Text>
                </TouchableOpacity>
                </View>
            </Modal>




            <MapView
            style={styles.map}
            initialRegion={{
              latitude: -5.101748431435542, 
              longitude: -42.83221346763411,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
                coordinate={Alice}
                title='Sitio Alice'
                onPress={()=>setModal1Visible(true)}
            />
            <Marker
                coordinate={Chico}
                title='Balneário Seu Chico'
                onPress={()=>setModal2Visible(true)}
            />
            <Marker
                coordinate={Cocais}
                title='Shopping Cocais'
                onPress={()=>setModal3Visible(true)}
            />
            <Marker
                coordinate={Convencoes}
                title='Centro de Convenções Maranhenses'
                onPress={()=>setModal4Visible(true)}
            />
            <Marker
                coordinate={Jericoroa}
                title='Bar Jeri Coroa'
                onPress={()=>setModal5Visible(true)}
            />
            <Marker
                coordinate={Juventude}
                title='Centro da Juventude Francisco Carlos Jansen'
                onPress={()=>setModal6Visible(true)}
            />
            <Marker
                coordinate={MiguelLima}
                title='Centro esportivo Miguel Lima'
                onPress={()=>setModal7Visible(true)}
            />
            <Marker
                coordinate={PonteMetalica}
                title='Ponte Metalica João Luís Ferreira'
                onPress={()=>setModal8Visible(true)}
            />
            <Marker
                coordinate={PortalAmazonia}
                title='Portal da Amazônia'
                onPress={()=>setModal9Visible(true)}
            />
            <Marker
                coordinate={PortalSol}
                title='Portal do Sol'
                onPress={()=>setModal10Visible(true)}
            />
            <Marker
                coordinate={Praca}
                title='Praça São José'
                onPress={()=>setModal11Visible(true)}
            />
            <Marker
                coordinate={Rodoviaria}
                title='Terminal Rodoviario Gov. Nunes Freire'
                onPress={()=>setModal12Visible(true)}
            />
            <Marker
                coordinate={Roncador}
                title='Balneário Roncador'
                onPress={()=>setModal13Visible(true)}
            />
            <Marker
                coordinate={Sena}
                title='Balneário Sena Brasil'
                onPress={()=>setModal14Visible(true)}
            />
            <Marker
                coordinate={Sucupira}
                title='Parque Ambiental Sucupira'
                onPress={()=>setModal15Visible(true)}
            />
            <Marker
                coordinate={CentroArtesanato}
                title='Centro de artesanato'
                onPress={()=>setModal16Visible(true)}
            />
            <Marker
                coordinate={SantoAntonio}
                title='Paróquia Santo Antônio'
                onPress={()=>setModal17Visible(true)}
            />
            <Marker
                coordinate={Velokart}
                title='Velokart'
                onPress={()=>setModal18Visible(true)}
            />
            <Marker
                coordinate={SilvaBrito}
                title='Balneário Silva Brito'
                onPress={()=>setModal19Visible(true)}
            />
            <Marker
                coordinate={Sambico}
                title='Lagoa Sambico'
                onPress={()=>setModal20Visible(true)}
            />
            <Marker
                coordinate={PonteAmizade}
                title='Ponte da Amizade'
                onPress={()=>setModal21Visible(true)}
            />
            <Marker
                coordinate={OsAmigos}
                title='Sítio os amigos'
                onPress={()=>setModal22Visible(true)}
            />
            <Marker
                coordinate={MeninoJesus}
                title='Paróquia Menino Jesus'
                onPress={()=>setModal23Visible(true)}
            />
            <Marker
                coordinate={LekLek}
                title='Balneário Lek Lek'
                onPress={()=>setModal24Visible(true)}
            />
            <Marker
                coordinate={TemploCentral}
                title='Templo Central'
                onPress={()=>setModal25Visible(true)}
            />

            </MapView>

        </View>
        

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    map:{
        position:'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0
    },
    placesContainer:{
        width:'100%',
        maxHeight:200
    },
    textBotao: {
        fontSize: 15,
        fontWeight: "600",
        textAlign: "center",
      },
      textoModal: {
        fontSize: 20,
        textAlign: "center",
        padding: 5,
      },
      botaoModalAlerta: {
        backgroundColor: "#FF3030",
        height: 35,
        width: "40%",
        padding: 5,
        borderRadius: 15,
        borderWidth: 1,
        alignSelf: "center",
        margin: 5,
        elevation: 10,
        marginTop: 40,
      },
      modal2: {
        alignSelf: "center",
        backgroundColor: "#f9f9f9",
        padding: 20,
        elevation: 10,
        borderRadius: 20,
        marginVertical: 280,
        width: "80%",
        height: "50%",
      },
      modal: {
        alignSelf: "center",
        backgroundColor: "#F2F3F3",
        padding: 15,
        elevation: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position:'absolute',
        bottom:0,
        width: "99%",
        height: 450,
      },
      botaoModal1: {
        backgroundColor: "#FF3030",
        height: 35,
        width: "65%",
        padding: 5,
        borderRadius: 15,
        borderWidth: 1,
        alignSelf: "center",
        margin: 5,
        elevation: 10,
        marginVertical: 40,
      },
      titleModal: {
        textAlign: "center",
        fontSize: 20,
        marginLeft: 60,
        fontWeight:'bold',
        textDecorationLine:'underline'
      },
      image:{
        height:250,
        width:'90%',
        alignSelf:'center',
        marginTop:15,
        borderRadius:8,
        borderWidth:1,
        borderColor:'#222',
        elevation:10,
        opacity:0.9,
      }
})