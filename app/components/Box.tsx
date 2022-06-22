import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from "react-native";

import XTic from "./XTic";
import OTic from "./OTic";
import {W} from '../utils'
import {TicksDispatch} from "../screens/HomeScreen";

const Box = ({rIndex, cIndex}: { rIndex: number, cIndex: number }) => {
    const {state, dispatch} = useContext(TicksDispatch);
    const tick = state.ticks[`${rIndex}${cIndex}`]
    return (
        <TouchableOpacity testID={`${rIndex}${cIndex}`} style={s.box} onPress={() => {
            if (!state.ticks[`${rIndex}${cIndex}`])
                dispatch({type: state.turn, tickIndex: `${rIndex}${cIndex}`})
        }}>
            {tick === 'X' ? <XTic/> : tick === 'O' ? <OTic/> : null}
        </TouchableOpacity>
    )
}


const s = StyleSheet.create({
    box: {
        width: W(30),
        height: W(30),
        borderWidth: 2,
        borderColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Box;