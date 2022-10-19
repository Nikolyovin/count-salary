import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ModalError = () => {
    const isEmptyField = useSelector(state => state.app.isEmptyField)
    return (
        <>
            { isEmptyField
                ? 
                <View style = { styles.errorWrap}>
                    <Text style = { styles.text}>Заполните все пустые поля!</Text>
                </View>
                : 
                <></>
            }
        </>
    )
}

export default ModalError

const styles = StyleSheet.create({
    errorWrap: {

    },
    text: {
        color: 'red'
    }
})