import React, {useState, useRef} from 'react';
import {StyleSheet, View, Button, TextInput, Alert} from 'react-native';
import set from '@babel/runtime/helpers/esm/set';

export default function ColorForm({onNewColor = (f) => f}) {
  const [inputValue, setValue] = useState('');
  const input = useRef();
  return (
    <View style={styles.container}>
      <TextInput
        ref={input}
        style={styles.txtInput}
        value={inputValue}
        onChangeText={setValue}
        placeholder="Enter a new Color..."
      />
      <Button
        title="add"
        onPress={() => {

          onNewColor(inputValue);
          input.current.blur();
          setValue('');
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtInput: {
    flex: 1,
    borderWidth: 2,
    fontSize: 20,
    padding: 5,
    borderRadius: 5,
  },
});
