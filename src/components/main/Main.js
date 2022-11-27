import { StyleSheet, View } from 'react-native'
import React from 'react'
import ModalAdd from './ModalAdd.js'
import Cards from './Cards.js'
import ControlPanel from './ControlPanel.js'

const Main = () => {
    return (
        <View style={styles.main}>
            <ControlPanel />
            <Cards />
            <ModalAdd />
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    main: {
        flex: 1,
        height: '100%'
    }
})