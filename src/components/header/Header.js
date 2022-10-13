import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import img from '../../../assets/background.jpg'
import { MONTHRUS } from '../../helpers'

const Header = () => {
  const payments = useSelector(state => state.app.payments)
  let activeMonth = useSelector(state => state.app.activeMonth)

  const activePayments = payments.filter(({ date }) => date.split('-')[1] == activeMonth)

  const salary = activePayments.reduce((sum, current) => sum + current.sum, 0)
  
  for (let numMonth of MONTHRUS.keys()) {                   //для преобразования в названия месяца 
    if (numMonth == activeMonth) {
      activeMonth = MONTHRUS.get(numMonth)
    }
  }

  return (
    <View style={styles.header}>
      <ImageBackground
        source={img}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{ opacity: 0.7 }}
      >
        <View style={styles.titleWrap}>
          <Text style={styles.title}>Зарплата за {activeMonth}: </Text>
          <Text style={styles.title}> {salary} рублей</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    height: 180,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  titleWrap: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 32,
    fontFamily: 'Roboto-Medium',
    fontWeight: 'bold'
  },

})