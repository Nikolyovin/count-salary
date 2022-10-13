import { Modal, StyleSheet, View, AsyncStorage, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPayment, choiceCurrentPayment, isShowModal, updatePayment } from '../../redux/app-reducer'
import ModalAddInputs from './ModalAddInputs.js'
import ButtonClose from '../common/ButtonClose'
import ModalButons from './ModalButtons'

const ModalAdd = () => {
  const dispatch = useDispatch()

  const payments = useSelector(state => state.app.payments)
  const isModal = useSelector(state => state.app.isModal)
  const currentPayment = useSelector(state => state.app.currentPayment)
  const isNew = (Object.keys(currentPayment).length == 0)

  const [ selectedDate, setSelectedDate ] = isNew ? useState('') : useState(currentPayment.date)
  const [ amount, onChangeInputAmount ] = isNew ? useState(0) : useState(currentPayment.sum)
  const [ name, onChangeInputName ] = isNew ? useState('') : useState(currentPayment.name)
  const [ isDatePickerVisible, setDatePickerVisibility ]  = useState(false)

  const payload = { amount, name, selectedDate }

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

  const onPressAdd = async () => {
    dispatch(addPayment(payload))
    clearModal()
  }

  const onPressUpdate = () => {
    dispatch(updatePayment(currentPayment))
    dispatch(choiceCurrentPayment())
    clearModal()
  }

  const onPress = () => dispatch(isShowModal(false))

  const clearModal = () => {
    setSelectedDate('')
    onChangeInputAmount(0)
    onChangeInputName('')
    dispatch(isShowModal(false))
  }
  
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModal}
      >
        <View style = { styles.centeredView }>
          <View style = { styles.modalView }>
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
            <ModalButons 
              onPressAdd = { onPressAdd }
              isNew = { isNew }
              onPressUpdate = { onPressUpdate }
            />
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
  buttonClose: {
    width: 20,
    position: 'absolute',
    right: 15,
    top: 5
  },
})