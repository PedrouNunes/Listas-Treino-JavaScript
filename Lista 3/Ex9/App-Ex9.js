import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View, Image, Switch } from 'react-native';

export default function App() {
  const [enabled, setEnable] = useState(false);
  const [imagemIndex, setImagemIndex] = useState(0);
  const imagens = [
    require('./assets/pokebolafechada.png'),
    require('./assets/pokebolaaberta.png'),
  ];

  function toggleSwitch(imagemIndex) {
     setEnable((previousState) => !previousState);
     setImagemIndex((imagemIndex ) => imagemIndex == 1 ? 0 : 1);
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column', marginTop: 175, backgroundColor: 'white', alignItems: 'center' }}>
     <Switch 
     trackColor={{false: 'grey', true: 'black'}}
     thumbColor={enabled ? 'red': 'white'}
     onChange={() => toggleSwitch(1)}
     value={enabled}
     />

      <Image
        style={{ width: '51%', height: '30%', marginTop: 20, resizeMode:'contain' }}
        source={imagens[imagemIndex]}
      />

      <StatusBar style='light' backgroundColor='black' />
    </View>
  );
}
