import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { isShowModal } from '../../redux/app-reducer'

const Footer = () => {
    const dispatch = useDispatch()

    const onPressAdd = () => dispatch(isShowModal(true))

    return (
        <View style = { styles.footer }>
            <View style = { styles.buttonWrap }>
                <TouchableOpacity style = { styles.button } onPress = {onPressAdd} >
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