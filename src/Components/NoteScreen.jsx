import React from "react";
import { Text,View, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import NotasList from "./NotasList.jsx";
import Theme from "../Theme.js";

export default function NoteScreen() {
    return(
        <View style={{marginTop: Constants.statusBarHeight, marginBottom:50, backgroundColor: Theme.Colors.MainColor}} >
            <TouchableOpacity style={{padding: 10, alignItems: 'flex-end'}} onPress={ ()=> { console.log('agregar notas')}}>
                <Text style= {{fontSize:18, color:'#BEB8FF', fontWeight:'bold'}}>agregar</Text>
            </TouchableOpacity>
           <NotasList></NotasList>
        </View>
    )
}
