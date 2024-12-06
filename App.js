import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {enableScreens} from 'react-native-screens';
import MainPage from './src/Main';
import TestPage from './src/screen/Test';
import TestPage2 from './src/screen/Test2';
import HambugerPage from './src/screen/Hambuger';
import CrollingPage from './src/screen/Crolling';
import LoginPage from './src/screen/Login';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Btn = createBottomTabNavigator();
enableScreens();

function BtmBar() {
  return (
    <Btn.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ff6347',
        tabBarInactiveTintColor: '#808080',
      }}>
      <Btn.Screen name="Main" component={MainPage} />
      <Btn.Screen name="Test" component={TestPage} />
      <Btn.Screen name="Test2" component={TestPage2} />
    </Btn.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="BtmBar" component={BtmBar} />
        <Stack.Screen name="Crolling" component={CrollingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
