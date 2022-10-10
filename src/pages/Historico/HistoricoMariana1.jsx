import React, {useState} from "react";
import {View, Text, Modal, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, ScrollView} from 'react-native'

import pessoa from '../../images/pessoa.png'

import {useNavigation} from '@react-navigation/native'
import LottieView from 'lottie-react-native'



export function HistoricoMariana1(){
    const [alerta, setAlerta] = useState(false)
    const [visible1, setVisible1] = useState(false)
    const [visible, setVisible] = useState(false)
    const navigation = useNavigation()

    return(
        <ScrollView style={{backgroundColor:"#334A58",}}>
            <View style={styles.container}>

                <Modal
                    animationType="fade"
                    visible={alerta}
                    statusBarTranslucent={false}
                    transparent={true}
                    style={{}}
                    >
                        <View style={styles.modal2}>
                            <Text style={styles.titleModal}>ALERTA</Text>
                                <Text style={{fontSize:15, textAlign:'center', marginTop:15}}>Mob Timon coleta dados de local para ativar trajetos, localização, mesmo quando o app está fechado ou não está em uso.</Text>
                        
                                <TouchableOpacity 
                                    onPress={()=>navigation.navigate('RotaMariana1') || setAlerta(false)} 
                                    style={styles.botaoModalAlerta}>
                                        <Text style={styles.textBotao}>CONTINUAR</Text>
                                </TouchableOpacity>
                            
                        </View>
                    
                </Modal>


            <LottieView source={require('../../Assets/95740-profile-person.json')} autoPlay={true} loop={true} style={{marginBottom:240}}/>

                <View style={{marginTop:180, alignItems:'center', justifyContent:'center'}}>
                    <Text style={styles.title}>MARIANA</Text>
                    <Text style={styles.texto}>AUDI Q3</Text>
                    <Text style={styles.texto}>COR: PRATA </Text>
                </View>
                <Image source={{uri:'https://cdn.autopapo.com.br/carro/audi/q3-14-tfsi-attraction-plus-s-tronic-flex-2017/destaque-v1.png'}} style={{width:150, height:90, margin:7}}/>
                <Text style={styles.texto}>PLACA: PAP - 5678</Text>
                <Text style={styles.texto}>CONTATO: 86 9 0000 0000</Text>



                <KeyboardAvoidingView style={{flexDirection:'row'}}>
                    <Text style={styles.inicioNome}>PARTIDA:</Text>
                    <Text style={styles.inicioLugar}>Campo do totó - 15:00 h</Text>
                </KeyboardAvoidingView>

                <KeyboardAvoidingView style={{flexDirection:'row'}}>
                    <Text style={styles.DestinoNome}>DESTINO:</Text>
                    <Text style={styles.DestinoLugar}>IFMA Campus Timon - 15:30 h</Text>
                </KeyboardAvoidingView>

                <TouchableOpacity style={styles.botaoVerRota} onPress={()=>setAlerta(true)} >
                    <Text style={styles.titleBotao}>VER ROTA</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoNaoEParaMim} onPress={()=>navigation.navigate('Historico')}>
                    <Text style={styles.titleBotao}>VOLTAR</Text>
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
        fontWeight:'bold'
    },
    textBotao:{
        fontSize:15,
        fontWeight:'600',
        textAlign:'center'
    },
    modal2:{
        alignSelf: 'center',
        backgroundColor:'#f9f9f9',
        padding:20,
        elevation:10,
        borderRadius:20,
        marginVertical:280,
        width:"80%",
        height:"50%",
    },
    botaoModalAlerta:{
        backgroundColor:'#14BC9C',
        height: 35,
        width:"40%",
        padding:5,
        borderRadius:15,
        borderWidth:1,
        alignSelf:'center',
        margin:5,
        elevation:10,
        marginTop:170
        
    },
})