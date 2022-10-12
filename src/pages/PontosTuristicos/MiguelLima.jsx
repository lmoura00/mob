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
  "https://lh3.googleusercontent.com/6xg2kAGYbp3N5XjZlO1ylZPk0woOOLcoOHnRrm9eDqVgIQhB3E2DNczrlJKGoqP12imQiFzNyNm_f58lonoJmg0BHS_XU0CWaLJ8AyJ9Q91otSZhOx0Gtm0CiBVGG65wA6BMTv3sY-7Y06tuOhrdkVcPhShcMUhP2ZRfk9LfSaNgaNAbZRRO8uKvmX-b9XVZX19R8BgGQgxPyh_JSeSYTi-IQ8yQbf-7C4qxfDN6n7bVcKuXFtFLPTux0Jj2_kzSgybVdptduvjshexyamOfZ3pGoZ8CTsdrKYgtq6cS2H0Oayrk_-OgvjQ7DCnupo8seLhE6I2nN0PTvUmlKHEEu-9GYcCiFkpTaovtbFy6H2gbImwwDnEXnPOiy0XlNYM1bql8Lk7cZmgGFgwbHhdo30mDZb6TkQslh9aPw2QVnJCcbQc1SHaanHygrFAni5Umm-obcJ4jFRnwmctzPZ3VDhb4S4dcfV7e3Hrs-BFWUdw7anfzxp-wcpH5nQF5wmZ3W9jp1wcYez7vfrVQ8Gar0RsUJBSDnK9-8Xsrr24b_3eUaa8KFtJ9YcTQ31M3PGUrjy4mN556T2ERjjb4H1T460Xt1ywfx0vwo4TmO66qVynUqKIQOBF-fsnVg1X-hJeEmo5QcSM2riGiDOY2TA1pzx7XlFM0gz0cUDf2fkz2Q1autG7L31yqFOMIBQUJjnAqKM5cfh55MrzmBk0yhhGW6vXqw0RLM505PaUYVnJrFzfeFf27mdQKVeQhwxjC_CFxDkApW0mZpZrx5aZKmhP4TNz_ASLVG3R1gNIw5_hdAsT0N6WQqXd3fUxjm8IiP5NwKV61nPRBSoygPWW28VBEO_70km49bNJ8WBBW-xyReuGAoc8lz4UlBX4Cz-liM8FoAWIGPmGNVHrnjAM6TsK1vpXkedBTDtpmL__iwEq0-exkm4On0usvKxQcNd42PHhjy4nD3u1Yg0MRj23k4AqPkLzrFduvsfCammKvYJlMKTKpFw=w507-h337-no?authuser=1",
  "https://lh3.googleusercontent.com/YWyd5LomPfrZA9lg812bPpwvBmRg2teyja4ktNzMv4PsF---52vlk9YZceltYjkdC1z85axZS4dZmfh16RSmBORhvBEyhFNwOKokZBAndVZ_aBAkLAZ7p00MJgLZQOSGLLIkFaS3mJUEpCZIzLveZ8Tju3rgZU1fia8-hO5KNmgJ9xmhgbBdvIlTzBR40IqGX2BqR_W6v1Me9dpHte5ckLmrUy3qzlsYydGeMRlHoDGVzdNYW1YkIU1XVAI5pEBxL3wBla90gQuQUX0WzH4uYColxvUsNVhvz4l1NlbkY13mgyjdG7C0zV0ikClkQAqYwCoYd4xN8cBGpdvnDV3H8pc8jyfS8IzqS0Q_KqVUkKi9byOzqxPfSZppZWKVD8_yoEVoTiNOkRSJbbgwBNf2LOtvPfPHkiWDqirzOQnTySt5WrmBEq_NTmWxg2cNqYFQsogS-r93zcINoNocJGX6T41JlZLLNxTolybxa2D-jelOSNiBYvvP_PuZhEy2BqC_jPnqIT-pCW-4MU7CdahkQ4xmEvOFyetm0bgS9ee8e9-rVS-o8JM73K4qopH2gTGiDV-q6Yht4hjXI5-ldricJzVxRJA1tv74t3Sa7XXeqP6ElqYK2vS0_K9fd0Sfo1R0YMlbeaGGsclaAlovE7iSxSeV_Jela1uC_rLwq7Ldldr_zyWJsS5j0pkfos0ocdXcWcvVYloWWYwy36BegWvaeW7j6Gu6UjB1lgYvIdXSkGIouhnfWV7DaSyzXSIrNW5pj-6BADUTYq7kHOe-dxMGkZKtHUyxJgWKVNs8Ov6OZaeQclCzvYH0xui6_YuWyIh7-MWVzk9rQaJY80FIDAqJbnKwECibEasP9wvPzR5s7ZfiI9CaU-0eX46BptLFCZmbXKUTchTF2VBuLOh7ynGi2oeriLvdJ0Pcod1A1YMlM-IgEmYXJKI8NmhbCDfjj4OUm_gW4YpOPaxy97lGLdBUZw4f9IOTCAbgk_iAIgbYD9tTDw=w404-h296-no?authuser=1",
  "https://lh3.googleusercontent.com/O-IhcoFTOFJqeyGydu4Hc1ee2ENL5XDwg1Vzh9IHjiPnToQ5-L64oDlfDCMQ0uqnCJugkY7ylfpqvRrGboIoCAf_5WZiFJ7sFpf82qW2lwmPIjr1gLHla7UCWf2hLVYAEJPxc2DJ_5LjUumscZl18Yy1l37p36xCvZXge-jTYEXfcf87Ic1pIn3CqmCbwjdeFLRdQFKk4gXYyA55ZahLjAgKGvtUNwKQzPpe6gjBqoQnzTEa6IYxiDwzW75AFtBPBWz2XRgPz4jlyTIwsa_ZXDdee61ATywHyRZXcPVJOzQRaqyJ4ViAQKoeQSrdsqarwdPrRju2j0S0ojg-dJ0pJG_sUxeb_Fi-JcJ0u1oBZ-5WYt5HsGif8YxEJ5rTefMENTgL4qEhZ6yJQmV86XlK_Wrl_eDiSPO2Vm4h04m6TnuZuUgSbpso8kr146pklmZINYLZabbd9HlJarC_AG7GrY2nhWWw_8LMU1iLRzM42t2KXnn1KDKMy1MrFJeXH0YuYSea5zxASq4N10Zjc0I8HyqvJhMNig1Dqeiwkfk8K-mBapBbJKXhmmz75AM3d7i3LGCRQXo3v5F3cvQvy6ZOlJVH50Ua8MsN4XQKS5gYWKs8EYXKWx4DdgUG9uRwP5bS3d1M3lyv0xL3cg4fp36l37P3VjGttViCG_w7E8ck2NGrGpIYV6iWtLl2-ldKlz-Wb-aPERVln88b0X4bDZwI7sJP_wHaVAl534EejDnEjlc-ddwTs6G39UYvmL8gLDTwht4LpgE5n2PxpVc8UhpF2lvbye1VA4CIPYR4B-AVRib2MnIkXjAwWB13hKyi3OHi3EMAWr4SGgC3At3K6OPDMZCPrDCAe0sa-hfhC3H_eZVh826S2IkwvJ7m9c-cCV0Axxn6YPwr2tGHyKqJK6_y91sJLOCU5DvmIwNzKOBKWJ9VNjyzR560tBCFHlADdZwaeUMOx323jsviY9KpfXmFurI62EaPVDDrcKCWpFvny0T1VA=w403-h292-no?authuser=1",
  "https://lh3.googleusercontent.com/_vCeWUArK9FVIcrQBt04SsxXlRf_S67oA0qt8pgsqJ-WeXMk9THUHLvcKluGfsM03W-rNTyv6Bld2zyaLZ3-atf-UiGdZtHdmTJNXpLNpwmnHMRgELigFn-G6v1RKi-wPUT7Usc1Y3mYfYKQtc7jBp0lodKxhxBRMjl78jRzBuODs-amTSHKY52VspTWS3mFUec-8t-OUmlnmisxGyKpsb7E4oeeVlxHmPzSoqvkLzcb3GerXJcxxvp8QsvP7aOW8pzXpr-W6dYWCVCQCMDM_u4yLGO3-a3VHwn6TqRUDs5ijtbls43OZ3XkFxUYNRPlcF0QQ5BxUs1vdSnxd7rsLEh5DVVa2lWI7Vt_AUzlG7AVUO3QMgF0ecgP0SVLA44l5TNG9LJQJkQ86eLUWguzTXnryjj3LIwjWCjKCWVMtT19hj-OeBLeKLCeavWK8ESyM46cHhNNYYWdMLrXqz1A9RRjop-hQ2q335oY27EsnL6p4l1DoX1FIME_Q-5wBWa4xgwcapyg_mEjNvFI-ezZUX_eohFd-AmKixWoU_DKt6XeFmmoQj3Qw91unBkt76gsGXo1EGK7rJHfSUrCba0ChrX15GvsOwwsCTQaRE3DfGQ-NDhe5BNm3AYGE13gpwwW7wxgDOQOY0ntNWPi7l7LgUe9WCvs6NwXF2c3wPZoKkNtTjIWNVTeizfnomeb_3iPXB5s_F3M02o625ZUujRUvFpyxEVzTgieBS_WOEqff08W3DgxQkOXeWRLd0t9FEQRX7pslkI85teLkynWvdFBgpWJVe-OQCEWoySbrPuMOVlbfgq2XrTVgcOQRhRgDLH9wemjzYP4CshqaBkQuHxFtPEvbp4yPq78VMIAnBXem4Sb-GM86j_lIszBpRu9q5p3iinxZqpLVgKBzA4AyLql7OK83Ah_vq7KLBPbOQpsiA33_HV25v7R_5sZKJdc64oQAftVaMWOo51vvLZ4fD2ro9XPcj439Q3m_5u6ZTSypM1-NpE=w300-h200-no?authuser=1",
  "https://lh3.googleusercontent.com/rjSfAIgppOrx5UQ_DkzxKwqRtcfHHAr2FvpOO04JyRJIW2EyMFlwonKTLhGyisaROSj3I995jUPpBkFwtBYB95FgnPwIkr0cUU6MXoc8T8zbwCgVx1u_lGs1o6M26GnYdvbJpYR_pSDbVOfP5JXx9bn2w2gaO8xU2zN6xrtg_xTmwR6rg8qGhyNvWocFnbClaDhCvAZpER0nmsJPo4E8LsgAYnppJzpmzBxCsxcfPdKDKMa9oYuMR1iJS_XJvaF9yP9Ha096FFToaWuYwgKfAYMeLTrLgpok_KplF3GwIs-j83Ez72yqNDmjEENkxCy7bChHymJHix-GCUiGcG5AH3GE8gAStIYzNN5ju4VgCuI62kDTkVR88XN6JGHsJFGt0lqvy1qDU26cSKQ2jrgyiLGtGbXKXBk9DQ8ckzotIZS8WB6btCTU6e6sQl6t-5pTdoJ1xbbWioFkxWq0P1Pvx0bUBgFnEJrky9TRtlekSpBbnAvl9swnBcnySFhTZGTgA7HNoYuOKl4l_-uF1VixhWQsgqR5dkuBp7sWscRmFiVHVNdqaqZ3agr5xA-sp61V8u5CBCVD3zNp38_SAiGX2Gg8wuCGloM7RnGdjeDOCBHIEJsBEkBGt_DqgzDsYwVGoAkDhHwauT21kGxOh6HTfq1dO6DfilxNtNpGSQZ8yL2Jf_vzsGxPTDUZWscnxYcwMGv3UEXaErCdZUS1gtd-iREbjLnCGYxVDUcPAPN9Wxk24go6rLYsAs6wfjfJ8kPpj0tuQuJ1gAmjrm4nPLKVmOL-dXvZagfjt06-P8fLsNYHtYvrLU9K5QjmzqwrxqQQd1gedWu4GWkMdHPurAA4ZVDV9B_zoZXjG1hZuEj-EuBxGidcPSsd5SWHMCXFGOSZaAhCS2zvWmQO47AR3rXoKZRnmb6IJl9zzdhWF27EQBoyg1LFHXI4Dn9ptYH3XMeu5SqkrJqytjryY2iqCfKtiAnOvj7bvZq2M4rjMikTSvh4WeU=w924-h693-no?authuser=1",

];

export function MiguelLima() {
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
                O Estádio Miguel Lima é um centro de esportes localizado em Timon, no estado brasileiro do Maranhão.
              </Text>
              <Text style={styles.textoModal}>
                Com capacidade para 500 pessoas, abriga ainda quadra de esportes, piscina, etc. O público recorde no estádio foi de 700 pessoas.
              </Text>
              <Text style={styles.textoModal}>
                Pertence à prefeitura e é usado para os jogos do time local, o Timon Esporte Clube. Outros clubes locais também sediam seus jogos no "Miguel Lima": o Dependência, o Milan, o São Paulo, etc.
              </Text>
              <Text style={styles.textoModal}>
               Eventualmente, a prefeitura permite a realização de shows no estádio, como o da banda Calcinha Preta, em 2006.
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
                navigation.navigate("RotaMiguelLima") || setAlerta(false)
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
          <Text style={styles.title}>COMPLEXO ESPORTIVO</Text>
          <Text style={styles.title1}>MIGUEL LIMA</Text>

          <View>
            <Text style={styles.middle}>⬤ Capacidade para 500 pessoas;</Text>
            <Text style={styles.middle}>⬤ Abriga ainda quadra de esportes, piscina, etc.;</Text>
            <Text style={styles.middle}>⬤ Pertence à prefeitura;</Text>
          </View>

          <Text style={styles.taxa}>ENTRADA</Text>
          <Text style={styles.taxa1}>GRATUITA </Text>

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
