import { Image, StyleSheet, Text, TouchableOpacity, View, AsyncStorage } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removePayment } from '../../redux/app-reducer'
import ButtonClose from '../common/ButtonClose'

const Card = ({ date, id, name, sum }) => {
    const dispatch = useDispatch()
    const payments = useSelector(state => state.app.payments)

    const remove = async () => {          //удаление происходит путем апдейта payments
        try {
            await AsyncStorage.setItem('payments', JSON.stringify(payments))
            keys = await AsyncStorage.getAllKeys()
            console.log('keys', keys);
        } catch (err) {
            Alert.alert(err.message)
        }
    }
    useEffect(() => {
        remove()
    }, [payments])

    const onPress = () => {
        dispatch(removePayment(id))
        // remove()


    }

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
                <View style={styles.button} >
                    <ButtonClose onPress={onPress} />
                </View>
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
    button: {
        position: 'absolute',
        right: 15
    }
})