import * as Types from './../constants/ActionTypes'



var initState = []
const actorReducer = (state=initState, action) =>{
    var index = -1

    switch (action.type) {
        case Types.GET_LIST_ACTORS:
            return [...action.actors]
        case Types.DELETE_ACTORS:
            return state.filter(el => el.id !== action.id)
        case Types.UPDATE_ACTORS:
            index = state.findIndex(actor => actor.id === action.actor.id)
            state[index] = action.actor
            return [...state]
        case Types.ADD_ACTORS:
            return [...state, action.actor]
        default:
            return [...state]
    }
}
export default actorReducer;