import { Image, Modal, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isShowModal } from '../../redux/app-reducer'
import ModalAddInputs from './ModalAddInputs.jsx';

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

                <ModalAddInputs onChangeInputDate = {onChangeInputDate} onChangeInputAmount = { onChangeInputAmount } />

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