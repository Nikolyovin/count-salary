import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Footer = () => {
    return (
        <View style = { styles.footer }>
            <View style = { styles.buttonWrap }>
                <TouchableOpacity style = { styles.button } >
                    <Text>Добавить</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    footer: {
        paddingBottom: 30
    },
    buttonWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    button: {
        backgroundColor: '#1976d2',
        width: 130,
        height: 35,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})