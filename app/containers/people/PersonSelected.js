import React, {PropTypes} from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';

class PersonSelected extends React.Component {
  getImgPath(file){
    return {uri:`https://image.tmdb.org/t/p/w500${file}`}
  }

  render() {
    let obj = this.props.data
    return (
      <TouchableOpacity style={[styles.main]} onPress={this.props.clickOnPerson.bind(obj)}>
        <Image
          style={{flex: 1}}
          source={this.getImgPath(obj.profile_path)}
        />
        <Text>{obj.name}</Text>
      </TouchableOpacity>
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
});


function mapStateToProps(state) {
  return {
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    clickOnPerson: function(){
    }
  }
}

PersonSelected = connect(mapStateToProps, mapDispatchToProps)(PersonSelected)
export default PersonSelected
