import React, {useState} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions, Modal} from 'react-native'
import {Linking} from 'react-native'

import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {useNavigation} from '@react-navigation/native'

const {width} = Dimensions.get('window');
const height = width * 0.9;

const imagens = [
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t39.30808-6/236140194_3638820706343157_3332179418089233558_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=zoXX1LTBvukAX-C4lNg&_nc_ht=scontent.fthe18-1.fna&oh=00_AT8wkzONoXPh9ZXOOakc6Atn9jT1lPeQBnKb6MNo1_J8eg&oe=63375D8E',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t39.30808-6/236134346_3638820916343136_6617464504367045824_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=0wsy2onnlEUAX9H3Dlo&_nc_ht=scontent.fthe18-1.fna&oh=00_AT_lNKk5UZHFrPvWF8LNg1df8ZrefLKUyd6C8U_Npy3puQ&oe=63389E44',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t39.30808-6/232227671_3632462176979010_7943349495669474497_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9267fe&_nc_ohc=Gc4Q57dMHVYAX8a2Upi&_nc_ht=scontent.fthe18-1.fna&oh=00_AT89jmVX9i0EXt6oNimR6NRi5zeQsDKuYofAB0BHcpNQvA&oe=6337CDE0',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t39.30808-6/226317193_3627293067495921_2281683838395337478_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9267fe&_nc_ohc=uyr25btN88UAX8YKUXE&tn=3WG5uJQzW1OH0zMc&_nc_ht=scontent.fthe18-1.fna&oh=00_AT9DGTECv11-LW_VsGPLQiQIYNPjdsWHh50toXM4nwPX0Q&oe=63375040',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t39.30808-6/222612883_3624703867754841_8072811870761076313_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9267fe&_nc_ohc=mJr3u-KbCtEAX_3P_F5&_nc_ht=scontent.fthe18-1.fna&oh=00_AT_hPSgt_2g01qleuK-NaOPSa1hg-bVEFnofhl1_c5iqow&oe=6338F316',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t39.30808-6/221885033_3622027104689184_8969564766641471899_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9267fe&_nc_ohc=2HiV9YkPawIAX_8S0Rt&tn=3WG5uJQzW1OH0zMc&_nc_ht=scontent.fthe18-1.fna&oh=00_AT9LGehNXoOTpEus7FrElOnOxb2e7IG9_CE6kLP_iLBQhQ&oe=6338FC9D',
   
    


]   

export function Cocais(){

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
                                    <Text style={{fontSize:19, textAlign:'center'}}>Inspirado no modelo aberto dos mais nobres shoppings de Miami, o Cocais Shopping oferece um espaço seguro, confortável e acolhedor para os habitantes de Timon e Teresina passearem, encontrarem serviços e fazerem suas compras, tendo experiências positivas e memoráveis. E para os lojistas, além de charme, segurança e conforto, possui custo administrativo menor, favorecendo bons negócios.</Text>
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
                       <Text style={styles.title}>COCAIS</Text>
                       <Text style={styles.title1}>SHOPPING</Text>
                       
                       <View>
                           <Text style={styles.middle}>🛍️ O maior centro de compras da região!</Text>
                           <Text style={styles.middle}>🚗 Estacionamento Gratuito</Text>
                           <Text style={styles.middle}>🕖 Funcionamento de 10h às 22h </Text>
                           <Text style={styles.middle}>🍔 Pça de Alimentação de 10h às 22h </Text>

                           <View style={{flexDirection:'row', marginTop:15, alignItems:'center'}}>
                            <Entypo name="instagram" size={24} color="black" style={{marginRight:10}} />
                                <TouchableOpacity onPress={()=>Linking.openURL('https://www.instagram.com/cocaisshoppingoficial/')}>
                                    <Text style={styles.link}>@cocaisshoppingoficial</Text>
                                </TouchableOpacity>
                           </View>

                           <View style={{flexDirection:'row', marginTop:15, alignItems:'center'}}>
                            <Entypo name="facebook" size={24} color="black" style={{marginRight:10}} />
                                <TouchableOpacity onPress={()=>Linking.openURL('https://www.facebook.com/cocaisshopping/')}>
                                    <Text style={styles.link}>Cocais Shopping</Text>
                                </TouchableOpacity>
                           </View>
                           
                           <View style={{flexDirection:'row', marginTop:15, alignItems:'center'}}>
                           <MaterialCommunityIcons name="web" size={24} color="black" style={{marginRight:10}} />
                                <TouchableOpacity onPress={()=>Linking.openURL('https://www.cocaisshopping.com.br/')}>
                                    <Text style={styles.link}>https://www.cocaisshopping.com.br/</Text>
                                </TouchableOpacity>
                           </View>


                       </View>

                       <Text style={styles.taxa}>TAXA PARA ENTRAR:</Text>
                       <Text style={styles.taxa1}>GRATUITO</Text>

                       <TouchableOpacity style={styles.sobre} onPress={()=>setVisible(true)}>
                           <Text style={styles.textoBotao}>SOBRE</Text>
                       </TouchableOpacity>

                       <TouchableOpacity style={styles.verRota} onPress={()=>navigation.navigate('RotaCocais')}>
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
        marginVertical:120
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
})