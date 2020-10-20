import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function ColorDetails({route}) {
  const {color} = route.params;
  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <Text>Color details page {color}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#DDD',
    justifyContent: 'center',
  },
});
