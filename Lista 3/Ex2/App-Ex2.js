import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 0.25, flexDirection: 'column', marginTop: 200, backgroundColor: 'lightgreen'}}>
      <Text style={{color: 'blue', fontWeight: 'normal', fontSize: 30, textAlign: 'center'}}>
          Este é outro exemplo de texto!
      </Text>

      <View style={{backgroundColor: 'blue', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
          Com alinhamentos a esquerda.
        </Text>
      </View>

      <View style={{backgroundColor: 'yellow', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 12 }}>
          Com alinhamentos a direita.
        </Text>
      </View>

      <View style={{backgroundColor: 'lightgreen', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}>
          Com alinhamento centralizado.
        </Text>
      </View>

      <View style={{backgroundColor: 'pink', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12 }}>
          E cor de fundo.
        </Text>
      </View>

      
    </View>
    

    );
}