import React, {useState} from "react";
import {Image, View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Modal, ScrollView} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker';


export function CadastroMot3(){

    let selfie = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("A permissão para acessar a galeria é necessária.");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        setImage(pickerResult.uri);
      };

    
      let selfie1 = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("A permissão para acessar a galeria é necessária.");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        setImage1(pickerResult.uri);
      };

      let cnhImage = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("A permissão para acessar a galeria é necessária.");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        setCnh(pickerResult.uri);
      };

      let crvlImage = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("A permissão para acessar a galeria é necessária.");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        setCrvl(pickerResult.uri);
      };
    

    const [visible, setVisible] = useState(false);
    const navigation = useNavigation()

    const [image1, setImage1] = useState(null)
    const [image, setImage] = useState(null)
    const [cnh, setCnh] = useState(null)
    const [crvl, setCrvl] = useState(null)
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

                <Text style={styles.line1}>-----------------------------------------------------</Text>
                <Text style={styles.title1}>CADASTRAR MOTORISTA: ANEXOS</Text>
                <Text style={styles.line2}>-----------------------------------------------------</Text>
                
                <Text style={styles.title}>SELFIE + DOCUMENTO</Text>
                {image && (<Image source={{uri:image}} style={styles.image}/>)}
                <TouchableOpacity onPress={selfie} style={styles.botao3}>
                    <Text style={styles.textBotao}>Selecione a sua foto</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setImage(null)} style={styles.botao4}>
                    <Text style={styles.textBotao}>Apagar foto</Text>
                </TouchableOpacity>

                <Text style={styles.title}>CNH</Text>
                {cnh && (<Image source={{uri:cnh}} style={styles.image}/>)}
                <TouchableOpacity onPress={cnhImage} style={styles.botao3}>
                    <Text style={styles.textBotao}>Selecione a sua foto</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setCnh(null)} style={styles.botao4}>
                    <Text style={styles.textBotao}>Apagar foto</Text>
                </TouchableOpacity>

                <Text style={styles.title}>CRVL</Text>
                {crvl && (<Image source={{uri:crvl}} style={styles.image}/>)}
                <TouchableOpacity onPress={crvlImage} style={styles.botao3}>
                    <Text style={styles.textBotao}>Selecione a sua foto</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setCrvl(null)} style={styles.botao4}>
                    <Text style={styles.textBotao}>Apagar foto</Text>
                </TouchableOpacity>

                <Text style={{fontSize:19, color:'#fff', fontWeight:'350', marginTop: 25}}>SELECIONE A SUA FOTO:</Text>
                {image1 && (<Image source={{uri:image1}} style={styles.image}/>)}
                <TouchableOpacity onPress={selfie1} style={styles.botao3}>
                    <Text style={styles.textBotao}>Selecione a sua foto</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setImage1(null)} style={styles.botao4}>
                    <Text style={styles.textBotao}>Apagar foto</Text>
                </TouchableOpacity>

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
    image:{
        height:80, 
        width:80,
        alignSelf:'center',
        borderRadius:45,
        borderWidth:2,
        borderColor:'#f9f9f9',
        marginBottom:15,
        marginTop:15,
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