import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ModalButtons = ({ onPressAdd, isNew, onPressUpdate }) => {
  return (
    <View>
        { 
          isNew 
            ?
              <TouchableOpacity style={styles.button} onPress = { onPressAdd } >
                <Text style={styles.text}>Добавить</Text>
              </TouchableOpacity>
            : 
              <TouchableOpacity style={styles.button} onPress = { onPress } >
                <Text style={styles.text}>Изменить</Text>
              </TouchableOpacity>
        }
    </View>
  )
}

export default ModalButtons

const styles = StyleSheet.create({
    button: {
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
})