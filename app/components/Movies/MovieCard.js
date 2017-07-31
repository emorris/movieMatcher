import React, {PropTypes} from 'react'
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {getImgMovieApiPath} from '../../helpers'

export default class MovieCard extends React.Component {
  render() {
    let film = this.props.data
    return (
      <View style={{flex: 1, padding: 10, borderWidth: 1}}>
        <Image
          style={{width:100, height:100}}
          source={getImgMovieApiPath(film.poster_path)}
        />
        <Text>{film.title}</Text>
        <Text>{film.overview}</Text>
      </View>
    );
  }
}


