import { View, Text } from 'react-native'
import React from 'react'
// import 'react-native-gesture-handler';
import RootNavigator from './src/config/navigations/RootNavigator'
import { Provider } from 'react-redux'
import { store } from './src/store'

const App = () => <Provider store={store}><RootNavigator /></Provider>

export default App