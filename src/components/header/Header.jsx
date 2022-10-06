import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style = { styles.header }>
      <View style = { styles.titleWrap }>
        <Text style = { styles.title }>Итого: 0  </Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
      paddingTop: 20,
      // borderColor: 'black',
      // borderWidth: 2,
      height: 100
    },
    titleWrap:{
      justifyContent: 'center',
      alignItems: 'center'
    },
    title:{
      fontSize: 32
    },

})