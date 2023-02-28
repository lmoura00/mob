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
  ActivityIndicator,
  TextInput,
  FlatList,
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
  update,
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
import MaskInput, {Masks, createNumberMask } from "react-native-mask-input";


export function Detalhes() {
  const { params } = useRoute();
  const [aguardando, setAguardando] = useState(false)
  const [alerta, setAlerta] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [editar, setEditar] = useState(false);
  const [aceito, setAceito] = useState(false);
  const navigation = useNavigation();
  const [name, setName] = useState(params.item.name);
  const [image, setImage] = useState(null);
  const [lastname, setLastname] = useState(params.item.lastName);
  const [telefone, setTelefone] = useState(params.item.telefone);
  const [placa, setPlaca] = useState(params.item.placa);
  const [vagas, setVagas] = useState(params.item.vagas);
  const [data, setData] = useState(params.item.data);
  const [horario, setHorario] = useState(params.item.horario);
  const GOOGLE_MAPS_APIKEY = api.googleApi;
  const [start, setStart] = useState(null);
  const [destino, setDestino] = useState(null);
  const mapEl = useRef(null);
  const [distance, SetDistance] = useState(null);
  const [location, setLocation] = useState(null);
  const keyCarona = params.item.id
  const [interessados, setInteressados]=useState([])
  const hourMask = createNumberMask({
    prefix: [],
    delimiter: '',
    separator: ':',
    precision: 2,
  })
  
  const [nameCurrentUser, setNameCurrentUser] = useState('');
  const [imageCurrentUser, setImageCurrentUser] = useState('');
  const [lastnameCurrentUser, setLastnameCurrentUser] = useState('');
  const [telefoneCurrentUser, setTelefoneCurrentUser] = useState('');
  const [emailCurrentUser, setEmailCurrentUser] = useState('')




  function PaxAceito() {
    setAguardando(true)
      Linking.openURL(
        `http://api.whatsapp.com/send?phone=55 + ${params.item.telefone} + &text=Essa+carona+ainda+se+encontra+disponível? `
      );
    const db = getDatabase();
    set(ref(db, 'HistoricoPax/' + userUID + "/" + keyCarona), {
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
      uidPax: userUID,
      destinoString: params.item.destinoString,
      partidaString: params.item.partidaString,
      
    });


    set(ref(db, 'caronas/' + keyCarona + "/" + 'interessados/' + userUID), {
      caronasKey:params.item.key,
      email: emailCurrentUser,
      image : imageCurrentUser,
      telefone: telefoneCurrentUser,
      name: nameCurrentUser,
      lastName: lastnameCurrentUser,
      uidPax: userUID,
    });

    set(ref(db, 'Historico/' + params.item.uid +'/' + keyCarona + "/" + 'interessados/' + userUID), {
      caronasKey:params.item.key,
      email: emailCurrentUser,
      image : imageCurrentUser,
      telefone: telefoneCurrentUser,
      name: nameCurrentUser,
      lastName: lastnameCurrentUser,
      uidPax: userUID,
    });



    setAguardando(false)
    navigation.navigate('CaronasDisponiveis')
  }
 

  function CheckData(){
    const hj = new Date();
    const horas = hj.getHours()
    const minutos = hj.getMinutes()
    let hrs = horas.toLocaleString('pt-BR', { hour: 'numeric', hour12: true });
    const hrAgora = `${horas}` + ':' + `${minutos}`
   
    let output =
      String(hj.getDate()).padStart(2, "0") +
      "/" +
      String(hj.getMonth() + 1).padStart(2, "0") +
      "/" +
      hj.getFullYear();
      //console.log(output)
     if( params.item.data < output ){
      Alert.alert('Atenção...', 'A carona não se encontra mais disponível');
      navigation.navigate('CaronasDisponiveis');
      apagarCorrida();
     }else{
      return
     }
  }


  
  const auth = getAuth();
  const userUID = auth.currentUser.uid;
  const db = getDatabase();
  const [dono, setDono] = useState(false);

  function lerInteressados(){
    const dados = []
    const dbRef = ref(getDatabase());
      get(child(dbRef, `caronas/${params.item.id}/interessados/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          //console.log(snapshot)
          snapshot.forEach((childItem)=>{
            let date = {
              key: childItem.key,
              name: childItem.val().name,
              lastName: childItem.val().lastName,
              telefone:childItem.val().telefone,
              image:childItem.val().image,
              email:childItem.val().email,
            }
            dados.push(date)
            setInteressados(dados)
          })
        } else {
          console.log("No data available");
          //alert("No data available");
        }
   
      }).catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    ler();
    CheckData();
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
      
      const dbRef = ref(getDatabase());
      get(child(dbRef, `users/${userUID}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setNameCurrentUser(snapshot.val().name);
          setTelefoneCurrentUser(snapshot.val().telefone);
          setLastnameCurrentUser(snapshot.val().lastname);
        } else {
          console.log("No data available");
          //alert("No data available");
        }
          setEmailCurrentUser(auth.currentUser.email);
   
      }).catch((error) => {
        console.error(error);
      });
      const storage = getStorage();
        getDownloadURL(sRef(storage, `${userUID}`))
        .then((url) => {
          //console.log(url),
          setImageCurrentUser(url)

        })
        .catch((error)=>{
          console.log(error)
        })


      if (params.item.uid === userUID) {
        console.log("verdade");
        setDono(true);
      } else {
        console.log("falso");
      }
    }
    ler();
    console.log(params.item.id);
    console.log(params.item)
    lerInteressados();
  }, []);

  function apagarCorrida() {
    setAguardando(true)
    remove(ref(db, "caronas/" + params.item.id));
    console.log("carona removida");
    navigation.navigate('CaronasDisponiveis');
    setVisible1(false)
    setAguardando(false)
  }

  function updateCarona(vagas, horario, data, placa){
    update(ref(db, "caronas/" + params.item.id),{
      vagas: vagas,
      horario:horario,
      data:data,
      placa:placa
    })
    .then(()=>
      
      setEditar(false),
      Alert.alert('Atenção', 'Atualize as corridas para ver a alteração.')
      
  )
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
          <View style={styles.titleModal}>
              <Text style={styles.titleModalText}>ESSA É A CARONA QUE VOCÊ DESEJA?</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                padding: 5,
                justifyContent: "center",
                marginTop: 40,
              }}
            >
              <TouchableOpacity
                onPress={PaxAceito}
                style={styles.botaoModal2}
              >
                <Text style={styles.textBotao}>SIM!</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>setVisible(false)} style={styles.botaoModal1}>
                <Text style={styles.textBotao}>NÃO</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>


        <Modal
            animationType="fade"
            visible={editar}
            statusBarTranslucent={false}
            transparent={true}
            style={{}}
        >
            <View style={styles.modalEditar}>
              

                    <View style={{alignItems:'center', marginBottom:5}}>
                        <Text style={styles.titleModalEditar}>EDITAR CARONA</Text>
                    </View>
                    <ScrollView style={{paddingBottom:15}}>

                        <Text style={styles.titleMod}>VAGAS</Text>
                        <TextInput placeholder="Vagas" keyboardType="number-pad" value={vagas} onChangeText={setVagas} style={styles.input}></TextInput>
                        <Text style={styles.titleMod}>PLACA DO VEÍCULO</Text>
                        <TextInput placeholder="Placa" keyboardType="default" value={placa} onChangeText={setPlaca} style={styles.input}></TextInput>
                        <Text style={styles.titleMod}>DATA PARTIDA</Text>
                        <MaskInput
                          value={data}
                          style={styles.input}
                          keyboardType='number-pad'
                          onChangeText={setData}
                          mask={Masks.DATE_DDMMYYYY}
                          />
                        <Text style={styles.titleMod}>HORÁRIO PARTIDA</Text>
                        <MaskInput
                          value={horario}
                          style={styles.inputLast}
                          keyboardType='number-pad'
                          onChangeText={setHorario}
                          mask={hourMask}
                          maxLength={5}
                          />
                      </ScrollView>
          
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                <TouchableOpacity 
                    style={styles.botaoContinuarModal}
                    onPress={()=>updateCarona(vagas, horario, data, placa)||navigation.navigate('CaronasDisponiveis')}
                >
                    <Text style={styles.textBotao}>ATUALIZAR</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.botaoCancelarModal} 
                    onPress={()=>setEditar(false)}
                >
                    <Text style={styles.textBotao}>CANCELAR</Text>
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
              <Text style={styles.titleModalText}>PESSOAS INTERESSADAS</Text>
            </View>
              <FlatList
                data={interessados}
                renderItem={({item})=>(
                  <View style={{height:100,  backgroundColor:'#b9b9b9', padding:5, marginTop:5, borderRadius:8, borderWidth:2}}>
                    <View>
                      <Image source={{uri:item.image}} style={{width:60, height:60, resizeMode:'contain'}}/>
                    </View>
                    <View style={{flexDirection:'row', position:'absolute', left:75}}>
                      <Text style={{marginRight:5, fontSize:18}}>{item.name}</Text>
                      <Text style={{fontSize:18}}>{item.lastName}</Text>
                    </View>
                    <View style={{position:'absolute', top:25, left:75}}>
                      <Text style={{fontSize:17}}>{item.email}</Text>
                      <Text style={{fontSize:17}}>{item.telefone}</Text>
                    </View>
                  </View>
                )}
              />

            <TouchableOpacity
              onPress={() =>
                setAlerta(false)
              }
              style={styles.botaoModalAlerta}
            >
              <Text style={styles.textBotao}>FECHAR</Text>
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



        <View style={{flexDirection:'column', alignItems:'center', marginBottom:9,  width:'90%'}}>
            <LottieView
              source={require("../../Assets/46986-car-number-plate.json")}
              autoPlay={true}
              loop={true}
              style={{ height:50, width:50, }}
            />
          <Text style={styles.texto}>PLACA: </Text>
          <Text style={styles.placa}>{params.item.placa}</Text>
        </View>
        <Text style={styles.texto}>CONTATO:</Text>
        <View style={{flexDirection:'row', alignItems:'center',  width:'90%'}}>
          <LottieView
              source={require("../../Assets/95248-mailbox.json")}
              autoPlay={true}
              loop={true}
              style={{ height:50, width:50, marginRight:25 }}
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
                      top: 30,
                      bottom: 30,
                      left: 30,
                      right: 30,
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
          <Text style={styles.vagas}>VAGAS DISPONÍVEIS:</Text>
          <Text style={styles.vagasNumero}>{params.item.vagas}</Text>
        </KeyboardAvoidingView>

        <KeyboardAvoidingView style={{ flexDirection: "row", alignItems:'center' }}>
          <Text style={styles.vagas}>DATA:</Text>
          <Text style={styles.vagasNumero}>{params.item.data}</Text>
        </KeyboardAvoidingView>

        <KeyboardAvoidingView style={{ flexDirection: "row", alignItems:'center' }}>
          <Text style={styles.vagas}>HORÁRIO:</Text>
          <Text style={styles.vagasNumero}>{params.item.horario}</Text>
        </KeyboardAvoidingView>
        

        { dono ?
            (<TouchableOpacity
              style={styles.botaoQueroACarona}
              onPress={() => setEditar(true)}
            >
              <Text style={styles.titleBotao}>EDITAR CARONA</Text>
            </TouchableOpacity>)
          : 
          (
            <TouchableOpacity
            style={styles.botaoQueroACarona}
            onPress={() => setVisible(true)}
          >
            <Text style={styles.titleBotao}>QUERO A CARONA</Text>
          </TouchableOpacity>
          )
        }


        {
          dono || (
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
          )
        }

        {dono && (
          <TouchableOpacity style={styles.botaoVerInteressados} onPress={()=>setAlerta(true)}>
            <Text style={styles.titleBotao}>VER INTERESSADOS</Text>
          </TouchableOpacity>
        )}

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
    fontSize: 30,
    color: "black",
    marginBottom: 8,
    fontFamily: "Inter_600SemiBold",
    textTransform: "uppercase",
    textDecorationLine:"underline"
  },
  texto: {
    fontSize: 25,
    fontFamily: "Ubuntu_400Regular",
    textTransform: "uppercase",
   
  },
  placa: {
    fontSize: 18,
    fontFamily: "Ubuntu_400Regular",
    textTransform: "uppercase",
    textDecorationLine:'underline',
    marginBottom:25,
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
  partida: {
    fontSize: 16,
    fontFamily:'Ubuntu_400Regular',
    marginBottom: 10,
  },
  destino: {
    fontSize: 15,
    fontFamily:'Ubuntu_400Regular',
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
  botaoVerInteressados: {
    backgroundColor: "#b9b9b9",
    height: 45,
    width: 270,
    marginTop: 20,
    marginBottom: 10,
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
    alignItems:'center',
    justifyContent:'center',
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
    marginVertical: 160,
    width: "90%",
    height: "70%",
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
  titleMod: {
    color: "#000",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
    paddingHorizontal: 10,
    textDecorationLine: "underline",
    fontFamily:'BalsamiqSans_400Regular'
  },
  input:{
    backgroundColor:'#b9b9b9',
    height:40,
    marginBottom:5,
    borderRadius:8,
    fontSize:16,
    paddingHorizontal:8
  },
  inputLast:{
    backgroundColor:'#b9b9b9',
    height:40,
    marginBottom:15,
    borderRadius:8,
    fontSize:16,
    paddingHorizontal:8
  },  
  modalEditar: {
    alignSelf: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
    elevation: 10,
    borderRadius: 20,
    marginVertical: 190,
    width: "80%",
    height: "60%",
  },  
  botaoContinuarModal:{
    backgroundColor:'#4DEA73',
    marginBottom:10,
    marginTop:10,
    width:125,
    height:45,
    borderRadius:9, 
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    elevation:10,
    borderWidth:2
  },
  botaoCancelarModal:{
    backgroundColor:'#E85B24',
    marginBottom:10,
    marginTop:10,
    width:125,
    height:45,
    borderRadius:9, 
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    elevation:10,
    borderWidth:2,
  },
  titleModalEditar:{
    fontSize:20,
    textDecorationLine:'underline',
    fontWeight:'bold'

  }
});
