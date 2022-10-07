import { Image, Modal, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
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

//     return (
//         <View style = { styles.centeredView }>
//             <Modal 
//                 style = { styles.modal }
//                 animationType = "slide"
//                 transparent = { true }
//                 visible = { isModal }
//             >
//                 <TouchableOpacity style = { styles.buttonClose } onPress = {onPressClose} >
//                     <Text>X</Text>
//                 </TouchableOpacity>
//                 <View style = { styles.date }>
//                     <Text style = { styles.dateText }>Дата :</Text>
//                     <TextInput
//                         style={styles.dateInput}
//                         onChangeText={onChangeInputDate}
//                         // value={number}
//                         placeholder="24.01.2020"
//                         keyboardType="numeric"
//                     />
//                 </View>

//                 <View style = { styles.amount }>
//                     <Text style = { styles.amountText }>Сумма :</Text>
//                     <TextInput
//                         style={styles.amountInput}
//                         onChangeText={onChangeInputAmount}
//                         // value={number}
//                         placeholder="10000"
//                         keyboardType="numeric"
//                     />
//                 </View>
//                 <TouchableOpacity style = { styles.buttonAdd } onPress = {onPressAdd} >
//                     <Text>Добавить</Text>
//                 </TouchableOpacity>
//             </Modal>
//         </View>
//     )
// }

    
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <TouchableOpacity style = { styles.buttonClose } onPress = {onPressClose} >
                    <Text>X</Text>
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
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });