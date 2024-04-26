import React from "react";
import { Text,View } from "react-native";
import Constants from "expo-constants";
import NotasList from "./NotasList.jsx";

export default function NoteScreen() {
    return(
        <View style={{marginTop: Constants.statusBarHeight}} >
           <NotasList></NotasList>
        </View>
    )
}
