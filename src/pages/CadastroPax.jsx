import React, { useState } from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image} from 'react-native'

import * as ImagePicker from 'expo-image-picker';
import {useNavigation} from '@react-navigation/native'

export function CadastroPax(){
    const [image, SetImage] = useState(null)
    const navigation = useNavigation()

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("A permissão para acessar a galeria é necessária.");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult.uri);
        SetImage(pickerResult.uri);

      }

    return(
        <View style={styles.container}>
            
            <Text style={styles.title}>NOME COMPLETO</Text>
            <TextInput style={styles.input} placeholder='Nome completo'></TextInput>

            <Text style={styles.title}>DATA DE NASCIMENTO</Text>
            <TextInput style={styles.input} keyboardType="numbers-and-punctuation" maxLength={8}></TextInput>


            <Text style={styles.title}>CPF</Text>
            <TextInput style={styles.input} keyboardType="numbers-and-punctuation" maxLength={11}></TextInput>

            <Text style={styles.title}>E-MAIL</Text>
            <TextInput style={styles.input} keyboardType="email-address"></TextInput>

            <Text style={styles.title}>TELEFONE</Text>
            <TextInput style={styles.input} keyboardType="phone-pad" maxLength={11}></TextInput>

            <Text style={{fontSize:19, color:'#fff', fontWeight:'350', marginTop: 25}}>SELECIONE A SUA FOTO:</Text>

            {image && (<Image source={{uri:image}} style={{height:80, width:80}}/>)}

            <TouchableOpacity onPress={openImagePickerAsync} style={styles.botao3}>
                <Text style={styles.textBotao}>Selecione a sua foto</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao1} onPress={()=>Alert.alert("Seu cadastro foi efetivado com sucesso.")}>
                <Text style={styles.textBotao}>SALVAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao2} onPress={()=>navigation.navigate("Login")}>
                <Text style={styles.textBotao}>CANCELAR</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10,
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
        fontWeight:'350',
        margin:2
    },
    title1:{
        fontSize:20,
        color:'#fff',
        fontWeight:'500'
    },
    input:{
        backgroundColor:'#D9D9D9',
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
        marginTop:55,
        alignSelf:'center'
    },
    botao2:{
        backgroundColor:'#FF3030',
        height: 35,
        width:"65%",
        padding:5,
        margin:12,
        borderRadius:15,
        borderWidth:1,
        alignSelf:'center'
    },
    textBotao:{
        fontSize:15,
        fontWeight:'600',
        textAlign:'center'
    },
    textBotao3:{
        fontSize:15,
        fontWeight:'600',
        textAlign:'center',
    },
    botao3:{
        backgroundColor:'#D9D9D9',
        width:'56%',
        height:35,
        borderRadius:7,
        borderWidth:1,
        marginBottom:5,
        marginTop:5,
        alignSelf:'center'   
    }
})