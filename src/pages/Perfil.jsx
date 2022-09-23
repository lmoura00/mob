import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image, ScrollView} from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import {useNavigation} from '@react-navigation/native'



export function Perfil(){

    const [image, SetImage] = useState(null)

        const navigation = useNavigation()

        let openImagePickerAsync = async () => {
         let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
            if (permissionResult.granted === false) {
          alert("A permissão para acessar a galeria é necessária.");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
        SetImage(pickerResult.uri);
      }

    return(
        <ScrollView >
            <View style={styles.container}>

                <Text style={styles.title}>NOME COMPLETO</Text>
                <TextInput style={styles.input}></TextInput>

                <Text style={styles.title}>DATA DE NASCIMENTO</Text>
                <TextInput style={styles.input} keyboardType="numbers-and-punctuation"></TextInput>


                <Text style={styles.title}>CPF</Text>
                <TextInput style={styles.input} keyboardType="numbers-and-punctuation"></TextInput>

                <Text style={styles.title}>E-MAIL</Text>
                <TextInput style={styles.input} keyboardType="email-address"></TextInput>

                <Text style={styles.title}>TELEFONE</Text>
                <TextInput style={styles.input} keyboardType="phone-pad"></TextInput>

                <Text style={{fontSize:19, color:'#fff', fontWeight:'350', marginTop: 25}}>SELECIONE A SUA FOTO:</Text>
                {image && (<Image source={{uri:image}} style={styles.image}/>)}
                <TouchableOpacity onPress={openImagePickerAsync} style={styles.botao3}>
                    <Text style={styles.textBotao}>Selecione a sua foto</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao4} onPress={()=>SetImage(null)}>
                    <Text style={styles.textBotao}>APAGAR FOTO</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao1} onPress={()=>Alert.alert("Seu perfil foi atualizado com sucesso.")}>
                    <Text style={styles.textBotao}>ATUALIZAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao2} onPress={()=>navigation.navigate("CaronasDisponiveis")}>
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
        margin:12,
        elevation:10,
    },
    botao2:{
        backgroundColor:'#FF3030',
        height: 35,
        width:"65%",
        padding:5,
        margin:12,
        borderRadius:15,
        borderWidth:1,
        elevation:10,
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
        elevation:10,      
    },
    botao4:{
        backgroundColor:'#14BC9C',
        height: 35,
        width:"65%",
        padding:5,
        margin:12,
        borderRadius:15,
        borderWidth:1,
        marginTop:20
    },
    image:{
        height:80, 
        width:80,
        alignSelf:'center',
        borderRadius:45,
        borderWidth:2,
        borderColor:'#f9f9f9',
        marginBottom:15,
        marginTop:15,
    }
})