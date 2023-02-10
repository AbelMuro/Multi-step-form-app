import {PlanReducer, PersonalInfoReducer ,StepReducer} from "./Reducers.js";
import {combineReducers} from 'redux';

const Reducer = combineReducers({
        plan: PlanReducer,
        personalInfo: PersonalInfoReducer,
        step: StepReducer
})

export default Reducer
