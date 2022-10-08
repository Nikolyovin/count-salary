import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { choiceActiveManth } from '../../redux/app-reducer'

const ControlPanel = () => {
    const dispatch = useDispatch()
    const onPressJanuary = () => dispatch(choiceActiveManth('Январь'))
    const onPressFebruary = () => dispatch(choiceActiveManth('Февраль'))
    const onPressApril = () => dispatch(choiceActiveManth('Апрель'))
    const onPressMarch = () => dispatch(choiceActiveManth('Март'))
    const onPressMay = () => dispatch(choiceActiveManth('Май'))
    const onPressJune = () => dispatch(choiceActiveManth('Июнь'))
    const onPressJule = () => dispatch(choiceActiveManth('Июль'))
    const onPressAugust = () => dispatch(choiceActiveManth('Август'))
    const onPressSeptember = () => dispatch(choiceActiveManth('Сентябрь'))
    const onPressOctouber = () => dispatch(choiceActiveManth('Октябрь'))
    const onPressNovember = () => dispatch(choiceActiveManth('Ноябрь'))
    const onPressDesember = () => dispatch(choiceActiveManth('Декабрь'))

    return (
        <View style={styles.controlPanelWrap}>
            <TouchableOpacity style={styles.button} onPress={onPressJanuary}>
                <Text style={styles.text}>Январь</Text>
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
        height: 60,
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