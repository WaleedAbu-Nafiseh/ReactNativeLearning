import React from 'react';
import {
  Dimensions,
  Image,
  View,
  ProgressViewIOS,
  ProgressBarAndroid,
  ActivityIndicator,
    Button,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import picLogo from './assets/favicon.png';
const App: () => React$Node = () => {
  const onPressed = () => {
    alert('Hello');
  };
  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#61DBFB" />
        <Button title="ClickMe!" onPress={onPressed} />
        <Text style={styles.defaultText}>وليد</Text>
        <Text style={[styles.selectedText, styles.defaultText]}>محمد</Text>
        <Text style={styles.defaultText}>باسل</Text>
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
    borderWidth: StyleSheet.hairlineWidth,
    color: 'red',
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
