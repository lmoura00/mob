import React from "react";
import { WebView } from 'react-native-webview';


export function RotaAlice(){
    return(
        <WebView source={{ uri: 'https://goo.gl/maps/DFRGRA6PRecNZbdW9'}} style={{flex:1,justifyContent:'center', alignItems:'center'}} />
    )
}