import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppStack from './AppStack';
import AuthStack from './AuthStack';

import {AuthContext} from '../Context/Context';
import SplashScreen from '../Container/Auth/Splash/SplashScreen';

// Main Navigation Flow
export default function RouterComponent() {
  const {user, loading} = useContext(AuthContext);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
