export function PlanReducer(state = {plan: "", billing: ""}, action){
    switch(action.type){
       case "set plan":
            return {plan: action.plan, billing: action.billing};
       default: 
            return state;
     }
}

export function PersonalInfoReducer(state = {name: "", email: "", phone: ""}, action){
     switch(action.type){
          case "set personal info":
               return {name: action.name, email: action.email, phone: action.phone}
          default:
               return state;
     }
}

export function StepReducer(state = 1, action){
     
     switch(action.type){
          case "set step": 
               return action.step;
          default:
               return state;
     }
}