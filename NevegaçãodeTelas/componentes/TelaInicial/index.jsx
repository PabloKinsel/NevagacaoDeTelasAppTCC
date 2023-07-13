import React from "react";
import { Text, ImageBackground } from "react-native";

import imgCapa from '../../assets/Logo.png';
import estilos from './estilos';

export default function TelaInicial () {
  return (
    <ImageBackground 
      blurRadius={ 20 } 
      style={ estilos.container } 
      source={ imgCapa }
    >
      <Text style={ estilos.titulo }>Bar dos Guri</Text>  
      <Text style={ estilos.subtitulo }>Aqui você encontra a solução para seu estoque</Text>
    </ImageBackground>
  )
}
