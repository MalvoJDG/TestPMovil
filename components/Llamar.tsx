import React from "react";
import {Text} from "react-native";

// Define la interfaz Props (si estás usando TypeScript)
interface Props {
    nombre: string;
  }
  
  // Componente funcional
  const LlamaNombres = ({ nombre }: Props) => {
    console.log(nombre); // Muestra el valor de la prop "nombre" en la consola
    return (
      <Text>Hola, {nombre}</Text> // Muestra el nombre en la pantalla
    );
  };
  
  export default LlamaNombres;