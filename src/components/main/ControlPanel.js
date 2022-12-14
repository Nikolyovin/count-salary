import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { choiceActiveMonth, requestActiveMonth } from '../../redux/app-reducer'
import { MONTH } from '../../helpers'

const ControlPanel = () => {
    const [activeButton, setActiveButton] = useState(MONTH.JANUARY)
    const dispatch = useDispatch()

    // const activeMonth = useSelector(state => state.app.activeMonth)
    // //actived activeMonth 
    // useEffect(() => {
    //     dispatch(requestActiveMonth())
    //     if (activeMonth) dispatch(choiceActiveMonth(activeMonth)) && setActiveButton(activeMonth)
    // }, [])

    // //added activeMonth in AsyncStorage
    // const save = async () => {
    //     try {
    //         await AsyncStorage.setItem('activeMonth', JSON.stringify(activeMonth))
    //     } catch (err) {
    //         Alert.alert(err.message)
    //     }
    // }

    // useEffect(() => {
    //     save()
    // }, [activeMonth])

    const onPressJanuary = () => dispatch(choiceActiveMonth(MONTH.JANUARY)) && setActiveButton(MONTH.JANUARY)
    const onPressFebruary = () => dispatch(choiceActiveMonth(MONTH.FEBRUARY)) && setActiveButton(MONTH.FEBRUARY)
    const onPressMarch = () => dispatch(choiceActiveMonth(MONTH.MARCH)) && setActiveButton(MONTH.MARCH)
    const onPressApril = () => dispatch(choiceActiveMonth(MONTH.APRIL)) && setActiveButton(MONTH.APRIL)
    const onPressMay = () => dispatch(choiceActiveMonth(MONTH.MAY)) && setActiveButton(MONTH.MAY)
    const onPressJune = () => dispatch(choiceActiveMonth(MONTH.JUNE)) && setActiveButton(MONTH.JUNE)
    const onPressJule = () => dispatch(choiceActiveMonth(MONTH.JULY)) && setActiveButton(MONTH.JULY)
    const onPressAugust = () => dispatch(choiceActiveMonth(MONTH.AUGUST)) && setActiveButton(MONTH.AUGUST)
    const onPressSeptember = () => dispatch(choiceActiveMonth(MONTH.SEPTEMBER)) && setActiveButton(MONTH.SEPTEMBER)
    const onPressOctouber = () => dispatch(choiceActiveMonth(MONTH.OCTOBER)) && setActiveButton(MONTH.OCTOBER)
    const onPressNovember = () => dispatch(choiceActiveMonth(MONTH.NOVEMBER)) && setActiveButton(MONTH.NOVEMBER)
    const onPressDesember = () => dispatch(choiceActiveMonth(MONTH.DECEMBER)) && setActiveButton(MONTH.DECEMBER)
    const onPressAll = () => dispatch(choiceActiveMonth(MONTH.ALL)) && setActiveButton(MONTH.ALL)

    return (
        <View style={styles.controlPanel}>
            <ScrollView horizontal contentContainerStyle={styles.controlPanelWrap}>
                <TouchableOpacity style={activeButton == MONTH.JANUARY ? styles.activeButton : styles.button} onPress={onPressJanuary}>
                    <Text style={activeButton == MONTH.JANUARY ? styles.text : null} >????????????</Text>
                </TouchableOpacity>
                <TouchableOpacity style={activeButton == MONTH.FEBRUARY ? styles.activeButton : styles.button} onPress={onPressFebruary}>
                    <Text style={activeButton == MONTH.FEBRUARY ? styles.text : null}>??????????????</Text>
                </TouchableOpacity>
                <TouchableOpacity style={activeButton == MONTH.MARCH ? styles.activeButton : styles.button} onPress={onPressMarch}>
                    <Text style={activeButton == MONTH.MARCH ? styles.text : null}>????????</Text>
                </TouchableOpacity>
                <TouchableOpacity style={activeButton == MONTH.APRIL ? styles.activeButton : styles.button} onPress={onPressApril}>
                    <Text style={activeButton == MONTH.APRIL ? styles.text : null}>????????????</Text>
                </TouchableOpacity>
                <TouchableOpacity style={activeButton == MONTH.MAY ? styles.activeButton : styles.button} onPress={onPressMay}>
                    <Text style={activeButton == MONTH.MAY ? styles.text : null}>??????</Text>
                </TouchableOpacity>
                <TouchableOpacity style={activeButton == MONTH.JUNE ? styles.activeButton : styles.button} onPress={onPressJune}>
                    <Text style={activeButton == MONTH.JUNE ? styles.text : null}>????????</Text>
                </TouchableOpacity>
                <TouchableOpacity style={activeButton == MONTH.JULY ? styles.activeButton : styles.button} onPress={onPressJule}>
                    <Text style={activeButton == MONTH.JULY ? styles.text : null}>????????</Text>
                </TouchableOpacity>
                <TouchableOpacity style={activeButton == MONTH.AUGUST ? styles.activeButton : styles.button} onPress={onPressAugust}>
                    <Text style={activeButton == MONTH.AUGUST ? styles.text : null}>????????????</Text>
                </TouchableOpacity>
                <TouchableOpacity style={activeButton == MONTH.SEPTEMBER ? styles.activeButton : styles.button} onPress={onPressSeptember}>
                    <Text style={activeButton == MONTH.SEPTEMBER ? styles.text : null}>????????????????</Text>
                </TouchableOpacity>
                <TouchableOpacity style={activeButton == MONTH.OCTOBER ? styles.activeButton : styles.button} onPress={onPressOctouber}>
                    <Text style={activeButton == MONTH.OCTOBER ? styles.text : null}>??????????????</Text>
                </TouchableOpacity>
                <TouchableOpacity style={activeButton == MONTH.NOVEMBER ? styles.activeButton : styles.button} onPress={onPressNovember}>
                    <Text style={activeButton == MONTH.NOVEMBER ? styles.text : null}>????????????</Text>
                </TouchableOpacity>
                <TouchableOpacity style={activeButton == MONTH.DECEMBER ? styles.activeButton : styles.button} onPress={onPressDesember}>
                    <Text style={activeButton == MONTH.DECEMBER ? styles.text : null}>??????????????</Text>
                </TouchableOpacity>
                <TouchableOpacity style={activeButton == MONTH.ALL ? styles.activeButton : styles.button} onPress={onPressAll}>
                    <Text style={activeButton == MONTH.ALL ? styles.text : null}>???? ??????</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default ControlPanel

const styles = StyleSheet.create({
    controlPanel: {
        backgroundColor: '#eff0f5',
        borderBottomWidth: 3,
        borderBottomColor: '#00a8b8',
    },
    controlPanelWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 55,
        paddingHorizontal: 5,
    },
    text: {
        color: 'white',
    },
    activeButton: {
        backgroundColor: '#00a8b8',
        borderRadius: 15,
        width: 70,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 70,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    }
})