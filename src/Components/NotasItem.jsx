import React from 'react';
import { Text, View, TouchableWithoutFeedback, Alert, StyleSheet} from 'react-native';
import NotasStyle from './NotasStyle';
import Theme from '../Theme';



const Stacks = props => {
    return(
        <View style={{ flexDirection: 'row', justifyContent:'space-between', width:115, paddingTop:5, paddingBottom:2}}>
            <NotasStyle type= 'Stacks'>
                {props.hora}
            </NotasStyle>
        </View>
    )
}
const NotasItem = (props) => {
    return(
        <View key={props.id} style={styles.Container}>
            <NotasStyle fontWeight='bold' fontSize='big' type='Title'>
                {props.fecha}
            </NotasStyle>
            <NotasStyle>
                {props.mensaje}
            </NotasStyle>
            <Stacks {...props}/>

        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        marginHorizontal:10,
        marginTop:10,
        padding:10, 
        paddingBottom:3, 
        paddingTop:5,
        paddingLeft:10,
        paddingRight:20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: Theme.Colors.ItemColor,
        alignSelf:'flex-start'
    }

})

export default NotasItem
