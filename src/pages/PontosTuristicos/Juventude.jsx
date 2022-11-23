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

import Carousel, { Pagination } from "react-native-snap-carousel";
const imagens = [
  { imgUrl: "https://thumbs2.imgbox.com/4e/75/arpJv2va_t.jpg" },
  { imgUrl: "https://thumbs2.imgbox.com/a3/3b/GVVyND8K_t.jpg" },
  { imgUrl: "https://thumbs2.imgbox.com/45/0e/4ugTKDPo_t.jpg" },
  { imgUrl: "https://thumbs2.imgbox.com/02/a0/Z39HAd3i_t.jpg" },
  { imgUrl: "https://thumbs2.imgbox.com/30/a9/EGPxEJ7u_t.jpg" },
  { imgUrl: "https://thumbs2.imgbox.com/52/7b/20sWzaF9_t.jpg" },
  { imgUrl: "https://thumbs2.imgbox.com/e4/b7/yUXuBLcq_t.jpg" },
];
const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

export function Juventude() {
  const navigation = useNavigation();
  const [alerta, setAlerta] = useState(false);
  const [visible, setVisible] = useState(false);
  const isCarousel = React.useRef(null);
  const CarouselCardItem = ({ item, index }) => {
    return (
      <View style={styles.containerCarousel} key={index}>
        <Image source={{ uri: item.imgUrl }} style={styles.imageCarousel} />
      </View>
    );
  };

  const [index, setIndex] = React.useState(0);

  return (
    <View style={{ backgroundColor: "#334A58" }}>
      <ScrollView style={{ marginBottom: 15 }}>
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
                borderRadius: 8,
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
                Com padrão olímpico internacional, o ginásio tem capacidade para
                três mil pessoas, além de vestiários, quadra com piso especial,
                biblioteca e também será o local onde funcionará a Secretaria
                Municipal de Esporte, Juventude e Lazer (SEMEJ).
              </Text>
              <Text style={styles.textoModal}>
                Convidado de honra da cidade, o ex-jogador de vôlei da Seleção
                Brasileira, Marcelo Negrão, parabenizou o incentivo dado aos
                jovens, não apenas pelas estruturas das escolas municipais, mas
                também pelo incentivo ao esporte.
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
                borderRadius: 8,
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
                navigation.navigate("RotaJuventude") || setAlerta(false)
              }
              style={styles.botaoModalAlerta}
            >
              <Text style={styles.textBotao}>CONTINUAR</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <View style={styles.containerImages}>
          <Carousel
            layout="stack"
            layoutCardOffset={9}
            ref={isCarousel}
            data={imagens}
            renderItem={CarouselCardItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            inactiveSlideShift={0}
            useScrollView={true}
            onSnapToItem={(index) => setIndex(index)}
          />
          <Pagination
            dotsLength={imagens.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              backgroundColor: "rgba(0, 0, 0, 0.92)",
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            tappableDots={true}
          />
        </View>

        <View style={styles.containerInfor}>
          <Text style={styles.title}>CENTRO DE JUVENTUDE</Text>
          <Text style={styles.title1}>FRANCISCO CARLOS JANSEN</Text>

          <View>
            <Text style={styles.middle}>⬤ CAPACIDADE: 3.000 pessoas ;</Text>
            <Text style={styles.middle}>⬤ QUADRA COM PISO ESPECIAL;</Text>
            <Text style={styles.middle}>⬤ NOTA 4.6 de 5.;</Text>
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
    backgroundColor: "#d9d9d9",
  },
  containerInfor: {
    alignItems: "center",
    backgroundColor: "#D9D9D9",
  },
  taxa: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 15,
    fontFamily: "Ubuntu_500Medium",
  },
  taxa1: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
  },
  middle: {
    fontSize: 20,
    fontFamily: "BalsamiqSans_400Regular",
  },
  link: {
    fontSize: 20,
    color: "#0206eb",
    textDecorationLine: "underline",
  },
  title: {
    fontSize: 27,
    color: "black",
    fontFamily: "Ubuntu_700Bold",
  },
  title1: {
    fontSize: 27,
    color: "black",
    marginBottom: 20,
    fontFamily: "Ubuntu_500Medium",
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
    fontFamily: "Ubuntu_700Bold",
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
    fontFamily: "Ubuntu_400Regular",
  },
  titleModal: {
    textAlign: "center",
    fontSize: 20,
    marginLeft: 60,
    textDecorationLine: "underline",
    fontFamily: "Ubuntu_700Bold",
  },
  textBotao: {
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    fontFamily: "Ubuntu_700Bold",
  },
  textoModal: {
    fontSize: 20,
    textAlign: "center",
    padding: 5,
    fontFamily: "Ubuntu_400Regular",
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
  containerCarousel: {
    backgroundColor: "#334A58",
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 5,
    paddingTop: 5,
    shadowColor: "#000",
    marginTop: 15,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  imageCarousel: {
    width: ITEM_WIDTH,
    height: 350,
  },
  headerCarousel: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
  },
  bodyCarousel: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
