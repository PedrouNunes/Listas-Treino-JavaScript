import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { StyleSheet } from "react-native";
import styles from './Estilo';

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#ffff',
      justifyContent: 'center',
      alignItems: 'center', 
      flexDirection: 'row'
    }}>
     <View style={{width: 100, height: 100, backgroundColor: 'orange'}}></View>
     <View style={{width: 100, height: 100, backgroundColor: 'purple'}}></View>
     <View style={{width: 100, height: 100, backgroundColor: 'green'}}></View>
    </View>
  );
}


