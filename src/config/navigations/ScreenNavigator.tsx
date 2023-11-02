import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../screens/main/home/Index'
import Profile from '../../screens/main/profile/Index'
import Subscription from '../../screens/main/subscription/Index'
import { screenOptions } from '../../common/properties/Properties'

const ScreenNavigator = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Subscription" component={Subscription} />
        </Stack.Navigator>
    )
}

export default ScreenNavigator