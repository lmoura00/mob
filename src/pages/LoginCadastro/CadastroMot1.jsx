import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaskInput, { Masks } from 'react-native-mask-input';

import LottieView from 'lottie-react-native'

export function CadastroMot1() {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [confirmar, setConfirmar] = useState(false)
  const [nome, setNome] = useState('');
  const [date, setDate] = useState('');
  const [cnh, setCnh] = useState('');
  const [cpf,setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('')
  const [confSenha, setConfSenha] = useState('')


  function salvar(){
    
    
    const data = {
      nome,
      date,
      cnh,
      cpf,
      email,
      telefone,
      senha
    }
    
    console.log(data) || 
    setConfirmar(false) || 
    navigation.navigate('CadastroMot2')
  }
  function completo(){
    
    if (senha != confSenha){
      Alert.alert('As senhas devem ser idênticas.')
    }else{
        if(nome ==='' || date === '' ||cnh === '' || cpf === '' || email === '' || telefone === '' || senha === ''){
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
          <Text>⬤ {cnh}</Text>
          <Text>⬤ {cpf}</Text>
          <Text>⬤ {email}</Text>
          <Text>⬤ {telefone}</Text>
          <Text>⬤ {senha}</Text>
    
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

      <View style={{ alignItems: "center" }}>
        <Text style={styles.title1}>CADASTRAR MOTORISTA: PARTE 1</Text>
      </View>

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

      <View style={{flexDirection:'row', alignItems:'center'}}>
        <View style={{width:40, height:40}}>
        <LottieView 
              source={require('../../Assets/82941-remove-the-identification-document-from-the-plastic.json')} 
              autoPlay={true} 
              loop={true} 
              style={{}}
        />
        </View>
        <Text style={styles.title}> DOCUMENTO DE HABILITAÇÃO</Text>
      </View>
      <TextInput 
        style={styles.input} 
        placeholder="Número da CNH"
        value={cnh}
        onChangeText={setCnh}
        
        ></TextInput>

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
                maxLength={6}
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
                maxLength={6}
                onChangeText={setConfSenha}
              ></TextInput>


      <TouchableOpacity
        style={styles.botao1}
        onPress={()=>navigation.navigate("CadastroMot2")}
      >
        <Text style={styles.textBotao}>PRÓXIMO</Text>
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
    fontFamily:'Ubuntu_400Regular'
  },
  title1: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "500",
    textAlign: "center",
    marginTop: 10,
    textDecorationLine: "underline",
    marginBottom: 10,
    fontFamily:'Roboto_700Bold'
  },
  input: {
    backgroundColor: "#D9D9D9",
    height: 45,
    borderRadius: 7,
    borderWidth: 1,
    marginBottom: 5,
    marginTop: 5,
    paddingHorizontal: 8,
    fontFamily:'BalsamiqSans_700Bold'
  },
  botao1: {
    backgroundColor: "#fff",
    height: 35,
    width: "65%",
    padding: 5,
    margin: 12,
    borderRadius: 15,
    borderWidth: 1,
    alignSelf: "center",
    
  },
  botao2: {
    backgroundColor: "#FF3030",
    height: 35,
    width: "65%",
    padding: 5,
    margin: 12,
    borderRadius: 15,
    borderWidth: 1,
    alignSelf: "center",
    marginBottom:25
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
    marginVertical: 220,
    width: "80%",
    height: "42%",
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

});
