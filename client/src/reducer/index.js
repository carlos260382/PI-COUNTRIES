const initialState = {
countries : [],

}

function rootReducer (state = initialState, action){
switch (action.payload) {
    case GET_COUNTRY:
        return {
            ...state, 
            countries : action.payload
        }
    default:
        return state;
}

};

export default rootReducer;