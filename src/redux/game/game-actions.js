import * as actionTypes from './game-types';

export const ChangeGameState = payload => ({
    type: actionTypes.SET_STOP_GAME,
    payload,
});

export const FinishGame = payload => ({
    type: actionTypes.SET_END_GAME,
    payload,
})

export const SnakePosition = payload => ({
    type: actionTypes.SET_SNAKE,
    payload,
})

export const Direction = payload => ({
    type: actionTypes.SET_DIRECTION,
    payload,
})

