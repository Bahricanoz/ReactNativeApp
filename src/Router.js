
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserList from './screens/UserList'
import Register from './components/Register'

const Stack = createNativeStackNavigator()

const Router = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='User' component={UserList}></Stack.Screen>
        <Stack.Screen name='Register' component={Register}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default Router