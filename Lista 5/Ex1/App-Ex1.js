import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './TelaInicial';
import TelaFormulario from './TelaFormulario';
import TelaDados from './TelaDados';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="TelaFormulario" component={TelaFormulario} />
        <Stack.Screen name="TelaDados" component={TelaDados} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
