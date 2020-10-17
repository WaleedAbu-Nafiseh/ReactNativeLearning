import React from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';

export default function ColorForm() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.txtInput} />
      <Button title="add" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
      padding: 2,
    flexDirection: 'row',
      alignItems:"center"
  },
  txtInput: {
    flex: 1,
    borderWidth: 2,
    fontSize: 20,
      padding:5,
      borderRadius:5,
  },
});
