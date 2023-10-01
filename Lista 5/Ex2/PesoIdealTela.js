import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Text, RadioButton } from 'react-native-paper'; // Importe apenas os componentes necessários do react-native-paper
import { Button } from 'react-native'; // Importe o Button do react-native

export default function PesoIdealTela() {
  const [texto] = useState('Calculadora de Peso Ideal');
  const [altura, setAltura] = useState('');
  const [sexo, setSexo] = useState('Masculino');
  const [pesoIdeal, setPesoIdeal] = useState(null);
  const [resposta, setResposta] = useState('');

  const calcularPesoIdeal = () => {
    if (altura) {
      const alturaEmCm = parseFloat(altura);
      let pesoIdealCalculado;

      if (sexo === 'Masculino') {
        pesoIdealCalculado = 52 + 0.75 * (alturaEmCm - 152.4);
      } else {
        pesoIdealCalculado = 49 + 0.67 * (alturaEmCm - 152.4);
      }

      setPesoIdeal(pesoIdealCalculado.toFixed(2));
      setResposta(`Seu peso ideal é: ${pesoIdealCalculado.toFixed(2)} Kg`);
    }
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column', marginTop: 30, backgroundColor: 'white', alignContent: 'center'}}>
      <Text style={{color: 'black', fontWeight: 'bold', fontSize: 30, textAlign: 'center'}}>
          {texto}
      </Text>

      <View style={{marginTop: 10, flexDirection: 'row', alignItems: 'stretch'}}>
        <Text style={{fontWeight: 'normal', fontSize: 15, marginLeft: 100}}>Altura:</Text>
        <TextInput style={{ fontSize: 10, borderColor: 'black', borderWidth:1, width: 100, height: 20 ,marginLeft: 10 }} placeholder='Metros' onChangeText={(txt) => setAltura(txt)}></TextInput>
      </View>
    
    <View style={{justifyContent: 'center', width:'70%', alignContent: 'center', marginLeft: 50, marginTop: 20}}>
      <RadioButton.Group
        onValueChange={(value) => setSexo(value)}
        value={sexo}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
         <Text>Sexo:</Text>
          <RadioButton.Android value="Masculino" />
          <Text>Masculino</Text>
        
          <RadioButton.Android value="Feminino" />
          <Text>Feminino</Text>
        </View>
      </RadioButton.Group>
      </View>

      <View style={{justifyContent: 'center', width:'70%', alignContent: 'center', marginLeft: 50, marginTop: 20}}>
          <Button title='Calcular' color={'purple'} onPress={calcularPesoIdeal}></Button>
      </View>
      
      <View style={{ flex: 1, flexDirection: 'column', marginTop: 20, backgroundColor: 'white', alignContent: 'center'}}>
      <Text style={{color: 'black', fontWeight: 'normal', fontSize: 12, textAlign: 'center'}}>
          {resposta}
      </Text>
      </View>
    </View>
  );
}
