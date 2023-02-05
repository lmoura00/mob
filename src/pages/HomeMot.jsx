import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  Modal,
  Alert
} from "react-native";
import LottieView from "lottie-react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import api from "../../config/index.json";
import { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import MapViewDirections from "react-native-maps-directions";
import { useAuth } from "../Hooks/Auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, set, onValue, push, update, child, get, DataSnapshot } from "firebase/database";
import { getStorage, ref as sRef, getDownloadURL,  uploadBytes, deleteObject    } from "firebase/storage";

import { useNavigation } from "@react-navigation/native";
import MaskInput, {Masks, createNumberMask } from "react-native-mask-input";

export function HomeMot() {
  const GOOGLE_MAPS_APIKEY = api.googleApi;
  const [imageUrl, setImageUrl] = useState(null)
  const [start, setStart] = useState(null);
  const [destino, setDestino] = useState(null);
  const [aberto, setAberto] = useState(false);
  const [aberto1, setAberto1] = useState(false);
  const [vagas, setVagas] = useState('');
  const [placa, setPlaca] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const mapEl = useRef(null);
  const [distance, SetDistance] = useState(null);
  const auth = getAuth();


  const [nome, setNome] = useState('');
  const [lastname, setLastname] = useState('');
  
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const navigation = useNavigation();
  const hourMask = createNumberMask({
    prefix: [],
    delimiter: '',
    separator: ':',
    precision: 2,
  })
  

  useEffect(()=>{
    async function ler(){
      const auth = getAuth()
      const dbRef = ref(getDatabase());
      const userId = auth.currentUser.uid
      get(child(dbRef, `users/${userId}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setNome(snapshot.val().name);
          setEmail(snapshot.val().email)
          setTelefone(snapshot.val().telefone);
          setLastname(snapshot.val().lastname);
        } else {
          console.log("No data available");
          alert("No data available");
        }
          setEmail(auth.currentUser.email);
   
      }).catch((error) => {
        console.error(error);
      });
      const storage = getStorage();
      getDownloadURL(sRef(storage, `${userId}`))
        .then((url) => {
          
          setImageUrl(url)

        })
        .catch((error)=>{
          console.log(error)
        })
    }
    
   
    ler()

  },[])


  
    //let CarMot = Math.floor(Math.random() * 1000) + 1 

    
    const userUid = auth.currentUser.uid
    function enviarCarona(nome, sobrenome, telefone, partida, destino, placa, data, horario, vagas) {
        const db = getDatabase();
        const newCaronaKey = push(child(ref(db), 'caronas')).key;
        set(ref(db , "caronas/" + newCaronaKey  ), {
            id: newCaronaKey,
            uid:userUid,
            imageUrl:imageUrl,
            name: nome,
            email: email,
            lastname: sobrenome,
            telefone:telefone,
            partida:partida,
            destino:destino,
            placa: placa,
            data: data,
            vagas: vagas,
            horario: horario, 

            }).then(() => {
              console.log("Dados enviados com sucesso");
              setAberto(false);
              setDestino('');
              setStart('');
              setVagas('');
              setPlaca('');
              setData('');
              setHorario('');
              
            }).catch(()=>{
                console.log("Dados não enviados")
            })
          }
  

  return (

    <SafeAreaView style={styles.container}>
       

        
        <Modal
            animationType="fade"
            visible={aberto}
            statusBarTranslucent={false}
            transparent={true}
            style={{}}
        >
            <View style={styles.modal}>
              

                    <View style={{alignItems:'center', marginBottom:5}}>
                        <Text style={styles.titleModal}>NOVA CARONA</Text>
                    </View>
                    <ScrollView style={{paddingBottom:15}}>

                        <Text style={styles.title}>VAGAS</Text>
                        <TextInput placeholder="Vagas" keyboardType="number-pad" value={vagas} onChangeText={setVagas} style={styles.input}></TextInput>
                        <Text style={styles.title}>PLACA DO VEÍCULO</Text>
                        <TextInput placeholder="Placa" keyboardType="default" value={placa} onChangeText={setPlaca} style={styles.input}></TextInput>
                        <Text style={styles.title}>DATA PARTIDA</Text>
                        <MaskInput
                          value={data}
                          style={styles.input}
                          keyboardType='number-pad'
                          onChangeText={setData}
                          mask={Masks.DATE_DDMMYYYY}
                          />
                        <Text style={styles.title}>HORÁRIO PARTIDA</Text>
                        <MaskInput
                          value={horario}
                          style={styles.input}
                          keyboardType='number-pad'
                          onChangeText={setHorario}
                          mask={hourMask}
                          maxLength={5}
                          />
                      </ScrollView>
          
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                <TouchableOpacity 
                    style={styles.botaoContinuarModal}
                    onPress={()=>{if(vagas === null || horario === null || data === null )
                      {Alert.alert('Atenção', 'Os campos não podem ficar vazios.')}
                      else{setAberto1(true)||setAberto(false)}}}
                    >
                    <Text>CONTINUAR</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.botaoCancelarModal} 
                    onPress={()=>setAberto}
                >
                    <Text>CANCELAR</Text>
                </TouchableOpacity>
            </View>

            </View>
            
        </Modal>


        <Modal
            animationType="fade"
            visible={aberto1}
            statusBarTranslucent={false}
            transparent={true}
            style={{}}
        >
            <View style={styles.modal1}>
             

                    <View style={{alignItems:'center', marginBottom:5}}>
                        <Text style={styles.titleModal}>CONFIRMA?</Text>
                    </View>
                    {start &&       <MapView 
                    style={{flex:1, elevation:10, borderRadius:8}}
                    initialRegion={start}
                    showsUserLocation={false}
                    ref={mapEl}
                    loadingEnabled
                >
                <MapViewDirections
                    origin={start}
                    destination={destino}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="blue"
                    onReady={result=>{
                        SetDistance(result.distance)
                        mapEl.current.fitToCoordinates(
                            result.coordinates,{
                                edgePadding:{
                                    top:50,
                                    bottom:50,
                                    left:50,
                                    right:50,
                                }
                            }
                        )
                    }}
                    
                />
                <Marker
                coordinate={destino}
                />
                <Marker
                coordinate={start}
                pinColor={'#14BC9C'}
                />
                </MapView>}
          
              

          
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                <TouchableOpacity 
                    style={styles.botaoSimModal}
                    onPress={()=>enviarCarona(nome, lastname, telefone, start, destino, placa, data, horario, vagas) || setAberto1(false) || navigation.navigate('CaronasDisponiveis') || Alert.alert('Só um aviso...', 'A sua carona foi criada com sucesso')}
                >
                    <Text>SIM</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.botaoNaoModal} 
                    onPress={()=>setAberto1(false)}
                >
                    <Text>NÃO</Text>
                </TouchableOpacity>
            </View>

            </View>
            
        </Modal>


      <Text style={styles.homeTitle}>
        INSIRA OS DADOS PARA ADICIONAR A NOVA CARONA
      </Text>
      

    <View style={{marginBottom:150}}>

      <Text style={styles.title}>PARTIDA</Text>
    
      <GooglePlacesAutocomplete
        placeholder="De onde vamos sair?"
        onPress={(data, details = null) => {
          setStart({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.000922,
            longitudeDelta: 0.000421,
          });
        }}
        query={{
          key: "AIzaSyDOAZI4PpuctFzMhAloX_Ugs_pl0hLeG_c",
          language: "pt-br",
          components: 'country:br'
        }}
        enablePoweredByContainer={false}
        fetchDetails={true}
        disableScroll
        styles={{ listView: {minHeight:150, marginTop:50 } }}
      />
      {start&& 
        <MapView 
          style={{height:120, width:'50%', position:"absolute", left: 100, top:100}}
          initialRegion={start}
          showsUserLocation={false}
          loadingEnabled
        >
          <Marker
            coordinate={start}
            pinColor={'#14BC9C'}
          />
        </MapView>
      }
    </View>
    <View style={{marginTop:50, marginBottom:45}}>

      <Text style={styles.title}>DESTINO</Text>
      <GooglePlacesAutocomplete
        placeholder="Para onde vamos?"
        onPress={(data, details = null) => {
          setDestino({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.000922,
            longitudeDelta: 0.000421,
          });
        }}
        query={{
          key: "AIzaSyDOAZI4PpuctFzMhAloX_Ugs_pl0hLeG_c",
          language: "pt-br",
          components: 'country:br'
        }}
        enablePoweredByContainer={false}
        fetchDetails={true}
        styles={{  listView: {minHeight:150, marginTop:50 } }}
      />
            {destino&& 
        <MapView 
          style={{height:120, width:'50%', position:"absolute", left: 100, top:100}}
          initialRegion={destino}
          showsUserLocation={false}
          loadingEnabled
        >
          <Marker
            coordinate={destino}
          />
        </MapView>
      }
      
    </View>
    <ScrollView style={{marginTop:150}}>

      
    
    <TouchableOpacity 
        style={styles.botao} 
        onPress={()=>{
            if(start === null || destino === null )
            {Alert.alert('Atenção', 'Os campos não podem ficar vazios.')}
            else{setAberto(true)}}}>
        <Text style={{fontSize:18}}>OK</Text>
    </TouchableOpacity>
    </ScrollView>

   
    
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "#334A58",
  },
  homeTitle: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
    backgroundColor: "#FBFBFB",
    textDecorationLine: "underline",
  },
  title: {
    color: "#272727",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
    paddingHorizontal: 10,
    textDecorationLine: "underline",
  },
  botao:{
    backgroundColor:'#4DEA73',
    marginBottom:50,
    width:60,
    height:45,
    borderRadius:9, 
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'

  },
  input:{
    backgroundColor:'#b9b9b9',
    height:40,
    marginBottom:5,
    borderRadius:8,
    fontSize:16,
    paddingHorizontal:8
  },
  modal: {
    alignSelf: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
    elevation: 10,
    borderRadius: 20,
    marginVertical: 190,
    width: "80%",
    height: "60%",
  },
  modal1: {
    alignSelf: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
    elevation: 10,
    borderRadius: 20,
    marginVertical: 190,
    width: "80%",
    height: "60%",
  },
  distance:{
    justifyContent: "flex-end",
    left: "25%",
    bottom: 10,
    position: "absolute",
    backgroundColor: "#fff",
    alignSelf: "center",
    width: "50%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.7,
    borderRadius:10,
    elevation:10
  },
  botaoSimModal:{
    backgroundColor:'#4DEA73',
    marginBottom:10,
    marginTop:10,
    width:60,
    height:45,
    borderRadius:9, 
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },
  botaoNaoModal:{
    backgroundColor:'#E85B24',
    marginBottom:10,
    marginTop:10,
    width:60,
    height:45,
    borderRadius:9, 
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },
  botaoContinuarModal:{
    backgroundColor:'#4DEA73',
    marginBottom:10,
    marginTop:10,
    width:85,
    height:45,
    borderRadius:9, 
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },
  botaoCancelarModal:{
    backgroundColor:'#E85B24',
    marginBottom:10,
    marginTop:10,
    width:85,
    height:45,
    borderRadius:9, 
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },
  titleModal:{
    fontSize:20,
    textDecorationLine:'underline',
    fontWeight:'bold'

  }
});
