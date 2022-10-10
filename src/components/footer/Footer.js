import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isShowModal, isShowSelect } from '../../redux/app-reducer'

const Footer = () => {
    const dispatch = useDispatch()

    const onPressAdd = () => dispatch(isShowModal(true))

    const isModal = useSelector(state => state.app.isModal)

    return (
        <View style = { styles.footer }>
            { !isModal   
                ? <View  style = { styles.buttonWrap }>
                    <TouchableOpacity style={styles.buttonAdd} onPress={onPressAdd} >
                        <Text style={styles.buttonAddText}>Добавить</Text>
                    </TouchableOpacity>
                </View>    
                : <></>        
            }
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    footer: {
        paddingBottom: 30
    },
    buttonWrap: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 15,
    },
    buttonAdd: {
        backgroundColor: '#00a8b8',
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    buttonAddText: {
        color: 'white',
    }
})