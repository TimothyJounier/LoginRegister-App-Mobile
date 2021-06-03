import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../../screens/SignIn';
import HomeScreen from '../../screens/Home';

const Stack = createStackNavigator();

function StackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
            name="Welcome" 
            component={HomeScreen}
            options= {{header: () => null, }}
        />
        <Stack.Screen 
            name="SignIn" 
            component={SignIn}
            options={{title: 'Login'}} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNav;

