import React, {useState} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions, Modal} from 'react-native'
import {Linking} from 'react-native'

import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {useNavigation} from '@react-navigation/native'

const {width} = Dimensions.get('window');
const height = width * 0.9;

const imagens = [
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t39.30808-6/278695134_3853860404839185_5681433844277651096_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeE3lPNzVvUbRQTVPC-dsUMw68E1YstQpBvrwTViy1CkGxjpGXr5GU3_z0VabTYH680q6s1BPZRl2rITOYHSVUV4&_nc_ohc=WGv39jxMYXAAX_TLyGw&tn=3WG5uJQzW1OH0zMc&_nc_ht=scontent.fthe18-1.fna&oh=00_AT9x4lGDsBIH37lPdSc-yTD1vCuiCUGZDrhUH-mDM3Wf0w&oe=632C82BF',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t39.30808-6/275427590_3820077871550772_427425882123022243_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeF0k5EHVQ2DDf-vyMbNM3WFpK8KivQZMWOkrwqK9BkxY4Jc-8HT-lB6CFm1UTEY4qjIWLJrpUp059_wcl7KiFs_&_nc_ohc=BLsqedNs2d0AX9SkpoY&_nc_ht=scontent.fthe18-1.fna&oh=00_AT_RcWV7hcOZyPG3KCdAlq_ylGIX2QmtIL7TwB8DakPB9A&oe=632C81DF',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t39.30808-6/275057678_3815775091981050_8095819324610582418_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeE5Lm4UjgL-b9uRHsIk8yNz-ioleX2okPb6KiV5faiQ9u55asiRs4OUP64yxJKEn9PD6MSZrUqDTl08er8LJB9J&_nc_ohc=UbnkIq-O-toAX_Z71UM&_nc_ht=scontent.fthe18-1.fna&oh=00_AT9jGOqmwk-GB0ybDdCMu9WbGiQbLAIsTRXcIInnMcnnWg&oe=632CA08C',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t39.30808-6/272742542_3785533725005187_7835177954822781913_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeGfGfc9tjRDv0oSD4-fNZYTxHvTs9huwbnEe9Oz2G7BueRVrKJ15nNucoZrePwS-IWLLqGicA6_Av-mXPNaRjmW&_nc_ohc=VZzYt83YvjwAX8HWC7b&tn=3WG5uJQzW1OH0zMc&_nc_ht=scontent.fthe18-1.fna&oh=00_AT-PCjKrU8WjwYW4zqVQLIrPDOCnE7YPo3Nn0aZ10jwn5A&oe=632B5D57',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t39.30808-6/242838077_3680246605533900_592178864906160309_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeEO1Bqdy2vz0dFxvz-svp3ePDp_fb88wKQ8On99vzzApPqm4DMo3GtiG7kqf30S4G1IMnSFUyFCr6AE86yQwT_R&_nc_ohc=fAHswl2g7yMAX8BaaBW&tn=3WG5uJQzW1OH0zMc&_nc_ht=scontent.fthe18-1.fna&oh=00_AT80Iiiwx22mSvMeHjrc08pjticCk7dTAPiXOBHhz_OrXg&oe=632BCEAD',
    'https://www.google.com/maps/uv?pb=!1s0x78e3779c66bdba9%3A0x402c62268c09fa9e!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPq-T0w9KZJUHjpBUcaiLR1FVh7TUwluMixtrBL%3Dw266-h200-k-no!5scocais%20shopping%20-%20Pesquisa%20Google!15sCgIgAQ&imagekey=!1e10!2sAF1QipPq-T0w9KZJUHjpBUcaiLR1FVh7TUwluMixtrBL&hl=pt-BR&sa=X&ved=2ahUKEwjZ4cve1Z76AhXpu5UCHYEFChsQoip6BAhbEAM#',
   
    


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
        marginVertical:480
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