import React from "react";
import { Text,View } from "react-native";
import Constants from "expo-constants";
import NotasList from "./NotasList.jsx";
import Theme from "../Theme.js";

export default function NoteScreen() {
    return(
        <View style={{marginTop: Constants.statusBarHeight, backgroundColor: Theme.Colors.MainColor}} >
           <NotasList></NotasList>
        </View>
    )
}
