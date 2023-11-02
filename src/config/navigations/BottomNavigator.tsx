import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { screenOptions } from '../../common/properties/Properties'
import Home from '../../screens/main/home/Index'
import Profile from '../../screens/main/profile/Index'
import Subscription from '../../screens/main/subscription/Index'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { InactiveIconSize, activeIconColor, activeIconSize, inActiveIconColor } from '../../constants/BottomTabConstants'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'

const BottomNavigator = () => {

    const BottomTab = createBottomTabNavigator()

    const count:any = useSelector((state: RootState) => state.counter)

    const TABS = [
        {
            name: 'Home',
            title: 'Home',
            component: Home,
            count: 0
        },
        {
            name: 'Profile',
            title: 'Account',
            component: Profile,
            count: 0
        },
        {
            name: 'Subscription',
            title: 'Settings',
            component: Subscription,
            count: count.count
        },
    ]

    return (
        <BottomTab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {

                    const tabColor = focused ? activeIconColor : inActiveIconColor
                    const tabSize = focused ? activeIconSize : InactiveIconSize

                    if (route.name === 'Home') {
                        return <AntDesign name={'home'} size={tabSize} color={tabColor} />;
                    } else if (route.name === 'Profile') {
                        return <MaterialCommunityIcons name={'account'} size={tabSize} color={tabColor} />;
                    } else if (route.name == 'Subscription') {
                        return <Ionicons name={'settings-outline'} size={tabSize} color={tabColor} />;
                    }
                },
                tabBarActiveTintColor: 'green',
                tabBarInactiveTintColor: 'gray',
                tabBarBadgeStyle: { backgroundColor: 'green' },
            })}>
            {TABS.map((items: any, index: any) => <BottomTab.Screen name={items.name} component={items.component} options={{ tabBarBadge: items.count > 0 ? items.count : null, title: items.title }} key={index} />)}
        </BottomTab.Navigator>
    )
}

export default BottomNavigator