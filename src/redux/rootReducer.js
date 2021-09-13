import { combineReducers } from "redux";
import gameReducer from "./game/game-reducer";

const rootReducer = combineReducers({gameReducer});

export default rootReducer;

