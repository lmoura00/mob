import { TouchableOpacity, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { CaronasDisponiveis } from "../pages/CaronasDisponiveis";
import { PtsTur } from "../pages/PtsTur";
import { Perfil } from "../pages/Perfil";
import { Historico } from "../pages/Historico";
import { Todos } from "../pages/PontosTuristicos/Todos";

import { Alice } from "../pages/PontosTuristicos/Alice";
import { Chico } from "../pages/PontosTuristicos/Chico";
import { Cocais } from "../pages/PontosTuristicos/Cocais";
import { Jericoroa } from "../pages/PontosTuristicos/Jericoroa";
import { Sena } from "../pages/PontosTuristicos/Sena";
import { PortalAmazonia } from "../pages/PontosTuristicos/PortalAmazonia";
import { PortalSol } from "../pages/PontosTuristicos/PortalSol";
import { PracaSaoJose } from "../pages/PontosTuristicos/PracaSaojose";
import { Roncador } from "../pages/PontosTuristicos/Roncador";
import { Convencoes } from "../pages/PontosTuristicos/Convencoes";
import { Juventude } from "../pages/PontosTuristicos/Juventude";
import { MiguelLima } from "../pages/PontosTuristicos/MiguelLima";
import { PonteMetalica } from "../pages/PontosTuristicos/PonteMetalica";
import { Rodoviaria } from "../pages/PontosTuristicos/Rodoviaria";
import { Sucupira } from "../pages/PontosTuristicos/Sucupira";
import { CentroArtesanato } from "../pages/PontosTuristicos/CentroArtesanato";
import { MeninoJesus } from "../pages/PontosTuristicos/MeninoJesus";
import { PonteAmizade } from "../pages/PontosTuristicos/PonteAmizade";
import { Sambico } from "../pages/PontosTuristicos/Sambico";
import { SantoAntonio } from "../pages/PontosTuristicos/SantoAntonio";
import { SilvaBrito } from "../pages/PontosTuristicos/SilvaBrito";
import { Velokart } from "../pages/PontosTuristicos/Velokart";
import { LekLek } from "../pages/PontosTuristicos/LekLek";
import { OsAmigos } from "../pages/PontosTuristicos/OsAmigos";
import { TemploCentral } from "../pages/PontosTuristicos/TemploCentral";

import { Jose } from "../pages/Pessoas/JoseV";
import { Marina } from "../pages/Pessoas/Marina";
import { Odaleia } from "../pages/Pessoas/Odaleia";
import { Thaiane } from "../pages/Pessoas/Thaiane";
import { Vitoria } from "../pages/Pessoas/Vitoria";
import { Yuri } from "../pages/Pessoas/Yuri";
import { Gabrielly } from "../pages/Pessoas/Gabrielly";

import { RotaChico } from "../pages/Rotas/RotaChico";
import { RotaSena } from "../pages/Rotas/RotaSena";
import { RotaAlice } from "../pages/Rotas/RotaAlice";
import { RotaCocais } from "../pages/Rotas/RotaCocais";
import { RotaJericoroa } from "../pages/Rotas/RotaJericoroa";
import { RotaPortalAmazonia } from "../pages/Rotas/RotaPortalAmazonia";
import { RotaPortalSol } from "../pages/Rotas/RotaPortalSol";
import { RotaPracaSaoJose } from "../pages/Rotas/RotaPracaSaoJose";
import { RotaRoncador } from "../pages/Rotas/RotaRoncador";
import { RotaConvencoes } from "../pages/Rotas/RotaConvencoes";
import { RotaJuventude } from "../pages/Rotas/RotaJuventude";
import { RotaMiguelLima } from "../pages/Rotas/RotaMiguelLima";
import { RotaPonteMetalica } from "../pages/Rotas/RotaPonteMetalica";
import { RotaSucupira } from "../pages/Rotas/RotaSucupira";
import { RotaRodoviaria } from "../pages/Rotas/RotaRodoviaria";
import { RotaSantoAntonio } from "../pages/Rotas/RotaSantoAntonio";
import { RotaVelokart } from "../pages/Rotas/RotaVelokart";
import { RotaSilvaBrito } from "../pages/Rotas/RotaSilvaBrito";
import { RotaSambico } from "../pages/Rotas/RotaSambico";
import { RotaPonteAmizade } from "../pages/Rotas/RotaPonteAmizade";
import { RotaMeninoJesus } from "../pages/Rotas/RotaMeninoJesus";
import { RotaCentroArtesanato } from "../pages/Rotas/RotaCentroArtesanato";
import { RotaLekLek } from "../pages/Rotas/RotaLekLek";
import { RotaOsAmigos } from "../pages/Rotas/RotaOsAmigos";
import { RotaTemploCentral } from "../pages/Rotas/RotaTemploCentral";

import { RotaJose } from "../../src/pages/Rotas/RotaJose";
import { RotaMarina } from "../pages/Rotas/RotaMarina";
import { RotaOdaleia } from "../pages/Rotas/RotaOdaleia";
import { RotaThaiane } from "../pages/Rotas/RotaThaiane";
import { RotaVitoria } from "../pages/Rotas/RotaVitoria";
import { RotaYuri } from "../pages/Rotas/RotaYuri";
import { RotaGabrielly } from "../pages/Rotas/RotaGabrielly";

import { HistoricoMarina1 } from "../pages/Historico/HistoricoMarina1";
import { HistoricoMarina2 } from "../pages/Historico/HistoricoMarina2";
import { HistoricoOdaleia } from "../pages/Historico/HistoricoOdaleia";
import { HistoricoJose21 } from "../pages/Historico/HistoricoJose21";
import { HistoricoJose26 } from "../pages/Historico/HistoricoJose26";

import { useAuth } from "../Hooks/Auth";
import LottieView from "lottie-react-native";

import { RotaJose1 } from "../pages/Historico/Rotas/RotaJose1";
import { RotaJose2 } from "../pages/Historico/Rotas/RotaJose2";
import { RotaMarina1 } from "../pages/Historico/Rotas/RotaMarina1";
import { RotaMarina2 } from "../pages/Historico/Rotas/RotaMarina2";

import { Teste } from "../pages/Teste";
import { Teste2 } from "../pages/Teste2";
import { HomeMot } from "../pages/HomeMot";
import { getAuth, signOut } from "firebase/auth";
import { Detalhes } from "../pages/Pessoas/Detalhes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DetalhesHistorico } from "../pages/Historico/DetalhesHistorico";
import {
  getStorage,
  ref as sRef,
  getDownloadURL,
  uploadBytes,
  deleteObject,
} from "firebase/storage";
import { useEffect, useState } from "react";
import { DetHistoricoMot } from "../pages/Pessoas/DetHistoricoMot";
import { AcompanharRota } from "../pages/AcompanharRota";
import {Auth} from 'firebase/auth'
import { auth } from "../../firebaseConfig";

function AuthRoutesTabBar() {
  const navigation = useNavigation();
  const { setUser } = useAuth();
  const { Navigator, Screen } = createBottomTabNavigator();
  const auth = getAuth();
  const [imageUrl, setImageUrl] = useState(null);
  const Auth = getAuth();
  const userId = Auth.currentUser.uid;

  function LogOut() {
    signOut(auth)
      .then(() => {
        setUser(null);
        console.log("LogOut efetuado com sucesso");
      })
      .catch((error) => {
        Alert.alert("Ops...", "Algo deu errado, tente novamente mais tarde.");
      });
  }

  useEffect(() => {
    const storage = getStorage();
    getDownloadURL(sRef(storage, `${userId}`))
      .then((url) => {
        //console.log(url),
        setImageUrl(url);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "CaronasDisponiveis") {
            return focused ? (
              <LottieView
                source={require("../Assets/home-icon.json")}
                autoPlay={true}
                loop={true}
              ></LottieView>
            ) : (
              <AntDesign name="home" size={size} color={color} />
            );
          } else if (route.name === "Historico") {
            return focused ? (
              <LottieView
                source={require("../Assets/4117-search-history-icon.json")}
                autoPlay={true}
                loop={true}
              ></LottieView>
            ) : (
              <FontAwesome5 name="history" size={size} color={color} />
            );
          } else if (route.name === "PtsTur") {
            return focused ? (
              <LottieView
                source={require("../Assets/image-picture.json")}
                autoPlay={true}
                loop={true}
              ></LottieView>
            ) : (
              <AntDesign name="picture" size={size} color={color} />
            );
          } else if (route.name === "Perfil") {
            return focused ? (
              <LottieView
                source={require("../Assets/gears.json")}
                autoPlay={true}
                loop={true}
              ></LottieView>
            ) : (
              <Octicons name="gear" size={size} color={color} />
            );
          }
        },

        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          marginBottom: 10,
          marginTop:5,
          marginHorizontal: 5,
          borderRadius: 8,
          elevation: 15,
          position:'absolute',
          left:15,
          justifyContent: "space-between",
          width: "90%",
          alignSelf: "center"
        },
        tabBarItemStyle:{borderRadius:8, marginHorizontal:5, marginVertical:2}
      })}
    >
      <Screen
        name="CaronasDisponiveis"
        component={CaronasDisponiveis}
        options={{
          headerShown: true,
          statusBarStyle: "dark",
          tabBarLabel: "INICIAL.",
          headerTitleAlign: "center",
          tabBarActiveBackgroundColor: "#B9B9B9",
          tabBarShowLabel: true,
          tabBarLabelStyle: { fontFamily: "Ubuntu_500Medium", color: "black" },
          headerTitle: "CARONAS",
          headerTitleStyle: { fontFamily: "Ubuntu_700Bold" },
          headerRight: () => (
            <TouchableOpacity onPress={LogOut} style={{ marginRight: 10 }}>
              <LottieView
                source={require("../Assets/38063-log-out.json")}
                autoPlay={true}
                loop={true}
                style={{ width: 50, height: 50 }}
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
              <Image
                source={{ uri: imageUrl }}
                style={{
                  width: 35,
                  height: 35,
                  marginLeft: 15,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: "#F6C445",
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Screen
        name="Historico"
        component={Historico}
        options={{
          tabBarLabel: "HISTÓRICO",
          headerTitleAlign: "center",
          tabBarActiveBackgroundColor: "#B9B9B9",
          tabBarShowLabel: true,
          tabBarLabelStyle: { fontFamily: "Ubuntu_500Medium", color: "black" },
          headerTitle: "HISTÓRICO",
          headerTitleStyle: { fontFamily: "Ubuntu_700Bold" },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => setUser(null)}
              style={{ marginRight: 10 }}
            >
              <LottieView
                source={require("../Assets/38063-log-out.json")}
                autoPlay={true}
                loop={true}
                style={{ width: 50, height: 50 }}
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
              <Image
                source={{ uri: imageUrl }}
                style={{
                  width: 35,
                  height: 35,
                  marginLeft: 15,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: "#F6C445",
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Screen
        name="PtsTur"
        component={PtsTur}
        options={{
          headerShown: true,
          tabBarActiveBackgroundColor: "#B9B9B9",
          tabBarShowLabel: true,
          tabBarLabelStyle: { fontFamily: "Ubuntu_500Medium", color: "black" },
          tabBarLabel: "PONTOS TUR.",
          headerTitleAlign: "center",
          headerTitle: "PONTOS TURISTICOS",
          headerTitleStyle: { fontFamily: "Ubuntu_700Bold" },
          headerRight: () => (
            <TouchableOpacity onPress={LogOut} style={{ marginRight: 10 }}>
              <LottieView
                source={require("../Assets/38063-log-out.json")}
                autoPlay={true}
                loop={true}
                style={{ width: 50, height: 50 }}
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
              <Image
                source={{ uri: imageUrl }}
                style={{
                  width: 35,
                  height: 35,
                  marginLeft: 15,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: "#F6C445",
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: "PERFIL",
          headerTitleAlign: "center",
          tabBarActiveBackgroundColor: "#B9B9B9",
          tabBarShowLabel: true,
          tabBarLabelStyle: { fontFamily: "Ubuntu_500Medium", color: "black" },
          headerTitle: "PERFIL",
          headerTitleStyle: { fontFamily: "Ubuntu_700Bold" },
          headerRight: () => (
            <TouchableOpacity onPress={LogOut} style={{ marginRight: 10 }}>
              <LottieView
                source={require("../Assets/38063-log-out.json")}
                autoPlay={true}
                loop={true}
                style={{ width: 50, height: 50 }}
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() =>
                Alert.alert("EI...", "Você já está na tela de perfil. :)")
              }
            >
              <Image
                source={{ uri: imageUrl }}
                style={{
                  width: 35,
                  height: 35,
                  marginLeft: 15,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: "#F6C445",
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Navigator>
  );
}

export function AuthRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();
  //com o uso do if, eu consigo ter separação de rotas de acordo com o nivel do usuário
  // if(auth.currentUser.uid === "Vh2TTXfjdtaEB36cH4oaCzthanD2"){
  //   return(
    
  //     <Navigator>
  //       <Screen
  //         name="home"
  //         component={AuthRoutesTabBar}
  //         options={{ headerShown: false, statusBarStyle: "dark" }}
  //       />
  //       <Screen
  //         name="Sena"
  //         component={Sena}
  //         options={{
  //           headerShown: true,
  //           headerTitle: "DETALHES",
  //           headerTitleAlign: "center",
  //           statusBarStyle: "dark",
  //         }}
  //       />
  //     </Navigator>
  //   )
  // }
  // else{

    return (
      
      <Navigator>
        
        <Screen
          name="home"
          component={AuthRoutesTabBar}
          options={{ headerShown: false, statusBarStyle: "dark" }}
        />
  
        <Screen
          name="Sena"
          component={Sena}
          options={{
            headerShown: true,
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="Yuri"
          component={Yuri}
          options={{
            headerShown: true,
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="Thaiane"
          component={Thaiane}
          options={{
            headerShown: true,
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="Jose"
          component={Jose}
          options={{
            headerShown: true,
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="Vitoria"
          component={Vitoria}
          options={{
            headerShown: true,
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="Marina"
          component={Marina}
          options={{
            headerShown: true,
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="Odaleia"
          component={Odaleia}
          options={{
            headerShown: true,
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="Cocais"
          component={Cocais}
          options={{
            headerShown: true,
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="Chico"
          component={Chico}
          options={{
            headerShown: true,
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="Alice"
          component={Alice}
          options={{
            headerShown: true,
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="Jericoroa"
          component={Jericoroa}
          options={{
            headerShown: true,
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="RotaChico"
          component={RotaChico}
          options={{
            headerTitle: "ROTA",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="RotaSena"
          component={RotaSena}
          options={{
            headerTitle: "ROTA",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="RotaAlice"
          component={RotaAlice}
          options={{
            headerTitle: "ROTA",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="RotaCocais"
          component={RotaCocais}
          options={{
            headerTitle: "ROTA",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="RotaJericoroa"
          component={RotaJericoroa}
          options={{
            headerTitle: "ROTA",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="RotaJose"
          component={RotaJose}
          options={{
            headerTitle: "ROTA",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="RotaMarina"
          component={RotaMarina}
          options={{
            headerTitle: "ROTA",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="RotaOdaleia"
          component={RotaOdaleia}
          options={{
            headerTitle: "ROTA",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="RotaThaiane"
          component={RotaThaiane}
          options={{
            headerTitle: "ROTA",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="RotaVitoria"
          component={RotaVitoria}
          options={{
            headerTitle: "ROTA",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="RotaYuri"
          component={RotaYuri}
          options={{
            headerTitle: "ROTA",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="RotaPortalAmazonia"
          component={RotaPortalAmazonia}
          options={{
            headerTitle: "ROTA",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="RotaPortalSol"
          component={RotaPortalSol}
          options={{
            headerTitle: "ROTA",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="RotaPracaSaoJose"
          component={RotaPracaSaoJose}
          options={{
            headerTitle: "ROTA",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="RotaRoncador"
          component={RotaRoncador}
          options={{
            headerTitle: "ROTA",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="PortalAmazonia"
          component={PortalAmazonia}
          options={{
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="PortalSol"
          component={PortalSol}
          options={{
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="PracaSaoJose"
          component={PracaSaoJose}
          options={{
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="Roncador"
          component={Roncador}
          options={{
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="HistoricoJose21"
          component={HistoricoJose21}
          options={{
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="HistoricoJose26"
          component={HistoricoJose26}
          options={{
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="HistoricoOdaleia"
          component={HistoricoOdaleia}
          options={{
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="HistoricoMarina1"
          component={HistoricoMarina1}
          options={{
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="HistoricoMarina2"
          component={HistoricoMarina2}
          options={{
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="RotaJose1"
          component={RotaJose1}
          options={{
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="RotaJose2"
          component={RotaJose2}
          options={{
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="RotaMarina1"
          component={RotaMarina1}
          options={{
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="RotaMarina2"
          component={RotaMarina2}
          options={{
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="Convencoes"
          component={Convencoes}
          options={{
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="Juventude"
          component={Juventude}
          options={{
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="MiguelLima"
          component={MiguelLima}
          options={{
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="PonteMetalica"
          component={PonteMetalica}
          options={{
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="Rodoviaria"
          component={Rodoviaria}
          options={{
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="Sucupira"
          component={Sucupira}
          options={{
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="RotaConvencoes"
          component={RotaConvencoes}
          options={{
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="RotaJuventude"
          component={RotaJuventude}
          options={{
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="RotaMiguelLima"
          component={RotaMiguelLima}
          options={{
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="RotaPonteMetalica"
          component={RotaPonteMetalica}
          options={{
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="RotaSucupira"
          component={RotaSucupira}
          options={{
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
        <Screen
          name="RotaRodoviaria"
          component={RotaRodoviaria}
          options={{
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
  
        <Screen
          name="Todos"
          component={Teste}
          options={{
            headerTitle: "PONTOS TURISTICOS",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
  
        <Screen
          name="CentroArtesanato"
          component={CentroArtesanato}
          options={{
            headerTitle: "PONTOS TURISTICOS",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
  
        <Screen
          name="MeninoJesus"
          component={MeninoJesus}
          options={{
            headerTitle: "PONTOS TURISTICOS",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
  
        <Screen
          name="PonteAmizade"
          component={PonteAmizade}
          options={{
            headerTitle: "PONTOS TURISTICOS",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
  
        <Screen
          name="Sambico"
          component={Sambico}
          options={{
            headerTitle: "PONTOS TURISTICOS",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
  
        <Screen
          name="SantoAntonio"
          component={SantoAntonio}
          options={{
            headerTitle: "PONTOS TURISTICOS",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
  
        <Screen
          name="SilvaBrito"
          component={SilvaBrito}
          options={{
            headerTitle: "PONTOS TURISTICOS",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
  
        <Screen
          name="Velokart"
          component={Velokart}
          options={{
            headerTitle: "PONTOS TURISTICOS",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
  
        <Screen
          name="LekLek"
          component={LekLek}
          options={{
            headerTitle: "PONTOS TURISTICOS",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
  
        <Screen
          name="OsAmigos"
          component={OsAmigos}
          options={{
            headerTitle: "PONTOS TURISTICOS",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
  
        <Screen
          name="RotaSantoAntonio"
          component={RotaSantoAntonio}
          options={{
            headerTitle: "PONTOS TURISTICOS",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
  
        <Screen
          name="RotaVelokart"
          component={RotaVelokart}
          options={{
            headerTitle: "PONTOS TURISTICOS",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
  
        <Screen
          name="RotaSilvaBrito"
          component={RotaSilvaBrito}
          options={{
            headerTitle: "PONTOS TURISTICOS",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
  
        <Screen
          name="RotaSambico"
          component={RotaSambico}
          options={{
            headerTitle: "PONTOS TURISTICOS",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
  
        <Screen
          name="RotaPonteAmizade"
          component={RotaPonteAmizade}
          options={{
            headerTitle: "PONTOS TURISTICOS",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
  
        <Screen
          name="RotaMeninoJesus"
          component={RotaMeninoJesus}
          options={{
            headerTitle: "PONTOS TURISTICOS",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
  
        <Screen
          name="RotaCentroArtesanato"
          component={RotaCentroArtesanato}
          options={{
            headerTitle: "PONTOS TURISTICOS",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
  
        <Screen
          name="RotaLekLek"
          component={RotaLekLek}
          options={{
            headerTitle: "PONTOS TURISTICOS",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
  
        <Screen
          name="RotaOsAmigos"
          component={RotaOsAmigos}
          options={{
            headerTitle: "PONTOS TURISTICOS",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
  
        <Screen
          name="TemploCentral"
          component={TemploCentral}
          options={{
            headerTitle: "PONTOS TURISTICOS",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
  
        <Screen
          name="RotaTemploCentral"
          component={RotaTemploCentral}
          options={{
            headerTitle: "PONTOS TURISTICOS",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
  
        <Screen
          name="Gabrielly"
          component={Gabrielly}
          options={{
            headerTitle: "DETALHES",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
            headerTitleStyle: { fontFamily: "Ubuntu_700Bold" },
          }}
        />
  
        <Screen
          name="RotaGabrielly"
          component={RotaGabrielly}
          options={{
            headerTitle: "ROTA",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
  
        <Screen
          name="Teste"
          component={Teste}
          options={{
            headerTitle: "TESTE",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
  
        <Screen
          name="Teste2"
          component={Teste2}
          options={{
            headerTitle: "TESTE",
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
  
        <Screen
          name="HomeMot"
          component={HomeMot}
          options={{
            headerTitle: "ADICIONAR CARONA",
            headerShown: true,
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
  
        <Screen
          name="Detalhes"
          component={Detalhes}
          options={{
            headerTitle: "DETALHES",
            headerShown: true,
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
  
        <Screen
          name="DetalhesHistorico"
          component={DetalhesHistorico}
          options={{
            headerTitle: "HISTÓRICO",
            headerShown: true,
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
  
        <Screen
          name="DetHistoricoMot"
          component={DetHistoricoMot}
          options={{
            headerTitle: "HISTÓRICO",
            headerShown: true,
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
  
        <Screen
          name="AcompanharRota"
          component={AcompanharRota}
          options={{
            headerTitle: "ACOMPANHAR",
            headerShown: true,
            headerTitleAlign: "center",
            statusBarStyle: "dark",
          }}
        />
      </Navigator>
    );
  //}
}
