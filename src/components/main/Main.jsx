import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ModalAdd from './Modal'
import Cards from './Cards'


const Main = () => {
    return (
        <View>
            <Cards/>
            <View><ModalAdd/></View>
            
        </View>
    )
}

export default Main

const styles = StyleSheet.create({})