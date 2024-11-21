import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './screens/SignIn'; 
import AddDishScreen from './screens/AddDish';
import HomeScreen from './screens/Home';
import ViewMenuScreen from './screens/ViewMenu';
import { RootStackParamList } from './screens/RootStackParams';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="AddDish" component={AddDishScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ViewMenu" component={ViewMenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
