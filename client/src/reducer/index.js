import {
GET_COUNTRY,
GET_ACTIVITIES,
SEARCH_BY_NAME,
GET_COUNTRY_DETAL,
FILTER_BY_CONTINENT,
FILTER_BY_ACTIVITY,
SORT,
PAGED,

  } from "../actions/index";

const initialState = {
countries: [],
filterCountries: [],
countryDetal: [],
activities:[],
paginaActual:Number("1"),
}

function rootReducer (state = initialState, action){
switch (action.type) {
    case GET_COUNTRY:
        return {
            ...state, 
            countries : action.payload, //se guarda en el estado countries q es un array
            filterCountries: action.payload,
        }
        case SEARCH_BY_NAME:
            return {
              ...state,
              filterCountries: action.payload 
            };
          case GET_COUNTRY_DETAL:
            return {
              ...state,
              countryDetal: action.payload
            };
          case FILTER_BY_CONTINENT:
            if (action.payload === "All") { //si son todos se guarda en el estado
              return {
                ...state,
                filterCountries: state.countries,
              };
            } else {                      //si no son todos se busca dentro del estado de todos los paises
              return {                    // y se filtra unicamente el que incluya el continente q se pasa en la action 
                ...state,
                filterCountries:state.countries.filter(el=>action.payload.includes(el.continent))
                
              };
            }
            case PAGED:
              return{
                ...state,
                paginaActual:action.payload
              }
            case GET_ACTIVITIES:
               return {
                ...state,
                activities:action.payload
              };
              case FILTER_BY_ACTIVITY:
                
                return{ // en el stado de todos los paises  
                  ...state, //y se mapea el de las actividades para sacar los que incluyan en el nombre la action
                  filterCountries:state.countries.filter(el => el.activities.map(e=>e.name).includes(action.payload))
                } 
      
          case SORT: //para ordenar se mira si se busca el orden ascendente o descendente
            if (action.payload === "Population Asc.") {
              return {
                ...state,
                filterCountries: state.filterCountries.sort(
                  (a, b) => a.population - b.population
                ), 
              };
            }
            if (action.payload === "Population Desc.") {
              return {
                ...state,
                filterCountries: state.filterCountries.sort(
                  (a, b) => b.population - a.population
                ),
              };
            }
            if (action.payload === "ASC") { 
              return {
                ...state,
                filterCountries: state.filterCountries.sort((a, b) => {
                  if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return -1;
                  }
                  if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1;
                  }
                  return 0;
                }),
              };
            }
            if (action.payload === "DESC") {
              return {
                ...state,
                filterCountries: state.filterCountries.sort((a, b) => {
                  if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    
                    return -1;
                  }
                  if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    
                    return 1;
                  }
                  return 0;
                }),
              };
            }
            return {
              ...state,
            };



    default:
        return state;
}

};

export default rootReducer;