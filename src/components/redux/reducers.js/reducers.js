const INIT_STATE={
    forms:[]
}


export const formreducer =( state=INIT_STATE, action)=>{
console.log("REduceer receving the data",state.forms);

    switch(action.type){
        case "SUBMIT_FORM":
            return{
                ...state,
                forms:[...state.forms, action.payload]
            } 
        case "REMOVE_FORM":
             return { 
                ...state,
                forms: state.forms.filter((form,index)=> form._id !== action.payload)

                
            }

        case "UPDATE_FORM":
                    return {
                        ...state,
                        forms: state.forms.findIndex()
                        
                    }
           
                    
                    
                
                
                 
                  
                   
            
            default: 
                 return state

                 
             
    }
}
