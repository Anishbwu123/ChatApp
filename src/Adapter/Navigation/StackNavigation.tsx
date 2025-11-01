import {} from 'react-native';
import React from 'react';
import { ScreenParamList, Screens } from './screenTypes';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../../View/Screens/Splash';
import ChatScreen from '../../View/Screens/ChatScreen';
import Chatlist from '../../View/Screens/Chatlist';
import ResponsiveTest from '../../View/Screens/ResponsiveTest';

const Stack = createStackNavigator<ScreenParamList>();
const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.ResponsiveTest}
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
    >
      <Stack.Screen name={Screens.Splash} component={Splash} />
      <Stack.Screen name={Screens.ChatScreen} component={ChatScreen} />
      <Stack.Screen name={Screens.Chatlist} component={Chatlist} />
        <Stack.Screen name={Screens.ResponsiveTest} component={ResponsiveTest} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
