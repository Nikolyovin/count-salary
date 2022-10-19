import { Modal, StyleSheet, View, AsyncStorage, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPayment, choiceCurrentPayment, isShowError, isShowModal, updatePayment } from '../../redux/app-reducer'
import ModalAddInputs from './ModalAddInputs.js'
import ButtonClose from '../common/ButtonClose'
import ModalButons from './ModalButtons'
import ModalError from './ModalError'

const ModalAdd = () => {
  const dispatch = useDispatch()

  const payments = useSelector(state => state.app.payments)
  const isModal = useSelector(state => state.app.isModal)
  const currentPayment = useSelector(state => state.app.currentPayment)

  const isNew = (Object.keys(currentPayment).length == 0)

  const [selectedDate, setSelectedDate] = useState('')
  const [amount, onChangeInputAmount] = useState(null)
  const [name, onChangeInputName] = useState('')
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  // const payload = { amount, name, selectedDate }

  useEffect(() => {
    setSelectedDate(currentPayment.date)
    onChangeInputAmount(currentPayment.sum)
    onChangeInputName(currentPayment.name)
  }, [currentPayment])

  const save = async () => {
    try {
      await AsyncStorage.setItem('payments', JSON.stringify(payments))
    } catch (err) {
      Alert.alert(err.message)
    }
  }

  useEffect(() => {
    save()
  }, [payments])

  const onPressAdd = () => {
    amount && name && selectedDate
      ? dispatch(addPayment({ amount, name, selectedDate })) && clearModal()
      : dispatch(isShowError(true))
  }

  const onPressUpdate = () => {
    amount && name && selectedDate
      ? dispatch(updatePayment({ amount, name, selectedDate, id: currentPayment.id })) && clearModal() //&& dispatch(choiceCurrentPayment())
      : dispatch(isShowError(true))
  }

  const onClose = () => {
    dispatch(isShowModal(false))
    dispatch(choiceCurrentPayment())
    dispatch(isShowError(false))
  }

  const clearModal = () => {
    setSelectedDate('')
    onChangeInputAmount(0)
    onChangeInputName('')
    dispatch(isShowModal(false))
    dispatch(isShowError(false))
    dispatch(choiceCurrentPayment())
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ModalError />
            <ModalAddInputs
              setDatePickerVisibility={setDatePickerVisibility}
              onChangeInputAmount={onChangeInputAmount}
              onChangeInputName={onChangeInputName}
              isDatePickerVisible={isDatePickerVisible}
              isNew={isNew}
              setSelectedDate={setSelectedDate}
              currentPayment={currentPayment}
              currentDate={currentPayment.date}
              selectedDate={selectedDate}
              amount={amount}
              name={name}
            />
            <ModalButons
              onPressAdd={onPressAdd}
              isNew={isNew}
              onPressUpdate={onPressUpdate}
            />
            <View style={styles.buttonClose} >
              <ButtonClose onClose={onClose} />
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
    position: 'absolute',
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    marginTop: '60%',
    paddingHorizontal: 15,
  },
  modalView: {
    width: '100%',
    height: 300,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 40,
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
  buttonClose: {
    width: 20,
    position: 'absolute',
    right: 15,
    top: 5
  },
})