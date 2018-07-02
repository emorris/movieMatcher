import React, {PropTypes} from 'react'
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { personSearchChange } from '../../actions/personSearch'
import { sendPersonSearch } from '../../actions/movieApi'

class SearchBox extends React.Component {
  render() {
    return (
      <View style={[styles.main]}>
        <TextInput
          style={[styles.searchInput]}
          onChangeText={this.props.onSearchTxtChange}
          value={this.props.searchTxt}
          autoCorrect={false}
          placeholder={"Who are you looking for?"}
          autoCapitalize={"none"}
          />
        <View
          style={[styles.buttonStyle]}>
          <Button
            onPress={this.props.searchForPerson.bind(this.props)}
            title="Search"
            color="white"
            accessibilityLabel="Search for a Person" />
        </View>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  main: {
    marginTop: 4,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row'
  },
  searchInput:{
    flex:1,
    height: 40,
    borderColor: 'gray',
    margin: 1,
    borderWidth: 1
  },
  buttonStyle:{
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: 15,
    textAlign: 'center',
    fontSize: 16,
    padding: 4
  }
});

function mapStateToProps(state) {
  return {
    searchTxt: state.personSearch.searchTxt
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchTxtChange: function(txt){
      dispatch(personSearchChange(txt))
    },
    searchForPerson: function(){
      console.log("searchForPerson")
      dispatch(sendPersonSearch(this.searchTxt))
    }
  }
}

SearchBox = connect(mapStateToProps, mapDispatchToProps)(SearchBox)
export default SearchBox
