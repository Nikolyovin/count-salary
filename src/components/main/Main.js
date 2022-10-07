import { ScrollView, StyleSheet, FlatList, Text, View } from 'react-native'
import React from 'react'
import ModalAdd from './ModalAdd.js'
import Cards from './Cards.js'
import ModalSelect from './ModalSelect.js'


const Main = () => {
    return (
        <View>
            <Cards/>
            <ModalSelect/>
            <View><ModalAdd/></View> 
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    
})