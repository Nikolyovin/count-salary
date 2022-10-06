import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'

const Cards = () => {
  const payments = useSelector(state => state.app.salary[0].payments)

  return (
    <FlatList                                   //FlatList нужен для скролла и заменят map 
      keyExtractor = { item.id }                  
      data={payments}
      renderItem={ ({item}) => <Card props = {item}/> }
    />
  )
}

export default Cards

const styles = StyleSheet.create({})