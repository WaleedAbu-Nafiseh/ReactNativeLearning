import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Dimensions, Text, StatusBar} from 'react-native';
import {connect, Provider} from 'react-redux';
import PeopleItem from './PeopleItem';
import Icon from 'react-native-vector-icons/EvilIcons';
import HOAIcon from '../../assets/back.svg';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class PeopleList extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
        <Text>PeopleList</Text>

    ),
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <FlatList
          data={this.props.people}
          renderItem={({item}) => <PeopleItem people={item} />}
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {people: state.people};
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    paddingTop: windowHeight * 0.05,
    width: windowWidth,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
export default connect(mapStateToProps)(PeopleList);
