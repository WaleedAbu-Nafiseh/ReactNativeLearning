import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

export default function ColorDetails() {
  return (
    <View style={styles.container}>
      <Text>Color details page</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#DDD',
      justifyContent:'center'
  },
});
