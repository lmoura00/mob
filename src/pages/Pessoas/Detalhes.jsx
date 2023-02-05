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
} from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  getDatabase,
  ref,
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

export function Detalhes() {
  const { params } = useRoute();
  console.log(params);
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
  var n = 1;
  function PaxAceito() {
    if (aceito === true) {
      Alert.alert("Ei...", "Você já tem uma corrida em andamento.") ||
        setVisible(false);
    } else {
      (setPax(n - 1) === setVisible1(true)) === setAceito(true);
    }
  }

  function NaoPax() {
    (setPax(n) === setVisible(false)) === setAceito(false);
  }

  const [pax, setPax] = useState(n);
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

      if (params.item.uid === userUID) {
        console.log("verdade");
        setDono(true);
      } else {
        console.log("falso");
      }
    }
    ler();
  }, []);

  function apagarCorrida() {
    remove(ref(db, "caronas/" + params.item.id));
    console.log("carona removida");
    navigation.navigate('CaronasDisponiveis');
    setVisible1(false)
  }

  return (
    <ScrollView style={{ backgroundColor: "#334A58" }}>
      <View style={styles.container}>




        <Modal
          animationType="fade"
          visible={visible}
          statusBarTranslucent={false}
          transparent={true}
          style={{}}
        >
          <View style={styles.modal}>
            <Text style={styles.titleModal}>
              ESSA É A CARONA QUE VOCÊ DESEJA?
            </Text>
            <View
              style={{
                flexDirection: "row",
                padding: 5,
                justifyContent: "center",
                marginTop: 40,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    `http://api.whatsapp.com/send?phone=55 + ${params.item.telefone} + &text=Essa+carona+ainda+se+encontra+disponível? `
                  );
                }}
                style={styles.botaoModal2}
              >
                <Text style={styles.textBotao}>SIM!</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={NaoPax} style={styles.botaoModal1}>
                <Text style={styles.textBotao}>NÃO</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>





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




        <Modal
          animationType="fade"
          visible={alerta}
          statusBarTranslucent={false}
          transparent={true}
          style={{}}
        >
          <View style={styles.modal2}>
            <View style={styles.titleModal}>
              <Text style={styles.titleModalText}>ALERTA</Text>
            </View>
            <Text style={{ fontSize: 15, textAlign: "center", marginTop: 15 }}>
              Mob Timon coleta dados de local para ativar trajetos, localização,
              mesmo quando o app está fechado ou não está em uso.
            </Text>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RotaYuri") || setAlerta(false)
              }
              style={styles.botaoModalAlerta}
            >
              <Text style={styles.textBotao}>CONTINUAR</Text>
            </TouchableOpacity>
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
          {/*<Text style={styles.texto}>AUDI R8</Text>
          <Text style={styles.texto}>COR: PRATA </Text>*/}
        </View>



        {/*<Image
          source={{
            uri: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHkCFGe8ysJSnJhUwAlW4MXFl5iamp-qDBPgZuYssdFMrSnTzUnPz2YHSfDxx82OvGmYdv7P9odeX-UEuL9jvPBNn4JG80c5idmnvwdZ5rgwT-Nb8-CLL6sPA80Ljz3ynLG9X55KNxmkmK6rP_I85ysDDa3x7zo9_LDP1Pj_UUr3v_Yxjg5s2A8-MJyEt65yrn0119Z3L518bciD7fCcDTxCz1fvu0JJWKYF9l_j8Dz1mmz9zIgNPBuPMFeeOTFT5uu3h5VpjA8cN328C3eBSWnq15cu9uD38u77f-HyweolJyCYGnrYY8XKRUnPBmOJb6e_al5lxiDFnMPDsrVD8zRJnIXDzyYnLnX9PyqZftxAE-mLb95P758kv3-XpdrKVa2rDfnGW7Qw8r6fW-q0pU3kZI7RXxsLVqtQuOnM3Aw_DA72seu0VTJP1jL5sV1p2aXfI8ucMPJ1X3V-mBMfM5JHmyfJ4N3leDNPScwyswIBl2g0kWOKABM8TIMFhwwAmQUG-AUgwLgTxWeuZGRi4HRgY2EIYQIBPuLQopyCxKDFXryi1uCA_rzizLFVQw4BIIMzq4xjpGgQAa47rIxACAAA?mimetype=image/png",
          }}
          style={{ width: 150, height: 90, marginBottom: 5, marginLeft: 15 }}
        />*/}




        <Text style={styles.texto}>PLACA: {params.item.placa}</Text>
        <Text style={styles.texto}>CONTATO:</Text>
        <TouchableOpacity
          style={styles.textoNúmero}
          onPress={() => {
            Linking.openURL(`mailto:${params.item.email}`)
          }}
        >
          <Text style={styles.textoNúmero}>{params.item.email}</Text>
        </TouchableOpacity>
        
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

        <KeyboardAvoidingView style={{ flexDirection: "row" }}>
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

        <KeyboardAvoidingView style={{ flexDirection: "row" }}>
          <Text style={styles.vagas}>DATA:</Text>
          <Text style={styles.vagasNumero}>{params.item.data}</Text>
        </KeyboardAvoidingView>

        <KeyboardAvoidingView style={{ flexDirection: "row" }}>
          <Text style={styles.vagas}>HORÁRIO:</Text>
          <Text style={styles.vagasNumero}>{params.item.horario}</Text>
        </KeyboardAvoidingView>

        <TouchableOpacity
          style={styles.botaoQueroACarona}
          onPress={() => setVisible(true)}
        >
          <Text style={styles.titleBotao}>QUERO A CARONA</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{... (dono ? {marginBottom:10}: {marginBottom:30}),
          backgroundColor: "#FF3030",
          height: 45,
          width: 270,
          marginTop: 10,
          borderRadius: 8,
          borderWidth: 0,
          elevation: 10,}}
          onPress={() => navigation.navigate("CaronasDisponiveis")}
        >
          <Text style={styles.titleBotao}>NÃO É PARA MIM</Text>
        </TouchableOpacity>

        {dono && (
          <TouchableOpacity style={styles.botaoVerRota} onPress={()=>setVisible1(true)}>
            <Text style={styles.titleBotao}>EXCLUIR CARONA</Text>
          </TouchableOpacity>
        )}
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
  textoNúmero: {
    fontSize: 25,
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
