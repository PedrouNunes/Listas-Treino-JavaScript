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
      //alignItems: 'center', 
      flexDirection: 'column'
    }}>
     <View style={{width: '100%', height: '50%', backgroundColor: '#f08080'}}></View>
     <View style={{width: '100%', height: '50%', backgroundColor: '#00ffff'}}></View>
    </View>
  );
}


