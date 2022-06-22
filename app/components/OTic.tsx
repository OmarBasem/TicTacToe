import React from 'react';
import {Text, StyleSheet, Platform} from "react-native";

import {W} from '../utils';
import {theme} from "../theme";

const OTic = () => {
    return (
        <Text style={s.x}>O</Text>
    )
}

const s = StyleSheet.create({
    x: {
        color: theme.oColor,
        fontSize: W(25),
        bottom: Platform.OS === 'ios' ? 4 : 16
    }
})

export default OTic;