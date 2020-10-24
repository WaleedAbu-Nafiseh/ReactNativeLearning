import React, {Component} from 'react';
import {View, StyleSheet, FlatList,Dimensions, Text} from 'react-native';
import {connect} from 'react-redux';
import PeopleItem from './PeopleItem';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
    flex:1,
    backgroundColor: 'lightblue',
    paddingTop: windowHeight * 0.05,
    width: windowWidth,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
export default connect(mapStateToProps)(PeopleList);
