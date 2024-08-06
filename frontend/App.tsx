import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GetStarted, HomeScreen, ImageDetails} from './src/screens';
import { StatusBar } from 'expo-status-bar';


export type RootStackParamList = {
  GetStarted: undefined;
  Home: undefined;
  ImageDetails: {image: string; title: string};
};

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  // hide the splash screen when the app loads
  useEffect(() => {
    if (SplashScreen) {
    SplashScreen.hide();
    }
    }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="GetStarted">
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ImageDetails" component={ImageDetails} />
      </Stack.Navigator>
      <StatusBar backgroundColor={'#FFFFFFBB'} style='dark' />
    </NavigationContainer>
  );
};

export default App;
