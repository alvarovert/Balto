import React, {useState} from "react";
import { Keyboard, View, TouchableOpacity, TextInput } from "react-native";
import Metas from "./Components/data/Metas";

const [InputVisible, setInputVisible] = useState(false);
const [InputText, setInputText] = useState("");
const [buttontext, setButtonText] = useState("agregar");

const TextChange = (text) => {
    setInputText(text);
}
const EnviarMetas = () => {
    if (buttontext === "agregar"){
        setInputVisible(true);
        setButtonText("+");
    } else {
        if (InputText.trim() != ""){
            console.log(InputText);
        }else{
            setInputVisible(false);
            setButtonText("agregar");
        }
        setInputVisible(false);
        setInputText("");
        setButtonText("agregar");
    }
};

export default EnviarMetas;
