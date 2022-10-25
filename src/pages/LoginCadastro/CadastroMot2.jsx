import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView, Modal} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import LottieView from 'lottie-react-native'

const K_OPTIONS = [
    {
      item: 'Carro',
      id: 'Carro',
    },
    {
      item: 'Moto',
      id: 'Moto',
    },
   
  ]

export function CadastroMot2(){
    const [confirmar, setConfirmar] = useState(false)
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false)
    const [selectedTeam, setSelectedTeam] = useState({})
    const [placa, setPlaca] = useState('');
    const [crvl, setCrvl] = useState('');



    function salvar(){
        const data = {
          placa,
          crvl,
          selectedTeam
        }
        
        console.log(data) || 
        setConfirmar(false) || 
        navigation.navigate('CadastroMot3')
    }


    function completo(){
            if(placa ==='' || crvl === '' || selectedTeam.id === '' ){
                Alert.alert('Todos os campos são obrigatorios.')
              } else {
                 setConfirmar(true)
              }
    }
    

    return(
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
                            onPress={()=>navigation.navigate("Login")} 
                            style={styles.botaoModal1}>
                                <Text style={styles.textBotao}>SAIR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={()=>setVisible(false)}
                            style={styles.botaoModal2}>
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
            
            
                <Text>⬤ {selectedTeam.id}</Text>
                <Text>⬤ {placa}</Text>
                <Text>⬤ {crvl}</Text>

          
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

        

                <View style={{alignItems:'center'}}>
                    
                    <Text style={styles.title1}>CADASTRAR MOTORISTA: PARTE 2</Text>
                    
                </View>

                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                  <View style={{width:250, height:70}}>
                    <LottieView 
                        source={require('../../Assets/5036-walk-processes.json')} 
                        autoPlay={true} 
                        loop={true} 
                    />
                  </View>
                </View>
                      <SelectBox
                            label="TIPO DE VEICULO:"
                            labelStyle={styles.title}
                            inputPlaceholder="Selecione"
                            options={K_OPTIONS}
                            value={selectedTeam}
                            onChange={onChange()}
                            hideInputFilter={true}
                            containerStyle={styles.input}
                            optionsLabelStyle={{fontWeight:'700', color:'black'}}
                            optionContainerStyle={{backgroundColor:'#fff', padding:4}}
                        />
            <ScrollView>

              <View style={{flexDirection:'row', alignItems:'center',}}>
                      <View style={{width:80, height:40}}>
                        <LottieView 
                            source={require('../../Assets/46986-car-number-plate.json')} 
                            autoPlay={true} 
                            loop={true} 
                        />
                      </View>
                    <Text style={styles.title}>PLACA</Text>
                    </View>
                <TextInput 
                    style={styles.input} 
                    placeholder='Placa do veiculo'
                    value={placa}
                    onChangeText={setPlaca}
                ></TextInput>


                 <View style={{flexDirection:'row', alignItems:'center'}}>
                      <View style={{width:50, height:50}}>
                        <LottieView 
                            source={require('../../Assets/78299-document.json')} 
                            autoPlay={true} 
                            loop={true} 
                        />
                      </View>
                    <Text style={styles.title}>CRVL</Text>
                    </View>
                <TextInput 
                    style={styles.input} 
                    placeholder='Documento do veiculo'
                    value={crvl}
                    onChangeText={setCrvl}
                ></TextInput>


                <TouchableOpacity style={styles.botao1} onPress={completo}>
                    <Text style={styles.textBotao}>PRÓXIMO</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao2} onPress={()=>setVisible(true)}>
                    <Text style={styles.textBotao}>CANCELAR</Text>
                </TouchableOpacity>
            </ScrollView>
            
        

      </View>
    )

      function onChange() {
        return (val) => setSelectedTeam(val)
      }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#334A58",
        padding:8,
        flex:1
    },
    line1:{
        fontSize:25,
        color:'black'
    },
    line2:{
        fontSize:25,
        color:'black',
        marginBottom:15
    },
    title: {
      fontSize: 19,
      color: "#fff",
      fontFamily:'Roboto_500Medium'
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
      height: 40,
      borderRadius: 7,
      borderWidth: 1,
      marginBottom: 5,
      marginTop: 5,
      paddingHorizontal: 8,
      fontFamily:'BalsamiqSans_700Bold'
    },
    inputSelect:{
        backgroundColor:'#D9D9D9',
        height:45,
        width:'20%',
        alignItems:'center',
        textAlign:'center',
        justifyContent:'center',
        borderRadius:15,
        borderWidth:1,
        marginBottom:5,
        marginTop:5,
        paddingHorizontal:5
    },
    botao1:{
        backgroundColor:'#fff',
        height: 35,
        width:"65%",
        padding:5,
        margin:12,
        borderRadius:15,
        borderWidth:1,
        marginTop:180,
        alignSelf:'center'
    },
    botao2:{
        backgroundColor:'#FF3030',
        height: 35,
        width:"65%",
        padding:5,
        margin:12,
        borderRadius:15,
        borderWidth:1,
        alignSelf:'center'
    },
    textBotao: {
      fontSize: 15,
      fontWeight: "600",
      textAlign: "center",
      fontFamily:'Ubuntu_700Bold'
    },
    modal:{
        alignSelf: 'center',
        backgroundColor:'#f9f9f9',
        padding:20,
        elevation:10,
        borderRadius:20,
        marginVertical:280,
        width:"80%",
        height:"25%",
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
        height: "35%",
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
})