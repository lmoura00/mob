import React, {useState} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions, Modal} from 'react-native'
import {Linking} from 'react-native'

import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {useNavigation} from '@react-navigation/native'

const {width} = Dimensions.get('window');
const height = width * 0.9;

const imagens = [
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t39.30808-6/304976266_619314723002106_7874954515775562057_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=2n0pzQo7Wy0AX86yZmR&_nc_oc=AQnE9jml73OOcAvdf2qExN5_ghi2_ekxAzSqeIIqni5xPbWq7nDqNpIEsj8Ypk1MY3anRRqsDZS2aBrcDjRO5uhJ&_nc_ht=scontent.fthe18-1.fna&oh=00_AT-FpJ1UAz2850paMsl-oR8sDDRCsxJrMSrgJw4Blnxxag&oe=6336BABE',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t39.30808-6/308633570_631849581748620_5697086338457555428_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=Kb_e46OnHM8AX9KjlvG&_nc_ht=scontent.fthe18-1.fna&oh=00_AT9FbBg-btgAisQZEEnE8dFrz-rsHxQZcezAa_SHYAi_vA&oe=63379C86',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t1.6435-9/193774705_4045852008830986_2310235815399048077_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9267fe&_nc_ohc=KCoylQjelpsAX80Ue53&_nc_ht=scontent.fthe18-1.fna&oh=00_AT9ZkKXu92ppO_s7RQgcyn-FIzeLws9uidtIes-FYqGbOQ&oe=6356CCB3',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t1.6435-9/192389572_4018704844879036_7932411948919091314_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9267fe&_nc_ohc=aP-dNylP6zEAX9twpNV&tn=3WG5uJQzW1OH0zMc&_nc_ht=scontent.fthe18-1.fna&oh=00_AT--rp-9ml1GmXoSvEyUE88440lSV69YdmPoKz1x-WLAOw&oe=6358C67C',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t1.6435-9/87818667_2781969308552602_3414631268132847616_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9267fe&_nc_ohc=8CpZFl_BUloAX_Zvztx&tn=3WG5uJQzW1OH0zMc&_nc_ht=scontent.fthe18-1.fna&oh=00_AT8mtzmxGe-_FpCxzB0Q9fKBl91ldjkYe9RcfEdCdtAJrQ&oe=6356D568',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t1.6435-9/87987230_2779855285430671_7888123578485309440_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9267fe&_nc_ohc=BhC59SREyMwAX-QiKQD&_nc_ht=scontent.fthe18-1.fna&oh=00_AT95h_fqK2fXUfQ-aafihakFudFOoHc9VopNMfxzk-DzOA&oe=63585BB8',,
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t1.6435-9/83045976_2720764808006386_1963227927503962112_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9267fe&_nc_ohc=WAdU1dkhSM0AX9m-6gu&_nc_ht=scontent.fthe18-1.fna&oh=00_AT9yxaxlmqJJIoxH2-Jox2ExP9iqRxNlkVahCs5w41R4wA&oe=6356B3D6',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t1.6435-9/82900021_2720761201340080_6649174132342652928_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9267fe&_nc_ohc=1p2wRxPlBLoAX9-lmtq&_nc_ht=scontent.fthe18-1.fna&oh=00_AT82bavukoXfB4uu7j75uVKnwfFqsTts6ecE_H7DdtEATw&oe=635752C1',
    'https://scontent.fthe18-1.fna.fbcdn.net/v/t1.6435-9/80715047_2668415083241359_8597044218868793344_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9267fe&_nc_ohc=IK977wmBJHMAX_Cw8e3&_nc_ht=scontent.fthe18-1.fna&oh=00_AT9R_edswo6aXmTttIVDqlezHlTAqE4_fkJSJEudiTaJvQ&oe=6358C28D',
   
    


]   

export function PortalSol(){

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
                                    <Text style={styles.textoModal}>É o lugar ideal para o seu lazer e descanso nos finais de semana e feriados. </Text>
                                    <Text style={styles.textoModal}>Ambiente tranquilo, familiar, onde dispomos de 2 piscinas, parque para crianças e uma grande área verde para você relaxar e renovar as energias. </Text>
                                    <Text style={styles.textoModal}>Temos uma estrutura completa de restaurante e churrascaria, com as mais variadas opçoes de pratos. </Text>
                                    <Text style={styles.textoModal}>Venha conhecer-nos e desfrutar desse paraíso com a gente! </Text>
                                    

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
                                            onPress={()=>navigation.navigate('RotaPortalSol') || setAlerta(false)} 
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
                       <Text style={styles.title}>BALNEÁRIO</Text>
                       <Text style={styles.title1}>PORTAL DO SOL</Text>
                       
                       <View>
                           <Text style={styles.middle}>⬤ Local de lazer nos finais de semana e feriados.</Text>
                           <Text style={styles.middle}>⬤ Dispõe de 2 piscinas, parque para criança.</Text>
                           <Text style={styles.middle}>⬤ Funcionamento: </Text>
                           <Text style={styles.middle}> Sexta, Sábado e Domingo </Text>

                           <View style={{flexDirection:'row', marginTop:15, alignItems:'center'}}>
                            <Entypo name="instagram" size={24} color="black" style={{marginRight:10}} />
                                <TouchableOpacity onPress={()=>Linking.openURL('https://www.instagram.com/balnearioportaldosol/?fbclid=IwAR0yh5O8G3iPZYr0uW5oJZyvtRJWDrV8TYhxfM2YtjE8tofoE-gDAf4Jw0I')}>
                                    <Text style={styles.link}>@balnearioportaldosol</Text>
                                </TouchableOpacity>
                           </View>

                           <View style={{flexDirection:'row', marginTop:15, alignItems:'center'}}>
                            <Entypo name="facebook" size={24} color="black" style={{marginRight:10}} />
                                <TouchableOpacity onPress={()=>Linking.openURL('https://www.facebook.com/balnearioportaldosol')}>
                                    <Text style={styles.link}>Balneário Portal do Sol</Text>
                                </TouchableOpacity>
                           </View>
                           
                           <View style={{flexDirection:'row', marginTop:15, alignItems:'center'}}>
                           <MaterialCommunityIcons name="web" size={24} color="black" style={{marginRight:10}} />
                                <TouchableOpacity onPress={()=>Linking.openURL('https://balnearioportaldosol.business.site/')}>
                                    <Text style={styles.link}>balnearioportaldosol.business.site/</Text>
                                </TouchableOpacity>
                           </View>


                       </View>

                       <Text style={styles.taxa}>TAXA PARA ENTRAR:</Text>
                       <Text style={styles.taxa1}>R$ 5 por pessoa</Text>

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