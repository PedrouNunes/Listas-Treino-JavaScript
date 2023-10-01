import React from 'react';
import { View, Text, Button } from 'react-native';

export default function TelaDados({ route, navigation }) {
  const { nome, idade, cpf } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>CPF: {cpf}</Text>

      <View style={{ flex: 1, top: 300 }}>
        {/* Botão para voltar */}
        <Button
          style={{ marginTop: 10 }}
          title="Voltar"
          color={'purple'}
          onPress={() => navigation.goBack()}
        />
      </View>

      <View style={{ flex: 1 }}>
        {/* Botão para voltar para o início */}
        <Button
          style={{ marginTop: 10 }}
          title="Voltar Para o Início"
          color={'purple'}
          onPress={() => navigation.navigate('TelaInicial')}
        />
      </View>
    </View>
  );
}
