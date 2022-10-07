import { ScrollView, StyleSheet, FlatList, Text, View } from 'react-native'
import React from 'react'
import ModalAdd from './ModalAdd.jsx'
import Cards from './Cards.jsx'


const Main = () => {
    return (
        <View>
            <Cards/>
            <View><ModalAdd/></View>
            
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    
})