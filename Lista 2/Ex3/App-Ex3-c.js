import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { StyleSheet } from "react-native";
import styles from './Estilo';

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#ffff',
      flexDirection: 'column',
    }}>
    <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: '35%', height: '100%', backgroundColor: 'lightgreen'}}></View>
        <View style={{width: '22%', height: '100%', backgroundColor: '#f08080'}}></View>
        <View style={{width: '35%', height: '100%', backgroundColor: '#add8e6'}}></View>
    </View>
    <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: '100%', height: '100%', backgroundColor: 'purple', alignItems: 'center', justifyContent: 'center'}}>
          <View style={{width: '50%', height: '50%', backgroundColor: 'yellow'}}></View>
        </View>
    </View>
    </View>
  );
}


