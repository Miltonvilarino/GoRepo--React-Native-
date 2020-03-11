import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/Main';
import User from './pages/User';
import Repository from './pages/Repository';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#7159c1' },
        headerTintColor: '#FFF',
        headerTitleAlign: 'center',
        headerStatusBarHeight: 0
      }}
    >
      <Stack.Screen name="Main" component={Main} options={{ title: 'Main' }} />
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="Repository" component={Repository} />
    </Stack.Navigator>
  );
}
