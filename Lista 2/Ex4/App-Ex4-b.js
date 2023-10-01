import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { StyleSheet } from "react-native";
import styles from './Estilo';

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#ffff',
      //flexDirection: 'column',
      
    }}>
    <View style={{flex: 1, flexDirection: 'row-reverse' ,justifyContent: 'space-between', alignContent: 'space-between'}}>
        <View style={{width: '30%', height: '30%', backgroundColor: '#f08080'}}></View>
        <View style={{width: '30%', height: '30%', backgroundColor: 'blue'}}></View>
    </View>
    <View style={{flex: 1, justifyContent: 'space-between'}}>
    <View style={{width: '30%', height: '30%', backgroundColor: '#f08080', justifyContent: 'row'}}></View>
        <View style={{width: '30%', height: '30%', backgroundColor: 'blue'}}></View>
    </View>
    </View>
    
  );
}


