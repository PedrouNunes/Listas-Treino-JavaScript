import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { StyleSheet } from "react-native";
import styles from './Estilo';

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#ffff',
      flexDirection: 'column'
    }}>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        
        <View style={{ flex: 0.3, backgroundColor: 'grey' }}></View>

        <View style={{ flex: 1.2, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: '30%', backgroundColor: 'blue', height: 110, borderWidth: 3, borderRadius: 100}}></View>
        </View>

        <View style={{ flex: 2, backgroundColor: 'salmon' }}></View>

        <View style={{ flex: 0.8, backgroundColor: 'white', flexDirection: 'row', justifyContent:'space-around', alignItems: 'center'}}>
          <View style={{ width: '20%', height: '35%', backgroundColor: 'yellow', borderWidth: 3, borderRadius: 100, marginLeft: 30 }}></View>
          <View style={{ width: '20%', height: '35%', backgroundColor: 'purple', borderWidth: 3, borderRadius: 100 }}></View>
          <View style={{ width: '20%', height: '35%', backgroundColor: 'lightgreen', borderWidth: 3, borderRadius: 100, marginRight: 30}}></View>
        </View>

      </View>
    </View>
  );
}