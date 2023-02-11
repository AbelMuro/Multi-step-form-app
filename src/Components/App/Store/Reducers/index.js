import {PersonalInfoReducer, PlanReducer, AddOnReducer,StepReducer} from "./Reducers.js";
import {combineReducers} from 'redux';

const Reducer = combineReducers({
        personalInfo: PersonalInfoReducer,
        plan: PlanReducer,
        AddOn: AddOnReducer,
        step: StepReducer
})

export default Reducer
