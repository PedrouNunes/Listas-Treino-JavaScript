import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View, Image } from 'react-native';

export default function App() {
  const [texto, atualizaTexto] = useState('clique em algum dos botões');
  const [imagemIndex, setImagemIndex] = useState(0);
  const imagens = [
    require('./assets/pokebola.png'),
    require('./assets/bulbasauro.png'),
    require('./assets/charmander.png'),
    require('./assets/squirtle.png'),
  ];

  const botaoClick = (imagemIndex) => {
    setImagemIndex((imagemIndex) % imagens.length);
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column', marginTop: 175, backgroundColor: 'white', alignItems: 'center' }}>
      <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}>
        {texto}
      </Text>

      <Image
        style={{ width: '51%', height: '30%', marginTop: 20, resizeMode:'contain' }}
        source={imagens[imagemIndex]}
      />

      <View style={{ justifyContent: 'center', flexDirection: 'row', width: '70%', alignItems: 'center', marginTop: 40 }}>
        <Button title='Bulbassauro' color='green' onPress={() => botaoClick(1)}></Button>
        <Button title='Squirtle' color='blue'  onPress={() => botaoClick(3)}></Button>
        <Button title='Charmander' color='red'  onPress={() => botaoClick(2)}></Button>
      </View>

      <StatusBar style='light' backgroundColor='black' />
    </View>
  );
}
