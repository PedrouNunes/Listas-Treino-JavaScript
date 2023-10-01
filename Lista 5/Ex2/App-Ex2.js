import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IMCTela from './IMCTela';
import PesoIdealTela from './PesoIdealTela';
import SuperficieTela from './SuperficieTela';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="IMC" component={IMCTela} />
        <Tab.Screen name="Peso Ideal" component={PesoIdealTela} />
        <Tab.Screen name="Superfície Corporal" component={SuperficieTela} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
