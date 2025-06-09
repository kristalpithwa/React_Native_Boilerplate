import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function JobDetails({navigation, route}) {
  const {item} = route?.params;

  return (
    <View>
      <Text style={styles.commonText}>JobDetails</Text>
      <View style={styles.listView}>
        <Text style={styles.listMainText}>{item.title}</Text>
        <Text style={styles.listText}>{item.company}</Text>
        <Text style={styles.listText}>{item.location}</Text>
        <Text style={styles.listText}>{item.type}</Text>
        <Text style={styles.listText}>{item.time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  commonText: {alignSelf: 'center', fontSize: 22, marginTop: 22},

  listView: {padding: 10},

  listMainText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  listText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '400',
  },
});
