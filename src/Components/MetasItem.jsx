import React, {useState} from "react";
import { Text, View, StyleSheet, TouchableOpacity, Pressable} from 'react-native';
import Theme from '../Theme';

function Check({id, completado, toggle}){

    const  [NoHecho, setIsPressed] = useState(false);

    const ToggleMeta = () => {
        setIsPressed(!NoHecho);
    }


    return(
        <Pressable onPress={ToggleMeta} style = {[styles.CheckMark, {backgroundColor: NoHecho ? Theme.Colors.VerifyColor : '#AD0003'}]} >
        </Pressable>
    )
}
function Check2({id, completado, toggle}){

    const  [NoHecho, setIsPressed] = useState(false);

    const ToggleMeta = () => {
        setIsPressed(!NoHecho);
    }


    return(
        <Pressable onPress={ToggleMeta} style = {[{backgroundColor: NoHecho ? '#E9D508' : '#AD0003' },{width:25, height:25, borderRadius:50}]} >
        </Pressable>
    )
}
export default function MetasItem({id, meta,subMeta1,subMeta2,subMeta3, fecha, hora}){
    const [DividirM, Presionar] = useState(false);

    const Expandir = () => {
        Presionar(!DividirM);
    }
    return(
        <TouchableOpacity onPress={Expandir}>
            <View style={styles.ContainerTextCheckBox}>
                <Check/>
                <Text style={styles.Text}>
                    {meta}
                </Text>
            </View>
            <View>
                {DividirM && (
                    <View style={styles.ContainerTextExpand}>
                        <Text style={styles.TextExpand}>
                            <Check2/>
                            {subMeta1}
                        </Text>

                        <Text style={styles.TextExpand}>
                            <Check2/>
                            {subMeta2}
                        </Text>
                        <Text style={styles.TextExpand}>
                            <Check2/>
                            {subMeta3}
                        </Text>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 14,
        borderRadius: 21,
        marginBottom: 10,
        backgroundColor: "white",
      },
 
    Container:{
        padding:10, 
        paddingBottom:3, 
        paddingTop:5,
        paddingLeft:15,
        paddingRight:20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    Text:{
        color: Theme.Colors.textColor,
        fontSize: Theme.TextSize.regular,
        fontWeight: "600",
        letterSpacing: -0.011 * 16, // 16 = baseFontSize
        flexShrink: 1,
        marginHorizontal: 18,
        marginVertical: 12
    },
    TextExpand:{
        color: Theme.Colors.textColor,
        fontSize: Theme.TextSize.Small,
        paddingVertical: 5,
        paddingHorizontal: 25,
        
        
    },
    Row:{
        width: "100%",
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    ContentContainer:{
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 15
    },
    DeleteButton: {
        position: "absolute",
        right: 0,
        top: -6,
        width: 20,
        height: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ef4444",
        borderRadius: 10,
    },
    CheckMark: {
        width: 30,
        height: 30,
        borderRadius: 17,
    },
    ContainerTextCheckBox: {
      flex: 1,
      marginHorizontal: 15,
      width: 370,
      height: 50,
      paddingLeft: 15,
      flexDirection: "row",
      alignItems: "center",
      flexGrow: 1,
      backgroundColor: Theme.Colors.MetasItem,
      borderRadius: 10

    },
    ContainerTextExpand: {
      flex: 1,
      paddingLeft: 10,
      flexDirection: "column",
      flexGrow: 1,
      alignItems:"flex-start",
      borderRadius: 50,
      marginHorizontal: 6

    }
})
