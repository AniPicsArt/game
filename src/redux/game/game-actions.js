import * as actionTypes from './game-types';

export const changeGameStatusToStop = payload => ({
    type: actionTypes.SET_STOP_GAME,
    payload,
});

