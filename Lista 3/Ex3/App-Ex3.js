import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={{flex: 1, flexDirection: 'column' ,justifyContent: 'center'}}>
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'lightgreen', justifyContent: 'center'}}>
        <Text style={{color: 'white', fontWeight: 'normal', fontSize: 20, textAlign: 'center'}}>
            Este é mais um exemplo de texto!
        </Text>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor: 'black'}}>
          <Text style={{ color: 'white', fontWeight: 'normal', fontSize: 15, textAlign: 'left', top: 20, paddingLeft: 20, paddingRight: 20}}>
            Porém aqui vamos combinar style e flexbox para dividir o texto em duas colunas. Essa é a primeira coluna! Aqui vai um exemplo de texto qualquer.
          </Text>
          </View>

          <View style={{flex: 1, backgroundColor: 'yellow'}}>
          <Text style={{ color: 'blue', fontWeight: 'nomral', fontSize: 15, textAlign: 'left', top: 20, paddingLeft: 25, paddingRight: 20}}>
              Esse é outro exemplo de texto para popular a segunda coluna, porém sem criatividade para escrever mais! :D
            </Text>
          </View>

      </View>

    </View>
    

    );
}