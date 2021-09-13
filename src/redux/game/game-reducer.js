import { SET_STOP_GAME } from "./game-types";


const gameReducer = (state = {
    stopGame: false,
}, action) => {
    switch (action.type) {
        case (SET_STOP_GAME): {
            return {
                ...state,
                stopGame: action.payload,
            }
        };
        default: {
            return {...state}
        }

    }
}


export default gameReducer;
