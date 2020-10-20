import React from 'react';
import {
  Dimensions,
  View,
  TouchableHighlight,
  StyleSheet,
  Text,
} from 'react-native';
const {height, width} = Dimensions.get('window');

export default function ColorButton({backgroundColor, onPress = (f) => f}) {
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
});
