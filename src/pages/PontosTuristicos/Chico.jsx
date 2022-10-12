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

import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
const { width } = Dimensions.get("window");
const height = width * 0.9;

const imagens = [
  "https://scontent.fthe18-1.fna.fbcdn.net/v/t1.18169-9/12079068_850371711728144_3781728276746094942_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeEA8bNoncQu4zVg1DA61bQhmxw8CYfr3NSbHDwJh-vc1FJVabj93eX6UVMbPwm7aSPiN_8OrBm67m_AER1W_Uzq&_nc_ohc=tUPFIAF3gZgAX8qekwv&_nc_ht=scontent.fthe18-1.fna&oh=00_AT_c38XaV064sD8GtmEzrCp3N5I79ggquYizsV09s0K2BQ&oe=634D2201",
  "https://scontent.fthe18-1.fna.fbcdn.net/v/t1.18169-9/17190_406022809496372_122274210_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHb0NTDVI7GPV5nfFWy1Ij-9pfe7X-w58j2l97tf7DnyK5FJH3wguRbmFy8OuMEoau405dOj75tNjgub3gyJeCq&_nc_ohc=aFXAD7gin0kAX_iZFmf&tn=3WG5uJQzW1OH0zMc&_nc_ht=scontent.fthe18-1.fna&oh=00_AT9MILLk0fzhLTqUc9QqNZsf11ylt_xF3Zq_riEZJcl5EA&oe=634BC55D",
  "https://scontent.fthe18-1.fna.fbcdn.net/v/t1.6435-9/95561784_2889010431197585_7243791429393186816_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFWEZHrNXXvpn15kT92HoPnQl1nSCOZvWhCXWdII5m9aAtsXzUz-Yg8Py4yJlbXODnPugtsukw18abv7ksx0ihw&_nc_ohc=BFdqMRMIqs4AX9kTqWX&tn=3WG5uJQzW1OH0zMc&_nc_ht=scontent.fthe18-1.fna&oh=00_AT8PXbzMCY0-XtrgCUwoa4soBOwrnOkoTZRffao6glJcOw&oe=634C9621",
  "https://scontent.fthe18-1.fna.fbcdn.net/v/t1.18169-9/15822563_1142690892496223_4013301051485292254_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHxr1ri3n9qLZkmtzvnhX-9fPKdze-yYx588p3N77JjHloqqbutADX5iO0laRlYotppoS9KzEYJiLbHduBYfdnL&_nc_ohc=Dysd8K3MAIgAX_r_fuS&_nc_ht=scontent.fthe18-1.fna&oh=00_AT_r85SOaVMKS4JI0wL5328BJvtr2nPsPUXYy1SUbsCD6Q&oe=634C7C92",
  "https://scontent.fthe18-1.fna.fbcdn.net/v/t1.18169-9/15747819_1142690959162883_970983350602217951_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH9Dki6QGo2u6c7kU3nvcH2tHen57EF8hi0d6fnsQXyGPjF5zKSPsX0dDDJhKcMwXpszRo-tzx2JC7cx7ocDDv2&_nc_ohc=Fzkm4S3nFGIAX_XA6Fp&_nc_ht=scontent.fthe18-1.fna&oh=00_AT-_GVQjcNoVz4rwRlUfRMgXlPsgsln5iGO-tmZWFuX0bA&oe=634CB038",
  "https://scontent.fthe18-1.fna.fbcdn.net/v/t1.18169-9/15740982_1142691032496209_3897505771643138347_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG8S9O3neC3Rb9bnR4Fm3586mTiNYTbX_zqZOI1hNtf_O3RW5XCSi9U9L_o1VuIdJJDzMnzJSmnmltsyIUwjpXC&_nc_ohc=uLIcraYUz7QAX8wOmmO&_nc_ht=scontent.fthe18-1.fna&oh=00_AT8T1DTz22IEIUwOq2kZ0evZi9IEyZU6EvOYSaw_tosreA&oe=634B2E9B",
  "https://scontent.fthe18-1.fna.fbcdn.net/v/t1.18169-9/15135808_1095121240586522_8988900998963568648_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeGB_2NsOyYyTOdBhdYzlGEkXm5zU1iuAK9ebnNTWK4ArwSyLyTejnFx6hFrckozHvz7NDwOJGVWm2zZ08qdj9BY&_nc_ohc=xdpmfetcaSwAX-0zdC3&tn=3WG5uJQzW1OH0zMc&_nc_ht=scontent.fthe18-1.fna&oh=00_AT9gyKVfG24JmspRx71IklUbWITiw7CS35TiKgxoOu4L9A&oe=634D3E58",
];

export function Chico() {
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
              Lazer com uma boa comida, bebidas piscinas pra melhor conforto,
              sempre aberto para você ter sua diversão
            </Text>
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
                navigation.navigate("RotaChico") || setAlerta(false)
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
          <Text style={styles.title1}>SEU CHICO</Text>

          <View>
            <Text style={styles.middle}>⬤ Comida no local;</Text>
            <Text style={styles.middle}>⬤ Piscina;</Text>
            <Text style={styles.middle}>⬤ Funcionamento: </Text>

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
                  Linking.openURL("https://www.instagram.com/sitioseuchico1/")
                }
              >
                <Text style={styles.link}>@sitioseuchico1</Text>
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
                  Linking.openURL("https://www.facebook.com/sitiodoseuchico/")
                }
              >
                <Text style={styles.link}>Sítio Seu Chico</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.taxa}>TAXA PARA ENTRAR:</Text>
          <Text style={styles.taxa1}>R$ 20 REAIS POR PESSOA</Text>

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
    marginVertical: 350,
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
    marginTop: 150,
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
