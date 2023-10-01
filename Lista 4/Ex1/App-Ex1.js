import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, TextInput, View } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cpf, setCpf] = useState('');
  const [listaUsuarios, setListaUsuarios] = useState([]);

  const botaoClick = () => {
    const mensagem = `Nome: ${nome}\nIdade: ${idade}\nCPF: ${cpf}`;

    // Adiciona o nome e CPF à lista de usuários como um objeto
    const novoUsuario = { nome, cpf };
    setListaUsuarios([...listaUsuarios, novoUsuario]);
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
      
      <View style={{flex: 1, margin: 20}}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30, textAlign: 'center'}}>
          Listagem
        </Text>

        {/* Renderiza a lista de usuários */}
        {listaUsuarios.map((usuario, index) => (
          <View style={{borderWidth:1, borderColor: 'black', borderBottomColor: 'black'}}>
          <View key={index} style={{marginTop: 10 }}>
            <Text style={{fontSize: 20, borderBottomWidth:0.5}}> {usuario.nome} - {usuario.cpf}</Text>
          </View>
          </View>
        ))}
      </View>

      <StatusBar style='light' backgroundColor='black'></StatusBar>
    </View>
  );
}