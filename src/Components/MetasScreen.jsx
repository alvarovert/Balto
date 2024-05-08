import React from "react";
import { Text,View } from "react-native";
import Constants from "expo-constants";
import MetasList from "./MetasList";

export default function MetasScreen() {
    return(
        <View style={{marginTop: Constants.statusBarHeight}} >
           <MetasList></MetasList>
        </View>
    )
}