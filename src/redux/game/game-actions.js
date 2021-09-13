import * as actionTypes from './game-types';

export const changeGameState = payload => ({
    type: actionTypes.SET_STOP_GAME,
    payload,
});

