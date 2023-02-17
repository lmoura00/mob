import React, { Children } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  RefreshControl,
  SafeAreaView,
  Alert,
  TouchableOpacity,
  ScrollView,
  FlatList,
  KeyboardAvoidingView,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import {
  getDatabase,
  ref,
  child,
  get,
  onValue,
  push,
  set,
} from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../../firebaseConfig";
import {
  getStorage,
  ref as sRef,
  getDownloadURL,
  uploadBytes,
  deleteObject,
} from "firebase/storage";

import { useState } from "react";
import { useEffect } from "react";

export function CaronasDisponiveis() {
  const navigation = useNavigation();
  const [name, setname] = useState();
  const [caronas, setCaronas] = useState({});

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const [refreshing, setRefreshing] = React.useState(false);
  const auth = getAuth();
  const dbRef = ref(getDatabase());
  const userId = auth.currentUser.uid;
  const [imageUrl, setImageUrl] = useState(null);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    
    function lerNome() {
      const auth = getAuth();
      const dbRef = ref(getDatabase());
      const userId = auth.currentUser.uid;
      get(child(dbRef, `users/${userId}/name`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setname(snapshot.val());
            console.log(userId);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
    /*function lerCaronas(){
         /*onValue(ref(db, '/caronas'), querySnapShot => {
                let data = querySnapShot.val() || {};
                let todoItems = {...data, 
                    key: querySnapShot.key,
                    name: querySnapShot.val().name,
                    placa: querySnapShot.val().placa,
                    horario: querySnapShot.val().horario,

                };
                setCaronas(todoItems);
                console.log(caronas)
            });  
            const db = getDatabase();
            const caronasRef = ref(db, 'caronas/');
            onValue(caronasRef, (snapshot) => {
            const data = snapshot.val();
            setCaronas(data)
            });
            
        }*/
        //ler Image
    const storage = getStorage();
    getDownloadURL(sRef(storage, `${userId}`))
      .then((url) => {
        //console.log(url),
        setImageUrl(url);
      })
      .catch((error) => {
        console.log(error);
      });

    lerNome();
    lerCaronas();
    setRefreshing(false)
  }, []);

  
  const data = [
    {
      key: "NM_B5pweIHX1gIydMap",
      name: "Luca",
      placa: "PIT-7854",
      horario: "19:00",
      data: "17/08/2022",
      partida: {
        latitude: -5.111737100000001,
        latitudeDelta: 0.000922,
        longitude: -42.8538358,
        longitudeDelta: 0.000421,
      },
      destino: {
        latitude: -5.088821900000001,
        latitudeDelta: 0.000922,
        longitude: -42.8112273,
        longitudeDelta: 0.000421,
      },
    },
    {
      data: "27/01/2023",
      destino: {
        latitude: -5.088821900000001,
        latitudeDelta: 0.000922,
        longitude: -42.8112273,
        longitudeDelta: 0.000421,
      },
      horario: "12:00",
      key: "w4OE5BFZDAa1lKHv0si6p9ofqK93",
      lastname: "Moura ",
      name: "Lucas",
      partida: {
        latitude: -5.111737100000001,
        latitudeDelta: 0.000922,
        longitude: -42.8538358,
        longitudeDelta: 0.000421,
      },
      placa: "Tetetwt",
      telefone: "(86) 98101-9840",
    },
  ];

  function lerCaronas() {
    const userData = [];
    setCaronas(null);
    get(child(dbRef, `caronas`))
      .then((snapshot) => {
        snapshot.forEach((childItem) => {
          let date = {
            key: childItem.key,
            name: childItem.val().name,
            lastName: childItem.val().lastname,
            data: childItem.val().data,
            placa: childItem.val().placa,
            horario: childItem.val().horario,
            image: childItem.val().imageUrl,
            partida: childItem.val().partida,
            destino: childItem.val().destino,
            uid: childItem.val().uid,
            id: childItem.val().id,
            vagas: childItem.val().vagas,
            telefone: childItem.val().telefone,
            email: childItem.val().email,
            partidaString: childItem.val().descriptionPartida,
            destinoString: childItem.val().descriptionDestino,
          };
          
          userData.push(date);
          
          setCaronas(userData);
          console.log('TUDO OK ATÉ AQUI. BORA TRABALHAR')
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const hj = new Date();
  let output =
    String(hj.getDate()).padStart(2, "0") +
    "/" +
    String(hj.getMonth() + 1).padStart(2, "0") +
    "/" +
    hj.getFullYear();
   if( datas < output){
    //alert('menor')
   }

  /*const Item = ( name, horario, data, placa, image ) => [
                <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Detalhes')}>
                    <View style={{width:50, height:50}}>
                        {image ? 
                            <Image source={image}/>
                            : 
                            <LottieView source={require('../Assets/28497-profile-icon.json')} autoPlay={true} loop={true} style={{}} />
                        }
                    
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.name}>{name}</Text>
                        <Text >{placa}</Text>
                    
                    </View>

                    <View style={{flexDirection:'column'}}>
                        <Text>PARTIDA: {horario} h</Text>
                        <Text>{data}</Text>
                    </View>
                    <View style={{height:50, width:50}}>
                    <LottieView source={require('../Assets/11515-swipe-right-arrows.json')} autoPlay={true} loop={true} />
                    </View>
                </TouchableOpacity>

    ];*/

  // refresh pagina
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    lerCaronas();
    wait(500).then(() => setRefreshing(false));
  }, []);



  return (
    <SafeAreaView style={styles.container}>
      <RefreshControl
        style={{ flex: 1 }}
        onRefresh={onRefresh}
        refreshing={refreshing}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#f9f9f9",
              fontSize: 25,
              textAlign: "center",
              marginBottom: 10,
              textDecorationLine: "underline",
            }}
          >
            Bem vindo(a) {name}
          </Text>
          <Image
            source={{ uri: imageUrl }}
            style={{ width: 35, height: 35, marginLeft: 15, borderRadius: 8 }}
          />
        </View>

        {caronas ? (
          <FlatList
            data={caronas}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate("Detalhes", { item })}
              >
                <View style={{ width: 50, height: 50 }}>
                  {item.image ? (
                    <Image
                      source={{ uri: item.image }}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        borderWidth: 2,
                        borderColor: "#252525",
                      }}
                    />
                  ) : (
                    <LottieView
                      source={require("../Assets/28497-profile-icon.json")}
                      autoPlay={true}
                      loop={true}
                      style={{}}
                    />
                  )}
                </View>
                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text>{item.placa}</Text>
                </View>

                <View style={{ flexDirection: "column" }}>
                  <Text>PARTIDA: {item.horario} h</Text>
                  <Text>{item.data}</Text>
                </View>
                <View style={{ height: 50, width: 50 }}>
                  <LottieView
                    source={require("../Assets/11515-swipe-right-arrows.json")}
                    autoPlay={true}
                    loop={true}
                  />
                </View>
              </TouchableOpacity>
            )}
          />
        ) : (
          <View style={{ flex: 1 }}>
            <LottieView
              source={require("../Assets/123841-empty-state-ghost.json")}
              autoPlay={true}
              loop={true}
              style={{}}
            />
          </View>
        )}

        <TouchableOpacity
          style={styles.botaoAdCarona}
          onPress={() => navigation.navigate("HomeMot")}
        >
          <LottieView
            source={require("../Assets/13050-plus.json")}
            autoPlay={true}
            loop={true}
            style={{}}
          />
        </TouchableOpacity>
      </RefreshControl>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "#334A58",
  },
  botao: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "100%",
    height: 75,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 2,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 10,
  },
  titulo: {
    fontSize: 28,
    color: "#f9f9f9",
    textAlign: "center",
    fontFamily: "BalsamiqSans_700Bold",
    marginTop: 80,
  },
  title: {
    fontSize: 25,
    color: "black",
  },
  name: {
    fontSize: 22,
    color: "black",
    fontFamily: "Ubuntu_500Medium",
    textTransform: "uppercase",
  },
  placa: {
    fontSize: 18,
    color: "black",
  },
  imagem: {
    width: 150,
    height: 150,
  },
  textoBotaoAdCarona: {
    fontSize: 45,
  },
  botaoAdCarona: {
    position: "absolute",
    backgroundColor: "#1FFA50",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    right: 18,
    bottom: 15,
    opacity: 0.8,
    borderRadius: 30,
    textAlign: "center",
  },
});
