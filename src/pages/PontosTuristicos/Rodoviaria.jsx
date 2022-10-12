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
  "https://lh3.googleusercontent.com/OHiCpDhEyY5uMWcNjqQB0hFWBw2JDTiVWdAs_vlQcOcg87mvY7bn-yUfiTkKBFf2DxPGxtImk-rHSVGYzfMFWqPSNOXT0TXt3bAQYq13TFgwEFJphWzcY-XfuJAXE-Q4W0EqF80aFKqwwuJVqc5hOUkzsiW1JPtJISMtxsgV2Lj37nG3CIqPEILWIjorPm2z7qsesLN6SzXW8VX4JywOfnJX9V-SwsLT6ADwqUpJc45B6IiW1o5ilR2V5nbK3AsbzEBnEAeYkCyzP6bPlnyMbxXoGYvU8b1xGRyH3LPwnciOIJTRHznR-sg12dG3N-ijIMOjDNmKCpg-3jd2RXmIn-Gb6KovyCpZImYnPpezHQLcse2I5Q8cVAmP6dakHJwGYFtsLjZvD5VBkwHxkmYHgpvTxCsqlzCurnMu7qaJdv_29OAccec5fAxprEVmEbLB64sDd-Hx9uMpp2n7eKvaWeSp-f7JLV2h8ffiBHqKidGPNokj_cziR5xIOA4jn6lvvAvoI1PbeOBq6pdw6QNxfhB3cpYgQ4CD7MRi2JyZOUsy8QwNGcA9akv8s3bR-n36EEv43VpjGf3EMcr6qvKvz2sk8khFZnSLBtmf57if1UZio2ZDrFy3J__vo75W_YVhYYhr_Pp4pgrxcUs16kpHnrh3QFiAMeSxEgu4jRBgicphfhCIAVbGMTmWwoSO7fF5XrmgAVVxvUOAaJAGVWtubnSHQ4wQ67ldQNmW6ZX-sD90WTVWL-xHZG3cmWYQcG-G7RaE6cbwBw-PrNOFqfKaPNHrM3P5x-Ryagl5SA9AEdXaCMYXt1ta9eGVDjOTnunSS-cFGJFRhQ6MtfwhgjRNw_dudfmvWZcIiUcyG64JOBFEmY6tzim0L6SRO10-nswQl1RVzE0UNHbcTyOGRdiSEz51hWA5_vylljmmdiEy1THWhHkC6sXwOVUgx1xatDIUpfWdA72_-VaVo9rn3RsdprSZKKXfUvwwvfWqZLUH0BeODRo=w984-h529-no?authuser=1",
  "https://lh3.googleusercontent.com/WLMKYtKl9Mj2aNAPdSZTodu2gVkJwKrrwRt2kdxqoxtOYAz-rADc0vcA_kq0xNr06qnJjlOWBNeRfq2Z14MVxxzuu61vZhVW8F09oxpP0M8uW1f--rVSItoYeI1XvjutLJn-caWeJPd565qYxCCB4YE7_k_v6FmVrUKqkPbxeETAr6VES8P6wZh5hGIgWO14b5pf7_BwbLV3DB84I-cR0en0Is3Db-i2Zf_PYQEFBLtlou_HerzwmTutdbd6YGt5TR0TjjIPeTZ80-iU65peBbVY5-Rm5C64NoKsdTt2R5lIMEPDrX6eYTkhJ6eP7aIBxxw59MRoQEUqFgivcselRgUzzmA88AKWN-3DovGJE8Q7nf73_Cnw5PjZWKgIAkl1DiGKauMLre84-Rv6_C5-ek7CUE9uh1Rs4s-bO5AbOqEQ5zUy2NpEKgw55bH1JX49-bTL39htb8tiImCRGb9vQlPMlwkrhyZNY7Bk5hxi1oH764sHF_4GL9DsolthNt8OjWpmcxPnum83gq03wWiZQLYbLJydqg6mntuu3tQiVYTWuOZK0LfgF0ubxbR6OxmcJEOyLpP0e9uS9l4CChCaejmjKiF6dNVpi5RgiBmC0SJsqY91_5tEcpm3lrmhtUysxCDizPRrZ1UsjondY4M62dr6476LG8BXpYeZwMtWLpBPRSkN2qc8RhGzZLGbU5SYaRg1I8wZVTEhZ2cZl4VyF0Z99ipvw-7FoKcIl9tc-WWLkwEaRAshP8n2eGe4_5xwyn-3AyxlaElJOoJZjdK9L4AmKrmK9Tdc7zo9Golp52N24MTCK1dKIYvatYz-fT7wEceQr2w1tBLNaMy9hcRn9wQyjglgRvcwdd12z_-tieogXQ9i9gW4T0aehW8Ltwg69Lb8hfnBgpwlETQLvIlwQCXMdAIUKx9IeE2y99WquMM8CQXcOYZcMMkE6mWk-KXbgIoBwJNL_WZwCqt-skm3HR8K8LejZP2bsWT6xU09E525PPE=w750-h500-no?authuser=1",
  "https://lh3.googleusercontent.com/xa-034JLxOHzLRBoZJLUc-X3lHsHnbShve8nU8KtKT0pUilaKtc-6vgb6U-cDCL9HIiPU5ukPOQ-zHPj_s0YCcnoefoiRbm7AiVFY49_g_0qOpBySdm6aunq1LsIhmXYSfRQQxu5VZcCm7fUtZ32a16JGDV_gPMgu3paBye5zDFgB5OXhVhV0SpEr3U8WdrIg__ycEL2ocmMY1zQh-XDwuKQcwWABg_D52A1Vkos9MbTJLmOTHBwSNF1-UN10yPjsKIqiba2LVe7nzdp-CsmaW9LesSrh73ZcxpYjGNRGhuUWhK1iPMVCx4LPeZ_OLTwkFM_RDB_-rJHipjlr6_TqAcqfmckRu3Gi4hoIQITyB6A4S8iUCkWgeEoreEWmMiP2A-nYDK2QNGopK2Pt_Rmso7CT6R98SxzMhvkjyaARuCWkkk4zZhx2xeMgdFDX86MhekoFB2LosJ1pTNm3R4tZFRcw6yyTaWk5HaVHq3kdGYhe-qAx-0mCiJNeZcqYVE3AVl2y6fhI-dXuJR6YydO_z6ggknkN9VCFCZFnd5OJd3xCmNXm5geayZfMSRi0vLA5IWFuZB8mUNgAjA2dLwvYu9s6j2E_B74A9yc_55YXtaC-Hd1mONeILx3AyCmH82xwfmGbCjg-HKey7vKmgGqfk7eFN5LszRtntcY6cyjaVR0-QCO8mA7Pw6r2AGwGyMvMti57GvGpVasVHFOZ9t_qfUjqutGkNzajaBktnYuZXB7MbjOUsff4Uje0b96qMmk8GpKAeR9g0Lt5oxIxKoBVgc6GXHxTKcdrX3RD6FxuVbiXELvOXf2ktFTOjAJYALaSRxy7aULOklLnjUwF9_1uZma-0xfugv69UAntaJCUY8m8dLYJWl7b9znTZC1vmFi8092sIyB933sqxlynnp_k2y29-NxRidv15Ci5vKTfvcHHP6cJldZasjD4N_Iqpf0hXliBOVyIysPrLvUttTzf6fAkVUpy2CDhlfCAjI4nuKGkGo=w266-h189-no?authuser=1",
  "https://lh3.googleusercontent.com/CORLOiu0s7-3A_7fpDRXZzZStOd64FpU6S4vuoKUU70MD4PlO1ohxVrvnnVobsrPHKMR-eM4MUvNU6dan69F46dVEQ0F6g4YWiHzp2hb1ypPzwUk8LgA2n1mxTkpXmr0HJgJ7rGFFoCzGXzEoAO3MQ13Q-bGbxaspLtpDCYsIa-oe3OWQFvxtutBA10Yh5ViQf5YRtO9ZKMMV18Aky4aXyRxvEc7hVW8Pk4UtVzULcwbtL6e8GxKjmAoaTArSBS2YsI9EW71knxwsAqsVTALHLGZYacO-sEoWtviMzoFE0mj1cCeJGQSdndo94VgtXjMpXbFI2_o__ZnjI9Ur4_fRJjybW0W7z4zMB44aqta94BoVuQ74bKiia1kjbtglAzbO_70FTGghU9ch2qkcqBh2fJ-y5amxsCgNbhrZUJSP3Cc5s2o_xwNrlcJbmcMNvkVqfRssl9jvEjc9rDApwAWaJU_MNKDSOA8C6EUPLl3fIi5ykbsDs9hsBTS1z5052nr1qBwA4jAvLxNUbXK1xZ4Sr55ORqx4ybLHhs4WqDYmIZIQ52FLbnZtVCW-p8gWsO9_byz7VTXCKB3GVtdMdtjym-PvFNlZUmM5_e_BPZpKxHNelRmZwey2fhmfVd-lG9xIp9HETkxwoIq0EmX3wo2oScet9tIKlFyZrKX8Dki0TJ9sj2Olk2ZdhN3v2COw2qZJ-Vqu3ZoDOlVDaW2VC1Ny94Qw0zSU-1yi08bouSGMu2_bQ8yWNrFYPQg6YtxGmzf5aUrUaGe2j1hHOj-fgNhIRQXgBjl2lo82lJW5hMkwA6HA8h1t3OuKS8P-6A1xovG48Qe4lHQ9qHFvufs0ygMvYrKLNV_uSg-r00GJDEyfX32GyIuZenPIwN9bnmuUvXyB3-S28-KBlfiRBrnHhbQMGZBMh9FtLq6Ruz4Lj3PBSU_xou7B1VNMxRd-mvWaOQYKo4Jlvh2h-liHYlMJcOlDu_HtQv-WjdUg-FRteLozusAu8c=w566-h290-no?authuser=1",
  "https://lh3.googleusercontent.com/K6bQDFfOsDzk4FpGZ0czY3yl7_SZW7hJTIsf-OxT3ABH40_Ha01ZFoAR8Uq9QFhb7wJAzjGDQ9fjtaRSBQmRuxGXkGC6NfbHJlSi_6RkguNWMbVISU32Z9eCLVWCOfxcA4sEaTGi2DbhY9FBJWNOxaWS52yMWMPhGuhoTNEHhv5Qx_TppoRmYnYl5_Zfj8-4siWd0CiTGtV09xxVeAOJOeu0LshVnwOhun54ehxhQLviwk0htpfPzyZkm0K1TxF4rc53wBefGoJREmxrAM8SU8GWy4Z_931_EV5m2o0GyNGa2OU0M3WYlv5sFmEZfydb-f_Yn2UfirYuGi9j8Ky8zuLhaZSdwpfojROO6wzcKsyvfwtc1TpmP6aTMLWBq1h7YswK7bJfJU7ydbut0ueUvimtZU1EqW7EyqdfpcXx7ZY0sGcpTjGzxmDk1WG5MnHpeCFvJsnvp4o0qlHhZfWNjBUNNzqcLqqNYpWmRdJIEcyNme357xyr7ET3vxqma4zc1g4qagSxnAKLGH7-fDl4akx_k4i1uG3AUK9y6XNiy9sZaWM6EWN15mqtoDM2c6jng_UutQj7DZvUkqcJixK0lo5gTVv7r9fif4S_gNeG2t7lk4a49zq8SM5Vpm0JZqlRrG-62-JNjxho8n1cDEnsUu9cNOHG0MQcyoy__Ic_L2heAKoEmTUJEY16eVeE4wfI4iwQdXNRUD2R4Ezlm0UNV9Yz4frOz2naa0tRnX7LtT_e6P7TzPNa_uLMhV5n7Q621JBM8m3JW0g0UkGaLSFgVJ10xPcD1XYRmb08ItTg9UlBzACKPZRQ6fiBXp13PIeAlFPP2Pxk0nEK28GFFfl6h9BgZvE97KxhxHADCQjCQdwMb-rcPG_cuVon3UUi67Bt8VbRRLPLdQO6snYNgIPDGVJSJq8q7R_nHKoTJa3CLlAZxnJLnDm1xYAoqOO0uyjpHCaLMV8sRZvLwCs9cqNIhzGazjGgfC5EqgDgWKD2fas-aY0=w308-h164-no?authuser=1",
  'https://lh3.googleusercontent.com/BeDXHrZWpwC9aRLx21GckEBhyX17AOd90Ishb5yWspcUptPCsvHXgEctdjxtAKvsOjd6kgGQteGMueePE4Tayazbkqk_pxkIcx2nWxD4M2DL07Bo-vaz8WRNne-r9Y50xVLDcDY_FYxpU_rpULMBZLLeAVW9fZkqtjm3bOhbSdFz44IM-pEUl1BpkF4ELr5DJXqT-gcJlTHDxTi8ipQYY2z1MB65kFLgn8s3Llo1T4hCB4JyeOVw1fMa2P9zCplI4zfByc3LS3zE6JmV1gmTyK3MrX77MPlJQoXjkJw-O8tOYoSYPiWZHfPeLt9bZkvdgagWC2qLKsQaWSBEnrZb_1GfN92dE2p2bG3QeHsQQkJaYmsWvJ_P8H1vsatCdOsGLw75dQ9qxIpHEM2zMDi9QZrjDUgnMTwWNyQFKj1C0C9_dDs8Y-0qWYfKCSebPoOCrm5b_gttVSzBHNo-q7ZOs4dz1E4_xfdl6ez9Aq6fjsKakQyT05rdgiO_BTud7GXeO1jk9dFypPnssjboTWsqkvvpTBGrzTqDGbTgBSoBZcKXLL1tpC-cyO51tGorwk3CXZFZkmg2iJ5BsKuqW4WAfr5ngWpGdyOutVjoQVPQW3RU_LydQEpms7FNu-jeCAkVgADq4qjJQm0xUiuS3wknh9OIs0DLmQD5hjIuoSDliLoHTR2FRjmIHa3Xqd0UGoU88VUnhUFm5xjgtZNgNhApR9VEglqkEFHWRHiGkBwFk77IyCG-ZRFhkKNfapcr6U7-tny1d7eWr8GliViPX3w-4UXm1nrNVILmKJIoa4L3JauW6vYPwN7Umrd0YXdeNYMg9qFBdVl17_mTkyQHaSLbx4i5vLBdgKs4xkGM7lHX1-hgrmNBYyxsMDmREh0jtbs97OtOUU5ThZ3k0AtkMWbNx339YseYwe5k_BY9KS0QQZfdhNhGqAH0dWQSdtx4YzDJCzXPQiR2eY7OSN1COHg_2oqP_stBd299EUl2K1cur8WDUkY=w600-h441-no?authuser=1',
  'https://lh3.googleusercontent.com/Eiqn89tFfXEi2hyd3R5-7RpLf3QNgKsUcovSpBhP2B51mezk_sOm5T_Nbgw9jX029744KZj8KqgxsthGm2XJYG8uu0yGVllV1BWgZsrVFle3P-SxfqHlZo0MGwMCPKZOsF8nWRl5AFkJjHBLWmFgUy7g3or1P94EyBJ1JK9tWkr2fJBLYAqYMHfbVgh5RYtiN_-7kBpgoa1hcJPTYIOikDNxoXRtKfQaXYsooKAGRG9a3jJCauT0ge0hJqWrroNXlNGtnCb_xfUVRzzCWfvxY4OK8gDftoSOjcAtHpKRw44KaFuTTuHsHMB8IVwwkSF4NNvw5ahL1ivsXd0wbwX_kFmeW5oVFWLBztPndM_YhZgMA_F0ngCNgcVEXimiqh9Lk84Zt3amPgkFymfT7XvnWxbYKwP_nWeoIICxmOFLtP6v8bXF6j0Qg5C4qS1cwilR_fIZSeY6FpwK4rZakeCur_7D9NlWaPRpfdnox04BRHUJE0enbTw946iZ74IZdsPM3FOaY5VkIN6JU8k6n-TZYuzMm281NuWKxgO69wuLAEZMywa0KL1meLGlXZ59miwjDXBv6ZPjKUl1xP-kl_uCX_T2XBP1PkuAe4uBSK6oERIwiEWkv8vf6Gua9mJOhgjezdyFNkprqgbg6ObKabxjpxYfNlSy1zqLP77IyEGk33JZowitITTtXM2wi7_GKVs2zzknqPivH8tzN_9p6ndY7eyrAPctV3IakILLcRHLyVDV0-1Q7YMeAG79MmOzrrdCt2bEs-Vwx5XHBk6kU05veiFxGioUIAbcAGUiPcjR3JWWl0BZYMj31QfNA6Dro-HgL3Q9ClI1_YMzvUZVB6Jd9AuwIILKKksALZUVg9tr1R3FQ5VQBnFFlfxQ5CCpp7ISYD98oS_wpqHsuXTcuVM9Bhgfe_Y6lLtpeQJfCQfMje-MRdLGcP35mrhEtOry6JT7llycQlGTYDGBQ-2pESNKiIqCCaNr5mshMIozG_HF6DZa3sc=w648-h365-no?authuser=1',
  'https://lh3.googleusercontent.com/Kb2_HvGRro_DnWtaL7nKFSivXHruRyNQhVxk6UMxwky6IM7t5ZsYFNGPMpwVmMso4LyhOysoaZ5C-DN2bRUwmXofDSFbI6b_XC0iq3VPSVBJ7G_QL6yWDHjDQPeqpCFisvuwD3T3JVH8PnFKsxCs3q79vTe24-hg2vrH1v8sQpqAkKbddbtVBTQ3Omy9An2TIoz6cSRrlJcRihgJhZLRKYtPqtpghJtU91rUdZP0t5vDOKzCrhvoksQZpHqBQ9gjrgtlkL9bLFWy_PMz-4z9HnpBOOh9Ir2kWzbMIk5yDZGYIVa0-Yjogzn_f2TYCNtDK7Wjpey3mDhaXmUnOLL96h4Bd7uSGt9Oqxt2lWUisUTx2gwaqhZZDyr2IUnFl-cmqK16KvBQdVbBmIO3pByKeZMzQRLlnSXXB1fimQ5JVYFh5lOj11eLntpWZ6z2vNu7B_ZmDGBxb33kvKWgm2MnX7LxyPfa_z4q9V_16mLFIkX-dOeX30QhZz12AALsaaKu9FEm9BVMGXI7smLOdKR37ZHJQRv-jVku7WEvBaNSjb5rcI4u1ZtdJU3sRtMQMpf_gXLKrIjZMPUN-yzsPNcH7Wv6EEmrigR4dE2PE04v9qSfm213_0elx-qd1mhQgKNdseqPkGVFHtdG08TgA79wmvXKNkJKcy0gfJ1eUkQs74-Vpc7LtORCf6PGTfaVQ9Qw7hkPPwMy7tcbKg_AAYz_5o3CxJPTkMWrruEAu8ntC9D2SGZg0F_T2oodX69czBxmAEz6YnOA8hzwEkUBFOJKBWEHZSfJataCVAv78BPmwEL0VJ6yC_DsgbZlv7O0pTHb3prtLp4H8FVLgr9CEBbFbdxE2o37Uctkna6JAfkb3l1jlGuQPXfFmp8sAQPYs08u1mhFV1-19LGohfO26JEq1GzM_qNsYwrjFYdhXtwthtMjxwtKhSqmN7KNJW_PEA23gJrcH01gui6k8LZY_2Dep-O0ZN3Q3X8Xz1M28VFwUTdyDEQ=w637-h350-no?authuser=1'
];

export function Rodoviaria() {
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
                Rodoviaria municipal de Timon. 
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
                navigation.navigate("RotaRodoviaria") || setAlerta(false)
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
          <Text style={styles.title}>TERMINAL RODOVIARIO</Text>
          <Text style={styles.title1}>GOV. NUNES FREIRE</Text>

          <View>
            <Text style={styles.middle}>⬤ CAIXA AUTOMÁTICO;</Text>
            <Text style={styles.middle}>⬤ LANCHONETES E RESTAURANTES;</Text>
            <Text style={styles.middle}>⬤ FUNCIONAMENTO 24hs;</Text>

 


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
