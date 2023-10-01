import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function TelaFormulario({ navigation }) {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cpf, setCpf] = useState('');

  const botaoConfirmar = () => {
    // Envie os dados para a próxima tela
    navigation.navigate('TelaDados', { nome, idade, cpf });
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'light-purple' }}>
      <View>
      <Text style={{color: 'black', fontWeight: 'bold', fontSize: 30, textAlign: 'center'}}>
        Informe seus dados         
       </Text>
      </View>
      <View style={{ top: 10, justifyContent: 'center', alignItems: 'center', top: 20 }}>
        <TextInput
          style={{ borderColor: 'black', borderBottomWidth: 1, bottom: 20 }}
          placeholder="Nome"
          value={nome}
          onChangeText={(txt) => setNome(txt)}
        />
        <TextInput
          style={{ borderColor: 'black', borderBottomWidth: 1, bottom: 20 }}
          placeholder="Idade"
          value={idade}
          onChangeText={(txt) => setIdade(txt)}
        />
        <TextInput
          style={{ borderColor: 'black', borderBottomWidth: 1, bottom: 20 }}
          placeholder="CPF"
          value={cpf}
          onChangeText={(txt) => setCpf(txt)}
        />
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          style={{ bottom: 20, marginTop: 10 }}
          title="Confirmar"
          color={'purple'}
          onPress={botaoConfirmar}
        />
      </View>
    </View>
  );
}
