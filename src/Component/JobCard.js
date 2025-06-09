import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function JobCard({item, onPressJob}) {
  return (
    <TouchableOpacity onPress={() => onPressJob()} style={styles.listView}>
      <Text style={styles.listMainText}>{item.title}</Text>
      <Text style={styles.listText}>{item.company}</Text>
      <Text style={styles.listText}>{item.location}</Text>
      <Text style={styles.listText}>{item.type}</Text>
      <Text style={styles.listText}>{item.time}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listView: {padding: 10, borderBottomWidth: 1, borderColor: '#ccc'},

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
