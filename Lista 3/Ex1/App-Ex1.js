import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: 'column', marginTop: 250}}>
      <Text style={{color: 'blue', fontWeight: 'bold', fontSize: 25, textAlign: 'left'}}>
          Esse é o AZULÃO!
      </Text>
      <Text style={{color: 'red', fontWeight: 'normal', fontSize: 12, textAlign: 'left'}}>
          Esse é o vermelinho!
      </Text>
      
      <Text style={{ fontWeight: 'normal', fontSize: 12, textAlign: 'left' }}>
        Esse mistura dos dois!!{' '}
        <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 24 }}>AZULÃO</Text>
        {' '}
        e
        {' '}
        <Text style={{ color: 'red' }}>vermelinho</Text>
        !!!
      </Text>

      
    </View>
      

    );
}