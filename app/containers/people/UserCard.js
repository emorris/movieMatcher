import React, {PropTypes} from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { personSearchChange } from '../../actions/personSearch'
import { getPersonCredits } from '../../actions/movieApi'
import { addPersonToMatching } from '../../actions/matchPerson'
class UserCard extends React.Component {
  getImgPath(file){
    return {uri:`https://image.tmdb.org/t/p/w500${file}`}
  }

  selectedView(){
    if(this.props.selected){
      return(
        <View>
          <Text>SELECTED</Text>
        </View>
      )
    }
  }

  render() {
    let obj = this.props.data
    return (
      <TouchableOpacity onPress={this.props.addPerson.bind(obj)}>
        <View style={[styles.main]}>
          <Image
            style={{width: 50, height: 50}}
            source={this.getImgPath(obj.profile_path)}
          />
          <Text>{obj.name}</Text>
          {this.selectedView()}
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
      dispatch(getPersonCredits(this.id))
      dispatch(addPersonToMatching(this))
    }
  }
}

UserCard = connect(mapStateToProps, mapDispatchToProps)(UserCard)
export default UserCard
