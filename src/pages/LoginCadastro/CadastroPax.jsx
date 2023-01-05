import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
  Modal,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import MaskInput, { Masks } from 'react-native-mask-input';
import LottieView from 'lottie-react-native'
import {useAuth} from "../../Hooks/Auth"
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";



export function CadastroPax() {
  const [image, SetImage] = useState(null);
  const navigation = useNavigation();
  const auth = getAuth();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      SetImage(result.uri);
    }
  };
  const [visibleConfirma, setVisibleConfirma] = useState(false)
  const [visible, setVisible] = useState(false);
  const [confirmar, setConfirmar] = useState(false)
  const [nome, setNome] = useState('');
  const [date, setDate] = useState('');
  const [cpf,setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('')
  const [confSenha, setConfSenha] = useState('')
  const {setUser} = useAuth()



  
  function salvar(){
    
    
    const data = {
      nome,
      date,
      cpf,
      email,
      telefone,
      image,
      senha
    }
    
    console.log(data) || 
    setConfirmar(false) || 
    setVisibleConfirma(true) ||
    createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      console.log('usuário criado com sucesso');
    })
    .catch((error) => {
      console.log(error)
    }) 
    


  }
  function completo(){
    
    if (senha != confSenha){
      Alert.alert('As senhas devem ser idênticas.')
    } else {
      if(nome ==='' || date === '' || cpf === '' || email === '' || telefone === '' || senha === '' || image === null){
        Alert.alert('Todos os campos são obrigatorios.')
      } else {
       setConfirmar(true)
      }
    } 
  }
 
  function enviar(){
    function writeUserData(userId, nome, email, image, date, cpf, telefone) {
      const db = getDatabase();
      set(ref(db, 'users/' + userId), {
        username: nome,
        email: email,
        profile_picture : image.uri,
        cpf:cpf,
        date:date,
        telefone
      });
    }
  }
  

  return (
    <ScrollView style={styles.container}>
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
          <Text style={styles.titleModal}>OS DADOS INSERIDOS ESTÃO CORRETOS?</Text>
          <Text>⬤ {nome}</Text>
          <Text>⬤ {date}</Text>
          <Text>⬤ {cpf}</Text>
          <Text>⬤ {email}</Text>
          <Text>⬤ {telefone}</Text>
          <Text>⬤ {senha}</Text>

          
          {image && (
            <Image
              source={{ uri: image }}
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
                marginBottom: 20,
                marginTop: 20,
              }}
            />
          )}
          <TouchableOpacity
            onPress={salvar}
            
            style={styles.botaoConfirmarModal}
          >
            <Text style={styles.textBotao}>CONFIRMAR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>setConfirmar(false)}
            style={styles.botaoAlterarDadosModal}
          >
            <Text style={styles.textBotao}>ALTERAR DADOS</Text>
          </TouchableOpacity>
        </View>
      </Modal>


      
              <Modal
                    animationType="fade"
                    visible={visibleConfirma}
                    statusBarTranslucent={false}
                    transparent={true}
                    style={{}}
                    >
                        <View style={styles.modal2}>
                            <View style={styles.titleBoxModal}>
                            <Text style={styles.titleModal}>SEU CADASTRO FOI CONCLUIDO</Text>
                            </View>
                            <View style={{width:120, height:120,}}>
                                <LottieView 
                                    source={require('../../Assets/45793-confirmed.json')} 
                                    autoPlay={true} 
                                    loop={true} 
                                />
                            </View>
                            <Text style={styles.subTitleModal}>Aproveite o app</Text>
                            <TouchableOpacity 
                                onPress={()=>navigation.navigate("Login") || setVisibleConfirma(false)} 
                                style={styles.botaoModal3}>
                                    <Text style={styles.textBotao}>SAIR</Text>
                            </TouchableOpacity>
                     
                        </View>
                    
              </Modal>

      <View style={{flexDirection:'row', alignItems:'center'}}>
        <View style={{width:40, height:40}}>
          <LottieView 
              source={require('../../Assets/9994-name-profile-icon-animation-circle.json')} 
              autoPlay={true} 
              loop={true} 
          />
        </View>
        <Text style={styles.title}>NOME COMPLETO</Text>
      </View>
      <TextInput 
        style={styles.input} 
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
        ></TextInput>


      <View style={{flexDirection:'row', alignItems:'center'}}>
        <View style={{width:40, height:40}}>
        <LottieView 
              source={require('../../Assets/4399-schedule-date.json')} 
              autoPlay={true} 
              loop={true} 
              style={{}}
        />
        </View>
        <Text style={styles.title}>DATA DE NASCIMENTO</Text>
      </View>
      <MaskInput
        value={date}
        style={styles.input}
        keyboardType='number-pad'
        onChangeText={setDate}
        mask={Masks.DATE_DDMMYYYY}
      />

      <View>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <View style={{width:40, height:40}}>
          <LottieView 
                source={require('../../Assets/5202-review-id (1).json')} 
                autoPlay={true} 
                loop={true} 
                style={{}}
          />
          </View>
          <Text style={styles.title}> CPF</Text>
        </View>
        <MaskInput
          value={cpf}
          keyboardType='number-pad'
          style={styles.input}
          mask={Masks.BRL_CPF}
          showObfuscatedValue
          obfuscationCharacter="#"
          onChangeText={(masked, unmasked, obfuscated) => {
            setCpf(obfuscated);}}
        />
      </View>

      <View style={{flexDirection:'row', alignItems:'center'}}>
        <View style={{width:45, height:45}}>
        <LottieView 
              source={require('../../Assets/29133-windows-10-icon-mail.json')} 
              autoPlay={true} 
              loop={true} 
              style={{}}
        />
        </View>
        <Text style={styles.title}>E-MAIL</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      ></TextInput>

      <View style={{flexDirection:'row', alignItems:'center'}}>
        <View style={{width:40, height:40}}>
        <LottieView 
              source={require('../../Assets/97981-hand-holding-phone.json')} 
              autoPlay={true} 
              loop={true} 
              style={{}}
        />
        </View>
        <Text style={styles.title}> TELEFONE</Text>
      </View>
      <MaskInput
        style={styles.input}
        value={telefone}
        keyboardType='numeric'
        onChangeText={(unmasked) => {
          setTelefone(unmasked);
        }}
        mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      />
        
        <View style={{flexDirection:'row', alignItems:'center'}}>
              <View style={{width:40, height:40}}>
              <LottieView 
                    source={require('../../Assets/74938-lock-blue.json')} 
                    autoPlay={true} 
                    loop={true} 
                    style={{}}
              />
              </View>
              <Text style={styles.title}> SENHA</Text>
        </View>
              <TextInput
                style={styles.input}
                placeholder="Senha"
                keyboardType="default"
                value={senha}
                maxLength={8}
                onChangeText={setSenha}
              ></TextInput>
        
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <View style={{width:40, height:40}}>
              <LottieView 
                    source={require('../../Assets/103837-checkmark.json')} 
                    autoPlay={true} 
                    loop={true} 
                    style={{}}
              />
              </View>
              <Text style={styles.title}> CONFIRME SUA SENHA</Text>
            </View>
              <TextInput
                style={styles.input}
                placeholder="Confirme sua senha"
                keyboardType="default"
                value={confSenha}
                maxLength={8}
                onChangeText={setConfSenha}
              ></TextInput>
           <View style={{flexDirection:'row', alignItems:'center'}}>
              <View style={{width:40, height:40}}>
              <LottieView 
                    source={require('../../Assets/5704-choose-photo.json')} 
                    autoPlay={true} 
                    loop={true} 
                    style={{}}
              />
              </View>
              <Text style={styles.title}> SELECIONE SUA FOTO</Text>
            </View>

      {image && (
        <Image
          source={{ uri: image }}
          style={{
            width: 200,
            height: 200,
            alignSelf: "center",
            marginBottom: 20,
            marginTop: 20,
          }}
        />
      )}

      <TouchableOpacity onPress={pickImage} style={styles.botao3}>
        <Text style={styles.textBotao}>Selecione a sua foto</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => SetImage(null)} style={styles.botao3}>
        <Text style={styles.textBotao}>Apagar foto selecionada</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao1}
        onPress={completo}
      >
        <Text style={styles.textBotao}>SALVAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao2} onPress={() => setVisible(true)}>
        <Text style={styles.textBotao}>CANCELAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#334A58",
    padding: 5,
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
    fontWeight: "350",
    margin: 2,
  },
  title1: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#D9D9D9",
    height: 45,
    borderRadius: 7,
    borderWidth: 1,
    marginBottom: 5,
    marginTop: 5,
    paddingHorizontal: 8,
    fontFamily:'BalsamiqSans_700Bold',
    fontSize:16
  },
  botao1: {
    backgroundColor: "#fff",
    height: 35,
    width: "65%",
    padding: 5,
    margin: 12,
    borderRadius: 15,
    borderWidth: 1,
    marginTop: 55,
    alignSelf: "center",
    elevation: 10,
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

  botao2: {
    backgroundColor: "#FF3030",
    height: 35,
    width: "65%",
    padding: 5,
    borderRadius: 15,
    borderWidth: 1,
    alignSelf: "center",
    marginBottom: 20,
    elevation: 10,
  },

  textBotao: {
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    justifyContent: "center",
  },
  textBotao3: {
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },
  botao3: {
    backgroundColor: "#D9D9D9",
    width: "56%",
    height: 35,
    borderRadius: 7,
    borderWidth: 1,
    marginBottom: 5,
    marginTop: 5,
    alignSelf: "center",
    elevation: 10,
    justifyContent: "center",
  },
  image: {
    height: 80,
    width: 80,
    alignSelf: "center",
    borderRadius: 45,
    borderWidth: 2,
    borderColor: "#f9f9f9",
    marginBottom: 15,
    marginTop: 15,
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
  modal1: {
    alignSelf: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
    elevation: 10,
    borderRadius: 20,
    marginVertical: 180,
    width: "80%",
    height: "58%",
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
  modal2: {
    alignSelf: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
    elevation: 10,
    borderRadius: 20,
    marginVertical: 220,
    width: "80%",
    height: "45%",
    justifyContent:'center',
    alignItems:'center'
  },
  subTitleModal:{
    fontSize:15,
    fontFamily:'Ubuntu_500Medium',
    marginTop:15,
    textAlign:'center'
},
titleBoxModal:{
    backgroundColor:'#fff',
    height:50,
    width:'95%',
    borderRadius:8,
    elevation:10,
    alignItems:'center',
    justifyContent:'center'
},    
botaoModal3: {
  backgroundColor: "#FF3030",
  height: 35,
  width: "65%",
  padding: 5,
  borderRadius: 15,
  borderWidth: 1,
  alignSelf: "center",
  margin: 5,
  elevation: 10,
  marginTop: 30,
},
});
