import React, {useState, useEffect} from "react";
import {View, Text, Switch, StyleSheet, Image, Keyboard, TouchableOpacity, Animated, TextInput, KeyboardAvoidingView, TurboModuleRegistry, Alert} from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import logo from '../images/logo.jpg'
import {useNavigation} from '@react-navigation/native'
import {useAuth} from "../Hooks/Auth"



export function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useAuth()
    const navigation = useNavigation()
    const [offset] = useState(new Animated.ValueXY({x:0,y:95}));
    const [opacity] = useState(new Animated.Value(0));
    const [logotipo] = useState(new Animated.ValueXY({x:200, y:200})) 

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState, Alert.alert("Você agora está entrando como motorista."));

    const ativado = () => {
        if (setIsEnabled(true)){
            setIsEnabled(previousState => !previousState);
            alert('está ativado')
        }
    }


    useEffect(()=> {
        KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
        KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)
        Animated.parallel([
            Animated.spring(offset.y, 
              {toValue:0,
                speed:3, 
                bounciness:25,
                useNativeDriver: true
              }),
            Animated.timing(opacity,{
              toValue:1,
              duration:700,
              useNativeDriver: true
            })
          ]).start()
    
        }, [])
    
    
    function keyboardDidShow(){
      Animated.parallel([
        Animated.timing(logotipo.x,{
          toValue:100,
          duration:50,
          useNativeDriver: true
          
        }),
        Animated.timing(logotipo.y,{
          toValue:100,
          duration:50,
          useNativeDriver: true
        }),
      ]).start()
    }
    
    function keyboardDidHide(){
      Animated.parallel([
        Animated.timing(logotipo.x,{
          toValue:200,
          duration:100,
          useNativeDriver: true
        }),
        Animated.timing(logotipo.y,{
          toValue:200,
          duration:100,
          useNativeDriver: true
        }),
      ]).start()
    }

    return(
        <KeyboardAvoidingView style={{flex:1, backgroundColor:'#334A58'}}>
            <View style={styles.containerLogo}>

                <Animated.Image 
                    source={logo} 
                    style={{
                        width:logotipo.x, 
                        height:logotipo.y, 
                        borderRadius:20,
                        borderWidth:2,
                        borderColor:'black'}}/>

                <View style={styles.ViewSwitch}>
                    <Text style={styles.TextSwitch}>PASSAGEIRO</Text>
                    <Switch trackColor={{ false: "#767577", true: "#81b0ff" }} thumbColor={isEnabled ? "#334A58" : "#f4f3f4"} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled}/>
                    <Text style={styles.TextSwitch}>MOTORISTA</Text>
                </View>
            </View>

            <Animated.View style={[styles.containerInput, {
                opacity:opacity,
                transform:[
                    {translateY: offset.y}
                    ]
                    }
                    ]}
                >

                <View style={{flexDirection:'row'}}>
                    <AntDesign name="mail" size={35} color="black" style={{marginRight:10, marginTop:8}}/>
                    <TextInput 
                    placeholder="E-MAIL" 
                    keyboardType="email-address" 
                    value={email}
                    onChangeText={setEmail} 
                    style={styles.EmailInput}></TextInput>
                </View>

                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Ionicons name="key-outline" size={35} color="black" style={{marginRight:10}} />
                    <TextInput 
                    placeholder="SENHA" 
                    keyboardType='default'
                    value={password}
                    onChangeText={setPassword} 
                    maxLength={8} 
                    secureTextEntry={true} 
                    style={styles.SenhaInput} ></TextInput>
                </View>

                <View >
                    <TouchableOpacity style={styles.botaoEntrar} onPress={()=> setUser('lucas')}>
                        <Text style={styles.titleBotao}>ENTRAR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botaoCadMot} onPress={()=>navigation.navigate('CadastroMot1')}>
                        <Text style={styles.titleBotao}>CADASTRAR MOTORISTA</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botaoCadPax} onPress={()=>navigation.navigate("CadastroPax")}>
                        <Text style={styles.titleBotao}>CADASTRAR PASSAGEIRO</Text>
                    </TouchableOpacity>
                </View>

            </Animated.View>
            
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    containerInput:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#334A58"
    },
    containerLogo:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#334A58"
    },
    title:{
        fontSize:25,
        color:'black'
    },
    imagem:{
        width:200,
        height:200,
        borderRadius:20,
        borderWidth:2,
        borderColor:'black'
    },
    ViewSwitch:{
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems:'center',  
        backgroundColor:'#334A58',
        marginTop:25
    },
    TextSwitch:{
        fontSize:18,
        padding:8,
        fontWeight:'600',
        color:'#fff'
    },
    EmailInput:{
        backgroundColor:'#D9D9D9',
        width:'56%',
        height:45,
        borderRadius:15,
        textAlign:'center',
        fontSize:18,
        fontWeight:'500',
        borderWidth:1,
        marginBottom:10
    },
    SenhaInput:{
        backgroundColor:'#D9D9D9',
        borderRadius:15,
        textAlign:'center',
        fontSize:18,
        fontWeight:'500',
        borderWidth:1,
        width:'56%',
        height:45,
        
    },
    botaoEntrar:{
        backgroundColor:'#fff',
        height:45,
        width: 270,
        marginTop:30,
        borderRadius:8,
        borderWidth:1,
        
    },
    botaoCadMot:{
        backgroundColor:'#FF3030',
        height:45,
        width: 270,
        marginTop:10,
        borderRadius:8,
        borderWidth:1,
        
    },
    botaoCadPax:{
        backgroundColor:'#14BC9C',
        height:45,
        width: 270,
        marginTop:10,
        borderRadius:8,
        borderWidth:1,
        
    },
    titleBotao:{
        fontSize:18,
        padding:8,
        fontWeight:'600',
        color:'black',
        textAlign:'center'
    }
})