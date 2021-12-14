import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigation from './MainNavigation';

const Router = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default Router;
