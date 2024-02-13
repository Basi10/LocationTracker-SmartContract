// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EntryPage from './.expo/screens/EntryPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entry">
        <Stack.Screen name="Entry" component={EntryPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
