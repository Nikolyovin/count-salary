import { Image, Modal, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isShowModal } from '../../redux/app-reducer'

const ModalAddInputs = ({ onChangeInputDate, onChangeInputAmount, date, amount, name, onChangeInputName }) => {

  return (
    <>
      <View style = { styles.name }>
          <Text style = { styles.nameText }>Имя:</Text>
          <TextInput
              style={styles.nameInput}
              onChangeText={onChangeInputName}
              value={name}
              placeholder="Название проекта"
          />
      </View>
      <View style = { styles.date }>
      
          <Text style = { styles.dateText }>Дата :</Text>
          <TextInput
              style={styles.dateInput}
              onChangeText={onChangeInputDate}
              value={date}
              placeholder="24.01.2020"
              placeholderTextColor="#efefef"
              keyboardType="numeric"
          />
      </View>
      <View style = { styles.amount }>
          <Text style = { styles.amountText }>Сумма :</Text>
          <TextInput
              style={styles.amountInput}
              onChangeText={onChangeInputAmount}
              value={amount}
              placeholder="10000"
              keyboardType="numeric"
          />
      </View>
    </>
  )
};

export default ModalAddInputs

const styles = StyleSheet.create({
    
    date:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: "center",
    },
    dateInput: {
      borderColor: 'black',
      borderWidth: 1,
      color: 'efefef',
      width: 100
    },
    amount:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: "center",
    },
    amountInput: {
      borderColor: 'black',
      borderWidth: 1,
      color: 'efefef',
      width: 100
    },
   
  });