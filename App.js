import {Routes} from './src/routes/index'
import {AuthProvider} from './src/Hooks/Auth'
import { StatusBar } from 'expo-status-bar'


export default function App(){
  return(
    <AuthProvider>
      <StatusBar style='dark'/>
      <Routes/>
    </AuthProvider>
  )
}