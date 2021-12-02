const initialState = {
    cities: [],
    city: {}
}

const citiesReducer  = (state = initialState, action) => {
    // console.log(action);
    // console.log(state);

    switch (action.type) {
    
        case 'ALL_CITIES':
            return {
                cities: action.payload
            }
        
        case 'FIND_CITY':
            const findOne = state.cities.find(city => city._id === action.payload.id)
            
            return{
                ...state,
                city: findOne
            }
        
        default:
            return state;
    }
}

export default citiesReducer