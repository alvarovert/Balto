import React from "react";
import { Text,View } from "react-native";
import Constants from "expo-constants"
import NotasList from "./NotasList.jsx";

const Main = () => {
    return(
        <View style={{marginTop: Constants.statusBarHeight, flexGrow:1}} >
           <NotasList></NotasList>
        </View>
    )
}
export default Main;
