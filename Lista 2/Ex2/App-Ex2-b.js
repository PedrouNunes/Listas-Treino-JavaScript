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
    }}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{width: '50%', height: '100%', backgroundColor: '#f08080'}}></View>
      </View>
      <View style={{flex: 1, flexDirection: 'row-reverse'}}>
        <View style={{width: '50%', height: '100%', backgroundColor: '#00ffff', alignContent: 'flex-end'}}></View>
      </View>
     </View>
  );
}


