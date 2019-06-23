import { combineReducers } from "redux";
import TestReducer from "./TestReducer";

const RootReducer = combineReducers({
    TestReducer: TestReducer,
});

export default RootReducer;
