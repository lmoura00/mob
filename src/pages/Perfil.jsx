import React, { useState } from "react";
import {
  View,
  Modal,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import MaskInput, {Masks} from "react-native-mask-input";
import { getDatabase, ref, child, get, onValue, DataSnapshot, set, update} from "firebase/database";
import { getAuth, onAuthStateChanged, updateProfile, updateEmail, updatePassword } from "firebase/auth";
import { useEffect } from "react";
import { useAuth } from "../Hooks/Auth";
import { getStorage, ref as sRef, getDownloadURL,  uploadBytes, deleteObject    } from "firebase/storage";
import LottieView from "lottie-react-native";

export function Perfil() {
  const [nome, setNome] = useState('');
  const [lastname, setLastname] = useState('');
  const [date, setDate] = useState('');
  const [cpf,setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('')
  const [confSenha, setConfSenha] = useState('')
  const [visible, setVisible] = useState(false);
  const [image, SetImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const { setUser } = useAuth();
  function sair(){
    () => setVisible(false) && navigation.navigate('CaronasDisponiveis')
  }
  const navigation = useNavigation();
  const auth = getAuth();
  let userUid = auth.currentUser.uid 
 
    useEffect(()=>{
       function ler(){
        const auth = getAuth()
        const dbRef = ref(getDatabase());

  //função para puxar os dados do firebase
        const userId = auth.currentUser.uid
        get(child(dbRef, `users/${userId}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setNome(snapshot.val().name);
            setDate(snapshot.val().date);
            setCpf(snapshot.val().cpf);
            setTelefone(snapshot.val().telefone);
            setLastname(snapshot.val().lastname);
          } else {
            console.log("No data available");
            alert("No data available");
          }
            setEmail(auth.currentUser.email);
     
        }).catch((error) => {
          console.error(error);
        });

//função para puxar imagem
        const storage = getStorage();
        getDownloadURL(sRef(storage, `${userId}`))
        .then((url) => {
          //console.log(url),
          setImageUrl(url),
          SetImage(url)

        })
        .catch((error)=>{
          console.log(error)
        })
      }
      
      
      ler()

    },[])

//função para atualizar
    function ups(name, lastname, email, date, cpf, telefone, senha){
      const auth = getAuth();
      let userUid = auth.currentUser.uid 
      const db = getDatabase();
        update(ref(db, 'users/' + userUid), {
          name: name,
          lastname: lastname,
          email: email,
          date:date,
          cpf: cpf,
          telefone:telefone,
          senha: senha,
          image:imageUrl
  
        })
        .then(()=>{
          console.log('Dados atualizados')
        });

        updateEmail(auth.currentUser, email).then(() => {
          console.log("Email atualizado com sucesso")
        }).catch((error) => {
          console.log('Email NÃO atualizado');
        });

        updatePassword(auth.currentUser, senha).then(() => {
          console.log("Senha atualizada com sucesso");
          setUser(null);
        }).catch((error) => {
          console.log('Sua senha NÃO foi atualizada')
        });
        async function enviarFoto(){
          const response =  await fetch(image)
          const storage = getStorage();
          const blob = await response.blob()
          const storageRef = sRef(storage, `${userUid}`);
          const metadata = {
            contentType: 'image/jpeg',
          };
          await uploadBytes(storageRef, blob, metadata)
          .then((snapshot) => {
           console.log('Imagem enviada com sucesso');
          })
          .catch(()=>console.log('erro'));
          
      
        }
        enviarFoto();
    
    }

//função para apagar foto
    function apagarFoto(){
      const storage = getStorage();
      const storageRef = sRef(storage, `${userUid}`);
      deleteObject(storageRef).then(() => {
        console.log('Foto apagada')
      }).catch((error) => {
        console.log('Um erro aconteceu')
      });
    }

//função para selecionar imagem
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
            <Text style={styles.titleModal}>
              DESEJA SAIR SEM ATUALIZAR SEUS DADOS?
            </Text>
            <TouchableOpacity
              onPress={() =>
                Alert.alert("Seus dados não foram alterados.") ===
                setVisible(false) === 
                navigation.navigate('CaronasDisponiveis')
              }
              style={styles.botaoModal1}
            >
              <Text style={styles.textBotao}>SAIR</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setVisible(false) && navigation.navigate('CaronasDisponiveis')}
              style={styles.botaoModal2}
            >
              <Text style={styles.textBotao}>VOU CONTINUAR</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ width: 40, height: 40 }}>
          <LottieView
            source={require("../Assets/9994-name-profile-icon-animation-circle.json")}
            autoPlay={true}
            loop={true}
          />
        </View>
        <Text style={styles.title}>NOME</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      ></TextInput>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ width: 40, height: 40 }}>
          <LottieView
            source={require("../Assets/109029-writing.json")}
            autoPlay={true}
            loop={true}
          />
        </View>
        <Text style={styles.title}>SOBRENOME</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={lastname}
        onChangeText={setLastname}
      ></TextInput>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ width: 40, height: 40 }}>
          <LottieView
            source={require("../Assets/4399-schedule-date.json")}
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
        keyboardType="number-pad"
        onChangeText={setDate}
        mask={Masks.DATE_DDMMYYYY}
      />

      <View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ width: 40, height: 40 }}>
            <LottieView
              source={require("../Assets/5202-review-id (1).json")}
              autoPlay={true}
              loop={true}
              style={{}}
            />
          </View>
          <Text style={styles.title}> CPF</Text>
        </View>
        <MaskInput
          value={cpf}
          keyboardType="number-pad"
          style={styles.input}
          mask={Masks.BRL_CPF}
          showObfuscatedValue
          obfuscationCharacter="#"
          onChangeText={(masked, unmasked, obfuscated) => {
            setCpf(obfuscated);
          }}
        />
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ width: 45, height: 45 }}>
          <LottieView
            source={require("../Assets/29133-windows-10-icon-mail.json")}
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

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ width: 40, height: 40 }}>
          <LottieView
            source={require("../Assets/97981-hand-holding-phone.json")}
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
        keyboardType="numeric"
        onChangeText={(mask,unmasked) => {
          setTelefone(unmasked);
        }}
        mask={[
          "(",
          /\d/,
          /\d/,
          ")",
          " ",
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          "-",
          /\d/,
          /\d/,
          /\d/,
          /\d/,
        ]}
      />

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ width: 40, height: 40 }}>
          <LottieView
            source={require("../Assets/74938-lock-blue.json")}
            autoPlay={true}
            loop={true}
            style={{}}
          />
        </View>
        <Text style={styles.title}>NOVA SENHA</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        keyboardType="default"
        value={senha}
        maxLength={12}
        onChangeText={setSenha}
      ></TextInput>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ width: 40, height: 40 }}>
          <LottieView
            source={require("../Assets/103837-checkmark.json")}
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
        maxLength={12}
        onChangeText={setConfSenha}
      ></TextInput>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ width: 40, height: 40 }}>
          <LottieView
            source={require("../Assets/5704-choose-photo.json")}
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
            borderRadius:50,
            borderWidth:2,
            borderColor:'#F6C445',
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
          onPress={()=>ups(nome, lastname, email, date, cpf, telefone, senha)}
        >
          <Text style={styles.textBotao}>ATUALIZAR</Text>
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
    margin: 12,
    elevation: 10,
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
    elevation: 10,
    alignSelf: "center",
  },
  textBotao: {
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
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
    elevation: 10,
    alignSelf: "center",
  },
  botao4: {
    backgroundColor: "#D9D9D9",
    width: "56%",
    height: 35,
    borderRadius: 7,
    borderWidth: 1,
    marginBottom: 15,
    marginTop: 5,
    elevation: 10,
    alignSelf: "center",
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
    textAlign: "center",
    fontSize: 17,
  },
});
