import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const ModalError = () => {
    const isEmptyField = useSelector(state => state.app.isEmptyField)
    return (
        <>
            {isEmptyField
                ?
                <View style={styles.errorWrap}>
                    <Text style={styles.text}>Упс, ты что-то пропустил...</Text>
                </View>
                :
                <View style={styles.errorWrap}></View>
            }
        </>
    )
}

export default ModalError

const styles = StyleSheet.create({
    errorWrap: {
        height: 27,
    },
    text: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    }
})