import React from "react";
import {TextInput, Button, Text, View} from "react-native";

export default function LoginForm()
{ 
    return(
        <View>
        <Text>Login</Text>
        <TextInput placeholder="User"></TextInput>
        <TextInput placeholder="Password"></TextInput>
        <Button title="Send" onPress={() => console.log("Enviado")}></Button>
        </View>
    );
}