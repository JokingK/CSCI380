import React from 'react';
//dibiwboiwb

import { NavigationContainer } from '@react-navigation/native'; //https://reactnavigation.org/docs/getting-started/

import RootStackScreen from './Screens/RootStackScreen';

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  )
};

export default App;