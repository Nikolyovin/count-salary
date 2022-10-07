import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const payments = useSelector(state => state.app.payments)
  const salary = payments.reduce((sum, current) => sum + current.sum, 0)

  return (
    <View style = { styles.header }>
      <View style = { styles.titleWrap }>
        <Text style = { styles.title }>Итого: { salary }  </Text>
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