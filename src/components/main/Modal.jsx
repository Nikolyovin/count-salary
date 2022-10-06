import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const ModalAdd = () => {
    const onChangeInputDate = () => {
        console.log('onChangeInputDate:', onChangeInputDate)
    }

    const onChangeInputAmount = () => {
        console.log('onChangeInputAmount:', onChangeInputAmount)
    }

    const isModal = useSelector(state => state.app.isModal)

    return (
        <Modal 
            style = { styles.modal }
            animationType = "slide"
            transparent = { true }
            visible = { isModal }
        >
            <Button />
            <View style = { styles.date }>
                <Text style = { styles.dateText }>Дата :</Text>
                <TextInput
                    style={styles.dateInput}
                    onChangeText={onChangeInputDate}
                    // value={number}
                    placeholder="24.01.2020"
                    keyboardType="numeric"
                />
            </View>

            <View style = { styles.amount }>
                <Text style = { styles.amountText }>Сумма :</Text>
                <TextInput
                    style={styles.amountInput}
                    onChangeText={onChangeInputAmount}
                    // value={number}
                    placeholder="10000"
                    keyboardType="numeric"
                />
            </View>
        </Modal>
    )
}

export default ModalAdd

const styles = StyleSheet.create({
    modal: {

    }
})