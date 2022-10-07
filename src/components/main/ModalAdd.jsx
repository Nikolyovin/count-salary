import { Image, Modal, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPayment, isShowModal } from '../../redux/app-reducer'
import ModalAddInputs from './ModalAddInputs.jsx';

const ModalAdd = () => {
    const dispatch = useDispatch()
    const [ date, onChangeInputDate ] = useState('')
    const [ amount, onChangeInputAmount ] = useState('')
    const [ name, onChangeInputName ] = useState('')

    console.log('date', date, amount);

    // const onChangeInputDate = () => {
    //     console.log('onChangeInputDate:', onChangeInputDate)
    // }

    // const onChangeInputAmount = () => {
    //     console.log('onChangeInputAmount:', onChangeInputAmount)
    // }

    const onPressAdd = () => dispatch(addPayment({ date, amount, name }));

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
                <TouchableOpacity style = { styles.buttonClose } onPress = {onPressClose} >
                    <Text>X</Text>
                </TouchableOpacity>

                <ModalAddInputs 
                    onChangeInputDate = {onChangeInputDate} 
                    onChangeInputAmount = { onChangeInputAmount } 
                    onChangeInputName = { onChangeInputName }
                    date = {date} 
                    amount={amount} 
                    name={name}
                />

                <TouchableOpacity style = { styles.buttonAdd } onPress = {onPressAdd} >
                    <Text>Добавить</Text>
                </TouchableOpacity>
            </View>
          </View>
        </Modal>
          <Text style={styles.textStyle}>Show Modal</Text>
      </View>
    );
};

export default ModalAdd

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
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
        backgroundColor: 'green',
        width: 20,
        position: 'absolute',
        right: 0
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
  });