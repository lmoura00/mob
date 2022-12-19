import React, {useState, useEffect} from "react";
import {View, Text, Switch, StyleSheet, Image, Keyboard, TouchableOpacity, Animated, TextInput, KeyboardAvoidingView, TurboModuleRegistry, Alert} from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import logo from '../../images/logo.jpg'
import {useNavigation} from '@react-navigation/native'
import {useAuth} from "../../Hooks/Auth"
import fapema from '../../images/fapema.png'
import ifma from '../../images/ifma.png'


import LottieView from 'lottie-react-native'


export function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [PasswordVisible, setPasswordVisible] = useState(true)
    const [login, setLogin] = useState('')

    const {setUser} = useAuth()
    const navigation = useNavigation()
    const [offset] = useState(new Animated.ValueXY({x:0,y:95}));
    const [opacity] = useState(new Animated.Value(0));
    const [logotipo] = useState(new Animated.ValueXY({x:200, y:200})) 

    const [isEnabled, setIsEnabled] = useState(false);

    

    const toggleSwitch = () => setIsEnabled(previousState => !previousState) ;
    


    useEffect(()=> {
        KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
        KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)
        Animated.parallel([
            Animated.spring(offset.y, 
              {toValue:0,
                speed:3, 
                bounciness:23,
                useNativeDriver: false
              }),
            Animated.timing(opacity,{
              toValue:1,
              duration:700,
              useNativeDriver: false
            })
          ]).start()
    
        }, [])
    
    
    function keyboardDidShow(){
      Animated.parallel([
        Animated.timing(logotipo.x,{
          toValue:60,
          duration:50,
          useNativeDriver: false
          
        }),
        Animated.timing(logotipo.y,{
          toValue:60,
          duration:50,
          useNativeDriver: false
        }),
      ]).start()
    }
    
    function keyboardDidHide(){
      Animated.parallel([
        Animated.timing(logotipo.x,{
          toValue:220,
          duration:100,
          useNativeDriver: false
        }),
        Animated.timing(logotipo.y,{
          toValue:220,
          duration:100,
          useNativeDriver: false
        }),
      ]).start()
    }

    async function sendForm(){
        let response = await fetch('http://192.168.0.8:3000/login', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstParam: email,
              secondParam: password,
            }),
        })
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
                        marginTop:15,
                        borderColor:'black',
                        }}/>

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
                    <View style={{width:50, height:50}}>
                        <LottieView 
                            source={require('../../Assets/68036-mail.json')} 
                            autoPlay={true} 
                            loop={true} 
                            
                            />
                    </View>
            
                    <TextInput 
                        placeholder="E-MAIL" 
                        keyboardType="email-address" 
                        value={email}
                        onChangeText={setEmail} 
                        style={styles.EmailInput}
                        />
                </View>

                <View style={{flexDirection:'row'}}>
                    <View style={{height:50, width:50}}>
                        <LottieView 
                            source={require('../../Assets/76732-locked-icon.json')} 
                            autoPlay={true} 
                            loop={true} 
                            style={{}}
                            />
                    </View>
                    <View style={styles.SenhaInputContainer}>
                        <TextInput 
                            placeholder="SENHA" 
                            keyboardType='default'
                            value={password}
                            onChangeText={setPassword} 
                            maxLength={8} 
                            secureTextEntry={PasswordVisible} 
                            style={styles.SenhaInput}
                            />
                        <TouchableOpacity onPress={()=>setPasswordVisible(!PasswordVisible)} style={{marginLeft:25 }}>
                            {
                                PasswordVisible ?
                                <Ionicons name="eye" size={25} style={{}}/>
                                :
                                <Ionicons name="eye-off" size={25} style={{}}/>
                                
                            }
                        </TouchableOpacity>
                    </View>
                </View>

                <KeyboardAvoidingView >
                    <TouchableOpacity 
                        style={styles.botaoEntrar} 
                        onPress={()=>sendForm()}
                    >
                        
                        <Text style={styles.titleBotao}>ENTRAR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botaoCadMot} onPress={()=>navigation.navigate('CadastroMot1')}>
                        <Text style={styles.titleBotao}>CADASTRAR MOTORISTA</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botaoCadPax}  onPress={()=>navigation.navigate("CadastroPax")}>
                        <Text style={styles.titleBotao}>CADASTRAR PASSAGEIRO</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>navigation.navigate("Esqueci")}>
                        <Text style={styles.subtitleBotao}>ESQUECI A SENHA</Text>
                    </TouchableOpacity>
                    
                </KeyboardAvoidingView>

           

            </Animated.View>
            
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    containerInput:{
        flex:0.6,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#334A58"
    },
    containerLogo:{
        flex:0.4,
        marginTop:25,
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
        marginTop:10
    },
    TextSwitch:{
        fontSize:18,
        padding:5,
        fontWeight:'600',
        color:'#fff',
        fontFamily:'BalsamiqSans_400Regular'
    },
    EmailInput:{
        backgroundColor:'#D9D9D9',
        width:260,
        height:45,
        borderRadius:15,
        textAlign:'center',
        fontSize:18,
        borderWidth:1,
        marginBottom:10,
        opacity:1,
        fontFamily:'Ubuntu_500Medium',
        elevation:10
    },
    SenhaInput:{
        textAlign:'center',
        fontSize:18,
        width:'55%',
        height:50,
        marginLeft:40,
        fontFamily:'Ubuntu_500Medium',
        
    },
    SenhaInputContainer:{
        backgroundColor:'#D9D9D9',
        borderRadius:15,
        borderWidth:1,
        width:260,
        height:45,
        opacity:1,
        elevation:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    botaoEntrar:{
        backgroundColor:'#fff',
        height:45,
        width: 300,
        marginTop:30,
        borderRadius:8,
        borderWidth:0,
        fontWeight:'Inter_900Black',
        elevation:10
    },
    botaoCadMot:{
        backgroundColor:'#FF3030',
        height:45,
        width: 300,
        marginTop:10,
        borderRadius:8,
        borderWidth:0,
        elevation:10,
        
    },
    botaoCadPax:{
        backgroundColor:'#14BC9C',
        height:45,
        width: 300,
        marginTop:10,
        marginBottom:10,
        borderRadius:8,
        borderWidth:0,
        elevation:10,
    },
    titleBotao:{
        fontSize:18,
        padding:8,
        color:'black',
        textAlign:'center',
        fontFamily:'Ubuntu_700Bold'
    },
    subtitleBotao:{
        fontSize:16,
        padding:8,
        color:'#fff',
        textAlign:'center',
        fontFamily:'Inter_500Medium'
    },
    ifma:{
        width:100,
        height:90,
        marginBottom:40,
        marginRight:15
    },
    fapema:{
        width:160,
        height:60,
    },
})