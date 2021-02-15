import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import { HomePage,DetailPage,Splash } from '../screens';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const NavigatorTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#ffd930',
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: '#1c4585',
          height: 60,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
      }}>
      <Tab.Screen
      
        name="Home"
        component={HomePage}
      />
     
     
    </Tab.Navigator>
  );
};

export default function StackScreen () {
  return (
    <NavigationContainer>

    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="Splash" component={Splash} />
      <Stack.Screen options={{headerShown:false}} name="Home" component={NavigatorTab} />
      </Stack.Navigator>
    </NavigationContainer>
    )
      };

