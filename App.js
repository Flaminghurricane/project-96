import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './navigation/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator'
import React from "react"

export default function App() {
  return (
   <NavigationContainer><StackNavigator /></NavigationContainer>
   
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
