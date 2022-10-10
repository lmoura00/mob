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
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

const { width } = Dimensions.get("window");
const height = width * 0.9;

const imagens = [
  "https://lh3.googleusercontent.com/T6mDyMiEtoSLk0RTtT5zPVJna1nurszfqDiiwPjM3jmWyww5BmBfwn3IWbkpc4sFK7zAg8eM_j569ccN7fMmrQ9PwSOED1s8uzq0sEyeClzVrPVajCKywMD3vNlORLkV1romrtZCUDYJ9CNA_71Tlk1-IMwa-iYFyXKep4vCouHJ9ZDnGkxOc7cKTN57L7Jh9PrqAUqklvAlOZtUU5ZJOGWocgSGwY__hmiMnTgxWFWVVfsWZbnypLmmfzyDk5axsWaznIhsLn2ltZzjGHiIlBB2vWJiNVbiAcP9wbLHkauSZN4hPlBdT3ZALJyEKwd_9hM0Iq7T6l3eV7uCgwZhQx0rJJI-UwWxk0LP4GuuFBry3uoXkefBjZIxT62E_tpOfzrPuSODyI_e9fXz9EBCfLRUQ65C1SHeE2xtLfsuV_nRXmB_Z280jgsWBenVtU-izVqKqSuCbykG5S3EPNlPa88cVKj2vljW2PqaaQRPObbcYs6SFwX08BLRa9NtTIkqbwDmi7Ife0FQbjY-ktaXI_0yKyEKM0Iz-bW9Ico6iQ5ILk4KQIRTevYeB1XudomGYpKao6JSfR2QHicFxM42dvWPKyckhm9Pw57MOWZQuAfw-rUT_Z21U_wbQDms9VxItWYFdmQJB9yG_rECnz1kDuKEFgbE2NbXpSydTx_VqMRt-pE-ZhQwZ41z2AW4SN7kyZgq1WHvwYnPK-JsDwz_d_RGf65EauOHakIY1WLrXtFUu6Fv9K0X5zvatE_OqG00Ryit6I66PhDPwS1zxOhhGBd3dKiiwB4GWCHdM5yF2H69NkEBPkAXIrvNtj0CGkv4q9GSqA0esvtFh_o1kb2SUQc7eusPygYDFORUDQSMbyQ49e1wfzvizEEob0eWkXmF_mZ1WdqLEZ7xTRCNc414UFdRa1oNM56OEXu-GhSTTtLXSJzzRmvLP73M8Iy-JEtr-2Aq0fSXe6me9gM03TuMpa-gf1D3dSfE8mAloDJb13FwmA=s225-no?authuser=1",
  "https://lh3.googleusercontent.com/e2zGwZnJrZNFuGxYkbWnPIWvyiwmE-wEz7KwSWJJC-YPaXI7EP1CeOHrVAg9TzsLVRxV_oO_8qqgdQ3XQultT_lXvXzPPTH-fT2Ody30E2wmNVgbIAg3_gQNW6sNyXosRAayKK5QCrRAt7C-CPbWYdMoNkA5mXvcxJ4q9WKsKZlqPDXR6ArYaCEBTHfhtYaYqgcHsr0N2wq9MWwmPXdkpeRz0ELELRD2mK6DmetUCqgc_65dgapGQvkumk2IaN1LrOqjux-qNu-xADb-G_tewNY9LS_WuGYjQI8UePnOQtMqXwL1DBBVk719cieyW6-n1GsbMW1h8n1EyhohenoHXpehsJcakhsvw-CHdjxiHpMlDBdwQzcAvePKX0VIzmkDBhZo5eGVcdBQdM97nOIbkq4qyKbBqY2VpuwAZq8eAwIjoudSJhxmYr2wlqim38eSak2PQB8FEW6CNR_OTzr1oZ0oyMJGrXjELkHNg_FPQ5Xz2D7BZWocEdeh-BjBk0qRIpKdO0h_0kR_Z2hTeKMp0QIU1WNuKdQ5BO_L910G1TDp1fh7PtR8skYByiZr58ZnN0t3s0X4gwku3pWSOIxudtQqCJ6oejIG18J3k5KQOi19dOgwFEFcbptZ7V5bzpMiyMSzhFMkUK3ayuEgH8EUSxVAs-z1PCZ4jBSkUGdhrc1HITcwf1cNwLyEbTHCANfR_1LB-l54HDXKQxy9PqQMaiPtEujxfsXOJqrHCXOSIKSyDmt7fpMuTwj1oCYVKH1iu7L8PO8QvLp3EwhvBnSprtR5Em9SaOKKLor9mlAjj9RC4FsFVRDeXBjofEBkKgOs1cj2iofTlhMYwSvbqYV5YQW3bpTKPdYha_uvaP0jTaDDhLcMVe6vlxCy-IRRyz-gLGXJmEZVUhLJduPKxvanyh67N9bfvhmMKd8rjuaABV_m1DLpvygdog9iSZqKLAk6PRgoytP5yhXI4sNLIW0C_EmIYYlJoBYezx0feQ8YxLRDuw=w1087-h592-no?authuser=1",
  "https://lh3.googleusercontent.com/w2hN0jqHlmLZoGJ677eYooXJ0tN-mfMDR3u-S8gs1h11mZmcQlMKXGkLHpZKCdm8Nz4nwlB9icjbKeCAl6YOBDiEkMNhxs4DNLyeAVU0mj2T4tft9jAyxG1SmI8u7nXhsFm9PKaAhOzXLdVkf5B2wDslEBZsDBBJxhTnRgfCfeUHOtFdxH0VE4wgbKwTXaBMWUj_fOnS2KJd9B2jWbGz9M9BPJLWQ9IXJHLmNtqI2ziRQFYso7s9r4xIQ3ytXI9RkB0oyWjbkGsXF1uKR00CAlQ64_YEhoclZM5myARDHM0qslKrp0vnfOXkURt654uII45OUsijoYJqUm4jtRudUgAeHPL6xUxR1ZEuC2o_lvwgCDEv8U5KZWfHKlYIOJqv6kU4oAyoaenwRzqUv4a9FjTq19isAzVQH3gnfA4FhveiSDWTsnjpRm8bjiQkg5xjKe98cFPp6gQwiyit3meyRLN8DHUOPntVpNM3ObvmJVIb8wgw_Wu4mPmuAeT3t-NRoWP2wNjJjNLE7aokJqigHNAYC6dAvFtTEJdKlDTnFnvc07Fy0ja76Oyk3rgN5H46sS2-PeIqnmQsuQktbw2tG6TfuBE2vxAZwQyxyySMP5CJ6-T3tKx0I5mgvd8lU9Ag_FbARX_K8nPvYOFbv9TdN6K9e7nVL0QUxTuwKiR9zlvXv_9YEc2UyzqDPsDpPU-Z0hAcXWeqxqlCIboTrGKLu9gW4kWrCSRV1QI0pERje5xjNwdMnhIuNl3_YDXEmgfjp2Ddet5Oc6cFO1RkaoFoFTjHKx_Oq6GdMda5ozAH9TJjlGvI_40hWA3ew7gomM87Uf15f2-w6HzmjLo18oHSEz520A3xJhVXzel4gHQa7cCIy8KoLiXXxuBIkhkvE9a4lpc1HIQncyutH_IVhlXP_j57s6lzox_Jh5jpEM-CZvkPsrAp1rh9o3EYVhWQW7t8D7qrZhdgqhxkuNd1jwveyPUdm6HnT0t9OQ6h-M9QzUNFCQ=s342-no?authuser=1",
  "https://lh3.googleusercontent.com/VS1a8Cvt_YjbtpyJRgQY28j1YjSbNgZm43XCtXkKqLsyI_-ogrTz6WKpsmuOx5U0p9d1HfRpHdsmQYY4o4Rcba8cNvJ_b1Yd4frpNT-Q91IpvOCDgy5T9Gs40KUSXSMwnOMuLzeWZ8idRMne0EtKczNPobY1eOvywfPQ8fwtD-DAwRM-QHlwP6KceC4amkHU5VNhm7_j43HX8izyaVWHzOzz7kb-GS3ShreB6SX_xQGlC313FJqRGg39PyLKBhOARww7FKCvBI_l9K0jcwKDEK5qxH9rlJ27OWaTVt4WuejmGyPmzg1fFXonpGQCNa7gfqvtQhnnaHIgZsNp_j6W0AKlK4a_ebrrz_bIMYSQmi_k7H5wT6bnYrn72lC-_rIUqM4sDrg7sOdmAJrdHaLWVyrktf7--fiOakK4OPL_-C93p0wK21TxUnXKkoI2vrUyKPA0AqHU1GGiB0S2mcwjVwW1G1fu1U3rFtXX2w9_hd7sbH-M3PaN7xBx5ATiPOruuexkuekEjR4ZfwwyHBpzRtG6Iobuzbq4zNLEXzugkKDcXZ5ir7099YhfxRuZ1LCcsNoZfZ7m7i-fp9bOP_daRFLRIQ2H45YkdcP72lYkrab1YOoAhImjJBy8ASVGs0MFWuY_ylzFE-PNjG9OWIiVd0XfJ-slgmS-7JxYAlGdXqY-JCudF-ewSVA9GynlxqG6rbpjcM5Q02RIXEqll1RyZ9bIbLbUByvX0oR2IeqKTqEBfn1X2YXK-W2CUKS3MJk9ATPYTRIXWnw4mgK53bR9m6_p3mICVkRcTxI7hOE4HbDlns_9hry6RII7cOvXkgsJUqcdyGEX4Nh2l6J5qztDD55zkH_Xnpei7JAKZLJV0uy2pM6qfU1r5I_3h5DIcfuQCuF7Tj3l9Firhp_CCynDI7Bh8tWZHPf2HgAGNi9MNtU-WvJVGBJKILiG1iX4MfTURiRafJxQAhTrAIfEy0q07te18aZAebnNUbjIVZeflEC8oA=w453-h302-no?authuser=1",
  "https://timon.ma.gov.br/site/wp-content/uploads/2017/09/EDI_2024.jpg",
  "https://timon.ma.gov.br/site/wp-content/gallery/inauguracao-do-shopping-cocais/842A2004-2.jpg",
  "https://timon.ma.gov.br/site/wp-content/gallery/inauguracao-do-shopping-cocais/842A2010-2.jpg",
  "https://timon.ma.gov.br/site/wp-content/gallery/inauguracao-do-shopping-cocais/842A2018-2.jpg",
  "https://timon.ma.gov.br/site/wp-content/gallery/inauguracao-do-shopping-cocais/842A2019-2.jpg",
  "https://timon.ma.gov.br/site/wp-content/gallery/inauguracao-do-shopping-cocais/842A2016-2.jpg",
];

export function Cocais() {
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
              Inspirado no modelo aberto dos mais nobres shoppings de Miami, o
              Cocais Shopping oferece um espaço seguro, confortável e acolhedor
              para os habitantes de Timon e Teresina passearem, encontrarem
              serviços e fazerem suas compras, tendo experiências positivas e
              memoráveis. E para os lojistas, além de charme, segurança e
              conforto, possui custo administrativo menor, favorecendo bons
              negócios.
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
                navigation.navigate("RotaCocais") || setAlerta(false)
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
          <Text style={styles.title}>COCAIS</Text>
          <Text style={styles.title1}>SHOPPING</Text>

          <View>
            <Text style={styles.middle}>
              🛍️ O maior centro de compras da região!
            </Text>
            <Text style={styles.middle}>🚗 Estacionamento Gratuito</Text>
            <Text style={styles.middle}>🕖 Funcionamento de 10h às 22h </Text>
            <Text style={styles.middle}>
              🍔 Pça de Alimentação de 10h às 22h{" "}
            </Text>

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
                    "https://www.instagram.com/cocaisshoppingoficial/"
                  )
                }
              >
                <Text style={styles.link}>@cocaisshoppingoficial</Text>
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
                  Linking.openURL("https://www.facebook.com/cocaisshopping/")
                }
              >
                <Text style={styles.link}>Cocais Shopping</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginTop: 15,
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="web"
                size={24}
                color="black"
                style={{ marginRight: 10 }}
              />
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL("https://www.cocaisshopping.com.br/")
                }
              >
                <Text style={styles.link}>
                  https://www.cocaisshopping.com.br/
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.taxa}>TAXA PARA ENTRAR:</Text>
          <Text style={styles.taxa1}>GRATUITO</Text>

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
    marginVertical: 110,
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
