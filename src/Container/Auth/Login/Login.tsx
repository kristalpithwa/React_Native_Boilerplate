import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../../../Context/Context';

export default function Login() {
  const {login} = useContext(AuthContext);

  // onPress Method

  const onPressLogin = () => {
    const user = {
      name: 'John Doe',
    };
    login(user);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login</Text>
      <Text onPress={() => onPressLogin()} style={styles.signInText}>
        Sign In
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginText: {
    fontSize: 45,
    marginTop: 50,
    alignSelf: 'center',
  },
  signInText: {
    alignSelf: 'center',
    marginTop: 50,
    fontSize: 22,
  },
});
