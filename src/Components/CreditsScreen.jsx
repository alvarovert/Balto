import React from 'react';
import { Text, View , StyleSheet} from 'react-native';
import Constants from "expo-constants";
import Theme from '../Theme';

export default function CreditsScreen() {
    return(
        <View style={Style.Container}>
            <Text>Balto</Text>
            <View style={{alignSelf:'flex-start'}}>
                <Text style={{fontSize:20}}>
                    Dirigido
                    <Text style={{fontSize:13}}> por</Text>
                    
                </Text>
                <Text style={{fontSize:20}}>
                    Producido
                    <Text style={{fontSize:13}}> por</Text>

                </Text>
                <Text style={{fontSize:20}}>
                    Diseño
                    <Text style={{fontSize:13}}> de</Text>

                </Text>
            </View>
            <View style={{alignSelf:'flex-end'}}>
            <Text style={{color: Theme.Colors.tertiaryColor, fontSize:25 }}> Alvaro Menacho</Text>
            <Text style={{color: Theme.Colors.tertiaryColor, fontSize:25 }}> Alvaro Menacho</Text>
            <Text style={{color: Theme.Colors.tertiaryColor, fontSize:25 }}> Alvaro Menacho</Text>
            </View>
            <Text style={{fontSize:20, padding:15}}>
                    -Agradecimientos-
            </Text>
            <Text style={{color: Theme.Colors.tertiaryColor, fontSize:25 }}></Text>
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
        alignItems: 'center',
        padding: 20, // espacio interno de la carta
        margin: 20,
        backgroundColor: Theme.Colors.secondaryColor
    }
})