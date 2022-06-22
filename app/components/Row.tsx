import React from 'react'
import {View, StyleSheet, Text} from 'react-native';

import Box from './Box'

const Row = ({rIndex}: {rIndex: number}) => {
    const col = [0,1,2]
    return (
        <View style={s.row}>
            {col.map(cIndex => <Box key={`${rIndex}-${cIndex}`} rIndex={rIndex} cIndex={cIndex} />)}
        </View>
    )
}

const s = StyleSheet.create({
    row: {
      flexDirection: 'row'
    }
})

export default Row;

