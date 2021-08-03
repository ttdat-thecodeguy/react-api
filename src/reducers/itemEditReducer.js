import * as Types from '../constants/ActionTypes'

var initState = {}

const itemEditReducer = (state=initState, action) => {
    switch (action.type) {
        case Types.EDIT_ACTOR:
            return action.actor
        default:
            return state;
    }
}
export default itemEditReducer;