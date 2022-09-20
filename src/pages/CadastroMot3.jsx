import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Modal} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker';


export function CadastroMot3(){

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("A permissão para acessar a galeria é necessária.");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
      };

    
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation()

    return(
        <View style={styles.container}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
            }}
      ></Modal>
            <Text style={styles.line1}>-----------------------------------------------------</Text>
            <Text style={styles.title1}>CADASTRAR MOTORISTA: ANEXOS</Text>
            <Text style={styles.line2}>-----------------------------------------------------</Text>
            
            <Text style={styles.title}>SELFIE + DOCUMENTO</Text>
            <TouchableOpacity onPress={openImagePickerAsync} style={styles.botao3}>
                <Text style={styles.textBotao}>Selecione a sua foto</Text>
            </TouchableOpacity>

            <Text style={styles.title}>CNH</Text>
            <TextInput style={styles.input}></TextInput>

            <Text style={styles.title}>CRVL</Text>
            <TextInput style={styles.input}></TextInput>

            <Text style={{fontSize:19, color:'#fff', fontWeight:'350', marginTop: 25}}>SELECIONE A SUA FOTO:</Text>
            <TouchableOpacity onPress={openImagePickerAsync} style={styles.botao3}>
                <Text style={styles.textBotao}>Selecione a sua foto</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao1} onPress={()=>Alert.alert("Seu cadastro foi efetivado com sucesso")}>
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
    textBotao:{
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
        marginTop:5      
    }
})