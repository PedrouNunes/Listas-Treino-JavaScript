import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, TextInput, View } from 'react-native';

export default function App() {
  const [resposta, atualizaResposta] = useState('');
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cpf, setCpf] = useState('');

  const botaoClick = () => {
    const mensagem = `Nome: ${nome}\nIdade: ${idade}\nCPF: ${cpf}`;
    alert(mensagem);
  }

  return (
    // A primeira View é o contêiner principal que abriga todo o conteúdo.
    <View style={{ flex: 1, flexDirection: 'column', marginTop: 30, backgroundColor: '#FED2AF', alignContent: 'center'}}>
      {/* Esta View contém o título "Cadastro de Usuários". */}
      <Text style={{color: 'black', fontWeight: 'bold', fontSize: 30, textAlign: 'center'}}>
        Cadastro de Usuários
      </Text>


      {/* Esta View agrupa as entradas de texto para Nome, Idade e Cpf. */}
      <View style={{marginTop: 10, borderWidth:1, borderColor: 'black', borderBottomColor: 'black', top: 10, marginLeft: 20, marginRight: 20, marginEnd: 20}}>
        <TextInput style={{ fontSize: 20, borderColor: 'black', borderBottomWidth:1, width: 300, marginLeft: 20 }} placeholder='Nome:' value={nome} onChangeText={(txt) => setNome(txt)}></TextInput>
        <TextInput style={{ fontSize: 20, borderBottomWidth:1, marginTop:12, width: 300, marginLeft: 20 }} placeholder='Idade:' value={idade} onChangeText={(txt) => setIdade(txt)}></TextInput>
        <TextInput style={{ fontSize: 20, borderBottomWidth:1, marginTop:12, width: 300, marginLeft: 20, marginBottom: 5 }} placeholder='Cpf:' value={cpf} onChangeText={(txt) => setCpf(txt)}></TextInput>
      </View>


      {/* Esta View contém o botão "Confirmar". */}
      <View style={{justifyContent: 'center', alignItems: 'center', width:'70%', alignContent: 'center', marginLeft: 50, marginTop: 20}}>
        <Button title='Confirmar' color={'green'} onPress={botaoClick}></Button>
      </View>
      
      {/* Esta View exibe a resposta após o botão "Confirmar" ser clicado. */}
      <View style={{ flex: 1, flexDirection: 'column', marginTop: 20, alignContent: 'center'}}>
        <Text style={{color: 'black', fontWeight: 'normal', fontSize: 25, textAlign: 'center'}}>
          {resposta}
        </Text>
      </View>
      <StatusBar style='light' backgroundColor='black'></StatusBar>
    </View>
  );
}
