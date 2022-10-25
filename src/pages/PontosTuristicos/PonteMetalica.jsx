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
import { StatusBar } from "expo-status-bar";
import { Entypo } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const height = width * 0.9;

const imagens = [
  "https://thumbs2.imgbox.com/c0/d7/yiIcWY65_t.jpeg",
  "https://thumbs2.imgbox.com/e3/7d/x1whwzcu_t.jpeg",
  "https://thumbs2.imgbox.com/e8/1a/l81qTTiA_t.jpg",
  "https://thumbs2.imgbox.com/c6/24/HufKsp2Y_t.jpg",
  "https://thumbs2.imgbox.com/f8/9c/LfIbeEWI_t.jpg",
  "https://thumbs2.imgbox.com/6e/00/25JjCWCd_t.jpg",
  "https://thumbs2.imgbox.com/ad/db/acqk0xQo_t.jpg",
  "https://thumbs2.imgbox.com/fe/35/Np0qgyon_t.jpg",
  "https://thumbs2.imgbox.com/80/38/J3ZwYH1t_t.jpg",
];

export function PonteMetalica() {
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
                Foi a primeira ponte construída sobre o Rio Parnaíba, no estado
                do Piauí, inaugurada em 2 de dezembro de 1939, após 17 anos do
                início da obra, ligando Teresina a Timon. Projetada pelo
                engenheiro alemão Germano Franz, consumiu 702 toneladas de ferro
                em sua construção. Sua conclusão permitiu o estabelecimento da
                linha férrea Ferrovia São Luiz-Teresina da RFFSA, conectando por
                trem as capitais do Piauí e do Maranhão, usada também pela linha
                do Metrô de Teresina, integrando a vizinha cidade de Timon, que
                faz parte da Grande Teresina.
              </Text>
              <Text style={styles.textoModal}>
                A Ponte Metálica sobre o Rio Parnaíba fez parte de um conjunto
                de obras para o entroncamento ferroviário do estado, junto à
                Companhia Geral de Melhoramentos do Maranhão. Tais obras
                compunham uma política de desenvolvimento regional, executada
                entre as décadas de 30 e 40, com ênfase no transporte
                ferroviário e antecederam a difusão do transporte rodoviário,
                implantado no Brasil a partir da década de 50.
              </Text>
              <Text style={styles.textoModal}>
                Tecnicamente, a ponte metálica caracteriza-se pelo vão de 290m e
                uma superestrutura metálica de 270m de extensão, feita pela
                técnica de “Cantilever”, com apoios extremos e um estrado típico
                de ferrovias: duas longarinas robustas centradas em que se
                apoiam as transversinas. As passarelas de pedestres, localizadas
                nas laterais da ponte, são em estrutura metálica e com o piso em
                chapa xadrez, com 1,30m de largura cada uma. Além disso, sabe-se
                que inicialmente o estrado (que possui 5,60m de largura) era de
                madeira e fora improvisado para permitir a circulação de
                veículos motorizados. A posteriori, o estrado de madeira foi
                substituído pelo de concreto armado, composto por um painel de
                7,50m dividido em três pelas vigas principais: uma centrada
                entre os trilhos e duas laterais.
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
                navigation.navigate("RotaPonteMetalica") || setAlerta(false)
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
          <Text style={styles.title}>PONTE METÁLICA</Text>
          <Text style={styles.title1}>JOÃO LUIS FERREIRA</Text>

          <View>
            <Text style={styles.middle}>
              ⬤ Inaugurada em 2 de dezembro de 1939;
            </Text>
            <Text style={styles.middle}>⬤ Patrimônio cultural brasileiro;</Text>
            <Text style={styles.middle}></Text>
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
    height: "75%",
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