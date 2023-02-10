export function FormReducer(state = {plan: "", billing: ""}, action){
    switch(action.type){
       case "set":
            return {plan: action.plan, billing: action.billing};
       case "get":
            return state;
       default: 
            return state;
     }
}

export function StepReducer(state = 1, action){
     
     switch(action.type){
          case "change step": 
               return action.step;
          default:
               return state;
     }
}