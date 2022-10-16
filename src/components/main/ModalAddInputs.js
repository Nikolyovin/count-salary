import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

const ModalAddInputs = ({
  onChangeInputAmount,
  onChangeInputName,
  setDatePickerVisibility,
  isDatePickerVisible,
  setSelectedDate,
  isNew,
  currentPayment
}) => {
  // console.log('currentPayment1', currentPayment);
  const { sum, name, date } = currentPayment
  // console.log('Currentdate', date.format())
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  }

  const hideDatePicker = () => setDatePickerVisibility(false)

  const handleConfirm = (date) => {
    // console.log('date', date);
    const formateDate = moment(date).format('DD-MM-YYYY')
    setSelectedDate(formateDate);
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
            defaultValue={date}
            placeholder="Укажите дату..."
          />
        </TouchableOpacity>
        {!isNew
          ? <DateTimePickerModal
            // date={date}
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          : <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        }
      </View>

      <View style={styles.wrap}>
        <Text style={styles.text}>Инфо:   </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeInputName}
          defaultValue={name}
          // value={name}
          placeholder="Краткое описание работы..."
        />
      </View>

      <View style={styles.wrap}>
        <Text style={styles.text}>Сумма:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeInputAmount}
          defaultValue={String(sum)}
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