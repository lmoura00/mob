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
  "https://lh3.googleusercontent.com/rfm1cy40cz1KNhVQLk4R7QKUzpp4TO-MjBhJv6cIw43j5CNMDT0cZK3VY8sjOI7-5tSZMoUWYD9Lfj4iqJcbEhBjc8Lq4CZwqyAv55UdEkLbCQM7Qc1rZEyZZGS45vWa5pnbQuF6m2KtXH7oXSliPr5R5P20bAFM2B7-rJqCH2-3uPxUcblmpILnwWyYONRQE95Ll1NIbGlsPXe7UdmKA-Wf2vRlUCgNELKYiTNxn_k4NVklDEIBRuk73EijZ1kGsjKeqnoctP6CSumU0UcGv0eIqkYL3EwLc0I8zMkC0qCCGe1N2CiIKw8npZeFpBIDramXDXeC8PKJYsEoMivxUEO9tv8I-U1uPu3482L2mI8lvuqOF6my7EWc12c9k-UO1ExMojWbK8mZgqQ9HmaW_RckvzOiLOp9rJnIjm0L4mYgMChBipzTJmFN1JLdfi6Qcgd4_egLFFsjI7xJp4WE1_YMvn7oN5ae7d0w-ByxWfnUycpzurrPyFfe9sEsFZvDl1oezlLLgX-3BPOEKxNyDTytcWiU878y4HIA-9qYqhxD4jfJIBmWoLoMdhzwiicX0L4kS-bPatss2IDQijLorf9AmPNgDr6oMvzRQJ_nAI4LTDc4fNaut4vZ2HMqc4X0mRuGqoxbrkfMafLuFtP4hanUZ_5Vsd2c21xcPFKMmoHf1aRuGyAgC-n36oGWihEyhkLd_ft765vJN2IWX3lp2wjEq9_4HOArSGX5H9toFYEmJxInwcMrD7k-hbxc-PvbVgN3VZNWOIUUh-F49b3F0BxVwcSxWWXXrEouVcVnv058VmSb__-ABCqm9gwLLojiKDZ19a9hirtnYaO--oBbiIZUJHN9tcBAwy8_bR_d4A8taGKaQzxQ2NabcaVZVsD3qVz6kXFFRtkN2Yim7eVfXEYXH4-2T9IOugF-gvuSkj4YYSFW0dxVNJQXEqS1DFpWV4hO7jYBYuHsQU_ecMHB5jvSRET-t6Ln6VPdctrtzCymvg=w760-h518-no?authuser=1",
  "https://lh3.googleusercontent.com/cnCL_HlY6On3guNVdzj0RRoumrzDfxwj7gUVepu0130GAMZv9ZwSAElsjyD8ab4GDgiJUpwFxV7u-GKpOsr7ZkVcu-n0YSbu5jFd6l9Boem0zRIs6ZslB46n9Gk9x448Xrs7Z7Zjsb1Am1Vkl5LaASpcwD87WZywbFSixKNb36h_OKYDbQB8hxa3z74tLYuVjfpHTgWNmzqp90xNP6Hdha2tEuGhDQZFUEMR625PJy_um4eWhXtT5Y2gpVvsDCsaGiwxQG-J0yHYUp38yPkdqYsTKYs1wJIVTV7wA07jwGicMcpcmMMGtQj1U-ABjTFExI8ZcpzQvS84VcHqxEKfO5CUFisiG2R-BOzYn4KqM7Rhqccb-v7oRuYrqFD33Dde8A06bTZ79-Fokr-0QlaU3d2WHMYJX4AzUd4b1qLCP3xmhEKWZEzbo4Tz5OnPe4OwZjNq7EOPBYjtG6z3dXXuuqN_uE9USR41UiN88Ye24pDTCMoAGVndFZOpuxSmMs6NeQlXlCcvwIlBUjmcHYwNpSWo08P8kWHyfPlWT9880LKS23ZzzDPLYiIzeSuVKpgyyo_xu5On2UxKMaW8uFnhaffYJvDECYZwZqu6sYb6sYF8IdFRe_OvGvLf-PWGbKvsMx9XP8buesOL1cfBtjy3yo0PxirZy78Ku06JnTWU-NkOMaL_Wes6J8Een_9QHsoLO6vRYeHpGCEZYwvE0LPYeSl61_1YvvRke08XnTnVsLCh1HtBnRYdMyDFC3B8O7-hZqLAYsykhcwQWbWb2xG2QQLDiD7UWTnF_f3YXWGiLPTMfWidY975JmmaCv5aJVlNMPZyzvuE8lFXVBKYjT-gQ6RdcCPVY6NEEkniCm5vAWqTDOepPz_Ul3Nq3H9tsvbAudGGnq99pPchGiluVrJLYUi4poM6p1lKfhEJcDm6xTysX63zak9QayWlEilRWPB66Ll9xD0uJNVwiOOSCRKl3nWqa6cEs3NCl5SovVLQSjGH2Q=w415-h276-no?authuser=1",
  "https://lh3.googleusercontent.com/s70HMBIL9mKa3ruOPGMp_Na1oon6XL52xC9EC_CZWsgXiEl-ES528pOr8OyoOqtBKMhwpT642rozdeHOQSOYR3E1A0QJ2_HAFcuO_nUbX_hKh7XfnRCN5K3sxg2iIJVbngsIpQGSy9atgIIoLHO4nVYlcm7W1JNkdpls0XhyzesEnxNZz-bbd_boQ03cur4l9VB6LuMP_ePbJNHoyDkQPO-kEolKbe08kr43dyxBgI7_vilSkJhgDi71c_SiOsSssHPGV85lYJXU3pc1wpWftgPwWj9uft6utdzvwkOhBOOl4HJvhJQaKWrwxdxQVd0vK494RLU9LtkqiA-BMlHocfbI2F-W3I4g_kacpyTmA_mkKfe_Himy50yecV1Qz7Mttvue60i638AUmHmgmkZ0mbySYdhyl5sXQ4bXuN90U4EiYriAIG673dTwi1KcNGxJ2Jjq1_pSe5sPBY_Ms6Rloh0HujVOCsFyE960DCYMXyr12vCFbANZxV6uLL2xRaVOTfjFtlOzpABe5NnJiiQu-QOOePqtPRK4a394ZlXnJo-CX7BRs6EJSyLKxVlxTRDb9Mt54PLyYXXgw4xPlzEe3I4Gahu7dz9dmttpfCbRnNR57Z542oUY5zlbtzFqezI1p76PiLXxD-M4UlgFnpGfIJr_jjZYfEMlZHRwlv4zY3W3DpNO8uYfiu4ezm_mfWSBkpEMxpa-PLhMZFAdFgCfYu5f3dq41ZAnuaXfulpQUuvAqqNLV1rOF3H38L0T8OFVZ9dyxl4nUi8fHWzFRci-D5bxREpB-R_5ffumP8pIqvfY_SEiY_SyyCC45aDkXFLws9ifAKMypfqjLYEWwIbVIvF1gqe9ZbzHGIJWHEpd0RF8cyENAhG87YfIOmvnuWCsRNxNe6SDkVH9ngDOzXk5E3iMoTll7Zdtou_4u0pR5cL9T88E_1CQwksHzS6Uce6BUINbZshoyWfAa9v3-4Vw30yxY6TdGb2ZJATSM74q7skdnw=w1293-h860-no?authuser=1",
  "https://lh3.googleusercontent.com/hnkgYTlmk3lhrvjVgNwjiyknBub30nl0KKnoXi4Q8kwVMkJdbojvZBkesFWy1TacU7y0GtMOXpy6AuuUSxtpwMiX1kqxzFfTk3bGHKU_3CoS8Anj1iLmTAqd4BjIaKiF1FMseBVZLMwj5ocuUJvt3p3-WR00vxuGAPkIVt8BuBXREg8wwF8sD3NXKtLft6kki9lGpNTJF17-OFZD9qQWPXUnEN_Q0eXl5ytjUGBlIqsFgOxZ563VkhELqJJjQbyv1xki_FUO23u6f9b18HrRSLE5-D6BNWaru2eB7Zdv7SWGiCUqJC3aP56srwiXZPQSBq13lCljRHoYQ0O-0umwvL5jqBLg_ndOoSZJR2WA00hazU9T2RGuik9aakQTLbY_7gMJY07ez28z9TeBQ028B1WEkWep9xzNboopGHofnz29sMnlAGJwgOeBofcG_ESeocgg2XX7fX5tWE7jhvFEs6vUS8xz2B3Am16_PT7U2C5pqI949LnJkLc8pM3JZIgZidKtvsh2NpHFW5k4MHgXTbI6DzGM5QOu4ZRDOe3p4gG35TI-reJTRnO0nuPTseoLjyLbywDfwaAcq1UXlIj_wW_XK5a05GJdMR4Uc0kEBMkGtk7i9ufQlSSa81BRgmLJdHKEotMFWTpURLbt35ZrrAUBMMDk7H-bWrRrh7dt2ONeAEhDXQRB-rApyu3spruRAiD-aUMRn2JGqjKOoZyq7_qKLwQS0FTTwnl-iMzi-1eg2lVWOhDgmhzjy6NPqZJvlcR7hO6UFGc57ENeFJdXVj-2-oc0-uKNiOrBrgEHtNR0I0L6PxigYaVDMG-RL94J0xuDXIuiouy_NIzKqEKcxu9Z2E1A50nvONfDAcrbHJwRZ6P_L2HfvzJkuMOc72wKXoNLekgnn9qb2M_3EWXmF-k7QuaePqKtRCck6U3QhO329AMjj9VlUwmTs3hXl7db9Y5x7xiwTVt-JgWJtmQtrJ4aNnaKgj0q8UGycV8xhJhfow=w672-h378-no?authuser=1",
  "https://lh3.googleusercontent.com/bXRoq1DeDGywaq009TTqNgTzkNJhElQPoGO9kVLHVMioNSEkwVNk27hVDAaIeH-Lj7nxuYxXOLpQrmAAgi00KnMZGxkIKy3HAVnXaT6nYpGStJDTc3ordnCCTw45y-pRf5_oVkeWm7s9Q4dD3GkhgqebKeH5N4K7xEyGRtm12VhkkTCalobkVOs6tt-byNVHfZizmyDdJpDDoYbDPrW3w6AAIDk03DYJ6H8rgkQVMZ7J7SBFJnTetyMxY9pn3hljc9GKc4BQah10SqtBA6X62fz3wJYcOrLwzhtB-ltZ2GSxEakJKwuqCJWrLWRu_irTmcKoBFRs_zkk79UM124z5MqvTR0XbJ-5s8V5ECvMF9RC2TkQ0mqOGkCEKP3ukGmJaAqR_KrlYmYqqquRedHtBLkmgsPCVBGY2f-cU3ZAmez39xHReANqQqtPwklUxInhepLGy-e9hK_yCYnNWmgyl1ozVPL3_RLwxIIunbTEyF3_6l1TBRBiSbxUSEEWzLBDrbyvvZHOIcqLPiI5JWWu1mV5peFBMq8AkD6zrW0uY3nOhJyjwKN1ZNAPiwjFvNK2hmvKhboEzVprPUP1reRaJawK9QRJa8RDtS0_9m42es_AfTowAMZaO2uk4fDyk1Jy4F590p-wlw8y1xitfSpt9ZTnDkOvpf6uG2Z3ObhxqZB3YGN6RiFPNY-jlEnaQdnZY_YUFMaePaqo-M0S7Fa_QkAEU4aEgRXH56nR7vbzGzotIjfPgxQ_nW0I9Y2YEkOiFVwpm_MIuFk56zRiTcA0MagDAYCATrOaz1LjWGedD5Qq4_UqHTe595iqxAJaRKAQ0RRm3C3O__1P0lkXDZEKbVLBVBTL2v8xYHvT2oaitTb-d0R85afrgFcr2NlFKSt9_1YILrOy1EpqWufVYIKYfs6PfFgGBZW4BL8aAr7-RprbQR8s7Ycy1sPSPxId1YBOUajtStg8boH-6rJpp4OraHDs_ZSDkl9LGvxfa8XXu5Diyg=w630-h420-no?authuser=1",
  "https://lh3.googleusercontent.com/wljxNQLI7UJCC7-WlgweRA5ozh-bbm2uc-IKT0yBtlCWkFEvuqr9aOgb1-Tb4sRe2g2S7UnZbFBPrgJpR1RY1ZMswze9ft_2XQOvXKKIZqXMoa1QZWYi99WABkryjJNWbRHZ3qKX29vQgKABEgFlWns87t1CdSMVOl1FReI6DEj0OG3ZTKi8LgxxBY8YoYW0Z5phxlvn5B6rJsVvUBvo5PLJsSOHEL8EkUk41neIS2cVO5bBhiDyfsur91jrV5b70O-ecp9VFgzsVfZnRzzs0VzaJF_9puAywatMFIepVNaueHdUudQ9qE6zNfJX53ZxJ05f58Q7zoXRu1Z_SVW4iM0fXFI_4ddd_z4zUl4ZPSA0KrI0fJu8AxmITJMHzkIKGJqSQJ9of99MUYDlaRyXwENjCyFFoqq4nuybv2UNlzusCKArM_8MTe0wxQXOqXC3d6-f0nyK9KAqrrOOezxSRlU4dev-wu6FjshSIw_SPg3WS3zejlEoY_9b79mfdao0fQ4FYKuiwjPjoCuJLLWu0XHxoHfdhHkxYQm_PPMC3E9yqw0GhWp8W90UEp2rpc4gtPSiqA7W_6uL1OoTVLVR8GYEsN1uKOU6imtLsOcWSzsHiz29bXuPqPQ1aLibLoFklO7snunkkrCCcjLunKkXUatv28q7moXDNlwLATwQwN-4Se7MYv7rjUC7d3S5njnNLtZKQ3GGDXxjx8kxpT8EfFbfrwp9w08AyjM0-0LciwimNKDZYRRSuB7QhEFzvaXRaLvJXczTTAGoV9mAx_kcGQWbCJ3-N_yzoAcUBDBMKQ75E8NhydwQgnhq0Za9ZeYygSiWAWb8XmiCZ63_gSl58Zg9Dv2QPGRkzEzYzDXIXObijGp0ZdRVn8egqME14SdAtKEwTo-7WdhY5ZHI1UXuy13oZwmnm-jzGHSTtKjPehPpRakt2RXia0wwwjrPAvMWLJ1nL6QyDpjL53fu19BiayGurWh3mswGcZ1MXXr_J1GPxw=w275-h183-no?authuser=1",
  "https://lh3.googleusercontent.com/zcUuEDO3rm_b-NCtjJAOeQhaEDcYoIBv5pUY2N6GXN15eQcZ_7-CO_aCnWeQ1cmOi8AeRWuYk3wlHYziqrOM8iVC6OhsHtXgvcDcCcg1uYqV74IBXLe2-9zDw_5Y16cgTObYs3Vi_ZZ1f1zzNdPDd7L3x3Q5OjLrjCgaf5MY-qE7kuKpVacLCKGhwWTCCD8_yB0ZF_3z2Pb3f81BCDvv_V7BevSbrN9yEgBPDVTY2aXKR6sU6c0b2eq6df8UPs8WgTqLHFv49gTKlToKVMymG5FwJD8GIS0n8_59LcZfuq0iU32FoPJH9sdERpvNXotCmyg-1CNg505zKb5aZKUEbrAFsrC1gq_ERSPJyxJoyXhQhKRPvIDgqaLsetVfA0YFxnkjP4bvVHinQuwc2ZEwO8mGyLtN5PvuFJZalFVIfMxo0o8X2rgeskVGq0Z1-4xgcYIBhhcD9b17kOzM94jzF3tr9Wkdr-46ihXrdoOJiJ_x-noipP28pkj_40sv4RZ1H8zoVlv2xKbvIF9Oh1Oo7WDIRbCW2O7VIvy10-ZJb8h7OzYXmzgraV0zG8I200Kh187CSy-09-GtZgNYZQB_8NBFqRUN1PV8Y6e1OsMQAwUTlTnHXLWVrr5WyaoLiBo_qFuqrca5ImUahnKeWQZtlZdYpPy-4gXOqopygkoDJ7aP8T2xntXQwJyufchWcyEKzcF8iZrvs4VzUjcb0yI3WNF24vWaUctcf8w4t3uDayri6ug8hmC5Oi0PSBmYfVHGYswnpoA-zcVwavhnXpeYimDNWBUhjF0o9jamGVWUwUbxtUP6g91Bxv479SXtbxicLi56fuvL2TKV9_QYNzL3a3hmrKEBe8AgjZfZ94U3-879qsNNLnpMGWDkpgt_Bse_q71HdfOwpRMnzBugWr8nAQX9ncsBvv0jFElZb9bgjSMksTqOod5hpm1C1NxyjvU4jU5ozr6gudUw6PWKozEUn5b_rqI03NqRi6aQUjKEoF69TA=w426-h240-no?authuser=1",
  "https://lh3.googleusercontent.com/NrPR67RCiv0mQ0ZKRgB0E7U-KKtMWI1MEqxorXy8AmPNWt6W0MKU24ifX0HPa_V_1H36CubNm3KE_64Uuq5Oq8xqCffTIcupTrJMhalq72YuaHzactV-L6rQNlWB3DiqSDl7im3_BVu6XxplW8KnULGFKSXw8x7RtTTTEckm1saHRR1PmEyk5Zf5aK8qhsnkzHRpxkbBU1e53bA7badb-rfheeKc-T7Yypv66fcTv8x2kraHR5aKB-Oc5hOS3eo83jrZMUR5Yd-f-_BZiguSqL7ukbdZjzWobP9__acqMWiQNG32YvB1auyJqpGEM37ii0S3PsLe7z9icKJ9a1GUpCQ4kgzUGmPmlVd1blW9GJijlY6YB5LjG6uHc7GSEXofeWmrY7BE7S5gZjYnXNXhDvcTHTIlVLnLRIUj3uCUzKWc4Js89hboD7f6oYhwMEorm-B4QTaFblwPClJjZ1FbwqTmtqCv_5sGnJFeNvsAXMwRG9j3oPV6IeXheD9plgv3B9dbEXI7JsucQTofwvUpApjy3r6dJ0z37Os84WItS8yZXmVepeX45GnHHI3b9I_x9S3jXzsg8Sl3mmB2t1ggLQa8ELGlaZKCcQAYNmlrGEEZh1SLRI8zSKADjH1HOeWJkAn6Srmw4TwbZZAp9mrK5n5eGyyro9oxdu8gq_c5cyk_fP0nMbfdcTX0_nvINDW3m5RoZ8bUFhPfEPaqy2RgZPiRxIfq8rH4p7aYrsoLyWM4-d7qLBvUiGl6vD1YQkkuIWV7j0DwE_nw_XqI48LzsOLSpGNCg5tgUDFDjUiSvVF-LZ8CHC5UuPPuSQ-eFf53hkdcG7wNziI8PrVCW5xnPwwvtVjCh5OwU6SSWx6ncC5b_PzFkcPcg0s6HCxQk3sEyJHSu3NgvlUiP15ZuFM1CuDtP4cGz5X-uI_2YvLg8NeT2U3UbeQSkTBbtA1hMzB_CRX4FQyESwWpaYmNhL12yOio8xu8vdhkUCz5EV6ngfNJDA=w800-h600-no?authuser=1",
  
];

export function Juventude() {
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
              Com padrão olímpico internacional, o ginásio tem capacidade para três mil pessoas, além de vestiários, quadra com piso especial, biblioteca e também será o local onde funcionará a Secretaria Municipal de Esporte, Juventude e Lazer (SEMEJ).
              </Text>
              <Text style={styles.textoModal}>
              Convidado de honra da cidade, o ex-jogador de vôlei da Seleção Brasileira, Marcelo Negrão, parabenizou o incentivo dado aos jovens, não apenas pelas estruturas das escolas municipais, mas também pelo incentivo ao esporte.
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
                navigation.navigate("RotaJuventude") || setAlerta(false)
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
