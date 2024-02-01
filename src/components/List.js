import { View, Text, FlatList , StyleSheet} from 'react-native'
import React from 'react'
import  { UseContext } from '../context/UserContext'
import Item from './Item'

const List = () => {
    const { users} = UseContext();
  return (
    <View style={styles.container}>
        
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Item info={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    
})

export default List