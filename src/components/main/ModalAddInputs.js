import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";

const ModalAddInputs = ({ onChangeInputAmount, amount, name, onChangeInputName, setDatePickerVisibility, isDatePickerVisible }) => {
  const [isVisible, setVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('ну ты крут мужик')
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  }
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  }

  const handleConfirm = (date) => {
    setSelectedDate(date.toString());
    console.log('selectedDate', selectedDate);
    hideDatePicker();
  }
  return (
    <>
      <View style={styles.wrap}>
        <Text style={styles.text}>Дата:</Text>
        {/* <TouchableOpacity style={styles.buttonDate} onPress={showDatePicker} >
          <Text style={styles.textButtonDate}>Добавить</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          activeOpaticy={1}
          onPress={showDatePicker}
          style={styles.input}
        // onPress={showDatePicker} 
        >
          <TextInput

            // onPressIn={showDatePicker}
            editable={false}
            value={selectedDate}
            placeholder="Укажите дату..."
          />
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>

      <View style={styles.wrap}>
        <Text style={styles.text}>Инфо:   </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeInputName}
          value={name}
          placeholder="Краткое описание работы..."
        />
      </View>

      <View style={styles.wrap}>
        <Text style={styles.text}>Сумма:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeInputAmount}
          value={amount}
          placeholder="Сумма..."
          keyboardType="numeric"
        />
      </View>
    </>
  )
};

export default ModalAddInputs

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    marginBottom: 15,
    // marginRight: 10
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  input: {
    paddingHorizontal: 10,
    marginLeft: 15,
    flex: 1,
    width: '100%',
    height: 40,
    borderWidth: 2,
    borderColor: '#00a8b8',
    borderRadius: 10,
  },
  buttonDate: {
    marginTop: 15,
    backgroundColor: '#00a8b8',
    width: '30%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  textButtonDate: {
    color: 'white',
  },
});