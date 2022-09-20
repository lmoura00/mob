import React from "react";
import { WebView } from 'react-native-webview';


export function RotaSena(){
    return(
        <WebView source={{ uri: 'https://goo.gl/maps/24CtPP7cM9hjZAfA9'}} style={{flex:1,justifyContent:'center', alignItems:'center'}} />
    )
}