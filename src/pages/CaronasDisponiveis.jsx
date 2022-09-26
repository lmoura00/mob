import React from "react";
import {View, Text, StyleSheet, Image,RefreshControl, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'

import LottieView from 'lottie-react-native'

export function CaronasDisponiveis(){

const navigation = useNavigation()

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  
const [refreshing, setRefreshing] = React.useState(false);

const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

    return(
        <SafeAreaView style={styles.container}>

            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
          />
        }
      >

                <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Yuri')}>
                    <SimpleLineIcons name="people" size={24} color="black"  />
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.nome}>YURI</Text>
                        <Text >PLACA: PIT-7854</Text>
                    
                    </View>

                    <View style={{flexDirection:'column', marginRight:30}}>
                        <Text>PARTIDA: 19:00 h</Text>
                        <Text>17/08/2022</Text>
                    </View>
                    <LottieView source={require('../Assets/11515-swipe-right-arrows.json')} autoPlay={true} loop={true} style={{marginLeft:160}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Jose')}>
                    <SimpleLineIcons name="people" size={24} color="black"  />
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.nome}>JOSÉ V.</Text>
                        <Text >PLACA: HUT-5694</Text>
                    
                    </View>

                    <View style={{flexDirection:'column', marginRight:30}}>
                        <Text>PARTIDA: 15:00 h</Text>
                        <Text>18/08/2022</Text>
                    </View>
                    <LottieView source={require('../Assets/11515-swipe-right-arrows.json')} autoPlay={true} loop={true} style={{marginLeft:160}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Vitoria')}>
                    <SimpleLineIcons name="people" size={24} color="black"/>
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.nome}>VITORIA EV.</Text>
                        <Text >PLACA: ABC-4196</Text>
                    
                    </View>

                    <View style={{flexDirection:'column', marginRight:30}}>
                        <Text>PARTIDA: 12:00 h</Text>
                        <Text>18/08/2022</Text>
                    </View>
                    <LottieView source={require('../Assets/11515-swipe-right-arrows.json')} autoPlay={true} loop={true} style={{marginLeft:160}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Thaiane')}>
                    <SimpleLineIcons name="people" size={24} color="black"  />
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.nome}>THAIANE</Text>
                        <Text >PLACA: PIX-4571</Text>
                    
                    </View>

                    <View style={{flexDirection:'column', marginRight:30}}>
                        <Text>PARTIDA: 12:00 h</Text>
                        <Text>18/08/2022</Text>
                    </View>
                    <LottieView source={require('../Assets/11515-swipe-right-arrows.json')} autoPlay={true} loop={true} style={{marginLeft:160}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Odaleia')}>
                    <SimpleLineIcons name="people" size={24} color="black" />
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.nome}>ODALEIA</Text>
                        <Text >PLACA: PRO-1243</Text>
                    
                    </View>

                    <View style={{flexDirection:'column', marginRight:30}}>
                        <Text>PARTIDA: 18:45 h</Text>
                        <Text>17/08/2022</Text>
                    </View>
                    <LottieView source={require('../Assets/11515-swipe-right-arrows.json')} autoPlay={true} loop={true} style={{marginLeft:160}}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Mariana')}>
                    <SimpleLineIcons name="people" size={24} color="black" />
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.nome}>MARIANA</Text>
                        <Text >PLACA:PAP-5678</Text>
                    
                    </View>

                    <View style={{flexDirection:'column', marginRight:30}}>
                        <Text>PARTIDA: 15:30 h</Text>
                        <Text>14/09/2022</Text>
                    </View>
                    <LottieView source={require('../Assets/11515-swipe-right-arrows.json')} autoPlay={true} loop={true} style={{marginLeft:160}}/>
                </TouchableOpacity>

            
            
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:5,
        backgroundColor:"#334A58"
    },
    botao:{
        flexDirection:'row',
        backgroundColor:'#fff',
        width:'100%',
        height:75,
        alignItems:'center',
        justifyContent:'space-evenly',
        borderWidth:2,
        margin:5
    },
    title:{
        fontSize:25,
        color:'black'
    },
    nome:{
        fontSize:22,
        color:'black'
    },
    placa:{
        fontSize:18,
        color:'black'
    },
    imagem:{
        width:150,
        height:150,
    },
})