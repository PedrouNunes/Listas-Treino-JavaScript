import React from 'react';
import { View, Button } from 'react-native';

export default function TelaInicial({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
      color={'purple'}
        title="Acessar Formulário"
        onPress={() => navigation.navigate('TelaFormulario')}
      />
    </View>
  );w
}
