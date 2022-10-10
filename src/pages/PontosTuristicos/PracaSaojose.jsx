import React, {useState} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions, Modal} from 'react-native'
import {Linking} from 'react-native'

import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {useNavigation} from '@react-navigation/native'

const {width} = Dimensions.get('window');
const height = width * 0.9;

const imagens = [
    'https://timon.ma.gov.br/site/wp-content/uploads/2016/11/EA9A3290.jpg',
    'https://timon.ma.gov.br/site/wp-content/uploads/2016/11/igreja-l.jpg',
    'https://timon.ma.gov.br/site/wp-content/uploads/2016/11/EA9A3277-300x183.jpg',
    'https://timon.ma.gov.br/site/wp-content/uploads/2016/11/EA9A3289.jpg',
    'https://timon.ma.gov.br/site/wp-content/uploads/2016/11/EA9A3285.jpg',
    'https://timon.ma.gov.br/site/wp-content/uploads/2016/11/EA9A3292.jpg',
    'https://timon.ma.gov.br/site/wp-content/uploads/2016/11/EA9A3284.jpg',
    'https://timon.ma.gov.br/site/wp-content/uploads/2016/11/EA9A3283.jpg',
    'https://timon.ma.gov.br/site/wp-content/uploads/2016/11/EA9A3282.jpg',


]   

export function PracaSaoJose(){

    const navigation = useNavigation()
    const [alerta, setAlerta] = useState(false)
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
                                    <Text style={styles.textoModal}>O espaço é considerado pelos timonenses um símbolo histórico e de identidade de Timon </Text>
                                    <Text style={styles.textoModal}>Esse relevante símbolo cultural da cidade já foi palco de muitos encontros e lembranças de timonenses, como contou dona Maria de Jesus Brito, conhecida como dona Pituca, que há décadas trabalha com lanches no Mercado Público do Centro de Timon. Para ela, a reforma está uma maravilha. </Text>
                                    
                                    <Text style={styles.textoModal}></Text>
                                    

                                    <TouchableOpacity 
                                        onPress={()=>setVisible(false)} 
                                        style={styles.botaoModal1}>
                                            <Text style={styles.textBotao}>FECHAR</Text>
                                    </TouchableOpacity>
                                    
                                </View>
                            
                        </Modal>

                        
                        <Modal
                            animationType="fade"
                            visible={alerta}
                            statusBarTranslucent={false}
                            transparent={true}
                            style={{}}
                            >
                                <View style={styles.modal2}>
                                    <Text style={styles.titleModal}>ALERTA</Text>
                                        <Text style={{fontSize:15, textAlign:'center', marginTop:15}}>Mob Timon coleta dados de local para ativar trajetos, localização, mesmo quando o app está fechado ou não está em uso.</Text>
                                
                                        <TouchableOpacity 
                                            onPress={()=>navigation.navigate('RotaPracaSaoJose') || setAlerta(false)} 
                                            style={styles.botaoModalAlerta}>
                                                <Text style={styles.textBotao}>CONTINUAR</Text>
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
                       <Text style={styles.title}>PRAÇA</Text>
                       <Text style={styles.title1}>SÃO JOSÉ</Text>
                       
                       <View>
                           <Text style={styles.middle}>⬤ Local de lazer para a familia com muitas opções gastronomicas</Text>
                           <Text style={styles.middle}>⬤ Local com segurança e no centro da cidade.</Text>
                           <Text style={styles.middle}> </Text>
                           <Text style={styles.middle}> </Text>

                           


                       </View>

                       <Text style={styles.taxa}>TAXA PARA ENTRAR:</Text>
                       <Text style={styles.taxa1}>Gratuito</Text>

                       <TouchableOpacity style={styles.sobre} onPress={()=>setVisible(true)}>
                           <Text style={styles.textoBotao}>SOBRE</Text>
                       </TouchableOpacity>

                       <TouchableOpacity style={styles.verRota} onPress={()=>setAlerta(true)}>
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
        marginVertical:50
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
    botaoModalAlerta:{
        backgroundColor:'#FF3030',
        height: 35,
        width:"40%",
        padding:5,
        borderRadius:15,
        borderWidth:1,
        alignSelf:'center',
        margin:5,
        elevation:10,
        marginTop:170
        
    },
    modal2:{
        alignSelf: 'center',
        backgroundColor:'#f9f9f9',
        padding:20,
        elevation:10,
        borderRadius:20,
        marginVertical:280,
        width:"80%",
        height:"50%",
    },
})