import { SET_STOP_GAME,
    SET_END_GAME,
    SET_SNAKE,
    SET_DIRECTION
} from "./game-types";

const gameReducer = (state = {
    stopGame: false,
    endGame: false,
    snake: [{x:0,y:0},{x:1,y:0}],
    direction: 'right',

}, action) => {
    switch (action.type) {
        case (SET_STOP_GAME): {
            return {
                ...state,
                stopGame: action.payload,
            }
        };
        case (SET_END_GAME): {
            return {
                ...state,
                endGame: action.payload,
            }
        };
        case (SET_SNAKE): {
            return {
                ...state,
                snake: action.payload,
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
