import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../Container/App/Home/Home';
import JobDetails from '../Container/App/JobDetails/JobDetails';

export default function AppStack() {
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen component={Home} key={'home'} name={'home'} />
      <Screen component={JobDetails} key={'jobDetails'} name={'jobDetails'} />
    </Navigator>
  );
}
