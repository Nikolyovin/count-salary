import { Modal, StyleSheet, Text, View, TouchableOpacity, AsyncStorage, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPayment, isShowModal } from '../../redux/app-reducer'
import ModalAddInputs from './ModalAddInputs.js'
import ButtonClose from '../common/ButtonClose'

const ModalAdd = () => {
  const dispatch = useDispatch()
  const [selectedDate, setSelectedDate] = useState('')
  const [amount, onChangeInputAmount] = useState(0)
  const [name, onChangeInputName] = useState('')
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

  const payments = useSelector(state => state.app.payments)
  const isModal = useSelector(state => state.app.isModal)
  const payload = { amount, name, selectedDate }

  const save = async () => {
    try {
      await AsyncStorage.setItem('payments', JSON.stringify(payments))
    } catch (err) {
      Alert.alert(err.message)
    }
  }

  useEffect(() => {
    console.log(`payments1`, payments);
    save()
    console.log(`payments2`, payments)
  }, [payments])

  const onPressAdd = async () => {
    // console.log(`payments1`, payments);
    dispatch(addPayment(payload))
    // console.log(`payments2`, payments)
    setSelectedDate('')
    onChangeInputAmount(0)
    onChangeInputName('')
    dispatch(isShowModal(false))
    // await save()
    // console.log(`payments3`, payments)
  }

  const onPress = () => dispatch(isShowModal(false))

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ModalAddInputs
              setDatePickerVisibility={setDatePickerVisibility}
              onChangeInputAmount={onChangeInputAmount}
              onChangeInputName={onChangeInputName}
              isDatePickerVisible={isDatePickerVisible}
              amount={amount}
              name={name}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
            <TouchableOpacity style={styles.buttonAdd} onPress={onPressAdd} >
              <Text style={styles.text}>Добавить</Text>
            </TouchableOpacity>
            <View style={styles.buttonClose} >
              <ButtonClose onPress={onPress} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ModalAdd

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    paddingHorizontal: 15,
  },
  modalView: {
    width: '100%',
    height: 280,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonAdd: {
    marginTop: 15,
    backgroundColor: '#00a8b8',
    width: '30%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  text: {
    color: 'white',
  },
  buttonClose: {
    width: 20,
    position: 'absolute',
    right: 15,
    top: 5
  },
})