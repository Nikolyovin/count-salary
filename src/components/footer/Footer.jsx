import { Button, StyleSheet, View } from 'react-native'
import React from 'react'

const Footer = () => {
    return (
        <View>
            <Button style = { styles.button } title = 'Добавить'/>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})