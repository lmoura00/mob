import React, {useState} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, ScrollView, Modal} from 'react-native'

import pessoa from '../../images/pessoa.png'

import {useNavigation} from '@react-navigation/native'
import LottieView from 'lottie-react-native'


export function Vitoria(){
    const [alerta, setAlerta] = useState(false)
    const [visible, setVisible] = useState(false)
    const navigation = useNavigation()
    const [visible1, setVisible1] = useState(false)
    return(
        <ScrollView style={{backgroundColor:"#334A58",}}>
            <View style={styles.container}>

            <Modal
                    animationType="fade"
                    visible={visible}
                    statusBarTranslucent={false}
                    transparent={true}
                    style={{}}
                    >
                        <View style={styles.modal}>
                            <Text style={styles.titleModal}>ESSA É A CARONA QUE VOCÊ DESEJA?</Text>
                            <View style={{flexDirection:'row', padding:5, justifyContent:'center', marginTop:40}}>
                                <TouchableOpacity 
                                    onPress={()=>setVisible1(true)}
                                    style={styles.botaoModal2}>
                                        <Text style={styles.textBotao}>SIM!</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    onPress={()=>setVisible(false)} 
                                    style={styles.botaoModal1}>
                                        <Text style={styles.textBotao}>NÃO</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    
                </Modal>

                <Modal
                    animationType="fade"
                    visible={visible1}
                    statusBarTranslucent={false}
                    transparent={true}
                    style={{}}
                    >
                        <View style={styles.modal2}>
                            <Text style={styles.titleModal}>AGUARDE O MOTORISTA</Text>
                            
                            <LottieView 
                                source={require('../../Assets/92893-man-waiting-car.json')} 
                                autoPlay={true} 
                                loop={true} 
                                style={{
                                    height:'72%',
                                    width:'70%',
                                    alignSelf:'center'
                                }}
                            />
                                <TouchableOpacity 
                                    onPress={()=>setVisible1(false)===setVisible(false)} 
                                    style={styles.botaoModal1}>
                                        <Text style={styles.textBotao}>FECHAR</Text>
                                </TouchableOpacity>
                            
                        </View>
                    
                </Modal>

                <Modal
                    animationType="fade"
                    visible={alerta}
                    statusBarTranslucent={false}
                    transparent={true}
                    style={{}}
                    >
                        <View style={styles.modal2}>
                            <View style={styles.titleModal}>
                                <Text style={styles.titleModalText}>ALERTA</Text>
                                
                            </View>
                                <Text style={{fontSize:15, textAlign:'center', marginTop:15}}>Mob Timon coleta dados de local para ativar trajetos, localização, mesmo quando o app está fechado ou não está em uso.</Text>
                        
                                <TouchableOpacity 
                                    onPress={()=>navigation.navigate('RotaVitoria') || setAlerta(false)} 
                                    style={styles.botaoModalAlerta}>
                                        <Text style={styles.textBotao}>CONTINUAR</Text>
                                </TouchableOpacity>
                            
                        </View>
                    
                </Modal>


                <LottieView source={require('../../Assets/95740-profile-person.json')} autoPlay={true} loop={true} style={{marginBottom:300}}/>
                <View style={{marginTop:180, alignItems:'center', justifyContent:'center'}}>
                    <Text style={styles.title}>VITORIA EV.</Text>
                    <Text style={styles.texto}>VW GOLF</Text>
                    <Text style={styles.texto}>COR: CINZA </Text>
                </View>
                <Image source={{uri:'https://carroslancamentos.com.br/wp-content/uploads/2019/02/fotos-volkswagen-golf-e1549196918523.png'}} style={{width:150, height:90, margin:7}}/>
                <Text style={styles.texto}>PLACA: ABC - 4196</Text>
                <Text style={styles.texto}>CONTATO: 86 9 0000 0000</Text>

                <KeyboardAvoidingView style={{flexDirection:'row'}}>
                    <Text style={styles.vagas}>VAGAS DISPONÍVEIS:</Text>
                    <Text style={styles.vagasNumero}>4</Text>
                </KeyboardAvoidingView>

                <KeyboardAvoidingView style={{flexDirection:'row'}}>
                    <Text style={styles.inicioNome}>INÍCIO:</Text>
                    <Text style={styles.inicioLugar}>Rua 100 12:00 h</Text>
                </KeyboardAvoidingView>

                <KeyboardAvoidingView style={{flexDirection:'row'}}>
                    <Text style={styles.DestinoNome}>DESTINO:</Text>
                    <Text style={styles.DestinoLugar}>IFMA Campus Timon</Text>
                </KeyboardAvoidingView>

                <TouchableOpacity style={styles.botaoVerRota} onPress={()=>setAlerta(true)}>
                    <Text style={styles.titleBotao}>VER ROTA</Text>
                </TouchableOpacity>

            <TouchableOpacity style={styles.botaoQueroACarona} onPress={()=>setVisible(true)}>
                    <Text style={styles.titleBotao}>QUERO A CARONA</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoNaoEParaMim} onPress={()=>navigation.navigate('CaronasDisponiveis')}>
                    <Text style={styles.titleBotao}>NÃO É PARA MIM</Text>
                </TouchableOpacity>



            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#D9D9D9",
        marginTop:25,
        marginBottom:25,
    },
    title:{
        marginTop:15,
        fontSize:27,
        color:'black',
        fontWeight:'bold',
        marginBottom:8
    },
    texto:{
        fontSize:25,
        fontWeight:'400'

    },
    vagas:{
        fontSize:25,
        fontWeight:'600',
        marginTop:10,
        marginBottom:10,
    },
    vagasNumero:{
        fontSize:27,
        fontWeight:'600',
        marginTop:10,
        marginBottom:10,
        marginLeft:15,
    },
    inicioNome:{
        fontSize:20,
        fontWeight:'600',
        marginTop:10,
        
    },
    inicioLugar:{
        fontSize:18,
        fontWeight:'400',
        marginTop:10,
        marginLeft:15,
    },
    DestinoNome:{
        fontSize:18,
        fontWeight:'600',
        marginBottom:15
        
    },
    DestinoLugar:{
        fontSize:18,
        fontWeight:'400',
        marginBottom:15,
        marginLeft:15,
    },
    imagem:{
        width:150,
        height:150,
        borderRadius:75,
        marginTop:20
        
    },
    botaoQueroACarona:{
        backgroundColor:'#fff',
        height:45,
        width: 270,
        marginTop:10,
        borderRadius:8,
        borderWidth:1,
        elevation:10,
    },
    botaoNaoEParaMim:{
        backgroundColor:'#FF3030',
        height:45,
        width: 270,
        marginTop:10,
        borderRadius:8,
        borderWidth:1,
        marginBottom:30,
        elevation:10,
    },
    botaoVerRota:{
        backgroundColor:'#14BC9C',
        height:45,
        width: 270,
        marginTop:10,
        borderRadius:8,
        borderWidth:1,
        elevation:10,
    },
    titleBotao:{
        fontSize:18,
        padding:8,
        fontWeight:'600',
        color:'black',
        textAlign:'center'
    },
    modal:{
        alignSelf: 'center',
        backgroundColor:'#f9f9f9',
        padding:20,
        elevation:10,
        borderRadius:20,
        marginVertical:280,
        width:"80%",
        height:"25%",
    },
    botaoModal1:{
        backgroundColor:'#FF3030',
        height: 35,
        width:"40%",
        padding:5,
        borderRadius:15,
        borderWidth:1,
        alignSelf:'center',
        margin:5,
        elevation:10,
        
    },
    botaoModal2:{
        backgroundColor:'#fff',
        height: 35,
        width:"40%",
        padding:5,
        borderRadius:15,
        borderWidth:1,
        alignSelf:'center',
        elevation:10,
        marginRight:10
    },
    titleModal:{
        textAlign:'center',
        fontSize:17,
        fontWeight:'bold',
        backgroundColor:'#fff',
        height:45,
        borderRadius:8,
        elevation:10,
        justifyContent:'center'
        
    },
    titleModalText:{
        textAlign:'center',
        fontSize:17,
        fontWeight:'bold',
    },
    textBotao:{
        fontSize:15,
        fontWeight:'600',
        textAlign:'center'
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
        marginTop: 10,
      },
      modal2: {
        alignSelf: "center",
        backgroundColor: "#f9f9f9",
        padding: 20,
        elevation: 10,
        borderRadius: 20,
        marginVertical: 260,
        width: "80%",
        height: "30%",
      },
})