import React, {PropTypes} from 'react'
import {StyleSheet, ScrollView, Text, View, Button, TextInput, Image} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { personSearchChange } from '../../actions/personSearch'
import { sendPersonSearch } from '../../actions/movieApi'
import UserCard from './UserCard'

class SearchResults extends React.Component {

  results(){
    console.log(this.props.results)
    return this.props.results.map((obj) => {
      return <UserCard data={obj} key={`person-search-${obj.id}`} />
    })
  }

  showResults(){
    if(this.props.results.length > 0){
      return(
        <View style={{flex:1, flexDirection: 'column'}}>
          <Text>Search Results:</Text>
          {this.results()}
        </View>
      )
    }
    return null
  }

  render() {
    return (
      <ScrollView style={[styles.main]}>
        {this.showResults()}
      </ScrollView>
    );
  }
}


var styles = StyleSheet.create({
  main: {
    flex:1
  },
});

function mapStateToProps(state) {
  return {
    results: state.personSearchActions.results
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

SearchResults = connect(mapStateToProps, mapDispatchToProps)(SearchResults)
export default SearchResults
