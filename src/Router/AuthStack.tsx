import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Screens} from '../Theme';
import Login from '../Container/Auth/Login/Login';

export default function AuthStack({navigation}) {
  const {Navigator, Screen} = createStackNavigator();

  return (
    <Navigator
      name={'authRoot'}
      initialRouteName={'login'} // Means Initial Screens
      screenOptions={{
        hideNavBar: false,
        headerShown: false,
      }}>
      <Screen component={Login} name={'login'} key={'login'} />
    </Navigator>
  );
}
