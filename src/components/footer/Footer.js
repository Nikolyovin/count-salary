import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { isShowModal, isShowSelect } from '../../redux/app-reducer'

const Footer = () => {
    const dispatch = useDispatch()

    const onPressAdd = () => dispatch(isShowModal(true))
    const onPressSelect = () => dispatch(isShowSelect(true))

    return (
        <View style = { styles.footer }>
            <View style = { styles.buttonWrap }>
                <TouchableOpacity style = { styles.buttonAdd } onPress = { onPressAdd } >
                    <Text>Добавить</Text>
                </TouchableOpacity>
                <TouchableOpacity style = { styles.buttonSelect } onPress = { onPressSelect } >
                    <Text>Выбрать месяц</Text>
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
    buttonAdd: {
        backgroundColor: '#1976d2',
        width: 60,
        height: 35,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonSelect: {
        backgroundColor: '#1976d2',
        width: 60,
        height: 35,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})