import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Cart, Home, Product } from '../screens';

const Stack = createStackNavigator();

const MainNavigation: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Home' component={Home} />
    <Stack.Screen name='Product' component={Product} />
    <Stack.Screen name='Cart' component={Cart} />
  </Stack.Navigator>
);

export default MainNavigation;
