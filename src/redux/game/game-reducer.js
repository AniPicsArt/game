import { SET_STOP_GAME, SET_DIRECTION } from "./game-types";


const gameReducer = (state = {
    stopGame: false,
    direction: 'right',
}, action) => {
    switch (action.type) {
        case (SET_STOP_GAME): {
            return {
                ...state,
                stopGame: action.payload,
            }
        };
        case (SET_DIRECTION): {
            return {
                ...state,
                direction: action.payload,
            }
        }
        default: {
            return {...state}
        }

    }
}


export default gameReducer;
