import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ModalButtons = ({ onPressAdd, isNew, onPressUpdate }) => {
  return (
    <View style={styles.buttonWrap}>
      {
        isNew
          ?
          <TouchableOpacity style={styles.button} onPress={onPressAdd} >
            <Text style={styles.text}>Добавить</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity style={styles.button} onPress={onPressUpdate} >
            <Text style={styles.text}>Изменить</Text>
          </TouchableOpacity>
      }
    </View>
  )
}

export default ModalButtons

const styles = StyleSheet.create({
  buttonWrap: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 5,
    backgroundColor: '#00a8b8',
    width: '40%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  text: {
    color: 'white',
  },
})