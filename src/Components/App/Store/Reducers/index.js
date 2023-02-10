import {FormReducer, StepReducer} from "./Reducers.js";
import {combineReducers} from 'redux';

const Reducer = combineReducers({
        form: FormReducer,
        step: StepReducer
})

export default Reducer
