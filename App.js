import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Details from './components/Details';
import Login from './components/Login';

const Stack = createNativeStackNavigator();
export default function App() {
    return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <Stack.Screen name ='Home' component={Home}/>
      <Stack.Screen name ='Details' component={Details}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}