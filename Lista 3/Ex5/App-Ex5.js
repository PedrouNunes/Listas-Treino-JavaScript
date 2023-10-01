import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { StyleSheet } from "react-native";

export default function App() {
const texto = ['Olá, esse é o texto inicial!', 'Você clicou no botão.', 'Clicou novamente.', 'Se clicar de novo eu vou sumir...', ''];
const [id, setId] = useState(0);

  const botaoClick = () => {
    setId((id + 1) %texto.length)
  }

  return (

    <View style={{ flex: 1, flexDirection: 'column', marginTop: 50, backgroundColor: 'white', alignContent: 'center', marginTop: 200}}>
      <Text style={{color: 'black', fontWeight: 'normal', fontSize: 20, textAlign: 'center'}}>
          {texto[id]}
      </Text>

      <View style={{backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', width:'70%', alignContent: 'center', marginLeft: 50, marginTop: 20}}>
          <Button title='Botão 1' color={'green'} onPress={() => botaoClick()}></Button>
      </View>
      
      </View>

    

    );
}