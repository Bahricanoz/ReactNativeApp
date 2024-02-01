import { View, Text, Button,StyleSheet } from 'react-native'
import React from 'react'
import List from '../components/List'

const UserList = ({navigation}) => {
  return (
    <View style={styles.container}>
      <List/>
      <Button title='Register Screen' onPress={() => navigation.navigate("Register")}></Button>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex : 1,
        
    }
})
export default UserList