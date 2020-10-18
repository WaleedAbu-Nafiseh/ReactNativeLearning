import React, {useState} from 'react';
import {Dimensions, StyleSheet, StatusBar, FlatList} from 'react-native';
import {useColors} from '../utils/useColors';
import ColorButton from './ColorButton';
import ColorForm from './colorForm';

export default function ColorList() {
  const [backgroundColor, setBackgroundColor] = useState('blue');
  const {colors, addColor} = useColors();
  return (
    <>
      <StatusBar hidden={true} />
      <ColorForm onNewColor={(newColor) => addColor(newColor)} />
      <FlatList
        style={[styles.container, {backgroundColor}]}
        data={colors}
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
