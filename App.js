import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import DashBoard from './Screens/DashBoard'
import HomeScreen from './Screens/HomeScreen';
import TimeTableScreen from './Screens/TimeTableScreen';
import AssessmentScreen from './Screens/AssessmentScreen'
import AttandanceScreen from './Screens/AttandanceScreen'
import EventScreen from './Screens/EventScreen'
import FAQScreen from './Screens/FAQScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DashBoard">
        <Stack.Screen
          name='DashBoard' component={DashBoard} options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Home' component={HomeScreen}
        />
        <Stack.Screen
          name='TimeTable'
          component={TimeTableScreen}
        />
        <Stack.Screen
          name='Attandance'
          component={AttandanceScreen}
        />
        <Stack.Screen
          name='Assessment'
          component={AssessmentScreen}
        />
        <Stack.Screen
          name='Event'
          component={EventScreen}
        />
        <Stack.Screen
          name='FAQ'
          component={FAQScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
