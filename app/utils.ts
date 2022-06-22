import {Dimensions} from "react-native";
import {stateType} from "./screens/HomeScreen";

export const W = (percentage: number) => Dimensions.get('window').width / 100 * percentage;

export const findWinner = (state: stateType) => {
    const play = state.turn === 'X' ? 'O' : 'X';
    const {ticks} = state;
    const row0 = ticks['00'] === play && ticks['01'] === play && ticks['02'] === play
    const row1 = ticks['10'] === play && ticks['11'] === play && ticks['12'] === play
    const row2 = ticks['20'] === play && ticks['21'] === play && ticks['22'] === play
    const col0 = ticks['00'] === play && ticks['10'] === play && ticks['20'] === play
    const col1 = ticks['01'] === play && ticks['11'] === play && ticks['21'] === play
    const col2 = ticks['02'] === play && ticks['12'] === play && ticks['22'] === play
    const diagonalA = ticks['00'] === play && ticks['11'] === play && ticks['22'] === play
    const diagonalB = ticks['02'] === play && ticks['11'] === play && ticks['20'] === play
    const isWin = row0 || row1 || row2 || col0 || col1 || col2 || diagonalA || diagonalB
    if (isWin)
        return `${play} WIN`
    else if (Object.entries(ticks).length === 9)
        return 'DRAW'
    else
        return 'CONTINUE'
}