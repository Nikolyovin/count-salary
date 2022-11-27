import { StyleSheet, FlatList, View, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import Card from './Card.js'
import { useDispatch, useSelector } from 'react-redux'
import { requestPayments } from '../../redux/app-reducer.js'

const Cards = () => {
  const dispatch = useDispatch()

  const payments = useSelector(state => state.app.payments)
  console.log('payments', payments);
  const activeMonth = useSelector(state => state.app.activeMonth)

  const activePayments = activeMonth == '13'
    ? payments
    : payments?.filter(({ date }) => date.split('-')[1] == activeMonth) || []


  useEffect(() => {
    dispatch(requestPayments())
  }, [])
  console.log('activePayments', activePayments)
  console.log('payments', payments)
  return (
    <View style={styles.cardsWrap}>
      <FlatList  //FlatList нужен для скролла и заменят map 
        style={styles.cardsList}
        keyExtractor={item => item.id}
        data={activePayments}
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
    flex: 1,
  },
  cardsList: {
    flexGrow: 0
  }
})