import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Icon from 'react-native-vector-icons/EvilIcons';

class CompanyList extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
        <Text>CompanyList</Text>
    ),
  };
  render() {
    return (
      <View>
        <Text>CompanyList screen</Text>
      </View>
    );
  }
}

export default connect(null, actions)(CompanyList);
