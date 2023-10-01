import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { StyleSheet } from "react-native";
import { ImageBackground } from 'react-native';

export default function App() {
  const [texto] = useState('Calculadora de IMC');
  const [resposta, atualizaResposta] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const botaoClick = (setPeso, setAltura) => {
    const imc = peso / (altura * altura);

      let situacao = "";
      if (imc < 18.5) {
        situacao = "Abaixo do peso";
      } else if (imc < 24.9) {
        situacao = "Peso normal";
      } else {
        situacao = "Acima do peso";
      }

    atualizaResposta(`Seu IMC é: ${imc.toFixed(1)}\nSituação: ${situacao}`)
  }

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
          <Button title='Calcular IMC' color={'purple'} onPress={() => botaoClick(setPeso, setAltura)}></Button>
      </View>
      
      <View style={{ flex: 1, flexDirection: 'column', marginTop: 20, backgroundColor: 'white', alignContent: 'center'}}>
      <Text style={{color: 'black', fontWeight: 'normal', fontSize: 25, textAlign: 'center'}}>
          {resposta}
      </Text>
      </View>

     
      <StatusBar style='light' backgroundColor='black'></StatusBar>
      </View>

    

    );
}