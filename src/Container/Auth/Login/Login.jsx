import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {AuthContext} from '../../../Context/Context';

export default function Login() {
  const {login} = useContext(AuthContext);
  const [email, setEmail] = useState('admin');
  const [password, setPassword] = useState('123456789');

  // onPress Method

  const onPressLogin = () => {
    if (!email || !password) {
      Alert.alert('Please fill in all fields');
      return;
    } else {
      const user = {
        name: 'John Doe',
      };

      login(user);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login</Text>
      <TextInput
        value={email}
        style={styles.emailInput}
        placeholder="Enter your email"
        onChangeText={value => setEmail(value)}
      />

      <TextInput
        placeholder="Enter your password"
        onChangeText={value => setPassword(value)}
        value={password}
        style={styles.passwordInput}
      />

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
  emailInput: {
    width: '90%',
    marginTop: 50,
    alignSelf: 'center',
    borderBottomWidth: 2,
  },
  passwordInput: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    borderBottomWidth: 2,
  },
  signInText: {
    alignSelf: 'center',
    marginTop: 50,
    fontSize: 22,
  },
});
