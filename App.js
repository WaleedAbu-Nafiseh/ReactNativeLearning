import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  View,
  TouchableHighlight,
  ProgressViewIOS,
  ProgressBarAndroid,
  ActivityIndicator,
  Button,
  Alert,
  StyleSheet,
  Text,
  Platform,
  StatusBar,
} from 'react-native';
import picLogo from './assets/favicon.png';
const {height, width} = Dimensions.get('window');
const App: () => React$Node = () => {
  const [backgroundColor, setBackgroundColor] = useState('blue');
  const onPressed = () => {
    Alert.alert('The OS is ' + Platform.OS);
  };
  function ColorButon({backgroundColor, onPress = (f) => f}) {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor={backgroundColor}
        onPress={() => onPress(backgroundColor)}>
        <View style={styles.row}>
          <View style={[styles.sample, {backgroundColor}]} />
          <Text style={styles.defaultText}>{backgroundColor}</Text>
        </View>
      </TouchableHighlight>
    );
  }
  return (
    <>
      <StatusBar hidden={true} />
      <View style={[styles.container, {backgroundColor}]}>
        <ColorButon backgroundColor={'red'} onPress={setBackgroundColor} />
        <ColorButon backgroundColor={'blue'} onPress={setBackgroundColor} />
        <ColorButon backgroundColor={'green'} onPress={setBackgroundColor} />
        <Button title="ClickMe you stupid person!\n" onPress={onPressed} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  defaultText: {
    textAlign: 'center',
    fontSize: 22,
    padding: 10,
    margin: 5,
  },
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
