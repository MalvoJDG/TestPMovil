import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function Sumadora() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState<number | null>(null);

    const handleSumar = () => {
        const suma = parseFloat(num1) + parseFloat(num2);
        setResultado(isNaN(suma) ? null : suma);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sumadora</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese el primer número"
                keyboardType="numeric"
                value={num1}
                onChangeText={setNum1}
            />
            <TextInput
                style={styles.input}
                placeholder="Ingrese el segundo número"
                keyboardType="numeric"
                value={num2}
                onChangeText={setNum2}
            />
            <Button title="Sumar" onPress={handleSumar} />
            {resultado !== null && <Text style={styles.result}>Resultado: {resultado}</Text>}
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
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    result: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
    }
});
