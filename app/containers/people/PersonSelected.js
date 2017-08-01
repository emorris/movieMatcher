import React, {PropTypes} from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import {getImgMovieApiPath} from '../../helpers'
import { removePersonFromMatching } from "../../actions/matchPerson"
class PersonSelected extends React.Component {

  render() {
    let obj = this.props.data
    return (
      <View style={[styles.main]} >
        <TouchableOpacity onPress={this.props.clickOnPerson.bind(obj)}>
          <Image
            style={[styles.main]}
            source={getImgMovieApiPath(obj.profile_path)}
          />
          <Text>{obj.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.removePerson.bind(obj)}>
          <Text style={styles.removeBtn}>Remove</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  main: {
    flex:1,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 5,
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  image: {
    height:100,
    flex: 1,
  },
  removeBtn:{
    borderColor: "black",
    borderWidth: 1,
    padding:10,
    borderRadius: 5,
    color: "red",
    textAlign: "center"
  }
});


function mapStateToProps(state) {
  return {
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    removePerson: function(){
      dispatch(removePersonFromMatching(this))
    },
    clickOnPerson: function(){
      console.log("To Do Load Bio")
    }
  }
}

PersonSelected = connect(mapStateToProps, mapDispatchToProps)(PersonSelected)
export default PersonSelected
