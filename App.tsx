import React from 'react';
import {AuthProvider} from './src/Context/Context';
import RouterComponent from './src/Router/Router';

export default function App() {
  return (
    <AuthProvider>
      <RouterComponent />
    </AuthProvider>
  );
}
