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
    <View style={[theme.cardStyle,styles.card]}>
      <Text style={styles.title}>
        {props.people.firstName}
        {props.people.lastName}
      </Text>
      <Text >{props.people.id}</Text>
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
    fontSize: 20,
  },
  action: {
    backgroundColor: 'black',
    color: 'white',
  },
  icon: {
    position: 'absolute',
    top: 15,
    left: 0,
    color: 'white',
  },id:{

  }
});
export default connect(null, actions)(PeopleItem);
