import React, {useState} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions, ImageStore} from 'react-native'

import {useNavigation} from '@react-navigation/native'

const {width} = Dimensions.get('window');
const height = width * 0.9;

const imagens = [
    'https://cidadeverde.com/assets/uploads/noticias/53f9971ab4307f1ce59b4a426a7f6bf0.jpg',
    'https://cidadeverde.com/assets/uploads/noticias/5d8fb58819e4cc15c054b8e14739af47.jpg',
    'https://cidadeverde.com/assets/uploads/noticias/bfd60179dde6dec4de38af1da0875a6f.jpg',
    'https://cidadeverde.com/assets/uploads/noticias/c8bbcea73fe637200fc250877ec40918.jpg',
    'https://s2.glbimg.com/T8Z9Y3rKba3FwVGAHySTfo5rMjk=/0x0:1280x711/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/3/Q/5PBYVsT0GwBw1pvLClYw/whatsapp-image-2022-08-12-at-15.57.29.jpeg',
    'https://lupa1.com.br/uploads/imagens/whatsapp-image-2022-07-02-at-14-24-48-1656871352.jpeg',
    'https://10619-2.s.cdn12.com/rests/original/105_508754247.jpg',
    'https://s2.glbimg.com/uzmi7BUFm3VT-2v9F0fMfp_B-Ao=/0x0:1280x712/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/5/2/SoRbZjTwAJp1eHRyAgUA/whatsapp-image-2022-08-12-at-16.00.31.jpeg',


]   

export function Jericoroa(){

const navigation = useNavigation()

    return(
           <View style={{backgroundColor:'#334A58'}}>
               <ScrollView style={{backgroundColor:'#fff', marginBottom:15,}}>
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
                       <Text style={styles.title}>BAR JERI COROA</Text>
                       
                       
                       <View>
                           <Text style={styles.middle}>⬤ Comida no local;</Text>
                           <Text style={styles.middle}>⬤ Lugar familiar;</Text>
                           <Text style={styles.middle}>⬤ Temporário;</Text>
                           <Text style={styles.middle}>⬤ Funcionamento: </Text>
                           <Text style={styles.middle}>Todos os dias</Text>
                       </View>

                       <Text style={styles.taxa}>TAXA TRANSPORTE:</Text>
                       <Text style={styles.taxa1}>R$ 5 REAIS POR PESSOA</Text>

                       <TouchableOpacity style={styles.sobre}>
                           <Text style={styles.textoBotao}>SOBRE</Text>
                       </TouchableOpacity>

                       <TouchableOpacity style={styles.verRota} onPress={()=>navigation.navigate('RotaJericoroa')}>
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
    }
})