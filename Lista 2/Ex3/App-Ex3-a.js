import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { StyleSheet } from "react-native";
import styles from './Estilo';

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#ffff',
     // justifyContent: 'center',
      //alignContent: 'flex-start'
      flexDirection: 'row'
    }}>
        <View style={{width: '35%', height: '100%', backgroundColor: '#9acd32'}}></View>
        <View style={{width: '22%', height: '100%', backgroundColor: '#f08080'}}></View>
        <View style={{width: '35%', height: '100%', backgroundColor: '#add8e6'}}></View>
     </View>
  );
}


