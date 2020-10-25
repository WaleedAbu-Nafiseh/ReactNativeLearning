import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PeopleItem from './PeopleItem';
import * as actions from '../actions';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';

class AddPerson extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (<Text>AddPerson</Text>),
  };
  render() {
    return (
      <View>
        <Text>Add person screen</Text>
      </View>
    );
  }
}

export default connect(null, actions)(AddPerson);
