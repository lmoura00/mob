import React, {useState} from "react";
import {Image, View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Modal, ScrollView} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import LottieView from 'lottie-react-native'


export function CadastroMot4(){
    const navigation = useNavigation()
    const [visible, setVisible] = useState(false)
    const [visibleConfirma, setVisibleConfirma] = useState(false)
    return(
        <ScrollView>

            <View style={styles.container}>
        
                <Modal
                    animationType="fade"
                    visible={visible}
                    statusBarTranslucent={false}
                    transparent={true}
                    style={{}}
                    >
                        <View style={styles.modal}>
                            <Text style={styles.titleModal}>DESEJA CANCELAR SEU CADASTRO?</Text>
                            <TouchableOpacity 
                                onPress={()=>navigation.navigate("Login")} 
                                style={styles.botaoModal1}>
                                    <Text style={styles.textBotao}>SAIR</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=>setVisible(false)}
                                style={styles.botaoModal2}>
                                    <Text style={styles.textBotao}>VOU CONTINUAR</Text>
                            </TouchableOpacity>
                        </View>
                    
                </Modal>

                <Modal
                    animationType="fade"
                    visible={visibleConfirma}
                    statusBarTranslucent={false}
                    transparent={true}
                    style={{}}
                    >
                        <View style={styles.modal2}>
                            <View style={styles.titleBoxModal}>
                            <Text style={styles.titleModal}>SEU CADASTRO FOI CONCLUIDO</Text>
                            </View>
                            <View style={{width:120, height:120,}}>
                                <LottieView 
                                    source={require('../../Assets/45793-confirmed.json')} 
                                    autoPlay={true} 
                                    loop={true} 
                                />
                            </View>
                            <Text style={styles.subTitleModal}>Aguarde confirmação no seu e-mail.</Text>
                            <TouchableOpacity 
                                onPress={()=>navigation.navigate("Login") || setVisibleConfirma(false)} 
                                style={styles.botaoModal3}>
                                    <Text style={styles.textBotao}>SAIR</Text>
                            </TouchableOpacity>
                     
                        </View>
                    
                </Modal>
                <Text style={styles.title1}>CADASTRAR MOTORISTA: SOBRE VOCÊ</Text>

                <View style={{width:120, height:120}}>
                        <LottieView 
                            source={require('../../Assets/81450-team.json')} 
                            autoPlay={true} 
                            loop={true} 
                        />
                      </View>

                <TextInput placeholder="SOBRE VOCÊ..." style={{height:345, width:'70%', backgroundColor:'#f9f9f9', marginTop:25, borderRadius:8, paddingHorizontal:10}}></TextInput>
                
                
                

                
                <TouchableOpacity style={styles.botao1} onPress={()=>setVisibleConfirma(true)}>
                    <Text style={styles.textBotao}>SALVAR</Text>
                </TouchableOpacity>



                <TouchableOpacity style={styles.botao2} onPress={()=>setVisible(true)}>
                    <Text style={styles.textBotao}>CANCELAR</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:"#334A58",
        padding:5
    },
    line1:{
        fontSize:25,
        color:'black'
    },
    line2:{
        fontSize:25,
        color:'black',
        marginBottom:15
    },
    title: {
        fontSize: 19,
        color: "#fff",
        
      },
    title1:{
        fontSize:20,
        color:'#fff',
        textAlign:'center',
        marginTop:10,
        textDecorationLine:'underline',
        fontFamily:'Roboto_500Medium'
    },
    input:{
        backgroundColor:'#D9D9D9',
        width:'56%',
        height:35,
        borderRadius:7,
        borderWidth:1,
        marginBottom:5,
        marginTop:5      
    },
    botao1:{
        backgroundColor:'#fff',
        height: 35,
        width:"65%",
        padding:5,
        margin:12,
        borderRadius:15,
        borderWidth:1,
        marginTop:60
    },
    botao2:{
        backgroundColor:'#FF3030',
        height: 35,
        width:"65%",
        padding:5,
        margin:12,
        borderRadius:15,
        borderWidth:1
    },
    botao3:{
        backgroundColor:'#D9D9D9',
        width:'56%',
        height:35,
        borderRadius:7,
        borderWidth:1,
        marginBottom:5,
        marginTop:5      
    },
    botao4:{
        backgroundColor:'#FF3030',
        width:'56%',
        height:35,
        borderRadius:7,
        borderWidth:1,
        marginBottom:5,
        marginTop:5      
    },
    imagem:{
        width: 200,
        height: 200, 
        alignSelf:'center', 
        marginBottom:20, 
        marginTop:20,
        borderWidth:2,
        borderColor:'#f9f9f9',
    },
    textBotao: {
        fontSize: 15,
        fontWeight: "600",
        textAlign: "center",
        fontFamily:'Ubuntu_700Bold'
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
        marginTop: 30,
      },
    botaoModal3: {
        backgroundColor: "#FF3030",
        height: 35,
        width: "65%",
        padding: 5,
        borderRadius: 15,
        borderWidth: 1,
        alignSelf: "center",
        margin: 5,
        elevation: 10,
        marginTop: 30,
      },
      botaoModal2: {
        backgroundColor: "#fff",
        height: 35,
        width: "65%",
        padding: 5,
        borderRadius: 15,
        borderWidth: 1,
        alignSelf: "center",
        elevation: 10,
        marginTop: 5,
      },
      titleModal: {
        textAlign:'center',
        fontSize:17,
        fontFamily:'BalsamiqSans_700Bold',
        textDecorationLine:'underline'
      },
    subTitleModal:{
        fontSize:15,
        fontFamily:'Ubuntu_500Medium',
        marginTop:15,
        textAlign:'center'
    },
    titleBoxModal:{
        backgroundColor:'#fff',
        height:50,
        width:'95%',
        borderRadius:8,
        elevation:10,
        alignItems:'center',
        justifyContent:'center'
    },
    modal2: {
        alignSelf: "center",
        backgroundColor: "#f9f9f9",
        padding: 20,
        elevation: 10,
        borderRadius: 20,
        marginVertical: 220,
        width: "80%",
        height: "45%",
        justifyContent:'center',
        alignItems:'center'
      },
})