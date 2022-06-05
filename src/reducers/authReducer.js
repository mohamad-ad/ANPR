import {SIGN_IN, SIGN_OUT} from '../actions/types'
const INIT = {
    user : null
}
// eslint-disable-next-line
export default (state = INIT, action)=>{
    switch(action.type){
        case SIGN_IN:
            return {...state, user:action.payload}
        case SIGN_OUT:
            return {...state, user: null}
        default:
            return state
    }
}