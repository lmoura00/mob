import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Modal,
} from "react-native";

import { Linking } from "react-native";

import { Entypo } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const height = width * 0.9;

const imagens = [
  "https://cdn-thumbs.imagevenue.com/59/c5/9b/ME15GFU3_b.jpg",
  "https://cdn-thumbs.imagevenue.com/62/92/cb/ME15GFU4_b.jpg",
  "https://cdn-thumbs.imagevenue.com/08/1d/7b/ME15GFU5_b.jpg",
  "https://cdn-thumbs.imagevenue.com/f8/3f/22/ME15GFU6_b.jpg",
  "https://cdn-thumbs.imagevenue.com/42/5d/a6/ME15GFU7_b.jpg",
  "https://cdn-thumbs.imagevenue.com/17/44/38/ME15GFU8_b.jpg",
  "https://cdn-thumbs.imagevenue.com/a0/82/90/ME15GFU9_b.jpg",
  "https://cdn-thumbs.imagevenue.com/fa/d0/f1/ME15GFUA_b.jpg",
  "https://cdn-thumbs.imagevenue.com/9b/0b/86/ME15GFUB_b.jpg",
  "https://cdn-thumbs.imagevenue.com/b4/90/65/ME15GFUC_b.jpg",
];

export function Alice() {
  const navigation = useNavigation();
  const [alerta, setAlerta] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ backgroundColor: "#334A58" }}>
      <ScrollView style={{ backgroundColor: "#fff", marginBottom: 15 }}>
        <Modal
          animationType="fade"
          visible={visible}
          statusBarTranslucent={false}
          transparent={true}
          style={{}}
        >
          <View style={styles.modal}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
                elevation: 10,
                borderRadius:8
              }}
            >
              <Text style={styles.titleModal}>SOBRE:</Text>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <LottieView
                  source={require("../../Assets/28566-to-x.json")}
                  autoPlay={true}
                  loop={true}
                  style={{ width: 50, height: 50, marginLeft: 30 }}
                />
              </TouchableOpacity>
            </View>
            <ScrollView>
              <Text style={styles.textoModal}>
                Sítio banhado com riachos e minas naturais de águas cristalinas.
                Disponível para festas e eventos com agradável paisagem verde da
                região, aliada à tranquilidade e exuberância do ambiente de
                pleno contato com a natureza.
              </Text>
              <Text style={styles.textoModal}>
                3 Chalés com alto padrão de conforto e requinte, equipados com:
                dois aparelhos de ar condicionado, uma Cama de casal, duas Camas
                de solteiro, espaço para Redes, Televisor, DVD e Frigobar.
                Acomodação de até 10 pessoas por chalé.
              </Text>
            </ScrollView>
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={styles.botaoModal1}
            >
              <Text style={styles.textBotao}>FECHAR</Text>
            </TouchableOpacity>
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
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
                elevation: 10,
                borderRadius:8
              }}
            >
              <Text style={styles.titleModal}>ALERTA:</Text>
              <TouchableOpacity onPress={() => setAlerta(false)}>
                <LottieView
                  source={require("../../Assets/28566-to-x.json")}
                  autoPlay={true}
                  loop={true}
                  style={{ width: 50, height: 50, marginLeft: 30 }}
                />
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 15, textAlign: "center", marginTop: 15 }}>
              Mob Timon coleta dados de local para ativar trajetos, localização,
              mesmo quando o app está fechado ou não está em uso.
            </Text>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RotaAlice") || setAlerta(false)
              }
              style={styles.botaoModalAlerta}
            >
              <Text style={styles.textBotao}>CONTINUAR</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <View style={styles.containerImages}>
          <ScrollView
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scroll}
          >
            {imagens.map((imagem, index) => (
              <Image
                key={index}
                style={styles.image}
                source={{ uri: imagem }}
              />
            ))}
          </ScrollView>
          <View style={styles.pagination}>
            {imagens.map((i, k) => (
              <Text key={k} style={styles.paginText}>
                ⬤
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.containerInfor}>
          <Text style={styles.title}>SÍTIO</Text>
          <Text style={styles.title1}>ALICE</Text>

          <View>
            <Text style={styles.middle}>⬤ Aluguel de espaço;</Text>
            <Text style={styles.middle}>⬤ Riacho;</Text>
            <Text style={styles.middle}>⬤ Possui três chalés;</Text>

            <View
              style={{
                flexDirection: "row",
                marginTop: 15,
                alignItems: "center",
              }}
            >
              <Entypo
                name="instagram"
                size={24}
                color="black"
                style={{ marginRight: 10 }}
              />
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL("https://www.instagram.com/sitioalice/")
                }
              >
                <Text style={styles.link}>@sitioalice</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginTop: 15,
                alignItems: "center",
              }}
            >
              <Entypo
                name="facebook"
                size={24}
                color="black"
                style={{ marginRight: 10 }}
              />
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    "https://www.facebook.com/S%C3%ADtio-Alice-1428728514016876/"
                  )
                }
              >
                <Text style={styles.link}>Sítio Alice</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.taxa}>DIARIA PARA ALUGUEL</Text>
          <Text style={styles.taxa1}>R$ 1.700,00 </Text>

          <TouchableOpacity
            style={styles.sobre}
            onPress={() => setVisible(true)}
          >
            <Text style={styles.textoBotao}>SOBRE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.verRota}
            onPress={() => setAlerta(true)}
          >
            <Text style={styles.textoBotao}>VER ROTA</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.voltar}
            onPress={() => navigation.navigate("PtsTur")}
          >
            <Text style={styles.textoBotao}>VOLTAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#334A58",
    marginTop: 15,
  },
  containerImages: {
    marginTop: 25,
    marginBottom: 25,
    width,
    height,
    backgroundColor: "#334A58",
  },
  containerInfor: {
    alignItems: "center",
    backgroundColor: "#D9D9D9",
  },
  taxa: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 15,
    fontFamily:'Ubuntu_500Medium'
  },
  taxa1: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
  },
  middle: {
    fontSize: 20,
    fontFamily:'BalsamiqSans_400Regular'
  },
  link: {
    fontSize: 20,
    color: "#0206eb",
    textDecorationLine: "underline",
  },
  title: {
    fontSize: 27,
    color: "black",
    fontFamily:'Ubuntu_700Bold'
  },
  title1: {
    fontSize: 27,
    color: "black",
    marginBottom: 20,
    fontFamily:'Ubuntu_500Medium'
  },
  image: {
    width,
    height,
    resizeMode: "cover",
  },
  scroll: {
    width,
    height,
  },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
  paginText: {
    color: "#fff",
    margin: 3,
  },
  paginActiveText: {
    color: "#888",
    margin: 3,
  },
  sobre: {
    backgroundColor: "#fff",
    height: 45,
    width: 270,
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 1,
    elevation: 10,
  },
  verRota: {
    backgroundColor: "#14BC9C",
    height: 45,
    width: 270,
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 1,
    elevation: 10,
  },
  voltar: {
    backgroundColor: "#FF3030",
    height: 45,
    width: 270,
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 30,
    elevation: 10,
  },
  textoBotao: {
    fontSize: 18,
    padding: 8,
    color: "black",
    textAlign: "center",
    fontFamily:'Ubuntu_700Bold'
  },
  modal: {
    alignSelf: "center",
    backgroundColor: "#f9f9f9",
    padding: 15,
    elevation: 15,
    borderRadius: 20,
    marginVertical: 80,
    width: "80%",
    height: "80%",
  },
  botaoModal1: {
    backgroundColor: "#FF3030",
    height: 35,
    width: "65%",
    padding: 5,
    borderRadius: 15,
    borderWidth: 1,
    alignSelf: "center",
    margin: 5,
    elevation: 10,
    marginVertical: 50,
    fontFamily:'Ubuntu_400Regular'
  },
  titleModal: {
    textAlign: "center",
    fontSize: 20,
    marginLeft: 60,
    textDecorationLine: "underline",
    fontFamily:'Ubuntu_700Bold'
  },
  textBotao: {
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    fontFamily:'Ubuntu_700Bold'
  },
  textoModal: {
    fontSize: 20,
    textAlign: "center",
    padding: 5,
    fontFamily:'Ubuntu_400Regular',
  },
  botaoModalAlerta: {
    backgroundColor: "#FF3030",
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
});
