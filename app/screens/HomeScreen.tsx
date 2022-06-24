import React, {useReducer, useEffect} from 'react'
import {Text, View, StyleSheet, Alert} from 'react-native'

import {Row} from '../components'
import {W, findWinner} from "../utils";
import {theme} from "../theme";

export interface stateType {
    turn: string,
    ticks: Record<string, string>,
    xWins: number,
    oWins: number
}

const initialState = {turn: 'X', ticks: {}, xWins: 0, oWins: 0};

function reducer(state: stateType, action: Record<string, string>) {
    switch (action.type) {
        case 'X':
            return {...state, turn: 'O', ticks: {...state.ticks, [action.tickIndex]: action.type}};
        case 'O':
            return {...state, turn: 'X', ticks: {...state.ticks, [action.tickIndex]: action.type}};
        case 'PLAY_AGAIN':
            let xWins = state.xWins;
            let oWins = state.oWins;
            if (action.winner === 'X WIN')
                xWins += 1;
            else if (action.winner === 'O WIN')
                oWins += 1
            return {...state, ticks: {}, turn: 'X', xWins, oWins};
        default:
            throw new Error('Unknown action');
    }
}

export const TicksDispatch = React.createContext<any>(initialState);

const HomeScreen = () => {
    const rows = [0, 1, 2];
    const [state, dispatch] = useReducer(reducer, initialState);
    const xColor = state.turn === 'X' ? theme.xColor : theme.xColorDim
    const oColor = state.turn === 'O' ? theme.oColor : theme.oColorDim
    useEffect(() => {
        const winner = findWinner(state)
        if (winner !== 'CONTINUE') {
            Alert.alert('GAME OVER', winner, [{
                text: 'Play Again',
                onPress: () => dispatch({type: 'PLAY_AGAIN', tickIndex: '', winner})
            }])
        }
    }, [state.turn])
    return (
        <View style={s.view} testID='HomeScreen'>
            <View style={s.header}>
                <View>
                    <Text style={[s.tick, {color: xColor}]}>X</Text>
                    <View style={[s.line, {backgroundColor: state.turn === 'X' ? xColor : 'transparent'}]}/>
                    <Text style={[s.playerText, {color: xColor}]}>Player</Text>
                </View>
                <Text style={s.score}>{state.xWins} : {state.oWins}</Text>
                <View>
                    <Text style={[s.tick, {color: oColor}]}>O</Text>
                    <View style={[s.line, {backgroundColor: state.turn === 'O' ? oColor : 'transparent'}]}/>
                    <Text style={[s.playerText, {color: oColor}]}>Player</Text>
                </View>
            </View>
            <TicksDispatch.Provider value={{state, dispatch}}>
                {rows.map(rIndex => <Row key={rIndex.toString()} rIndex={rIndex}/>)}
            </TicksDispatch.Provider>
        </View>
    )

}


const s = StyleSheet.create({
    view: {
        backgroundColor: '#000000',
        flex: 1,
        alignItems: 'center',
        paddingTop: 60
    },
    header: {
        flexDirection: 'row',
        width: W(70),
        justifyContent: 'space-between',
        marginBottom: 40
    },
    line: {
        width: 60,
        height: 4,
        alignSelf: 'center'
    },
    playerText: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 8
    },
    tick: {
        fontSize: 40,
        textAlign: 'center'
    },
    score: {
        fontSize: 40,
        color: '#ffffff'
    }
})

export default HomeScreen;
