import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Item = ({info,navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => alert(JSON.stringify(info,null,3,))}>
        <Text style={styles.text}>{info.name}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Item

const styles = StyleSheet.create({
    container : {
        backgroundColor : "gray",
        padding : 10,
        borderBottomWidth : 1,
    },
    text : {
        fontSize : 18,
        color : "#fff"
    }
})