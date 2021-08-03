import * as Types from './../constants/ActionTypes'
import callAPI from './../utils/ApiCaller'


export const actGetListActorsRequest = () => {
    return (dispatch) => {
        return callAPI('actors', 'GET', null).then(res => {
            dispatch(actGetListActors(res.data))            
        })
    }
}

export const actGetListActors = (actors) =>{
    return {
        type : Types.GET_LIST_ACTORS,
        actors
    }
}

export const actDeleteActors = (id) =>{
    return {
        type : Types.DELETE_ACTORS,
        id
    }
}

export  const actDeleteActorRequest = (id) => {
    return dispatch => {
        return  callAPI(`actors/${id}`,'DELETE',null).then(res => {
            dispatch(actDeleteActors(id))
        })
    }
}

export const actAddActor = (actor) => {
    return {
        type: Types.ADD_ACTORS,
        actor
    }
}

export const actAddActorRequest = (actor) => {
    return dispatch => {
        return callAPI(`actors`, 'POST', {
            first_name : actor.first_name,
            last_name : actor.last_name
        }).then(res=> {
            dispatch(actAddActor(actor))
        })
    }
}

export const actGetActor = (actor) => {
    return {
        type: Types.EDIT_ACTOR,
        actor
    }
}

export const actGetActorRequest = (id) => {
    return dispatch => {
        return callAPI(`actors/${id}`, 'GET', null).then(res=> {
            dispatch(actGetActor(res.data))
        })
    }
}

export const actUpdateActor = (actor) =>{
    return {
        type: Types.UPDATE_ACTORS,
        actor
    }
}

export const actUpdateActorRequest = actor => {
    return dispatch => {
        return callAPI(`actors/${actor.id}`, 'PUT', actor).then(res=> {
            dispatch(actUpdateActor(actor))
        })
    }
}