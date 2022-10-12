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
  "https://lh3.googleusercontent.com/CD3b_qwU8PepMcOH_5xCEzCYXtl_OzMWB1xHDtUyGA8uN9eSnGobwqL3TnHFd1KU47e06BT6eLZfgw4I6SmFFkKGjSldy5RT3Hbb8oVlkwmilQhbIRw5rRcP4xG5rbx-pexC7z6JW6pddcwwX3dAXi11SHlW-KvD0M3pJ4gxy0jonxWdl7Bits4u6c2AewAiWWI0nFl_UWENpTh_0MDY3IWOzs9bqWzImoJz9sXOrImksslY0nv549JdjfLvcTlgW4cziRkxXYOWDHKg4wjGOo1Q4qyYGwpIcD1W80vNxNnZKOsSuWgGmJ0lECPvBH47aY37b46MPe2i40nvzvFlaWm3sumLvk71K3l0yL6cnoOuGOTNWYxtFHT-xNJfhtHAZOPBot3OXFho3hBSgj12kXLPrz881kk0iZeujEGoMIR-6up7zCh6WmLAT8jwxCgNpPgsHXtX_qSwYliVd42iO2c7gU2Y1mQueZLtaXCbZ1Icxb4G5fOdYQl8MODUNZPUinpgx-i_WSOgCu5_uI-l6WRTpCqyU_Vi7XB_G_7vSubio_i7IHShKkiecYdANfvwImpGhM3rnWIHjtwokWEMsxZEIFI3hQFh-jLSN8LPU5PbWFS7TfOh2Q5M84bxLdDoN4RwYh6_sob9pa_Mmi1BLfweDFxRmpa7ahcVwT8_Y_x59JKKXmfnhO9pwv89jiJarJq9YRIVf21eIgExQ7GkbQgXBNHtBDpGr--WAEnXFJctDOXouLcA4arh0E8fNN-50loboxl39uR0lu1X1nQNxktqrn_wX8wV3378UGq4vzbCqyLBjLwVbW1EnrXJOIo7OdvVhHJ3ZjMwZDp665JYgBoOvLMgowBYO3osWyNhTKprUofzRyVyomARyxnknw-62HNzgkQ0QaXQbaRcY3QEiPhAPJxk0Z1iahxKZ1If9xJpclay58FObxCA53OB8Nd4jFrYOBIwX-jeL4rEEWH7sM2dcXfJC4ifvBIn1tx9VcrmIg=w1264-h860-no?authuser=1",
  "https://lh3.googleusercontent.com/SjBKkW3gyAn_7HCBp-WQMgmmRhgA5Z-mmmeYOFG4tqNAsJ_nuLrdzZ_AxKUTeDOW_Ovi1BU7fh-5W5sDFpwDr4ZlxU_Cd9zcPkEsUelEWk1iTr0gFXjRd6-VsUFswbQrMQjQAQ_BjfL56fc53X0z_Vu6FlfI-K08XNoUjeAVWF0lBd0E9UjgamakI2AVAOFQBynggiMSRjnVbr--u6mir-AGUVZQQdNgo5iinegiA0nRx3uQU-xupI4nGk0CF9Slh3SiNWpQkPDTofwqxxwdc_bYPnEe5MZk6etk08Qpq3qRchfiCDWr-JSRoAOf1NjCvp5lMdWP3GMTxzOmuk-rNdApZaNRdllEgtunOPNcXM78QPfhj3gq5mqh30nA6-bJPYBgUIXJ3weGbAfHwMFrgz96ZNtjGqjeCCXcbVV-H3JvB8cPf0Zz3a2lMUyXVLgyXBwcMb9n1IXML8YloMms77KtgaxVKpu2NilYrpz7J_kNeWYCdKgez-WTuyCaLuErMIbzvEJI3Db87KeJlXF9ldkYE8812GH0f1NNS01WeqYh7SxuEobS-9z_7NkxGfR4-DNEOy1MJtNF44d6Pb6y7ej1JTRxEZtgkZKiBGtsX2fU7RavIrdBXiw9Ynf7Ftzm4Z957lOZoX9HwRFrgJBIBdTSnxr-OBSDtpLI5dyxllt17k0e2U18TdUsKLZTaCGNG1IOMO9IubetbJQ9mmkJ2JyyTpHKhFdc15QpvHK1p2dbKVExOKTMwGQeKT3PzrDkh1hOEW2xYavMXucUPkLz_lBPMEkisg7BR8GbM1sctNTtPe1C_iRKopvU3cqQRSyWf3iXYBI5vA_3qe5zlHMXT0x6EiLXxcSHz0mvG8JJcut2Hib5e3r0RG70ZZOkOGCp-vL6P6L1gMBO0kjEhq1JxO7bhIXQxHCTGg6dYzYI0Yng8O1viPOMnmBKV32ZQjdzhb_CkRfNeCyaWGJpGLJVGDf4CNS5iJ-uPBIKnDqmbctr6Q=w361-h275-no?authuser=1",
  "https://lh3.googleusercontent.com/yMvaahTrUBfhoZGCIPD3s7r4s8n1f_VUFwir-rpqzL1o_eBm6ABKPbBS2RUlS898TxPg00h3R_Ghl9VwfloMe7Ko4XXVjrK3kmRxaZ3ia6WSBtZgnf7ZIDWLTokhD7YhpfVnzA6rMVWLKvzpZsjppZ37b3i0WFrqDEnah7bzJm0TOaCSYEU2gCjXRyFvw-_X7R_3gkGVACTTthdzY6QX6Cx7ZsIWyMr4iJ5nNHfOX5vlcLQ0toBjwUN-l2DdDPNHZwJekA5gKv8Z5bJc0CdTui5I0Yb2e_hUnw1o5t_qy3us48L-EGArRB5VgtJHBzUcbJxQpI9w7VECO_vQ2cq3r4PXL14oQoTKXbTz-Dc0kxzJwpnX11zl8p93xbt1hnkRMlbzcHPwyB3pI089tOmIzmjsGwb1HKqGVtKvvWSV2WrDJcb9_8JXiONflfdLigBTOkOE9vyPf-2_er7_gJxoUNwCc2mNgVOw8FOjdWrYOHv9Mvezh0LWTD1w3wiD8qRnHXDJP8BJ30jfQNx9VUZE8iExUWTXgCNFCW09b94maaksipVhZJcxQD8Wpn1YJvm1K3SzzWDSOzLgMHaTnugI90toK5zRE6Zd1y5CRo75iiPRGsYIpzRo9zMjRKvfvLRQEIXNPIhS_d8R8jOyoI41UVlHgcS3PIeQEzY6aVMAgOjpqI_VFLAY31sl-i53cafv4AMYCmxzHKqXadCjSyikdq7cfho1RRF0UZhGH-xQFH4XNdHvh2e0Cju_g5XGIKVNHza1vnu-4KTG-QqhNbnABj0vkxsEZtuSV4i3daFsl5Tg6dVuFu09X3P7K3VUtY0KzrMvrQnhVygow52f8lY-iI8Wo5q9r3yqeSsXeBXp2KDesp4R57OJqASZ9uqmsafDTNU8R2sX59r3Zn-pGH5qsGBm5A4QgC1TB8sYbzQaOLLQhvNKe9vNwK6QTlqLs0esk8l-ZO42fD6W58Y2_ORS1z2g3EKEwm4eQrh_0fddM29jzRc=w557-h315-no?authuser=1",
  "https://lh3.googleusercontent.com/wABSGNAgTIkIT1lrJu2xmNVEguuHcZnxr5KbUXdw8Vk-BIbYlyrrAHy--LfdhlL4pyueNpTmtRmnWE4hTUed0_RSUnXFuSEfVAgHvOa2xno4c47vAit1JkohoUJyeCBSq5ikAkIsrUYEnfNP1157m9EN0W08hObVQdHSZ-seE9BkUjMUk1WLx1b98P3fpNOjDSqg1w5ctZe_V6uhTh9zmajpdGFqtOIBMTQc-gcUBgbi0U__mYnFpqVE474F0ezubUd4wZ0jk5bt6UpK66YJEX8JK7R62uL8qD6I0rqlj5MIDy5U9KnFLGFWkbm0ZPIlpBnzRUIJO7YWzwdloRAL4LBmmeuON9R4-Sno1VoWSeFyVOGmVtXaScZxa0N1aErUF0_scLg_CbZvkm-ZlmiaP2MguZXrHNuzIehIfAusz4o4fCskjZG0w6yisQHxP4Sarv-4pmv7bEO3BdPbEAZ34tvmqyHhCfu8_wlQLRFX0de0l-BXILWgPL_igItnZsY-qhJvp1cBQjn2OBlPtfpjWWEYpwXoqy7rDG0uBKaCf4OpLqPM_NjSg7vWHGOEp_Fb6bhzOqFgo2rfFeBJa07xdXoJzbEhmTi-LR-exIsrowEiM_yLxRkCz3soqgMHxt-ldCtLCz3XqlbZJNtMv6637dpik42UDPDIQZTAZ1hcLD7UtU9j1lJTGfiQOcsa4ix1279HrM4LQc3O6ebEFIKXuxhVAhYJJPtnJbfMfc6wmtkIN_5QhucEBd8QDv3fPkWvkwf2f-oHnZXVPr_5Zsj6X0AdZ8pRDfjL1KPPB8MOkFOCaDEOuuKDPYiFaD9UxeL0Bo9PAiyI-u8EyewHJXYetd7CpN2rCpTmnTMEs4uFmVuRIpW10-RBmOOd3fnslt6x3HINIzwDoZAFZJd946N2RcAYr-lMHJmD5tuT-LnD0zKlpCOE8w58riG_0akzMmknaBn2_ATnQMVcS-NaeLHeP2hLaZ9KUGDgvSvo97ZhR5dLbSU=w275-h183-no?authuser=1",
  "https://lh3.googleusercontent.com/CE_U8AUZIAmfc08E3zPVkmwdFZA8q3hx8lBtac6zfnyXx_jkHKdLfXaPM4J6Wok0fbhEqqg8qeEnc2F_pZLB7MtAdxma6mxmmiN1rNRSAOGKV2OM7D12vNqSGMj8tXVdi6gs_n2zn-IkZVaAT4nlpr6owsOUaKHVtiWnoMik7AhzvUZmWZQugN7YP4p-g3-karo42Qg_wMJpSkRzK49sF_4JLi6Y5-g91Kv_1QivYcDDPQNkgTbEKvrM-Bm7E6UsIxIIvOmGa9DwhZJ6PQzKoEjHfMFf-PhA8wFoBquGM8KCXJxjUkO8eMoAl-gpE33Vc1GB65Yj2jdNlyKKWsUBME74bR-7WE4isvU-RdWi7xVF_Ne39BfF5YUzihOIhcI4gaQj6P36PPsIos9LmUL6MGpuWJkP6aZIxXue6Hvx74AoUNcNIBh-ulHlu37ONozXnUIqb4evNgPUmGfRqAw2NVQo6SUMbhHYbv8Cv1mRIoq3tR_wFwDJf2kG5VNJycpdVuG1X5AfwE6hm6jaazkPJfUSVQl4QcjmeJsHWOnNhensbIdTJ_bD_nvVulxMITmXS_q8FC0d5keJiFHQOIxUDbSF-WiUmIMnojLC01jkNRTaBH_crwBNCo-DlEATiLFfvzernbS5ySabGcuefU7cw8iHpYI37xhK0kqnpaXUgOZp_lCH-6NMglTm5jXHzsmidJmlcephnxBO8QCTTBNMkqS4GeBL6ZfhIXGwszXiz0_0hlHv9kvLvdsedEJ5NO4PTf0U_dFQ_nNq8kZbHN6CnUm2TleWeSmqPXcxW4KQZPKRFpqHvv_Yqj07SevF5WjIPjKsCtkoPMQNZkjxeWw53hiQDnJdcAAv4fLPg8KNJixP8Ouo7_1gP2KeqKKE8uS7AHYnIHyxOeg-vlXXqiJum3f0m5KKEgvcsvB3irkC3Yenf1LRKi9uqlyZYwXF5-YeSz1RPaRT4ql5THnF_XixCyIA8p_tJ_JoQIJS6bpEESemlbI=w517-h329-no?authuser=1",
  "https://lh3.googleusercontent.com/bTu332W9r9zt6r4r1x4f9mrdkvDlsWTr1-NIU3YB7X4fWAUJW76aVSOCMbv7lQgwbdQcrQnRQmTZEScqzaLfXHpBQKXbv4fcrU41r9L_ax6JdGL0rtK9jzZ8IAW5GRiVz3OyvMEDvEYOs-rtjzSYFAm6mogVNcVx-7pji-Wf_Wike9MPDFwwyFy92V3sf6giaH3OyMs_r2xzSnrq2-9uT7UfPoceACS6Yd7cBKt-K-MnrWTM_xJJl7MUbzaErsq0PZnuYsw2NfhofQaHBgWb6z0qUklvdRpBk_R9eY_gj0FmqR9BGDPjxKIgjTG1tt_Hj8njZ_3of4-SiNZKves05C9E7GaDOEkCp07yYLj69bW2g9JaRHqVkcZhrDnERSmnOw1WwbI_t7Hr_uwrnoX6lxMXuNbRbnQaAd8L788470n076QUMwwQU42VuMiSvNldWlXzTKo-ONYrD6A9qHvdJX4PfWWEiUlw6DQ_XqJ3n4UfqVmHveLB6cKEE3anaAg-Ji5OYPAh_ZD1GQ2bXdjD3hgtGS7icu66PoNG8ur1-jeQeLjL4x-zRuT7f8KVQNPrGGIl62IHonLZWz_3AjJDlU8vN2t28J3zvbRmVpofPeN4XjAs1SZs1-CnJoE5G_LYakaqapp2GMNWRqXP5pEsIE6kgYZiv2KNEMV9JJGKv4uEKEzC1jbHgper6QeQbCdi8m5_pCFtRqh_QUY9VUtk2atzGsz1p0eBGu-ZgywK83UC_kARrJ9P7uztl0cCAjQDA9lboG_iXE-Nd9sIPVphR16ff43zXNLPMixRqfEjCBY0_cYCQBdtYYFjNjLDpLc-4QZoDpw4pnexe0HVZybEhLhEhFbfgq8rNX-lGzJCyNnunlsa7wZxfPxNcJWh0g3_jmhREp_Y2YTQ9JLgrTh0U6dhImTH8UQyrWE-TIpOsKCl_S9ulbY5AYpDOAogCSCc6GtOT5I1jKGddnUeMmAnDpHp_WHbkXETc62n6sWYdTo4S_Y=w491-h326-no?authuser=1",
  "https://lh3.googleusercontent.com/CvPSgpfyxgVHPE-M8qScXbM5R_JgFxIaioFSFutA_oFBhMWggbvoxgnAda9nE3QhHagP8gjP1LGo8Gpg2cDK3ZVeH1qbwbkmZhzAqRQAx2lXqAiZ-dzdsGzZqzG45gyb_frNLRsolZQdvpKiCV3pSAEw1nn9aaWomSpec_d7XOLCJ1i95eeDnzlgb7-2eD5q-Co7nSX9kkoGaByT5_Lf8AfYub9-7eS0ZnJOyd-EddV8OliVLtiV6K_G0Qo7AAMNe1MV1DU07aaKxL162-wh1_WxPLKfT-g_j7P-rWYv9Dv696CkekbgRc6gVO8bT6IxhMjaww4W1PUorwYSL4OjxWSAxz4zlsdUz7i8LLvpBUPoj4PLhmqqWjIaNsTPtLseZEK3hV_woCluZLENr_-qPZyB9fSBZ0ak-0liY2MWLiBeJ5FzKkrQ1wSXuP2VOncxzJ7rV_VilMc-yGqwTAV5_1FrQmlRhKB968X9G1snEz7i6RobJKJRbaeUKSkTXYNPvqE9_iw75S7kiDd64vPgSOqyTKU0-OappImud0_uKUDUITfXhU0M1pUVPU2J8A9qhyr1b1L_rt0IBbrBmGIBXEnmFQpz5V0bFryU8h3lrERlfDI6lt7lV-lGwBEkqVZV9bdTHaCtzGQEQvleshktwlZn_9kxgP4LddL_Mmheooq7bhVM61mEBlQVT4iyPxJ4cX4e9yEJtYiX76hMDFkiwfzwSRnaRjhycdunJHwgOqqBtbzjfRPx17IBYLOKQqAGZ3kh5dTlSmh-Szi52JjYM555IpCRsPseshwSzw4njSSAG8eNT9oib7qUwFjGMeGh6CfpiBaLTtwoAZADw8AszbLgyFoGGJ_fAEigcuBKbPzPDM2Ga5moF4uO3SYUYIhWJXsMXwUT9wgWhXnfotzZfp7P6s43O7pthqWNQFu0J82Tqj9wpIYVpJaKMYbJq8b2Pzzy99CmVszYtZGzocJpoNOSRiaQMI8gVzAHqA7m0oNKJ9c=w1200-h789-no?authuser=1",
  "https://lh3.googleusercontent.com/ldw076_RX3QoE8rjxkuDHrT88F_L-UOgr0PjM1Xn5ofiXxSLy2E4Le34cLBociS5n6RG2U5tDBQPCSp8elXCz7pWVNMQoAIBBDcPPv5KSY_ADTO1x_MJ4RDbl8P-uinok1cOFxMYVOwn2SyB3TfXJ3ePy2-gRecpvfsIsLPIE_2tc56PTzZF5hPovrHHdINDewFEfmbL0ynMsZ8BVaccnQYYHjsmCOp_v6dahGCgrATuR-9Qnairen-GrhM8jbCrAicqBLRYJR-T-efS_F1R4tbUdp8Tz3hF8IgVxTVcXStZHzReaqi_EnK0TkHCpvJFfOTg8fvtGeM3keWGLAXxLVQzBv2qsVUGX80WT8yEQPzofPIhCvcRAou_RGiZfEAaOBcnp5Xr7QB1Afg7DZEfFFOuvULeAjafps7HkuTom1Ee-DPlA31KRyQW64_ddy9VJuLN_jxVfArtu6Pnrb-hNyULlGkGTpjxYXbrN04o1kfgs2mqea7_SjaH3tGiRl532blGmil2udur1hDGp7GJC8_7N3p1lE2SPgyJpaX6iAv8UJgRqbckuANkZAMISdcX1QyZ6492b8tZstnOoQ6sF3Qq-MuGEgphEQKH2WGOFt9qWVHyyl0dLoN-b8yPC2VHZZJMxgoiDTnGHg_XVN9atIl6YmK7LrnYI-h_-Vhjavt41wZ_OJNQXBaoVQMe7t5NthPooX5pQIvAvMroEHuRzzBaM_j_2U3khsS8LpvhMrFCaHPeP9lvrnVqbpAqFYg-1GW_NlAvr4kFkN_4yGPAh29uF1cBHTgLJDGVVUvnrb291Q7uQ-AtNqn8jkigXs9IkubM-izT-SmfTVeXLsBHxK3RzYE9FhIFYKy3D51_GGB1_C4_R5naTZvw78Lhd5kU1qv4N0JGIIMBsoJAsFy7RVeL_Fg3oqF3TnYiq5vPy_-80_H78xb6BkeqPvvq5rEihYRG9EU9BNaVNOoRexGEm20yWJfcq65XbnQDCz0RLjhK-as=w790-h526-no?authuser=1",
  "https://lh3.googleusercontent.com/BuAnC69K89vv9tH2XyDh9AZ3tDvWmBF05dK0TIajSpdcDZf34o28RdEKZPgRrsfgeuME_9hcu07-xZB5Y-D96vNw2kSdRlcw7fcLFSkZ19PYRWpT0nVvmqiVwVqOOBxGyMEDA7fdM-gPZbYHCqh440-7D63db1ly9XyunVUbQnNK72BFkRql10xK543Z20zqpeUp3UBM9xGDL7HI47Gn_YAzIv3rKVpeT9SYXr_GM0uBPhQln-aMmJ5bkcgPeyNTQqz7591krKysi8JBc-WsgacqT4MEf_BjJvdm-_cTRIKpZBycOJJwXMDTFKbF-4pK5iP5wVsqoa2wuMdnonie4LwENDtX424HuCOI7TUvx_fplXoVJe-PPqR-8aC3-MoRXWWAlkRFzg3YY3yB0EdNbNS81AZjZs3mTa4KE-4qI05PmFAdxZZ69KSOmadoK6i8keFypvzozpKDylR9g-EfG2r5Adiu-kcYZ4my2XlndmhVaQnqNK6zT4I50m2ZfpCa0PxqUr2Tj0QMD1o9SkCCjmac2_ClpP1ANNw_k_t7Rtku3jPYd7uWytyV_KIUNHJSHznOa6NWDX8khVsqrfq8FgTR4gwRPVMYv6CQ3WqUvxSU1NWgoBy6d53LQqKMyQ-yc95s-MI_t68wSKNvQQQ9HZQM9ztvJo-kwHiPZ2qmVYPCAGcpLxR0qOIoDzcTslC-gyLksejaEL0hw13D1JECmwwTDFr8WAdOt5peRyT1t1eMxXRB-CrCvGdS-96d34vFBGBDHuvjfMfVSLwcS4l5kM7mNGLQTcTR1Ry20zqYbGrIEIda1TiWXLF73m2fe-IgAOsc434tuOPsVl-wjQaLM8ODyl1eDXmkouSPHh4WpQSzsA4y506jxFZ2SSn7kwMHkKq-1T9fnAz6bhSU3eZa60aPGGuX5IGyWH7duQVg1roL9X10G6vIRvLxTlQFAPiakP8I6txTVW4ECZdHQut4UUPGdtlTR77zlc_v8QRJ0TblXMY=w420-h328-no?authuser=1",
  "https://lh3.googleusercontent.com/szK0mS7GEm2wMHk-xS_9zzgBmcJRuN3R4gDbgDs17dDzi979c2q9gPG2LqfANZ6a0BXJ9wzbJlVG-k0JA1wZ2yyX4dbMQBcS-Kf-16ngS9OFpZu4stppdsW-IU4S4BwJcoGi6RUgi3ymDBK0ypyZ6EmhzcWANLDAhGq5F3-zVmROPHy50xJw3iAIBUrLKBREI9Ljs2_8isIO1rDNWd2ggkLJb1T1oYe0Ox2Kk5BSAKbfw9QzabKJEigOaPVzx3KjuscUZJgaltx5swAU87y-Ga3pDLmcUeVDwZQrUOuSGUSLb9_uHRUOMfpu75k2SdlYiYBLK0pGqoy6BvmYvznvv6aKIeRYARBNUmT4YW-hBABK02Obwf5HcNbLu9268uU05fn2KQ-uwdtBgKwzUS2WTXM9RRmEMJ7qtBZYoNw3Uhlq6nG-c3hmUuc093JSdbWFmauh_Km-vxcSQ1lZQKh7V0nyk-xInWPNKp8WpAhJAni6UEPLrdXojJn4NqRTfnnrq3-Fj4OZDYBKOXYquVhPydz3jnNmDZUXLkOvvboQns1eJXgGYhPnW5XWRRixtJQE2StsX2eKCCEmACDBAQT0yTZVo0kNX8Gc_QmD2TtJ-qPTiwJO_lL-MEVdjpbxipA9GlVYyuPm9ZaGW0fCh6qQTleTO_97kC2QVFfqbmJK9G5oohgaW05PlRfe_gybpw2cJUUfIEXpM4DXgmHVXTT8f_tYX7KgmfdWtV7-DNpLuTdjiLK8pUY4EU85dbuVLzheJbi6wXutZalSO3_aL6sLJ1Ggq9qNQQ3txd1vM5y4mPIwTvWPc9cm6MtMpCiq0AXPsCmBJB9OPN05cdIpQRUx2R-an9Ue4rhfXoo0gD-nNIBQy2_Q4NqMAgIko44m2QAmUcqGpm4EZxYTaCa5oawvytB2xqlTkeylaqRp4oBsuKpjow0eIzQU0jaryEu4E4UfHpiobo2_Yj_o5I9kefG7lTlxXOv8kFBTLxzJhpEWLpZr4-Y=w1280-h720-no?authuser=1",
  'https://lh3.googleusercontent.com/AFRnfOHZLNNmb7yDgX8waJZHBEvaI6TZ5XtFPLzZZHD8iFVCcdWc3RxHMZFwAvN6yP8wXhypK1-td-ctUKt_9es8XrruFZFw6bjMPHXgLz9mi6jBXj00AvbavLAxnyjXo0Ad94DwYLuqIOOagpi0EPU66EC4jhafqATVYq7fu45psjzOfQDZSNMsnTqLcvkziz38V9SmJLv1Uk2p6XK4smhlAazUMzmhJVefokidZirKPZreEYE9vsjoNOslBxa-omAaLyrLUFwIzMmIMZU9bWVBAIwqwlnjJfZpL6O5TSuGuYorKh3Z42ElkpiWAPqrNVFgRY0xjIioxWppUrvPIagJjVFZ0wTtLz3Bq5cAg1wE0qC4Pt85igZzw9-kl2azIIittygB3Qv1zFO7Csqna0DIj3N5N5gMOZ6UGUmuQaw-O6L1dupBlPHqzFqMKGAfUpVMX92Iz-Sw9huB00wbtry2JjcxlRtYWIl0KG5DgTme4ipXV-udAUCXmdgHF-8nGZOkD1vcJNWpooBQfVqZUGrzNpfz3kN-XTee4pGCwvXwFOhM4QCGmwkZH8JOAp-Fl9ejSc7tVSXJymtbMJD6HErwvznkS3x6enFPESBCZM81fbH4thG-yMzxtcpn_U9pzAGdtCr_9yMKn_Yru3_PlJhp4nvuDXwb7CfXd0BUviQo68ACrLNIE9RXsnSwVARVRJ07Z15rjsF_xAEUW5pFEvjklrkNOPJfzcnvmte5-1LnYjpo8sMM7xpLAt2EAT_M1L1GYwsrYMKqo6Bss-0Vp1LDOCpotYKnZlevwh0vRB4n2MXHBf5158rhyZE9FMDSyk2SBZyt18Xjp6nfIyDuNZVFbSiSJgmbM6lRjVQFzPJPS-hYWARBaWMVnfFQHplXltXj0CNHokN75lhzGd0TLIDPA3lggamSWFciVWMVxoemleV4xmn1fju1FI8lA7NuID_KotYQG4tEc7XdyLfB3BLgLAaD_xN72bdnK5U7ZxEQ5Hg=w1129-h860-no?authuser=1',
  'https://lh3.googleusercontent.com/DmiOQl6-tFfOUlzStr4A31LrCPH56cLcqkRYmkcviYNpI6vHA2qqTubMiy8nDkqybo92_V_QXc6GGIjBzbyAzfN4AzqSlJc-0GAEpA-3ZvQGwF9Xhod31DtXD59OU_avvoRmCnGdL4jscfBKiexPl_ERZImW2cPnpjwRt5rHJ3vfbBSHY9wqyWkrgtX-cueE3XOd28X0stYfy7gobjb3TZIRyH8PLWJ8vhlHcCXIKuBBpNrn2L2oKjHR43FfZm2jchqHJvb8xz7UZvMjCf_NIiDkg8BoQyvTLnKwAIJp3eLw4m5wof5JC4FWatrCDSYgLvQjVvhUwEwY660tCZZux1btftzzwTzSKdT-NWIS-Zjs39Rofh0PQ-y8y9BnXaXAGXkt-eC1sBvJhPChei979DyS3514nubjIyII79ha_ifpfhcqT5C28cq9xDZ6l5LFvps8_rfoDWa2_q7XaqpN-NSu4mL4jrdKGBTA08BUx7RvK4A7d5FWy2M_cLktstN964ZptLPBqG-ygHDKp_-d18DuXEYSqhfxgmkpOoQCfkn-IeN6_cq-O_m7IvFly7UOEXbfI_7Dcv6jSW-p6fj7GUVmp1QodEhtkBb6LGITMBeP--XaKg9QJTZBXMmhEeLNRIAXcCcps6tDqqXWdmBNGEiC1SQf2i1A5o1VruOhaSVHGwR8h71YCLXztBvM2QcxtTFjxu9zDktlzTaotf31Ag1lOsfMvrM6FbBpuQ0_PB4HMYhhboqAoAN0negFVOXpvm2oIotsvaAZwtmxjHeruzdtsc09wq7-cICEtVowoUlNbA69-Tld7qIcuLWw-Aqah3bWigWQnsK3dhSB-l0I81deRGoOK0PVvntDPRmQlF5ILtmU9Tmv259-CINiTU0BiwcqaZ9CxRgXF_Of2kmEqk1jltCTBHCwuKevvCdoHiyAgQIXzztxcU7xAgi69lrHtoZ1ZQ_5W8gKM-Txcsk_8K6dfRGy_ECyZh-blFg1hSgMvMQ=w1242-h799-no?authuser=1'
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
              Foi a primeira ponte construída sobre o Rio Parnaíba, no estado do Piauí, inaugurada em 2 de dezembro de 1939, após 17 anos do início da obra, ligando Teresina a Timon. Projetada pelo engenheiro alemão Germano Franz, consumiu 702 toneladas de ferro em sua construção. Sua conclusão permitiu o estabelecimento da linha férrea Ferrovia São Luiz-Teresina da RFFSA, conectando por trem as capitais do Piauí e do Maranhão, usada também pela linha do Metrô de Teresina, integrando a vizinha cidade de Timon, que faz parte da Grande Teresina.
              </Text>
              <Text style={styles.textoModal}>
              A Ponte Metálica sobre o Rio Parnaíba fez parte de um conjunto de obras para o entroncamento ferroviário do estado, junto à Companhia Geral de Melhoramentos do Maranhão. Tais obras compunham uma política de desenvolvimento regional, executada entre as décadas de 30 e 40, com ênfase no transporte ferroviário e antecederam a difusão do transporte rodoviário, implantado no Brasil a partir da década de 50.
              </Text>
              <Text style={styles.textoModal}>
              Tecnicamente, a ponte metálica caracteriza-se pelo vão de 290m e uma superestrutura metálica de 270m de extensão, feita pela técnica de “Cantilever”, com apoios extremos e um estrado típico de ferrovias: duas longarinas robustas centradas em que se apoiam as transversinas. As passarelas de pedestres, localizadas nas laterais da ponte, são em estrutura metálica e com o piso em chapa xadrez, com 1,30m de largura cada uma. Além disso, sabe-se que inicialmente o estrado (que possui 5,60m de largura) era de madeira e fora improvisado para permitir a circulação de veículos motorizados. A posteriori, o estrado de madeira foi substituído pelo de concreto armado, composto por um painel de 7,50m dividido em três pelas vigas principais: uma centrada entre os trilhos e duas laterais.
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
            <Text style={styles.middle}>⬤ Inaugurada em 2 de dezembro de 1939;</Text>
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
