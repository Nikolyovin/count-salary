import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const payments = useSelector(state => state.app.payments)
  const activeManth = useSelector(state => state.app.activeManth)
  const activePayments = payments.filter(({ date }) => date == activeManth)
  const salary = activePayments.reduce((sum, current) => sum + current.sum, 0)

  return (
    <View style={styles.header}>
      <View style={styles.titleWrap}>
        <Text style={styles.title}>Зарплата за {activeManth}: </Text>
        <Text style={styles.title}> {salary} рублей</Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    // borderColor: 'black',
    // borderWidth: 2,
    height: 100
  },
  titleWrap: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    // color: 'white',
    fontSize: 32,
    fontFamily: ''
  },

})