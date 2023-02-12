export function PersonalInfoReducer(state = {name: "", email: "", phone: ""}, action){
     switch(action.type){
          case "set personal info":
               return {name: action.name, email: action.email, phone: action.phone}
          default:
               return state;
     }
}

export function PlanReducer(state = {plan: "Arcade", billing: "Monthly", price: "9"}, action){
    switch(action.type){
       case "set plan":
            return {plan: action.plan, billing: action.billing, price: action.price};
       default: 
            return state;
     }
}

export function AddOnReducer(state = {"Online Service" : false, "Larger Storage" : false, "Customizable Profile" : false}, action) {
     switch(action.type){
          case "set add ons":
               return {"Online Service": action["Online Service"], 
                      "Larger Storage": action["Larger Storage"], 
                      "Customizable Profile": action["Customizable Profile"]}
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

