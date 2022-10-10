import React,{useState} from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Modal} from 'react-native'
import {useNavigation} from '@react-navigation/native'

export function CadastroMot1(){

    const navigation = useNavigation()
    const [visible, setVisible] = useState(false)


    return(
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

            <View style={{alignItems:'center'}}>
                
                <Text style={styles.title1}>CADASTRAR MOTORISTA: PARTE 1</Text>
                
            </View>
            
            <Text style={styles.title}>NOME COMPLETO</Text>
            <TextInput style={styles.input} placeholder='Nome completo'></TextInput>

            <Text style={styles.title}>DATA DE NASCIMENTO</Text>
            <TextInput style={styles.input} keyboardType="numbers-and-punctuation" placeholder="Data de nascimento" maxLength={8}></TextInput>

            <Text style={styles.title}>CARTEIRA DE HABILITAÇÃO</Text>
            <TextInput style={styles.input} placeholder='Número da CNH'></TextInput>

            <Text style={styles.title}>CPF</Text>
            <TextInput style={styles.input} keyboardType="numbers-and-punctuation" placeholder="CPF" maxLength={11}></TextInput>

            <Text style={styles.title}>E-MAIL</Text>
            <TextInput style={styles.input} keyboardType="email-address" placeholder="E-mail"></TextInput>

            <Text style={styles.title}>TELEFONE</Text>
            <TextInput style={styles.input} keyboardType="phone-pad" placeholder="Telefone" maxLength={11}></TextInput>

            <TouchableOpacity style={styles.botao1} onPress={()=>navigation.navigate('CadastroMot2')}>
                <Text style={styles.textBotao}>PRÓXIMO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao2} onPress={()=>setVisible(true)}>
                <Text style={styles.textBotao}>CANCELAR</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#334A58",
        padding:5
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
    title:{
        fontSize:19,
        color:'#fff',
        fontWeight:'350'
    },
    title1:{
        fontSize:20,
        color:'#fff',
        fontWeight:'500',
        textAlign:'center',
        marginTop:10,
        textDecorationLine:'underline',
        marginBottom:10,
    },
    input:{
        backgroundColor:'#D9D9D9',
        height:40,
        borderRadius:7,
        borderWidth:1,
        marginBottom:5,
        marginTop:5,
        paddingHorizontal:5,  
    },
    botao1:{
        backgroundColor:'#fff',
        height: 35,
        width:"65%",
        padding:5,
        margin:12,
        borderRadius:15,
        borderWidth:1,
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
    textBotao:{
        fontSize:15,
        fontWeight:'600',
        textAlign:'center'
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
    botaoModal1:{
        backgroundColor:'#FF3030',
        height: 35,
        width:"65%",
        padding:5,
        borderRadius:15,
        borderWidth:1,
        alignSelf:'center',
        margin:5,
        elevation:10,
        marginTop:20
    },
    botaoModal2:{
        backgroundColor:'#fff',
        height: 35,
        width:"65%",
        padding:5,
        borderRadius:15,
        borderWidth:1,
        alignSelf:'center',
        elevation:10,
        marginTop:5
    },
    titleModal:{
        textAlign:'center',
        fontSize:17
    },
})