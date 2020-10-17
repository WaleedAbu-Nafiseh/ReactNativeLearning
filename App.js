import React, {useState} from 'react';
import {
  Dimensions,
  View,
  Button,
  Alert,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import ColorButton from './src/Components/ColorButton';
const {height, width} = Dimensions.get('window');
const App: () => React$Node = () => {
  const [backgroundColor, setBackgroundColor] = useState('blue');
  const onPressed = () => {
    Alert.alert('The OS is ' + Platform.OS);
  };

  return (
    <>
      <StatusBar hidden={true} />
      <View style={[styles.container, {backgroundColor}]}>
        <ColorButton backgroundColor={'red'} onPress={setBackgroundColor} />
        <ColorButton backgroundColor={'blue'} onPress={setBackgroundColor} />
        <ColorButton backgroundColor={'green'} onPress={setBackgroundColor} />
        <Button title="ClickMe you stupid person!\n" onPress={onPressed} />
      </View>
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
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#DDD',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
export default App;
