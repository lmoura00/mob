import React from "react";
import { WebView } from 'react-native-webview';


export function RotaJericoroa(){
    return(
        <WebView source={{ uri: 'https://goo.gl/maps/U11Z8syn4kLpTLP58'}} style={{flex:1,justifyContent:'center', alignItems:'center'}} />
    )
}