import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList, MenuItem } from './screens/RootStackParams';
import SignInScreen from './screens/SignIn';
import AddDishScreen from './screens/AddDish';
import HomeScreen from './screens/Home';
import ViewMenuScreen from './screens/ViewMenu';
import FilterScreen from './screens/Filter';

const Stack = createStackNavigator<RootStackParamList>();

export const MenuContext = React.createContext<{
  menuItems: MenuItem[];
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
}>({ menuItems: [], setMenuItems: () => {} });

export default function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  return (
    <MenuContext.Provider value={{ menuItems, setMenuItems }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="AddDish" component={AddDishScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ViewMenu" component={ViewMenuScreen} />
          <Stack.Screen name="Filter" component={FilterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuContext.Provider>
  );
}
