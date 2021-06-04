import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import des vues
import SignIn from '../../screens/SignIn';
import HomeScreen from '../../screens/Home';
import SignUp from '../../screens/SignUp';
import SignUp2 from '../../screens/SignUp2';
import Validation from '../../screens/Validation';

const Stack = createStackNavigator();

function StackNav() {
return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen 
            name="Accueil" 
            component={HomeScreen}
            options= {{header: () => null, }}
        />
        <Stack.Screen 
            name="SignIn" 
            component={SignIn}
            options={{title: 'Connection'}} 
        />
        <Stack.Screen 
            name="SignUp" 
            component={SignUp}
            options={{title: 'Inscription'}} 
        />
        <Stack.Screen 
            name="SignUp2" 
            component={SignUp2}
            options={{title: 'Inscription'}} 
        />
        <Stack.Screen 
            name="Validation" 
            component={Validation}
            options= {{header: () => null, }}
        />

    </Stack.Navigator>
    </NavigationContainer>
);
}

export default StackNav;

