import { GETCONTACTS } from "../actiontype/ContactTypes";

const initialState ={
    contacts:[]
}
const ContactReducer = (state=initialState , action) =>  {
    switch(action.type){
    case GETCONTACTS:
        return {...state, contacts :action.payload.contacts}

    default : return state };
}
export default ContactReducer ; 