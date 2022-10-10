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
  "https://scontent.fthe18-1.fna.fbcdn.net/v/t1.6435-9/49206178_522090721607924_4094037778021482496_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=S1EmqC7u7dsAX9ZTgb6&_nc_ht=scontent.fthe18-1.fna&oh=00_AT_D_GWc4A3F6SkM-6Fx69qdjzlHg2iw64gCwvBJWkKdtw&oe=63571233",
  "https://scontent.fthe18-1.fna.fbcdn.net/v/t1.6435-9/49755935_522089764941353_5130777071492005888_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=5z13wtmtr1AAX8VYzt6&_nc_ht=scontent.fthe18-1.fna&oh=00_AT_vFVAetwUQGYmUeIWeoetxHDrXZEo6rchWBNcMZhSWiQ&oe=635981BA",
  "https://scontent.fthe18-1.fna.fbcdn.net/v/t1.6435-9/44304546_478463692637294_7239673303080632320_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=-olZffpaO3MAX9Jplxx&_nc_ht=scontent.fthe18-1.fna&oh=00_AT-qzUdOanRMGGTncA7X0q-oLHFjdNqlge58f1fZfKm2FQ&oe=6357B912",
  "https://scontent.fthe18-1.fna.fbcdn.net/v/t1.6435-9/44332664_478463395970657_3083581124601970688_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=nYNb_1URMaQAX_mO4xJ&_nc_oc=AQmBDfRyF-OpZ7Eu2dbDoHJ4jawkxf4FyKnhrY9OMstxB3klWSONvllWuw5xNuJFkZ6Y6I4AXv-d-L5xlvgU0pmo&_nc_ht=scontent.fthe18-1.fna&oh=00_AT-Z4wsHafEKbF9-MkKoIGdSPM7c-EBOr--_zSWNs1EUvA&oe=6356B8B1",
  "https://scontent.fthe18-1.fna.fbcdn.net/v/t1.6435-9/44433002_478462905970706_8034872569356091392_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=dru3rXf3_58AX8zOgWx&_nc_ht=scontent.fthe18-1.fna&oh=00_AT9ye5cnO3tZPARwXvqmeqYGlnqqQLd-S8sT9v8CV1GruQ&oe=63596AFD",
];

export function Roncador() {
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
                style={{ flexDirection: "row", justifyContent: "center", alignItems:'center', backgroundColor: "#fff",elevation:10}}
                >
                <Text style={styles.titleModal}>SOBRE:</Text>
                <TouchableOpacity onPress={()=>setVisible(false)}>
                <LottieView
                    source={require("../../Assets/28566-to-x.json")}
                    autoPlay={true}
                    loop={true}
                    style={{ width: 50, height: 50, marginLeft:30 }}
                />
                </TouchableOpacity>
            </View>
            <Text style={styles.textoModal}>
              É o lugar tranquilo com água geladinha, com riachos com água
              corrente.{" "}
            </Text>
            <Text style={styles.textoModal}>
              Perfeito para familia, e para descansar depois de uma semana
              puxada.{" "}
            </Text>
            <Text style={styles.textoModal}>
              Temos restaurantes que possuem comidas deliciosas e acessíveis.
            </Text>
            <Text style={styles.textoModal}> </Text>

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
                style={{ flexDirection: "row", justifyContent: "center", alignItems:'center', backgroundColor: "#fff",elevation:10}}
                >
                <Text style={styles.titleModal}>ALERTA:</Text>
                <TouchableOpacity onPress={()=>setAlerta(false)}>
                <LottieView
                    source={require("../../Assets/28566-to-x.json")}
                    autoPlay={true}
                    loop={true}
                    style={{ width: 50, height: 50, marginLeft:30 }}
                />
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 15, textAlign: "center", marginTop: 15 }}>
              Mob Timon coleta dados de local para ativar trajetos, localização,
              mesmo quando o app está fechado ou não está em uso.
            </Text>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RotaRoncador") || setAlerta(false)
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
          <Text style={styles.title}>BALNEÁRIO</Text>
          <Text style={styles.title1}>RONCADOR</Text>

          <View>
            <Text style={styles.middle}>
              ⬤ Local de lazer nos finais de semana e feriados.
            </Text>
            <Text style={styles.middle}>⬤ Aceita cartões</Text>
            <Text style={styles.middle}>⬤ Funcionamento: </Text>
            <Text style={styles.middle}> Sexta, Sábado e Domingo </Text>

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
                    "https://www.instagram.com/balnearioroncador/"
                  )
                }
              >
                <Text style={styles.link}>@balnearioroncador</Text>
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
                    "https://www.facebook.com/balneario.roncador.79/"
                  )
                }
              >
                <Text style={styles.link}>Balneario Roncador</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.taxa}>TAXA PARA ENTRAR:</Text>
          <Text style={styles.taxa1}>R$ 10 por pessoa</Text>

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
  },
  taxa1: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
  },
  middle: {
    fontSize: 20,
  },
  link: {
    fontSize: 20,
    color: "#0206eb",
    textDecorationLine: "underline",
  },
  title: {
    fontSize: 27,
    color: "black",
    fontWeight: "900",
  },
  title1: {
    fontSize: 27,
    color: "black",
    fontWeight: "700",
    marginBottom: 20,
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
    elevation:10,
  },
  verRota: {
    backgroundColor: "#14BC9C",
    height: 45,
    width: 270,
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 1,
    elevation:10,
  },
  voltar: {
    backgroundColor: "#FF3030",
    height: 45,
    width: 270,
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 30,
    elevation:10,
  },
  textoBotao: {
    fontSize: 18,
    padding: 8,
    fontWeight: "600",
    color: "black",
    textAlign: "center",
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
  },
  titleModal: {
    textAlign: "center",
    fontSize: 20,
    marginLeft: 60,
    fontWeight:'bold',
    textDecorationLine:'underline'
  },
  textBotao: {
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },
  textoModal: {
    fontSize: 20,
    textAlign: "center",
    padding: 5,
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
    marginTop: 170,
  },
  modal2: {
    alignSelf: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
    elevation: 10,
    borderRadius: 20,
    marginVertical: 280,
    width: "80%",
    height: "50%",
  },
});
