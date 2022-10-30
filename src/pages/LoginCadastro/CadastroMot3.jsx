import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import * as ImagePicker from "expo-image-picker";
import AppIntroSlider from 'react-native-app-intro-slider';
import LottieView from 'lottie-react-native'

const slides = [
  {
    key: '1',
    title:'Hora de selecionar as fotos?',
    text: 'Selecione fotos claras e de fácil entendimento.',
    image: require('../../Assets/101410-photo-instructions (1).json')
  },
  {
    key: '2',
    title:'Tem algo no meio dos dados?',
    text: 'Certifique-se de que não haja nada atrapalhando a leitura dos dados.',
    image: require('../../Assets/38076-id-scan (1).json'),
  },
  {
    key: '3',
    title:'Você tem a chance de fazer a diferença',
    text: 'A sua ajuda, por menor que seja, ajuda na vida de muitos estudantes.',
    image: require('../../Assets/90398-check-green.json')
  },
  {
    key: '4',
    title:'Não se preocupe!!',
    text: 'Todos os seus dados estão seguros, só precisamos deles para assegurar que os passageiros e pais, tenham mais garantias.',
    image: require('../../Assets/107580-secure-data.json')
  },
]


export function CadastroMot3() {
  const [showHome, setShowHome] = useState(false);
  const pickImage1 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [7, 6],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      SetImage1(result.uri);
    }
  };

  const pickImage2 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [7, 6],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      SetImage2(result.uri);
    }
  };

  const pickImage3 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [7, 6],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      SetImage3(result.uri);
    }
  };

  const pickImage4 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [7, 6],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      SetImage4(result.uri);
    }
  };
  const [confirmar, setConfirmar] = useState(false)
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();

  const [Image1, SetImage1] = useState(null);
  const [Image2, SetImage2] = useState(null);
  const [Image3, SetImage3] = useState(null);
  const [Image4, SetImage4] = useState(null);

  function salvar() {
    const data = {
      Image1,
      Image2,
      Image3,
      Image4,
    };

    console.log(data) ||
      setConfirmar(false) ||
      navigation.navigate("CadastroMot4");
  }

  function completo() {
    if (
      Image1 === null ||
      Image2 === null ||
      Image3 === null ||
      Image4 === null
    ) {
      Alert.alert("Todos os campos são obrigatorios.");
    } else {
      setConfirmar(true);
    }
  }

  function renderSlides({item}){
    return(
      <View style={{flex:1, backgroundColor:'#334A58'}}>
        <View style={{height:'40%', width:'75%', marginBottom:100, marginTop:35, alignSelf:'center'}}>
          <LottieView
            source={item.image}
            autoPlay={true}
            loop={true}
            style={{
              alignSelf:'center', 
              backgroundColor:'#334A58',
              resizeMode:'cover'
            }}
            /> 
        </View>
        <Text style={styles.titleAppIntro}>
          {item.title}
        </Text>

        <Text style={styles.subTitle}>
          {item.text}
        </Text>
      
      </View>
    )
  }


  if(showHome){
    return (
      

    <ScrollView>
    <View style={styles.container}>
      <Modal
        animationType="fade"
        visible={visible}
        statusBarTranslucent={false}
        transparent={true}
        style={{}}
      >
        <View style={styles.modal}>
          <Text style={styles.titleModal}>DESEJA CANCELAR SEU CADASTRO?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.botaoModal1}
          >
            <Text style={styles.textBotao}>SAIR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setVisible(false)}
            style={styles.botaoModal2}
          >
            <Text style={styles.textBotao}>VOU CONTINUAR</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        animationType="fade"
        visible={confirmar}
        statusBarTranslucent={false}
        transparent={true}
        style={{}}
      >
        <View style={styles.modal1}>
          <Text style={styles.titleModal}>
            OS DADOS INSERIDOS ESTÃO CORRETOS?
          </Text>
          <ScrollView>
              {Image1 && <Image source={{ uri: Image1 }} style={styles.imageModal} />}
              {Image2 && <Image source={{ uri: Image2 }} style={styles.imageModal} />}
              {Image3 && <Image source={{ uri: Image3 }} style={styles.imageModal} />}
              {Image4 && <Image source={{ uri: Image4 }} style={styles.imageModal} />}
          </ScrollView>
         

          <TouchableOpacity
            onPress={salvar}
            style={styles.botaoConfirmarModal}
          >
            <Text style={styles.textBotao}>CONFIRMAR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setConfirmar(false)}
            style={styles.botaoAlterarDadosModal}
          >
            <Text style={styles.textBotao}>ALTERAR DADOS</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Text style={styles.title1}>CADASTRAR MOTORISTA: ANEXOS</Text>

      <Text style={styles.title}>SELFIE + DOCUMENTO</Text>
      {Image1 && <Image source={{ uri: Image1 }} style={styles.imagem} />}
      <TouchableOpacity onPress={pickImage1} style={styles.botao3}>
        <Text style={styles.textBotao}>Selecione a sua foto</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => SetImage1(null)} style={styles.botao4}>
        <Text style={styles.textBotao}>Apagar foto</Text>
      </TouchableOpacity>

      <Text style={styles.title}>CNH</Text>
      {Image2 && <Image source={{ uri: Image2 }} style={styles.imagem} />}
      <TouchableOpacity onPress={pickImage2} style={styles.botao3}>
        <Text style={styles.textBotao}>Selecione a sua foto</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => SetImage2(null)} style={styles.botao4}>
        <Text style={styles.textBotao}>Apagar foto</Text>
      </TouchableOpacity>

      <Text style={styles.title}>CRVL</Text>
      {Image3 && <Image source={{ uri: Image3 }} style={styles.imagem} />}
      <TouchableOpacity onPress={pickImage3} style={styles.botao3}>
        <Text style={styles.textBotao}>Selecione a sua foto</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => SetImage3(null)} style={styles.botao4}>
        <Text style={styles.textBotao}>Apagar foto</Text>
      </TouchableOpacity>

      <Text
        style={styles.title}
      >
        SELECIONE A SUA FOTO:
      </Text>

      {Image4 && <Image source={{ uri: Image4 }} style={styles.imagem} />}
      <TouchableOpacity onPress={pickImage4} style={styles.botao3}>
        <Text style={styles.textBotao}>Selecione a sua foto</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => SetImage4(null)} style={styles.botao4}>
        <Text style={styles.textBotao}>Apagar foto</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao1}
        onPress={()=>navigation.navigate('CadastroMot4')}
      >
        <Text style={styles.textBotao}>PRÓXIMO</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao2}
        onPress={() => setVisible(true)}
      >
        <Text style={styles.textBotao}>CANCELAR</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
);
  } else{
    return(
      <AppIntroSlider
        renderItem={renderSlides}
        data={slides}
        activeDotStyle={{
          backgroundColor:'#b9b9b9',
          width:30  
        }}
        renderNextButton={()=>{}}
        renderDoneButton={()=><Text style={{fontSize:17, marginTop:12, fontFamily:"Roboto_500Medium", color:'#009cff', justifyContent:'center', alignSelf:'center'}}>Vamos lá!!!</Text>}
        onDone={()=>setShowHome(true)}
      />
    )    
  }


  




  
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#334A58",
    paddingVertical:25 ,
  },
  line1: {
    fontSize: 25,
    color: "black",
  },
  line2: {
    fontSize: 25,
    color: "black",
    marginBottom: 15,
  },
  title: {
    fontSize: 19,
    color: "#fff",
    fontFamily:'Ubuntu_400Regular'
  },
  titleAppIntro:{
    fontFamily:"Roboto_500Medium",
    fontSize:25,
    textAlign:'center',
    marginBottom:10,
    elevation:10,
    color:'#009cff'
  },
  subTitle:{
    fontFamily:"Poppins_500Medium",
    fontSize:18,
    textAlign:'center',
    margin:5,
    elevation:10,
    paddingHorizontal:20,
    color:'#b5b5b5'
  },
  title1: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "500",
    textAlign: "center",
    marginTop: 10,
    textDecorationLine: "underline",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#D9D9D9",
    width: "56%",
    height: 35,
    borderRadius: 7,
    borderWidth: 1,
    marginBottom: 5,
    marginTop: 5,
  },
  botao1: {
    backgroundColor: "#fff",
    height: 35,
    width: "65%",
    padding: 5,
    margin: 12,
    borderRadius: 15,
    borderWidth: 1,
    marginTop: 110,
  },
  botao2: {
    backgroundColor: "#FF3030",
    height: 35,
    width: "65%",
    padding: 5,
    margin: 12,
    borderRadius: 15,
    borderWidth: 1,
  },
  botao3: {
    backgroundColor: "#D9D9D9",
    width: "56%",
    height: 35,
    borderRadius: 7,
    borderWidth: 1,
    marginBottom: 5,
    marginTop: 5,
    justifyContent:'center'
  },
  botao4: {
    backgroundColor: "#FF3030",
    width: "56%",
    height: 35,
    borderRadius: 7,
    borderWidth: 1,
    marginBottom: 5,
    marginTop: 5,
    justifyContent:'center'
  },
  imagem: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#f9f9f9",
  },
  textBotao: {
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    fontFamily:'Ubuntu_700Bold'
  },
  modal: {
    alignSelf: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
    elevation: 10,
    borderRadius: 20,
    marginVertical: 280,
    width: "80%",
    height: "25%",
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
    marginTop: 20,
  },
  botaoModal2: {
    backgroundColor: "#fff",
    height: 35,
    width: "65%",
    padding: 5,
    borderRadius: 15,
    borderWidth: 1,
    alignSelf: "center",
    elevation: 10,
    marginTop: 5,
  },
  titleModal: {
    textAlign:'center',
    fontSize:17,
    fontFamily:'BalsamiqSans_700Bold',
    textDecorationLine:'underline'
  },
  modal1: {
    alignSelf: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
    elevation: 10,
    borderRadius: 20,
    marginVertical: 100,
    width: "80%",
    height: "75%",
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
    marginTop: 20,
  },
  botaoModal2: {
    backgroundColor: "#fff",
    height: 35,
    width: "65%",
    padding: 5,
    borderRadius: 15,
    borderWidth: 1,
    alignSelf: "center",
    elevation: 10,
    marginTop: 5,
  },
  botaoAlterarDadosModal: {
    backgroundColor: "#FF3030",
    height: 35,
    width: "65%",
    padding: 5,
    borderRadius: 15,
    borderWidth: 1,
    alignSelf: "center",
    elevation: 10,
    marginTop: 5,
  },
  botaoConfirmarModal: {
    backgroundColor: "#14BC9C",
    height: 35,
    width: "65%",
    padding: 5,
    margin: 12,
    borderRadius: 15,
    borderWidth: 1,
    marginTop: 10,
    alignSelf: "center",
    elevation: 10,
  },
  imageModal:{
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 20,
  }
});
