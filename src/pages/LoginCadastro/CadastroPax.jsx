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

export function CadastroPax() {
  const [image, SetImage] = useState(null);
  const navigation = useNavigation();

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

  const [visible, setVisible] = useState(false);
  const [confirmar, setConfirmar] = useState(false)
  const [nome, setNome] = useState('');
  const [date, setDate] = useState('');
  const [cpf,setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('')
  const [confSenha, setConfSenha] = useState('')
 

  
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
    Alert.alert(nome  + ", seu cadastro foi efetivado com sucesso.") || 
    navigation.navigate('Login')
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

      <Text style={styles.title}>NOME COMPLETO</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
        ></TextInput>

      <Text style={styles.title}>DATA DE NASCIMENTO</Text>
      <MaskInput
        value={date}
        style={styles.input}
        keyboardType='number-pad'
        onChangeText={setDate}
        mask={Masks.DATE_DDMMYYYY}
      />

      <View>
        <Text style={styles.title}>CPF</Text>
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

      <Text style={styles.title}>E-MAIL</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      ></TextInput>

      <Text style={styles.title}>TELEFONE</Text>
      <MaskInput
        style={styles.input}
        value={telefone}
        keyboardType='numeric'
        onChangeText={(unmasked) => {
          setTelefone(unmasked);
        }}
        mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      />
        
              <Text style={styles.title}>SENHA</Text>
              <TextInput
                style={styles.input}
                placeholder="Senha"
                keyboardType="default"
                value={senha}
                maxLength={6}
                onChangeText={setSenha}
              ></TextInput>
        
              <Text style={styles.title}>CONFIRME SUA SENHA</Text>
              <TextInput
                style={styles.input}
                placeholder="Confirme sua senha"
                keyboardType="default"
                value={confSenha}
                maxLength={6}
                onChangeText={setConfSenha}
              ></TextInput>

      <Text
        style={{
          fontSize: 19,
          color: "#fff",
          fontWeight: "350",
          marginTop: 25,
        }}
      >
        SELECIONE A SUA FOTO:
      </Text>

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
    height: 35,
    borderRadius: 7,
    borderWidth: 1,
    marginBottom: 5,
    marginTop: 5,
    paddingHorizontal: 10,
    padding: 10,
    marginHorizontal: 10,
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
  titleModal: {
    textAlign: "center",
    fontSize: 17,
  },
});
