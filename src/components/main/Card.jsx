import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Card = () => {
    const onPressDelete = () => console.log('delete');

    return (
        <View style = { styles.cardWrap }>
            <Text style = { styles.name }>Пион</Text>
            <Text style = { styles.date }>03.04.2023</Text>
            <Text style = { styles.sum }>15000 р.</Text>
            <TouchableOpacity style = { styles.buttonDelete } onPress = {onPressDelete} >
                <Image
                    style={styles.buttonDeleteIcon}
                    source='https://www.pngfind.com/pngs/m/90-904785_png-file-svg-close-button-icon-png-transparent.png'
                />
            </TouchableOpacity>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    cardWrap: {
        borderColor: 'black', 
        borderWidth: 1,
        marginTop: 5,
        // alignItems:'center',
        width:'80%'
      },
      textNameWrap: {
        alignItems:'center',
        
      },
    name: {

    },
    date: {

    },
    sum: {
        
    },
    buttonDelete: {

    },
    buttonDeleteIcon: {

    }
})