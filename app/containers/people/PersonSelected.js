import React, {PropTypes} from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { getPersonCredits } from '../../actions/movieApi'
import { addPersonToMatch } from '../../actions/addPerson'

class PersonSelected extends React.Component {
  getImgPath(file){
    return {uri:`https://image.tmdb.org/t/p/w500${file}`}
  }

  render() {
    let obj = this.props.data
    return (
      <TouchableOpacity style={[styles.main]} onPress={this.props.addPerson.bind(obj)}>
        <View >
          <Image
            style={{width: 100, height: 100}}
            source={this.getImgPath(obj.profile_path)}
          />
          <Text>{obj.name}</Text>
        </View>
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
    borderRadius: 5,
    flexDirection: 'row'
  },
});


function mapStateToProps(state) {
  return {
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPerson: function(){
      dispatch(addPersonToMatch(this))
      dispatch(getPersonCredits(this.id))
    }
  }
}

PersonSelected = connect(mapStateToProps, mapDispatchToProps)(PersonSelected)
export default PersonSelected
