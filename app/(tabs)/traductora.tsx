import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Traductor() {
    const [numero, setNumero] = useState('');
    const [resultado, setResultado] = useState('');

    // Función para convertir número a letras
    const numeroALetras = (num: number): string => {
        const unidades = [
            '', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'
        ];
        const especiales = [
            'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'
        ];
        const decenas = [
            '', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'
        ];
        const centenas = [
            '', 'cien', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos',
            'seiscientos', 'setecientos', 'ochocientos', 'novecientos'
        ];

        if (num === 1000) return 'mil';
        if (num === 0) return 'cero';

        let letras = '';

        if (num >= 100) {
            if (num === 100) {
                letras += 'cien';
            } else {
                letras += centenas[Math.floor(num / 100)] + ' ';
            }
            num %= 100;
        }

        if (num >= 20) {
            letras += decenas[Math.floor(num / 10)];
            if (num % 10 !== 0) letras += ' y ';
            num %= 10;
        } else if (num >= 10) {
            letras += especiales[num - 10];
            num = 0;
        }

        if (num > 0) {
            letras += unidades[num];
        }

        return letras.trim();
    };

    const handleConvert = () => {
        const num = parseInt(numero, 10);
        if (!isNaN(num) && num >= 1 && num <= 1000) {
            setResultado(numeroALetras(num));
        } else {
            setResultado('Ingresa un número válido (1-1000)');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Traductor de Números a Letras</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Ingresa un número (1-1000)"
                value={numero}
                onChangeText={setNumero}
            />
            <Button title="Convertir" onPress={handleConvert} />
            <Text style={styles.resultado}>{resultado}</Text>
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
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },
});
