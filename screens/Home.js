import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Movie } from '../components/Movie';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        {
          title: 'Blanche Neige',
        },
        {
          title: 'Frozen',
        },
      ]
    }
  }


  render() {
    const { movies } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView>
          {movies.map((movie, key) => (
            <Movie title={movie.title} key={key}></Movie>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
});


