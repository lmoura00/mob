import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Modal,
  Alert,
  Linking,
  ActivityIndicator
} from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  getDatabase,
  ref,
  set,
  child,
  get,
  onValue,
  remove,
} from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import MapViewDirections from "react-native-maps-directions";
import api from "../../../config/index.json";
import {
  getStorage,
  ref as sRef,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";

export function DetalhesHistorico() {
  const { params } = useRoute();
  const [aguardando, setAguardando] = useState(false)
  const [alerta, setAlerta] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [aceito, setAceito] = useState(false);
  const navigation = useNavigation();
  const [name, setName] = useState(null);
  const [image, setImage] = useState(null);
  const [lastname, setLastname] = useState();
  const [telefone, setTelefone] = useState();
  const [placa, setPlaca] = useState();
  const [vagas, setVagas] = useState();
  const [data, setData] = useState();
  const [horario, setHorario] = useState();
  const GOOGLE_MAPS_APIKEY = api.googleApi;
  const [start, setStart] = useState(null);
  const [destino, setDestino] = useState(null);
  const mapEl = useRef(null);
  const [distance, SetDistance] = useState(null);
  const [location, setLocation] = useState(null);

  const keyCarona = params.item.key


  function PaxAceito() {
    setAguardando(true)
      Linking.openURL(
        `http://api.whatsapp.com/send?phone=55 + ${params.item.telefone} + &text=Essa+carona+ainda+se+encontra+disponível? `
      );
    const db = getDatabase();
    set(ref(db, 'Historico/' + userUID + "/" + keyCarona), {
      caronasKey:params.item.key,
      email: params.item.email,
      image : params.item.image,
      data: params.item.data,
      destino: params.item.destino,
      telefone: params.item.telefone,
      horario: params.item.horario,
      partida: params.item.partida,
      vagas: params.item.vagas,
      key:params.item.key,
      name: params.item.name,
      lastName: params.item.lastName,
      id: params.item.id,
      placa: params.item.placa,
      uidMot: params.item.uid,
      uidPax: userUID
    });
    setAguardando(false)
    navigation.navigate('CaronasDisponiveis')
  }
  console.log(params.item)



  
  const auth = getAuth();
  const userUID = auth.currentUser.uid;
  const db = getDatabase();
  const [dono, setDono] = useState(false);

  useEffect(() => {
    async function ler() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permissão ao acesso a localização foi negado");
        return;
      }

      let locationCurrent = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: locationCurrent.coords.latitude,
        longitude: locationCurrent.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });

      //caso fizesse leitura dos dados diretamente do firebase
      /*const data = []
          const db = getDatabase();
          const dbRef = ref(db, 'caronas/');
        //ler dados
          onValue(dbRef, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
              const childKey = childSnapshot.key;
              const childData = childSnapshot.val();
              console.log(childKey)
            });
          }, {
            onlyOnce: true
          });
          await get(child(dbRef, `caronas/`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              setName(snapshot.val().name);
              setPlaca(snapshot.val().placa);
              setVagas(snapshot.val().vagas);
              setHorario(snapshot.val().horario);
              setStart(snapshot.val().partida);
              setDestino(snapshot.val().destino);
              setData(snapshot.val().data);
              setTelefone(snapshot.val().telefone);
              setLastname(snapshot.val().lastname);
              setImage(snapshot.val().imageUrl)

            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
        //ler imagem do firebase
            const storage = getStorage();
            await getDownloadURL(sRef(storage, `${userUID}`))
            .then((url) => {
              setImage(url)
            })*/
      setImage(params.item.image); //ler imagem direto do params
      setStart(params.item.partida); //set partida corrida
      setDestino(params.item.destino); //set destino corrida

      if (params.item.uidMot === userUID) {
        console.log("verdade");
        setDono(true);
      } else {
        console.log("falso");
      }
    }
    console.log(params)
    ler();
  }, []);

  function apagarCorrida() {
    setAguardando(true)
    remove(ref(db, "HistoricoPax/" + userUID +'/'+ params.item.caronasKey ));
    console.log("carona removida");
    navigation.navigate('Historico');
    setVisible1(false)
    setAguardando(false)
  }

  return (
    <ScrollView style={{ backgroundColor: "#334A58" }}>
      <View style={styles.container}>
        <Modal
          animationType="fade"
          visible={visible1}
          statusBarTranslucent={false}
          transparent={true}
          style={{}}
        >
          <View style={styles.modal3}>
            <View style={styles.titleModal}>
              <Text style={styles.titleModalText}>DESEJA EXCLUIR A CARONA?</Text>
            </View>

            <LottieView
              source={require("../../Assets/15120-delete.json")}
              autoPlay={true}
              loop={true}
              style={{
                height: "75%",
                width: "75%",
                alignSelf: "center",
              }}
            />
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <TouchableOpacity
                onPress={apagarCorrida }
                style={styles.botaoModal1}
              >
                <Text style={styles.textBotao}>APAGAR</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>{setVisible1(false)}}
                style={styles.botaoModal2}
              >
                <Text style={styles.textBotao}>CANCELAR</Text>
              </TouchableOpacity>
            </View>

            </View>
        </Modal>



        {image ? (
          <Image
            source={{ uri: params.item.image }}
            style={{
              width: 180,
              height: 180,
              alignSelf: "center",
              marginBottom: 0,
              marginTop: 20,
              borderRadius: 50,
              borderWidth: 2,
              borderColor: "#F6C445",
            }}
          />
        ) : (
          <LottieView
            source={require("../../Assets/95740-profile-person.json")}
            autoPlay={true}
            loop={true}
            style={{ marginBottom: 390 }}
          />
        )}



        <View
          style={{
            ...(image ? { marginTop: 10 } : { marginTop: 180 }),

            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.title}>
            {params.item.name} {params.item.lastName}
          </Text>
        </View>



        <View style={{flexDirection:'row', alignItems:'center', marginBottom:9}}>
          <Text style={styles.texto}>PLACA: </Text>
          <Text style={styles.placa}>{params.item.placa}</Text>
        </View>
        <Text style={styles.texto}>CONTATO:</Text>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <LottieView
              source={require("../../Assets/95248-mailbox.json")}
              autoPlay={true}
              loop={true}
              style={{ height:50, width:50, marginRight:8 }}
            />
          <TouchableOpacity
            style={styles.textoNúmero}
            onPress={() => {
              Linking.openURL(`mailto:${params.item.email}`)
            }}
          >
            <Text style={styles.textoEmail}>{params.item.email}</Text>
          </TouchableOpacity>
        </View>
        
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <LottieView
              source={require("../../Assets/40534-cellphone-call.json")}
              autoPlay={true}
              loop={true}
              style={{ height:50, width:50, marginRight:8 }}
            />
          <Text
            style={styles.textoNúmero}
            onPress={() => {
              Linking.openURL(
                "http://api.whatsapp.com/send?phone=55" + params.item.telefone
              );
            }}
          >
            {params.item.telefone}
          </Text>
        </View>

        <KeyboardAvoidingView style={{ flexDirection: "row", alignItems:'center' }}>
          <Text style={styles.vagas}>VAGAS DISPONÍVEIS:</Text>
          <Text style={styles.vagasNumero}>{params.item.vagas}</Text>
        </KeyboardAvoidingView>
        {start && (
          <View>
            <MapView
              initialRegion={location}
              ref={mapEl}
              style={styles.map}
              showsUserLocation={true}
              zoomEnabled={false}
              scrollEnabled={false}
              loadingEnabled={true}
            >
              <MapViewDirections
                origin={start}
                destination={destino}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="blue"
                onReady={(result) => {
                  SetDistance(result.distance);
                  mapEl.current.fitToCoordinates(result.coordinates, {
                    edgePadding: {
                      top: 50,
                      bottom: 50,
                      left: 50,
                      right: 50,
                    },
                  });
                }}
              />
              {start && <Marker coordinate={destino} title="DESTINO" />}
              {start && (
                <Marker
                  coordinate={start}
                  title="COMEÇO"
                  pinColor={"#14BC9C"}
                />
              )}
            </MapView>
          </View>
        )}

          <KeyboardAvoidingView style={{ flexDirection: "column", alignItems:'center', width:'90%',  }}>
            <Text style={styles.vagas}>PARTIDA:</Text>
            <Text style={styles.partida}>{params.item.partidaString}</Text>
          </KeyboardAvoidingView>

              <KeyboardAvoidingView style={{ flexDirection: "column", alignItems:'center', width:'90%' }}>
                <Text style={styles.vagas}>DESTINO:</Text>
                <Text style={styles.destino}>{params.item.destinoString}</Text>
              </KeyboardAvoidingView>
        <KeyboardAvoidingView style={{ flexDirection: "row", alignItems:'center' }}>
          <Text style={styles.vagas}>DATA:</Text>
          <Text style={styles.vagasNumero}>{params.item.data}</Text>
        </KeyboardAvoidingView>

        <KeyboardAvoidingView style={{ flexDirection: "row", alignItems:'center' }}>
          <Text style={styles.vagas}>HORÁRIO:</Text>
          <Text style={styles.vagasNumero}>{params.item.horario}</Text>
        </KeyboardAvoidingView>


          <TouchableOpacity style={styles.botaoVerRota} onPress={()=>setVisible1(true)}>
            <Text style={styles.titleBotao}>EXCLUIR HISTÓRICO</Text>
          </TouchableOpacity>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    marginTop: 25,
    marginBottom: 25,
  },
  title: {
    marginTop: 15,
    fontSize: 27,
    color: "black",
    marginBottom: 8,
    fontFamily: "Inter_600SemiBold",
    textTransform: "uppercase",
  },
  texto: {
    fontSize: 25,
    fontFamily: "Ubuntu_400Regular",
    textTransform: "uppercase",
   
  },
  placa: {
    fontSize: 25,
    fontFamily: "Ubuntu_400Regular",
    textTransform: "uppercase",
    textDecorationLine:'underline',
  },
  textoNúmero: {
    fontSize: 25,
    fontFamily: "Ubuntu_400Regular",
    color: "#0e008a",
  },
  textoEmail: {
    fontSize: 18,
    fontFamily: "Ubuntu_400Regular",
    color: "#0e008a",
  },
  vagas: {
    fontSize: 25,
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 10,
  },
  vagasNumero: {
    fontSize: 27,
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
  },
  inicioNome: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 10,
  },
  inicioLugar: {
    fontSize: 18,
    fontWeight: "400",
    marginTop: 10,
    marginLeft: 15,
  },
  DestinoNome: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },
  DestinoLugar: {
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 15,
    marginLeft: 15,
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 20,
  },
  botaoQueroACarona: {
    backgroundColor: "#14BC9C",
    height: 45,
    width: 270,
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 0,
    elevation: 10,
  },
  botaoNaoEParaMim: {},
  botaoVerRota: {
    backgroundColor: "#fff",
    height: 45,
    width: 270,
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 8,
    borderWidth: 0,
    elevation: 10,
  },
  titleBotao: {
    fontSize: 18,
    padding: 8,
    color: "black",
    textAlign: "center",
    fontFamily: "Ubuntu_700Bold",
  },
  modal: {
    alignSelf: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
    elevation: 10,
    borderRadius: 20,
    marginVertical: 280,
    width: "80%",
    height: "25%",
  },
  botaoModal1: {
    backgroundColor: "#FF3030",
    height: 35,
    width: "40%",
    padding: 5,
    borderRadius: 15,
    borderWidth: 1,
    alignSelf: "center",
    margin: 5,
    elevation: 10,
  },
  botaoModal2: {
    backgroundColor: "#fff",
    height: 35,
    width: "40%",
    padding: 5,
    borderRadius: 15,
    borderWidth: 1,
    alignSelf: "center",
    elevation: 10,
    marginRight: 10,
  },
  titleModal: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 17,
    fontWeight: "bold",
    backgroundColor: "#fff",
    height: 45,
    borderRadius: 8,
    elevation: 10,
  },
  titleModalText: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
  textBotao: {
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },
  botaoModalAlerta: {
    backgroundColor: "#14BC9C",
    height: 35,
    width: "40%",
    padding: 5,
    borderRadius: 15,
    borderWidth: 1,
    alignSelf: "center",
    margin: 5,
    elevation: 10,
    marginTop: 10,
  },
  modal2: {
    alignSelf: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
    elevation: 10,
    borderRadius: 20,
    marginVertical: 260,
    width: "80%",
    height: "30%",
  },
  modal3: {
    alignSelf: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
    elevation: 10,
    borderRadius: 20,
    marginVertical: 220,
    width: "80%",
    height: "50%",
  },
  map: {
    width: 250,
    height: 300,
  },
});
