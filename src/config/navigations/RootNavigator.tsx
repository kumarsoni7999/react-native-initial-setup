import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import ScreenNavigator from './ScreenNavigator';
import { screenOptions } from '../../common/properties/Properties';

const Stack = createNativeStackNavigator()

function RootNavigator() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions} initialRouteName='DrawerNavigator'>
        {/* drawer navigations */}
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />

        {/* screen navigations */}
        <Stack.Screen name="ScreenNavigator" component={ScreenNavigator} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator