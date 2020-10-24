import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {connect} from 'react-redux';
import {getTheme} from 'react-native-material-kit';
import possibleConstructorReturn from '@babel/runtime/helpers/esm/possibleConstructorReturn';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';
const theme = getTheme();

const PeopleItem = (props) => {
  return (
    <View>
      <Text>
        {props.people.firstName}
        {props.people.lastName}
      </Text>
      <Text>{props.people.id}</Text>
    </View>
  );
};
const mapStateToProps = (state) => {
  return {people: state.people};
};
const styles = StyleSheet.create({
  card: {
    marginTop: 20,
  },
  title: {
    top: 20,
    left: 80,
    fontSize: 24,
  },
  action: {
    backgroundColor: 'black',
    color: 'white',
  },
});
export default connect(null, actions)(PeopleItem);
