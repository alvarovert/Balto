import React from 'react';
import { Text, View , StyleSheet} from 'react-native';
import Constants from "expo-constants";
import Theme from '../Theme';

export default function CreditsScreen() {
    return(
        <View style={Style.Container}>
            <View style={{ alignSelf:'center'}}>
                <Text style={{padding:20, fontSize: 40}}>Balto</Text>
            </View>
            <View style={{}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20 }}>Director: </Text>
                    <Text style={{ color: Theme.Colors.tertiaryColor, fontSize: 25 }}>Alvaro Menacho</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20 }}>Productor: </Text>
                    <Text style={{ color: Theme.Colors.tertiaryColor, fontSize: 25 }}>Alvaro Menacho</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20 }}>Diseñador: </Text>
                    <Text style={{ color: Theme.Colors.tertiaryColor, fontSize: 25 }}>Alvaro Menacho</Text>
                </View>
            </View>
            
        </View>
    )
}

const Style = StyleSheet.create({
    Container:{
        marginTop: Constants.statusBarHeight,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flex: 1,
        
        justifyContent: 'center',
        
        
        padding: 20, // espacio interno de la carta
        margin: 20,
        backgroundColor: Theme.Colors.secondaryColor
    }
})