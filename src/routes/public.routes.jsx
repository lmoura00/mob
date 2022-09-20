import {createNativeStackNavigator} from '@react-navigation/native-stack'

import { Login } from '../pages/Login'
import {CadastroPax} from '../pages/CadastroPax'
import {CadastroMot1} from '../pages/CadastroMot1'
import {CadastroMot2} from '../pages/CadastroMot2'
import {CadastroMot3} from '../pages/CadastroMot3'


export function PublicRoutes(){
    
const {Navigator, Screen} = createNativeStackNavigator()

    return(
        <Navigator>
                <Screen name='Login' component={Login} options={{headerShown:false, statusBarStyle:'dark' }}/>
                <Screen name='CadastroMot3' component={CadastroMot3} options={{headerShown:true, headerTitle:'CADASTRAR MOTORISTA', statusBarStyle:'dark',headerTitleStyle: {fontWeight: 'bold',}, headerTitleAlign:'center'}}/>
                <Screen name='CadastroPax' component={CadastroPax} options={{headerShown:true, headerTitle:'CADASTRAR PASSAGEIRO', statusBarStyle:'dark',headerTitleStyle: {fontWeight: 'bold',}, headerTitleAlign:'center'}}/>
                <Screen name='CadastroMot2' component={CadastroMot2} options={{headerShown:true, headerTitle:'CADASTRAR MOTORISTA', statusBarStyle:'dark',headerTitleStyle: {fontWeight: 'bold',}, headerTitleAlign:'center'}}/>
                <Screen name='CadastroMot1' component={CadastroMot1} options={{headerShown:true, headerTitle:'CADASTRAR MOTORISTA', statusBarStyle:'dark',headerTitleStyle: {fontWeight: 'bold',}, headerTitleAlign:'center'}}/>
        </Navigator>
    )
}