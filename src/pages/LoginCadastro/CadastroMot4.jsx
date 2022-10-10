import React, {useState} from "react";
import {Image, View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Modal, ScrollView} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import * as ImagePicker from 'expo-image-picker';


export function CadastroMot4(){
    const navigation = useNavigation()
    const [visible, setVisible] = useState(false)
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

                
                <Text style={styles.title1}>CADASTRAR MOTORISTA: ANEXOS</Text>

                <TextInput placeholder="SOBRE VOCÊ..." style={{height:345, width:'70%', backgroundColor:'#f9f9f9', marginTop:55, borderRadius:8, paddingHorizontal:10}}></TextInput>
                
                
                

                
                <TouchableOpacity style={styles.botao1} onPress={()=>Alert.alert("Seu dados foram enviados com sucesso")}>
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
    title:{
        fontSize:19,
        color:'#fff',
        fontWeight:'350'
    },
    title1:{
        fontSize:20,
        color:'#fff',
        fontWeight:'500',
        textAlign:'center',
        marginTop:10,
        textDecorationLine:'underline'
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
        marginTop:110
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
    textBotao:{
        fontSize:15,
        fontWeight:'600',
        textAlign:'center',
    
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
        width:"65%",
        padding:5,
        borderRadius:15,
        borderWidth:1,
        alignSelf:'center',
        margin:5,
        elevation:10,
        marginTop:20
    },
    botaoModal2:{
        backgroundColor:'#fff',
        height: 35,
        width:"65%",
        padding:5,
        borderRadius:15,
        borderWidth:1,
        alignSelf:'center',
        elevation:10,
        marginTop:5
    },
    titleModal:{
        textAlign:'center',
        fontSize:17
    },
})