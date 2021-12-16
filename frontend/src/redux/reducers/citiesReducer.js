const initialState = {
    cities: [],
    city: {},
    filteredCities: []
}

const citiesReducer  = (state = initialState, action) => {

    switch (action.type) {
    
        case 'ALL_CITIES':
            return {
                ...state,
                cities: action.payload,
                filteredCities: action.payload
            }
        
        case 'FIND_CITY':
            
            const findOne = state.cities.find(city => city._id === action.payload.id)
            
            return{
                ...state,
                city: findOne
            }


        case "FILTER": 
            const {place, value} = action.payload

            let lugar  
    
            place ? lugar = "cityName" : lugar = "countryName"
        
            let filteredArray = state.cities.filter(city =>
              city[lugar].toLowerCase().startsWith(value.toLowerCase().trim())
            )
            
            return{
                ...state,
                filteredCities: filteredArray
            }

        default:
            return state;
    }
}

export default citiesReducer