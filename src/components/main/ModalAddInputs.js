import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

const ModalAddInputs = ({
  onChangeInputAmount,
  amount,
  name,
  onChangeInputName,
  setDatePickerVisibility,
  isDatePickerVisible,
  setSelectedDate,
  selectedDate
}) => {

  // const [isVisible, setVisible] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  }
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  }

  const handleConfirm = (date) => {
    const formateDate = moment(date).format('DD-MM-YYYY')
    setSelectedDate(formateDate);
    console.log('selectedDate', selectedDate);
    hideDatePicker();
  }
  return (
    <>
      <View style={styles.wrap}>
        <Text style={styles.text}>Дата:    </Text>
        <TouchableOpacity
          activeOpaticy={1}
          onPress={showDatePicker}
          style={styles.input}
        >
          <TextInput
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
  inputDate: {

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
    justifyContent: 'center',
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