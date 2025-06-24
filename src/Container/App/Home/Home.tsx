import React, {useContext} from 'react';
import {StyleSheet, Text, View, GestureResponderEvent} from 'react-native';
import {AuthContext} from '../../../Context/Context';
import {StackNavigationProp} from '@react-navigation/stack';

interface HomeProps {
  navigation: StackNavigationProp<any>;
}

export default function Home({navigation}: HomeProps) {
  const {logout} = useContext(AuthContext);

  const onPressLogout = (e: GestureResponderEvent) => {
    logout();
  };

  return (
    <View style={styles.container}>
      <View style={styles.homeView}>
        <Text style={styles.commonText}>Home</Text>
        <Text onPress={onPressLogout} style={styles.commonText}>
          Logout
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homeView: {
    marginTop: 24,
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  commonText: {
    alignSelf: 'center',
    fontSize: 22,
  },
});
