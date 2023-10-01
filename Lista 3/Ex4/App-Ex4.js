import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { StyleSheet } from "react-native";

export default function App() {

  return (
    <View style={{ flex: 1, flexDirection: 'column', marginTop: 50, backgroundColor: 'white'}}>
      <Text style={{color: 'black', fontWeight: 'normal', fontSize: 20, textAlign: 'center'}}>
          {texto}
      </Text>

      <View style={{flex:1, marginTop: 50}}>
      <View style={{backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', width:'100%'}}>
          <Button title='Botão 1' color={'green'} onPress={() => botaoClick(1)}></Button>
      </View>

      <View style={{backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', width:'100%'}}>
          <Button title='Botão 2' color={'blue'} onPress={() => botaoClick(2)}></Button>
      </View>

      <View style={{backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center', width:'100%'}}>
          <Button title='Botão 3' color={'orange'} onPress={() => botaoClick(3)}></Button>
      </View>
      </View>
</View>
    );
}