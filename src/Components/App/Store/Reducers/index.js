import {PersonalInfoReducer, PlanReducer, AddOnReducer, TotalReducer, StepReducer} from "./Reducers.js";
import {combineReducers} from 'redux';

const Reducer = combineReducers({
        personalInfo: PersonalInfoReducer,
        plan: PlanReducer,
        AddOn: AddOnReducer,
        total: TotalReducer,
        step: StepReducer
})

export default Reducer
