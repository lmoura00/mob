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

import { EvilIcons } from "@expo/vector-icons";

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
      <TouchableOpacity
        style={styles.tag}
        onPress={() => navigation.navigate("Todos")}
      >
        <Image source={mapa} style={styles.imageSmaw}></Image>
        <Text style={styles.title1}>MAPA</Text>
        <EvilIcons
          name="arrow-right"
          size={30}
          color="black"
          style={{ margin: 5 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tag}
        onPress={() => navigation.navigate("Chico")}
      >
        <Image source={chico} style={styles.imageSmaw}></Image>
        <Text style={styles.title1}>BALNEÁRIO SEU CHICO</Text>
        <EvilIcons
          name="arrow-right"
          size={30}
          color="black"
          style={{ margin: 5 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tag}
        onPress={() => navigation.navigate("LekLek")}
      >
        <Image source={leklek} style={styles.imageSmaw}></Image>
        <Text style={styles.title1}>BALNEÁRIO LEK LEK</Text>
        <EvilIcons
          name="arrow-right"
          size={30}
          color="black"
          style={{ margin: 5 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tag}
        onPress={() => navigation.navigate("PortalSol")}
      >
        <Image source={portalsol} style={styles.imageSmaw}></Image>
        <View>
          <Text style={styles.title1}>BALNEÁRIO</Text>
          <Text style={styles.title1}>PORTAL DO SOL</Text>
        </View>
        <EvilIcons
          name="arrow-right"
          size={30}
          color="black"
          style={{ margin: 5 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tag}
        onPress={() => navigation.navigate("Sena")}
      >
        <Image source={sena} style={styles.imageSmaw}></Image>
        <View>
          <Text style={styles.title1}>BALNEÁRIO</Text>
          <Text style={styles.title1}>SENA BRASIL</Text>
        </View>
        <EvilIcons
          name="arrow-right"
          size={30}
          color="black"
          style={{ margin: 5 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tag}
        onPress={() => navigation.navigate("SilvaBrito")}
      >
        <Image source={silvabrito} style={styles.imageSmaw}></Image>
        <Text style={styles.title1}>BALNEÁRIO SILVA BRITO</Text>
        <EvilIcons
          name="arrow-right"
          size={30}
          color="black"
          style={{ margin: 5 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tag}
        onPress={() => navigation.navigate("MiguelLima")}
      >
        <Image source={estadio} style={styles.imageSmaw}></Image>
        <Text style={styles.title1}>C.E. MIGUEL LIMA</Text>
        <EvilIcons
          name="arrow-right"
          size={30}
          color="black"
          style={{ margin: 5 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tag}
        onPress={() => navigation.navigate("Juventude")}
      >
        <Image source={centro} style={styles.imageSmaw}></Image>
        <Text style={styles.title1}>CENTRO DA JUVENTUDE</Text>
        <EvilIcons
          name="arrow-right"
          size={30}
          color="black"
          style={{ margin: 5 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tag}
        onPress={() => navigation.navigate("CentroArtesanato")}
      >
        <Image source={centroartesanato} style={styles.imageSmaw}></Image>
        <Text style={styles.title1}>CENTRO DE ARTESANATO</Text>
        <EvilIcons
          name="arrow-right"
          size={30}
          color="black"
          style={{ margin: 5 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tag}
        onPress={() => navigation.navigate("Convencoes")}
      >
        <Image source={convencao} style={styles.imageSmaw}></Image>
        <Text style={styles.title1}>CENTRO DE CONVENÇÕES</Text>
        <EvilIcons
          name="arrow-right"
          size={30}
          color="black"
          style={{ margin: 5 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tag}
        onPress={() => navigation.navigate("Cocais")}
      >
        <Image source={cocais} style={styles.imageSmaw}></Image>
        <Text style={styles.title1}>COCAIS SHOPPING</Text>
        <EvilIcons
          name="arrow-right"
          size={30}
          color="black"
          style={{ margin: 5 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tag}
        onPress={() => navigation.navigate("Jericoroa")}
      >
        <Image source={jericoroa} style={styles.imageSmaw}></Image>
        <Text style={styles.title1}>"JERICOROA"</Text>
        <EvilIcons
          name="arrow-right"
          size={30}
          color="black"
          style={{ margin: 5 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tag}
        onPress={() => navigation.navigate("Sambico")}
      >
        <Image source={sambico} style={styles.imageSmaw}></Image>
        <Text style={styles.title1}>LAGOA DO SAMBICO</Text>
        <EvilIcons
          name="arrow-right"
          size={30}
          color="black"
          style={{ margin: 5 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tag}
        onPress={() => navigation.navigate("MeninoJesus")}
      >
        <Image source={meninojesus} style={styles.imageSmaw}></Image>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={styles.title1}>PARÓQUIA MENINO</Text>
          <Text style={styles.title1}>JESUS DE PRAGA</Text>
        </View>
        <EvilIcons
          name="arrow-right"
          size={30}
          color="black"
          style={{ margin: 5 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tag}
        onPress={() => navigation.navigate("SantoAntonio")}
      >
        <Image source={santoantonio} style={styles.imageSmaw}></Image>
        <View>
          <Text style={styles.title1}>PARÓQUIA</Text>
          <Text style={styles.title1}>SANTO ANTÔNIO</Text>
        </View>
        <EvilIcons
          name="arrow-right"
          size={30}
          color="black"
          style={{ margin: 5 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tag}
        onPress={() => navigation.navigate("Sucupira")}
      >
        <Image source={sucupira} style={styles.imageSmaw}></Image>
        <View>
          <Text style={styles.title1}>PARQUE AMBIENTAL</Text>
          <Text style={styles.title1}>SUCUPIRA</Text>
        </View>
        <EvilIcons
          name="arrow-right"
          size={30}
          color="black"
          style={{ margin: 5 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tag}
        onPress={() => navigation.navigate("PonteAmizade")}
      >
        <Image source={ponteamizade} style={styles.imageSmaw}></Image>
        <Text style={styles.title1}>PONTE DA AMIZADE</Text>
        <EvilIcons
          name="arrow-right"
          size={30}
          color="black"
          style={{ margin: 5 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tag}
        onPress={() => navigation.navigate("PonteMetalica")}
      >
        <Image source={ponteMetalica} style={styles.imageSmaw}></Image>
        <Text style={styles.title1}>PONTE METALICA</Text>
        <EvilIcons
          name="arrow-right"
          size={30}
          color="black"
          style={{ margin: 5 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tag}
        onPress={() => navigation.navigate("PortalAmazonia")}
      >
        <Image source={portalamazonia} style={styles.imageSmaw}></Image>
        <Text style={styles.title1}>PORTAL DA AMAZÔNIA</Text>
        <EvilIcons
          name="arrow-right"
          size={30}
          color="black"
          style={{ margin: 5 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tag}
        onPress={() => navigation.navigate("PracaSaoJose")}
      >
        <Image source={saoJose} style={styles.imageSmaw}></Image>
        <Text style={styles.title1}>PRAÇA SÃO JOSÉ</Text>
        <EvilIcons
          name="arrow-right"
          size={30}
          color="black"
          style={{ margin: 5 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tag}
        onPress={() => navigation.navigate("Rodoviaria")}
      >
        <Image source={rodoviaria} style={styles.imageSmaw}></Image>
        <Text style={styles.title1}>RODOVIARIA</Text>
        <EvilIcons
          name="arrow-right"
          size={30}
          color="black"
          style={{ margin: 5 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tag}
        onPress={() => navigation.navigate("Roncador")}
      >
        <Image source={roncador} style={styles.imageSmaw}></Image>
        <Text style={styles.title1}>RONCADOR</Text>
        <EvilIcons
          name="arrow-right"
          size={30}
          color="black"
          style={{ margin: 5 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tag}
        onPress={() => navigation.navigate("Alice")}
      >
        <Image source={alice} style={styles.imageSmaw}></Image>
        <Text style={styles.title1}>SÍTIO ALICE</Text>
        <EvilIcons
          name="arrow-right"
          size={30}
          color="black"
          style={{ margin: 5 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tag}
        onPress={() => navigation.navigate("OsAmigos")}
      >
        <Image source={osamigos} style={styles.imageSmaw}></Image>
        <View>
          <Text style={styles.title1}>SÍTIO</Text>
          <Text style={styles.title1}>ENCONTRO DOS AMIGOS</Text>
        </View>
        <EvilIcons
          name="arrow-right"
          size={30}
          color="black"
          style={{ margin: 5 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tag}
        onPress={() => navigation.navigate("TemploCentral")}
      >
        <Image source={templocentral} style={styles.imageSmaw}></Image>
        <Text style={styles.title1}>TEMPLO CENTRAL</Text>
        <EvilIcons
          name="arrow-right"
          size={30}
          color="black"
          style={{ margin: 5 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tagLast}
        onPress={() => navigation.navigate("Velokart")}
      >
        <Image source={velokart} style={styles.imageSmaw}></Image>
        <Text style={styles.title1}>VELOKART</Text>
        <EvilIcons
          name="arrow-right"
          size={30}
          color="black"
          style={{ margin: 5 }}
        />
      </TouchableOpacity>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#334A58",
    padding: 5,
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
    width: "100%",
    alignItems: "center",
    height: 75,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    margin: 5,
  },
  tagLast: {
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
    height: 75,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    margin: 5,
    marginBottom: 20,
  },
  imageSmaw: {
    height: 55,
    width: 55,
    margin: 5,
  },
  title1: {
    fontSize: 18,
    fontWeight: "500",
    margin: 5,
    textAlign: "center",
    fontFamily: "Ubuntu_700Bold",
  },
});
