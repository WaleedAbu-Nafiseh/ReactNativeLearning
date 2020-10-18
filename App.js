import React from 'react';
import ColorList from './src/Components/ColorList';
import ColorDetails from './src/Components/ColorDetails';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const {Navigator, Screen} = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="home"
          options={{title: 'Color List'}}
          component={ColorList}
        />
        <Screen
          name="details"
          options={{title: 'Color Details'}}
          component={ColorDetails}
        />
      </Navigator>
    </NavigationContainer>
  );
}
