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

import LottieView from "lottie-react-native";
import { Linking } from "react-native";

import { Entypo } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const height = width * 0.9;

const imagens = [
  "https://lh3.googleusercontent.com/y4uiV4cj_xaZ-S9AMCPVQKjO4C64ICgco27yQloBRCPte9o2QK_ogL3JtQ7lqwQ6XCyCxeoYNRpSjjz_E_801qqaQDECnVemmiJ03akKb88LrLAzTJXvVDxZad9F5x6OQUozyLGBvxleq8e3KluruIzRcGsIXlpG9XmW0G0pMm8mNvT156VUOEKkMh2YbdXfkHcLAxtfunYLrIiOqX3OVM1KjukGGS_3ZJrAjmeFHp4m_XA0FW1opYOhmvLy0JcjCTtbH0iLpado_Q99enNCyvxrMcYh2nx3CbgF5DW0803ijm_Puuoj_JAPaMzy7zm3aFgswH1z5Ch5wIkGV6ZIVXHIrRPT_W8pvQKkuobXWaVKDfJoIIvZbZGTu_yQynVdILq6cJ2Bhl2HV79zX5dfD3yRiswmL4VZZMCuMeV1NjqKb_Rfbf2qNiIcc6eputv6nDuygjlB9rY3JcDaxB10g1BWETwZCiifrRuCpzKghe2Nft8ZJPmeUD7Pr1tjlQmTHIGPLbQuXEvKHT15wVlmhn-zUOfvNhlij8fCBaFFDhfQqNsxXO7PF1LFa_7nV1hhte4GZ7HZ3DlvIyGpO1FQo5ptvvAY-ZsJbeckTzrm7PftHW49myz3m29VpySbv5lIIgI53_4LveYcjYcuNljKiZY1HqyqMyU1jXaQh2rSU6dF9y2EH5lt7s8g8Y7RBur4vLFuIIbUL3UUYSotZGFp3Xpab5zV0b7wxpFoRyKHupvl8Rg-isNL-2_ApaQhjKa7rx_JNRPebE3v7pk7uB3QdqV8gl115FAlXFJOihI8YqMVddqLF9kX99xipQAE89BLpFqm_vVhpTOqCyxOgJEphx39vJNDVgh4f_bFVJyDyCuqG9bIiqVEGDojzPBu22meB0JEwEk4JYSlzHO0ggFg-zM3UGvJuDbYR0H6iBaKi4ogpcbdBk7b_KAVpLxD4j0Yp-UiNuscG3lKQrj_xxLqsdMwfac4oDhVOTqnRKu2Hb1kSQ=w974-h649-no?authuser=1",
  "https://lh3.googleusercontent.com/oiBx-Op6Fl4gCvs0jYEhrfzP4mxjK6mOtUBaoK-ZE74sHxMki6uM2Y3Rk9RpJ1pdhFkfXwv-Cp_uHy1KbQkgr6dvGrnpVTjtITtycyKKhob0l1f25-mhH847OuhHgvOlMLj8RmF7Y_7OEOEGzgcfTiz-QTZ9uczifyWBR1ORq0307LCe-d72raxHGrcHPAWIu8Dyjow60KZ2ezb-Ckh5b8to9Ow7cQ-IqSkCx892oUsHG_4GgjddPKhU8E19d-nxa-ABZbntQLyVM8ranu5URMXMqAfVfQGgdfa_QXHjQPt_JpJOLLUFMkTmZcwUngkfLmUfROXEPTdid8Fm_2m-7bxqL1IfPh51rcpvTtIxwrrLHio5kdSSUpoDxdQMFJijFvg-YT5zBSMGG_diWvM1e7zAh_zZJlsPv9Oo6XagT47f3ziZT_BWKcgMuyLdlMK7RcRMQqes3vRZhPLBVSQkOI6I1pLSwgopYa_3DLb7eDplEajye5Hg6y4hMMipGDd6oKS3D1nHfh42kJR_smlARMT_MkD46NH43hu7YmH928LafFHR0t96SQ4mtFHZRaTWknnPiSnDPxVZ7GfyAXSEqfLsiI0pRHThPKA55flxLbXunWpt5W7Epp_aOfWMDFvKJd3wQbpFH3GlOc0pNeoq4tdJaZ58C_kWLb1CSh-i6P0kv6Yj71Nl_Cax3DOBGvIQG4ujODYhsW0jKRzBSjSB4xhd1-HnXGq38caKtFlPG2ZRJr3iK1aEZIi7wO6QZqJMadrl4m_lJDDBFy2Rpa0Ui68xZdcU8swSCUJs5Nl7JzKgrqK5U55gEAzFTCbywPACeoOJiVymAdA9grSMfT0WAlfhUldGDeZKUvOu9t7uPtBf47e0zl7JVZdJ6TBpAQ8SCQgOK3BGpVo0ageIcVR8DbCiRl6iKieNzJNX931djXQPJEq3Ptt6RIrgGfpJq3visJbR5RWsjKuz_m9BKETsmcEcA39Syrg3-77QIaE8gilAAA=w960-h540-no?authuser=1",
  "https://lh3.googleusercontent.com/l1YhAastRUeCc6mb6bXCqLNjF_AChh598veXOAfsw9WxC3WSXTaFOJvui0Qpsf8EtmpG08PXHw2WiVJofZZAjBGQpFi2tSmFW_7MfRE61P1oa39FG9w4oU1RhY8c2k_BmnEWtonbjACy_Plgbt3CrHEKDnMW83NcB-GkEX78SJadVmP5Dtj-7f7kk8D_-TnkXxW_zYL0tZusXJPrLOa2AtXDxjZ2-dqxQytYN8eiz-Rnw_aZG2vfX1k_9BUnK7PwXOJqP5K4QDtCg95fIaZsaijxOWmdY8uMJY6JHfyA4JD9lZsw8zuHFv-mXma_9NYSVu2Fv99HJDiy90INSuR02Dm0xmvhuRp5h9p6mbKTnwlQwoUdBzZupcG_1EEJq1ScNZSJKRNApAQa-zUUSXD4WFT_PdaVAob6XuOggSlkEyoUS_qdBkgefdkm9UEaXjLHELb6C0Vc01NYC8inDm3GDpQnxsNsDhEcQjf2GZ8dPvJG2CsvBMlAZF5dEnCwsM2JJsK-ZlABPycjxz0HRCen3MwTXYsSI-T9gxtPW3QUHfBG8z5om7LjR2_TMALCJzVIxJR20eJ-gJScSleIuwq4eeQ8HiyWkUvvpIb_vXizlFnkEGjwaNHdNgk-Zg_dGxSr9ZciqnW82WmpObhih1AKpMFH22z7NeEMPAkn141xBtMpI74r07z8GatsOmmCBrD-vGFKDvmqePDbtt5c1cz8trFt2k2GIDTm-Wd3d5PzPAZw_bby7QFwRU6OMegtt5sujkxpJfXzfwKKMxo7LkUew-mA2up-1QV9Fwvds6dhRoHdSZct2LBsaaqAGMGyH4oXLdO0RIggtLRmoDyKQ2IxovckE21m6tAshTMAHxxWt3JGF-dVIsxPE8E2tRYi9bOQngbN-VQGxRGjpZNclZODLFBENLQj5EPXeFjUc-tKB_x00Mvp16ld6djJ8bQTfCvTHqHgkGvy8YDRHjG2e4rHv1LaW2tWEZa03_BN7qYjCsp24w=w1230-h526-no?authuser=1",
  "https://lh3.googleusercontent.com/vmyqPIjXjf29F9TAry2a62sY3VyZfuz2NF_sGhYghkomK-5_yHjVb9U5cn1S3B2i5hF2OidNr1K4Ewd-2f6rCY1k2zN9O0sGz-Z9rmxJDg3QW0rYGlKnOOn5iVqmHKt7IuKmLyr9MK9mUXT5S0VGY8aWqQGaNoizQDFZu_je-5vLXJsRD0Aux7xYmkw3j-GZuCXXxO4ps7yKcCBYSKfF3Vb7IU4ajnVHFUhu-TPSVS0fOs8UwdTOwB1_SfBgP1Lmk2NiplCNueES8w9x3WaltbLulbYR0p-zLJ_Y11SOP51a4zRo_9eEAZXJgG-0YitFduz39_-4DpugHK1qk3LoxLILLctxdlIayqplvJj5gowqxNIw4T91g7nsiHQTHdgOxH2eNKf_oedv9POsBBvNmoc0EoFgH932ugizzFb-uXzhaFPBTVBtdtqGNH_gSrvDa9lEXZB35CQo1Exlv2glGkIFrnpS_cxbVS6XCdMX7XUxZ5ZAi4fMlclR8RcCE7BT1tsk3OKhC69ZfFszGRrAvpLmdcTFuIvH4JTF4DqWFA_8uAwgZwLR6fQCcn6BqB8ZkDws1_TLu-yEjfMaEjTaQDKQOw7YAepfAyKbwH0IE4pJkUplX0Sg6MEumqQpiwNMrFZFMpS6Zuh2pOvAZLaVcx2VFmTzK9_PiocCTbE-NeDzNgN4RbpMBw377HPJrNDVfqGjK0WKJnByebMQmz4C-x7Sis76aEGk6RsDpY5NhxsYFETjEBQ-NtnRtq_BDbs078Olw0hUXnzWPd5rV9fNtLogG5LdEK6aQwm7WJUTrZqJbGNaHuXVGMnQ-O95fGWaaf-WmX6Ze5SFoqfr-kiH54S3I8NPejGEk0JG4k_IZnv4wpJUyJzXetV4bdPDkd5uxSr_tipCcz9OzNfBRGOsSUW1w2TFfriWYSBnJzwEg0zu_ScmhZ-sb-VVndRfxA4-vTPMwkhEWoWDPbvtwathv2mScEFOmn2kra4A-twFSGtPaQ=s649-no?authuser=1",
  "https://lh3.googleusercontent.com/zA4aIJ3I9YJZYK0HLBXtY6fVwEPqyj7sehE2XsykA357Mp9hZ2ZtdC9NOeYZL61vz8HaLtY-M9qLxutxA_y5531WLZzQ5anYHx3mWZqGNpSJhprwoauFcagd5ex_81rAzBj1bC4R3i1Gxv9IN9FgYc0rD2kMfhGBn9tLyP7_ZjZmJjYQLbhUsuIafQg9Quj-hpggI524DIhflXDqTmlLYcM6ROixWtiYC7-eGqoRKagGZRfL5T2St5qRRLIfZUQrbtwPsC6feY3cZASlsAVdIg6SDWXKgOFdU6aRR6lHzTlwC1YxmRBSZP31aoNcl2VashGyzv9_TLPr9JwM72VQgI4QE6XTW63JBLW_LsggiELaO-PTaFoRTaLh9TnmCV2ZYqUuwdUTb2Rthwf2-XAYH20hrDXPx02UAC2Udx8mr7TPED_TVH0yvz9d7CAk4bcKurBGXvtC8zVInzslhUvVln1jv9ypc8v4Lrz-edJhsjkFS--THuC5Gmq4C_o2Uihg-1s7m6vYFWjib4kAt6g9cnjihzvhpiyJwFqK3OUZtt47aH1N7Va38sMNFasT8hPKTFCn1hGz69plep9FNxDZTksBc7kCkrVfkKR8BuLdzP818SfLH2aZKZ92NOVoX4366y1dg8-CsnQqmFvQ1HM6YUEtlj9R4ufuhFJTiNBjmfjm4b1v0LQ-2dEeR3T6lg1J7aHhWN-9nFjgM6PiHKwKzUyRWwASBBPq_kWP9m8eDbQiy3yUkOS7h3v9WV7u08vXkCVbN8So3w0MKBjLwZkerfV5-T190gioWbCIn7Lt0IH_RYg6xqrFoVYqIjEGVzOMn6Bdyt2iGl9LnQ2pVCo621GVpCKYOgLalPuKkhEnyISKnuVKqPnWXLEs1NR9Jg0f82a7AhyJJ6VMvV4fzm92YVHKdYN6is_FfNeQqX99Eii3i1uaDr6LXqgRETs6tjDGcDuwudQOFtGvK0cTJTsKaG9cnZUmGJu9ND1A4bg3x4_AuA=w366-h649-no?authuser=1",
  "https://lh3.googleusercontent.com/7RbeObfILkUDy0Np2PpFd5TLBvBfqZfLuDpr9iLw-uLncCk7dYcFrSR2wBX1OM3DPo9MewpZyUt14qDUTjAR9HGay_Iw_thEv3f8mxbuJD19noJj6YHD39qjM7pevxjkpu2EymfbpUpV7iKqNNw7BpxS3zBj6RGjsN4ETkiWmUp-muWxKkR_DY9MvsRMUVUadwUFgEx8mBsZG-qSyjnOiiJwVWIy5rnCsf8cRiCrA1IrtRq1UV7sFzXVCmCKM5LulsKgLvc6EWl7h8BaJuN7n8sL5J4RhhcXr0uDSeEdPpgrLkKjfbFP3uz37izb-fmB5T9xwX4I8tvdV1ANlAUCLhbayM3KYt03gPYDuxISjG8hOWzKwC1T2tfIUb7siI_u7ig-a1Ha595Dd9ZDYozc61MjbTKNi3hS58x7zAiqFX2FJF3jxgukCJ6Uvd9gA80mOuOqO6ccDHvV8Ap706M_tycwiV7ClZvB_XWAKSqc8PWnEyqav-u1sdfYMV96w88J48ZKM7Y4Fbrt6E0f7TWX67xU4Om-_ff6uOG-fCt6S5vWoFnvc9d6VUhuse7QQ1hKX2p0Rz-ZSHEvvQO8wg0w_L3dyr0JJN9YNEfQFMC_Qb7cayBNhDBW3QmO96DzYTVHl8ET5c_rK-aQAQGpil0xkRQQARb2bf4VJdmj0MmNFVOfN7gl7Qk60Buk6r3V6HL6y4EidzHhfvRqOACpdR58v-a6nGneL-HnXWZ9rMr9tQC0Sujl40X1Dj3c6xTIdvauQOY0m_khcAYDofZXc42wqnZG9fikyawXDpSD4jxfv4AeVOZ-Z5Kav4HvPhyU5Z2mi8-bg-JLbLJUZ8U9nj4Ttf0E5gtMmcZda40hlpwOq-eQqsjfAHZyk50WWVWMqnZ6poo6V3d1D8N__QtpffXIYscQ69OQsWWGDkfPX7tUlyCgwm9QyJgEgzFWbatkXly2FDmSSYCWwgO_eqsm6DgolpNu7xBJmQxD7-44gCoDTd4aRQ=w487-h649-no?authuser=1",
  "https://lh3.googleusercontent.com/VMK229WKbu6E_s_FDV8cm7W6grKK1po26JWzyqH_7kS-xkeMLQdEm5bNZXK2QH3hqamxvI1SP5Kb-XGxyH5XKpwbhKA1QLjUCvSfhg1T1pAikQr09RqaDYlf4quuqn7Ynk5iGTBr_RGvjlNBMDQeE_j5yhyqb6YWDgFxFc8pPWD82MR-vemJp4GYn9uYv79DEReVvMhlXX6ZptluMGJ2SniuNHhsX7UCM6Xi1ejuwMf7N4iUdWUGsuydbxC58bSS9e-tJtPQEMVSq7d-HzYu4j2544A-PWQXEFER3V6KNGoO1iKd2vjm-tbzZ0GLuiz1Luz8_HXoVRrxswOZ7zs3ruNSd2yPjGG10PzhRgzRY0_s3Mtg1QmqKswbu_Mzu_CNl7j0RCLm50mCSnJ5b9Ohqba94k7ztK1lSaqvAmF-vhYZlb8bCw1maGOWLzBaCzrv4QqjO2_Ve6vcX8CHYvDuRsyzBlFhTM4eKsO1xv2MdyOjSfoFZfys6TSMjpDqlkeE81BtgE4Q26-gc8Os2wMlQNtZ7Guj4afxD4E3jWxIibU6mvLD0_APNAWmUwc7Fx5pArvL1JJ1gI6Vb4WbfxhHNlTB3jOks2C6nRvinZGgIWqiuIwle-fsLkg3q92NXl2G8qQA8-AKHo0oZygXJA34H5a5iFA9YugFjhACu5lTdUhsF5Y6KF1gGBjreg85ilazMte8Ijqi77T6EQaSWrH9GCLxreFUaTdTuZpTv0OMDA6q3Lp3dN6cleO2GrDflbEigfKf6VdTlxVTNM2Ipn6WPG3jsp_kdPPD6_9bkUoAdqnek9hLwv1YRYsl3xiy2EWTOrP2RYsmcl8MOQnX6HsgFo-w1atPr7SlwS-1WckN8gv4HBfynNq8mf1r9gHU7LH7CifqXnDIAgYl3U9JCpornLGBv2yUTpwmw0-eqLGrboKJV5zZ4vX-q2a-OGDCai1Lxk83uV5S7FbSjW-UR3n3FXCQ0DxkRzpYpmTAxf9x9SGX_Q=w487-h649-no?authuser=1",
  "https://lh3.googleusercontent.com/oHNzEGs3CWTbLfTFaSRADraYCi9Qu6ciEykIUIUZkU9SKUnGAKYBeKf4brX5nNBC0yQpZlnw30QFdweOozv8pt9ZJAyteJPL4kJc9iBCAj61U5NU4nPcwZLDu2E_l9tQ6Y8sdWxjbbM7DEIor2TkyXJAjN_Vk4W8wKYsSQvUhbfEzz5fgNwXHPz6I7dWu1Dm1b7_BkseJ73hsS1rnkYdkE0Ztbi_GsMiYHF6Bte9BTW466e0Hjfvwih7XXX9TikBqEiVHQZ9oTgDDVKVzfNiZM7I65DMN5fZD7B3tkyHt0rBTqjCstrLAEUKAAE3QgEZuNrTJ1S6HFI-qTL5yz2l3Rhz6_m7Gw9xV7CzTgGiEmRG1Nx_wljL1eTODcIIzqmCeV92hwwV5mWnf81TRHobK_GOXlh_axaeE81SXJOJzJ65NaeJDunOvTXNEdQU7C11S_pnLSZQTnI0yzF7WiQkYYnrD63z_DWZZvUai_xgeQh-et1Q1DRRF4aO-YrHRQHRnthUNrd8hipI26_KmDWXJUXfi_JdRFyKeQJBskK7p5TSTPi89OgjFxAS_D8zis3ggvFw0tJJqmHqRenqCdwJMNOJL-x5pOOi38mchN9EYQektwvMUMAvC8EDY4Kq2x5eKmvjmAPjcUdRkuIsM7yv8sNlWjI08yfegCcL0vUh6jRmTW2tMIvBBDzc1cTluji868Gwh0v43pzUTlYrbZbUnsL7azEEqESKUx-qlcxOKntP0OUxQBiosewm5XSdww-NH8BCSzVUHhiuW8RyUqNcChtSqW68eO5rF0N5LG4J7fZ7YcdUgay_qzhhk19hp-4yKuKaBjYeb_jRMuJMN7kcJdmxKjAGQp6wya_SViLYTyUbuhRGE7NOSIAZczJrUGLEHT3flOvI78ULWGvW88WI6-56tI9Ax2r5ndFwGfp37Vq1Q-KLyXShOTnjaYeqSBOWU6fz4WSTvccnK_iSh_0ybWIFgRGVZrwidsBSZrpY_hmmvg=w487-h649-no?authuser=1",
  'https://lh3.googleusercontent.com/Tj92_kfU-dtgyKe4ZaTDsc-klQPa5lAQ7c3a0dOj9zBz21UGBeqNJs9aKCPniC3L6EenstV2pgtnfqlhQ9UanLCPyt0pEjd2Kaz313Rk0gdZ9cXIHbrU-dZtfJnsu2yuwPF2c0AXBwP8L-InIL5YqacwwaC6gJ3KjxURBXfpOq0bxsCWJT4KNvghYav-hf0cuDRA5tp6JD3CsmrNJFadQiN-rB22gZ-uK6LoUA-6rD8e9_uyfFQGX67dQ-CAqWLWQ5QX9QqdriB30QYWE3omkOdcH2kMuNjPZYRNJgsoFbMcNar2vz23n1g77nsRw_Fbhx15IxrbzPZmFoVky8h3ZCSIdtR-Sj9SPx-kYlajjTXKaIL8ezIxDan3AQcF5egAlaT_eNmB-DacpQBnVmcEk3AZZNsThc3O-C3-gKiZXL8dP4tn-QRy9ILqb9ltUIZhZpNaXxtZSB1wWSBRQoFvTyJuQFUbowFHi2eh3jvFSUoE6Pan-2lAwVsQ5keMJ3HsDASfp2KKo0XTm691d-4vf4DB_asMVBV3WkwZhuVyzFwqnWyuFnUA9-_YQ3eVfxsys1X_Q92U9YTuDPNRanGU9o1adsQuCkXYUKYY3qH4kPlLAKyDyRkVATAj3LXyLjaZpuge3r-agyJzDfJV-SDsn07StlEkGnI7PVbpHzV8hCSYaBB_7GLLzOW9B0L87jE_kci5vXl02PYuVk74FKwMbe9eHfsg2wHw-_AxOWHnCTIRID6zFLB2fyJkCj3azJ_WGLYA-_351G3E1lSgJSX4lrNssoHjwdcQrw7dq70YBFCad3liZKdbFjTCOCbBF6VlqGA6yOjzaLRGPbBB6sfJpTxnULvztmqNI9l6b5mWwcz_gjlyQ3mXlzDulz8WlIqiyOQE8Kg0qPNSLZcblns6K1d7M-WjG2D-ylX_dWwfExLTu6vlNjyGXlf5V1ZQNj2-yngb7Xr9jX99EpneKqQLkTaZPXbXR8yZqZrDBTzoMZT87w=w866-h649-no?authuser=1',
  'https://lh3.googleusercontent.com/EiJwWByA1emmnstrmoOK9Y7fPsEmKG1FKUgxvBjDbCjctfHWNCDF8-h03nLv4fY9sQLPhfca7oLJXD4xC-XKSh3r4f2LS3O5VHCqR-5e1Hvm7eBy48boWApfXwOTu1WJZfPX5Lz7lrVO_vgrnk7PDMg1ML-h48lPqsVFajmbt-pihRW62aJr_5y0Q4k2sQGEy7bCMDl8b9XurcdgSsyRqKtWuoPkj1QxFwFZyIb7V-JWRXhp8OpeaAATrx_iD3K0oCcAQ5mE_XVeUHAMGzRnuxtD1DRzvT8V1UkCe59vODXn-2GJWXpVBL66mGtm3vDMeHrUQ472khu9sRb9TT4iJeUs_HtpjhdeiPcJrHwllM5VmtSAWuNoaGtJcGd-0jL3kV6ZyFoYLzqD0iNN3zAljQ7wHgttfELUqIxHNTPOkTTb3XUk9i3VSVvL4vu--lZfR4sVOgqyrXKE3wQfJ85Mo0TTq3cRWSjB-2_Z8gVGk66CEZHZmut0eZ6VeGs1z5MoFSezHBEnSSS5jDUms2JQlpIO0pqaRjrq4tIUa7QOP2h1NCNIvCsARhQL_MIpSRFWkOHPFckKD-m-F6zEV2A4IDLWv89jiLmvjWxC-_9vZ3VrbuEENKpLCRlgW1HCz7hHsmYb7Nd7Kb7QtGPrMKDvnM4nvai5kmbDz51omo70cZmBWiVtQ5ymg50tozSxg92xZTERz3SIJj0Q953wObYt3vTWfCiGCKmuR790NRLogoQDPj3zdJSs3ZX8TQHanQC6VPZbmgC0-MQ7kVXXt8vsHpQ60xJRhjifIDsdNouJ0WyWPjUYEAvF8KeYHgsYnK5ncoOpuMb3EakwuRNPCvBgZpZ9eTskRqdIa0tqCHeUA5zNTSd6LtDhRyK0KDVG-ITvO9JoJA_UU4WPEKIQrXhtLjEpuUXjStSivig6FEcLwhtww8gao6yPBcu4s2QUhud3OY15Qhro3M5hAAdR847YpJQcLJQjq07vKdsmTwyFKEPeEQ=w487-h649-no?authuser=1',
  'https://lh3.googleusercontent.com/jnS9CGfcsvkCms_kyBKnIAOQMGeDqTwoZHtiX7x8iVlRlRMMLCp9iqWytva35M06ei9fdMnWA0rqGPhO5i9-qzNTUMHFDFXu_RE_D4PqZJ-VtvLD1GCbRif1iTrwdwwTVJYiS6CEorxJltGsJmhQW94TDbsj4Om5QD_Bg3Aooa_T3N3CAzNwVGS2evW2m7HVLAyDfDufyTcnHt9pH5bO4jQ79jgHc50fCcefrdZ_5Y-d7P-XqDubUU3WfZMU9QBBfFtgvYmCV3Sq_DHgtK_NrBzlr1UV0F8bnxwbV4cHCKL3ro2Yz1Zitz_KtdO3ZXIMFEl3ol8VHrAcPtVQn6rtkIFdEZSMrc2b1D-yRJ7RRBmJkoe-ftKiLP1Wk1avNryxBTAbqZ_kSqjyyvHASbS7-jZC0wVEnbyrKwtnJ2PQWT4-Q8LdkEAdu4LDjz9QUbw8e3m9RMt5vPynxObO6iw7-ERS8tWoFyeA09on8F4z3wtSv7IBPU645DTVFG2HfrIv4eeSL_WkPP3xzm9Xy5uJKdwrP9HDV0bc35oKKthc0n5sJDA6IVKqeWAU0u9aO6F6uH4-rxHE6Gs0_e357edIyDu4WQ1aow77ht8o0fIElvFMY3k7OGhRyDXmjCqEMWLLQrd1AGGaR9NOgBBC0gyeCvvbQF3inPKeCi3_LM78LQiV-pRdxnoxB3C5lPx6Vw-M4M12xzcNnrFqWzYCvgynbAb3uX38v7mGKBp3nbmbB5bGcQn5sDZn_D77tB03aCD7egz9KKEZZ8ac3E6Uoc4nfdLnPbWvVWpVGhXmP14tHUYHYABRn45DZFiCzSRyZBJ4KqLQWRTOZvT_ABjOBZZTlFRgUkrvUKh2HNYRNpthLz-G8-hLFZUVMXR9KwC-DhET8_7iMGZuIejWysgAjM_xYBMZLqoKiquzOlDFX1oLIgAgYcNW94AzJssrGIuvsJUgB8fM3ZdUupn7I3CgkNY0hC4gftcPtf7TUotJCOAfXP-DcA=w487-h649-no?authuser=1',
  
];

export function Sena() {
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
              Balneario tradicional de Timon, fundado pelo Sr. Sena, e que hoje
              é administrado pelo filho.
            </Text>
            <Text style={styles.textoModal}>
              Com água corrente geladinha, um local agradável para estar com a
              familia e amigos para uma tarde relaxante.
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
                navigation.navigate("RotaSena") || setAlerta(false)
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
          <Text style={styles.title1}>SENA BRASIL</Text>

          <View>
            <Text style={styles.middle}>⬤ Comida no local;</Text>
            <Text style={styles.middle}>⬤ Piscina;</Text>
            <Text style={styles.middle}>⬤ Riacho;</Text>
            <Text style={styles.middle}>⬤ Funcionamento: </Text>
            <Text style={styles.middle}>Sábado e Domingo</Text>

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
                    "https://www.instagram.com/senabrasil_balnear/"
                  )
                }
              >
                <Text style={styles.link}>@senabrasil_balnear</Text>
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
                    "https://www.facebook.com/BalnearioSennaBrasil/"
                  )
                }
              >
                <Text style={styles.link}>Balneario SENNA Brasil</Text>
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
    marginVertical: 250,
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
