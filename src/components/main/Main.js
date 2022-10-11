import { ScrollView, StyleSheet, FlatList, Text, View } from 'react-native'
import React from 'react'
import ModalAdd from './ModalAdd.js'
import Cards from './Cards.js'
import ModalSelect from './ModalSelect.js'
import ControlPanel from './ControlPanel.js'


const Main = () => {
    return (
        <View style={styles.main}>
            <ControlPanel />
            <Cards />
            <ModalSelect />
            <ModalAdd />
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    main: {

    }
})