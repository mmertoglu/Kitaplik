import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from './src/pages/Home/Home';
import Login from './src/pages/Login/Login';
import Welcome from './src/pages/Welcome/Welcome';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name='HomeScreen' component={Home} />
        <Stack.Screen name='WelcomeScreen' component={Welcome} />
        <Stack.Screen name='LoginScreen' component={Login} />
       
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App