import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#ffff', flexDirection: 'column' }}>

      <View style={{ flex: 2.3, flexDirection: 'column' }}>

        <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 35, height: 35, backgroundColor: 'black' }}></View>
            <View style={{ width: 80, height: 35, backgroundColor: 'lightpink' }}></View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ width: 35, height: 35, backgroundColor: 'black' }}></View>
            <View style={{ width: 80, height: 35, backgroundColor: 'lightpink' }}></View>           
          </View>

          
        </View>

        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems:'center'}}>
          <View style={{ backgroundColor: 'salmon', width: 250, height: 50, borderRadius: 50}}></View>
        </View>
        <View style={{ flex: 0.8, backgroundColor: 'lavenderblush'}}></View>
        <View style={{ flex: 0.8, backgroundColor: 'navajowhite'}}></View>

      </View>

      <View style={{ flex: 2.3, backgroundColor: 'lightblue', flexDirection: 'column', marginTop: 5 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20}}>
          <View style={{ width: 100, height: 30, backgroundColor: 'brown' }}></View>
          <View style={{ width: 100, height: 30, backgroundColor: 'brown' }}></View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', paddingTop: 40 }}>

        <View style={{ height: 50, width: 50, backgroundColor: 'beige', position: 'relative', borderRadius: 10 }}>
            <View style={{ position: 'absolute', bottom: -15, width: '100%', height: 8, backgroundColor: 'red' }}></View>
        </View>
        <View style={{ height: 50, width: 50, backgroundColor: 'beige', position: 'relative', borderRadius: 10  }}>
            <View style={{ position: 'absolute', bottom: -15, width: '100%', height: 8, backgroundColor: 'red' }}></View>
        </View>
        <View style={{ height: 50, width: 50, backgroundColor: 'beige', position: 'relative', borderRadius: 10  }}>
            <View style={{ position: 'absolute', bottom: -15, width: '100%', height: 8, backgroundColor: 'red' }}></View>
        </View>
        <View style={{ height: 50, width: 50, backgroundColor: 'beige', position: 'relative', borderRadius: 10  }}>
            <View style={{ position: 'absolute', bottom: -15, width: '100%', height: 8, backgroundColor: 'red' }}></View>
        </View>
    </View>
      </View>

      <View style={{ flex: 0.7, backgroundColor: 'blue', flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ width: '15%', height: '60%', backgroundColor: 'lightgrey', marginRight: 40, marginLeft: 11, marginBottom: 0.2 }}></View>
        <View style={{ width: '15%', height: '60%', backgroundColor: 'lightgrey', marginRight: 40 }}></View>
        <View style={{ width: '15%', height: '60%', backgroundColor: 'lightgrey', marginRight: 30, marginRight: 40 }}></View>
        <View style={{ width: '15%', height: '60%', backgroundColor: 'lightgrey', marginRight: 30, marginRight: 40 }}></View>
      </View>
    </View>

  );
}