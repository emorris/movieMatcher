import React, {PropTypes} from 'react'
import {StyleSheet, ScrollView, Text, View, Button, TextInput, Image} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { personSearchChange } from '../../actions/personSearch'
import { sendPersonSearch } from '../../actions/movieApi'
import UserCard from './UserCard'

class SearchResults extends React.Component {
  isSelected(obj){
    let found = this.props.selected_people.find(
      function(selected){
        return selected.id == obj.id
      }
    )
    return found !== undefined
  }

  results(){
    console.log(this.props.selected_people)
    return this.props.results.map((obj) => {
      return(
        <UserCard
          data={obj}
          key={`person-search-${obj.id}`}
          selected={ this.isSelected(obj) }
        />
      )
    })
  }

  render() {
    if(this.props.results.length > 0){
      return(
        <View style={[styles.main]}>
          <Text>Search Results for {this.props.searchTxt}</Text>
          <ScrollView>
            {this.results()}
          </ScrollView>
        </View>
      )
    }
    return null
  }
}


var styles = StyleSheet.create({
  main: {
    flex:1,
  },
});

function mapStateToProps(state) {
  return {
    results: state.personSearch.results,
    searchTxt: state.personSearch.searchTxtResults,
    selected_people: state.addPeople.people
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

SearchResults = connect(mapStateToProps, mapDispatchToProps)(SearchResults)
export default SearchResults
