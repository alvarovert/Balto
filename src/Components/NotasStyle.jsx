import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Theme from '../Theme';

const styles = StyleSheet.create({
    text:{
        color: Theme.Colors.textColor,
        fontSize: Theme.TextSize.regular,
        fontFamily: Theme.Fonst.main,
        fontWeight: Theme.FontWeight.normal

    },
    Bold:{
        fontWeight: Theme.FontWeight.bold
    },
    ColorPrimary:{
        color: Theme.Colors.primaryColor
    },
    ColorSecondary:{
        color: Theme.Colors.secondaryColor
    },
    FontSize:{
        fontSize: Theme.TextSize.Big
    },
    Stacks:{
        color: Theme.Colors.stackTextColor,
        fontSize: Theme.TextSize.Small

    },
    Title:{
        backgroundColor: Theme.Colors.tittleColor,
        color: Theme.Colors.textColor,
        padding:3,
        alignSelf: 'flex-start',
        borderRadius: 12,
        overflow: 'hidden'
    }
    
})


export default function NotasStyle({ color, children, fontWeight, type, fontSize, style, ...restOfProps }){

    const StyledNotas = [
        styles.text,
        color === 'primary' && styles.ColorPrimary,
        color ==='secondary' && styles.ColorSecondary,
        fontWeight === 'bold' && styles.Bold,
        fontSize === 'big' && styles.FontSize,
        type === 'Stacks' && styles.Stacks,
        type === 'Title' && styles.Title

        
    ]

    return(
        <Text style={StyledNotas} {...restOfProps} >
            {children}
        </Text>
    )
}