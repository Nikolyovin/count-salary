import { StyleSheet, FlatList, Text, View } from 'react-native'
import React from 'react'
import Card from './Card.js'
import { useSelector } from 'react-redux'

const Cards = () => {
  const payments = useSelector(state => state.app.payments)
  // const activeMonth = useSelector(state => state.app.activeMonth)
  // const activePayments = payments.filter(({ date }) => date == activeMonth)

  return (
    <View style={styles.cardsWrap}>
      <FlatList  //FlatList нужен для скролла и заменят map 
        style={styles.cardsList}
        keyExtractor={item => item.id}
        data={payments}
        renderItem={({ item }) =>
          <Card
            name={item.name}
            id={item.id}
            date={item.date}
            sum={item.sum}
          />
        }
      />
    </View>
  )
}

export default Cards

const styles = StyleSheet.create({
  cardsWrap: {
    // alignItems: 'center',
    // width: '100%'
  },
  cardsList: {
    // alignItems: 'center',

  }
})