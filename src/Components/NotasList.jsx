import React from "react";
import {FlatList, Text, View} from "react-native";
import Notas from "./data/Notas.js";
import NotasItem from "./NotasItem.jsx";

const NotasList = () => {
    return(
        <FlatList
        data={Notas}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({item:notas}) => (
            <NotasItem {...notas}></NotasItem>
        )}
        />
    )
}

export default NotasList;

