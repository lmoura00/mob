import React from "react";
import { WebView } from 'react-native-webview';


export function RotaCocais(){
    return(
        <WebView source={{ uri: 'https://g.page/cocaisshopping?share'}} style={{flex:1,justifyContent:'center', alignItems:'center'}} />
    )
}