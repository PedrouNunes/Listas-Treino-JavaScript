import React, { useState } from 'react';
import { StatusBar, Button, View } from 'react-native';
import { Text } from 'react-native';

export default function App() {
  const [numero, setNumero] = useState(null); // Número selecionado
  const [tabuada, setTabuada] = useState([]);

  // Função para calcular a tabuada
  const calcularTabuada = (x) => {
    const tabuadaSet = [];
    for (let i = 0; i <= 10; i++) {
      const resultado = i * x;
      tabuadaSet.push(`${i} x ${x} = ${resultado}`);
    }
    setTabuada(tabuadaSet);
  };

  // Função para selecionar um número e calcular a tabuada
  const selecionarNumero = (x) => {
    setNumero(x);
    calcularTabuada(x);
  };

  // Renderiza os botões numerados 
  const botoesNumerados = Array.from({ length: 9 }, (_, index) => (
    <View key={index} style={{ backgroundColor: numero === index + 1 ? 'black' : 'transparent', margin: 5 }}>
      <Button
        title={`${index + 1}`}
        color="black"
        onPress={() => selecionarNumero(index + 1)}
      />
    </View>
  ));

  return (
    <View style={{ flex: 1, flexDirection: 'column', marginTop: 175, backgroundColor: 'white', alignItems: 'center' }}>
      <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}>
        Tabuada do {numero !== null ? numero : 'selecione um número'}:
      </Text>

      {/* Mapeia e exibe os resultados da tabuada */}
      {tabuada.map((item, index) => (
        <Text key={index} style={{ color: 'black', fontSize: 20, textAlign: 'center' }}>
          {item}
        </Text>
      ))}

      {/* Renderiza os botões numerados */}
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        {botoesNumerados}
      </View>

      <StatusBar style='light' backgroundColor='black' />
    </View>
  );
}
