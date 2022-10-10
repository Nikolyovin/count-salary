import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { choiceActiveMonth } from '../../redux/app-reducer'

const ControlPanel = () => {
    const [ activeButton, setActiveButton ] = useState(MONTH.JANUARY)

    const dispatch = useDispatch()
    const onPressJanuary = () => dispatch(choiceActiveMonth(MONTH.JANUARY))
    const onPressFebruary = () => dispatch(choiceActiveMonth(MONTH.FEBRUARY))
    const onPressMarch = () => dispatch(choiceActiveMonth(MONTH.MARCH))
    const onPressApril = () => dispatch(choiceActiveMonth(MONTH.APRIL))
    const onPressMay = () => dispatch(choiceActiveMonth('Май'))
    const onPressJune = () => dispatch(choiceActiveMonth('Июнь'))
    const onPressJule = () => dispatch(choiceActiveMonth('Июль'))
    const onPressAugust = () => dispatch(choiceActiveMonth('Август'))
    const onPressSeptember = () => dispatch(choiceActiveMonth('Сентябрь'))
    const onPressOctouber = () => dispatch(choiceActiveMonth('Октябрь'))
    const onPressNovember = () => dispatch(choiceActiveMonth('Ноябрь'))
    const onPressDesember = () => dispatch(choiceActiveMonth('Декабрь'))

    return (
        <View style={styles.controlPanelWrap}>
            <TouchableOpacity  onPress={onPressJanuary}>
                <Text >Январь</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onPressFebruary}>
                <Text style={styles.text}>Февраль</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onPressMarch}>
                <Text style={styles.text}>Март</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onPressApril}>
                <Text style={styles.text}>Апрель</Text>
            </TouchableOpacity>
            {/*<TouchableOpacity style={styles.button} onPress={onPressMay}>
                <Text style={styles.text}>Май</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onPressJune}>
                <Text style={styles.text}>Июнь</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onPressJule}>
                <Text>Июль</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onPressAugust}>
                <Text>Август</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onPressSeptember}>
                <Text>Сентябрь</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onPressOctouber}>
                <Text>Октябрь</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onPressNovember}>
                <Text>Ноябрь</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onPressDesember}>
                <Text>Декабрь</Text>
            </TouchableOpacity> */}
        </View>
    )
}

export default ControlPanel

const styles = StyleSheet.create({
    controlPanelWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#eff0f5',
        height: 50,
        marginHorizontal: 10,
        borderRadius: 20,
    },
    text: {
        color: 'white',
    },
    button: {
        backgroundColor: '#00a8b8',
        borderRadius: 15,
        width: 70,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
})