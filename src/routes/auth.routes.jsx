import {TouchableOpacity} from 'react-native'

import { StatusBar } from 'expo-status-bar'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import {CaronasDisponiveis} from '../pages/CaronasDisponiveis'
import {PtsTur} from '../pages/PtsTur'
import {Perfil} from '../pages/Perfil'
import {Alice} from '../pages/Alice'
import {Chico} from '../pages/Chico'
import {Cocais} from '../pages/Cocais'
import {Jericoroa} from '../pages/Jericoroa'
import {Jose} from '../pages/JoseV'
import {Mariana} from '../pages/Mariana'
import {Odaleia} from '../pages/Odaleia'
import {Sena} from '../pages/Sena'
import {Thaiane} from '../pages/Thaiane'
import {Vitoria} from '../pages/Vitoria'
import {Yuri} from '../pages/Yuri'


import {useAuth} from "../Hooks/Auth"
import { RotaChico } from '../pages/RotaChico';
import { RotaSena } from '../pages/RotaSena';
import { RotaAlice } from '../pages/RotaAlice';
import { RotaCocais } from '../pages/RotaCocais';
import { RotaJericoroa } from '../pages/RotaJericoroa';


function AuthRoutesTabBar(){
   
    const {setUser} = useAuth()
    const {Navigator, Screen} = createBottomTabNavigator();
    
        return(
            <Navigator screenOptions={({route})=>({
                tabBarIcon:({focused, color, size}) => {
                    if(route.name === "CaronasDisponiveis") {
                        return focused ? (
                            <Entypo name="home" size={size} color={color} />
                        ) : (
                            <AntDesign name="home" size={size} color={color} />
                        );
                    } else if (route.name === "PtsTur"){
                        return focused ? (
                            <FontAwesome name="picture-o" size={size} color={size} />
                        )  : (
                            <AntDesign name="picture" size={size} color={size} />
                        )
                    } else if (route.name === "Perfil"){
                        return focused ? (
                            <FontAwesome name="gear" size={size} color={size} />
                        ) : (
                            <EvilIcons name="gear" size={size} color={size} />
                        )
                    } 
                },
                
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'grey',
                
            })}>
                    <Screen name='CaronasDisponiveis' component={CaronasDisponiveis} options={{headerShown:true, statusBarStyle:'dark', tabBarLabel:"INICIAL.", headerTitleAlign:'center', headerTitle:'CARONAS DISPONÍVEIS', headerRight:()=>(<TouchableOpacity onPress={()=>setUser(null)} style={{marginRight:10}}><Ionicons name="exit-outline" size={24} color="black" /></TouchableOpacity>)}}/>
                    
                    <Screen name='PtsTur' component={PtsTur} options={{headerShown:true  ,tabBarLabel:"PONTOS TUR.", headerTitleAlign:'center', headerTitle:'PONTOS TURISTICOS', headerRight:()=>(<TouchableOpacity onPress={()=>setUser(null)} style={{marginRight:10}}><Ionicons name="exit-outline" size={24} color="black" /></TouchableOpacity>) }}/>
                    
                    <Screen name='Perfil' component={Perfil} options={{tabBarLabel:"PERFIL", headerTitleAlign:'center', headerTitle:'PERFIL', headerRight:()=>(<TouchableOpacity onPress={()=>setUser(null)} style={{marginRight:10}}><Ionicons name="exit-outline" size={24} color="black" /></TouchableOpacity>)}}/>
            </Navigator>
        )
}

export function AuthRoutes(){
    const {Navigator,Screen} = createNativeStackNavigator();
    return(
        <Navigator>
           
            <Screen name='home' component={AuthRoutesTabBar} options={{headerShown:false,statusBarStyle:'dark'}}/>
            <Screen name='Sena' component={Sena} options={{headerShown:true, headerTitle:'DETALHES', headerTitleAlign:'center',statusBarStyle:'dark'}}/>
            <Screen name='Yuri' component={Yuri} options={{headerShown:true, headerTitle:'DETALHES', headerTitleAlign:'center',statusBarStyle:'dark'}}/>
            <Screen name='Thaiane' component={Thaiane} options={{headerShown:true, headerTitle:'DETALHES', headerTitleAlign:'center',statusBarStyle:'dark'}}/>
            <Screen name='Jose' component={Jose} options={{headerShown:true, headerTitle:'DETALHES', headerTitleAlign:'center',statusBarStyle:'dark'}}/>
            <Screen name='Vitoria' component={Vitoria} options={{headerShown:true, headerTitle:'DETALHES', headerTitleAlign:'center',statusBarStyle:'dark'}}/>
            <Screen name='Mariana' component={Mariana} options={{headerShown:true, headerTitle:'DETALHES', headerTitleAlign:'center',statusBarStyle:'dark'}}/>
            <Screen name='Odaleia' component={Odaleia} options={{headerShown:true, headerTitle:'DETALHES', headerTitleAlign:'center',statusBarStyle:'dark'}}/>
            <Screen name='Cocais' component={Cocais} options={{headerShown:true, headerTitle:'DETALHES', headerTitleAlign:'center',statusBarStyle:'dark'}}/>
            <Screen name='Chico' component={Chico} options={{headerShown:true, headerTitle:'DETALHES', headerTitleAlign:'center',statusBarStyle:'dark'}}/>
            <Screen name='Alice' component={Alice} options={{headerShown:true, headerTitle:'DETALHES', headerTitleAlign:'center',statusBarStyle:'dark'}}/>
            <Screen name='Jericoroa' component={Jericoroa} options={{headerShown:true, headerTitle:'DETALHES', headerTitleAlign:'center',statusBarStyle:'dark'}}/>
            <Screen name='RotaChico' component={RotaChico} options={{headerTitle:'ROTA', headerTitleAlign:'center',statusBarStyle:'dark'}}/>
            <Screen name='RotaSena' component={RotaSena} options={{headerTitle:'ROTA', headerTitleAlign:'center',statusBarStyle:'dark'}}/>
            <Screen name='RotaAlice' component={RotaAlice} options={{headerTitle:'ROTA', headerTitleAlign:'center',statusBarStyle:'dark'}}/>
            <Screen name='RotaCocais' component={RotaCocais} options={{headerTitle:'ROTA', headerTitleAlign:'center',statusBarStyle:'dark'}}/>
            <Screen name='RotaJericoroa' component={RotaJericoroa} options={{headerTitle:'ROTA', headerTitleAlign:'center',statusBarStyle:'dark'}}/>
        </Navigator>
    )
    }