import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Card = ({date, id, name, sum}) => {
    const onPressDelete = () => console.log('delete');
    // console.log('date:', date);
    // console.log('props::', props);
    return (
        <View style = { styles.cardWrap }>
            <View style = { styles.textNameWrap }>
                <Text style = { styles.name }>{name}</Text>
            </View>
            <View style = { styles.cardFooter }>
                <Text style = { styles.date }>{date}</Text>
                <Text style = { styles.sum }>{sum} р.</Text>
            </View>
            <TouchableOpacity style = { styles.buttonDelete } onPress = {onPressDelete} >
                {/* <Image
                    style={styles.buttonDeleteIcon}
                    source='https://www.pngfind.com/pngs/m/90-904785_png-file-svg-close-button-icon-png-transparent.png'
                /> */}
                <Text style = {styles.buttonDeleteIcon}>X</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    cardWrap: {
        padding: 10,
        borderColor: 'black', 
        borderWidth: 1,
        marginTop: 10,
        marginHorizontal: 30,
        // alignItems:'center',
        // width:'80%'
    },
    textNameWrap: {
        alignItems:'center',
        
    },
    name: {

    },
    cardFooter: {
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    date: {

    },
    sum: {
        
    },
    buttonDelete: {
        backgroundColor: 'green',
        width: 20,
        position: 'absolute',
        right: 0
    },
    buttonDeleteIcon: {
        fontSize: 18
    }
})