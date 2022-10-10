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

export function Perfil() {
  const [visible, setVisible] = useState(false);
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
                setVisible(false)
              }
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

        <Text style={styles.title}>NOME COMPLETO</Text>
        <TextInput style={styles.input} placeholder="Nome completo"></TextInput>

        <Text style={styles.title}>DATA DE NASCIMENTO</Text>
        <TextInput
          style={styles.input}
          keyboardType="numbers-and-punctuation"
          placeholder="Data de nascimento"
        ></TextInput>

        <Text style={styles.title}>CPF</Text>
        <TextInput
          style={styles.input}
          keyboardType="numbers-and-punctuation"
          placeholder="CPF"
        ></TextInput>

        <Text style={styles.title}>E-MAIL</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="E-mail"
        ></TextInput>

        <Text style={styles.title}>TELEFONE</Text>
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          placeholder="Número de telefone"
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

        <TouchableOpacity style={styles.botao4} onPress={() => SetImage(null)}>
          <Text style={styles.textBotao}>Apagar foto</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao1}
          onPress={() => Alert.alert("Seu perfil foi atualizado com sucesso.")}
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
    width: "100%",
    height: 35,
    borderRadius: 7,
    borderWidth: 1,
    marginBottom: 5,
    marginTop: 5,
    paddingHorizontal: 5,
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
