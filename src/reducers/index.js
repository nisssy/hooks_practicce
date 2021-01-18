import {DELETE_EVENT} from '../actions'
import {CREATE_EVENT} from '../actions'
import {DELETE_ALL_EVENTS} from '../actions'



const events = (state = [], action) => {
    switch(action.type) {
        case CREATE_EVENT:
            const event = { title: action.title, body: action.body}
            const length = state.length
            
            console.log(state.length)
            console.log(state[length - 1])
            const id = length === 0? 1 : state[length - 1].id + 1
            return [...state, {id, ...event}]
        case DELETE_EVENT:
            return state.filter( event => event.id !== action.id)
        case DELETE_ALL_EVENTS:
            return []
        default:
            return state
    }
}

export default events