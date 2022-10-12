import { TouchableOpacity } from "react-native";

import { StatusBar } from "expo-status-bar";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { CaronasDisponiveis } from "../pages/CaronasDisponiveis";
import { PtsTur } from "../pages/PtsTur";
import { Perfil } from "../pages/Perfil";
import { Historico } from "../pages/Historico";

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


import { Jose } from "../pages/Pessoas/JoseV";
import { Mariana } from "../pages/Pessoas/Mariana";
import { Odaleia } from "../pages/Pessoas/Odaleia";
import { Thaiane } from "../pages/Pessoas/Thaiane";
import { Vitoria } from "../pages/Pessoas/Vitoria";
import { Yuri } from "../pages/Pessoas/Yuri";

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

import { RotaJose } from "../../src/pages/Rotas/RotaJose";
import { RotaMariana } from "../pages/Rotas/RotaMariana";
import { RotaOdaleia } from "../pages/Rotas/RotaOdaleia";
import { RotaThaiane } from "../pages/Rotas/RotaThaiane";
import { RotaVitoria } from "../pages/Rotas/RotaVitoria";
import { RotaYuri } from "../pages/Rotas/RotaYuri";

import { HistoricoMariana1 } from "../pages/Historico/HistoricoMariana1";
import { HistoricoMariana2 } from "../pages/Historico/HistoricoMariana2";
import { HistoricoOdaleia } from "../pages/Historico/HistoricoOdaleia";
import { HistoricoJose21 } from "../pages/Historico/HistoricoJose21";
import { HistoricoJose26 } from "../pages/Historico/HistoricoJose26";

import { useAuth } from "../Hooks/Auth";
import LottieView from "lottie-react-native";

import { RotaJose1 } from "../pages/Historico/Rotas/RotaJose1";
import { RotaJose2 } from "../pages/Historico/Rotas/RotaJose2";
import { RotaMariana1 } from "../pages/Historico/Rotas/RotaMariana1";
import { RotaMariana2 } from "../pages/Historico/Rotas/RotaMariana2";

function AuthRoutesTabBar() {
  const { setUser } = useAuth();
  const { Navigator, Screen } = createBottomTabNavigator();

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
              <EvilIcons name="gear" size={size} color={color} />
            );
          }
        },

        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "grey",
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
          headerTitle: "CARONAS DISPONÍVEIS",
          headerTitleStyle: { fontWeight: "700" },
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
        }}
      />

      <Screen
        name="Historico"
        component={Historico}
        options={{
          tabBarLabel: "HISTÓRICO",
          headerTitleAlign: "center",
          headerTitle: "PERFIL",
          headerTitleStyle: { fontWeight: "bold" },
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
        }}
      />

      <Screen
        name="PtsTur"
        component={PtsTur}
        options={{
          headerShown: true,
          tabBarLabel: "PONTOS TUR.",
          headerTitleAlign: "center",
          headerTitle: "PONTOS TURISTICOS",
          headerTitleStyle: { fontWeight: "bold" },
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
        }}
      />

      <Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: "PERFIL",
          headerTitleAlign: "center",
          headerTitle: "PERFIL",
          headerTitleStyle: { fontWeight: "bold" },
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
        }}
      />
    </Navigator>
  );
}

export function AuthRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();
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
        name="Mariana"
        component={Mariana}
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
        name="RotaMariana"
        component={RotaMariana}
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
        name="HistoricoMariana1"
        component={HistoricoMariana1}
        options={{
          headerTitle: "DETALHES",
          headerTitleAlign: "center",
          statusBarStyle: "dark",
        }}
      />
      <Screen
        name="HistoricoMariana2"
        component={HistoricoMariana2}
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
        name="RotaMariana1"
        component={RotaMariana1}
        options={{
          headerTitle: "DETALHES",
          headerTitleAlign: "center",
          statusBarStyle: "dark",
        }}
      />
      <Screen
        name="RotaMariana2"
        component={RotaMariana2}
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
    </Navigator>
  );
}
