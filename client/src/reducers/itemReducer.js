// where the actual state is going to go
// store actions for your components
import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM} from '../actions/types'

const initialState = {
    items: [
        {id: uuid(), name: "Oil Change"},
        {id: uuid(), name: "Wiper Fluid"},
        {id: uuid(), name: "Tire Change"},
        {id: uuid(), name: "Brake Service"}
    ]
}

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        default:
            return state;
    }
}