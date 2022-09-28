import React, {useState} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions, Modal} from 'react-native'

import {Linking} from 'react-native'

import { Entypo } from '@expo/vector-icons'; 

import {useNavigation} from '@react-navigation/native'

const {width} = Dimensions.get('window');
const height = width * 0.9;

const imagens = [
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t1.18169-9/22449868_1957084384514617_8316780327499194748_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHZLaDWgp3dSVQBiA2hTSoXkV6Krd_RilyRXoqt39GKXLizqhRMvvKjTtRcRBSQ2gxFwRJX5EYfLgyakrfm6lp9&_nc_ohc=w0XWli1CO18AX8KBWYl&_nc_ht=scontent.fthe18-1.fna&oh=00_AT_wM5AZgaUW5Agoz-pXbLofWLzPJX4iqbUy3xLUPA9UDQ&oe=634E69F9',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t1.18169-9/22449896_1957084364514619_7551983529861275600_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeGpFi8E1ZeIiznij2diZuW8s_5YREWY2cKz_lhERZjZwpQW0ok3kaXFSLMksREIduPPRJTq3DY5AmeQUuywIdQi&_nc_ohc=6LhcdKcebqgAX_I2SQ8&tn=3WG5uJQzW1OH0zMc&_nc_ht=scontent.fthe18-1.fna&oh=00_AT_M-MxLkthu9zRyNX-RVnIxwfVTA5aEaDi6Spv4xEcaTw&oe=634B79EF',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t1.18169-9/22449724_1957084361181286_2237347879569093642_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHlhaXMct3Fr4wxhIdhI4ul2oIs7DOyxkfagizsM7LGR5_BNTrBarIw9MpWQ_I_iUNQz0fhN6szzxBvZzUXjBLv&_nc_ohc=qwdKXDzvOtgAX8MFf8y&_nc_ht=scontent.fthe18-1.fna&oh=00_AT9_cFOQ2oPY888zdSxivKy1K5B2eChM1uPH_RdKb9s88w&oe=634C2988',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t1.18169-9/22448564_1957084341181288_8606313369812939067_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHOICdm6ORPjJzVLRmsdI5vmSuAm8Jh0ZCZK4CbwmHRkH4QDE4jKcPIerOhKzWorw7CuMyTPrh5kyr2PRV_nzjS&_nc_ohc=_XzFgZBddXsAX8fiVMY&tn=3WG5uJQzW1OH0zMc&_nc_ht=scontent.fthe18-1.fna&oh=00_AT-NVFycYkcBDDugDIU3E3cHCGLkNs7wy50FgTTEmBIMOQ&oe=634D0DEE',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t1.18169-9/22448621_1957084281181294_5160790516998986076_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeG6PfdfvsiMxgJnI36MBYDD0RmfVQ7XjiLRGZ9VDteOIshnwLKrwSXo6aIasqurwP8mp2AqAIeSqN85QTUhdxbO&_nc_ohc=GWoIQ7eGKeAAX82YSzj&tn=3WG5uJQzW1OH0zMc&_nc_ht=scontent.fthe18-1.fna&oh=00_AT_wvcUTGdLL9qjhJxeR0VfgHmZCxRdmam5vkA_b3XwVDA&oe=634DD673',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t1.18169-9/22519613_1957084277847961_7661633805960970105_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeElv5foNfnK6R99qDRzef0MZSxDwkJszzhlLEPCQmzPOKDwmLNMomkm3f6mQip179_2dk2yKyY4LfpW59NlMArU&_nc_ohc=ZVSMUfLKPBsAX_2f0UH&_nc_ht=scontent.fthe18-1.fna&oh=00_AT-4tsFDOpoCgsMMEvSOUJCSsg_c3e4ju5z0gq3TuQwMsA&oe=634EA8B8',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t1.18169-9/22552321_1957084231181299_5073876818718488883_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeFaj_Ms03dHq6EwJtTqzVTdElxkKzmMTCQSXGQrOYxMJPpa-UOzET4mgx0rSmB4zG543pFP4pySpBZId6aqcTxH&_nc_ohc=NUesrM70A_QAX8h5Hqs&_nc_ht=scontent.fthe18-1.fna&oh=00_AT9lisFyd6btAvpm1mo1caKpuNqebO490Biq4wnkej9L4A&oe=634BE3C3',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t31.18172-8/1500964_1459732130916514_893422592_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeGtH1H1JWFyJFw7KTCsCDO3MUJZI1kTSAsxQlkjWRNICxOYrdEfVZBvUsXR0Vk4lk9fYsWUkP82OAhnl3Fhw3n-&_nc_ohc=Dk2pzfOr_McAX-DXgEd&_nc_ht=scontent.fthe18-1.fna&oh=00_AT-aHYy3ku-v0PVecGy-zhifQpY28fY37TAeMdLbkJBtTQ&oe=634E817B',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t31.18172-8/1492642_1452968164926244_106881821_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeFqwypEhHIiwp4buEmtbZx6gN_T_jmD8LeA39P-OYPwtw-kmZRq7I3X87WFCjP3_BicFxH4j_ogAiqbZ8h0d85r&_nc_ohc=Q7qsU1iirDsAX8e0_YF&_nc_oc=AQnCvBahnSNrEsZ-SN6cy3gIl_ONpeAM9EMefoQcoeX4535uu3pFgvcAYst3xkqWC4GHtOuCJT3CFAmGcvAzVpzI&_nc_ht=scontent.fthe18-1.fna&oh=00_AT_Amn2vtxRWmzcHwWvYMhHTs_xn0iDl916j1-ebndQMAw&oe=634B3A48',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t31.18172-8/860399_1432655040290890_1464674184_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeGKN_4rcNY9e_5jNOcj1mliwIbye0SX7bDAhvJ7RJftsO3jq7XTwVSRF_TFQMAnzv709DAE0xmTxZAiCBUUfX_H&_nc_ohc=MBaCDHjFO6EAX8pt_qr&_nc_ht=scontent.fthe18-1.fna&oh=00_AT8wsMPfhSAXFzA_k0Dboex7jIOKuBgulaumdz5SXflDjw&oe=634BC394'


]   

export function Alice(){

    const navigation = useNavigation()
    const [visible, setVisible] = useState(false);

    return(
           <View style={{backgroundColor:'#334A58'}}>
               <ScrollView style={{backgroundColor:'#fff', marginBottom:15,}}>

                    <Modal
                            animationType="fade"
                            visible={visible}
                            statusBarTranslucent={false}
                            transparent={true}
                            style={{}}
                            >
                                <View style={styles.modal}>
                                    <Text style={styles.titleModal}>SOBRE</Text>
                                    <ScrollView>
                                        <Text style={styles.textoModal}>Sítio banhado com riachos e minas naturais de águas cristalinas. 
                                            Disponível para festas e eventos com agradável paisagem verde da região, 
                                            aliada à tranquilidade e exuberância do ambiente de pleno contato com a natureza.
                                        </Text>
                                        <Text style={styles.textoModal}>
                                        3 Chalés com alto padrão de conforto e requinte, equipados com: 
                                        dois aparelhos de ar condicionado, uma Cama de casal, duas Camas de solteiro, espaço para Redes, Televisor, DVD e Frigobar. 
                                        Acomodação de até 10 pessoas por chalé.
                                        </Text>
                                    </ScrollView>
                                    <TouchableOpacity 
                                        onPress={()=>setVisible(false)} 
                                        style={styles.botaoModal1}>
                                            <Text style={styles.textBotao}>FECHAR</Text>
                                    </TouchableOpacity>
                                    
                                </View>
                            
                        </Modal>

                   <View style={styles.containerImages}>
                       <ScrollView 
                       pagingEnabled 
                       horizontal 
                       showsHorizontalScrollIndicator={false}
                       style={styles.scroll}>
                           {
                               imagens.map((imagem, index) => (
                                   <Image 
                                       key={index}
                                       style={styles.image} 
                                       source={{uri:imagem}}/>
                               ))
                           }
                       </ScrollView>
                       <View style={styles.pagination}>
                           {
                               imagens.map((i,k) => (
                                   <Text key={k} style={styles.paginText}>⬤</Text>
                               ))
                           }
                       </View>
                   </View>
                   
                   <View style={styles.containerInfor}>
                       <Text style={styles.title}>SÍTIO</Text>
                       <Text style={styles.title1}>ALICE</Text>
                       
                       <View>
                           <Text style={styles.middle}>⬤ Aluguel de espaço;</Text>
                           <Text style={styles.middle}>⬤ Riacho;</Text>
                           <Text style={styles.middle}>⬤ Possui três chalés;</Text>
                           
                           

                           <View style={{flexDirection:'row', marginTop:15, alignItems:'center'}}>
                            <Entypo name="instagram" size={24} color="black" style={{marginRight:10}} />
                                <TouchableOpacity onPress={()=>Linking.openURL('https://www.instagram.com/sitioalice/')}>
                                    <Text style={styles.link}>@sitioalice</Text>
                                </TouchableOpacity>
                           </View>

                           <View style={{flexDirection:'row', marginTop:15, alignItems:'center'}}>
                            <Entypo name="facebook" size={24} color="black" style={{marginRight:10}} />
                                <TouchableOpacity onPress={()=>Linking.openURL('https://www.facebook.com/S%C3%ADtio-Alice-1428728514016876/')}>
                                    <Text style={styles.link}>Sítio Alice</Text>
                                </TouchableOpacity>
                           </View>

                       </View>

                       <Text style={styles.taxa}>DIARIA PARA ALUGUEL</Text>
                       <Text style={styles.taxa1}>R$ 1.700,00 </Text>

                       <TouchableOpacity style={styles.sobre} onPress={()=>setVisible(true)}>
                           <Text style={styles.textoBotao}>SOBRE</Text>
                       </TouchableOpacity>

                       <TouchableOpacity style={styles.verRota} onPress={()=>navigation.navigate('RotaAlice')}>
                           <Text style={styles.textoBotao}>VER ROTA</Text>
                       </TouchableOpacity>

                       <TouchableOpacity style={styles.voltar} onPress={()=> navigation.navigate('PtsTur')}>
                           <Text style={styles.textoBotao}>VOLTAR</Text>
                       </TouchableOpacity>
                   </View>
               </ScrollView>
           
           </View> 
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#334A58",
        marginTop:15,
    },
    containerImages:{
       marginTop:25,
       marginBottom:25,
       width,
       height,
       backgroundColor:'#334A58'
    },
    containerInfor:{
        alignItems:'center',
        backgroundColor:'#D9D9D9'
    },
    taxa:{
        fontSize:20,
        fontWeight:'600',
        marginTop:15
    },
    taxa1:{
        fontSize:20,
        fontWeight:'600',
        marginBottom:15
    },
    middle:{
        fontSize:20,
        
    },
    link:{
        fontSize:20,
        color:'#0206eb',
        textDecorationLine:'underline'
    },
    title:{
        fontSize:27,
        color:'black',
        fontWeight:'900'
    },
    title1:{
        fontSize:27,
        color:'black',
        fontWeight:'700',
        marginBottom:20
    },
    image:{
        width, 
        height, 
        resizeMode: 'cover'
    },
    scroll:{
        width,
        height
    },
    pagination:{
        flexDirection:'row', 
        position: 'absolute', 
        bottom:0, 
        alignSelf:'center'
    },
    paginText:{
        color:'#fff',
        margin:3,
    },
    paginActiveText:{
        color:'#888',
        margin:3,
    },
    sobre:{  
        backgroundColor:'#fff',
        height:45,
        width: 270,
        marginTop:10,
        borderRadius:8,
        borderWidth:1,
    },
    verRota:{
        backgroundColor:'#14BC9C',
        height:45,
        width: 270,
        marginTop:10,
        borderRadius:8,
        borderWidth:1,
    },
    voltar:{  
        backgroundColor:'#FF3030',
        height:45,
        width: 270,
        marginTop:10,
        borderRadius:8,
        borderWidth:1,
        marginBottom:30,
    },
    textoBotao:{
        fontSize:18,
        padding:8,
        fontWeight:'600',
        color:'black',
        textAlign:'center'
    },
    modal:{
        alignSelf: 'center',
        backgroundColor:'#f9f9f9',
        padding:15,
        elevation:15,
        borderRadius:20,
        marginVertical:80,
        width:"80%",
        height:"80%",
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
        marginVertical:40
    },
    titleModal:{
        textAlign:'center',
        fontSize:20,
        backgroundColor:'#fff',
        
        
    },
    textBotao:{
        fontSize:15,
        fontWeight:'600',
        textAlign:'center',
    
    },
    textoModal:{
        fontSize:20,
        textAlign:'center',
        padding:5
    },
})
