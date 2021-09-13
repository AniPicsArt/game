import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import gameReducer from "./game/game-reducer";

const store = createStore(gameReducer, composeWithDevTools());

export default store;
