import { Image, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isShowModal } from '../../redux/app-reducer'

const ModalAdd = () => {
    const dispatch = useDispatch()

    const onChangeInputDate = () => {
        console.log('onChangeInputDate:', onChangeInputDate)
    }

    const onChangeInputAmount = () => {
        console.log('onChangeInputAmount:', onChangeInputAmount)
    }

    const onPressAdd = () => console.log(onChangeInputDate, onChangeInputAmount);

    const onPressClose = () => dispatch(isShowModal(false))

    const isModal = useSelector(state => state.app.isModal)

    return (
        <View>
            <Modal 
                style = { styles.modal }
                animationType = "slide"
                transparent = { true }
                visible = { isModal }
            >
                <TouchableOpacity style = { styles.buttonClose } onPress = {onPressClose} >
                    <Image
                        style={styles.buttonCloseIcon}
                        source='https://www.pngfind.com/pngs/m/90-904785_png-file-svg-close-button-icon-png-transparent.png'
                    />
                </TouchableOpacity>
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
                <TouchableOpacity style = { styles.buttonAdd } onPress = {onPressAdd} >
                    <Text>Добавить</Text>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}

export default ModalAdd

const styles = StyleSheet.create({
    modal: {

    },
    buttonClose: {

    },
    buttonCloseIcon: {

    },
    buttonAdd: {

    },
    
})