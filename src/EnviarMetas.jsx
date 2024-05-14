import React, {useState} from "react";
import { Keyboard, View, TouchableOpacity, TextInput } from "react-native";
import Metas from "./Components/data/Metas";

const EnviarMetas = () => {
    Metas.forEach(element => {
        console.log(element.fecha)
    });
};

export default EnviarMetas;

function MetasInput(){
    const [InputVisible, setInputVisible] = useState(false);
    const [InputText, setInputText] = useState(""); 

    const TouchablePress = () => {
        setInputVisible(true);
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

}