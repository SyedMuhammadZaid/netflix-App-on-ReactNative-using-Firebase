import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Screens/Login';
import Register from './src/Screens/Register';
import Plans from './src/Screens/Plans';
import Profile from './src/Screens/Profile';
import Loading from './src/Screens/Loading';
import Home from './src/Screens/Home';


const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
        <Stack.Screen name="Plans" component={Plans} options={{headerShown:false}} />
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
        <Stack.Screen name="Loading" component={Loading} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />

      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default StackNavigator

const styles = StyleSheet.create({})