import React from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import {useNavigation} from '@react-navigation/native'

export function CadastroMot2(){

    const navigation = useNavigation();

    return(
        <ScrollView style={styles.container}>
                <View style={{alignSelf:'center'}}>
                    <Text style={styles.line1}>-----------------------------------------------------</Text>
                    <Text style={styles.title1}>CADASTRAR MOTORISTA: PARTE 2</Text>
                    <Text style={styles.line2}>-----------------------------------------------------</Text>
                </View>

                <Text style={styles.title}>TIPO DE VEICULO</Text>
                <TextInput style={styles.input}></TextInput>

                <Text style={styles.title}>PLACA</Text>
                <TextInput style={styles.input}></TextInput>

                <Text style={styles.title}>CRVL</Text>
                <TextInput style={styles.input}></TextInput>


                <TouchableOpacity style={styles.botao1} onPress={()=>navigation.navigate('CadastroMot3')}>
                    <Text style={styles.textBotao}>PRÓXIMO</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao2}>
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
    
    },
    input:{
        backgroundColor:'#D9D9D9',
        width:'56%',
        height:35,
        borderRadius:7,
        borderWidth:1,
        marginBottom:5,
        marginTop:5      
    },
    botao1:{
        backgroundColor:'#fff',
        height: 35,
        width:"65%",
        padding:5,
        margin:12,
        borderRadius:15,
        borderWidth:1,
        marginTop:180
    },
    botao2:{
        backgroundColor:'#FF3030',
        height: 35,
        width:"65%",
        padding:5,
        margin:12,
        borderRadius:15,
        borderWidth:1
    },
    textBotao:{
        fontSize:15,
        fontWeight:'600',
        textAlign:'center'
    }
})