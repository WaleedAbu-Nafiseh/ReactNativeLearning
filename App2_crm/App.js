/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, Text, View, TextInput, Dimensions} from 'react-native';

const App: () => React$Node = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text style={{paddingTop: windowWidth*0.05}}>My name is Waleed</Text>
        <TextInput style={{backgroundColor: 'red'}}>Please write</TextInput>
      </View>
    </>
  );
};
export default App;
