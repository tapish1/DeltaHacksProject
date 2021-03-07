
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import Login from "./app/Login";
import Register from "./app/Register";
import Profile from "./app/Profile";
import Run from "./app/Run";
import Team from "./app/Team";

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Run" component={Run} />
      <Tab.Screen name="Team" component={Team} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{title: "Login"}}></Stack.Screen>
        <Stack.Screen name="Register" component={Register} options={{title: "Sign up"}}></Stack.Screen>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
      </Stack.Navigator>      
    </NavigationContainer>
  )
}


