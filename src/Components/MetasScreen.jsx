import React, {useState} from "react";
import { View, TouchableOpacity, Text, TextInput, Keyboard } from "react-native";
import Constants from "expo-constants";
import MetasList from "./MetasList";
import Theme from "../Theme.js";
import Metas from "./data/Metas.js";


export default function MetasScreen() {
    const [InputVisible, setInputVisible] = useState(false);
    const [InputText, setInputText] = useState("");
    const [buttontext, setButtonText] = useState("agregar");

    const TextChange = (text) => {
        setInputText(text);
    }

    const handlePress = () =>{
        if (buttontext === "agregar"){
            setInputVisible(true);
            setButtonText("+");
        } else {
            if (InputText.trim() != ""){
                const Meta = {meta: InputText, subMetas: []};
                Metas.unshift(Meta);
                
            }else{
                setInputVisible(false);
                setButtonText("agregar");
            }
            setInputVisible(false);
            setInputText("");
            setButtonText("agregar");
        }
    };
    return(
        <View style={{marginVertical: Constants.statusBarHeight, backgroundColor: Theme.Colors.MainColor}} >
            <TouchableOpacity style={{padding: 10, alignItems: 'flex-end'}} onPress={handlePress}>
                <Text style= {{fontSize:18, color:'#8FCAD4', fontWeight:'bold'}}>{buttontext}</Text>
            </TouchableOpacity>
            {InputVisible && (
                <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10}}
                placeholder="¿Que vas a logar?"
                onChangeText={TextChange}
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