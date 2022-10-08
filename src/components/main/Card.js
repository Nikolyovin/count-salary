import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removePayment } from '../../redux/app-reducer'
import iconClose from '../../../assets/close.png'

const Card = ({ date, id, name, sum }) => {
    const dispatch = useDispatch()
    const onPressDelete = () => dispatch(removePayment(id))

    return (
        <View style={styles.conteiner}>
            <View style={styles.cardWrap}>
                <View style={styles.textNameDateWrap}>
                    <Text style={styles.date}>{date}</Text>
                    <Text style={styles.name}>{name}</Text>
                </View>
                <View style={styles.cardFooter}>

                    <Text style={styles.sum}>{sum} р.</Text>
                </View>
                <TouchableOpacity style={styles.buttonDelete} onPress={onPressDelete} >
                    <Image
                        style={styles.buttonDeleteIcon}
                        source={iconClose}
                    />
                    {/* <Text style={styles.buttonDeleteIcon}>X</Text> */}
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({

    cardWrap: {
        padding: 10,
        borderColor: '#edeff1',
        backgroundColor: '#eff0f5',
        borderWidth: 3,
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 20,
        flexDirection: 'row',

    },
    textNameDateWrap: {
        // alignItems: 'center',
        flex: 1,
    },
    date: {
        fontWeight: 'bold',
    },
    name: {
        color: '#757575',
    },
    cardFooter: {
        justifyContent: 'flex-end'
    },

    sum: {
        color: '#00a8b8',

    },
    buttonDelete: {
        // backgroundColor: 'green',
        width: 20,
        position: 'absolute',
        right: 15
    },
    buttonDeleteIcon: {
        width: 30,
        height: 30
    }
})