import { Image, Modal, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPayment, isShowModal, isShowSelect } from '../../redux/app-reducer'
import ModalAddInputs from './ModalAddInputs.jsx';
import { Select, SelectModalProvider } from '@mobile-reality/react-native-select-pro';

const ModalSelect = () => {
    const dispatch = useDispatch()

    const onPressClose = () => dispatch(isShowSelect(false))

    const isSelect = useSelector(state => state.app.isSelect)
    
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={isSelect}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity style = { styles.buttonClose } onPress = {onPressClose} >
                    <Text>X</Text>
                </TouchableOpacity>
              <SelectModalProvider> {/* `SelectModalProvider` wrapping code inside `Modal` */}
                    <Text>Modal</Text>
                    <Select
                        options={[{ value: 'Апрель', label: 'Апрель' }]}
                    />
                    <Select
                        options={[{ value: 'Март', label: 'Март' }]}
                    />
                </SelectModalProvider>
            </View>
          </View>
        </Modal>
      </View>
    );
};

export default ModalSelect

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
  });