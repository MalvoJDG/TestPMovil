import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function TablaMultiplicar() {
    const [numero, setNumero] = useState('');
    const [tabla, setTabla] = useState<string[]>([]);

    const calcularTabla = () => {
        const num = parseInt(numero, 10);
        if (!isNaN(num)) {
            const resultados = Array.from({ length: 13 }, (_, i) => 
                `${num} x ${i + 1} = ${num * (i + 1)}`
            );
            setTabla(resultados);
        } else {
            setTabla(["Ingresa un número válido"]);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tabla de Multiplicar</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Ingresa un número"
                value={numero}
                onChangeText={setNumero}
            />
            <Button title="Generar Tabla" onPress={calcularTabla} />
            
            <FlatList
                data={tabla}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => <Text style={styles.resultado}>{item}</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        textAlign: 'center',
    },
    resultado: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
});
