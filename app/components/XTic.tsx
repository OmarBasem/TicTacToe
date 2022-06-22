import React from 'react';
import {Text, StyleSheet, Platform} from "react-native";

import {W} from '../utils'
import {theme} from "../theme";

const XTic = () => {
    return (
        <Text style={s.x}>X</Text>
    )
}

const s = StyleSheet.create({
    x: {
        color: theme.xColor,
        fontSize: W(25),
        bottom: Platform.OS === 'ios' ? 4 : 16
    }
})

export default XTic;