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
          style={{flex:1, height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={this.props.onSearchTxtChange}
          value={this.props.searchTxt} 
          autoCorrect={false}
          autoCapitalize={"none"}
          />
        <Button
          onPress={this.props.searchForPerson.bind(this.props)}
          title="Search"
          color="#841584"
          accessibilityLabel="Search for a Person" />
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
});

function mapStateToProps(state) {
  return {
    searchTxt: state.personSearchActions.searchTxt
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
