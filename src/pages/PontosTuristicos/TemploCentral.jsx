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
import LottieView from "lottie-react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const height = width * 0.9;

const imagens = [
  "https://thumbs2.imgbox.com/0d/18/kKrQ0eVA_t.jpg",
  "https://thumbs2.imgbox.com/e6/5a/YnaIgc2g_t.jpg",
  "https://thumbs2.imgbox.com/0b/66/yMpyMkkj_t.jpg",
  "https://thumbs2.imgbox.com/68/89/BSsSObeq_t.jpg",
  "https://thumbs2.imgbox.com/00/a2/7xB5yWqH_t.jpg",
  "https://thumbs2.imgbox.com/2c/02/9sOlmSf6_t.jpg",
  "https://thumbs2.imgbox.com/91/44/2nf6oFJP_t.jpg",
  
];

export function TemploCentral() {
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
                borderRadius:8,
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
              Templo localizado no centro da cidade de Timon, servindo de sede para as igrejas Assembleias de Deus na cidade. Sendo palco de muitos eventos evangélicos.
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
                borderRadius:8,
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
                navigation.navigate("RotaTemploCentral") || setAlerta(false)
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
          <Text style={styles.title}>TEMPLO</Text>
          <Text style={styles.title1}>CENTRAL</Text>

          <View style={{}}>
            <Text style={styles.middle}>
              ⬤ Local de fortalecimento da fé
            </Text>
            <Text style={styles.middle}>⬤ Amplo espaço para atender todos os eventos.</Text>
            <Text style={styles.middle}>⬤ Cumprindo o Ide de Cristo desde 1947</Text>
            <Text style={styles.middle}>⬤ Endereço: Rua Benedito Leite, 796, Centro, Timon/MA</Text>
         

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
                  Linking.openURL(
                    "https://www.instagram.com/adtcentraltimon/"
                  )
                }
              >
                <Text style={styles.link}>@adtcentraltimon</Text>
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
                    "https://www.facebook.com/profile.php?id=100076045924749"
                  )
                }
              >
                <Text style={styles.link}>Adtcentral</Text>
              </TouchableOpacity>
            </View>


          </View>

       

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
    alignSelf:'center'
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
    marginVertical: 220,
    width: "80%",
    height: "50%",
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
    backgroundColor:'#14BC9C',
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