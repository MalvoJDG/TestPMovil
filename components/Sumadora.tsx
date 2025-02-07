import React, { Component } from 'react'
import { Text, View , TextInput} from 'react-native'

interface Props
{
    num1: number;
    num2: number;
}

const SumarNumeros = ({num1, num2}: Props) =>{
    let resultado = num1 + num2
    return(
        <View>
            <Text>El resultado es: {resultado}</Text>
        </View>
    );
}

export default SumarNumeros;
