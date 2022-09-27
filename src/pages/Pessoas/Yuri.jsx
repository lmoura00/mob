import React, {useState} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, ScrollView, Modal} from 'react-native'

import pessoa from '../../images/pessoa.png'

import LottieView from 'lottie-react-native'

import {useNavigation} from '@react-navigation/native'



export function Yuri(){
    const [visible, setVisible] = useState(false)
    const [visible1, setVisible1] = useState(false)
    const navigation = useNavigation()

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
                
                <LottieView source={require('../../Assets/95740-profile-person.json')} autoPlay={true} loop={true} style={{marginBottom:280}}/>
                
               <View style={{marginTop:150, alignItems:'center', justifyContent:'center'}}>
                    <Text style={styles.title}>YURI</Text>
                    <Text style={styles.texto}>AUDI R8</Text>
                    <Text style={styles.texto}>COR: PRATA </Text>
               </View>

                <Image 
                    source={{uri:'https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHkCFGe8ysJSnJhUwAlW4MXFl5iamp-qDBPgZuYssdFMrSnTzUnPz2YHSfDxx82OvGmYdv7P9odeX-UEuL9jvPBNn4JG80c5idmnvwdZ5rgwT-Nb8-CLL6sPA80Ljz3ynLG9X55KNxmkmK6rP_I85ysDDa3x7zo9_LDP1Pj_UUr3v_Yxjg5s2A8-MJyEt65yrn0119Z3L518bciD7fCcDTxCz1fvu0JJWKYF9l_j8Dz1mmz9zIgNPBuPMFeeOTFT5uu3h5VpjA8cN328C3eBSWnq15cu9uD38u77f-HyweolJyCYGnrYY8XKRUnPBmOJb6e_al5lxiDFnMPDsrVD8zRJnIXDzyYnLnX9PyqZftxAE-mLb95P758kv3-XpdrKVa2rDfnGW7Qw8r6fW-q0pU3kZI7RXxsLVqtQuOnM3Aw_DA72seu0VTJP1jL5sV1p2aXfI8ucMPJ1X3V-mBMfM5JHmyfJ4N3leDNPScwyswIBl2g0kWOKABM8TIMFhwwAmQUG-AUgwLgTxWeuZGRi4HRgY2EIYQIBPuLQopyCxKDFXryi1uCA_rzizLFVQw4BIIMzq4xjpGgQAa47rIxACAAA?mimetype=image/png'}} 
                    style={{width:150, height:90,marginBottom:5, marginLeft:15}}
                />

                <Text style={styles.texto}>PLACA: PIT - 7854</Text>
                <Text style={styles.texto}>CONTATO: 86 9 0000 0000</Text>

                <KeyboardAvoidingView style={{flexDirection:'row'}}>
                    <Text style={styles.vagas}>VAGAS DISPONÍVEIS:</Text>
                    <Text style={styles.vagasNumero}>1</Text>
                </KeyboardAvoidingView>

                <KeyboardAvoidingView style={{flexDirection:'row'}}>
                    <Text style={styles.inicioNome}>INÍCIO:</Text>
                    <Text style={styles.inicioLugar}>Parque Alvorada 19:00 hrs</Text>
                </KeyboardAvoidingView>

                <KeyboardAvoidingView style={{flexDirection:'row'}}>
                    <Text style={styles.DestinoNome}>DESTINO:</Text>
                    <Text style={styles.DestinoLugar}>IFMA Campus Timon</Text>
                </KeyboardAvoidingView>

                <TouchableOpacity style={styles.botaoVerRota}  onPress={()=>navigation.navigate('RotaYuri')}>
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
    lottie:{
        flex:1,
        backgroundColor:"#fff",
    },
    title:{
        marginTop:15,
        fontSize:27,
        color:'black',
        fontWeight:'bold',
        paddingTop:25,
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
        fontSize:17
    },
    textBotao:{
        fontSize:15,
        fontWeight:'600',
        textAlign:'center'
    },
})