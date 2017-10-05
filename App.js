import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Boxes from './components/boxes-example';
import TextExample from './components/text-example';
import Weather from './components/weather';
import WeatherDaily from './components/weather-daily';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <WeatherDaily />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    color: "#f00"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
