import React,{useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { LogBox } from 'react-native';

import Home from './src/pages/Home/Home';
import Login from './src/pages/Login/Login';
import Welcome from './src/pages/Welcome/Welcome';

const Stack = createNativeStackNavigator();


const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, [])
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