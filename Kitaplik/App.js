import React,{useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { LogBox } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from './src/pages/Home/Home';
import Login from './src/pages/Login/Login';
import Welcome from './src/pages/Welcome/Welcome';
import BookDetail from './src/pages/BookDetail/BookDetail';
import Profile from './src/pages/Profile/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, [])
  const TabStack = () => {
    return(
      <Tab.Navigator screenOptions={{headerShown:false}} >
        <Tab.Screen name='HomeScreen' component={Home} />
        <Tab.Screen name='ProfileScreen' component={Profile} />
      </Tab.Navigator>
    )
  }
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='WelcomeScreen' component={Welcome} />
      <Stack.Screen name='Home' component={TabStack} />
        <Stack.Screen name='LoginScreen' component={Login} />
        <Stack.Screen name='BookDetailScreen' component={BookDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App