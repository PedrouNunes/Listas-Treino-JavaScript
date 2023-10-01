import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { StyleSheet } from "react-native";

export default function App() {
  const [texto] = useState('Dados do Usuário');
  const [resposta, atualizaResposta] = useState('');
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  const botaoClick = (setNome, setIdade) => {
    atualizaResposta(`Seu nome é ${nome} e você tem ${idade} anos de idade.`)
  }

  return (
    <View style={{ flex: 1, flexDirection: 'column', marginTop: 30, backgroundColor: 'white', alignContent: 'center'}}>
      <Text style={{color: 'black', fontWeight: 'bold', fontSize: 30, textAlign: 'center'}}>
          {texto}
      </Text>

      <View style={{marginTop: 10}}>
        <TextInput style={{ fontSize: 20, borderColor: 'black', borderWidth:1, width: 300, marginLeft: 20 }} placeholder='Digite seu nome...' onChangeText={(txt) => setNome(txt)}></TextInput>
        <TextInput style={{ fontSize: 20, borderWidth:1, marginTop:12, width: 300, marginLeft: 20 }} placeholder='Digite sua idade...' onChangeText={(txt) => setIdade(txt)}></TextInput>
      </View>
      

      <View style={{justifyContent: 'center', alignItems: 'center', width:'70%', alignContent: 'center', marginLeft: 50, marginTop: 20}}>
          <Button title='Botão 1' color={'purple'} onPress={() => botaoClick(setNome, setIdade)}></Button>
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