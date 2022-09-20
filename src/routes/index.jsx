import {NavigationContainer} from '@react-navigation/native'
import {StatusBar} from 'expo-status-bar'
import {AuthRoutes} from './auth.routes'
import {PublicRoutes} from './public.routes'

import { useAuth } from '../Hooks/Auth'

export function Routes(){
    
const {user} = useAuth()

    return(
        <NavigationContainer>
            {user ? <AuthRoutes /> : <PublicRoutes/>}
        </NavigationContainer>
    )
}