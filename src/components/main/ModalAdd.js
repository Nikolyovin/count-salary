import { Image, Modal, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPayment, isShowModal } from '../../redux/app-reducer'
import ModalAddInputs from './ModalAddInputs.js';

const ModalAdd = () => {
  const dispatch = useDispatch()
  // const [date, onChangeInputDate] = useState('')
  const [amount, onChangeInputAmount] = useState(0)
  const [name, onChangeInputName] = useState('')
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const payload = { amount, name }

  const onPressAdd = () => {
    dispatch(addPayment(payload))
    // onChangeInputDate('')
    onChangeInputAmount(0)
    onChangeInputName('')
  }

  const onPressClose = () => dispatch(isShowModal(false))

  const isModal = useSelector(state => state.app.isModal)

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
            />
            <TouchableOpacity style={styles.buttonAdd} onPress={onPressAdd} >
              <Text style={styles.text}>Добавить</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonClose} onPress={onPressClose} >
              <Text>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

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
    right: 0
  },
});