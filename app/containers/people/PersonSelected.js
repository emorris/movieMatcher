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
        <View>
          <TouchableOpacity onPress={this.props.clickOnPerson.bind(obj)}>
            <View  style={{width: 50, height: 50}}>
              <Image
                style={[styles.main]}
                source={getImgMovieApiPath(obj.profile_path)}
              />
            </View>
            <Text>{obj.name}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={this.props.removePerson.bind(obj)}>
            <View>
              <Text style={styles.removeBtn}>x</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  main: {
    flex:1,
    height:100,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 5,
    padding: 5,
    margin: 5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
  },
  removeBtn:{
    borderColor: "black",
    borderWidth: 1,
    padding:2,
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
