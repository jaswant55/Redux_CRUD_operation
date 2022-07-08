export const SUBMIT=(form)=> {
    // console.log("Form received int jte actiom creator",form);
    return{
        type: "SUBMIT_FORM",
        payload: form
    }
}


export const REMOVE=(index)=>{
    console.log("index received into action creator",index)
    return{
        type: "REMOVE_FORM",
        payload: index
    }
}


export const update=(form)=> {
    console.log('update receved into action',form)
    
    return {
        type:"UPDATE_FORM",
        payload: form
    }
}
