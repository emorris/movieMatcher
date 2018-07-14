import React, {PropTypes} from 'react'
import {
  StyleSheet,Text, View, Button,
  Image, ScrollView, Modal, TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import PersonSelected from './PersonSelected'
import MovieCard from '../../components/Movies/MovieCard'

class MatchResults extends React.Component {

  showResults(){
    let items = this.props.results.map((film) => {
      return(<MovieCard key={`film-${film.id}`} data={film} />)
    })
    return items
  }

  hideModalBtn(){
    return (
      <TouchableHighlight
       onPress={() => {
         this.props.setVisiblityOfModal(this.props.showModal);
       }}>
       <Text>Hide</Text>
     </TouchableHighlight>
    )

  }

  render() {
    if(this.props.results.length > 0){
      return(
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.showModal}
          >
          <View style={[styles.main]}>
            {this.hideModalBtn()}
            <Text>Match Results</Text>
            <ScrollView style={[styles.main]}>
              {this.showResults()}
            </ScrollView>
          </View>
        </Modal>
      )
    }
    return null
  }
}

var styles = StyleSheet.create({
  main: {
    marginTop: 22
  },
  scrollView: {
    flex: 1,
    padding: 10
  }
});

import { setVisibleMovieMatch } from "../../actions/index"

function mapStateToProps(state) {
  return {
    results: state.personCredits.matched,
    showModal: state.modalState.matchModalVisible
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setVisiblityOfModal(val){
      dispatch(setVisibleMovieMatch(val))
    }
  }
}

MatchResults = connect(mapStateToProps, mapDispatchToProps)(MatchResults)
export default MatchResults
