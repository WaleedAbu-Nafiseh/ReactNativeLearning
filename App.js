import React, {useState} from 'react';
import {
  Dimensions,
  View,
  Button,
  Alert,
  StyleSheet,
  Platform,
  StatusBar,
  FlatList,
} from 'react-native';
import ColorButton from './src/Components/ColorButton';
// eslint-disable-next-line no-unused-vars
const {height, width} = Dimensions.get('window');
import colorsList from './data/defaultColors.json';

const App: () => React$Node = () => {
  const [backgroundColor, setBackgroundColor] = useState('blue');

  return (

    <>
      <StatusBar hidden={true} />
      <FlatList
        style={[styles.container, {backgroundColor}]}
        data={colorsList}
        renderItem={({item}) => {
          return (
            <ColorButton
              key={item.id}
              backgroundColor={item.color}
              onPress={setBackgroundColor}
            />
          );
        }}
      />
    </>
  );
};
const styles = StyleSheet.create({
  sample: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: 'green',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  picStyle: {
    borderRadius: 100,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
  },
  selectedText: {
    backgroundColor: 'blue',
    fontWeight: 'bold',
  },
  container: {
    display: 'flex',
    backgroundColor: '#DDD',
  },
});
export default App;
