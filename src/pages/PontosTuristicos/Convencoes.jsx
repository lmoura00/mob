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
import {MaterialCommunityIcons} from '@expo/vector-icons'
const { width } = Dimensions.get("window");
const height = width * 0.9;

const imagens = [
  "https://lh3.googleusercontent.com/FoaTN1l8jgjAatZojOtmDGFmP8JMBIUJBn19H_OT9FD6PykV2u28_n1zEflfJG7jWJSzubwh1MPYY1T_xI2RieQN9i7vmAmsYUmqRZQpgarXs0uTFLxu0DvYb_hi-Dk2GvalrywjvfZwyj4jB7jglR2FMoKi7WqKKcKdmKywONY_xDRGiLG8zmvlqW9ksN6mjp9xqOQVGUcp6yKcRuB_7kSC_9VxkOBwOhXricxFwj2FiDuT8Ti8mCu8ediGWTserpyA8rwaw-cwG0AYe41OBbxGPsMnyaxg3hn4c0Xy32yCg3lnBg9R2Fo5-g379reGELdi5LI5ik8bRtdgbedOLI77MAbQb9svpsksX2l0EmYCNRs8GGP-XVAWEV-HX7LcOU45Qp7AbyDiK5rb8ITllXybJACEPHI9Wdy9HflwT3aSkeQsl2dy2tVF6z1uuuJv8Ui3bgjGq7rtVvvnjlrZtFt3ksBzXgay0RTDQmInOj5Ma3BFRKNmpNmXXuwomk6TrzOKHFf4AVoNS2zCCu1WHRDmk2YyUWgaJ3XIJBYMBre5P6fXphfSV9lY63FbHhA2AtUKM_N8oSS7pIrHlpMvXop_NyN7xEBDZ5-FkFM8fsi1c7Cb_nERj0ewk3133XNsiDN7L1hUWFP6mBXlf2FNbsZERlLZASmzDJJTa9cxcjoMZpyLAa_hpNElB0kTY2089JT6lggEmutTDwOiJM5irz4BZzERVdhM0b2D7G8TFboRjTMWpD6DYMpGbvut8zrZN0AD9nwZkJxLr9ZCg4cVlAbejxEwrkLIApPMYrmgMNW1rWZLzqOziAPoKybOcYGw7msphMAQXBUi_p6hoEfZdpURMV9vJr5jdkijIYBcVvbYXMG64RKIVZh4N6VK1K6wvO42beI_-i2zadYjlizAXmoPRGA4XSaRI0wVjYBHHBxB9_I7rimRgRQ89lPNemDBEW2PsDqGbxrYjRN41Tzggi4Rb4JSMRt1rczGXeSCFT9ZgA=w297-h268-no?authuser=1",
  "https://lh3.googleusercontent.com/KhU3T0iGj82lNzfaiyuUiiJOXms-scfsLIz2V93Z3GzyC_OYGt08HIWL7HQwk9BHXeQXv44LOIGp3Nvsptg-GaQShguFZk1gsdA54J1-XgaANqbgMzXHmXdwIW3lO6NC6swL0NkIq1coj1Pcnvmk1mpaQFhKjVVU--kvjhti9286XZrGxHj9cC2bShsowZCoLedB0fBONhE5ThsZDc1FSLIendjRkbzJYqtCQ3YrVRYAq2H3uOWOOt6SVykPTL3xnsu_mVSSGR7OfxTr_zDLRU6w2xBWugwL0VGeCqQvzW_6q1qjSFjApgN7IXtNkkXwlkp6FjzqUKXk2418sYFDHB3pb5LQ9WbDOl82gZ-3fiNF2MpAhtbnBDae1Tfu6spOItxZXqJomtH4OghLiGJLgQEmDiuJXSc2e3-kqesG3ZCoPXZ9gFK0JrxRndcji69_6jIBxpMUld28IZrl5kRrhFUMrtvqQ09ugZwCLsbfYk1W2VL_P-nDVU67xV0UMNdlCS0yoU2_Oef-9fodAxaKqCg6crs1CPazDGmGUDKcYlrSdtY6vrBER5ByTaBodELjXYfm1uVLMlZtdDxgeYFWaO2YUErxu8kN9GGX-054eqCthqXyJbDsdLTON0hQJaIlE_TbH3TF0uAU0_69VrqDAStG_rvWXGilaUQBlFzxZ9WwlVFuwZojrvi6xuDJJr3Et87eW1cfSZ5v1hX3MKQJKPzthFDm6nqcRv2GNIgPD56_GRZojefWKOE66VaSEnWYH8aWtWfZFVgxW0789ywzWj_bSFSxCUNI9sjdUnkVC2SZ8ssvM0lhS9N5nKAGudyvdxyqzMam8Luo_l0mx2PH4Qv2azhF_5aIUsDQpCs9KO5OBfo-Sh84TCnjBnbrUKGm5Conr8ub5t579yWXsjfPGGivc3w_ylluWAxNPOiaBopBX8I9icocysuoaXo8BjDqvLqBxN2KVpOYbckusFsWpbfUpwm_deiDJajwnTlvwlGfVw=w343-h209-no?authuser=1",
  "https://lh3.googleusercontent.com/1WYjzmaDU6lPs-cqcZHRU7PVFPyCXBf7CD_4DJ078a5tMq0jMR83wii-1PULbGgi7oAv7Sy25GrWPonaJjNwqeIy8Bcc3mbZ8mh-pzDH1ebHkK95KF5GNTAdahLO9vCSww-aBwy4D8Ghy35MEWIzyJnYe5LdXLB0F7QIbPk2DQLRddd8aZdRhgxVyc76X3Y44ravtiMUO8QbqB28CmivKfnrKoeUuXddyBxPiqsjLxyuK0XEPNFrjzdz-spchZ6EX1-I1xlnZ_obOpoEfLm1x6KWypitnVMTc846BIavcFwUhCyUuLUYFfZIz_IUc_C7Kwo9-30NzD3M4CvhGZk406oXn_FGIpFjG5ev6ScLK5qQIjuOG_DLnTnkGTqmLlMbtoZpDLlLscP63V17wtXs3frGW4zIjQhq3dHHE5tn8T5UMSOLfGcEPPF70MWEZ-IXgwYBH5WAxc_jh_jQINmXnjVRhkdmMKPpsNcyW8i10DkHpMJTsVnHVzeEcWY_-Lg29jUw9jxtHwD_yf1nXnnPDh4We7lArEh1cbRvgqksfejm0VxhiUiQNh432yuK87uc39EA9hgKwSAPsrH4d6svMyT4UPHKvSpwZaQkQM98FncN94IXCMcuFPozUMnkfw1NEf9KvgSZUIULY9_QzoYsleyPYFfIKuommeRAOUytGQbzldt9_d0eqMcMdm6cQ0ysnvnIYMacRSuIwj9FOn4Gu4mcXZPQdfCgVR3C5nxSGE-ih-dPj3Cx5AyKgutsezE5aEjbHdlEcT1rP6lXWdcu0XfTrGQVRav2YS74ARvomh3Ljom1_BBVEA9RRxpy1Vu_19FUe2YqQUMuZDT0jQmjNBu-KCX0mrjE5DP1_2WfQyuRPpocodTGiEOmXG_8d3RF_VW9FTnOZM_4cUnNNyT1pH6KOmJ9u1DJ3tnxSEwAG7HSNtuTTj0MOv8tv2tL9S6qRL3w5pvalYMPimlT_eUa8X-rcCd3cHDCCorr85DLw6Jypw=w360-h220-no?authuser=1",
  "https://lh3.googleusercontent.com/MlJ0mfnHcFo_We4aZJfhjDM9SSBLrCiXaUoVbo67EHTeos3EmRcxP1xDN16n76IOnS_BBW4OPPI2VEC0bfjIdxyvg31r6orO9rF-1qdryB2clV0S_PHT8_7-WySfZGH80iKoZzYI3ZUmzqleL6iXdzE9jwo3USHh6WTEN38HVjhl8gv6q9EMZF3MUCI5qxbesgnWTEON0x7iI0dStoUINPpfiP60GcbU_wczmM0dS4scmvlmbgrMEIrXg1ganKfmZCwsAU25fG7Sf5k1GxyjyZDqFd75bbY5UUkEea0AvAU5wt5aPqpWE-aS7c28NmRPsMWYm7nKHzv99KuUup3wFTY0Ct0ZXYxBCcqef1_2Yfb8e6PkRmqXHAgdPCXUCMtuuAoxzXBgYinJA-_6QbBHhhQH2X-GyojChPY9ZtWQV99utVw9crCHAAYy8Sj2S6mmmBR_vt2is1QQtNTSIRnVvzX2do2ZpXIr61a-uxAmtNNS7Jtr7f8t7w3taXu2QF-8WJCO_wl2nWbkdOXfeVg2S9y9WYi1slo6V06RaK9Gpoc4NMbeISEsc_0Ak7iNspEa4IgHS-Nj-sJu77Wp_ORA6FAZZ5-aIgX6z5mNyMIID3vCMFoVtEPeXu7LusDkfX_FHqyS3yeRHLxX-gW8dSXo6AyBt5Cx1blZTC68PyfxftVLGgcfKwoD-EdGkE5vUJSq1xfiFK4hs94kTpme9zZldeyAOhfVPA52m9OcgA8e2Hnsw5A2eUct0a0lVMsCneDyAEt4dql2_JZUs3DhB08mSzVgYE3Q5WJyR780Rx90Dz3T5AKEYT65XRzXf9IZqnCkLcKw2pdafYhfVFeUYzxIE80cawcL0I_T4EnNK-CKD8dJm8LG-tA0zuyLQe8iBTdco5JsNrY6Q7Z3-zchk3e20EvNGfOMsuwhSnTWNJqVu1mkTu028nLAJ7KGXeF0M4VdJmHH6P73RKYwnsSHARSsYNHc7PCtIW7qECt1Q89DoI9LGg=w360-h220-no?authuser=1",
  "https://lh3.googleusercontent.com/x5BjpLo-iV37ciWeWOQVwqEb2_VQkYjwPI0wI0JhkcJlAWrwuvMjN0IgYlCRF2nGNs0qTwURUyWWRohAoRLhYQvztQXBIBfHPRrjyLuc6lK3me48BowgMg6lK9SR9FVAd6RItwDst5kMklPRn_25Um1mKDZs1IExxknnKhJKuEcZ_Xt8ZH3w53Jbjv3x1nef0t43km0mjnoIZtSI8SfC7ifxG14KmEWrxRnlKYSFcFaOVlYGgl7i_3gqZisexVulMBY7sZlOyeFX5upkvBOqkA6Kl0O_9dDSYpxOVj0iws0mPwtJovCY0dY-FHPL4Kb-KPD8Qq7hG6ptv879ZWT6_dEZf82wyU9nWgJhBGEqKoVk3SLgORgvvA2adrCQ-qlX5A3uKFNJ5s5kulkHLmVm4z1puhxS3XVO__CqW8IPbKx_pReUFiPt7lLK1vuG7UTV9y_tIyQ4F1TaWup13dy7E-S0vKI1HQDMn4LHeMSahpaIvqLZ0t4b_tLCZ6bUZUzI5SHpd3MNuaPwW-PSV1Hvq7pSArv9RUTYfsBWciBbhdmmyYpT8G1e2Z8HeHv2uAp12-vXUIFZVydaIbejIMje6Vwp7-r95AgpkdP3XG3t1u9GdtNp3eGJwf-Te7_Z9Mo3SkHyXjLRFMvNL3gxxd7ovu496mXHrqK-r8gPifu0fra2E5uNf7xTcwh3VlIxQ79yLoDMZuo56Hek9Omscy4oJXF4iLLwOcRQlmujL2cIblp857TB_soQKtWfpFJOzG8G-GmNQb72LKyZmpT2AtTtEzEX_fVODp8DPVMfZoGMagQEL5iaOalbMdq3xzx4nG1ZKkxES90rorathy4JPGWEGh4nTlPxsWSmkkuJJQGzhNsDbt8J_NVtJGFECQzA9sHhPIUBMfLAO5DOAe39HkVGFKYjQXxOKz-aE05IfOwjul5JCzgxdstEbrSMhGWhO3SwZ2iONLlsiwvjNGJHazodfh5DTsscf0SwcX9Tpaj1fwVtxg=w360-h220-no?authuser=1",
];

export function Convencoes() {
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
              O Centro de Convenções Maranhense, localizado na cidade de Timon-MA, vizinha da capital do Piauí, Teresina. Com espaço de 10 mil metros quadrados, tem espaços para 6 eventos simultâneos, diversos tamanhos de auditórios para diversos tipos de eventos, espaços climatizados e semi-climatizados e restaurante exclusivo para eventos, fazemos o seu evento do tamanho que você imaginar.

              </Text>
              <Text style={styles.textoModal}>
             
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
                navigation.navigate("RotaConvencoes") || setAlerta(false)
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
          <Text style={styles.title}>CENTRO DE CONVENÇÕES</Text>
          <Text style={styles.title1}>MARANHENSE</Text>

          <View>
            <Text style={styles.middle}>⬤ 10 mil m²;</Text>
            <Text style={styles.middle}>⬤ Espaço para 6 eventos simultâneos;</Text>
            <Text style={styles.middle}>⬤ Restaurante exclusivo;</Text>

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
                  Linking.openURL(
                    "https://www.grupofranly.com.br/centro-convencoes-ma/"
                  )
                }
              >
                <Text style={styles.link}>Centro de Convencões Ma</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.taxa}>TELEFONE PARA CONTATO</Text>
          <Text style={styles.taxa1}>(86) 3317-9201 </Text>

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
    elevation:10
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
    marginVertical: 40,
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
