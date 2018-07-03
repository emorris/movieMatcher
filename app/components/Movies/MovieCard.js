import React, {PropTypes} from 'react'
import {StyleSheet, Text, View, Button, Image,ScrollView} from 'react-native';
import {getImgMovieApiPath} from '../../helpers'

export default class MovieCard extends React.Component {
  render() {
    let film = this.props.data
    return (
      <View style={[styles.main]}>
        <View style={[styles.imageWrapper]}>
          <Image
            style={[styles.image]}
            source={getImgMovieApiPath(film.poster_path)}
          />
        </View>
        <View style={[styles.info]}>
          <Text style={[styles.h1]}>{film.title}</Text>
           <ScrollView contentContainerStyle={[styles.overviewBlock]}>
             <Text style={[styles.overview]}>{film.overview}</Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}



var styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageWrapper:{
    width: 100,
    height: 150,
    marginRight: 10,
  },
  image: {
    flex:1
  },
  info:{
    flex: 1,
    height: 150,
  },
  h1:{
    fontWeight: '900',
    textAlign: 'center',
    padding: 5
  },
  overviewBlock:{
    paddingVertical: 5,
  },
  overview:{

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
