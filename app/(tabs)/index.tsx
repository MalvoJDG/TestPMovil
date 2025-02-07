import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mis Datos</Text>
            <Image 
                source={require('@/assets/images/yop.jpeg')} 
                style={styles.image}
            />
            <Text style={styles.text}>Nombre: Malvin</Text>
            <Text style={styles.text}>Apellido: Jimenez</Text>
            <Text style={styles.text}>Correo: Malvijd@gmail.com</Text>
            <Text style={styles.text}>Matricula: 20230562</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    image: {
        width: 100,  
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
    }
});
