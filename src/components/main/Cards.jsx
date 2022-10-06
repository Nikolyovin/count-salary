import { StyleSheet, FlatList, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'

const Cards = () => {
  const payments = useSelector(state => state.app.salary[0].payments)
    console.log('payments:', payments);
  return (
    <FlatList  
      style = { styles.cardsWrap }                                 //FlatList нужен для скролла и заменят map 
      keyExtractor = { item => item.id }                  
      data={payments}
      renderItem={ ({item}) => <Card props = {item}/> }
    />
  )
}

export default Cards

const styles = StyleSheet.create({
  cardsWrap: {
    alignItems: 'center',
    width: '100%'
  }
})