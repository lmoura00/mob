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
  "https://lh3.googleusercontent.com/aO1XoYDEI58a_3E61nrZrGywfdWCxXPX7BpO6lj35pF0ot60sItgSjCYjJ4KOrNN9fJnLJhbETwdOT5ZSWr8P4Q8dp2f5-GJoFaK9ariCdoxmLXKXacro8VBMMkgs-oR_Zw3HeZlBTRu2dqbJzrUC0I_DH6PUtrq_hhGSvOqL_rxEV7PzYY7YMoH8dcK8bRiBypQEgnLAwEE5w1JV0MoZHZEmyMhK_OsJ_c1SUKuPcC4xQGEtyibt_xjqQI-vOHdUS7Sf_EUcUgfkpTCF0iQ-NXNn5HXIf91S-j9pX7PEXsfia4IZ7qrC6XobGrmVIoR1m_zwUrSrYa4p4470ruQ8SpnYQbi7VMZ1c9TMqRFlEC442Bo4uXVdfQK3yta5e3TGLqFBiQm4ea-5XZAK2hbJysrc5--ZB_qgC9m_VMps2tY5YFJm-w3BFP5AFHvVaeSrnwVjMCtP3-SAmbhS95Terfofp_qLEZqQUvIwaiJlc0OkISMCmheEKC1kh26aGsuM8p0jCNEvwBZ9FXjeT2uHPBg6oGuvEEUMGu-JAljg27NTNFX0amKAcpPw57kVRxkp3fAFdKXdzGD9ZgZVmo9uYZoub7Ii6VRlby4MSAfOmZ3a1Vr2VZcLNxZqCWhvihmRxGXvpBcOXQWRFkVh4LkHl-x-QwOHAqVmChPcQeR2zgICNge4aEHtjLMIhv4LBFKgYfBplGlNqS0O5iKUaRGG_Ba245ETmGoJlGO0Tzj5rvoWTA46dx8B3EhfPP6b7DDCYWyEqx5lD93i04sa6rFQmCPcb1axX7mnd_2z3m_e-S8eXXsg1NUmo95zQiusVjsvwqQ9zLk5AAhv586DfMR7ZKQ4qwjJS2KornqS1QQp6qjtY7rAfvf79GnLs6vJCKiWFv_QJXQ98xq2d4kXr5KgszpswOuul0q2FRjywYD61X_nMmDW9xSSZZZKsZ7Jk8wpKM5lNi40YZaAEeFg9bRE4-rXvZESdyEKuQeEZItAno0HFg=w300-h168-no?authuser=1",
  "https://lh3.googleusercontent.com/KDld_Bye4DN5yux41I9KA_cTo87exPxokqLDw8OL3PEhrN-zZmwzpX3xNsJGzLBkrB0ybji0ZAAjI8CitAViznxQvCzmPZKkJNKpgxiBR6phjOwx5OWRrFyFGb49ot1SYbmx2HDoEn-g6PW9KJKYNMTyLRw3JqQq3Fx9njWqchBm2AEEvWsCTBVPOOSTV_9U7BIOSvG7z5DUaghY7n-OmWEUj8yeU0cdJYm63BMPiO_7SSdAnH3kIZdQc2Vp3ymx8yy9MQuc9xRHQH8wSXfwiRZjT16rf-6g6LnFVHKMXhtZYUHpGKx_j1Md8FXrXFZiNu9WvORVCkrWc1RlSNFr5lfO1yq47WjML_wPlBPcA0r8Oi3039IvzqAiU0_dh0EjTZzHh85eqMOTq2uMx0OI5eX-onsQ7J08rXdtb_gmLDfCFF4MxyOZFKPPBS3CsFpqMuMJ5z1zFasNmMOiafUGplwSAkRwpgLF4lofFJtWPHzwy2XZ-Nj0tABLWosc4HGyn_q96euxHNY0NcTQ_6j5sn-pTS4F1f1rEj-dwRl-fHVK6Esmhp6G59hQHt8n2F4NUOLSEiqCyYt39ruyqMhA3NJ2-2H9H10SAsjkjMpZAedQ_4QqbdY7Nt9uKgCwShFe0SbUrF90PjxzYt_yNuN2PQIbc0SCJHPnB3ihXGgdCQC-GHITZrIi9wkbS29h2fuOv6DAJJVhjUt7tnbTDGQMpdlkpu7wrMex3Bhp56oS_zYB-6ApgePDc8BiWIvGi3KuFG5lMJztKQ6r_lNOe7r0ujNktExrNA---VMIAvVQhN799CfAzzdBcnFr7YYLKwnMpKlXFGLuKxasMfqzD0MJ6Vgt6Ch6Ciy4suRJDPfA8XuUkyNvNIjnMpeTtoXbxR-JQCji4Fim6MXBZTuqZBRKVgsTI0Mw0rfrFszMyKpp0ZG4jqm0L3v7ST9knHwONv60ariueRg_6FrOY2wm0OjDzPlSN4ehqJDacb7UDLqyac6RVvg=w740-h493-no?authuser=1",
  "https://lh3.googleusercontent.com/WeBz784uO3PasEMZFrOkazX01QKa61pPpjCsJTgtraqkkvLI9zxgX-tgI-aYD-jgu355GknXM0B2TlMbKF33bHIc2vvDVdkc4riUtADy-QSYOyCByfFWm5_VUClBmsMHLen5QRzDEE0HZNSR0mH__k5l2MjZNR74LYNqH-GWcG0723OkOvOO2gJ2yxzatvSUVlyl9LoLjCy8QKmSGj1PB-HznoeV-AZ9EnO6PI7Uzo6fi-q7DFvY-4oKLq1i9jsxhz9QUq3VplqnpFjCRgE0fu72yJwBLI9eCW7YZVC6eUI3cciVTzYUBxAt99pOUmyi9wQQluIDQGUYHaUP_cnZODx6QM-77xQNLcapXmo5RYqKI0Hv4Yb6SnQaHY4EJ2_L0ZU_52vS4NvXyYVt4tlEXYfWg7Lp2v4OLGreN0vNOtDgMxfVVUQR4iaShfTi4r61NGlt_O66FHKVgOEp7w_Inlb7zTQPTbmu2UCjv-7waLCFC6hY5Mv8VevTjT6QtHQVBLJh9Gz53EMC_F-uelmU2sVH9cAAEZqb_CiO0lmUSkH6JngKJ6vv1pvmU-bYGYJ_j7XvTGNLfBdVXnUTLyK1iU-gzspbDP2l3MKvugc_Ru0oZhJTR1d6DlHz_LIv3VhUNzmtl8lzsQB2-4HQfim7RonE0U9sCEPTwm8DcU71NoJP9sAWgfpg6HUGW_Jw0S7YMZYE7mR42TSoKZ_yigINMk41JS2lh9m_MdKJLJHEOx8IGApjC60PJNyEU0buPWrPA-VeuBG3AURbzmZgRR1GF8hikbPyUjRbgGQuufzWaeAQ2xO57wa2A_T_-dGasZtPdbw4kIXpvbVMV8mQvALFxr7XGk68L4yaETmohBVN2lV4hmdJ0vBseHZA-aQ_jf1kO9dzwdac_fsx7DeDhsDX2H5mjX31z6nWCRDz_mPVEg81BKJkCXZnLNNCwthXtQ10VbrzJIfQQGJG5NSYVf3kmnuDo4dsurmLSxBMM0GyzvnTf7k=w740-h493-no?authuser=1",
  "https://lh3.googleusercontent.com/w5gTxaJ67BAu8e35qWy2crwRiLTnspRYYy5TqphkLNyNi_Jh5UXYblVXETg7_clhWVS2BDGUgtSF6N0w99LoRm6qpWaZnLkl-yhrfFZoluHYPNO3fY0m05U2Ph2im1JMMWjyGe7UEpalkFQHzZhvE0rzhn05H1FHCcWlJfDAKIwKhkMVR1r_yXSemkO0Pxj1HCgILyx--AUSdIghc1Xbar0EqMUDkhN7HYle_0O1o_p1xSDY65fDQWlCAgaHV6jDOD639rN5tEG156_WVr4pJUzoeFdPHHa3noOGmw_Bax-QC_Cdb5VukQiCHX7pO3QJnxnKsg7mMoSW4NO7RcO2jSflxxP7Tkp1gZvEWzxvZwWZq-vgjgPDYlkDpLO4_tJn9R45SatzYjbvWWkCCOzHAS_70FL48c_alqx0NLysPW2mvBYa3MGNu8mcdfUwFy0Z_1JCYtO5eRnI70_WIap8MSXrDAsHsbYUKa7H3bGFMCI1UWm19NTeMqcLq9YjvKR6_X8975lxctd1ZYU2TlVYb8wNbc-ikLMFhS3mDlZPuEa7Rno58eGxghM35szYkkcwL6jRAHOQ3QJBW3mUO0Nl4iCG01D7uoOs3LQrFqkRZsROrCqKg16kR5jSj5K2h7JSIVrLPvIxMuDfnhP8VgLPtR4E7e2wlxpdbewFmX_Wq3iRfy-ROq7sjuj3Yxin2P6vWKviacicZnzn-uxnka8lNiCxUkXsO14cIv-9rKYUe6pFslkYkcvnHUF3-ifxjS9FiN5S9a-YPNVGmHujrGl4vtIT6YNZ19Fmp6XgLSJsBRWJ_BERZzy74NOoiQmywyYQNlW4_aGwjQ3PzfcxFS5XaVDHqj9zQ4MTxl96RB3asx_Cig03IV2bih1_P1PNKmwDgMlyMrGUfVmVjDwTFOHbKZgGcuGinRvG1n61AZ-z_RWdLmdPwx7y-adiTQmjl5UJCpRknNvsA_6mRyaVeO7qLp-6dtpzagYyhXL0VNaA5Ft7dc8=w740-h493-no?authuser=1",
  "https://lh3.googleusercontent.com/QJn1qYH48mbXa6DAyylIu7jAPehP2EAaQ9twvk-_hAJvE97CceZDLFbrm2wN-P2KQF0_qCU4v21JvtAKkaA78s8dp9FjbO5HHDFxQcTjSvSZmJRKoPxtTbMVy6FdCf46AYeNg3CBc9Z8Vj51PWszcm1LWRcZoe-lGzhTCQilWhATit1o66Mps_ptsI95DEb3H7gKZxH0qS4TA5S4OQFneAOrZKnozyqaHI23Q9l53qRX8Zt_2gY1-wmrRYAKdP18HF3AX-bc_Ebf7VFSfZxUd8YPTuWfr9hhUBGHSq6UNV8lpW-i-GaPI6oWr3iWwM0RNba5y6Cpmv0-mlrX3KBrF3FQpT7oc_TUIcD3uZcmGq5GSEIc8AcyCXAWP58EhSR7eYaeaIBnuxonxLOKCq0MrzOW6UHmYxwaLGDW7nMcW1bdC5Sgb8BPgeYdUaCH2Y3l5Vk7KtWhaBLt7FLLUUc1WziyLq-4GPMVlEE4_fiJrVuSD0LhVJ-pdOdw9srBRLrB8ex3IqRmIooQm0K8lZoK3NH1ACbdBFucjzKlgGOcZspbaHKirQvPAEmij21gc0iKBfk3_rvQnuxR1gdTuCe2uv6Rrhal07qRwMu_mmGgaYRsS3r038zL8kn-I-ao3peSHObnAKstZLBR2ER7Stp_2NTBtIFcfZNC1CKT88_tLSqGcDrbQK6AUvePlEOjsxkiZgiDCU6NPDHJi6ojcpyNvmxEwca-2L2x0zEoiQd1I52dnGNcNPW87Le44C4-U639CYW3zZHbs2c5gABMvqfDxcsR0fz_A2SGJ61FVFR1TIi6uLq3J87OxkGaFqBrLzdO0-Wj1TicTb9I9niLLK0bIvLvJAgdm56mEXWoyVeoC07lDKszPKs4vYZzPGlcS5VjXWlCNrvJAbl7t0kVVFLBmlygaOQzAXg6DGbLU5OCZEscltn6CWbZrzqUdLXrKcB2JtYKnhffNfY6mbJWj6zh-1Jv5b0afrTyqOxKnviw8p4Cbg=w482-h320-no?authuser=1",
  "https://lh3.googleusercontent.com/l8Mr1dj1w9wEtUQXrh8vlGgQogovF0CVQTf_da1dMy9FAxEOH4GkdzEeJVcFz-x0HbmVxtrFGD13wAhADi04B-KLj0z0rCMDvYKzlyUqpCV81VyN69yuBdUu8yiW0k18M98zVBQ6XPrINouRxRxbeUjGgGiROTPrx7LUj20FIKvjZbX_v5dgXcliBiYjgUwAJJmuFVwxcuG4EBTj6YXgcYJRq2F8q16yPOXV0ahMzAnENjHMTu4B_ubUIo1BvNEHqsy4_7dlbJ_ProtJRbtBPpg1SiUjbN6y9th4pdL2QpqBNCqf-z1NS9sDu1kGW7kAgSQEEsI9jeSnzi7EQLs5VGLzShX-91NdbuIb-_KwXcRGgLOfjYBhJuWiUjhsY0ufzwSUJ-wXBMQ8L13EWoaZjiTZU8-anYLbmwGBO2bcYUFzqIusJpsWDg-Zcdu1xjdOJjTtVMLQtbVbjsLqO6upMAWMleWrc9yC9PtU7GFDKR485CCayFjNl9BnYIMgjG_h99G2vvfeuzaljW9Y9kNFUDvhcW-_DNlY9OAnuEZu8zt8kIMGM-2Ok2D2BTCunpV6k-LQGtB6CbvsFAFE5fmXodH7-Jb4zia6Wq0iaDEwUv_j3Z5sbvX6iDEDVRRtOlU1iPX3DrNyF1IFP5f7srVDN7I1u0YOiR9SqU7LC6pFIX0Xor2Q-wKTHeRR8ecX0uXhu1UKbfiFguMbjBvqcm5ngt44uj4IOqWTckPiJapYJUf9rl6NaqXeUGJQ10gxFC_5Qt0pZuxE7Tw0PGW-AbbnvyuVvIjPQPNw8JcCNiZ58Q48Wblgbe6RtdWolmtY5GZVz0XBM_fCSGJUtm5qAM7goEWFj8dCn6EBogCtOTskbfk3HN33enJ1s2YJZmrpbxxKpO5KxOfaDHxw5QAnsrxjGvOPjiJrjCvxJZB6vYn9IClz4YxFFM44cnV9EMxQO_a6UojWEGOeA4HxMRvlQbXhP5-QS__n0hhN51MSHnXEjjRh5w=w497-h279-no?authuser=1",
  "https://lh3.googleusercontent.com/5mQPHuRp27e9Z5RxKYTC_s0YsVYudo4soZKslQDa6Zd6vx5Vp1ZUKwg62GI4l8iRX9kL0k8_VF4quoPSNT5Esamh4U7uUdZvM6tFxXGO2VmmOs2-O-KZz6VvPJJ6BlbinJbI8QsOgbfUONBNge29oKc2YumRNVepEpSqLSsRZHMiH9U_bT39RT3RutZyj-YUVE6tLSCCDNsffQkDIyfaSnNnpSYs0j-5kW_olZnM6xP_ad9z2ua_dP-lmARJA7oX6icExheRXfhgu7vpUD3moD2FpxBks8n9W1k1i9iYxAY7fUqKslYu39PlzyQmlM8bwi78qcbhXjBCl6DLyCd9NFQvqfvwe7hAk0gsXR58XAoQV3l7dChxEVspsYiocwkDuI4NMjIWg1Ymmr3G_jbMkYAt9piQ37GgkexDMlzgYLe37QNas33Jid7fVG5fwb5GH1uFkbxK9MLPyot3mL2H0ihL7R9ggbm_Ad9n9NVmicBECwTyNuCSEgkFfqsmbhzw3omYlmLFZCX6p0PFpZoIDB_btnUE6ZwJV2esG5TnRHdGywlwPmRvwPncODiFcIgyU53IQ44tYDYy0EmZMLARZ2MxujjDFTiuI1Ou-pjIhRvXnmZydMOViTjrLMnqGx5eQWCDVu1bfQYynPZ0fMNFyHRjQFBVBLbxwYOA8NP1y583lU0aTS9ptovckDmzmJrOcp2ro2PRF5zcv2U2DJ7r7xaxYU2YNMKJixQffltg7-MDhT98WRSA8P8yrOXzgKPqkL3pS3jbx4J3amADLAqVR6kC2ic3sFdG47FfRCdim2_RQd3O7PMInocjma4PzfXj6_CoJ-0D_uRUVqUaA_aM7FKLzu8hY4sYc7CGcE-mYbucJffkqUh85fM0RK9cWM1ohFxbJiH8XNeRHnhOhmJJnEELNv-RVkbg1e2bRN210ODQd7pa0UZLngL5wz4NjkmVivhUT8t5ZFdj9SwvKtxxd6OwQWn9VYwIW3vWutFgTCbOBRU=w1280-h720-no?authuser=1",
  "https://lh3.googleusercontent.com/-3X6qatByJgnJxPh8rk4EREnxPOWhEI0ml_4Ien77FEY1qdO4NNsdOe-w1x6IJvWatKb3BwDQr_D-HaZcr-bpk3ycu1W22ZRb5N1JwLiwkow1pUyaV5Otrwe6gZIdWl-EM6IK7g5IyGejspZrMU0IF0FG4QPQYl8kqKl0kMM_z3vX3cMLp8B-dESw7lzR31HgmKw2yFzIvXkQ4cWNQXfuIiCqMzNjEkbi7nXI0Gx2oc9ojoU1aL6dut53PFw04N9NVFyBS9MvbdGUC8dSMHh01gEl3pLpjqF9ml_VvwevcFd-P2Fw-aT2plNnD_S0moSfnY_a2MF0fqlg9bNt2cH4WwoO0vgpE-OK5X0CG8VUbjOdtyCmYj3DEKkLauzYaTRubA5UTswQT4vRx5MJXN69bL563qAhhdUg55z-ABk6knT1NthxDYRKuVxz5iwvUmZteXVpL2p86Y6YIrljQJc0ZMM-FwBxVm1UDSFxyLZVVMtC2tceTHf0LXzVKZa_OvBTMltSfprSCxS8LDSDZ56XVS9Y4NqmCBi8fSEvAB8iWKOQM6XGFpC02SP8k30Qb7dvacgvzRDpP0j4sIRgrHR0U4pCzmvp-8kvN6HpW-AJDLARgrhNjpDYSA4MKPPQUNb77EWiG19pTO9frJgw_UCpUk9Y34DggQbqw_Te6-9cQjNf1WL0pUOt5uTJPqC-YRxry0Lo0Bh4-5YInNhaHyuzpcBYYSc_S_c1eQ4cdnXtmkjatc0N_RMiH5VR4R6yReRCsfkgZ3osy4P_X-RrLYmIojzOJ5UWN2mihWVa6yAUf0aRDyK1STLXugTM_jy1mvR4cXA8m799rs3DrQ4zf8KPtDDEvBsZ_F3QyxkgpdDyjxkXmZbE4UN3Tl3z9hQEjqcZfdppowkr06r7RLbEePsiHECS7OaddDE47cfellQKtIINe9i1RzPVZkHK-Z0UuxE3LAlOHhV7qtGhPVTv1NoAyPWbm395w9ReyvJdsdIfAwX1Xk=w275-h183-no?authuser=1",
  "https://lh3.googleusercontent.com/WtXTz-F9vQmCLUnCIGSDzjPxtR-RvzwZt37I3ijNY4bfo5zjURxOzqAvafT8A4o-BCoBn-Wwv3aJA_XTnBf8PxhCk7VFKrbjN44kI4dZcgtNYcYWPpY0rtdbjMtSNx5kujQ6oI4ZeZVhh3fBXZtMcrFBMAm6PFTrY7MFBSDjiawgXFe4Y2QTG5RSEItLx7zL58lbDqg7umQSaDMWLYPum1LJQ7CDIUkpbqneae4axcqvMmm8BOOXh0C-AMXPWAFmlIMjJqU4P1-qDgp6nw-Zp0WWEhbYHuk9CXDSulmJsVpp9ysK3iCy32raN241Z2S2otT58HspPbc9QWcakjdxs-yqlOQ3085O3NQO1Y61BO_U8R9Qs_rZmytkYwK0rFxo9kBSGI91yxI_hrg8JMyX-bWSyv8rOIo3_S-rKcyV5dtlLPxtulHYNk6ESqkdvV2DX3wiOmxngB5Xk-cMZTEdpiWV0kj2nqlSIrNAF3kZCfvRRgthNX7q3TUFRUiMIDSeRSx9YHf69_f4Ks7rRpij_oNenCFUEHFGJMmBbjyfUYeuPPOWHBtQoU7bBSTQtYdylwEZv02t3n1A3kH6K-SOL6sBqoFcMqbdaOEg3GX5m2DbihQwi8zQvLiBB8mxQ8UA436exbeb_AzawJ00krHQ52153n2qRD43FWr0l9iqJSEnldhtHSwXP536ZDiALoViw7RYxkbRQ1TJuEBIUZantQ8jaP0PEQdFvUHM1YEKtuf3A3SOlM3x5qmdk8fKlmkBD23eJrvx62lnQDzcwmvXcNrbJZxpN-T6zRJqIRRuV5hA-1Yk6Loo95W_9PTV_47lkS6iU6wjH1Fh62JCmLOSWZGNzvXnGgWhno2c2UnLlRmPPL7hImuZ-Dx7UoDBhc1fU5W4w3koaJ2EkzPydmMObWg9VzmNi22CxGNSpTpfcXEx1od20jRM4kk8LGJNjgT0iFnb5_b_X1K17I5fCXrsa5ujsedNdtez6eH1EwQkJAV0OKs=w1024-h575-no?authuser=1",
  "https://lh3.googleusercontent.com/TZ01nZFuvHIRx396YnLsEGHq1Ld6gaYGLfRoD0hvbc9jFWlwx9OsPnwkn0S16qvMTRRiU7hcX25Jq6RS-TpX2WuKfVc17dYvVtUicZDeB2FAxk-sXamfI1HX3WegsgslAvb8NfspHodH5tgml2G_n4fNxEOlqVnmNOFnZwuQSgzKO5nVbg6m57uXU2gmIxR6N1VPF93zAyTy5Ug5y4DP4IaCD-q7licIYYXR_PclRomeH14KqfyxgEi21ul7nXiUQwcZRvJYWCa-tl2JqF0cMZU97lb1xwqeET7Tpydes81euCuv7y0YX-OLzq_JihmGr6Al2OkGdwN9WT-GVyExNZulrTbzmi3c9Ic5AzLkjnRXjYzE4qVbUKf-DxCACd8F_zu9uPdCICdlAxC_jP5mMzKW7aRbtL1-c6tA6u_-yWUFWqg-HGwk3x2-rKykENnq7buHTt_6iiZ-jVB98oBRaWYi5Af0RpVozSmHVIcbjcCIMGKQde3Je0wsOST7e2GhDWDDnWa1DRghp_ozp1zv6vbDwBtORzD1ErDIq_FfGDcPJ7pCR0i_AjPD6el2CcsUIf7IyGzvzrpyeole9YvC75mWaP20pNMc_8b7C47vWztHdj_7Q0iPbjuwfKSDLXliWneZ3cz4gEs2R96_XQCQ3z4zwsuY7vbBsO8lFTfB2mEjRmBhUW51knbafmQzjUb-fEm9EUxpTb63fIsag6jT0PdaR7MeHKCfTY7JYqHxj_QjvoB5XWl3D2w2wIxQYMKYzB17xB32NDDx5P5vyE3FoHQVfFWfYnQjEsSYpQ2xSfJ6_eEuUxibB0VBv7eX5JGftCbYrV3gzHHI4ijyTKxbHqZ86T0a33B8g-aRxuh-wKQt_6x8drXhHWwxHPbcvy5p5q_RY9vsD7AOEw5jwxPwyi_uzDg4ThwEeVOYpN7IMAnpUr4luWfJIsDxt6jcmXhM_ZnA9mM-BYCkRinktq85xpeu8aCp8FDZYTVon8IeApV4pCA=w1200-h800-no?authuser=1",
];

export function Sucupira() {
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
              O Parque Ambiental do Sucupira. Inaugurado em setembro de 2020, o parque possui uma área de 70 mil m² e conta com área de ciclismo e caminhada, parque infantil adaptado para portadores de necessidades especiais,
              academia ao ar livre, quadras, pista de skate. Também possui campo society, calçadão, iluminação de LED, estacionamento, esplanada, Praça do Sol, e área sombreada, tudo isso gratuitamente para quem desejar visitar.

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
                navigation.navigate("RotaSucupira") || setAlerta(false)
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
          <Text style={styles.title}>PARQUE AMBIENTAL</Text>
          <Text style={styles.title1}>SUCUPIRA</Text>

          <View style={{paddingHorizontal:15}}>
            <Text style={styles.middle}>⬤ ÁREA DE 70 MIL m²;</Text>
            <Text style={styles.middle}>⬤ ACADEMIA AO AR LIVRE;</Text>
            <Text style={styles.middle}>⬤ CAMPO SOCIETY;</Text>
            <Text style={styles.middle}>⬤ PARQUE INFANTIL;</Text>
            <Text style={styles.middle}>⬤ COM ACESSIBILIDADE PARA TODOS OS PÚBLICOS;</Text>

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
                  Linking.openURL("https://www.instagram.com/parqueambientalsucupira/")
                }
              >
                <Text style={styles.link}>@parqueambientalsucupira</Text>
              </TouchableOpacity>
            </View>

 
          </View>

          <Text style={styles.taxa}>ENTRADA:</Text>
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
