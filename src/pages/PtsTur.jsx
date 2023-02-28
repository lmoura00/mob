import React from "react";
import {
  View,
  Text,
  Switch,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { EvilIcons, AntDesign } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import sena from "../images/sena.jpg";
import cocais from "../images/cocais.jpg";
import chico from "../images/chico.jpg";
import alice from "../images/alice.jpg";
import jericoroa from "../images/jericoroa.jpg";
import portalsol from "../images/PortalSol.jpg";
import portalamazonia from "../images/PortalAmazonia.png";
import roncador from "../images/roncador.jpg";
import saoJose from "../images/saoJose.jpg";
import centro from "../images/centro1.jpg";
import convencao from "../images/convencao.jpg";
import estadio from "../images/estadio2.png";
import ponteMetalica from "../images/ponteMetalica1.jpg";
import sucupira from "../images/sucupira1.jpg";
import rodoviaria from "../images/rodoviaria.jpg";
import mapa from "../images/mapa.jpg";
import santoantonio from "../images/santoantonio.jpeg";
import velokart from "../images/velokart.jpg";
import silvabrito from "../images/silvabrito.jpg";
import sambico from "../images/sambico.jpg";
import ponteamizade from "../images/ponteamizade.jpg";
import osamigos from "../images/osamigos.jpg";
import meninojesus from "../images/meninojesus.jpg";
import leklek from "../images/leklek.jpg";
import centroartesanato from "../images/centroartesanato.jpg";
import templocentral from "../images/templocentral.jpg";

export function PtsTur() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.tag}
            onPress={() => navigation.navigate("Todos")}
          >
            <View style={{ flexDirection: "column" }}>
              <Image
                source={mapa}
                style={{ width: 150, height: 220, borderRadius: 8 }}
              ></Image>

              <View
                style={{
                  backgroundColor: "#f9f9f9",
                  opacity: 0.8,
                  position: "absolute",
                  bottom: 5,
                  width: 150,
                  height: 60,
                  justifyContent: "center",
                }}
              >
                <Text style={styles.title1}>MAPA</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tag}
            onPress={() => navigation.navigate("Chico")}
          >
            <View style={{ flexDirection: "column" }}>
              <Image source={chico} style={styles.imageSmaw}></Image>
              <Text style={styles.title1}>BALNEÁRIO SEU CHICO</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.tag}
            onPress={() => navigation.navigate("LekLek")}
          >
            <View style={{ flexDirection: "column" }}>
              <Image source={leklek} style={styles.imageSmaw}></Image>
              <Text style={styles.title1}>BALNEÁRIO LEK LEK</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tag}
            onPress={() => navigation.navigate("PortalSol")}
          >
            <View style={{ flexDirection: "column" }}>
              <Image source={portalsol} style={styles.imageSmaw}></Image>
              <View>
                <Text style={styles.title1}>BALNEÁRIO</Text>
                <Text style={styles.title1}>PORTAL DO SOL</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.tag}
            onPress={() => navigation.navigate("Sena")}
          >
            <View style={{ flexDirection: "column" }}>
              <Image source={sena} style={styles.imageSmaw}></Image>
              <View>
                <Text style={styles.title1}>BALNEÁRIO</Text>
                <Text style={styles.title1}>SENA BRASIL</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tag}
            onPress={() => navigation.navigate("SilvaBrito")}
          >
            <View style={{ flexDirection: "column" }}>
              <Image source={silvabrito} style={styles.imageSmaw}></Image>
              <Text style={styles.title1}>BALNEÁRIO SILVA BRITO</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.tag}
            onPress={() => navigation.navigate("MiguelLima")}
          >
            <View style={{ flexDirection: "column" }}>
              <Image source={estadio} style={styles.imageSmaw}></Image>
              <Text style={styles.title1}>C.E. MIGUEL LIMA</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tag}
            onPress={() => navigation.navigate("Juventude")}
          >
            <View style={{ flexDirection: "column" }}>
              <Image source={centro} style={styles.imageSmaw}></Image>
              <Text style={styles.title1}>CENTRO DA JUVENTUDE</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.tag}
            onPress={() => navigation.navigate("CentroArtesanato")}
          >
            <View style={{ flexDirection: "column" }}>
              <Image source={centroartesanato} style={styles.imageSmaw}></Image>
              <Text style={styles.title1}>CENTRO DE ARTESANATO</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tag}
            onPress={() => navigation.navigate("Convencoes")}
          >
            <View style={{ flexDirection: "column" }}>
              <Image source={convencao} style={styles.imageSmaw}></Image>
              <Text style={styles.title1}>CENTRO DE CONVENÇÕES</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.tag}
            onPress={() => navigation.navigate("Cocais")}
          >
            <View style={{ flexDirection: "column" }}>
              <Image source={cocais} style={styles.imageSmaw}></Image>
              <Text style={styles.title1}>COCAIS SHOPPING</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tag}
            onPress={() => navigation.navigate("Jericoroa")}
          >
            <View style={{ flexDirection: "column" }}>
              <Image source={jericoroa} style={styles.imageSmaw}></Image>
              <Text style={styles.title1}>"JERICOROA"</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.tag}
            onPress={() => navigation.navigate("Sambico")}
          >
            <View style={{ flexDirection: "column" }}>
              <Image source={sambico} style={styles.imageSmaw}></Image>
              <Text style={styles.title1}>LAGOA DO SAMBICO</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tag}
            onPress={() => navigation.navigate("MeninoJesus")}
          >
            <View style={{ flexDirection: "column" }}>
              <Image source={meninojesus} style={styles.imageSmaw}></Image>
              <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Text style={styles.title1}>PARÓQUIA MENINO</Text>
                <Text style={styles.title1}>JESUS DE PRAGA</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.tag}
            onPress={() => navigation.navigate("SantoAntonio")}
          >
            <View style={{ flexDirection: "column" }}>
              <Image source={santoantonio} style={styles.imageSmaw}></Image>
              <View>
                <Text style={styles.title1}>PARÓQUIA</Text>
                <Text style={styles.title1}>SANTO ANTÔNIO</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tag}
            onPress={() => navigation.navigate("Sucupira")}
          >
            <View style={{ flexDirection: "column" }}>
              <Image source={sucupira} style={styles.imageSmaw}></Image>
              <View>
                <Text style={styles.title1}>PARQUE AMBIENTAL</Text>
                <Text style={styles.title1}>SUCUPIRA</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.tag}
            onPress={() => navigation.navigate("PonteAmizade")}
          >
            <View style={{ flexDirection: "column" }}>
              <Image source={ponteamizade} style={styles.imageSmaw}></Image>
              <Text style={styles.title1}>PONTE DA AMIZADE</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tag}
            onPress={() => navigation.navigate("PonteMetalica")}
          >
            <View style={{ flexDirection: "column" }}>
              <Image source={ponteMetalica} style={styles.imageSmaw}></Image>
              <Text style={styles.title1}>PONTE METALICA</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.tag}
            onPress={() => navigation.navigate("PortalAmazonia")}
          >
            <View style={{ flexDirection: "column" }}>
              <Image source={portalamazonia} style={styles.imageSmaw}></Image>
              <Text style={styles.title1}>PORTAL DA AMAZÔNIA</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tag}
            onPress={() => navigation.navigate("PracaSaoJose")}
          >
            <View style={{ flexDirection: "column" }}>
              <Image source={saoJose} style={styles.imageSmaw}></Image>
              <Text style={styles.title1}>PRAÇA SÃO JOSÉ</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.tag}
            onPress={() => navigation.navigate("Rodoviaria")}
          >
            <View style={{ flexDirection: "column" }}>
              <Image source={rodoviaria} style={styles.imageSmaw}></Image>
              <Text style={styles.title1}>RODOVIARIA</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tag}
            onPress={() => navigation.navigate("Roncador")}
          >
            <View style={{ flexDirection: "column" }}>
              <Image source={roncador} style={styles.imageSmaw}></Image>
              <Text style={styles.title1}>RONCADOR</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.tag}
            onPress={() => navigation.navigate("Alice")}
          >
            <View style={{ flexDirection: "column" }}>
              <Image source={alice} style={styles.imageSmaw}></Image>
              <Text style={styles.title1}>SÍTIO ALICE</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tag}
            onPress={() => navigation.navigate("OsAmigos")}
          >
            <View style={{ flexDirection: "column" }}>
              <Image source={osamigos} style={styles.imageSmaw}></Image>
              <View>
                <Text style={styles.title1}>SÍTIO</Text>
                <Text style={styles.title1}>ENCONTRO DOS AMIGOS</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.tag}
            onPress={() => navigation.navigate("TemploCentral")}
          >
            <View style={{ flexDirection: "column" }}>
              <Image source={templocentral} style={styles.imageSmaw}></Image>
              <Text style={styles.title1}>TEMPLO CENTRAL</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tagLast}
            onPress={() => navigation.navigate("Velokart")}
          >
            <View style={{ flexDirection: "column" }}>
              <View>
                <Image source={velokart} style={styles.imageSmaw}></Image>
              </View>
              <View>
                <Text style={styles.title1}>VELOKART</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#334A58",
  },
  title: {
    fontSize: 25,
    color: "black",
  },
  imagem: {
    width: 150,
    height: 150,
  },
  tag: {
    backgroundColor: "#fff",
    width: "40%",
    justifyContent: "center",
    height: 220,
    flexDirection: "row",
    borderWidth: 1,
    margin: 15,
    borderRadius: 8,
    elevation: 15,
  },
  tagLast: {
    backgroundColor: "#fff",
    width: "40%",
    alignItems: "center",
    height: 220,
    flexDirection: "row",
    borderWidth: 1,
    margin: 15,
    marginBottom: 20,
  },
  imageSmaw: {
    height: 220,
    width: 150,
    borderRadius: 8,
  },
  title1: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontFamily: "Ubuntu_700Bold",
    backgroundColor: "#f9f9f9",
    opacity: 0.9,
    position: "absolute",
    bottom: 5,
    width: 150,
    height: 60,
    
  },
});
