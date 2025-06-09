import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function SplashScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Spash Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 45,
    fontWeight: 'bold',
  },
});
