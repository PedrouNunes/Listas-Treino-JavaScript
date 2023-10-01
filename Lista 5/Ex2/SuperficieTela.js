import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function SuperficieTela() {
  const [texto] = useState('Calculadora de Superfície');
  const [resposta, atualizaResposta] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const calcularSuperficieCorporal = () => {
    if (altura && peso) {
      const alturaCm = parseFloat(altura);
      const pesoKg = parseFloat(peso);
      const superficieCalculada = (alturaCm * pesoKg) / 3600;

      atualizaResposta(`Sua Superfície Corporal é: ${superficieCalculada.toFixed(2)}m²`);
    }
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column', marginTop: 30, backgroundColor: 'white', alignContent: 'center'}}>
      <Text style={{color: 'black', fontWeight: 'bold', fontSize: 30, textAlign: 'center'}}>
          {texto}
      </Text>

      <View style={{marginTop: 10, flexDirection: 'row', alignItems: 'stretch'}}>
        <Text style={{fontWeight: 'normal', fontSize: 15, marginLeft: 10}}>Peso:</Text>
        <TextInput style={{ fontSize: 10, borderColor: 'black', borderWidth:1, width: 100, marginLeft: 7 }} placeholder='Kgs' onChangeText={(txt) => setPeso(txt)}></TextInput>
        <Text style={{fontWeight: 'normal', fontSize: 15, marginLeft: 10}}>Altura:</Text>
        <TextInput style={{ fontSize: 10, borderColor: 'black', borderWidth:1, width: 100, marginLeft: 20 }} placeholder='Metros' onChangeText={(txt) => setAltura(txt)}></TextInput>
      </View>

      <View style={{justifyContent: 'center', width:'70%', alignContent: 'center', marginLeft: 50, marginTop: 20}}>
          <Button title='Calcular' color={'purple'} onPress={calcularSuperficieCorporal}></Button>
      </View>
      
      <View style={{ flex: 1, flexDirection: 'column', marginTop: 20, backgroundColor: 'white', alignContent: 'center'}}>
      <Text style={{color: 'black', fontWeight: 'normal', fontSize: 12, textAlign: 'center'}}>
          {resposta}
      </Text>
      </View>
  </View>
  );
}
