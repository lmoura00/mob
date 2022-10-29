import React, { useState } from "react";
import {Text, StyleSheet, TouchableOpacity, View, ScrollView, TextInput, Modal, Alert} from 'react-native'
import LottieView from 'lottie-react-native'
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";


export function Esqueci(){

    function preenchido(){
        if(Email === ""){
            Alert.alert('Opa, parece que você não preencheu corretamente!', 'Preencha o campo de E-mail.')
        }else {
            setTeste(true)
        }
    }

    const navigation = useNavigation()
    const [Teste, setTeste] = useState(false)
    const [Email, SetEmail] = useState('')
    return(
        <ScrollView style={styles.container}>

            <Modal
                animationType="fade"
                visible={Teste}
                statusBarTranslucent={false}
                transparent={true}
            >
                        <View style={styles.modal}>
                            <Text style={styles.titleModal}>PRONTO, VERIFIQUE SEU E-MAIL!</Text>
                            <View style={{width:180, height:180, alignSelf:'center'}}>
                                <LottieView 
                                    source={require('../../Assets/118858-check-email.json')} 
                                    autoPlay={true} 
                                    loop={true} 
                                />
                            </View>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Login")}
                                style={styles.botaoModal1}
                            >
                            <Text style={styles.textBotao}>SAIR</Text>
                        </TouchableOpacity>
              
                        </View>
            </Modal>
            <View style={styles.containerTitle}>
            <Text style={styles.title}>ESQUECEU A SENHA?</Text>
            </View>
            <View style={{width:350, height:350}}>
              <LottieView 
                    source={require('../../Assets/108609-forgot-password.json')} 
                    autoPlay={true} 
                    loop={true} 
                    style={{}}
              />
              </View>

              <View style={{width:'86%', height:90, backgroundColor:'#b9b9b9', alignSelf:'center', borderRadius:10}}>
                <Text style={styles.subtitle}>Sem problemas. Insira abaixo o seu e-mail e estaremos lhe enviando um link para você refazer a sua senha!</Text>
              </View>
            
                <View style={{width:'90%', height:50, backgroundColor:'#fff', alignSelf:'center', padding:5, marginTop:25, justifyContent:'center'}}>
                    <TextInput
                        placeholder="Insira seu e-mail"
                        style={styles.input}
                        value={Email}
                        onChangeText={SetEmail}
                    />
                </View>

                <TouchableOpacity style={styles.botao} onPress={preenchido}>
                    <Text style={styles.subtitle}>ENVIAR</Text>
                </TouchableOpacity>
        </ScrollView>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        padding:5,
        backgroundColor:"#334A58"
    },
    botao:{
        flexDirection:'row',
        backgroundColor:'#14BC9C',
        width:'60%',
        height:55,
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'space-evenly',
        marginTop:25,
        elevation:10,
        borderRadius:8,
    },
    title:{
        fontSize:25,
        color:'black',
        justifyContent:'center',
        textAlign:'center',
        fontFamily:'Roboto_700Bold'
    },
    containerTitle:{
        backgroundColor:'#f9f9f9',
        justifyContent:'center',
        paddingVertical:8,
        borderRadius:8,
        marginTop:10
        
    },
    subtitle:{
        fontSize:18,
        padding:5,
        textAlign:'center',
        fontFamily:'BalsamiqSans_400Regular'
    },
    input:{
        fontSize:15,
        fontFamily:"Inter_400Regular",
        marginHorizontal:5,
        borderRadius:8,
        alignContent:'center',
        justifyContent:'center',
        textAlign:'center'
    },
    modal: {
        alignSelf: "center",
        backgroundColor: "#f9f9f9",
        padding: 20,
        elevation: 10,
        borderRadius: 20,
        marginVertical: 240,
        width: "80%",
        height: "45%",
    },
    titleModal: {
       textAlign:'center',
       fontSize:17,
       fontFamily:'BalsamiqSans_700Bold',
       textDecorationLine:'underline'
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
    textBotao: {
        fontSize: 15,
        fontWeight: "600",
        textAlign: "center",
        justifyContent: "center",
      },
})