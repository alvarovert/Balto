import React, {useState} from "react";
import { View, TouchableOpacity, Text, TextInput, Keyboard } from "react-native";
import Constants from "expo-constants";
import MetasList from "./MetasList";
import Theme from "../Theme.js";


export default function MetasScreen() {
    const [InputVisible, setInputVisible] = useState(false);
    const [InputText, setInputText] = useState(""); 

    const TouchablePress = () => {
        setInputVisible(!InputVisible);
    };

    const TextChange = (text) => {
        setInputText(text);
    }

    const KeyPress = ({nativeEvent}) => {
        if (nativeEvent.key === "Enter"){
            console.log(InputText);
            setInputVisible(false);
            setInputText("");
            Keyboard.dismiss();
        }
    }
    return(
        <View style={{marginVertical: Constants.statusBarHeight, backgroundColor: Theme.Colors.MainColor}} >
            <TouchableOpacity style={{padding: 10, alignItems: 'flex-end'}} onPress={TouchablePress}>
                <Text style= {{fontSize:18, color:'#8FCAD4', fontWeight:'bold'}}>agregar</Text>
            </TouchableOpacity>
            {InputVisible && (
                <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10}}
                placeholder="meta aqui"
                onChangeText={TextChange}
                onKeyPress={KeyPress}
                autoFocus={true}
                value={InputText}
                />
            )}
           <MetasList></MetasList>
        </View>
    )
    // + tiene fontSize de 25 y view marginBottom de 45
    // agregar tiene fontSize de 18 y no tiene marginBottom. tiene marginVertical
}