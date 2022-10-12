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
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const height = width * 0.9;

const imagens = [
  "https://lh3.googleusercontent.com/Zam7exDMWGauKzZuscSR9ZACecz-P-LNoZpSHmI6xIGhEvOc21T859WCnb8PwFlCH1sLwWjVNoYELGqh7-2UqlgLQt_mcuCv5w8-TjL1WIIZrYBFjMu99nSgts7RTdpUH_8UTeON4P_lREbIudJ_uNia7cWKRxY2n8CveI8o8LqUsRR0sAjnCF0GuXADpRW3e2NkMTNFBDG-q2Vhf6-2KGpGLV0H3BHqjVsegPKJ-PMGDcf736GpBMD2rPsAi-nYRcpb4rsZlVKEwRpUyic0Fse_NebLPDA4f-feLL5z9vouP3Gl_sB0Ary4dz7t8UrqXDvAnVQZ4OBEypVGT1vlBelv3c6Pw31MRLJwy8PmwARhd-2eHoLgz1NDDo-rDsODga_pEpwTxvKs1oEQoECitFjAApvawGWOXQ5VNkKnr1S3R21XvkXXC4f9_GDHJp7EMplp5JgbiipkKXCHzOh2FGZSi5PKszY8CtCjoK5vbDuUH2Bl4GEFk5THzA-HFwcRzLuhGLsIZulqUN5-74efIG6jvqMFKI-09SZs5Z8ZGcSIfrsH_tQkcJEuU19Mby53uD6JUvGEUvcoL95-c5JmurhOtJpCSwQNJCkr7f2FXwk77uXuWoptxRo1WNJULx0EiRQlgcPMQ1aYg1sG6w49pCbSBPdgOfOD0Olk9nM3j6ouky_nI4Wpu_gRsrf5c3h8CBAiNBJI7y8fJfwEUueueNa4x7zQy477Qs6hqDjKOTE8gf857nsslnS1RaruUD_uVHo6sly6-zn2ITFnxhOMwVBmr2KjtISynX-KtLasf361P5fCQ3c8blbPDVFcJDktL5xQt4nq9MD4MhvLURWK49Q0wrciJ9kxAnoJJH1oTObkUxLlEPGJBj6I1d82fQcCqhIqYIw2w4t3c3cObWaoFdvE88vNvbFnY88WJJSROD17QBNLqP88faD5JNJrphGPQDulJlkuLov99RDpXM6dVXSHCFUwF-3npfqzT9qMJfZdsME=w600-h400-no?authuser=1",
  "https://lh3.googleusercontent.com/bSEeZDv60x2iZaZviJRS8SnxL6n0mZq9ID5lIGarV3Ip1_wXXA1ptQVZMC8Wl9v9nGH5hBA0V5BfsksPBswAfaxYsyVO5Gg8ax_nn4gA767fUtBIsX-HmmoNMghldwYoTO0bJpbBJZSOGFG2qE0nH90-_S8kSWrFqmCV9aNyC1nExXMGkWt9-TpUHBKXTxrrAdycsk-juI9k77gCBSMAiG7iR8bMP2Rq4bLQAeOK0NsxZ1pHb004G9h5QWOV8iB3xsbG4-vVF5eGXHCCHBX-YB0poKS3YjfPe0lHbaPQ1axzN3Ei1YCon2GSUeH33o0To4yUaLvVO97O3WkFMCyt6q_ZhcPfUbA2JP94wNXtUDNw95mRNOtQYgcrOcvUB9Vh8yhoTICBXatdCyKCUPab0IcVVYI6j2sWD_pkRmJ1yXwXYIPbuR8GzUK97QHDY-gdHmBJuoyaosoH8TgwI38R1XuOO3XhkfHand-zufyycYdBRqS3d4RiaoXQC8ZjxcULquXrayrfqOZlEPhEiwnpBkBFWo38NcquGcmjrv903eZ6885G08wNtXvNpZ7lOXy-AQDsPpz8um7jBS025LNNYAWEjA7HcQIPihIvbMiH0OHzwRzhrVWRdKYKpYDwm_5Tu998kPlGdgbilnG8FDANu0IHgEcbuYf7yZ4RjrpGwbeNHGo7S63C6nPEwnjx3JLzN7QA8Q0ZhGnItLBB0x6u_y2rtSNCnQg36EqeVJ5zL3FtFvK6Da92cu1qJaasyD3uECVsp2qS-ofJmFoEs7MM0KIui7Bnwqz81wFGiZb54ipdOC7wxo73pxkiT4SuBhF2lyfBcdqffe2TSQHFmTNW7L60awv43PU3UY5TtW0vl2z1fnhiuHKxv2m7RzbLCE0R8vZCJxRY-4V_o4qTKI7nUPj52WKx_wUr93igkcAVRKOY_8uwOlWVkkTHdHoYedbOJjjHxgMmlo3PowMhPhQ2wF58ajqWxViaglitiP8GW3qXYs0=w474-h592-no?authuser=1",
  "https://lh3.googleusercontent.com/LBV7A131NtPpaE7nO7Mpd55lN_gVQ431s6Rtkcp2mr3coY_DeFdBEIUBY7BOhgLLlo0chG6RjTgqL399nHZxpsHUr2al6AToOj71QQpDMLp9Fq62ocndnQVXslCuEQrG8mztmZ3w9NHBs6JklqUu-OZi-QXIoKc2mnEJZKDigww4XiZTlTuWBBM1fupF6MHvgNkfdBL_WAlSAavnUUWX37ZIiWje-4699L0KFwGwndQXaCaJYWbDNeAt9uPQrk6N_v0pjuU8-dQEwxROLzXBfgWfINvi9jEbzxLMqh71kwKo-esbawXo6RdHqLQGEQKgU2X4B2gTC5g6bNCntS7FfkxnUvA-oVks5Xq3RvDQ4uDmC4sywOMJj69Q9XaYL0PmXdG4vk3IrdQ6EAUs8wIeY60dFypgxIrnn1Ayjhdox5gFR182-3jvTaPQzjkB9QN9_gYG4GK9qZDzyb3qRafku0oJZQrQxrKYwNPZlatsz-YKARGoJors36Pv6oOdXhy8C-40DdNfk2_T0o3_Wx9X_1fsfyIwAzshu1eu9qWxfblqMGfrUOdeIp2xSKoOdG4DfZvnZECFDq60XSxoivfoMP12-YVPQAO51lUNy9sVF472Im6Lv_KN6SkQ6BeMbYcx_iqEgNkMrFvpJ0vnpmbN0GVDU_MgiqJj7QF_SFWmqJWFfEPvjMfYMlFgshPfNTdPnm0wwekIw8udUMuonrA8r-qcDL-_82ORxS6Kh0UW82gZG1mYI8HNTD2f1RQYxama2rxg4lALKAVGhkq2oWPeK_NouJMrAZDGqyHI1ofVSbr352Lve4QXM9rAv1sLmNR60yetshy9TiJt0ceL-V3PJ8PVT8zcQyA9xa5YLxg5-kkSUzoR5gpqRkHGIKVWasjA_sfenu63ObQIHlNZr1pslBsziZQWh5fLm_EL0uwlJPo9EoP5sWLQYb5ZLvvVzCZvcxvtgueuQssV2r25tregxzHmXIvyNIuqlp6PjZa90H23o2U=w474-h592-no?authuser=1",
  "https://lh3.googleusercontent.com/Cz9K30KaYlz2aLwyVgfv2lMeeoG1PzEIL6g-S35lXY-MljCELm3ruH4uVtmmH2FrNZnCKpBJfM7QEqb9M8wjDtZE_MnHrxNFZ4KDb5IGQeX5OINh-JmUP_NI89xQvotrm_Ho0B0As9tTMmszr3VKUUP5Fmyqk9OejDKadrvzPo2solzk-spEhAenTpNr5xIMwplD48HAnr06gF_DE-2By1syB921I_3QJe9g89YAgSHjN2zb2NewSybe6dUdlVh8LkzjkJaL1Z4X1z-MNcW0R5lUASJ08nTVisGt0TkaJeyERZtsM9XmDL-GL7YJHboymUjZG-3DWL2M5ATMPCCTQAL-YhUUEk2UDPSBWogogoGFSAvmu4Apiro4aLc2bX69OjSknIbpEthLVqhZAugAMuKzvE3yzZNKpTgSSVslOj3EZcGkpxNz6TNgWzrDSz-90b_jH_ydKRY8ramzIYCJzIvJB7MrLgwpUNcv_RC2n25gizF9OoyXYQEh1XanlcGuU_T8NJa7xbWl7pPjM4K6W_WX70CFMmoQROZerdnHEjYruT8EGyABtpPrb73iN2MlNSF4aYHV8wGOhGNR9o--yBtlsoTImIL44oWPW8isGrFOuen1rIJtq043sBDwaiWU1FcLydZIIBuPLsAE_va2EdOPAsfLYfSzY-2CoyRWuA3IHgNPkrwrZ4AQlTfUW5alAbrxxWuhupp9REuywJh-jig0bSVJRjH6zf7v63S-snBH4hz297UvsxoxEMvXkl2PGdiduz4OiQitOw5Bote0dwUZFnHizp9oejfYMn0sSdvisSRVJC6XcnXv_U2m6k47qrpSnbjp755IrCU-S3BNhw1qj-Bl8lcJ9dL8l-NDqAi-fQOjSgWPDwYwos13fmrRpOA3258vPduAFgkkScljzHYzejrAN5ES9kQWzGj-w_xfMTbc7opAOia6d8eAqXQLpXBn7iNprBAwglF4fhJPHhCIJpeC5yH3IiFwxVZl5al3DN0=w474-h592-no?authuser=1",
  "https://lh3.googleusercontent.com/VGiVoJyKswJQ5Rq3GGIwB7YURiExJ6taho0Q2v3-Vw3xYFGHXF8NOXJKngKSxnUw8pO_JEahuaYEVzCiKvfc2mZsaJ8DHmYkl3ZLLZ6Vx8DmaDwkGJsFFf7EIz65vu7q-5fwplK1Vi_h1mdAdOrAPhxH0Ym4lmYpJBzVdIhitCHl1i55mHFKEdXWCqMbzJgrAjmrdPlAb9GmUtl_HgM4yT65hOleD7Hd_YtY_aUPwlviFfeTZuBIpQyB_QtE7j9cF4S7McF__6QGRRtdIHpAGeieIN65ZRBPpf-bUopK7RhF8jYG2NQCpzV_DQCit1qt51BRr9OXCw2VzarEvrxA863OVUyXY0jOoKO9tbFEPNzw2sde6Q7i7W4v0y1t39KcvWiIMHHZGuhseZd8g3M2bwgB_l5C8uqz4XTIaapgrOTvlJ7J5Y9zpyxg-EJuheZamCezoG41tr3T6tSAo4UK08vloCDtdkKYsNGejHYQewuwQuWS4-6e2klTVUb7Gph_oEOgW49ufrc_fq6AfZ_HZrukvpYbkZcmr9TIvAnGbmHm9W9wG6HdhZWdux_8-1QcDroOEhd2jCXJKKqnnmN2Ofe94EPjZycOI6xfGvuqpR-hcDQRtboKkLk8dnyLUbYZtx23uD8WWUqbHxYPYLegEvxe-Jt_VcjR4nzlKj1i9CylMPery6y6tbAy4ijXs8txKk4r_e7_vgSw99K6GTSkNiKSdop9ALb3e6k7MviDeisJuflSrWdUjTWl2MiquFKigZf9vDOxFe-He27GWjpYz5AbgJtnnh6Jw8BDto8l1LJyvWglpwOcFyEI6JNOvJjAD1ijBUjuh7rWWiZJyeFTtDAs3nf-lDrMu7pUGTokzBv6zB1w050LbnOPvtVDhq1GEst1lj3hnXCAWw7Pscl86uSSDJncNpmCEfZpViQzOgBZcu1i1ogCtCC8RA8UQ1zuj7DrhwlU8MkuBZafGK7UvvnY76VwAEd8j_pEMpk0bw9sUIA=w474-h592-no?authuser=1",
  "https://lh3.googleusercontent.com/PYfNkTC6SxypQqf0fwdaXOg1W8_eYRQ1inYOvQY-v4OXARvQOxA9BcBDqHwScWD_8te9wehtNphZ0sL_eoCCQZ_whUSI07sFC9EHutwxSSyrU5kZJ4bR1tcLWoq1-cjHicVPsSIOEdacbo2EE6_I553TnUHSgGuoTGCkoK8XRnHsFIMdb-Z9F3wMxzjn729WZb7r1FsDYg_JqWWHLE8FEX2dlhHdOxLK9rQlsOsC6FfJGgV5Ik7OQMjGXjdnEv65-7sVcqdluKkpi3Z1ihko9TamYHoSAdwP-ZsnGGyHnt9fdn93n_V40n8qB-nh_xphVTy4lQm47g96xmbTvqQvgDn46VUDQZde5A1ge8V8eekBmsX-kkpLAa1lY_iVsHbMlLTnUWjy_FBLFkJlK6wggF3GphgFZ0UGRfUU6z4_seZmHdoGwbinPo5lVSfdsKBBK6syAGeUWf6m4sY3HEQB-rIBhgqQjGYYmctGi1TKFAaVkod7HlxojQqsSAjF_w6r49v9VJoPsWZ2GbVJUt69kZvp_IMshaJac0kMlOZOPE7w_Of-fTYU8h0uM63mlNg9kSHMi0sbIjKkli5BkDLUMB-KipzMKt--npdLrs5mcroC38530jJlrpIHNDCarJozk5de8W3-OpKZdLzCgewN7j_3DpSSZRKD3hiW-7G94ji2TBQhXUPbCisOit0rJv8iNUNEH1Mg159eWTjmH36tXVYCipgdl2GDeF9FCCj0T5WFUjjtuu7BjyydCNUXTxTerNwwmRbFXYf6Rm3jIBtZfX4qC38ya2oGDMuOZhkw0OFMX-3nV5XjSI_JuBWbF26Zj5GyZuZIuhReqU9a_WoHYzgjFbEiEIplTuochgOEA6qluNpd28GkTy7V-9H0kAKDXvEeMbFqp5XcH2e-4Z-OJtcc3uki0Mtd1A04ymU8PE1kG_eR2_C2L6ahXoVlH0Z4lmg8PGmpsenLZmqlI9IZsxnBSZ1n2i9AWxe9Vcf5q9sCMHM=w474-h592-no?authuser=1",
  "https://lh3.googleusercontent.com/SKf7XrWUwgF8qR0Ntaj2d3bghDewbevFVQmKXkk3Fybj5rCupq_7e7eMc6ej4JyIqtH9kr6_-3l0xhZcSpn3A8Fe982Cw3IQU-n8taT48HcIOhjM6VF55NN_Kbg-ZSclYHFtNm-VEOV2kGXOxQpTEqJf-Iv3W3GllvB9McCJjc8SpmlcKPeYXbXknkmjz1fWqdv4LHR0mGlq99kR0R8JYN9H_SQFLaaFLY9xRuWbl2biGVtEfiFT2HHHEl1cPOrsRSqo89ow3Md7VztrgNY5-uqDsmXhxT8BdM5efIfgTnA3Myk4e6SitDXvklJ0Eocf8CqsZ37ZbLcL1WBjqNURVhBuob3WS9UB64HeAfB8TJSMsPIJUowkO3tWx7yxfCvXBpecOxPyzaLF7hIJIs_XbEwq_3MyyTqQyqnk5mGXpPvH_GrZUoy6F-hAGZmlv2nSDKAhin0Mmd8O6zkHL3zlXv2AFx3P5vKpX4mnY5UgMZmMzkl17lF8VkOoml5sh2FT5lN1GMe8A0hVOw4rKVJqz_Y_B620mqM_Y6vzPT3_G2YhAj60rF4aslDmNPwRFloMKVnE31hhiPh9chQEbQQc7KbR3yRT0JwkD1dwar5iIaF5Av3LjixcYfvrBSIREfI10NmHQ3VJY8_XD63kqq91UNGqzd0iD0GyUxGIqtgpiGyXcDTFTfz4v_J2yklgAz-8HaJT8z_w7SMXYaj1OqTwnNsNcQXGY_h-rDAor57GM2QDQWpeWrnhUJNXqEgPBqcdn7ptntk7XrqQzXrPC32hjgxnOjieH3cPvpVeKJhWS4itwgGFRKMpkWJh1O-88G7b6NEhe29nKcxO_DNhwFbsDYymnca-paVcW4x72jE7ygmtoxSQGIZGZX_3kKCpjpNGXUHZTXZt8gEttVjNvCVK6GP9emzD86mCAWvicuQlqnTwANL8O09wpfZ6hT5-K1XyiB8gFigsgxc_8f0WIqMsecmrpd6tyniDjsuVz9pGkNs9UcE=w796-h592-no?authuser=1",
  "https://lh3.googleusercontent.com/3-UI_xLHK7YrBgNnMa7bo3V5YrTOsHBd_JugNdoB0AOX6AR5UsgJvfD-RmqqXAcd3CNVceqObVUYjKNnkZGD0bMwdeoU-B2rQK_0vKzFvJUudQO2ZOLhBNHDf7GJeRyoKd2QyA_jboR9c_obdtBtjYzQ3nNCulWTRMGLXFQEM93JJKuGcDVgVOe-o2-L4EfE7pb8UMTo13tBVBdwNS2VtGx8MlgBkwjRKc1oJOsH-6r3rIADPs7_tk6-K8D8h_vnT9HrC15m0C0yLOfGlRvoS7KFQosuyeQl2N6guEqI_rKuQIwvkiScfLjx4pPEYwc8u6v2EZat05JY0QyrBxZf3srvgg7FqeJ9J277gZtGWOLCKxLi5TiebHjuFD5A-o2aKx4AM_l3W7mIClzxeJdj34xUCuSzOWWg3xRJlLrwJsu3DkkkazmY0ZI7VkDhhWpr8fRvD7wFoFmjSqdaxEbxK0har5ZJ8yUrN2971Hcwe8fzMXAazf93iG9Flhq4mGojB-L3J1dTFafAIjW6d9eyaU5mdX9pgJOOR35MqSdtzb1vwywy4I4-_-rCG9tXnqCg171aS-eKlAyQHc2HoaeR9BZNd526MKX-FZyyCDkMRMD3C3lZDi8bbn51CoT2U-zatzYzvS5F2gJ3eYlhzYaCLwoo8PvGRE0DFAewZ_O1FFki7y0_8zQU4rovvPWDG9DnK29bOm4Uh_cpAegORUSG6dw_XRBLowuVHiOmRWH4WAgbbLB1BIqwdM9nd0U4xf0WNxbjueTygMJ9q8c8Ll2bliVhAe24Ouea9NxAiRJ0E_SZRXvEfftP8QX_LU8LAe65cAbphrjCLW8qiSowqwoB3qCy1w3ylyjgt4HDai-kBN2lws4Gkva5gS32Lk8Q2pw8weuxDoFJi4y4Ru58lwBH11seMCWcrK0ABVGNZY108IZPtu3RzfYsfuzHEHr-Wo5jTn8XsW1zjv0usR65_c_q90cGiGJG6o8y5VW7Zq294_aAYZs=w474-h592-no?authuser=1",
  "https://lh3.googleusercontent.com/Uns_GjWe2PkcMydPv3z_uDpbScy2R8K3WGXW-4wfP5yHAW1wZwd1QT1dtRwW3kI48RNXV5qIc9Aog5viYNKGkiVw2lptF4U4EK0o-Hnoy9X95tOa5MLjYvwU8WIuIuDqJ51OUk8EoVLMHBCM3SB-H3z4xI7sP0zow1DuHbCwWU6G37LcW1A1qYXGGl3_jkWhErqm6hCS9R0n40taBEAcVSuEDNOobJv_6HmhbBygOe_u33BOvxAn8pdQljGWfThL8_X7dI08ReaKILiR4kRy3L5T5bClpfceIhsBeioIJTH3x_wqisYvbA5iLt7kvZimvZhcZFl6B2mm4ymMpNm3Dp6P4PeVwER4NR_l8OYgTvucPTJ84NEVpQBr_VhO8geJS4AJIEzY3pGpIw26nQqiE0s82m2lLN6xllMtC2GcSYSpSwMIit64JFM-dlZrDHz9swelA5TqUboAHQ4qXIaV7Jw8SSklhS5jJoe7AjFP9Eu56eyWPkLBHFU4BPJgxdHe6Cf0cKeWl4q8ikN3uDgObOOEtS9dPZhQeNmjzL4Adj2NJrKmTf5t5fehGiaNOwvhzqfNSp0smA88iKFkn-4mYIYgxkSe_eDXJlaldBzPhJc10EziT1f6gAZ1OwXL5j_ubL8jnufBVj0HhsNfJka05Y7RufUtZ9SyiGOVMuaTcGIHvt5MJMbAEadMaRTOfk7pwmmkYUV-0I4XLtZdbjaiBXHwGEOEpgIutJjxevPajzR9xrOl_gWdtDqDkGrb8sN4Xk_8qtFfQ_K7Ws2zTdUOzLe5-TQ8mtNLDLGhgsRP8CARLD9qvaAgpwwGxxMah_SP3Xoyh9yI2zweCgWLLZNT37fW7_ZOQjuy4d9Jk4gToHJ8Wu26hx7ZDHex86k4KK0E3MsaMYLZZJIe3g0Uz34esELshj0go8U4BQZOcgO3ErD9SXC2Nqe-i5UmOtrnrkGoXnkk2dBCm4PtBDj6UOkoEGk2DPAT5uO-VrZS3e1tZ3saaSg=w474-h592-no?authuser=1",
  'https://lh3.googleusercontent.com/qiMnpP8zXq2hkdEJEwLWmq7xccHKCmG-qmPYuxRS-UYR-xYQXAaNn0e7GQwRzSvVbFBznvnjb8MtLO_xFClHJoUR0aTAMChGqiw2jnyRqTl1yrYgSrL6Bm2JLsaLiB8L3wyMcSd8nOeQtSfgv5tT6cx4ZWuPalmER1-vgpxLOMxwHzYDxDIFfQdpfAOroYRnD3uey7y3J8SYGTu7RrgxT7D0nGgmF_iHqZbQdL5Wc8mCUBkTrOhNPZfQ0CHHr3EUbOZU5wjuqPCkE0DBmyqUnPeP6BpuVVxYLBKb0xbcp-7x_yMaU6EnSRcI9B-wy2H9Rd240Fwb7NaNkjRxcucVoGojC1hKxy7SRrjK-1AWUO2ut4Hklrdk4_kFL_L73dQHrSHsz3I1axTBV7sP5K-3vzvRSNVdGzMvoQPr9G6U2g-iA6aaWREsjpdMjtJHBng86hBZcoDtsjdNuxTT6LRfBbMX5OZt9yRKDRQjdiQVO8Ipnw-9FHANYI6b0M09GVw40_P-gCvIpxMdTQuYi-tOoivo6hJ9DEoEAsjY0Od9aHR2wOowMC-yNxcl3R9rxdKeeUdMACxgJNYpr0hFWYE7cuR7_jIZWLPIca3CVIsn7YKUHScWrGy-rPs-msWa59IhFjncrvbWLfBnSwEu00nlkYgmejimjr4zHkC5BJh1VMw3q6uem7ewb5HVqnS5gVrewVXah2JqBtHC-o-4t7F_5aORgEvpcDixdBchwUQMaHplvJFTCuIGKoJCtvG3YbH6Wryqf7ys2Gb3Oy1m8CfBYpAyRwrn-fn5xVVqscMjrVhzIYOomlrE5_pZUHPmp2Hr_OlvhSlGGDAWZrT2q9wotpZH9yiq7wZxBDGi2TNWK5Z2t8RmCnEU2ef4IQ1FSgq4hU5erHlrr8AcgonPTU3Rus84EXdCR6GbMy3w00LPUi7a8gzI3g6NC1tiPpE3Eiv4xQrStO2HL5-jYj0brPDn1TnT_8xd4YhQanoapN50ZWxRJ5E=w474-h592-no?authuser=1',
  'https://lh3.googleusercontent.com/_xzk0jIdGPXqAb22LD7bRYV5s0DPknctkO-f00s2PE1K80Ia-7b_jh0rXYly7OZTqHtkRolI6h9WA5PXA5gy7XBJxPjYIEBNz1bAgtASONUk721LHNf0JEwd0RCpRwRU87vRknkp0zIm9p8BWmhG9MHYswwi9DkxQZgrgtWZ1y02SIf-j9fIVdJCILqxo5ZVFlgGrCnH-FZUxbQ2Zsj2SWaun87o74ajkz4KotOPxrcBdbAoVZ4oYtSRmo_QtDumdHUj6J1iqPvs8ntVbXmfhOcSLeoFeyBVN_vE9K5KEGy3c8JUZFSuzlQVN3G4ZzjGo0aw-oucLTuTZBe6viXlnaX-MtWDGL7pFK8vEdhja4usucqkqXH9QUcXFbXa2Oo-asVMFQ6KkZUGtR995-cCQV_W4YbgyZcwpPIwY5F9mj52pQmhVJCgtLeaZDv86xm1xhfGnYfbkwMxoEmRMO_mw6q60uxZyThjvPUPdmg8boSryhBKIDZ6mUJU8WaQKvp772UPMFdcitaWY1b6c3-StmmJZNGSmBSjAYPdrIWnBqW51fpaDtaZHJvE0Eg3_zRJZxIuBscp659x1Ny9qKfBzVmbcQ6RYsVan1fQfFaMCOk_81LSvzUi2Pqm6U3sjoX4Q7j5plmdEfNa7i_rlVtpoT2ao0ZtDBi32b4cUUQ551AClY2Qv57ACTZpgQOUQgFAKR0WYOyWwpAjmiPxe0RpI3ouaPPwq_T68IkTJqCdqGiABIuR04_fpaNR_3LQQCgInTzgzBSi3nSLkKvlMZfZI2L0A4NuyIxO8G3iwpkJ1KBthsvKaG47P6l5l8xBBd-ddX_CwrAzN63Lywc7Q0YxLtslH3AxVoJiVTzUymm3eoMhKGTySZT5XifEgO7cVuexNDyLxe37G_q5vAJO6ooPL7s3fXj4s6yT3ev7cuwz080kvzSh5JGRX9gfWBi4dROB3yBWWGZJnBmAzEd4-KIYafY9bmzYUeyv7nLv0qCvovtupRU=w474-h592-no?authuser=1',
  'https://lh3.googleusercontent.com/h54gboEIjCpWqv_6NhnFNTVJDRx7wtWLgayAHz-EtMP0BXUAOpiyQ34_N2Ubu_yESiTc8jT-jUHAtIpZu-_nGtXTP9oIrApykW_dcpUdB7s_5y_X6J4nL03RLGhcvvn4zuJJ_vk-SEenDme2dUnpSFkEpcU-1zUsjdnIgY7iFRj9XhsVCTTFKr0Zx2fGNjKzUJZqkPBcD9VTzC6pEyJpUI-DsD6r3BGOJzzL2kVMrajiMQkhb44z0kqxomKvObalcA5xmvZ-YnfSTWxeDcwp4Znjwpwy1cz1XKMhjCtuKsZMJY8HJlsnxB2pJ3E9n2nQNZFC9nv-GZUmcAXuJpuEl8E4kZVZvmAC2BB9OlX0LK9gAQEFICc7S-3t4gjLbZh1oAN17s0TgIyXcFk4HLq4K1ggli0q1Lb6bReyVOaGUvYkAwHeI0bOWCNOryJjgg0tc_RPrWhV_50N-ZBk9A7lWXkMFsSS6bs5xZGMs8ZnfqDTRrMik0X94VwgatlcHIwNrH8DaPAA_Vi2UX2HhXi9PYQsbH-DveXXmB4_mddrl10WqqJiXu9y3dJVvdG0bUETtQQA6UXyfYHh3aruBqvar8XDFkcrh1bQeJlqWmS0g_aQGncnHsE3twgqlh30qkmhx1ifOMEGxcLQbhgL_rQRsAmPsvMX163VJJsB666zS-GuDF1SC4b-g7uHoNA5Z3XP8yUcxCh1f338GHtR1HLkhu8_X6MXkpKWwqLv9BE8LobGykzohFk23opaFse8kvRRhPYZZYqtmekK-Mg6rcyo-Gx_FNsC3tJwSZrbc1nAUvpSZAIKrdpZTEbzHT9kzw6j--EDm-IvgYOqy-o2oKnpXA34LKYG64CUiu16jTDl-CYubJvr50nqFAF8vtpF-gCjo74l3QadN9r0DzuuoaTy8rOIR-OyBq-tk_UzNk0C_BEPQtzfAKKIbC8ddMnTwPNLQpuXbZa7t3eZFmZ0NV06pT0FD3uGK55hDLU7KvJFgVSWINU=w474-h592-no?authuser=1',
  'https://lh3.googleusercontent.com/1DOwkt25pHTMMDVOMXMugrGvPuAB6iviEHg6fWLLrmXY-vx3mwDS2UiVwOuPlU2tfR0ODZUJ-n5WQln4mCeUj40lE8O7bRA3Fa_d_VjZtRIx1prj2V5zSiEOe-0TZ8UBcjRlOnACCmTkqtCuooW2Mf3Z5XQ9VH_0G5hQslI3LPjdOMDX_xUe1CYVxPTa6AIOfg7MkxBGbKcZ0Uw3D6YaoVVVXz8ergITew1BotDK1dgkNL8zxgp89DznbkPkjcaVcIL4Yp_7OQxygUe90lhXMDdqMX7pX2-ffmssowoSF8oDLYELao8UA3YBXcD6ymJ48A8Xon84PCbdNB8DdFj9NxcvNSwxVSb9ZwczmIn6lMuuSTUbBJumfyfp3ZjEche4F-Ijduu-CQkiM0zJ3L1c48763tWAuDZy4F0QO2D2cgqSzyRsnZvGbpaJqhbXTUR_1jgvjSr71VOb_2zIofuy_CMc5kgVahcekUb_YXhR3GTkiaW5alf5lHJJwb6XWbY_az_9HeMK1EML9dwOGz54pl7Rnv7q2W9euHJ8oBkANAkPhXQlCvIUk1PyGUG9L_yFKjbqFK0MeBOHI0CZU_dP6kPCgE0TXy0zWbtP-nMmrAKZfmsFEwinLIoaY4LKnyFmAdc-3PD1USCWkOPqIbFSbqbUstluUhaaVCxmyauokgHsRkNvIaKGwUj_ZSacK2cZwZGSr3IDQh62hTDgsMWbE8ePIacT1oCw_Grm8Z-n2-s6bA3ng2z_FZk4fuMui1cm4r0lMLgDzSMeueGoW69HWRdTZ8rTMbgpgYwMu_drJ6W_zs1AWc4HwDuQ3dU4l7hQa1rsIV-a3jV8d_XWWTAjZ2Q0BCjRIjvny7bA5_fWUy4cek8OffCfVRQwOkHqcXcZhT5Yh3PzlAPILAQeHzb-KqUMw1wwHTdkWiO4hVd9hVHKp6xcYr7Mur-8pIaNk-0XAv4lnhEIpcqRz-GVE071bN5yfPG_8MB0lPUx3_6Z8LhoRi8=w474-h592-no?authuser=1',
];

export function PortalSol() {
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
              É o lugar ideal para o seu lazer e descanso nos finais de semana e
              feriados.{" "}
            </Text>
            <Text style={styles.textoModal}>
              Ambiente tranquilo, familiar, onde dispomos de 2 piscinas, parque
              para crianças e uma grande área verde para você relaxar e renovar
              as energias.{" "}
            </Text>
            <Text style={styles.textoModal}>
              Temos uma estrutura completa de restaurante e churrascaria, com as
              mais variadas opçoes de pratos.{" "}
            </Text>
            <Text style={styles.textoModal}>
              Venha conhecer-nos e desfrutar desse paraíso com a gente!{" "}
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
                navigation.navigate("RotaPortalSol") || setAlerta(false)
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
          <Text style={styles.title1}>PORTAL DO SOL</Text>

          <View>
            <Text style={styles.middle}>
              ⬤ Local de lazer nos finais de semana e feriados.
            </Text>
            <Text style={styles.middle}>
              ⬤ Dispõe de 2 piscinas, parque para criança.
            </Text>
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
                    "https://www.instagram.com/balnearioportaldosol/?fbclid=IwAR0yh5O8G3iPZYr0uW5oJZyvtRJWDrV8TYhxfM2YtjE8tofoE-gDAf4Jw0I"
                  )
                }
              >
                <Text style={styles.link}>@balnearioportaldosol</Text>
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
                    "https://www.facebook.com/balnearioportaldosol"
                  )
                }
              >
                <Text style={styles.link}>Balneário Portal do Sol</Text>
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
                  Linking.openURL("https://balnearioportaldosol.business.site/")
                }
              >
                <Text style={styles.link}>
                  balnearioportaldosol.business.site/
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.taxa}>TAXA PARA ENTRAR:</Text>
          <Text style={styles.taxa1}>R$ 5 por pessoa</Text>

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
