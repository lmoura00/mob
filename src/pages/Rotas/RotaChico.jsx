import React from "react";
import { WebView } from 'react-native-webview';


export function RotaChico(){
    return(
        <WebView source={{ uri: 'https://goo.gl/maps/SHnjFQGbEmZtX99t9'}} style={{flex:1,justifyContent:'center', alignItems:'center'}} />
    )
}