import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import PeopleItem from './PeopleItem';

class PeopleList extends Component {
  render() {
    return (
      <View style={styles.container}>
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
    flexWrap: 'wrap',
    width: 355,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
export default connect(mapStateToProps)(PeopleList);
