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
            <View >
              <Image
                style={[styles.image]}
                source={getImgMovieApiPath(obj.profile_path)}
              />
            </View>
            <Text style={[styles.name]}>{obj.name}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={this.props.removePerson.bind(obj)}>
            <View style={[styles.removeBtnBlock]}>
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
    width: 85,
    height: 100
  },
  removeBtnBlock:{
    position: 'absolute',
    right: 0,
    top: 0
  },
  removeBtn:{
    fontSize: 20,
    color: "red",
  },
  name:{
    marginTop: 5,
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
