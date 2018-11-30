// Reducer with the switch condition
export default function(state={}, action){
    switch(action.type){
        case 'FETCH_WEATHER':
            return {...state,weather:action.payload.list};
        default:
            return state;
    }
}