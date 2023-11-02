import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../screens/main/home/Index';
import Profile from '../../screens/main/profile/Index';
import Subscription from '../../screens/main/subscription/Index';
import CustomDrawer from '../../components/drawer/CustomDrawer';
import { screenOptions } from '../../common/properties/Properties';
import BottomNavigator from './BottomNavigator';

const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            screenOptions={screenOptions}
            drawerContent={(props: any) => <CustomDrawer {...props} />}>
            <Drawer.Screen name="BottomNavigator" component={BottomNavigator} />
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Subscription" component={Subscription} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator