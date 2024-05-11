import React from "react";
import {FlatList, Text, View} from "react-native";
import Metas from "./data/Metas";
import MetasItem from "./MetasItem";


export default MetasList = () => {
    return(
        <FlatList
        data={Metas}
        
        renderItem={({item:metas}) => (
            <MetasItem {...metas}></MetasItem>
        )}
        />
    )
}
