import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';

class React$Node {}

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <Text style={styles.defaultText}>وليد</Text>
        <Text style={[styles.selectedText,styles.defaultText]}>محمد</Text>
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
  selectedText: {
    backgroundColor: 'blue',
    fontWeight: 'bold',
  },
  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#DDD',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
export default App;
